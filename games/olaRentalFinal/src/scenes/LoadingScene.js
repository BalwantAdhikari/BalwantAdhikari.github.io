import Phaser from '../lib/phaser.js'

import Align from '../lib/util/align.js'

export default class LoadingScene extends Phaser.Scene
{
    constructor()
    {
        super('loading-scene')
    }

    preload()
    {
        
    }

    create()
    {
        // carSelectedAudio
        this.carSelectedAudio = this.sound.add('carSelected', {
            volume: 0.04
        })

        // click
        this.clickAudio = this.sound.add('click', {
            volume: 0.1
        })

        // background
        this.loadingBackground = this.add.image(this.scale.width/2, this.scale.height/2, 'loading-background')
        Align.scaleToGameW(this.loadingBackground, 1)

        this.clouds = this.add.image(this.scale.width/2, this.scale.height/2, 'game-clouds')
        Align.scaleToGameW(this.clouds, 1)

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
            this.carSelectedAudio.play()
            this.loadingcar.setTexture('loading-car1')
            this.loadingcar1mini.setVisible(false)
            this.loadingcar1miniSelected.setVisible(true)

            this.removeSelectedIcon(1)
        }, this);

        this.loadingcar2mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.carSelectedAudio.play()
            this.loadingcar.setTexture('loading-car2')
            this.loadingcar2mini.setVisible(false)
            this.loadingcar2miniSelected.setVisible(true)

            this.removeSelectedIcon(2)
        }, this);
        
        this.loadingcar3mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.carSelectedAudio.play()
            this.loadingcar.setTexture('loading-car3')
            this.loadingcar3mini.setVisible(false)
            this.loadingcar3miniSelected.setVisible(true)

            this.removeSelectedIcon(3)
        }, this);

        this.loadingcar4mini.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.carSelectedAudio.play()
            this.loadingcar.setTexture('loading-car4')
            this.loadingcar4mini.setVisible(false)
            this.loadingcar4miniSelected.setVisible(true)
            
            this.removeSelectedIcon(4)
        }, this);

        this.loadingstartButton.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            this.clickAudio.play()
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
            scale: { from: this.buttonScale, to: this.buttonScale + 0.1 },
            ease: 'Linear',
            duration: 500,
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