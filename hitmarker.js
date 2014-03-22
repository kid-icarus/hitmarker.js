var hitmarker = function() {
  this.marker = new Image(300,300)
  this.marker.src = 'hitmaker.png'
  this.marker.style.position = 'absolute'
  this.marker.style.display = 'none'
  this.clack = document.createElement('audio')
  this.clack.src = 'hitmaker.mp3'
  this.init()
}

hitmarker.prototype.init = function() {
  var self = this
  document.body.appendChild(self.marker)
  console.log(self.marker)
  document.addEventListener('click', function(e) {
    self.marker.style.top = e.y - 150 + 'px'
    self.marker.style.left = e.x - 150 + 'px'
    self.marker.style.display = 'block'
    self.clack.play()
    document.setTimeout(function() {
      self.marker.style.display = 'hidden'
    }, 1000)
  })
}

module.exports = new hitmarker()
