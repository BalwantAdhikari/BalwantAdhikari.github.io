export default class CountdownController
{
    scene
    timerEvent
    duration
    cab

    constructor(scene, cab)
    {
        this.scene = scene
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

        this.cab.x = this.scene.width/25 + (((this.scene.width / 1.88) - (this.cab.scale * this.cab.width + this.scene.width/25)) * (elapsed/10000))
        
    }
}