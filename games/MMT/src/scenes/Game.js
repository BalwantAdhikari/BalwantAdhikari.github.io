import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene{

    count = 0
    canSpin = true

    constructor()
    {
        super('game')
    }

    preload()
    {
        this.load.image('background', 'assets/Background.png')
        this.load.image('wheel-reflection', 'assets/Wheel_Reflection.png')
        this.load.image('header-text', 'assets/Header_Text.png')
        this.load.image('play-button', 'assets/Play_Button.png')
        this.load.image('wheel', 'assets/wheel-copy3.png')
        this.load.image('stopper', 'assets/Wheel_Stoper.png')
        this.load.image('coin', 'assets/coin.png')
        this.load.audio('tickSound', 'assets/ding.mp3')
        this.load.audio('applaude', 'assets/applaude.mp3')
    }

    create()
    {
        this.tickSound = this.sound.add('tickSound', {
            volume: 0.3
        })

        this.applaudeSound = this.sound.add('applaude', {
            volume: 0.2
        })
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'background').setScale(1)
        this.wheelReflection = this.add.image(this.scale.width/2, this.scale.height/2, 'wheel-reflection')
        Align.scaleToGameW(this.wheelReflection, 2)
        this.headerText = this.add.image(this.scale.width/2, this.scale.height/11, 'header-text')
        Align.scaleToGameW(this.headerText, 1.5)
        this.playButton = this.add.image(this.scale.width/2, this.scale.height - (this.scale.height/11), 'play-button')
        Align.scaleToGameW(this.playButton, 1.3)
        this.rightCoin = this.add.image(this.scale.width/4 + this.scale.width/10, this.scale.height/2 + this.scale.height/5, 'coin').setOrigin(0.5)
        Align.scaleToGameW(this.rightCoin, 0.3)
        this.rightCoin.setVisible(false)
        this.leftCoin = this.add.image(this.scale.width* 3/4 - this.scale.width/10, this.scale.height/2 + this.scale.height/5, 'coin').setOrigin(0.5).setFlipX(true)
        Align.scaleToGameW(this.leftCoin, 0.3)
        this.leftCoin.setVisible(false)
        this.wheel = this.physics.add.image(this.scale.width/2, this.scale.height/2, 'wheel').setOrigin(0.5)
        Align.scaleToGameW(this.wheel, 0.9)
        this.stoper = this.physics.add.image(this.scale.width/2, this.scale.height/2 - this.wheel.height * this.wheel.scale/2, 'stopper').setOrigin(0.5, 0.1)
        Align.scaleToGameW(this.stoper, 1)
        this.displayPrize = this.add.graphics()
        this.displayPrize.fillRect(0, 0, this.scale.width, this.scale.height);

        this.prizeText = this.add.text(this.scale.width/2, this.scale.height/2, "", {
            font: "bold 32px Arial",
            align: "center",
            color: "white",
            wordWrap: {width: this.scale.width}
        });

        this.prizeText.setOrigin(0.5)

        // prize names, starting from 12 o'clock going clockwise
        this.slicePrizes = [
            "12% off on 5 star Hotels",
            "1 Night Free Stay at Atlantis Hotel (jackpot)",
            "12% off on flights",
            "Flights at 50% off",
            "Free stay for two at Hilton Ras Al Khaimah Beach Resort",
            "Better luck next time!",
            ]
 
        // so the wheel does not fall in y axis
        this.physics.world.gravity.y = 0

        this.playButton.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            if(this.canSpin)
            {
                this.count = 0

                // if the player play again
                this.prizeText.setColor("white")
                
                // resetting text field
                this.prizeText.setText("");

                // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
                const degrees = Phaser.Math.Between(0, 360);

                // now the wheel cannot spin because it's already spinning
                this.canSpin = false;

                // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
                const prize = 5 - Math.floor(degrees / 60);

                this.tweens.add({
                    targets: this.wheel,
                    // rotation: 6.285,
                    angle: 360 * 4 + degrees,
                    onUpdate: tween => {

                        this.count += 1
                        
                        if(this.count > 0 && this.count < 41)
                        {
                            if(this.count % 20 == 0)
                            {
                                this.tickSound.play()
                            }
                        }
                        else if(this.count < 150)
                        {
                            if(this.count % 3 == 0)
                            {
                                this.tickSound.play()
                            }
                        }

                    },
                    onComplete: tween => {
                        console.log(this.slicePrizes[prize])
                        if(prize != 5)
                        {
                            this.applaudeSound.play()
                            this.leftCoin.setVisible(true)
                            this.rightCoin.setVisible(true)
                            this.displayPrize.fillStyle(0x000000, 0.7)
                            // displaying prize text
                            this.prizeText.setText(this.slicePrizes[prize]);
                        }
                        else
                        {
                            this.canSpin = true
                            this.prizeText.setColor("black")
                            this.prizeText.setText("Try Again!")
                        }


                    },
                    duration: 3000,
                    ease: 'Cubic.InOut'
                });

                this.tweens.add({
                    targets: this.wheelReflection,
                    // rotation: 6.285,
                    // rotation: 30,
                    angle: 360 * 4 + degrees,  
                    duration: 3000,
                    ease: 'Cubic.InOut'
                });
                
            }
        }, this);
        
        
    }

    update()
    {
    }

}