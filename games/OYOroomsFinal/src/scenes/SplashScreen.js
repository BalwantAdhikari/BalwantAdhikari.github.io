import Phaser from '../lib/Phaser.js'

export default class SplashScreen extends Phaser.Scene
{
    constructor()
    {
        super('splash-screen')
    }

    create()
    {
        this.controlBoard = this.add.graphics()
        const x = this.scale.width
        const y = this.scale.height
        this.controlBoard.fillStyle(0x000, 0.6)
        this.controlBoard.fillRect(0, 0, x, y)

        this.leftText = this.add.text(x/4, y/2, 'SWIPE LEFT\nTO MOVE LEFT',{font: 'bold 16px Arial'})
                .setOrigin(0.5)

        this.rightText = this.add.text(x* 3/4, y/2, 'SWIPE RIGHT\nTO MOVE RIGHT',{font: 'bold 16px Arial'})
        .setOrigin(0.5)

        this.leftImg = this.add.image(x/4, (y/4 + y/2)/2, 'swipe-left').setScale(0.1)
        this.rightImg = this.add.image(x * 3/4, (y/4 + y/2)/2, 'swipe-right').setScale(0.1)

        this.time.delayedCall(2000, () => {
            this.controlBoard.setVisible(false)
            this.leftText.setVisible(false)
            this.rightText.setVisible(false)
            this.leftImg.setVisible(false)
            this.rightImg.setVisible(false)

            this.scene.resume('game');
            this.scene.stop();
        }, [], this)
    }

}