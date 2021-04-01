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
       
    }

    create()
    {
        this.gameOverScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'game-over-screen')
        this.tryAgainBtn = this.add.image(0, 0, 'tryAgainBtn').setOrigin(0)

        Align.scaleToGameW(this.gameOverScreen, 1)
        Align.scaleToGameW(this.tryAgainBtn, 0.5)
        
        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()

        this.aGrid.placeAtIndex(72, this.tryAgainBtn)


        this.tryAgainBtn.setInteractive().on('pointerup', function(pointer, localX, localY, event){
            this.scene.start('game')
        }, this);
        
    }
}