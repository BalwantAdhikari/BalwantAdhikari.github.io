import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'
import Dummy from './scenes/Dummy.js'
import SplashScreen from './scenes/SplashScreen.js'
import LoadingScene from './scenes/LoadingScene.js'
import WonScene from './scenes/Won.js'
import LostScene from './scenes/Lost.js'

// create a new game
let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    resolution: window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [LoadingScene, SplashScreen, Game, Dummy, WonScene, LostScene],
})