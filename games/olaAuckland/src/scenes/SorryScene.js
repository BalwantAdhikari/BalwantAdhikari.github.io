import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class SorryScreen extends Phaser.Scene
{
    count = 0

    constructor()
    {
        super('sorry-screen')
    }

    create()
    {
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
        this.controlBoard.fillStyle(0xF2F2F2, 0.5)
        this.controlBoard.fillRect(0, (this.height - this.bgHeight) / 2, this.bgWidth, this.bgHeight)

        this.lines = this.add.image(this.scale.width/2, this.scale.height/2, "lines")
        Align.scaleToGameW(this.lines, 1)

        this.sorryMsg = this.add.image(this.scale.width/2, this.scale.height/2, "sorryMsg")
        Align.scaleToGameW(this.sorryMsg, 0)
        this.tryagainBlack = this.add.image(this.scale.width/2, this.scale.height/2, "tryagainBlack")
        Align.scaleToGameW(this.tryagainBlack, 1)
        this.tryagainGreen = this.add.image(this.scale.width/2, this.scale.height/2, "tryagainGreen")
        Align.scaleToGameW(this.tryagainGreen, 1)
        this.tryagainGreen.setVisible(false)

        this.tweens.add({
            targets: this.sorryMsg,
            scale: this.background.scale,
            duration: 500,
            ease: 'Linear'
        })

        this.input.on('pointerup', function(pointer) {
            this.scene.start('game');
            this.scene.stop();
        }, this)
    }

    update()
    {
        this.count += 1

        if(this.count % 20 == 0)
        {
            this.tryagainBlack.visible = !this.tryagainBlack.visible
            this.tryagainGreen.visible = !this.tryagainGreen.visible
        }
    }
}