export default class CountdownController
{
    scene
    timerEvent
    duration
    // progressIndicator
    // progressBar
    // progressBarHeight
    // progressBarY
    cab

    // constructor(scene, progressIndicator, progressBar, progressBarHeight, progressBarY)
    constructor(scene, cab)
    {
        this.scene = scene
        // this.progressIndicator = progressIndicator
        // this.progressBar = progressBar
        // this.progressBarHeight = progressBarHeight
        // this.progressBarY = progressBarY
        this.cab = cab
    }

    start(callback, duration = 10000)
    {
        this.stop() 

        this.finishedCallback = callback
        this.duration = duration

        this.timerEvent = this.scene.time.addEvent({
            delay: duration,
            callback: () =>{
                this.stop()

                if (callback)
                {
                    callback()
                }

            }
        })
    }

    stop()
    {
        if (this.timerEvent || this.duration <= 0)
        {
            this.timerEvent.destroy()
            this.timerEvent = undefined
        }
    }

    update()
    {
        if (!this.timerEvent)
        {
            return
        }

        const elapsed = this.timerEvent.getElapsed()
        const remaining = this.duration - elapsed
        const seconds = remaining / 1000
        const passedSeconds = elapsed / 1000

        // this.progressBar.clear();
        // this.progressIndicator.clear();

        // if(passedSeconds.toFixed(0) == 1)
        // {
        //     this.progressBar.fillStyle(0xD7DE1F, 1) // EB0303
        //     this.progressBar.fillRoundedRect(this.scene.scale.width/4, 70, this.scene.scale.width/2 * (passedSeconds.toFixed(0)/10), 10, 3)
        // }
        // else if(passedSeconds.toFixed(0) > 1)
        // {

            // this.progressBar.fillStyle(0xD7DE1F, 1)
            // this.progressBar.fillRect(this.scene.width/20, this.progressBarY, this.scene.width/1.75 * (passedSeconds.toFixed(0)/10), this.progressBarHeight)

            // if(passedSeconds.toFixed(0) != 10)
            // {
            //     // this.progressIndicator.fillStyle(0x000000, 1)
            //     // this.progressIndicator.fillRect(this.scene.width/20 + this.scene.width/1.75 * (passedSeconds.toFixed(0)/10), this.progressBarY, 10 , this.progressBarHeight)
                
            // }

        // }

        this.cab.x = this.scene.width/25 + (((this.scene.width / 1.88) - (this.cab.scale * this.cab.width + this.scene.width/25)) * (elapsed/10000))
        
    }
}