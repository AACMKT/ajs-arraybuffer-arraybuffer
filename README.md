# Converting data from ArrayBuffer to string
---
[![Build status](https://ci.appveyor.com/api/projects/status/7306t2g7kk417mhc?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-arraybuffer-arraybuffer)

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
```
---

Обеспечено покрытие тестами.