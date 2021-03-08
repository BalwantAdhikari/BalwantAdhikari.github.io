import Phaser from '../lib/phaser.js'

import CountdownController from './CountdownController.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene
{
    flag
    count
    countdown
    pauseGame
    redlight
    winanimation
    showSplash = true
    flipflop

    constructor()
    {
        super('game')
    }

    init()
    {
        this.flag = true
        this.count = 0
        this.pauseGame = false
        this.anims.resumeAll()
        this.redlight = false
        this.winanimation = false
    }
    
    preload()
    {
        this.load.image('bike', 'assets/object-13.svg')
        this.load.image('sky', 'assets/object-20.png')
        this.load.image('left-road', 'assets/object-25.png')
        this.load.image('right-road', 'assets/object-27.png')
        this.load.image('hr-rule', 'assets/object-32.png')
        this.load.image('cloud', 'assets/object-29.png')
        this.load.image('traffic-light-red', 'assets/object-33.png')
        this.load.image('traffic-light-green', 'assets/object-34.png')
        this.load.image('road-sign', 'assets/object-3.svg')
        this.load.image('trees', 'assets/object-4.png')
        this.load.image('breaker', 'assets/object-10.png')
        this.load.image('pothole', 'assets/object-8.png')
        this.load.image('crashSign', 'assets/object-35.png')
        this.load.image('dustbin', 'assets/object-15.png')
        this.load.image('grass', 'assets/object-9.png')
        this.load.image('leaf', 'assets/object-2.png')
        this.load.image('flower', 'assets/object-6.png')

        this.load.image('flag-red', 'assets/object-17.png')
        this.load.image('sparkle1', 'assets/object-18.png')
        this.load.image('sparkle2', 'assets/object-19.png')
        this.load.image('sparkle3', 'assets/object-31.png')
        this.load.image('swipe-left', 'assets/swipe-left.png')
        this.load.image('swipe-right', 'assets/swipe-right.png')
        this.load.image('car', 'assets/object-5.png')

        this.load.audio('level-audio', 'assets/level-audio.wav')

        this.load.image('hotel', 'assets/object-16.svg')

        this.load.image('dog', 'assets/dog.png')

        this.load.image('won', 'assets/won.png')

        // load as an atlas
        this.load.atlas(
            'dogwalk',
            'assets/dogWalk.png',
            'assets/dogWalk.json'
        )
    }

    create()
    {
        this.cameras.main.setBackgroundColor('#FFF')
        this.sky = this.add.image(0, 0, 'sky')
        this.leftRoad = this.add.image(0, 0, 'left-road')
        this.leftRoad.setOrigin(1, 0)
        this.rightRoad = this.add.image(0, 0, 'right-road')
        this.rightRoad.setOrigin(0, 0)

        this.music = this.sound.add('level-audio', {
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
        })

        this.music.play()
        
        // this.hrRule = this.add.image(0, 0, 'hr-rule')
        // this.hrRule.setScale(0.1)
        this.cloud = this.add.image(0, 0, 'cloud')
        this.cloud.flipX = true
        
        this.cloud1 = this.add.image(0, 0, 'cloud')
        this.cloud2 = this.add.image(0, 0, 'cloud')
        this.cloud3 = this.add.image(0, 0, 'cloud')
        
        this.trees1 = this.add.image(0, 0, 'trees')
        this.trees2 = this.add.image(0, 0, 'trees')
        this.trees3 = this.add.image(0, 0, 'trees')
        this.trees4 = this.add.image(0, 0, 'trees')
        this.trees5 = this.add.image(0, 0, 'trees')
        this.trees6 = this.add.image(0, 0, 'trees')

        this.hotel = this.add.image(0, 0, 'hotel')
        this.breaker = this.physics.add.sprite(0, 0, 'breaker')
        this.breaker.setOrigin(0.5)
        this.breaker.setVisible(false)
        this.pothole = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole.setOrigin(0.5)
        this.pothole.setSize(this.pothole.width * 0.4, this.pothole.height * 0.3)
        
        this.pothole1 = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole1.setOrigin(0.5, 0.5)
        this.pothole1.setSize(this.pothole.width * 0.4, this.pothole.height * 0.3)
        
        this.pothole2 = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole2.setOrigin(0.5, 0.5)
        this.pothole2.setSize(this.pothole.width * 0.4, this.pothole.height * 0.3)
        
        
        this.grass = this.add.image(0, 0, 'grass')
        this.grass.setOrigin(0.3, 1)
        this.grass1 = this.add.image(0, 0, 'grass')
        this.grass1.setOrigin(0.9, 1)
        
        this.grass2 = this.add.image(0, 0, 'grass')
        this.grass2.setOrigin(0.3, 1)
        this.grass3 = this.add.image(0, 0, 'grass')
        this.grass3.setOrigin(0.9, 1)

        this.trafficLightRed = this.add.image(0, 0, 'traffic-light-red')
        this.trafficLightGreen = this.add.image(0, 0, 'traffic-light-green')
        this.trafficLightGreen.setVisible(false)

        this.flower = this.add.image(0, 0, 'flower')
        this.flower.setOrigin(0.7, 1)

        this.dog = this.physics.add.sprite(0, 0, 'dog')
        this.dog.setSize(this.dog.width * 0.3, this.dog.height * 0.3)

        this.roadSign = this.add.image(0, 0, 'road-sign')
        this.roadSign.setOrigin(1, 0.5)

        
        // this.dustbin = this.add.image(0, 0, 'dustbin')
        // this.dustbin.setOrigin(0.5)
        
        

        
        this.car = this.physics.add.sprite(0, 0, 'car')
        this.car.setOrigin(0.5)
        this.car.setSize(this.car.width * 0.7, this.car.height * 0.9)

        this.bike = this.physics.add.sprite(0, 0, 'bike')
        this.bike.setSize(this.bike.width * 0.5, this.bike.height * 0.5)

        this.hotel.setOrigin(0.5, 1)

        this.graphics = this.add.graphics()
        this.graphics1 = this.add.graphics()

        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()

        this.aGrid.placeAtIndex(112, this.bike)
        Align.scaleToGameW(this.bike, .25)

        this.aGrid.placeAtIndex(40, this.sky)
        Align.scaleToGameW(this.sky, 1.1)

        this.aGrid.placeAtIndex(66, this.leftRoad)
        Align.scaleToGameW(this.leftRoad, 0.6)
        this.leftRoad.angle -=15

        this.aGrid.placeAtIndex(68, this.rightRoad)
        Align.scaleToGameW(this.rightRoad, 0.6)
        this.rightRoad.angle +=15

        // this.aGrid.placeAt(5, 3.4, this.hrRule)

        this.aGrid.placeAtIndex(37, this.cloud)
        Align.scaleToGameW(this.cloud, 0.17)

        this.aGrid.placeAtIndex(30, this.cloud1)
        Align.scaleToGameW(this.cloud1, 0.14)
        
        this.aGrid.placeAtIndex(40, this.cloud2)
        Align.scaleToGameW(this.cloud2, 0.1)

        this.aGrid.placeAtIndex(42, this.cloud3)
        Align.scaleToGameW(this.cloud3, 0.14)

        this.aGrid.placeAtIndex(57, this.trafficLightRed)
        Align.scaleToGameW(this.trafficLightRed, 0.3)

        this.aGrid.placeAtIndex(82, this.grass)
        Align.scaleToGameW(this.grass, 0.15)
        this.aGrid.placeAtIndex(88, this.grass1)
        Align.scaleToGameW(this.grass1, 0.15)

        this.aGrid.placeAtIndex(99, this.grass2)
        Align.scaleToGameW(this.grass2, 0.15)
        this.aGrid.placeAtIndex(107, this.grass3)
        Align.scaleToGameW(this.grass3, 0.15) 

        this.aGrid.placeAtIndex(65, this.hotel)
        Align.scaleToGameW(this.hotel, 0.1)
        this.hotel.setVisible(false)

        this.aGrid.placeAtIndex(69, this.roadSign)
        Align.scaleToGameW(this.roadSign, 0.05)

        this.aGrid.placeAtIndex(55, this.trees1)
        Align.scaleToGameW(this.trees1, 0.1)

        this.aGrid.placeAtIndex(61, this.trees2)
        Align.scaleToGameW(this.trees2, 0.1)

        this.aGrid.placeAtIndex(54, this.trees3)
        Align.scaleToGameW(this.trees3, 0.1)

        this.aGrid.placeAtIndex(62, this.trees4)
        Align.scaleToGameW(this.trees4, 0.1)

        this.aGrid.placeAtIndex(63, this.trees5)
        Align.scaleToGameW(this.trees5, 0.1)

        this.aGrid.placeAtIndex(71, this.trees6)
        Align.scaleToGameW(this.trees6, 0.1)

        this.aGrid.placeAtIndex(58, this.pothole)
        Align.scaleToGameW(this.pothole, 0.1)
        this.pothole.setVisible(false)

        this.aGrid.placeAtIndex(58, this.pothole1)
        Align.scaleToGameW(this.pothole1, 0.1)
        this.pothole1.setVisible(false)

        this.aGrid.placeAtIndex(58, this.pothole2)
        Align.scaleToGameW(this.pothole2, 0.1)
        this.pothole2.setVisible(false)

        // this.aGrid.placeAtIndex(78, this.dustbin)
        // Align.scaleToGameW(this.dustbin, 0.1)

        this.aGrid.placeAtIndex(58, this.car)
        Align.scaleToGameW(this.car, 0.07)
        this.car.setVisible(false)

        const timerLabel = this.add.text(this.scale.width * 0.5, 50, '39 sec',{font: 'bold 24px Arial', fill: '#EB0303'})
                .setOrigin(0.5)

        const remainingTimeLabel = this.add.text(
            this.scale.width * 0.5,
            100,
            '39 seconds left to reach',
            {
                font: '10px Arial',
                fill: '#000'
            })
            .setOrigin(0.5)
        
        this.progressBox = this.graphics1
        this.progressBar = this.graphics

        this.progressBox.fillStyle(0x000000, 0.2)
        this.progressBox.fillRoundedRect(this.scale.width/4, 70, this.scale.width/2, 10, 5);

        this.countdown = new CountdownController(this, timerLabel, remainingTimeLabel, this.progressBar)
        this.countdown.start(this.handleCountdownFinished.bind(this))

        // set bounds 
        this.physics.world.setBounds(this.scale.width/6.4, 0, this.scale.width/1.43, this.scale.height);

        // so the bike does'nt go out of road while stering
        this.bike.setCollideWorldBounds()

        // so the bike does not fall in y axis
        this.physics.world.gravity.y = 0

        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(
            this.bike,
            this.pothole,
            this.handleOverlap,
            undefined,
            this
        )

        this.physics.add.collider(
            this.bike,
            this.pothole1,
            this.handleOverlap,
            undefined,
            this
        )

        this.physics.add.collider(
            this.bike,
            this.pothole2,
            this.handleOverlap,
            undefined,
            this
        )

        this.physics.add.collider(
            this.bike,
            this.dog,
            this.handleOverlap,
            undefined,
            this
        )

        this.physics.add.collider(
            this.bike,
            this.car,
            this.handleOverlap,
            undefined,
            this
        )

        this.physics.add.overlap(
            this.pothole1,
            this.car,
            this.hidePothole,
            undefined,
            this
        )

        // dog animation

        // create the run animation
        this.anims.create({
            key: 'dog-walk', // name of this animation
            // helper to generate frames
            frames: this.anims.generateFrameNames('dogwalk', {
                start: 1,
                end: 10,
                prefix: 'Dogwalk',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: -1 // -1 to loop forever
        })

        this.aGrid.placeAtIndex(81, this.dog)
        Align.scaleToGameW(this.dog, 0.2)
        this.dog.setVisible(false)

        if(this.showSplash)
        {
            this.showControl()
        }
    }

    hidePothole()
    {
        if(this.pothole1.y > this.scale.height/2)
        {
            this.pothole1.scale = 0
        }
    }

    handleOverlap()
    {
        this.crashSign = this.add.image(this.bike.x, this.bike.y - 50, 'crashSign')
        Align.scaleToGameW(this.crashSign, 0.5)

        this.pauseGame = true
        this.anims.pauseAll()

        this.countdown.stop()
        this.music.stop()
        this.time.delayedCall(1500, () => {
            this.scene.start('game-over')
        }, [], this) 

        // this.scene.start('game-over')
    }

    handleCountdownFinished()
    {
        this.music.stop()
        this.anims.pauseAll()
        
        this.pauseGame = true

        this.winanimation = true
    }

    update()
    {

        this.count += 1

        if((this.count % 4 == 0 && !this.pauseGame) && !this.redlight)
        {
            if(this.flag)
            {
                this.bike.y += 2
                this.flag = false
            }
            else
            {
                this.bike.y -= 2
                this.flag = true
            }
        }

        // left and right input logic
        if(!this.input.pointer1.isDown)
        {
            this.flipflop = false
        }

        if ((this.input.pointer1.isDown && !this.pauseGame) && !this.redlight)
        {
            if (Math.abs(this.input.pointer1.x - this.input.pointer1.downX) > 50)
            {
                if(!this.flipflop)
                {
                    if(this.input.pointer1.downX > this.input.pointer1.x)
                    {
                        if(this.bike.x > this.physics.world.bounds.width/4)
                        {
                            this.bike.x -= this.physics.world.bounds.width/3
                        }
                        this.flipflop = true
                    }
                    else
                    {
                        if(this.bike.x < this.physics.world.bounds.width * 3/4)
                        {
                            this.bike.x += this.physics.world.bounds.width/3
                        }
                        this.flipflop = true
                    }
                }
            }
        }

        else if (this.cursors.left.isDown && !this.pauseGame)
        {
            this.bike.x -= 2
        }
        else if (this.cursors.right.isDown && !this.pauseGame)
        {
            this.bike.x += 2
        }


        if(this.count < 350 && !this.pauseGame)
        {
            // scale and move hotel
            this.hotel.setVisible(true)
            this.hotel.x -= 0.01
            this.hotel.y += 0.01
    
            Align.scaleToGameW(this.hotel, 0.2 + this.count/10000)
    
            // scale and move traffic light
            this.trafficLightRed.x -= 0.14 
            this.trafficLightRed.y += 0.25
    
            Align.scaleToGameW(this.trafficLightRed, 0.3 + this.count/1000)

            // scale and move road sign
            this.roadSign.x += 0.25
            this.roadSign.y += 0.3

            Align.scaleToGameW(this.roadSign, 0.05 + this.count/5000)

            // scale and move dustbin
            // this.dustbin.x += 0.09
            // this.dustbin.y += 0.05

            // Align.scaleToGameW(this.dustbin, 0.05 + this.count/5000)

        }


        if(!this.redlight && !this.pauseGame && this.count > 100)
        {
            if((this.pothole1.y < (this.scale.height + 600)))
            {
                // scale and move pothole
                this.pothole1.setVisible(true)
                // this.pothole1.x -= 0.1
                this.pothole1.y += this.scale.height * 0.004
                this.pothole1.scale += 0.004
            }
            else
            {
                Align.scaleToGameW(this.pothole1, 0.1)
                this.aGrid.placeAtIndex(58, this.pothole1)
            }
        }

        if(this.count == 350)
        {
            this.redlight = true
        }

        if(this.count == 450)
        {
            this.trafficLightRed.setVisible(false)
            this.trafficLightGreen.setVisible(true)

            this.trafficLightGreen.x = this.trafficLightRed.x
            this.trafficLightGreen.y = this.trafficLightRed.y

            Align.scaleToGameW(this.trafficLightGreen, 0.3 + (this.count - 100)/1000)

            this.redlight = false

        }

        if((this.count > 450 && this.count < 2500) && !this.pauseGame)
        {
            // scale and move hotel
            this.hotel.x -= 0.02
            this.hotel.y += 0.01
    
            Align.scaleToGameW(this.hotel, 0.2 + (this.count - 100)/9000)
    
            if(this.count > 550)
            {
                this.trafficLightGreen.setVisible(false)
            }
    
            // scale and move traffic light
            this.trafficLightGreen.x -= 0.12
            this.trafficLightGreen.y += 0.3
    
            Align.scaleToGameW(this.trafficLightGreen, 0.3 + (this.count - 100)/1000)

            if(this.count == 750)
            {
                this.trafficLightGreen.destroy()
                this.trafficLightRed.destroy()
                this.dog.setVisible(true)
                this.dog.play('dog-walk')

            }

            // scale and move road sign
            this.roadSign.x += 0.25
            this.roadSign.y += 0.3

            Align.scaleToGameW(this.roadSign, 0.05 + (this.count - 100)/5000)

            // scale and move dustbin
            // this.dustbin.x += 0.20
            // this.dustbin.y += 0.15

            // Align.scaleToGameW(this.dustbin, 0.05 + (this.count - 100)/5000)


            if(this.dog.visible == true && this.count < 2000)
            {
                if(this.dog.x < this.scale.width + 1500)
                {
                    this.dog.x += 2.5
                    this.dog.y += 0.7
                    this.dog.scale += 0.002
                }
                else
                {
                    this.aGrid.placeAtIndex(81, this.dog)
                    Align.scaleToGameW(this.dog, 0.2)
                }
            }

            if(this.count > 450)
            {
                if(this.pothole.y < this.scale.height + 500)
                {
                    this.pothole.setVisible(true)
                    this.pothole.x -= 1
                    this.pothole.y += this.scale.height * 0.004
                    this.pothole.scale += 0.004
                }
                else
                {
                    Align.scaleToGameW(this.pothole, 0.1)
                    this.aGrid.placeAtIndex(58, this.pothole)
                }

            }

            if(this.count > 1250)
            {
                this.car.setVisible(true)
                this.car.x += 0.75
                this.car.y += this.scale.height * 0.0033
                this.car.scale += 0.002
            }

            if(this.count > 700)
            {
                if(this.pothole2.y < this.scale.height + 600)
                {
                    this.pothole2.setVisible(true)
                    this.pothole2.x += 1
                    this.pothole2.y += this.scale.height * 0.004
                    this.pothole2.scale += 0.004
                    
                }
                else
                {
                    Align.scaleToGameW(this.pothole2, 0.1)
                    this.aGrid.placeAtIndex(58, this.pothole2)
                }
            }

        }

        if(!this.pauseGame && !this.redlight)
        {
            this.trees1.x -= 0.6
            this.trees1.y += 0.6
            this.trees2.x += 0.6
            this.trees2.y += 0.6
            this.trees3.x -= 0.6
            this.trees3.y += 0.6
            this.trees4.x += 0.6
            this.trees4.y += 0.6
            this.trees5.x -= 0.6
            this.trees5.y += 0.6
            this.trees6.x += 0.6
            this.trees6.y += 0.6

            if(this.trees6.x > this.scale.width+20)
            {
                this.aGrid.placeAtIndex(61, this.trees6)

            }
            if(this.trees2.x > this.scale.width+20)
            {
                this.aGrid.placeAtIndex(61, this.trees2)

            }
            if(this.trees4.x > this.scale.width+20)
            {
                this.aGrid.placeAtIndex(61, this.trees4)

            }

            if(this.trees5.x < -20)
            {
                this.aGrid.placeAtIndex(55, this.trees5)
            }

            if(this.trees3.x < -20)
            {
                this.aGrid.placeAtIndex(55, this.trees3)
            }

            if(this.trees1.x < -20)
            {
                this.aGrid.placeAtIndex(55, this.trees1)
            }

            if(this.hotel.x < (this.scale.width/4.45))
            {
                this.trees5.setVisible(false)
                this.trees3.setVisible(false)
                this.trees1.setVisible(false)
            }


            // scale and move grass
            this.grass.x -= 0.9
            this.grass.y += 1.5
            this.grass.scale += 0.001

            this.grass2.x -= 0.9
            this.grass2.y += 1.5
            this.grass2.scale += 0.001

            this.grass1.x += 0.9
            this.grass1.y += 1.5
            this.grass1.scale += 0.001

            this.grass3.x += 0.9
            this.grass3.y += 1.5
            this.grass3.scale += 0.001

            if(this.grass.x < -45)
            {
                this.aGrid.placeAtIndex(74, this.grass)
                Align.scaleToGameW(this.grass, 0.05)
            }

            if(this.grass2.x < -45)
            {
                this.aGrid.placeAtIndex(74, this.grass2)
                Align.scaleToGameW(this.grass2, 0.05)
            }

            if(this.grass1.x > this.scale.width + 45)
            {
                this.aGrid.placeAtIndex(69, this.grass1)
                Align.scaleToGameW(this.grass1, 0.05)
            }

            if(this.grass3.x > this.scale.width + 45)
            {
                this.aGrid.placeAtIndex(69, this.grass3)
                Align.scaleToGameW(this.grass3, 0.05)
            }

            
        }

        if(this.winanimation && (this.count < 2500))
        {
            this.winner()
            this.pothole.setVisible(false)
            this.pothole1.setVisible(false)
            this.pothole2.setVisible(false)
            this.pothole.destroy()
            this.pothole1.destroy()
            this.pothole2.destroy()
            this.bike.x -= 0.5
            this.bike.y -= 1

            this.bike.scale -= 0.001

            // this.tweens.add({
            //     targets: this.wonImage,
            //     scale: 0.7,
            //     duration: 500,
            //     // ease: 'Linear'
            // });

            this.wonImage.setScale(0.6)

        }

        this.countdown.update()

    }

    winner()
    {
        this.add.image(
            this.hotel.x + (this.hotel.width * this.hotel.scale)/4,
            this.hotel.y - (this.hotel.height * this.hotel.scale),
            'flag-red')
            .setOrigin(0.5, 1)
            .setScale(0.3)

        this.add.image(
            this.hotel.x - (this.hotel.width * this.hotel.scaleX)/3,
            this.hotel.y - (this.hotel.height * this.hotel.scaleY)/2,
            'sparkle1')
            .setOrigin(1, 0.5)
            .setScale(0.3)

        this.add.image(
            this.hotel.x + (this.hotel.width * this.hotel.scaleX)/3,
            this.hotel.y - (this.hotel.height * this.hotel.scaleY)/2,
            'sparkle2')
            .setOrigin(0, 0.5)
            .setScale(0.3)

        this.add.image(
            this.hotel.x,
            this.hotel.y - (this.hotel.height * this.hotel.scaleY)/2,
            'sparkle3')
            .setOrigin(0.5)
            .setScale(0.3)

        this.wonImage = this.add.image(this.scale.width/2, this.scale.height/2, 'won').setScale(0)
        
    }

    showControl()
    {
        this.showSplash = false
        this.scene.launch('splash-screen')
        this.scene.pause()
        
    }

}