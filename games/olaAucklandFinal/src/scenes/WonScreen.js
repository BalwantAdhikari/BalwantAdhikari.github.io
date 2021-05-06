import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class WonScreen extends Phaser.Scene
{
    constructor()
    {
        super('won-screen')
    }

    create()
    {  
        this.congratsSound = this.sound.add('congratsSound')

        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background")
        Align.scaleToGameW(this.background, 1)
        this.background.setVisible(false)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.background.scaleX * this.background.width
        this.bgHeight = this.background.scaleX * this.background.width

        this.controlBoard = this.add.graphics()
        this.controlBoard.fillStyle(0xF2F2F2, 0.7)
        this.controlBoard.fillRect(0, (this.height - this.bgHeight) / 2, this.bgWidth, this.bgHeight)

        this.linesCongrate = this.add.image(this.scale.width/2, this.scale.height/2, "linesCongrate")
        Align.scaleToGameW(this.linesCongrate, 1)

        this.wonImage = this.add.image(this.scale.width/2, this.scale.height/2, "wonImage")
        Align.scaleToGameW(this.wonImage, 0)

        this.congratsSound.play()

        this.tweens.add({
            targets: this.wonImage,
            scale: this.background.scale,
            duration: 500,
            ease: 'Linear'
        })


    }

}