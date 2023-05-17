## Pinia
 <a target="blank" href="https://pinia.vuejs.org/zh/">pinia官网</a>
### Pinia 和 Vuex区别
1. Pinia 的 store 是相互独立的，通过唯一 key 来区分<br>
2. Pinia 没有 Mutations，Actions 支持同步和异步<br>
3. 使用上不需要用 commit、dispatch 这种方式，而是直接调用 <br>
4. 支持选项式api和组合式api写法<br>
5. pinia没有mutations，只有：state、getters、actions<br>
6. pinia分模块不需要modules (之前vuex分模块需要modules)<br>
7. TypeScript支持很好5,自动化代码拆分6. pinia体积更小(性能更好)<br>
8. pinia可以通过storeToRefs直接修改state的数据

## 一.安装使用Pinia
1.1 安装下载
```typescript
yarn add pinia
# or with npm
npm install pinia
```
1.2 main.js引入
```typescript
import { createPinia } from 'pinia'
app.use(createPinia())
```
1.3 根目录新建store/index.js中写入
```typescript
import { defineStore } from 'pinia'
export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
    }
  },
  getters:{},
  actions:{}
})
```
1.4 组件上使用
```typescript
<script setup>
import { useStore } from '../store'
const store = useStore();
</script>
```



## 二.Store
2.1 Pinia定义state数据
```typescript
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters:{},
  actions:{}
})
```
2.2 组件使用pinia的state数据
```vue
<template>
	<div>
		<h1>A组件</h1>
		{{ name }}
	</div>
</template>

<script setup>
import { useStore } from '../store'
const store = useStore();
let { name } = store;
</script>
```
2.3 组件修改pinia的state数据
::: tip
本身pinia可以直接修改state数据，无需像vuex一样通过mutations才可以修改，但是上面写的let { name } = store;这种解构是不可以的，所以要换解构的方式。
:::
```vue
<template>
	<div>
		<h1>A组件</h1>
		{{ name }}
		<button @click='btn'>按钮</button>
	</div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../store'
const store = useStore();
let { name }  = storeToRefs(store);
const btn = ()=>{
	name.value = '123';
}
</script>
```
2.4 如果state数据需要批量更新
```typescript
import { defineStore } from 'pinia'
export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      arr:['a','b','c']
    }
  },
  getters:{},
  actions:{}
})
```
代码如下
```typescript
<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../store'
const store = useStore();
let { name,counter,arr }  = storeToRefs(store);
const btn = ()=>{
	//批量更新
	store.$patch(state=>{
		state.counter++;
		state.arr.push(4);
		state.name = '456';
	})
}
</script>
```
## 三.getters 
getters和vuex的getters几乎类似，也是有缓存的机制
```typescript
export const useStore = defineStore('storeId', {
  getters: {
    getUserById: state => {
      return userId => state.users.find(user => user.id === userId);
    }
  }
});
```
## 四.actions
pinia的actions支持同步和异步
```typescript
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0
    }
  },
  getters:{},
  actions:{
  	changeCounter( val ){
  		this.counter += val;
  	}
  }
})
```
```vue
<template>
	<div>
		<h1>A组件</h1>
		{{ counter }}
		<button @click='add'>加10</button>
	</div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../store'
const store = useStore();
let { counter }  = storeToRefs(store);
const add = ()=>{
	store.changeCounter(10);
}
</script>
```
## Pinia持久化存储 
方法
1.自己写
2.使用插件 pinia-plugin-persist
## 一.安装插件
```typescript
npm i pinia-plugin-persist --save
```
## 二.store/index.js
```typescript
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store
```
## 三.store/user.js
```typescript
export const useUserStore = defineStore({
  id: 'user',

  state: () => {
    return {
      name: '张三'
    }
  },
  
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
```
## 四.自定义 key
数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
```typescript
persist: {
  enabled: true,
  strategies: [
    {
      key: 'my_user',
      storage: localStorage,
    }
  ]
}
```
## 五.持久化局部 state
默认所有 state 都会进行缓存，你能够通过 paths 指定要长久化的字段，其余的则不会进行长久化。
```typescript
state: () => {
  return {
    name: '张三',
    age: 18,
    gender: '男'
  }  
},

persist: {
  enabled: true,
  strategies: [
    {
      storage: localStorage,
      paths: ['name', 'age'] //指定需要存储的属性
    }
  ]
}
```
