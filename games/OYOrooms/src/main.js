import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'
import LoadingScene from './scenes/LoadingScene.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scene: [LoadingScene, Game],
})