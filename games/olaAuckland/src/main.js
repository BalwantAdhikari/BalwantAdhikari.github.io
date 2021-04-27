import Phaser from './lib/Phaser.js'

import Preload from './scenes/Preload.js'
import Game from './scenes/Game.js'
import SplashScreen from './scenes/SplashScreen.js'
import WonScreen from './scenes/WonScreen.js'
import SorryScreen from './scenes/SorryScene.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scene: [Preload, Game, SplashScreen, WonScreen, SorryScreen]
})