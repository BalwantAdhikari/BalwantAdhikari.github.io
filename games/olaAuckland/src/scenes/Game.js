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
        
        this.diary = this.add.image(0, 0, "diary")
        Align.scaleToGameW(this.diary, 0.14)
        this.diaryGlow = this.add.image(0, 0, "diaryGlow")
        Align.scaleToGameW(this.diaryGlow, 0.14)
        this.headphones = this.add.image(0, 0, "headphones")
        Align.scaleToGameW(this.headphones, 0.12)
        this.headphonesGlow = this.add.image(0, 0, "headphonesGlow")
        Align.scaleToGameW(this.headphonesGlow, 0.12)
        this.keyHolder = this.add.image(0, 0, "keyHolder")
        Align.scaleToGameW(this.keyHolder, 0.2)
        this.keys = this.add.image(0, 0, "keys")
        Align.scaleToGameW(this.keys, 0.06)
        this.keysGlow = this.add.image(0, 0, "keysGlow")
        Align.scaleToGameW(this.keysGlow, 0.06)
        this.laptop = this.add.image(0, 0, "laptop")
        Align.scaleToGameW(this.laptop, 0.19)
        this.laptopGlow = this.add.image(0, 0, "laptopGlow")
        Align.scaleToGameW(this.laptopGlow, 0.19)
        this.lunch = this.add.image(0, 0, "lunch")
        Align.scaleToGameW(this.lunch, 0.12)
        this.lunchGlow = this.add.image(0, 0, "lunchGlow")
        Align.scaleToGameW(this.lunchGlow, 0.12)
        this.mask = this.add.image(0, 0, "mask")
        Align.scaleToGameW(this.mask, 0.06)
        this.maskGlow = this.add.image(0, 0, "maskGlow")
        Align.scaleToGameW(this.maskGlow, 0.06)
        this.phone = this.add.image(0, 0, "phone")
        Align.scaleToGameW(this.phone, 0.12)
        this.phoneGlow = this.add.image(0, 0, "phoneGlow")
        Align.scaleToGameW(this.phoneGlow, 0.12)
        this.sanitizer = this.add.image(0, 0, "sanitizer")
        Align.scaleToGameW(this.sanitizer, 0.06)
        this.sanitizerGlow = this.add.image(0, 0, "sanitizerGlow")
        Align.scaleToGameW(this.sanitizerGlow, 0.06)
        this.shades = this.add.image(0, 0, "shades")
        Align.scaleToGameW(this.shades, 0.1)
        this.shadesGlow = this.add.image(0, 0, "shadesGlow")
        Align.scaleToGameW(this.shadesGlow, 0.1)
        this.wallet = this.add.image(0, 0, "wallet")
        Align.scaleToGameW(this.wallet, 0.12)
        this.walletGlow = this.add.image(0, 0, "walletGlow")
        Align.scaleToGameW(this.walletGlow, 0.12)
        this.logo = this.add.image(0, 0, "logo")
        Align.scaleToGameW(this.logo, 0.17)

        this.graphics = this.add.graphics()
        this.graphics1 = this.add.graphics()
        this.graphics2 = this.add.graphics()
        this.progressBar = this.graphics
        this.progressBox = this.graphics1
        this.progressIndicator = this.graphics2

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
        this.keys.x = this.bgWidth / 4.7
        this.keys.y = (this.bgHeight / 3.6) + ((this.height - this.bgHeight) / 2)

        this.keysGlow.setPosition(this.keys.x, this.keys.y)
        this.keysGlow.setVisible(false)

        // mask
        this.mask.x = this.bgWidth / 2.8
        this.mask.y = (this.bgHeight / 3.35) + ((this.height - this.bgHeight) / 2)

        this.maskGlow.setPosition(this.mask.x, this.mask.y)
        this.maskGlow.setVisible(false)

        // sanitizer
        this.sanitizer.x = this.bgWidth / 6.5
        this.sanitizer.y = (this.bgHeight / 2.95) + ((this.height - this.bgHeight) / 2)

        this.sanitizerGlow.setPosition(this.sanitizer.x, this.sanitizer.y)
        this.sanitizerGlow.setVisible(false)

        // shades
        this.shades.x = this.bgWidth - this.bgWidth / 7
        this.shades.y = (this.bgHeight / 2 + this.bgHeight / 6.5) + ((this.height - this.bgHeight) / 2)

        this.shadesGlow.setPosition(this.shades.x, this.shades.y)
        this.shadesGlow.setVisible(false)

        // lunch
        this.lunch.x = this.bgWidth - this.bgWidth / 4
        this.lunch.y = (this.bgHeight / 2 + this.bgHeight / 2.3)  + ((this.height - this.bgHeight) / 2)

        this.lunchGlow.setPosition(this.lunch.x, this.lunch.y)
        this.lunchGlow.setVisible(false)

        // diary
        this.diary.x = this.bgWidth - this.bgWidth / 7
        this.diary.y = (this.bgHeight / 2 + this.bgHeight / 2.15) + ((this.height - this.bgHeight) / 2)

        this.diaryGlow.setPosition(this.diary.x, this.diary.y)
        this.diaryGlow.setVisible(false)

        // headphones
        this.headphones.x = this.bgWidth - this.bgWidth / 7
        this.headphones.y = (this.bgHeight / 2 + this.bgHeight / 2.3) + ((this.height - this.bgHeight) / 2)

        this.headphonesGlow.setPosition(this.headphones.x, this.headphones.y)
        this.headphonesGlow.setVisible(false)

        // wallet
        this.wallet.x = this.bgWidth / 3.5
        this.wallet.y = (this.bgHeight / 2 + this.bgHeight / 2.6) + ((this.height - this.bgHeight) / 2)

        this.walletGlow.setPosition(this.wallet.x, this.wallet.y)
        this.walletGlow.setVisible(false)

        // phone
        this.phone.x = this.bgWidth / 5.4
        this.phone.y = (this.bgHeight / 2 + this.bgHeight / 4.4) + ((this.height - this.bgHeight) / 2)

        this.phoneGlow.setPosition(this.phone.x, this.phone.y)
        this.phoneGlow.setVisible(false)

        // laptop
        this.laptop.x = this.bgWidth / 3.2
        this.laptop.y = (this.bgHeight / 2 + this.bgHeight / 4.6) + ((this.height - this.bgHeight) / 2)

        this.laptopGlow.setPosition(this.laptop.x, this.laptop.y)
        this.laptopGlow.setVisible(false)

        // logo
        this.logo.x = this.bgWidth - this.bgWidth / 6
        this.logo.y = (this.bgHeight / 18) + ((this.height - this.bgHeight) / 2)

        // progress bar
        this.progressBarHeight = this.logo.scaleY * this.logo.height
        this.progressBarY = this.logo.y - ((this.logo.scaleY * this.logo.height) / 2)
        this.progressBox.lineStyle(2, 0x000000, 1)
        this.progressBox.strokeRect(this.scale.width/11.5, this.progressBarY, this.scale.width/1.8, this.progressBarHeight);

        this.countdown = new CountdownController(this, this.progressIndicator, this.progressBar, this.progressBarHeight, this.progressBarY)
        this.countdown.start(this.handleCountdownFinished.bind(this))

        // disapper game object when clicked
        this.GameObjects = [
            this.diary,
            this.keys,
            this.headphones,
            this.laptop,
            this.lunch,
            this.mask,
            this.phone,
            this.sanitizer,
            this.shades,
            this.wallet
        ]
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

                this.removeObject(element)

                if (this.clickableGameObjects.indexOf(element) < this.clickableGameObjects.length - 1)
                {
                    this.GameObjects[this.clickableGameObjects.indexOf(element) + 1].setVisible(false)
                    this.clickableGameObjects[this.clickableGameObjects.indexOf(element) + 1].setVisible(true)
                }
                else
                {
                    // show winning screen
                    this.scene.launch('won-screen')
                    this.scene.pause()
                }
            }, this)
        });

        this.time.delayedCall(50, () => {
            this.diary.setVisible(false)
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
        this.scene.launch('sorry-screen')
        this.scene.pause()
    }

    showSplashScreen()
    {
        this.scene.launch('splash-screen')
        this.scene.pause()
    }

    removeObject(element)
    {
        this.tweens.add({
            targets: element,
            scale: element.scale + 0.1,
            duration: 300,
            onComplete: () => {
                this.tweens.add({
                    targets: element,
                    scale: 0,
                    duration: 300,
                    onComplete: () => {
                        element.visible = false
                    },
                    ease: 'Linear'
                })
            },
            ease: 'Linear'
        })
    }
}