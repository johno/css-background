'use strict'

var cssColorList = require('css-color-list')
var rgbaRegex = require('rgba-regex')
var rgbRegex = require('rgb-regex')
var hslaRegex = require('hsla-regex')
var hslRegex = require('hsl-regex')

module.exports = function cssBackground(backgroundValue) {
  if (typeof backgroundValue != 'string') {
    throw new TypeError('css-background expected a string')
  }

  var backgroundAttachmentRegex = '\\s*(?=scroll|fixed|local|inherit([a-z]))'
  var backgroundClipRegex = '(?:border-box|padding-box|content-box|inherit)?'
  var backgroundImageRegex = '(?:none|inherit|url\(.*\))? '

  var backgroundRepeatValues = ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round', 'inherit']

  var colorListRegex = cssColorList().join('|')
  var rgbOrRgbaRegex = rgbRegex().source + '|' + rgbaRegex().source
  var hslOrHslaRegex = hslRegex().source + '|' + hslaRegex().source
  var hexRegex = '#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\\b'

  var cssColorRegex = [
    colorListRegex,
    rgbOrRgbaRegex,
    hslOrHslaRegex,
    hexRegex
  ].join('|')

  var baseBackgroundRegex = [
    backgroundAttachmentRegex,
    backgroundClipRegex,
    backgroundImageRegex,
    cssColorRegex
  ].join('')

  var cssBackgroundRegex = new RegExp('^' + baseBackgroundRegex, 'i')

  return cssBackgroundRegex.exec(backgroundValue)
}
