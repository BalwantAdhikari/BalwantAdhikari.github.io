import Phaser from '../lib/Phaser.js'

export default class Preload extends Phaser.Scene{

    platform;
    counter = 0;

    constructor()
    {
        super('preload')
    }

    preload()
    {
        this.platform = this;
        this.counter = 0;

        this.load.image('background', 'assets/BG-13.jpg')
        this.load.image('keyHolder', 'assets/Key-Holder.png')
        this.load.image('keys', 'assets/KeysGlow.png')
        this.load.image('mask', 'assets/Mask.png')
        this.load.image('maskGlow', 'assets/MaskGlow.png')
        this.load.image('sanitizer', 'assets/Sanitizer.png')
        this.load.image('sanitizerGlow', 'assets/SanitizerGlow.png')
    }

    create()
    {
        this.scene.start('game')
    }
}