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
        // this.controlBoard = this.add.graphics()
        // const x = this.scale.width
        // const y = this.scale.height
        // this.controlBoard.fillStyle(0xF2F2F2, 0.2)
        // this.controlBoard.fillRect(0, 0, x, y)
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