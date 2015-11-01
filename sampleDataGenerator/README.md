# Sample Data Generator

* 起動しててきとーに drag & drop
* drag & drop 中の座標データが 0.json, 1.json ... のように保存される

## sample

下記のような JSON ファイルが生成される。

```json
[
  {
    "y": 548,
    "x": 49
  },
  {
    "y": 548,
    "x": 49
  },
  {
    "y": 548,
    "x": 49
  }
]
```

下記のような感じでコピペすれば JavaScript の中で使える。

```javascript
var ts = [
  {
    "y": 548,
    "x": 49
  },
  {
    "y": 548,
    "x": 49
  },
  {
    "y": 548,
    "x": 49
  }
];
```
