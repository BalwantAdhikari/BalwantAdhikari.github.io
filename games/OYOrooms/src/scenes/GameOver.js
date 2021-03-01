import Phaser from '../lib/phaser.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'

export default class GameOver extends Phaser.Scene
{
    constructor()
    {
        super('game-over')
    }

    preload()
    {
        this.load.image('game-over-screen', 'assets/gameOver.png')
    }

    create()
    {
        this.gameOverScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'game-over-screen')

        Align.scaleToGameW(this.gameOverScreen, 1)

        this.clickButton = this.add.graphics().setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains)

        this.clickButton.fillStyle(0x000000, 0.2)
        this.clickButton.fillRoundedRect(0, 0, 200, 80)
        

        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()

        this.aGrid.placeAtIndex(72, this.clickButton)


        this.clickButton.on('pointerup', function(pointer, localX, localY, event){
            this.scene.start('game')
        }, this);
        
    }
}