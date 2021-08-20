import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class LostScene extends Phaser.Scene
{
    carSelected = ''

    constructor()
    {
        super('lost-screen')
    }

    init(data)
    {
        this.carSelected = data.car
    }

    preload()
    {
        
    }

    create()
    {
        // lostAudio
        this.lostAudio = this.sound.add('lost', {
            volume: 0.2
        })
        
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'final-background')
        Align.scaleToGameW(this.background, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

        // sun
        this.loadingsun = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-sun')
        Align.scaleToGameW(this.loadingsun, 1)

        this.msg = this.add.image(this.scale.width/2, this.scale.height/2, 'final-lostMsg')
        Align.scaleToGameW(this.msg, 1)

        this.road = this.add.image(this.scale.width/2, this.scale.height/2, 'final-road')
        Align.scaleToGameW(this.road, 1)

        this.car = this.add.image(this.scale.width/2, 0, `loading-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.tryAgain = this.add.image(0, 0, 'final-tryAgain')
        Align.scaleToGameW(this.tryAgain, 0.35)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.background.scaleX * this.background.width
        this.bgHeight = this.background.scaleX * this.background.width

        // car
        this.car.y = (this.bgHeight / 1.45) + ((this.height - this.bgHeight) / 2)

        // logo
        this.loadinglogo.x = this.bgWidth - this.bgWidth / 6.5
        this.loadinglogo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

        // tryAgain
        this.tryAgain.x = this.bgWidth / 2
        this.tryAgain.y = (this.bgHeight / 1.82) + ((this.height - this.bgHeight) / 2)

        this.tryAgain.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            // start loading scene
            this.scene.stop();
            this.scene.launch('loading-scene');
        }, this)

        this.lostAudio.play()
        
    }

}