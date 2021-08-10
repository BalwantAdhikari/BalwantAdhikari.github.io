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

        // this.divider = this.add.image(this.scale.width/2, this.scale.height/2, 'game-divider')
        // Align.scaleToGameW(this.divider, 1)

        // this.divider = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        // Align.scaleToGameW(this.divider, 0.001)

        this.progress = this.add.image(this.scale.width/2, this.scale.height/2, 'game-progress')
        Align.scaleToGameW(this.progress, 1)

        this.minicar = this.add.image(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}mini`)
        Align.scaleToGameW(this.minicar, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.car = this.physics.add.sprite(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 0.6)
        this.car.setSize(this.car.width * 0.5, this.car.height * 0.5)
        this.car.setVisible(false)

        this.arrows = this.add.image(this.scale.width/2, this.scale.height/2, 'game-arrows')
        Align.scaleToGameW(this.arrows, 1)

        this.stering = this.add.image(this.scale.width/2, this.scale.height/2, 'game-stering')
        Align.scaleToGameW(this.stering, 0.15)

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

        // divider
        // this.divider.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)

        this.dividerArray = []
        for (let index = 0; index < 10; index++) {
            this.dividerArray[index] = this.add.image(0, 0, "game-dividerSingle")
            this.dividerArray[index].x = this.scale.width / 2
            this.dividerArray[index].y = (this.bgHeight / (3.5 - (index * 0.45))) + ((this.height - this.bgHeight) / 2)
            this.scaleValue = 0.005 + (index * 0.005)
            Align.scaleToGameW(this.dividerArray[index], this.scaleValue)
        }

        // stering
        this.stering.y = (this.bgHeight * 3.55/4) + ((this.height - this.bgHeight) / 2)


        // set bounds 
        this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);

        // so the car does'nt go out of road while stering
        this.car.setCollideWorldBounds()

        // so the car does not fall in y axis
        this.physics.world.gravity.y = 0

        this.cursors = this.input.keyboard.createCursorKeys()

        // make multiple divider lines
        // this.group = this.physics.add.staticGroup({
        //     key: 'game-divider',
        //     frameQuantity: 3
        // });

        // this.group.getChildren().forEach(this.layDivider, this);

    }

    // layDivider(item, index) {
    //     // this.scaleValue = 0.005 + (index * 0.005)
    //     // console.log(this.scaleValue)
    //     // Align.scaleToGameW(item, 0.05)
    //     item.scale = 0.5 
    //     item.x = this.scale.width / 2
    //     item.y = this.scale.height / 2
    //     console.log(index)
    //     console.log(item.scale)
    //     // item.displayWidth=window.innerWidth*this.scaleValue;
	// 	// item.scaleY=item.scaleX;
    //     // item.y = (this.bgHeight / (3.5 - (index * 0.35))) + ((this.height - this.bgHeight) / 2)
    // }

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
                            // rotate stering
                            this.tweens.add({
                                targets: this.stering,
                                angle: { from: 0, to: -50 },
                                ease: 'Linear',
                                duration: 300,
                                yoyo: true
                            }, this)
                        }
                        this.flipflop = true
                    }
                    else
                    {
                        if(this.car.x < this.physics.world.bounds.width * 2.5/4)
                        {
                            this.car.x += this.physics.world.bounds.width/7
                            // rotate stering
                            this.tweens.add({
                                targets: this.stering,
                                angle: { from: 0, to: 50 },
                                ease: 'Linear',
                                duration: 300,
                                yoyo: true
                            }, this)
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