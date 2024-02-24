# Converting data from ArrayBuffer to string
---
[![Build status](https://ci.appveyor.com/api/projects/status/krgxo347d2mtaw1g?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-containers-map)

### Описание

Дана функция `getBuffer()`, которая эмулирует создание объекта типа `ArrayBuffer`.
Реализован класс `ArrayBufferConverter` с методом `load()`, который может загружать данные (сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку.

```javascript
function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
---

Обеспечено покрытие тестами.