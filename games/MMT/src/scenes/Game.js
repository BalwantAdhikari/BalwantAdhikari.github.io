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
        this.load.image('logo', 'assets/Logo.png')
        this.load.image('wheel-reflection', 'assets/Wheel_Reflection.png')
        this.load.image('header-text', 'assets/first-frame.png')
        this.load.image('play-button', 'assets/Play_Button.png')
        this.load.image('wheel', 'assets/wheel.png')
        this.load.image('stopper', 'assets/Wheel_Stoper.png')
        this.load.image('endText', 'assets/end-text2.png')
        this.load.image('download-button', 'assets/download_button.png')
        this.load.audio('tickSound', 'assets/ding.mp3')
        this.load.audio('applaude', 'assets/applaude.mp3')
        this.load.image('spark0', 'assets/blue.png')
        this.load.image('spark1', 'assets/red.png')
        this.load.image('coin1', 'assets/coin1.png')
    }

    create()
    {
        this.tickSound = this.sound.add('tickSound', {
            volume: 1
        })

        this.applaudeSound = this.sound.add('applaude', {
            volume: 0.2
        })
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'background').setScale(1)
        this.wheelReflection = this.add.image(this.scale.width/2, this.scale.height/2, 'wheel-reflection')
        Align.scaleToGameW(this.wheelReflection, 1.5)
        this.logo = this.add.image(this.scale.width/2, this.scale.height/12, 'logo')
        Align.scaleToGameW(this.logo, 0.3)
        this.headerText = this.add.image(this.scale.width/2, this.scale.height/5.5, 'header-text')
        Align.scaleToGameW(this.headerText, 0.75)
        this.playButton = this.add.image(this.scale.width/2, this.scale.height - (this.scale.height/11), 'play-button')
        Align.scaleToGameW(this.playButton, 0.5)
        this.wheel = this.add.image(this.scale.width/2, this.scale.height/2, 'wheel').setOrigin(0.5)
        Align.scaleToGameW(this.wheel, 0.9)
        this.endText = this.add.image(this.scale.width/2, this.scale.height/2, 'endText')
        Align.scaleToGameW(this.endText, 0.7)
        this.endText.setVisible(false)
        this.downloadButton = this.add.image(this.scale.width/2, this.scale.height - (this.scale.height/3), 'download-button')
        Align.scaleToGameW(this.downloadButton, 0.65)
        this.downloadButton.setVisible(false)
        this.endCoin = this.add.image(this.scale.width/2, this.scale.height/2, 'endCoin')
        Align.scaleToGameW(this.endCoin, 1)
        this.endCoin.setVisible(false)

        this.coins = this.add.particles('coin1').createEmitter(
            {
                x: this.scale.width/2,
                y: this.scale.height + 20,
                angle: { min: 250, max: 290 },
                speed: { min: 200, max: 600},
                gravityY: 250,
                lifespan: 5000,
                blendMode: 'NORMAL',
                duration: 10,
                active: false,
                quantity: 20,
                scale: 0.25
        });

        this.emitter0 = this.add.particles('spark0').createEmitter({
            x: 400,
            y: 300,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            active: false,
            lifespan: 1000,
            gravityY: 800
        });
    
        this.emitter1 = this.add.particles('spark1').createEmitter({
            x: 400,
            y: 300,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.3, end: 0 },
            blendMode: 'ADD',
            active: false,
            lifespan: 1000,
            gravityY: 800
        });

        this.coinEmitter = this.add.particles('coin1').createEmitter({
            x: this.scale.width/2,
            y: this.scale.height/2,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.3, end: 0 },
            blendMode: 'ADD',
            active: false,
            lifespan: 3000,
            gravityY: 400
        });

        var shape1 = new Phaser.Geom.Circle(0, 0, this.scale.width*0.84/2);
        this.emitter = this.add.particles('spark0').createEmitter({
            x: this.scale.width/2,
            y: this.scale.height/2,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            radial: true,
            delay: 10,
            // radial: true,
            angle: { min: 0, max: 360 },
            emitZone: { type: 'edge', source: shape1, quantity: 27, yoyo: false,  }
        });

        this.wheelRef1 = this.tweens.add({
            targets: this.wheelReflection,
            angle: 360,
            loop: -1,  
            duration: 1500,
        });

        this.stopper = this.add.image(this.scale.width/2, this.scale.height/2 - this.wheel.height * this.wheel.scale/2, 'stopper').setOrigin(0.5, 0.1)
        Align.scaleToGameW(this.stopper, 1)

        this.playButton.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            if(this.canSpin)
            {
                this.count = 0

                // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
                const degrees = 95;

                // now the wheel cannot spin because it's already spinning
                this.canSpin = false;

                this.wheelRef1.stop()
                
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
           
                            this.applaudeSound.play()
                            this.coins.resume()
                            for(let j=0; j<10; j++)
                            {
                                this.coins.explode()
                            }

                            this.time.delayedCall(5000, () => {
                                this.emitter.stop()
                                this.wheel.setVisible(false)
                                this.stopper.setVisible(false)
                                this.headerText.setVisible(false)
                                this.playButton.setVisible(false)
                                this.endText.setVisible(true)
                                this.downloadButton.setVisible(true)
                                this.downloadButton.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
                                    FbPlayableAd.onCTAClick()
                                }, this);

                                this.emitter0.resume()
                                this.emitter1.resume()

                                for(let j=0; j<20; j++)
                                {
                                    this.emitter0.setPosition(this.scale.width/2, this.scale.height/2);
                                    this.emitter1.setPosition(this.scale.width/2, this.scale.height/2);
                                    for(let i=0; i<20; i++)
                                    {
                                        this.emitter0.explode();
                                        this.emitter1.explode();
                                    }
                                }

                            }, [], this)
                    },
                    duration: 3000,
                    ease: 'Cubic.Out'
                });

                this.tweens.add({
                    targets: this.wheelReflection,
                    angle: 360 * 4,  
                    duration: 8000,
                    ease: 'Linear'
                });
                
            }
        }, this);
        
        
    }

    update()
    {
    }

}