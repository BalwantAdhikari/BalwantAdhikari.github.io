export default class CountdownController
{
    scene
    label
    remainingTimeLabel
    timerEvent
    duration
    progressBar

    constructor(scene, label, remainingTimeLabel, progressBar)
    {
        this.scene = scene
        this.label = label
        this.remainingTimeLabel = remainingTimeLabel
        this.progressBar = progressBar
    }

    start(callback, duration = 39000)
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
        const passedSeconds = elapsed/ 1000

        this.label.text = passedSeconds.toFixed(0) + ' sec'
        this.remainingTimeLabel.text = seconds.toFixed(0) + ' SECONDS LEFT TO REACH'

        this.progressBar.clear();
        this.progressBar.fillStyle(0xEB0303, 1)
        this.progressBar.fillRoundedRect(this.scene.scale.width/4, 70, this.scene.scale.width/2 * (passedSeconds.toFixed(0)/39), 10, 5)
    }
}