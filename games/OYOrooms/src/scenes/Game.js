import Phaser from '../lib/phaser.js'

import CountdownController from './CountdownController.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'


export default class Game extends Phaser.Scene
{
    flag = true
    count = 0
    countdown

    constructor()
    {
        super('game')
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

        this.load.image('hotel', 'assets/object-16.png')
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
        this.hotel = this.add.image(0, 0, 'hotel')
        this.trafficLightRed = this.add.image(0, 0, 'traffic-light-red')
        this.trafficLightGreen = this.add.image(0, 0, 'traffic-light-green')
        this.trafficLightGreen.setVisible(false)
        this.breaker = this.physics.add.image()
        this.bike = this.physics.add.sprite(0, 0, 'bike')
        this.roadSign = this.add.image(0, 0, 'road-sign')
        this.roadSign.setOrigin(1, 0.5)
        

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

        this.aGrid.placeAtIndex(69, this.roadSign)
        Align.scaleToGameW(this.roadSign, 0.05)

        this.aGrid.placeAtIndex(55, this.trees1)
        Align.scaleToGameW(this.trees1, 0.1)

        this.aGrid.placeAtIndex(62, this.trees2)
        Align.scaleToGameW(this.trees2, 0.1)

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

    }

    handleCountdownFinished()
    {

    }

    update()
    {
        // this.bike.y -= 1
        // this.bike_scale -= 0.001
        // if(this.bike_scale > 0.015)
        //     this.bike.setScale(this.bike_scale)

        this.count += 1

        if(this.count % 4 == 0)
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
        if (this.input.pointer1.isDown)
        {
            // if(this.input.pointer1.x < (this.scale.width/2))
            // {
            //     this.bike.x -= 2
            // }
            // else
            // {
            //     this.bike.x += 2
            // }

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
        else if (this.cursors.left.isDown)
        {
            this.bike.x -= 2
        }
        else if (this.cursors.right.isDown)
        {
            this.bike.x += 2
        }

        if(this.count < 350)
        {
            // scale and move hotel
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
        }

        // if(this.count > 350 && this.count < 450)
        // {
        //     this.trafficLightRed.setVisible(false)

        //     this.trafficLightGreen.setVisible(true)
        //     // this.trafficLightGreen.x = this.trafficLightRed.x
        //     // this.trafficLightGreen.y = this.trafficLightRed.y


        // }

        if(this.count == 450)
        {
            this.trafficLightRed.setVisible(false)
            this.trafficLightGreen.setVisible(true)

            this.trafficLightGreen.x = this.trafficLightRed.x
            this.trafficLightGreen.y = this.trafficLightRed.y

            Align.scaleToGameW(this.trafficLightGreen, 0.3 + (this.count - 100)/1000)

        }

        if(this.count > 450 && this.count < 2200)
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

            if(this.count == 699)
            {
                this.trafficLightGreen.destroy()
                this.trafficLightRed.destroy()
            }

            // scale and move road sign
            this.roadSign.x += 0.20
            this.roadSign.y += 0.15

            Align.scaleToGameW(this.roadSign, 0.05 + (this.count - 100)/5000)
            
        }

        this.countdown.update()



    }

}