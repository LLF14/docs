<h1>apply、call、bind</h1>
1.call和apply方法都可以调用函数，第一个参数都可以修改this的指向<br>
2.call除了第一个参数其他参数都可以实参进行传递给函数<br>
3. apply方法最多可以传递俩个参数，第二个参数以数组或者伪数组的进行传递数组里的每一项作为实参进行传递<br>
4. bind 方法不能调用函数，他会创建一个副本函数，并且绑定函数的this指向bind返回新的函数<br>

## apply
```js
Function.prototype._apply = function (target, args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  const res = target[key](...args);
  delete target[key];
  return res;
};
```

## call
```js
Function.prototype._call = function (target, ...args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  const res = target[key](...args);
  delete target[key];
  return res;
};
```

## bind
```js
Function.prototype._bind = function (target, ...args) {
  target = target || window;
  const key = Symbol();
  target[key] = this;
  return function (...innerArgs) {
    const res = target[key](...args, ...innerArgs);
    // delete target[key]; // 不能删除，否则第二次调用的时候，就会出现问题。
    return res;
  };
};
```