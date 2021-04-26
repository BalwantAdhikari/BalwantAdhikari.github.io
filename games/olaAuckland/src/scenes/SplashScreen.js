import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

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

        this.splashImage = this.add.image(this.scale.width/2, this.scale.height/2, "openingMsg")
        Align.scaleToGameW(this.splashImage, 1)

        this.splashText = this.add.image(this.scale.width/2, this.scale.height/2, "tapToPlay")
        Align.scaleToGameW(this.splashText, 1)

        this.input.on('pointerup', function(pointer) {
            this.scene.resume('game');
            this.scene.stop();
        }, this)
    }

}