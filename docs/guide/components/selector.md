
<script setup lang="ts">
import { ref} from 'vue'
import { shallowRef, onMounted } from 'vue'    
const mapComponent = shallowRef(null)
onMounted(()=>{
    // import('./sunComponent.vue').then(module => {
    //   mapComponent.value = module.default
    // })
     import('../../../packages/selector/index.vue').then(module => {
      mapComponent.value = module.default
    })
    
})
const placeholder="选择一项自己的缺点"

const data=([
  {
    id: 1,
    value: '01',
    text: '玉树临风'
  },
  {
    id: 2,
    value: '02',
    text: '英俊潇洒'
  },
  {
    id: 3,
    value: '03',
    text: '风度翩翩'
  },
  {
    id: 4,
    value: '04',
    text: '一般般',
  },
  
])

const dataDisabled=([
  {
    id: 1,
    value: '01',
    text: '玉树临风'
  },
  {
    id: 2,
    value: '02',
    text: '英俊潇洒'
  },
  {
    id: 3,
    value: '03',
    text: '风度翩翩'
  },
  {
    id: 4,
    value: '04',
    text: '一般般',
    disabled:true
  },
   {
    id: 5,
    value: '05',
    text: '帅的一批',
   
  },
])
const setItemValue=(item)=>{
  console.log(11,item)
}

</script>

# 下拉选择 Selector
<br>

## 使用场景
<li>弹出一个下拉菜单给用户选择</li>
<li>支持输入搜索筛选下拉菜单选项功能</li>
<br>

## 基本使用
<component v-if="mapComponent" :is="mapComponent" :placeholder="placeholder" :data="data" @setItemValue="setItemValue" />
::: details Show Code

```vue
<script setup lang="ts">
const placeholder="选择一项自己的缺点"
const data=([
  {
    id: 1,
    value: '01',
    text: '玉树临风'
  },
  {
    id: 2,
    value: '02',
    text: '英俊潇洒'
  },
  {
    id: 3,
    value: '03',
    text: '风度翩翩'
  },
  {
    id: 4,
    value: '04',
    text: '一般般',
  },
])
const setItemValue=(item)=>{
  console.log(11,item)
}
</script>
<template>
  <Selector :placeholder="placeholder" :data="data" @setItemValue="setItemValue" ></Selector>
</template>
```

:::

## 禁用选项
添加disabled:true<br>
默认为false
<component v-if="mapComponent" :is="mapComponent" :placeholder="placeholder" :data="dataDisabled" @setItemValue="setItemValue" />
 
::: details Show Code

```vue
<script setup lang="ts">
const placeholder="选择一项自己的缺点"
const data=([
  {
    id: 1,
    value: '01',
    text: '玉树临风'
  },
  {
    id: 2,
    value: '02',
    text: '英俊潇洒'
  },
  {
    id: 3,
    value: '03',
    text: '风度翩翩'
  },
  {
    id: 4,
    value: '04',
    text: '一般般',
    disabled:true
  },
])
const setItemValue=(item)=>{
  console.log(11,item)
}
</script>
<template>
  <Selector :placeholder="placeholder" :data="data" @setItemValue="setItemValue" ></Selector>
</template>
```

:::

## 滚动条
<li>如果数据太多了，可以固定高度，使用滚动条功能</li><br>
需要添加的属性 : <br>
<li>:isScroll="true"</li>
<li>:height="200"  </li>
<br>

注意： 需要传个固定高度,注意传的高度别超过内容,否则滚动条不生效<br><br>
<component v-if="mapComponent" :is="mapComponent" :placeholder="placeholder" :data="dataDisabled" @setItemValue="setItemValue"  :isScroll="true" :height="200"/>

 
::: details Show Code

```vue
<script setup lang="ts">
const placeholder="选择一项自己的缺点"
const data=([
  {
    id: 1,
    value: '01',
    text: '玉树临风'
  },
  {
    id: 2,
    value: '02',
    text: '英俊潇洒'
  },
  {
    id: 3,
    value: '03',
    text: '风度翩翩'
  },
  {
    id: 4,
    value: '04',
    text: '一般般',
    disabled:true
  },
   {
    id: 5,
    value: '05',
    text: '帅的一批',
  },
])
const setItemValue=(item)=>{
  console.log(11,item)
}
</script>
<template>
  <Selector :placeholder="placeholder" :data="dataDisabled" @setItemValue="setItemValue" :isScroll="true" :height="200" ></Selector>
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
data | 下拉菜单数据 | Array | [{id,value,text}] | true
placeholder | 失焦输入提示 | string | '请选择' | false
isScroll | 显示滚动条 | boolean | false| false
width |组件宽度 | number | 0 | false
height | 组件高度 | number | 默认内容撑开 | false
disabled | 选项禁用 | boolean | false | false

## Step Type
名称 | 说明 | 类型 | 必传
-- | -- | -- | --
id | 唯一标识 | number | false
value | value值(用于返回后台,不显示) | string | false
text | 菜单显示文字 | string | false

## Events
事件名称 | 说明 | 参数 | 必传
-- | -- | -- |--
setItemValue | 点击下拉菜单的回调 |  | true

