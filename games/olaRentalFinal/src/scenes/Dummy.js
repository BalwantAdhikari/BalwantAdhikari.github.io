import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class Dummy extends Phaser.Scene
{
    car
    coin
    coinName

    constructor()
    {
        super('dummy')
    }

    init(data)
    {
        this.car = data.car
        this.coin = data.coin
        this.coinName = data.coinName
    }

    create()
    {
        // coinCollectedAudio
        this.coinCollectedAudio = this.sound.add('coinCollected', {
            volume: 0.1
        })

        this.animationY = this.car.y - ((this.car.height * this.car.scale))
        this.crashAnim1 = this.add.image(this.car.x, this.animationY, 'game-crashAnim1')
        Align.scaleToGameW(this.crashAnim1, 0.5)
        this.crashAnim2 = this.add.image(this.car.x, this.animationY, 'game-crashAnim2')
        Align.scaleToGameW(this.crashAnim2, 0.3)
        this.crashAnim3 = this.add.image(this.car.x, this.animationY, 'game-crashAnim3')
        Align.scaleToGameW(this.crashAnim3, 0.3)

        this.crashSign = this.add.image(this.car.x, this.animationY, `game-msg${this.coinName.charAt(this.coinName.length - 1)}`)
        Align.scaleToGameW(this.crashSign, 0.5)

        this.coinCollectedAudio.play()

        this.tweens.add({
            targets: this.crashAnim1,
            angle: 90,
            duration: 1500,
        })
        this.tweens.add({
            targets: this.crashAnim2,
            scale: 1,
            angle: 90,  
            duration: 1500,
        })
        this.tweens.add({
            targets: this.crashAnim3,
            scale: 1,
            angle: -180,
            duration: 1500,
        })


        this.time.delayedCall(1500, () => {
            this.coin.destroy()
            this.crashSign.destroy()
            this.scene.stop()
            this.scene.resume('game')
        }, [], this)
    }
}