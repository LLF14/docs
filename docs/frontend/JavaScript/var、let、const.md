### var、let、const

## var
 JavaScript 中最常用的声明变量的方法，可以声明全局变量或函数内的局部变量。var 声明的变量可以被修改，并且存在变量提升的问题。
1. 函数作用域,作用域是全局或者整个函数快的
2. 可重复声明
3. 全局变量声明的 var 相当于挂载到 window
```javaScript
var a = 112;
window.a; // 112
```
4. 变量提升
```javaScript
var a = 99; // 全局变量a
f(); // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。
console.log(a); // a=>99,  此时是全局变量的a
function f() {
  console.log(a); // 当前的a变量是下面变量a声明提升后，默认值undefined
  var a = 10;
  console.log(a); // a => 10
}
```
```javaScript
/**
 * 因为变量提升，可以理解全局只有一个 y 变量，每次循环是改变 y 的值，
 * 所以异步输出的都是最后一次执行的 y 的值
 */
for (var y = 0; y < 4; y++) {
  setTimeout(function () {
    console.log(y); // 4 4 4 4
  }, 1000);
  console.log('var', y); // 变量正常输出
}
console.log('yyyy', y); // 由于var可使变量提升，所以打印出的值为for循环中最后输出的值 yyyy 4
```
## let
let 是 ES6 中新增的声明变量的方法，它的作用和 var 类似，但是 let 声明的变量只在声明它的代码块内有效，并且不存在变量提升的问题。
1. 块级作用域
2. 不能重复声明
3. let 声明的变量在执行上下文创建阶段只会被创建，不会被初始化，因此对于执行阶段来说，如果在定义前使用则会报错，相当于使用了未被初始化的变量
```javaScript
for (let x = 0; x < 4; x++) {
  console.log('let', x); // 变量正常输出
}
console.log('let', x); // 报错，提示x没有被定义
```

## const
const 也是 ES6 中新增的声明变量的方法，它声明的是常量，常量的值不能被修改。和 let 一样，const 声明的变量只在声明它的代码块内有效，并且不存在变量提升的问题。
1. 常量就是一旦定义完就不能修改的值
2. 常量定义必须初始化值，如果不初始化值就会报错。
3. 块级作用域
4. 不能重复声明
```javaScript
const a = "111"
const b; // 报错 常量未初始化
```
## 暂时性死区
```javaScript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。<br>
总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

## 用 var 实现 let
使用匿名函数创建一个作用域，将变量保存起来
```javaScript
for (var y = 0; y < 4; y++) {
  (function (arg) {
    setTimeout(function () {
      console.log('var => let: ', arg); // 4 4 4 4
    }, 1000);
  })(y);
}
```

## 总结
#### var 的特点
1. 在全局上定义时，会被挂在 window 上
2. 变量提升
3. 可以重复声明
#### let、const
1. 解决了污染全局命名空间的问题
2. 与变量提升不同，会存在暂时性死区
3. 无法重复声明
4. 增加了块级作用域