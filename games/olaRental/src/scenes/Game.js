import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene 
{
    carSelected = ''

    constructor(car)
    {
        super('game')
        this.car = car
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
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'game-background')
        Align.scaleToGameW(this.background, 1)

        this.divider = this.add.image(this.scale.width/2, this.scale.height/2, 'game-divider')
        Align.scaleToGameW(this.divider, 1)

        this.progress = this.add.image(this.scale.width/2, this.scale.height/2, 'game-progress')
        Align.scaleToGameW(this.progress, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.car = this.add.image(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 1)
        
        // this.timer = this.add.image(this.scale.width/2, this.scale.height/2, 'game-timer')
        // Align.scaleToGameW(this.timer, 1)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.background.scaleX * this.background.width
        this.bgHeight = this.background.scaleX * this.background.width

        this.r3 = this.add.rectangle(this.bgWidth / 4.95, this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.bgWidth/3.15, this.bgHeight/45);
        this.r3.setStrokeStyle(1, 0x000000);

        // logo
        this.loadinglogo.x = this.bgWidth - this.bgWidth / 6.5
        this.loadinglogo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

    }

}