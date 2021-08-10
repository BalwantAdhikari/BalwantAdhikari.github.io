import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene 
{
    carSelected = ''
    flipflop

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

        this.minicar = this.add.image(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}mini`)
        Align.scaleToGameW(this.minicar, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.car = this.physics.add.sprite(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 0.6)
        this.car.setSize(this.car.width * 0.5, this.car.height * 0.5)

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

        // car
        this.car.y = (this.bgHeight * 2.5/4) + ((this.height - this.bgHeight) / 2)


        // set bounds 
        this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);

        // so the car does'nt go out of road while stering
        this.car.setCollideWorldBounds()

        // so the car does not fall in y axis
        this.physics.world.gravity.y = 0

        this.cursors = this.input.keyboard.createCursorKeys()

    }

    update()
    {
        // left and right input logic
        if(!this.input.pointer1.isDown)
        {
            this.flipflop = false
        }

        if (this.input.pointer1.isDown)
        {
            if (Math.abs(this.input.pointer1.x - this.input.pointer1.downX) > 50)
            {
                if(!this.flipflop)
                {
                    if(this.input.pointer1.downX > this.input.pointer1.x)
                    {
                        if(this.car.x > this.physics.world.bounds.width * 1.5/4)
                        {
                            this.car.x -= this.physics.world.bounds.width/7
                        }
                        this.flipflop = true
                    }
                    else
                    {
                        if(this.car.x < this.physics.world.bounds.width * 2.5/4)
                        {
                            this.car.x += this.physics.world.bounds.width/7
                        }
                        this.flipflop = true
                    }
                }
            }
        }

        else if (this.cursors.left.isDown)
        {
            this.car.x -= 2
        }
        else if (this.cursors.right.isDown)
        {
            this.car.x += 2
        }
    }
}