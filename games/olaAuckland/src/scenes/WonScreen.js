import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class WonScreen extends Phaser.Scene
{
    count = 0
    
    constructor()
    {
        super('won-screen')
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

        this.wonImage = this.add.image(this.scale.width/2, this.scale.height/2, "wonImage")
        Align.scaleToGameW(this.wonImage, 1)
        this.wonMsg = this.add.image(this.scale.width/2, this.scale.height/2, "wonMsg")
        Align.scaleToGameW(this.wonMsg, 1)
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