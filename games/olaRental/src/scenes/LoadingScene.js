import Phaser from '../lib/phaser.js'

import AlignGrid from '../lib/util/alignGrid.js'
import Align from '../lib/util/align.js'

export default class LoadingScene extends Phaser.Scene
{
    constructor()
    {
        super('loading-scene')
    }

    preload()
    {
        this.load.image('loading-background', 'assets/frame1-background.webp')
        this.load.image('loading-car1', 'assets/frame1-car1.webp')
        this.load.image('loading-car2', 'assets/frame1-car2.webp')
        this.load.image('loading-car3', 'assets/frame1-car3.webp')
        this.load.image('loading-car4', 'assets/frame1-car4.webp')
        this.load.image('loading-car1mini', 'assets/frame1-car1mini.webp')
        this.load.image('loading-car2mini', 'assets/frame1-car2mini.webp')
        this.load.image('loading-car3mini', 'assets/frame1-car3mini.webp')
        this.load.image('loading-car4mini', 'assets/frame1-car4mini.webp')
        this.load.image('loading-car1miniSelected', 'assets/frame1-car1miniSelected.webp')
        this.load.image('loading-car2miniSelected', 'assets/frame1-car2miniSelected.webp')
        this.load.image('loading-car3miniSelected', 'assets/frame1-car3miniSelected.webp')
        this.load.image('loading-car4miniSelected', 'assets/frame1-car4miniSelected.webp')
        this.load.image('loading-text', 'assets/frame1-text.webp')
        this.load.image('loading-sun', 'assets/frame1-sun.webp')
        this.load.image('loading-logo', 'assets/frame1-logo.webp')
        this.load.image('loading-startButton', 'assets/frame1-startButton.webp')

        // frame 2
        this.load.image("blueScreen", "assets/frame2-blueScreen.webp")
        this.load.image("get", "assets/frame2-get.webp")
        this.load.image("set", "assets/frame2-set.webp")
        this.load.image("go", "assets/frame2-go.webp")

        // frame 3
        this.load.image("game-background", "assets/frame3-background.png")
        this.load.image("game-car1", "assets/frame3-car1.png")
        this.load.image("game-car2", "assets/frame3-car2.png")
        this.load.image("game-car3", "assets/frame3-car3.png")
        this.load.image("game-car4", "assets/frame3-car4.png")
        this.load.image("game-divider", "assets/frame3-roadDivider.png")
        this.load.image("game-dividerSingle", "assets/frame3-divider.png")
        this.load.image("game-progress", "assets/frame3-progress.png")
        this.load.image("game-timer", "assets/frame3-timer.png")
        this.load.image("game-car1mini", "assets/frame3-car1mini.png")
        this.load.image("game-car2mini", "assets/frame3-car2mini.png")
        this.load.image("game-car3mini", "assets/frame3-car3mini.png")
        this.load.image("game-car4mini", "assets/frame3-car4mini.png")
        this.load.image("game-stering", "assets/frame3-stering.png")
        this.load.image("game-arrows", "assets/frame3-arrows.png")
        this.load.image("game-clouds", "assets/frame3-clouds.png")
        this.load.image("game-coin", "assets/frame3-coin.png")
        this.load.image("game-msg1", "assets/frame3-msg1.png")
        this.load.image("game-msg2", "assets/frame3-msg2.png")
        this.load.image("game-msg3", "assets/frame3-msg3.png")
        this.load.image("game-msg4", "assets/frame3-msg4.png")
        this.load.image("game-msg5", "assets/frame3-msg5.png")
        this.load.image("game-msg6", "assets/frame3-msg6.png")
        this.load.image("game-msg7", "assets/frame3-msg7.png")
        this.load.image("game-crashAnim1", "assets/frame3-crashAnim1.png")
        this.load.image("game-crashAnim2", "assets/frame3-crashAnim2.png")
        this.load.image("game-crashAnim3", "assets/frame3-crashAnim3.png")

        // frame4
        this.load.image("final-background", "assets/frame4-background.png")
        this.load.image("final-road", "assets/frame4-road.png")
        this.load.image("final-wonMsg", "assets/frame4-msg.png")

        // frame5
        this.load.image("final-lostMsg", "assets/frame5-msg.png")

        
    }

