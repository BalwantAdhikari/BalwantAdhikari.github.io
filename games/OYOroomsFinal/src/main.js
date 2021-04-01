import Phaser from './lib/phaser.js'

import Preload from './scenes/Preload.js'
import Game from './scenes/Game.js'
import SplashScreen from './scenes/SplashScreen.js'
import LoadingScene from './scenes/LoadingScene.js'
import GameOver from './scenes/GameOver.js'

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
    scene: [Preload, LoadingScene, Game, SplashScreen, GameOver],
})