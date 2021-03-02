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
    }
    
    preload()
    {
        this.load.image('bike', 'assets/object-13.png')
        this.load.image('sky', 'assets/object-20.png')
        this.load.image('left-road', 'assets/object-25.png')
        this.load.image('right-road', 'assets/object-27.png')
        this.load.image('hr-rule', 'assets/object-32.png')
        this.load.image('cloud', 'assets/object-29.png')
        this.load.image('traffic-light-red', 'assets/object-33.png')
        this.load.image('traffic-light-green', 'assets/object-34.png')
        this.load.image('road-sign', 'assets/object-3.png')
        this.load.image('trees', 'assets/object-4.png')
        this.load.image('breaker', 'assets/object-10.png')
        this.load.image('pothole', 'assets/object-8.png')
        this.load.image('crashSign', 'assets/object-35.png')
        this.load.image('dustbin', 'assets/object-15.png')

        this.load.image('hotel', 'assets/object-16.png')

        this.load.image('dog', 'assets/dog.png')

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
        this.trafficLightRed = this.add.image(0, 0, 'traffic-light-red')
        this.trafficLightGreen = this.add.image(0, 0, 'traffic-light-green')
        this.trafficLightGreen.setVisible(false)
        this.breaker = this.physics.add.sprite(0, 0, 'breaker')
        this.breaker.setOrigin(0.5)
        this.breaker.setVisible(false)
        this.pothole = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole.setOrigin(0.5)
        this.pothole.setSize(this.pothole.width * 0.3, this.pothole.height * 0.3)

        this.pothole1 = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole1.setOrigin(0)
        this.pothole1.setSize(this.pothole.width * 0.3, this.pothole.height * 0.3)

        this.pothole2 = this.physics.add.sprite(0, 0, 'pothole')
        this.pothole2.setOrigin(0.5, 0.5)
        this.pothole2.setSize(this.pothole.width * 0.3, this.pothole.height * 0.3)

        this.dustbin = this.add.image(0, 0, 'dustbin')
        this.dustbin.setOrigin(0.5)
        
        this.roadSign = this.add.image(0, 0, 'road-sign')
        this.roadSign.setOrigin(1, 0.5)

        this.dog = this.physics.add.sprite(0, 0, 'dog')
        this.dog.setSize(this.dog.width * 0.3, this.dog.height * 0.3)

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

        this.aGrid.placeAtIndex(67, this.pothole)
        Align.scaleToGameW(this.pothole, 0.1)
        this.pothole.setVisible(false)

        this.aGrid.placeAtIndex(67, this.pothole1)
        Align.scaleToGameW(this.pothole1, 0.1)
        this.pothole1.setVisible(false)

        this.aGrid.placeAtIndex(68, this.pothole2)
        Align.scaleToGameW(this.pothole2, 0.1)
        this.pothole2.setVisible(false)

        this.aGrid.placeAtIndex(78, this.dustbin)
        Align.scaleToGameW(this.dustbin, 0.1)

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

        this.aGrid.placeAtIndex(72, this.dog)
        Align.scaleToGameW(this.dog, 0.1)
        this.dog.setVisible(false)

    }

    handleOverlap()
    {
        this.crashSign = this.add.image(this.bike.x, this.bike.y - 50, 'crashSign')
        Align.scaleToGameW(this.crashSign, 0.5)

        this.pauseGame = true
        this.anims.pauseAll()

        this.countdown.stop()
        this.time.delayedCall(1500, () => {
            this.scene.start('game-over')
        }, [], this) 

        // this.scene.start('game-over')
    }

    handleCountdownFinished()
    {
        this.scene.start('game-over')
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
        if ((this.input.pointer1.isDown && !this.pauseGame) && !this.redlight)
        {
            if (Math.abs(this.input.pointer1.x - this.input.pointer1.downX) > 50)
            {
                if(this.input.pointer1.downX > this.input.pointer1.x)
                {
                    this.bike.x -= 15
                }
                else
                {
                    this.bike.x += 15
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
            this.trafficLightRed.x -= 0.12 
            this.trafficLightRed.y += 0.3
    
            Align.scaleToGameW(this.trafficLightRed, 0.3 + this.count/1000)

            // scale and move road sign
            this.roadSign.x += 0.09
            this.roadSign.y += 0.05

            Align.scaleToGameW(this.roadSign, 0.05 + this.count/5000)

            // scale and move dustbin
            this.dustbin.x += 0.09
            this.dustbin.y += 0.05

            Align.scaleToGameW(this.dustbin, 0.05 + this.count/5000)

        }

        if(this.pothole1.y < (this.scale.height + 100))
        {
            // scale and move pothole
            this.pothole1.setVisible(true)
            this.pothole1.x -= 0.1
            this.pothole1.y += 1.1
            Align.scaleToGameW(this.pothole1, 0.1 + (this.count)/1500)
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

        if((this.count > 450 && this.count < 2200) && !this.pauseGame)
        {
            // scale and move hotel
            this.hotel.x -= 0.02
            this.hotel.y += 0.01
    
            Align.scaleToGameW(this.hotel, 0.2 + (this.count - 100)/9000)
            console.log(this.hotel.x)
    
            if(this.count > 550)
            {
                this.trafficLightGreen.setVisible(false)
            }
    
            // scale and move traffic light
            this.trafficLightGreen.x -= 0.12
            this.trafficLightGreen.y += 0.3
    
            Align.scaleToGameW(this.trafficLightGreen, 0.3 + (this.count - 100)/1000)

            if(this.count == 699)
            {
                this.trafficLightGreen.destroy()
                this.trafficLightRed.destroy()
                this.dog.setVisible(true)
                this.dog.play('dog-walk')

            }

            // scale and move road sign
            this.roadSign.x += 0.20
            this.roadSign.y += 0.15

            Align.scaleToGameW(this.roadSign, 0.05 + (this.count - 100)/5000)

            // scale and move dustbin
            this.dustbin.x += 0.20
            this.dustbin.y += 0.15

            Align.scaleToGameW(this.dustbin, 0.05 + (this.count - 100)/5000)


            if(this.dog.visible == true)
            {
                this.dog.x += 1
                this.dog.y += 0.5
                Align.scaleToGameW(this.dog, 0.1 + (this.count)/6000)
            }

            if(this.count > 500)
            {
                this.pothole.setVisible(true)
                this.pothole.x -= 0.2
                this.pothole.y += 1
                Align.scaleToGameW(this.pothole, 0.1 + (this.count)/3900)

            }

            if(this.count > 800)
            {
                this.pothole.x -= 0.2
                this.pothole.y += 1
                Align.scaleToGameW(this.pothole, 0.1 + (this.count)/3900)
            }

        }

        if(!this.pauseGame && !this.redlight)
        {
            this.trees1.x -= 0.2
            this.trees1.y += 0.2
            this.trees2.x += 0.2
            this.trees2.y += 0.2
            this.trees3.x -= 0.2
            this.trees3.y += 0.2
            this.trees4.x += 0.2
            this.trees4.y += 0.2
            this.trees5.x -= 0.2
            this.trees5.y += 0.2
            this.trees6.x += 0.2
            this.trees6.y += 0.2

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

            if(this.hotel.x < 94)
            {
                this.trees5.setVisible(false)
                this.trees3.setVisible(false)
                this.trees1.setVisible(false)
            }
            
        }

        this.countdown.update()

    }

}