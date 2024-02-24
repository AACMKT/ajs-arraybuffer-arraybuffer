export default class ArrayBufferConverter {
  constructor() {
    this.bufferView = new Uint16Array();
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  stringify() {
    let str = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      str = str.concat(String.fromCharCode(this.bufferView[i]));
    }
    return str;
  }
}
