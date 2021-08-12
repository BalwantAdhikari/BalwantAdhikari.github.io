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
        this.crashSign = this.add.image(this.car.x, this.car.y, `game-msg${this.coinName.charAt(this.coinName.length - 1)}`)
        Align.scaleToGameW(this.crashSign, 0.5)

        this.time.delayedCall(1500, () => {
            this.coin.destroy()
            this.crashSign.destroy()
            this.scene.stop()
            this.scene.resume('game')
        }, [], this)
    }
}