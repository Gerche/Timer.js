// Consider replacing this with a interval updating a variable.
export default function (callback, delay) {
  let id
  let started
  let remaining = delay
  let running

  this.start = () => {
    running = true
    started = new Date()
    id = setTimeout(callback, remaining)
  }

  this.pause = () => {
    running = false
    clearTimeout(id)
    remaining -= new Date() - started
  }

  this.getTimePassed = () => {
    if (running) {
      this.pause()
      this.start()
    }

    return delay - remaining
  }

  this.getTimeLeft = () => {
    if (running) {
      this.pause()
      this.start()
    }

    return remaining
  }

  this.getStateRunning = () => {
    return running
  }

  this.start()
}
