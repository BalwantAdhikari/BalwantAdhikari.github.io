export default class CountdownController
{
    scene
    timerEvent
    duration
    arr
    minicar
    initial
    destination

    constructor(scene, arr, minicar, initial, destination)
    {
        this.scene = scene
        this.arr = arr
        this.minicar = minicar
        this.inital = initial
        this.destination = destination
    }

    start(callback, duration = 20000)
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

        // this.cab.x = this.scene.width/25 + (((this.scene.width / 1.88) - (this.cab.scale * this.cab.width + this.scene.width/25)) * (elapsed/20000))
         
        for (let index = 0; index < passedSeconds; index++) {
            this.arr[index].setFillStyle(0x90c63e);
        }
        
        this.minicar.y = this.inital - (((this.inital - this.destination)/ 20) * passedSeconds)
    }
}