## Promise
### 原理
1. Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行<br>

2. Promise 会有三种状态

支持链式调用,可以解决回调地狱问题

3. 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
4. Promise 中使用 resolve 和 reject 两个函数来更改状态；
5. then 方法内部做但事情就是状态判断
<li>如果状态是成功，调用成功回调函数</li>
<li>如果状态是失败，调用失败回调函数</li>

## Promise.resolve
1. Promise.resolve(42) 相当于 new Promise(function(resolve){ resolve(42); });
2. 将 thenable 对象转换为 Promise 对象


## Promise.all
1. 参数为 ``` Promise<any> ```[]
2. 返回值还是一个 Promise 对象
3. 只要有一个失败，Promise.all 就会执行 reject() 
```js

/**
 * @param {Promise[]} promises
 */
Promise.all = promises => {
  const arr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      //
      Promise.resolve(p)
        .then(res => {
          arr[idx] = res;
          if (++count === promises.length) {
            resolve(arr);
          }
        })
        .catch(reject);
    });
  });
};
```

## Promise.race
1. 参数为 ``` Promise<any> ```[]
2. 采用第一个完成了的(resolve or reject) Promise 的值
```js
Promise.race = promises => {
  return new Promise((resolve, reject) => {
    promises.forEach(p => Promise.resolve(p).then(resolve, reject));
  });
};
```

## Promise.any
与 Promise.all 可以看做是相反的。Promise.any 中只要有一个 Promise 实例成功就成功，只有当所有的 Promise 实例失败时 Promise.any 才失败，此时 Promise.any 会把所有的失败/错误集合在一起，返回一个失败的  promise  和 AggregateError 类型的实例
``` js 
Promise.any = promises => {
  const errs = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p).then(resolve, err => {
        errs[idx] = err;
        if (++count === promises.length) {
          reject(new AggregateError(errs));
        }
      });
    });
  });
};
```

## Promise.allSettled
1. 参数为 ``` Promise<any> ```[]
2. 返回所有 Promise 执行后的返回结果，对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
``` js
Promise.allSettled = promises => {
  /**
   * @type {{status: 'fulfilled' | 'rejected', reason?: any, value?:any}[]}
   */
  const arr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p)
        .then(res => {
          arr.push({
            status: 'fulfilled',
            value: res
          });
        })
        .catch(err => {
          arr.push({
            status: 'rejected',
            reason: err
          });
        })
        .finally(e => {
          if (++count === promises.length) {
            resolve(arr);
          }
        });
    });
  });
};
```


## 参考
<li>
  <a target="blank" href="https://juejin.cn/post/7069805387490263047">字节飞书面试——请实现promise.all</a>
</li>