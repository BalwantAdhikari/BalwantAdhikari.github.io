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

        this.load.image('background', 'assets/Background.jpg')
        this.load.image('blurredBackground', 'assets/blurredBackground.jpg')
        this.load.image('diary', 'assets/Diary.png')
        this.load.image('diaryGlow', 'assets/DiaryGlow.png')
        this.load.image('headphones', 'assets/Headphones.png')
        this.load.image('headphonesGlow', 'assets/HeadphonesGlow.png')
        this.load.image('keyHolder', 'assets/Key-Holder.png')
        this.load.image('keys', 'assets/Keys.png')
        this.load.image('keysGlow', 'assets/KeysGlow.png')
        this.load.image('laptop', 'assets/Laptop.png')
        this.load.image('laptopGlow', 'assets/LaptopGlow.png')
        this.load.image('lunch', 'assets/Lunch.png')
        this.load.image('lunchGlow', 'assets/LunchGlow.png')
        this.load.image('mask', 'assets/Mask.png')
        this.load.image('maskGlow', 'assets/MaskGlow.png')
        this.load.image('phone', 'assets/Phone.png')
        this.load.image('phoneGlow', 'assets/PhoneGlow.png')
        this.load.image('sanitizer', 'assets/Sanitizer.png')
        this.load.image('sanitizerGlow', 'assets/SanitizerGlow.png')
        this.load.image('shades', 'assets/Shades.png')
        this.load.image('shadesGlow', 'assets/ShadesGlow.png')
        this.load.image('wallet', 'assets/Wallet.png')
        this.load.image('walletGlow', 'assets/WalletGlow.png')
        this.load.image('logo', 'assets/Logo.png')
        this.load.image('openingMsg', 'assets/openingMsg.png')
        this.load.image('TTSblack', 'assets/TTSblack.png')
        this.load.image('TTSgreen', 'assets/TTSgreen.png')
        this.load.image('sorryMsg', 'assets/sorryMsg.png')
        this.load.image('tryagainBlack', 'assets/tryagainBlack.png')
        this.load.image('tryagainGreen', 'assets/tryagainGreen.png')
        this.load.image('wonImage', 'assets/congrateMsg.png')
        this.load.image('cab', 'assets/Cab-icon.png')
        this.load.image('locationPin', 'assets/Location-icon.png')
        // this.load.image('wonMsg', 'assets/completedMsg.png')
        this.load.image('lines', 'assets/Lines.png')
        this.load.image('linesCongrate', 'assets/LinesCongrate.png')

        this.load.audio('congratsSound', 'assets/applaude.mp3')
        this.load.audio('tapSound', 'assets/tap-click.mp3')
        this.load.audio('tryAgainSound', 'assets/Try-Again.mp3')
    }

    create()
    {
        this.scene.start('splash-screen')
    }
}