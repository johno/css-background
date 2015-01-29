var assert = require('assert');
var cssBackground = require('..');

describe('css-background', function() {

  it('should parse single colors', function() {
    assert.deepEqual(cssBackground('green'), { color: 'green' });
  });

  it('should parse a value with color, image, repeat and position specified', function() {
    assert.deepEqual(
      cssBackground('#ffffff url("img_tree.png") no-repeat right top'),
      {
        color: '#ffffff',
        image: 'url("img_tree.png")',
        repeat: 'no-repeat',
        position: 'right top'
      }
    );
  });

  it('should parse a value with an image, repeat, and attachment', function() {
    assert.deepEqual(
      cssBackground('url("topbanner.png") #00D repeat-y fixed'),
      {
        image: 'url("topbanner.png")',
        color: '#00D',
        repeat: 'repeat-y',
        attachement: 'fixed'
      }
    );
  });
});
