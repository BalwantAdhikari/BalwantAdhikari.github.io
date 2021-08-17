import Phaser from '../lib/phaser.js'

import CountdownController from './CountdownController.js'

import Align from '../lib/util/align.js'

export default class Game extends Phaser.Scene 
{
    carSelected = ''
    flipflop
    count = 0

    constructor()
    {
        super('game')
    }

    init(data)
    {
        this.carSelected = data.car
        this.count = 0
    }

    preload()
    {
        
    }

    create()
    {
        // backgroundAudio
        this.backgroundAudio = this.sound.add('background', {
            volume: 0.03,
            // rate: 0.1,
            // loop: true
        })

        this.backgroundAudio.play()

        this.background = this.add.image(this.scale.width/2, this.scale.height/2, 'game-background')
        Align.scaleToGameW(this.background, 1)

        // this.divider = this.add.image(this.scale.width/2, this.scale.height/2, 'game-divider')
        // Align.scaleToGameW(this.divider, 1)

        this.divider1 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider1, 0.001)
        this.divider2 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider2, 0.001)
        this.divider3 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider3, 0.001)
        this.divider4 = this.add.image(this.scale.width/2, this.scale.height/2, 'game-dividerSingle')
        Align.scaleToGameW(this.divider4, 0.001)

        this.coinCollected = this.add.image(0, 0, 'game-coin')
        Align.scaleToGameW(this.coinCollected, 0.04)

        this.coinCollectedTxt = this.add.text(0, 0, this.count, {
            fontFamily: 'Helvetica',
            fontSize: `${window.devicePixelRatio * 14}px`,
            color: '#000',
            fontStyle: 'Bold',
            strokeThickness: 0,
        });
        this.coinCollectedTxt.setStroke('#000', 1.5);
        this.coinCollectedTxt.setOrigin(0.5)

        this.coin1 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin1, 0.025)
        this.coin1.name = "coin1"
        this.coin1.setVisible(false)
        this.coin2 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin2, 0.025)
        this.coin2.name = "coin2"
        this.coin2.setVisible(false)
        this.coin3 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin3, 0.025)
        this.coin3.name = "coin3"
        this.coin3.setVisible(false)
        this.coin4 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin4, 0.025)
        this.coin4.name = "coin4"
        this.coin4.setVisible(false)
        this.coin5 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin5, 0.025)
        this.coin5.name = "coin5"
        this.coin5.setVisible(false)
        this.coin6 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin6, 0.025)
        this.coin6.name = "coin6"
        this.coin6.setVisible(false)
        this.coin7 = this.physics.add.sprite(this.scale.width/2, 0, 'game-coin')
        Align.scaleToGameW(this.coin7, 0.025)
        this.coin7.name = "coin7"
        this.coin7.setVisible(false)

        this.progress = this.add.image(this.scale.width/2, this.scale.height/2, 'game-progress')
        Align.scaleToGameW(this.progress, 1)

        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        this.arrows = this.add.image(this.scale.width/2, this.scale.height/2, 'game-arrows')
        Align.scaleToGameW(this.arrows, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

        this.serviceCenter = this.add.image(0, 0, 'game-serviceCenter')
        Align.scaleToGameW(this.serviceCenter, 0.07)
        this.serviceCenter.setVisible(false)

        this.finishLine = this.add.image(0, 0, 'game-finishLine')
        Align.scaleToGameW(this.finishLine, 0.07)
        this.finishLine.setVisible(false)

        // crash anim
        this.crashAnim1 = this.add.image(0, 0, 'frame3-crashAnim1')
        Align.scaleToGameW(this.crashAnim1, 0.5)
        this.crashAnim1.setVisible(false)
        this.crashAnim2 = this.add.image(0, 0, 'frame3-crashAnim1')
        Align.scaleToGameW(this.crashAnim2, 0.5)
        this.crashAnim2.setVisible(false)
        this.crashAnim3 = this.add.image(0, 0, 'frame3-crashAnim1')
        Align.scaleToGameW(this.crashAnim3, 0.5)
        this.crashAnim3.setVisible(false)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.background.scaleX * this.background.width
        this.bgHeight = this.background.scaleX * this.background.width

        this.r3 = this.add.rectangle(this.bgWidth / 4.95, this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.bgWidth/3.15, this.bgHeight/45);
        this.r3.setStrokeStyle(1, 0x000000);

        this.rchild1 = this.add.rectangle(this.r3.x - this.r3.width/2 + (this.r3.width*0.04), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild2 = this.add.rectangle(this.rchild1.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild3 = this.add.rectangle(this.rchild2.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild4 = this.add.rectangle(this.rchild3.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild5 = this.add.rectangle(this.rchild4.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild6 = this.add.rectangle(this.rchild5.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild7 = this.add.rectangle(this.rchild6.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild8 = this.add.rectangle(this.rchild7.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild9 = this.add.rectangle(this.rchild8.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild10 = this.add.rectangle(this.rchild9.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild11 = this.add.rectangle(this.rchild10.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild12 = this.add.rectangle(this.rchild11.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild13 = this.add.rectangle(this.rchild12.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild14 = this.add.rectangle(this.rchild13.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild15 = this.add.rectangle(this.rchild14.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild16 = this.add.rectangle(this.rchild15.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild17 = this.add.rectangle(this.rchild16.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild18 = this.add.rectangle(this.rchild17.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild19 = this.add.rectangle(this.rchild18.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        this.rchild20 = this.add.rectangle(this.rchild19.x + this.rchild1.width + (this.r3.width*0.0145), this.bgHeight/14 +((this.height - this.bgHeight) / 2), this.r3.width/30, this.bgHeight/100, 0xffffff);
        
        this.rArray = [this.rchild1, this.rchild2, this.rchild3, this.rchild4, this.rchild5, this.rchild6, this.rchild7, this.rchild8, this.rchild9, this.rchild10, this.rchild11, this.rchild12, this.rchild13, this.rchild14, this.rchild15, this.rchild16, this.rchild17, this.rchild18, this.rchild19, this.rchild20]

        // logo
        this.loadinglogo.x = this.bgWidth - this.bgWidth / 6.5
        this.loadinglogo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

        // divider
        const dividerY = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
        this.divider1.y = dividerY
        this.divider2.y = dividerY
        this.divider3.y = dividerY
        this.divider4.y = dividerY

        // coinCollected
        this.coinCollected.x = this.r3.x + this.r3.width/1.8 + (this.coinCollected.width * this.coinCollected.scale)
        this.coinCollected.y = this.r3.y

        // coinCollectedTxt
        this.coinCollectedTxt.x = this.coinCollected.x + (this.coinCollected.width * this.coinCollected.scale)
        this.coinCollectedTxt.y = this.coinCollected.y

        // coins
        this.coin1.y = dividerY
        this.coin2.y = dividerY
        this.coin3.y = dividerY
        this.coin4.y = dividerY
        this.coin5.y = dividerY
        this.coin6.y = dividerY
        this.coin7.y = dividerY

        // service center
        this.serviceCenter.x = this.scale.width / 2.5
        this.serviceCenter.y = (this.bgHeight / 3.6) + ((this.height - this.bgHeight) / 2)

        // finish line
        this.finishLine.x = this.scale.width / 2
        this.finishLine.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)


        // this.dividerArray = []
        // for (let index = 0; index < 1; index++) {
        //     this.dividerArray[index] = this.add.image(0, 0, "game-dividerSingle")
        //     this.dividerArray[index].x = this.scale.width / 2
        //     this.dividerArray[index].y = (this.bgHeight / (3.4 - (index * 0.5))) + ((this.height - this.bgHeight) / 2)
        //     this.scaleValue = 0.005 + (index * 0.0057)
        //     Align.scaleToGameW(this.dividerArray[index], this.scaleValue)
        // }

        this.divider1Tween = this.tweens.add({
            targets: this.divider1,
            scale: 0.5,
            y : {from: this.divider1.y, to: this.divider1.y + this.bgHeight},
            duration: 2000,
            repeat: -1,
            yoyo: false
        }, this)

        this.time.delayedCall(500, () => {
            this.divider2Tween = this.tweens.add({
                targets: this.divider2,
                scale: 0.5,
                y : {from: this.divider2.y, to: this.divider2.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider2.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);

        this.time.delayedCall(1000, () => {
            this.divider3Tween = this.tweens.add({
                targets: this.divider3,
                scale: 0.5,
                y : {from: this.divider3.y, to: this.divider3.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider3.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);

        this.time.delayedCall(1500, () => {
            this.divider4Tween = this.tweens.add({
                targets: this.divider4,
                scale: 0.5,
                y : {from: this.divider4.y, to: this.divider4.y + this.bgHeight},
                duration: 2000,
                repeat: -1,
                yoyo: false,
                onComplete: () => {
                    this.divider4.y = (this.bgHeight / 3.5) + ((this.height - this.bgHeight) / 2)
                }
            }, this)
        }, [], this);


        // coins animation

        this.time.delayedCall(1000, () => {
            this.tweens.add({
                targets: this.coin1,
                onStart: () =>{
                    this.coin1.setVisible(true)
                },
                x: {from: this.coin1.x, to: this.coin1.x + this.scale.width/1.65},
                y: {from: this.coin1.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin1.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin1.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(4000, () => {
            this.tweens.add({
                targets: this.coin2,
                onStart: () =>{
                    this.coin2.setVisible(true)
                },
                x: {from: this.coin2.x, to: this.coin2.x - this.scale.width/1.65},
                y: {from: this.coin2.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin2.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin2.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(6000, () => {
            this.tweens.add({
                targets: this.coin3,
                onStart: () =>{
                    this.coin3.setVisible(true)
                },
                x: {from: this.coin3.x, to: this.coin3.x + this.scale.width/1.65},
                y: {from: this.coin3.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin3.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin3.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(8000, () => {
            this.tweens.add({
                targets: this.coin4,
                onStart: () =>{
                    this.coin4.setVisible(true)
                },
                x: {from: this.coin4.x, to: this.coin4.x - this.scale.width/1.65},
                y: {from: this.coin4.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin4.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin4.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(10000, () => {
            this.tweens.add({
                targets: this.coin5,
                onStart: () =>{
                    this.coin5.setVisible(true)
                },
                x: {from: this.coin5.x, to: this.coin5.x + this.scale.width/1.65},
                y: {from: this.coin5.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin5.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin5.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(12000, () => {
            this.tweens.add({
                targets: this.coin6,
                onStart: () =>{
                    this.coin6.setVisible(true)
                },
                x: {from: this.coin6.x, to: this.coin6.x - this.scale.width/1.65},
                y: {from: this.coin6.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin6.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin6.destroy()
                }
            }, this)
        }, [], this);

        this.time.delayedCall(14000, () => {
            this.tweens.add({
                targets: this.coin7,
                onStart: () =>{
                    this.coin7.setVisible(true)
                },
                x: {from: this.coin7.x, to: this.coin7.x + this.scale.width/1.65},
                y: {from: this.coin7.y, to: ((this.height - this.bgHeight) / 2) + (this.bgHeight)},
                scale: this.coin7.scaleX * 5,
                duration: 4000,
                onComplete: () =>{
                    this.coin7.destroy()
                }
            }, this)
        }, [], this);

        // serviceCenter
        this.time.delayedCall(15000, () => {
            this.tweens.add({
                targets: this.serviceCenter,
                onStart: () =>{
                    this.serviceCenter.setVisible(true)
                },
                x: {from: this.serviceCenter.x, to: this.serviceCenter.x - this.scale.width/3.8},
                y: {from: this.serviceCenter.y, to: (this.bgHeight / 3.3) + ((this.height - this.bgHeight) / 2)},
                scale: this.serviceCenter.scaleX * 4.5,
                duration: 4000
            }, this)
        }, [], this);

        // finish Line
        this.time.delayedCall(15000, () => {
            this.tweens.add({
                targets: this.finishLine,
                onStart: () =>{
                    this.finishLine.setVisible(true)
                },
                // x: {from: this.finishLine.x, to: this.finishLine.x - this.scale.width/3.5},
                y: {from: this.finishLine.y, to: (this.bgHeight / 4.3) + ((this.height - this.bgHeight) / 2)},
                scale: this.finishLine.scaleX * 4.7,
                duration: 4000
            }, this)
        }, [], this);

        this.car = this.physics.add.sprite(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}`)
        Align.scaleToGameW(this.car, 0.6)
        this.car.setSize(this.car.width * this.car.scale * 0.35, this.car.height * this.car.scale * 0.4)
        // this.car.setVisible(false)

        this.minicar = this.add.image(this.scale.width/2, this.scale.height/2, `game-car${this.carSelected}mini`)
        Align.scaleToGameW(this.minicar, 0.03)

        // minicar
        const minicarInitial = (this.bgHeight / 1.1) + ((this.height - this.bgHeight) / 2)
        const minicarDestination = (this.bgHeight / 1.68) + ((this.height - this.bgHeight) / 2)
        this.minicar.x = this.bgWidth / 10
        this.minicar.y = minicarInitial

        // car
        this.car.y = (this.bgHeight * 2.5/4) + ((this.height - this.bgHeight) / 2)
        this.carTween = this.tweens.add({
            targets: this.car,
            y: {from: this.car.y, to: this.car.y + 2},
            duration: 200,
            repeat: -1,
            yoyo: true
        })

        // stering
        this.stering = this.add.image(this.scale.width/2, this.scale.height/2, 'game-stering')
        Align.scaleToGameW(this.stering, 0.15)
        this.stering.y = (this.bgHeight * 3.55/4) + ((this.height - this.bgHeight) / 2)

        // set bounds 
        this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);

        // so the car does'nt go out of road while stering
        this.car.setCollideWorldBounds()

        // so the car does not fall in y axis
        this.physics.world.gravity.y = 0

        this.cursors = this.input.keyboard.createCursorKeys()

        // make multiple divider lines
        // this.group = this.physics.add.staticGroup({
        //     key: 'game-divider',
        //     frameQuantity: 3
        // });

        // this.group.getChildren().forEach(this.layDivider, this);

        this.countdown = new CountdownController(this, this.rArray, this.minicar, minicarInitial, minicarDestination)
        this.countdown.start(this.handleCountdownFinished.bind(this))

        this.collider1 = this.physics.add.collider(
            this.car,
            this.coin1,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider2 = this.physics.add.collider(
            this.car,
            this.coin2,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider3 = this.physics.add.collider(
            this.car,
            this.coin3,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider4 = this.physics.add.collider(
            this.car,
            this.coin4,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider5 = this.physics.add.collider(
            this.car,
            this.coin5,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider6 = this.physics.add.collider(
            this.car,
            this.coin6,
            this.handleOverlap,
            undefined,
            this
        )
        this.collider7 = this.physics.add.collider(
            this.car,
            this.coin7,
            this.handleOverlap,
            undefined,
            this
        )

        this.time.delayedCall(18500, () => {
            this.backgroundAudio.stop()
            this.carTween.pause()
            this.divider1Tween.pause()
            this.divider2Tween.pause()
            this.divider3Tween.pause()
            this.divider4Tween.pause()
        }, [], this);

    }

    handleOverlap(gameObject1, gameObject2)
    {
        eval('this.collider' + gameObject2.name.charAt(gameObject2.name.length - 1) + '.active = false')
        this.count += 1
        this.coinCollectedTxt.setText(this.count)
        this.scene.pause()
        this.scene.launch('dummy', {
            'car' : gameObject1, 
            'coin' : gameObject2, 
            'coinName': gameObject2.name,
            // 'count': this.count,
            // 'txt': this.coinCollectedTxt
        })
    }

    handleCountdownFinished()
    {
        if(this.count >= 7)
        {
            this.tweens.add({
                targets: this.car,
                x: this.scale.width / 2,
                y: (this.bgHeight / 3) + ((this.height - this.bgHeight) / 2),
                scale: this.car.scale * 0.2,
                ease: 'Linear',
                duration: 1500,
            }, this)

            this.time.delayedCall(1800, () => {
                this.scene.stop()
                this.scene.launch('won-screen', {'car' : this.carSelected})
            }, [], this);
            
        }
        else
        {
            this.scene.stop()
            this.scene.launch('lost-screen', {'car' : this.carSelected})
        }
    }

    // layDivider(item, index) {
    //     // this.scaleValue = 0.005 + (index * 0.005)
    //     // console.log(this.scaleValue)
    //     // Align.scaleToGameW(item, 0.05)
    //     item.scale = 0.5 
    //     item.x = this.scale.width / 2
    //     item.y = this.scale.height / 2
    //     console.log(index)
    //     console.log(item.scale)
    //     // item.displayWidth=window.innerWidth*this.scaleValue;
	// 	// item.scaleY=item.scaleX;
    //     // item.y = (this.bgHeight / (3.5 - (index * 0.35))) + ((this.height - this.bgHeight) / 2)
    // }

    update()
    {
        this.countdown.update()

        // left and right input logic
        if(!this.input.pointer1.isDown)
        {
            this.flipflop = false
        }

        if (this.input.pointer1.isDown)
        {
            if (Math.abs(this.input.pointer1.x - this.input.pointer1.downX) > 50)
            {
                if(!this.flipflop)
                {
                    if(this.input.pointer1.downX > this.input.pointer1.x)
                    {
                        if(this.car.x > this.physics.world.bounds.width * 1.5/4)
                        {
                            // this.car.x -= this.physics.world.bounds.width/7
                            this.tweens.add({
                                targets: this.car,
                                x: this.car.x - this.physics.world.bounds.width/7,
                                ease: 'Linear',
                                duration: 300,
                                // yoyo: true
                            }, this)
                            // rotate stering
                            this.tweens.add({
                                targets: this.stering,
                                angle: { from: 0, to: -50 },
                                ease: 'Linear',
                                duration: 300,
                                yoyo: true
                            }, this)
                        }
                        this.flipflop = true
                    }
                    else
                    {
                        if(this.car.x < this.physics.world.bounds.width * 2.5/4)
                        {
                            // this.car.x += this.physics.world.bounds.width/7 
                            this.tweens.add({
                                targets: this.car,
                                x: this.car.x + this.physics.world.bounds.width/7,
                                ease: 'Linear',
                                duration: 300,
                                // yoyo: true
                            }, this)
                            // rotate stering
                            this.tweens.add({
                                targets: this.stering,
                                angle: { from: 0, to: 50 },
                                ease: 'Linear',
                                duration: 300,
                                yoyo: true
                            }, this)
                        }
                        this.flipflop = true
                    }
                }
            }
        }

        // else if (this.cursors.left.isDown)
        // {
        //     this.car.x -= 2
        // }
        // else if (this.cursors.right.isDown)
        // {
        //     this.car.x += 2
        // }

        // divider 
        // this.dividerArray.forEach((item) =>{
        //     item.scale += 0.0005
        //     item.y += 2
        // })

        // this.dividerArray.forEach((item) => {
        //     const bgBottomPoint = ((this.height - this.bgHeight) / 2) + this.bgHeight
        //     if((item.y + ((item.scaleY * item.height) / 2)) > bgBottomPoint)
        //     {
        //         item.y = (this.bgHeight / (3.4)) + ((this.height - this.bgHeight) / 2)
        //         item.scale = 0.005
        //     }
        // })
    }
}