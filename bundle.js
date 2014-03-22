(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    window.setTimeout(function() {
      self.marker.style.display = 'hidden'
    }, 1000)
  })
}

module.exports = new hitmarker()

},{}],2:[function(require,module,exports){
var hitmarker = require('./hitmarker')

},{"./hitmarker":1}]},{},[2])