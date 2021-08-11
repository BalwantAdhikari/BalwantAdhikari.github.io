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

        this.divider1 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider1, 0.001)
        this.divider2 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider2, 0.001)
        this.divider3 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider3, 0.001)
        this.divider4 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider4, 0.001)

        this.progress = this.add.image(this.scale.width/2, this.scale.height/2, 'game-progress')
        Align.scaleToGameW(this.progress, 1)

        this.minicar = this.add.image(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}mini`)
        Align.scaleToGameW(this.minicar, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.arrows = this.add.image(this.scale.width/2, this.scale.height/2, 'game-arrows')
        Align.scaleToGameW(this.arrows, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

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

        // divider
        this.divider1.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
        this.divider2.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
        this.divider3.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
        this.divider4.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)

        // this.dividerArray = []
        // for (let index = 0; index < 1; index++) {
        //     this.dividerArray[index] = this.add.image(0, 0, "game-dividerSingle")
        //     this.dividerArray[index].x = this.scale.width / 2
        //     this.dividerArray[index].y = (this.bgHeight / (3.4 - (index * 0.5))) + ((this.height - this.bgHeight) / 2)
        //     this.scaleValue = 0.005 + (index * 0.0057)
        //     Align.scaleToGameW(this.dividerArray[index], this.scaleValue)
        // }

        this.tweens.add({
            targets: this.divider1,
            scale: 0.5,
            y : {from: this.divider1.y, to: this.divider1.y + this.bgHeight},
            duration: 2000,
            repeat: -1,
            yoyo: false
        }, this)

        this.time.delayedCall(500, () => {
            this.tweens.add({
                targets: this.divider2,
                scale: 0.5,
                y : {from: this.divider2.y, to: this.divider2.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider2.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);

        this.time.delayedCall(1000, () => {
            this.tweens.add({
                targets: this.divider3,
                scale: 0.5,
                y : {from: this.divider3.y, to: this.divider3.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider3.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);

        this.time.delayedCall(1500, () => {
            this.tweens.add({
                targets: this.divider4,
                scale: 0.5,
                y : {from: this.divider4.y, to: this.divider4.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider4.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);
        

        this.car = this.physics.add.sprite(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 0.6)
        this.car.setSize(this.car.width * 0.5, this.car.height * 0.5)
        // this.car.setVisible(false)

        // car
        this.car.y = (this.bgHeight * 2.5/4) + ((this.height - this.bgHeight) / 2)
        this.tweens.add({
            targets: this.car,
            y: {from: this.car.y, to: this.car.y + (2 * window.devicePixelRatio)},
            duration: 200,
            repeat: -1,
            yoyo: true
        })

        // stering
        this.stering = this.add.image(this.scale.width/2, this.scale.height/2, 'game-stering')
        Align.scaleToGameW(this.stering, 0.15)
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

        // divider 
        // this.dividerArray.forEach((item) =>{
        //     item.scale += 0.0005
        //     item.y += 2
        // })

        // this.dividerArray.forEach((item) => {
        //     const bgBottomPoint = ((this.height - this.bgHeight) / 2) + this.bgHeight
        //     if((item.y + ((item.scaleY * item.height) / 2)) > bgBottomPoint)
        //     {
        //         item.y = (this.bgHeight / (3.4)) + ((this.height - this.bgHeight) / 2)
        //         item.scale = 0.005
        //     }
        // })
    }
}