    create()
    {
        // background
        this.loadingBackground = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-background')
        Align.scaleToGameW(this.loadingBackground, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

        // car
        // this.loadingcar1 = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car1')
        // Align.scaleToGameW(this.loadingcar1, 1)
        // this.loadingcar1.setVisible(false)
        // this.loadingcar2 = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car2')
        // Align.scaleToGameW(this.loadingcar2, 1)
        // this.loadingcar2.setVisible(false)
        // this.loadingcar3 = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car3')
        // Align.scaleToGameW(this.loadingcar3, 1)
        // this.loadingcar4 = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car4')
        // Align.scaleToGameW(this.loadingcar4, 1)
        // this.loadingcar4.setVisible(false)
        this.loadingcar = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car3')
        Align.scaleToGameW(this.loadingcar, 1)


        // mini cars icons
        this.loadingcar1mini = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car1mini')
        Align.scaleToGameW(this.loadingcar1mini, 0.18)
        this.loadingcar2mini = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car2mini')
        Align.scaleToGameW(this.loadingcar2mini, 0.18)
        this.loadingcar3mini = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car3mini')
        Align.scaleToGameW(this.loadingcar3mini, 0.18)
        this.loadingcar3mini.setVisible(false)
        this.loadingcar4mini = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car4mini')
        Align.scaleToGameW(this.loadingcar4mini, 0.18)

        // mini selected cars icons
        this.loadingcar1miniSelected = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car1miniSelected')
        Align.scaleToGameW(this.loadingcar1miniSelected, 0.3)
        this.loadingcar1miniSelected.setVisible(false)
        this.loadingcar2miniSelected = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car2miniSelected')
        Align.scaleToGameW(this.loadingcar2miniSelected, 0.3)
        this.loadingcar2miniSelected.setVisible(false)
        this.loadingcar3miniSelected = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car3miniSelected')
        Align.scaleToGameW(this.loadingcar3miniSelected, 0.3)
        this.loadingcar4miniSelected = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-car4miniSelected')
        Align.scaleToGameW(this.loadingcar4miniSelected, 0.3)
        this.loadingcar4miniSelected.setVisible(false)

        // sun
        this.loadingsun = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-sun')
        Align.scaleToGameW(this.loadingsun, 1)


        // text
        this.loadingtext = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-text')
        Align.scaleToGameW(this.loadingtext, 1)

        // logo
        this.loadinglogo = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-logo')
        Align.scaleToGameW(this.loadinglogo, 0.25)

        // start Button
        this.loadingstartButton = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-startButton')
        Align.scaleToGameW(this.loadingstartButton, 0.3)

        // screen width/height
        this.width = this.scale.width
        this.height = this.scale.height
        // bgImage width/height
        this.bgWidth = this.loadingBackground.scaleX * this.loadingBackground.width
        this.bgHeight = this.loadingBackground.scaleX * this.loadingBackground.width

        // logo
        this.loadinglogo.x = this.bgWidth - this.bgWidth / 6.5
        this.loadinglogo.y = (this.bgHeight / 13.2) + ((this.height - this.bgHeight) / 2)

        // start button
        this.loadingstartButton.x = this.bgWidth / 2
        this.loadingstartButton.y = (this.bgHeight / 2.7 ) + ((this.height - this.bgHeight) / 2)

        // mini cars
        this.loadingcar1mini.x = this.bgWidth / 7.5
        this.loadingcar1mini.y = (this.bgHeight - this.bgHeight / 6.5 ) + ((this.height - this.bgHeight) / 2)
        this.loadingcar2mini.x = this.bgWidth / 2.7
        this.loadingcar2mini.y = (this.bgHeight - this.bgHeight / 6.5 ) + ((this.height - this.bgHeight) / 2)
        this.loadingcar3mini.x = this.bgWidth - (this.bgWidth / 2.7)
        this.loadingcar3mini.y = (this.bgHeight - this.bgHeight / 6.5 ) + ((this.height - this.bgHeight) / 2)
        this.loadingcar4mini.x = this.bgWidth - (this.bgWidth / 7.5)
        this.loadingcar4mini.y = (this.bgHeight - this.bgHeight / 6.5 ) + ((this.height - this.bgHeight) / 2)

        // mini cars selected
        this.loadingcar1miniSelected.x = this.loadingcar1mini.x
        this.loadingcar1miniSelected.y = this.loadingcar1mini.y
        this.loadingcar2miniSelected.x = this.loadingcar2mini.x
        this.loadingcar2miniSelected.y = this.loadingcar2mini.y
        this.loadingcar3miniSelected.x = this.loadingcar3mini.x
        this.loadingcar3miniSelected.y = this.loadingcar3mini.y
        this.loadingcar4miniSelected.x = this.loadingcar4mini.x
        this.loadingcar4miniSelected.y = this.loadingcar4mini.y

        this.carSelected = 3

        // onclick events
        this.loadingcar1mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.loadingcar.setTexture('loading-car1')
            this.loadingcar1mini.setVisible(false)
            this.loadingcar1miniSelected.setVisible(true)

            this.removeSelectedIcon(1)
        }, this);

        this.loadingcar2mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.loadingcar.setTexture('loading-car2')
            this.loadingcar2mini.setVisible(false)
            this.loadingcar2miniSelected.setVisible(true)

            this.removeSelectedIcon(2)
        }, this);
        
        this.loadingcar3mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.loadingcar.setTexture('loading-car3')
            this.loadingcar3mini.setVisible(false)
            this.loadingcar3miniSelected.setVisible(true)

            this.removeSelectedIcon(3)
        }, this);

        this.loadingcar4mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.loadingcar.setTexture('loading-car4')
            this.loadingcar4mini.setVisible(false)
            this.loadingcar4miniSelected.setVisible(true)
            
            this.removeSelectedIcon(4)
        }, this);

        this.loadingstartButton.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            // start next scene
            this.loadingtext.destroy()
            this.loadingstartButton.destroy()
            this.scene.pause();
            this.scene.launch('splash-screen', {'car' : this.carSelected});
        }, this)
        
        
        // start button animation
        this.buttonScale = this.loadingstartButton.scale
        this.tweens.add({
            targets: this.loadingstartButton,
            scale: { from: this.buttonScale, to: this.buttonScale + 0.02 },
            ease: 'Linear',
            duration: 400,
            repeat: -1,
            yoyo: true
        }, this)
        
    }

    removeSelectedIcon(present)
    {
        if(this.carSelected == 1)
        {
            this.loadingcar1mini.setVisible(true)
            this.loadingcar1miniSelected.setVisible(false)
            this.carSelected = present
        }

        else if(this.carSelected == 2)
        {
            this.loadingcar2mini.setVisible(true)
            this.loadingcar2miniSelected.setVisible(false)
            this.carSelected = present
        }

        else if(this.carSelected == 3)
        {
            this.loadingcar3mini.setVisible(true)
            this.loadingcar3miniSelected.setVisible(false)
            this.carSelected = present
        }

        else if(this.carSelected == 4)
        {
            this.loadingcar4mini.setVisible(true)
            this.loadingcar4miniSelected.setVisible(false)
            this.carSelected = present
        }


    }
}