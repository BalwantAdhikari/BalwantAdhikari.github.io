import Phaser from '../lib/phaser.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene
{
    flag = true
    count = 0
    
    preload()
    {
        this.load.image('bike', 'assets/object-13.png')
        this.load.image('sky', 'assets/object-20.png')
        this.load.image('left-road', 'assets/object-25.png')
        this.load.image('right-road', 'assets/object-27.png')
        this.load.image('hr-rule', 'assets/object-32.png')
        this.load.image('cloud', 'assets/object-29.png')
    }

    create()
    {
        this.cameras.main.setBackgroundColor('#FFF')
        this.sky = this.add.image(0, 0, 'sky').setScale(0.4)
        this.leftRoad = this.add.image(0, 0, 'left-road').setScale(0.35)
        this.rightRoad = this.add.image(0, 0, 'right-road').setScale(0.35)
        this.hrRule = this.add.image(0, 0, 'hr-rule')
        this.hrRule.setScale(0.03)
        this.cloud = this.add.image(0, 0, 'cloud')
        this.cloud.setScale(0.08)
        this.cloud.flipX = true
        
        this.add.image(0, 0, 'cloud').setScale(0.08)
        this.bike = this.physics.add.sprite(0, 0, 'bike').setScale(0.3)

        this.aGrid = new AlignGrid({scene:this, rows:11, cols:11})
        // this.aGrid.showNumbers()

        this.aGrid.placeAtIndex(93, this.bike)
        Align.scaleToGameW(this.bike, .25)

        this.aGrid.placeAtIndex(27, this.sky)
        Align.scaleToGameW(this.sky, 1.1)

        this.aGrid.placeAtIndex(68, this.leftRoad)
        Align.scaleToGameW(this.leftRoad, 0.6)
        this.leftRoad.angle -=15

        this.aGrid.placeAtIndex(74, this.rightRoad)
        Align.scaleToGameW(this.rightRoad, 0.6)
        this.rightRoad.angle +=15

        this.aGrid.placeAt(5, 3.4, this.hrRule)
        

        // set bounds 
        this.physics.world.setBounds(this.scale.width/6.4, 0, this.scale.width/1.43, this.scale.height);

        // so the bike does'nt go out of road while stering
        this.bike.setCollideWorldBounds()

        // so the bike does not fall in y axis
        this.physics.world.gravity.y = 0

        this.cursors = this.input.keyboard.createCursorKeys()
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
            if(this.input.pointer1.x < (this.scale.width/2))
            {
                this.bike.x -= 2
            }
            else
            {
                this.bike.x += 2
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

    }
}