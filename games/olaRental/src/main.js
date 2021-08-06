import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'
import SplashScreen from './scenes/SplashScreen.js'
import LoadingScene from './scenes/LoadingScene.js'
// import GameOver from './scenes/GameOver.js'

// create a new game
let game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 360 * window.devicePixelRatio,
    // height: 640 * window.devicePixelRatio,
    // resolution: window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    },
    // scene: [LoadingScene, Game, SplashScreen, GameOver],
    scene: [LoadingScene, SplashScreen, Game],
    // scale: {
    //     mode: Phaser.Scale.ScaleModes.FIT,
    //     autoCenter: Phaser.Scale.Center.CENTER_BOTH
    // }
})

var canvas = document.getElementsByTagName('canvas')[0]
canvas.style.width = canvas.style.width || canvas.width + 'px';
canvas.style.height = canvas.style.height || canvas.height + 'px';

// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
var ctx = canvas.getContext('2d');
// Scale all drawing operations by the dpr, so you
// don't have to worry about the difference.
ctx.scale(dpr, dpr);
