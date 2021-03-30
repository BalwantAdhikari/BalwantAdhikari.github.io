import Phaser from '../lib/phaser.js'

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
        this.load.image('loadingScreen', 'assets/gameStart.png')
        this.load.image('oyoBike', 'assets/oyoBike.png')
        this.load.image('smoke', 'assets/smoke-puff.png')
    }

    create()
    {
        this.loadingScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'loadingScreen')
        this.oyoBike = this.add.image(0, 0, 'oyoBike')
        
        Align.scaleToGameW(this.loadingScreen, 1)
        Align.scaleToGameW(this.oyoBike, 0.35)

        this.clickButton = this.add.graphics().setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains)

        this.clickButton.fillStyle(0x000000, 0)
        this.clickButton.fillRoundedRect(0, 0, 200, 80)

        

        // console.log(this.scale.height)
        // console.log(this.loadingScreen.height * (this.scale.width/this.loadingScreen.width))
        // console.log(this.loadingScreen.width)
        // console.log(this.loadingScreen.scaleX)
        
        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()
        this.aGrid.placeAtIndex(105, this.oyoBike)

        // this.bikeLight = this.add.graphics()
        // this.bikeLight.fillStyle(0xFFA500, 0.9)
        // this.bikeLight.fillRect(this.oyoBike.x, this.oyoBike.y, 30, 20)

        this.circle = new Phaser.Geom.Circle(this.oyoBike.x, this.oyoBike.y, 10);
        this.circleGraphics = this.add.graphics({ fillStyle: { color: 0xFFA500, alpha: 0.9 } });
        this.circleGraphics.fillCircleShape(this.circle);
        this.aGrid.placeAtIndex(96, this.circle)

        // this.aGrid.placeAtIndex(96, this.bikeLight)
        this.aGrid.placeAtIndex(72, this.clickButton)

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
    

        this.clickButton.on('pointerup', function(pointer, localX, localY, event){
            this.scene.start('game')
        }, this);

        

        // this.input.on('pointerdown', function (pointer) {
        //     this.confettiEmitterHotel.resume()
        //     this.confettiEmitterHotel1.resume()
        //     this.confettiEmitterHotel2.resume()

        //     for(let j=0; j<15; j++)
        //     {
        //         for(let i=0; i<30; i++)
        //         {
        //             this.confettiEmitterHotel.explode()
        //             this.confettiEmitterHotel1.explode()
        //             this.confettiEmitterHotel2.explode()
        //         }
        //     }
        // }, this);

    }

    update()
    {
        this.count += 1
        
        if(this.count % 25)
        {
            if(this.flag)
            {
                // this.bikeLight.fillStyle(0xFFFFFF, 0.5)
                // this.bikeLight.setVisible(false)
                this.circleGraphics.setVisible(false)
                this.flag = false
            }
            else
            {
                // this.bikeLight.fillStyle(0xFFFFFF, 0)
                // this.bikeLight.setVisible(true)
                this.circleGraphics.setVisible(true)
                this.flag = true
            }
            
        }


    }
}