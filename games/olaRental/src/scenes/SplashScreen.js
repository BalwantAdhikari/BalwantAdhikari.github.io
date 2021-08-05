import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'

export default class SplashScreen extends Phaser.Scene
{

    constructor()
    {
        super('splash-screen')
    }

    preload()
    {
        
    }

    create()
    {
        this.blueScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'blueScreen')
        Align.scaleToGameW(this.blueScreen, 1)
        this.blueScreen.setAlpha(0.8)

        this.getScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'get')
        Align.scaleToGameW(this.getScreen, 1)
        this.getScreen.setVisible(false)
        this.setScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'set')
        Align.scaleToGameW(this.setScreen, 1)
        this.setScreen.setVisible(false)
        this.goScreen = this.add.image(this.scale.width/2, this.scale.height/2, 'go')
        Align.scaleToGameW(this.goScreen, 1)
        this.goScreen.setVisible(false)

        this.tweens.add({
            targets: this.getScreen,
            onStart: function () {
                this.getScreen.setVisible(true)
            },
            visible: true,
            onStartScope: this,
            duration: 500,
            onComplete: function () {
                this.parent.scene.getScreen.setVisible(false)
            }
            
        })

        this.time.delayedCall(1000, () => {
        this.tweens.add({
            targets: this.setScreen,
            onStart: function () {
                this.setScreen.setVisible(true)
            },
            visible: true,
            onStartScope: this,
            duration: 500,
            onComplete: function () {
                this.parent.scene.setScreen.setVisible(false)
            }
            
        })
        }, [], this);


        this.time.delayedCall(2000, () => {
        this.tweens.add({
            targets: this.goScreen,
            onStart: function () {
                this.goScreen.setVisible(true)
            },
            visible: true,
            onStartScope: this,
            duration: 500,
            onComplete: function () {
                this.parent.scene.goScreen.setVisible(false)
            }
            
        })
        }, [], this);
    }

}