export default class CountdownController
{
    scene
    timerEvent
    duration
    progressBar
    progressBarHeight
    progressBarY

    constructor(scene, progressBar, progressBarHeight, progressBarY)
    {
        this.scene = scene
        this.progressBar = progressBar
        this.progressBarHeight = progressBarHeight
        this.progressBarY = progressBarY
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

        this.progressBar.clear();
        // if(passedSeconds.toFixed(0) == 1)
        // {
        //     this.progressBar.fillStyle(0xD7DE1F, 1) // EB0303
        //     this.progressBar.fillRoundedRect(this.scene.scale.width/4, 70, this.scene.scale.width/2 * (passedSeconds.toFixed(0)/10), 10, 3)
        // }
        // else if(passedSeconds.toFixed(0) > 1)
        // {
            this.progressBar.fillStyle(0xD7DE1F, 1)
            this.progressBar.fillRect(this.scene.width/8, this.progressBarY, this.scene.width/2 * (passedSeconds.toFixed(0)/10), this.progressBarHeight)
        // }
        
    }
}