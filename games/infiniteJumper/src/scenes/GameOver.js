import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene
{
    constructor()
    {
        super('game-over')
    }

    create()
    {
        const width = this.scale.width
        const height = this.scale.height

        this.add.text(this.scale.width/2, this.scale.height/2, 'Game Over\nPress and Hold\nto Restart', {
            fontSize: 48,
            align: 'center'
        })
        .setOrigin(0.5)

        this.input.keyboard.once('keydown_SPACE', () => {
            this.scene.start('game')
        })

    }

    update()
    {
        if(this.input.pointer1.isDown)
        {
            this.scene.start('game')
        }
    }
}