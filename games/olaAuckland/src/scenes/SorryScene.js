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

        this.lines1 = this.add.image(this.scale.width/2, this.scale.height/2, "lines1")
        Align.scaleToGameW(this.lines1, 1)
        this.lines2 = this.add.image(this.scale.width/2, this.scale.height/2, "lines2")
        Align.scaleToGameW(this.lines2, 1)
        this.lines2.setVisible(false)

        this.sorryImage = this.add.image(this.scale.width/2, this.scale.height/2, "sorryImage")
        Align.scaleToGameW(this.sorryImage, 1)
        this.sorryMsg = this.add.image(this.scale.width/2, this.scale.height/2, "sorryMsg")
        Align.scaleToGameW(this.sorryMsg, 1)
    }

    update()
    {
        this.count += 1

        if(this.count % 20 == 0)
        {
            this.lines1.visible = !this.lines1.visible
            this.lines2.visible = !this.lines2.visible
        }
    }

}