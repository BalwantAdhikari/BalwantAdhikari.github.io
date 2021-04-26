import Phaser from '../lib/Phaser.js'

import CountdownController from './CountdownController.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene {

    constructor()
    {
        super('game')
    }

    preload()
    {

    }

    create()
    {
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background")
        Align.scaleToGameW(this.background, 1)
        
        // this.diary = this.add.image(0, 0, "diary")
        // Align.scaleToGameW(this.diary, 0.14)
        this.diaryGlow = this.add.image(0, 0, "diaryGlow")
        Align.scaleToGameW(this.diaryGlow, 0.14)
        // this.headphones = this.add.image(0, 0, "headphones")
        // Align.scaleToGameW(this.headphones, 0.12)
        this.headphonesGlow = this.add.image(0, 0, "headphonesGlow")
        Align.scaleToGameW(this.headphonesGlow, 0.12)
        this.keyHolder = this.add.image(0, 0, "keyHolder")
        Align.scaleToGameW(this.keyHolder, 0.2)
        // this.keys = this.add.image(0, 0, "keys")
        // Align.scaleToGameW(this.keys, 0.06)
        this.keysGlow = this.add.image(0, 0, "keysGlow")
        Align.scaleToGameW(this.keysGlow, 0.06)
        // this.laptop = this.add.image(0, 0, "laptop")
        // Align.scaleToGameW(this.laptop, 0.19)
        this.laptopGlow = this.add.image(0, 0, "laptopGlow")
        Align.scaleToGameW(this.laptopGlow, 0.19)
        // this.lunch = this.add.image(0, 0, "lunch")
        // Align.scaleToGameW(this.lunch, 0.12)
        this.lunchGlow = this.add.image(0, 0, "lunchGlow")
        Align.scaleToGameW(this.lunchGlow, 0.12)
        // this.mask = this.add.image(0, 0, "mask")
        // Align.scaleToGameW(this.mask, 0.06)
        this.maskGlow = this.add.image(0, 0, "maskGlow")
        Align.scaleToGameW(this.maskGlow, 0.06)
        // this.phone = this.add.image(0, 0, "phone")
        // Align.scaleToGameW(this.phone, 0.12)
        this.phoneGlow = this.add.image(0, 0, "phoneGlow")
        Align.scaleToGameW(this.phoneGlow, 0.12)
        // this.sanitizer = this.add.image(0, 0, "sanitizer")
        // Align.scaleToGameW(this.sanitizer, 0.06)
        this.sanitizerGlow = this.add.image(0, 0, "sanitizerGlow")
        Align.scaleToGameW(this.sanitizerGlow, 0.06)
        // this.shades = this.add.image(0, 0, "shades")
        // Align.scaleToGameW(this.shades, 0.1)
        this.shadesGlow = this.add.image(0, 0, "shadesGlow")
        Align.scaleToGameW(this.shadesGlow, 0.1)
        // this.wallet = this.add.image(0, 0, "wallet")
        // Align.scaleToGameW(this.wallet, 0.12)
        this.walletGlow = this.add.image(0, 0, "walletGlow")
        Align.scaleToGameW(this.walletGlow, 0.12)
        this.logo = this.add.image(0, 0, "logo")
        Align.scaleToGameW(this.logo, 0.17)

        this.graphics = this.add.graphics()
        this.graphics1 = this.add.graphics()
        this.progressBox = this.graphics1
        this.progressBar = this.graphics

        // this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()

        // this.aGrid.placeAtIndex(47, this.keyHolder)
        // this.aGrid.placeAtIndex(46, this.keysGlow)
        // this.aGrid.placeAtIndex(48, this.maskGlow)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.background.scaleX * this.background.width
        this.bgHeight = this.background.scaleX * this.background.width

        // keyHolder
        this.keyHolder.x = this.bgWidth / 3.5
        this.keyHolder.y = (this.bgHeight / 4.2) + ((this.height - this.bgHeight) / 2)

        // keys
        this.keysGlow.x = this.bgWidth / 4.7
        this.keysGlow.y = (this.bgHeight / 3.6) + ((this.height - this.bgHeight) / 2)

        // mask
        this.maskGlow.x = this.bgWidth / 2.8
        this.maskGlow.y = (this.bgHeight / 3.35) + ((this.height - this.bgHeight) / 2)

        // sanitizer
        this.sanitizerGlow.x = this.bgWidth / 6.5
        this.sanitizerGlow.y = (this.bgHeight / 2.95) + ((this.height - this.bgHeight) / 2)

        // shades
        this.shadesGlow.x = this.bgWidth - this.bgWidth / 7
        this.shadesGlow.y = (this.bgHeight / 2 + this.bgHeight / 6.5) + ((this.height - this.bgHeight) / 2)

        // lunch
        this.lunchGlow.x = this.bgWidth - this.bgWidth / 4
        this.lunchGlow.y = (this.bgHeight / 2 + this.bgHeight / 2.3)  + ((this.height - this.bgHeight) / 2)

        // diary
        this.diaryGlow.x = this.bgWidth - this.bgWidth / 7
        this.diaryGlow.y = (this.bgHeight / 2 + this.bgHeight / 2.15) + ((this.height - this.bgHeight) / 2)

        // headphones
        this.headphonesGlow.x = this.bgWidth - this.bgWidth / 7
        this.headphonesGlow.y = (this.bgHeight / 2 + this.bgHeight / 2.3) + ((this.height - this.bgHeight) / 2)

        // wallet
        this.walletGlow.x = this.bgWidth / 3.5
        this.walletGlow.y = (this.bgHeight / 2 + this.bgHeight / 2.6) + ((this.height - this.bgHeight) / 2)

        // phone
        this.phoneGlow.x = this.bgWidth / 5.4
        this.phoneGlow.y = (this.bgHeight / 2 + this.bgHeight / 4.4) + ((this.height - this.bgHeight) / 2)

        // laptop
        this.laptopGlow.x = this.bgWidth / 3.2
        this.laptopGlow.y = (this.bgHeight / 2 + this.bgHeight / 4.6) + ((this.height - this.bgHeight) / 2)

        // logo
        this.logo.x = this.bgWidth - this.bgWidth / 5
        this.logo.y = (this.bgHeight / 18) + ((this.height - this.bgHeight) / 2)

        // progress bar
        this.progressBarHeight = this.logo.scaleY * this.logo.height
        this.progressBarY = this.logo.y - ((this.logo.scaleY * this.logo.height) / 2)
        this.progressBox.lineStyle(2, 0x000000, 1)
        this.progressBox.strokeRect(this.scale.width/8, this.progressBarY, this.scale.width/2, this.progressBarHeight);

        this.countdown = new CountdownController(this, this.progressBar, this.progressBarHeight, this.progressBarY)
        this.countdown.start(this.handleCountdownFinished.bind(this))

        // disapper game object when clicked
        this.clickableGameObjects = [
            this.diaryGlow,
            this.keysGlow,
            this.headphonesGlow,
            this.laptopGlow,
            this.lunchGlow,
            this.maskGlow,
            this.phoneGlow,
            this.sanitizerGlow,
            this.shadesGlow,
            this.walletGlow
        ]

        this.clickableGameObjects.forEach(element => {
            element.visible = false
        });

        this.clickableGameObjects.forEach(element => {
            element.setInteractive().on('pointerup', function(pointer, localX, localY, event){
                element.visible = false
                if (this.clickableGameObjects.indexOf(element) < this.clickableGameObjects.length - 1)
                {
                    this.clickableGameObjects[this.clickableGameObjects.indexOf(element) + 1].setVisible(true)
                }
                else
                {
                    // show winning screen
                }
            }, this)
        });

        this.time.delayedCall(300, () => {
            this.diaryGlow.setVisible(true)
        }, [], this)

        this.showSplashScreen()
        
    }

    update()
    {
        this.countdown.update()
    }

    handleCountdownFinished()
    {
        // show losing screen
    }

    showSplashScreen()
    {
        this.scene.launch('splash-screen')
        this.scene.pause()
    }
}