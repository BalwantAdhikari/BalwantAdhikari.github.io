import Phaser from '../lib/Phaser.js'

import CountdownController from './CountdownController.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene {

    count
    mainCounter
    flag

    init()
    {
        this.count = 0
        this.mainCounter = 0
        this.flag = 0
    }

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
        Align.scaleToGameW(this.logo, 0.207)
        this.cab = this.add.image(0, 0, "cab").setOrigin(0, 1)
        Align.scaleToGameW(this.cab, 0.1)
        this.locationPin = this.add.image(0, 0, "locationPin").setOrigin(0.5, 1)
        Align.scaleToGameW(this.locationPin, 0.035)

        this.tapSound = this.sound.add('tapSound')

        this.graphics = this.add.graphics()
        this.timeLine = this.graphics

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

        // mask
        this.mask.x = this.bgWidth / 2.8
        this.mask.y = (this.bgHeight / 3.35) + ((this.height - this.bgHeight) / 2)

        this.maskGlow.setPosition(this.mask.x, this.mask.y)

        // sanitizer
        this.sanitizer.x = this.bgWidth / 6.5
        this.sanitizer.y = (this.bgHeight / 2.95) + ((this.height - this.bgHeight) / 2)

        this.sanitizerGlow.setPosition(this.sanitizer.x, this.sanitizer.y)

        // shades
        this.shades.x = this.bgWidth / 4
        this.shades.y = (this.bgHeight / 2 + this.bgHeight / 4.2) + ((this.height - this.bgHeight) / 2)

        this.shadesGlow.setPosition(this.shades.x, this.shades.y)

        // lunch
        this.lunch.x = this.bgWidth - this.bgWidth / 4
        this.lunch.y = (this.bgHeight / 2 + this.bgHeight / 2.3)  + ((this.height - this.bgHeight) / 2)

        this.lunchGlow.setPosition(this.lunch.x, this.lunch.y)

        // diary
        this.diary.x = this.bgWidth - this.bgWidth / 7
        this.diary.y = (this.bgHeight / 2 + this.bgHeight / 2.15) + ((this.height - this.bgHeight) / 2)

        this.diaryGlow.setPosition(this.diary.x, this.diary.y)

        // headphones
        this.headphones.x = this.bgWidth - this.bgWidth / 7
        this.headphones.y = (this.bgHeight / 2 + this.bgHeight / 2.3) + ((this.height - this.bgHeight) / 2)

        this.headphonesGlow.setPosition(this.headphones.x, this.headphones.y)

        // wallet
        this.wallet.x = this.bgWidth / 3.5
        this.wallet.y = (this.bgHeight / 2 + this.bgHeight / 2.6) + ((this.height - this.bgHeight) / 2)

        this.walletGlow.setPosition(this.wallet.x, this.wallet.y)

        // phone
        this.phone.x = this.bgWidth / 5.4
        this.phone.y = (this.bgHeight / 2 + this.bgHeight / 4.4) + ((this.height - this.bgHeight) / 2)

        this.phoneGlow.setPosition(this.phone.x, this.phone.y)

        // laptop
        this.laptop.x = this.bgWidth / 3.2
        this.laptop.y = (this.bgHeight / 2 + this.bgHeight / 4.6) + ((this.height - this.bgHeight) / 2)

        this.laptopGlow.setPosition(this.laptop.x, this.laptop.y)

        // logo
        this.logo.x = this.bgWidth - this.bgWidth / 7.2
        this.logo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

        // cab
        this.cab.x = this.scale.width / 25
        this.cab.y = (this.bgHeight / 10) + ((this.height - this.bgHeight) / 2)

        // locationPin
        this.locationPin.x = this.scale.width/1.88
        this.locationPin.y = (this.bgHeight / 10) + ((this.height - this.bgHeight) / 2)

        // timeLine
        this.timeLine.fillStyle(0x000000, 1)
        this.timeLine.fillRect(this.scale.width / 25, (this.bgHeight / 10) + ((this.height - this.bgHeight) / 2), this.scale.width / 1.88 - this.scale.width / 35, 3)
        
        this.countdown = new CountdownController(this, this.cab)
        this.countdown.start(this.handleCountdownFinished.bind(this))

        this.flagArr = [true, true, true, true, true, true, true, true, true, true]

        // disapper game object when clicked
        this.GameObjects = [
            this.mask,
            this.keys,
            this.sanitizer,
            this.phone,
            this.laptop,
            this.shades,
            this.wallet,
            this.lunch,
            this.headphones,
            this.diary
        ]
        this.clickableGameObjects = [
            this.maskGlow,
            this.keysGlow,
            this.sanitizerGlow,
            this.phoneGlow,
            this.laptopGlow,
            this.shadesGlow,
            this.walletGlow,
            this.lunchGlow,
            this.headphonesGlow,
            this.diaryGlow
        ]

        this.clickableGameObjects.forEach(element => {
            element.visible = false
        });

        this.clickableGameObjects.forEach(element => {
            element.setInteractive().on('pointerup', function(pointer, localX, localY, event){
                this.tapSound.play()
                this.input.disable(element)
                this.removeObject(element, 'glow')

            }, this)
        });

        this.GameObjects.forEach(element => {
            element.setInteractive().on('pointerup', function(pointer, localX, localY, event){
                this.tapSound.play()
                this.input.disable(element)
                this.removeObject(element, 'plain')

            }, this)
        });

    }

    update()
    {
        this.countdown.update()

        this.mainCounter += 1
    
        if(this.mainCounter % 21 == 0)
        {
            if(this.GameObjects[this.flag].scale > 0)
                this.GameObjects[this.flag].visible = false
            if(this.clickableGameObjects[this.flag].scale > 0)
                this.clickableGameObjects[this.flag].visible = true
        }

        if(this.mainCounter % 40 == 0)
        {
            if(this.clickableGameObjects[this.flag].scale > 0)
                this.clickableGameObjects[this.flag].visible = false
            if(this.GameObjects[this.flag].scale > 0)
                this.GameObjects[this.flag].visible = true

            if(this.flagArr.includes(true))
            {
                this.flag = this.increaseFlag(this.flag)
            }

        }

    }

    handleCountdownFinished()
    {
        // show losing screen
        this.logo.setVisible(false)
        this.scene.launch('sorry-screen')
        this.scene.pause()
    }

    win()
    {
        // show winning screen
        this.logo.setVisible(false)
        this.scene.launch('won-screen')
        this.scene.pause()
    }

    increaseFlag(flag)
    {
        if(this.flag < 9)
        {
            do
            {
                if(this.flagArr.includes(true))
                {
                    if(this.flag < 9)
                    this.flag += 1
                    else
                        this.flag = 0
                }
                else
                    break
            }
            while(!this.flagArr[this.flag])
        
        }
        else
            this.flag = 0

        return this.flag
    }

    removeObject(element, type)
    {
        if(type == "glow")
        {
            this.GameObjects[this.clickableGameObjects.indexOf(element)].scale = 0
            this.GameObjects[this.clickableGameObjects.indexOf(element)].setVisible(false)
            this.flagArr[this.clickableGameObjects.indexOf(element)] = false
        }
        else if(type == "plain")
        {
            this.clickableGameObjects[this.GameObjects.indexOf(element)].scale = 0
            this.clickableGameObjects[this.GameObjects.indexOf(element)].setVisible(false)
            this.flagArr[this.GameObjects.indexOf(element)] = false
        }

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
                        if(this.count < 9)
                            this.count += 1
                        else
                            this.win()
                    },
                    ease: 'Linear'
                })
            },
            ease: 'Linear'
        })
        
    }
}