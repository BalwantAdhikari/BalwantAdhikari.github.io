import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'
import Dummy from './scenes/Dummy.js'
import SplashScreen from './scenes/SplashScreen.js'
import LoadingScene from './scenes/LoadingScene.js'
// import GameOver from './scenes/GameOver.js'

// create a new game
let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
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
    // scene: [LoadingScene, Game, SplashScreen, GameOver],
    scene: [LoadingScene, SplashScreen, Game, Dummy],
})