var hitmaker = function() {
  this.marker = new Image(300,300)
  this.marker.src = 'hitmaker.png'
  this.marker.style.position = 'absolute'
  this.marker.style.display = 'none'
  this.clack = document.createElement('audio')
  this.clack.src = 'hitmaker.mp3'
  this.init()
}

hitmaker.prototype.init = function() {
  var self = this
  document.addEventListener('click', function(e) {
    self.marker.style.top = e.y + 'px'
    self.marker.style.left = e.x + 'px'
    self.marker.style.display = 'block'
    self.clack.play()
    setTimeout(function() {
      self.marker.style.display = 'hidden'
    }, 400)
  })
}

module.exports = new hitmaker()
