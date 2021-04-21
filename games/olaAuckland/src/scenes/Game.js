import Phaser from '../lib/Phaser.js'

import Align from '../lib/util/align.js'
import AlignGrid from '../lib/util/alignGrid.js'

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
        this.keyHolder = this.add.image(0, 0, "keyHolder").setOrigin(0.5, 0)
        Align.scaleToGameW(this.keyHolder, 0.2)
        this.keys = this.add.image(0, 0, "keys").setOrigin(0.1, 0)
        Align.scaleToGameW(this.keys, 0.08)
        this.mask = this.add.image(0, 0, "mask").setOrigin(1, 0)
        Align.scaleToGameW(this.mask, 0.08)
        this.maskGlow = this.add.image(0, 0, "maskGlow").setOrigin(1, 0)
        Align.scaleToGameW(this.maskGlow, 0.1)
        this.sanitizer = this.add.image(0, 0, "sanitizer").setOrigin(0.5, 1)
        Align.scaleToGameW(this.sanitizer, 0.08)
        this.sanitizerGlow = this.add.image(0, 0, "sanitizerGlow").setOrigin(0.5, 0.35)
        Align.scaleToGameW(this.sanitizerGlow, 0.08)

        this.aGrid = new AlignGrid({scene:this, rows:16, cols:9})
        // this.aGrid.showNumbers()

        this.aGrid.placeAtIndex(47, this.keyHolder)
        this.aGrid.placeAtIndex(46, this.keys)
        this.aGrid.placeAtIndex(48, this.mask)
        this.aGrid.placeAtIndex(55, this.sanitizerGlow)
    }
}