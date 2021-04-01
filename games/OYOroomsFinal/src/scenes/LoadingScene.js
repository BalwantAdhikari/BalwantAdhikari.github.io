import Phaser from '../lib/Phaser.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'

export default class LoadingScene extends Phaser.Scene
{
    flag = true
    count = 0

    constructor()
    {
        super('loading-scene')
    }

    preload()
    {

    }

    create()
    {
        this.loadingScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'loadingScreen')
        this.oyoBike = this.add.image(0, 0, 'oyoBike')
        this.startBtn = this.add.image(0, 0, 'startBtn').setOrigin(0)
        
        Align.scaleToGameW(this.loadingScreen, 1)
        Align.scaleToGameW(this.oyoBike, 0.35)
        Align.scaleToGameW(this.startBtn, 0.5)

        
        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()
        this.aGrid.placeAtIndex(105, this.oyoBike)

        this.circle = new Phaser.Geom.Circle(this.oyoBike.x, this.oyoBike.y, 10);
        this.circleGraphics = this.add.graphics({ fillStyle: { color: 0xFFA500, alpha: 0.9 } });
        this.circleGraphics.fillCircleShape(this.circle);
        this.aGrid.placeAtIndex(96, this.circle)

        this.aGrid.placeAtIndex(72, this.startBtn)

        var darkSmoke = this.add.particles('smoke').createEmitter({
            x: this.oyoBike.x + this.oyoBike.width * this.oyoBike.scaleX/2 - 20,
            y: this.oyoBike.y + this.oyoBike.height * this.oyoBike.scaleY/4 + 10,
            speed: { min: 20, max: 100 },
            angle: { min: 0, max: 20},
            scale: { start: 0, end: 0.4},
            alpha: { start: 0, end: 0.05},
            lifespan: 500,
            //active: false
        });
        darkSmoke.reserve(1000);
    

        this.startBtn.setInteractive().on('pointerup', function(pointer, localX, localY, event){
            this.scene.start('game')
        }, this);

    }

    update()
    {
        this.count += 1
        
        if(this.count % 25)
        {
            if(this.flag)
            {
                this.circleGraphics.setVisible(false)
                this.flag = false
            }
            else
            {
                this.circleGraphics.setVisible(true)
                this.flag = true
            }
            
        }

    }
}