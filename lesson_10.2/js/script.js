'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.teaxtAlign = textAlign;
  }
  makeDiv(text) {
    let div = document.createElement('div');
    div.innerHTML = text;
    div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.teaxtAlign}`;
    document.body.appendChild(div);
  }
}

let block = new Options('100px', '200px', 'yellow', '32px', 'center');

block.makeDiv('Hello');