import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class WonScene extends Phaser.Scene
{
    carSelected = ''

    constructor()
    {
        super('won-screen')
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
        // wonAudio
        this.wonAudio = this.sound.add('won', {
            volume: 0.1
        })

        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'final-background')
        Align.scaleToGameW(this.background, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

        // sun
        this.loadingsun = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-sun')
        Align.scaleToGameW(this.loadingsun, 1)

        this.msg = this.add.image(this.scale.width/2, this.scale.height/2, 'final-wonMsg')
        Align.scaleToGameW(this.msg, 1)

        this.road = this.add.image(this.scale.width/2, this.scale.height/2, 'final-road')
        Align.scaleToGameW(this.road, 1)

        this.car = this.add.image(this.scale.width/2, 0, `loading-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

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

        this.wonAudio.play()

        this.tweens.add({
            targets: this.msg,
            scale: {start: 0.3, to: this.msg.scale},
            duration: 1500
        })
        
    }

}