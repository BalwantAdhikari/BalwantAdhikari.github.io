import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class SplashScreen extends Phaser.Scene
{
    count = 0

    constructor()
    {
        super('splash-screen')
    }

    create()
    {
        this.tapSound = this.sound.add('tapSound')

        this.blurredBackground = this.add.image(this.scale.width/2, this.scale.height/2, "blurredBackground")
        Align.scaleToGameW(this.blurredBackground, 1)

        this.splashImage = this.add.image(this.scale.width/2, this.scale.height/2, "openingMsg")
        Align.scaleToGameW(this.splashImage, 1)

        this.TTSblack = this.add.image(this.scale.width/2, this.scale.height/2, "TTSblack")
        Align.scaleToGameW(this.TTSblack, 1)

        this.TTSgreen = this.add.image(this.scale.width/2, this.scale.height/2, "TTSgreen")
        Align.scaleToGameW(this.TTSgreen, 1)
        this.TTSgreen.setVisible(false)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.blurredBackground.scaleX * this.blurredBackground.width
        this.bgHeight = this.blurredBackground.scaleX * this.blurredBackground.width


        // logo
        this.logo = this.add.image(0, 0, "logo")
        Align.scaleToGameW(this.logo, 0.207)
        this.logo.x = this.bgWidth - this.bgWidth / 7.2
        this.logo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

        this.input.on('pointerup', function(pointer) {
            this.tapSound.play()
            this.scene.start('game');
            this.scene.stop();
        }, this)
    }

    update()
    {
        this.count += 1

        if(this.count % 20 == 0)
        {
            this.TTSblack.visible = !this.TTSblack.visible
            this.TTSgreen.visible = !this.TTSgreen.visible
        }
    }

}