import Phaser from '../lib/phaser.js'

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
        this.add.image(240, 150, 'sky').setScale(0.4)
        this.bike = this.add.image(240, 470, 'bike').setScale(0.3)
        this.add.image(100, 400, 'left-road').setScale(0.35)
        this.add.image(380, 400, 'right-road').setScale(0.35)
        this.add.image(240, 260, 'hr-rule').setScale(0.07)
        this.cloud = this.add.image(100, 150, 'cloud')
        this.cloud.setScale(0.08)
        this.cloud.flipX = true

        this.add.image(200, 150, 'cloud').setScale(0.08)
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

    }
}