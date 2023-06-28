<script setup lang="ts">
  import { shallowRef, onMounted,ref} from 'vue'  
  const mapComponent = shallowRef(null)
onMounted(()=>{
    // import('./sunComponent.vue').then(module => {
    //   mapComponent.value = module.default
    // })
     import('../../../packages/star/Star.vue').then(module => {
      mapComponent.value = module.default
    })
    
})
const count=ref()
const size=ref()
const active=ref()
const countTwo=ref(8)
const change=(index)=>{
    console.log(index)
    active.value=index
}
</script>
# 评分 Star
<!--  @getStarNum="getStarNum" :active="active" :size=size -->

## 何时使用

- 对评价进行展示
- 对事物进行快速的评级操作

## 基本使用
<br>
<component v-if="mapComponent" :is="mapComponent"   :active="active"  @change="change" >
 
</component>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const active=ref()
const count=ref(8)
const getStarNum=(index)=>{
    console.log(index)
    active.value=index
}

</script>
<template>
  <Star  :active="active"  @change="change" />
</template>
```

:::
## 自定义 star 总数
count：数量
<br>
<component v-if="mapComponent" :is="mapComponent" :count="countTwo"   :active="active"  @change="change" />


::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const active=ref()
const count=ref(8)
const change=(index)=>{
    console.log(index)
    active.value=index
}
</script>
<template>
  <Star  :active="active" @change="change" :count="count"   />
</template>
```

:::

## 自定义选中颜色 
color：颜色属性
<br>
<component v-if="mapComponent" :is="mapComponent"  color="#feba60"  :active="active"  @change="change" />


::: details Show Code

```vue
<template>
  <Star  :active="active" @change="change" color="#feba60" />
</template>
```

:::

## 禁用
disabled：禁用属性
<br>
<component v-if="mapComponent" :is="mapComponent"  disabled  :active="active"  @change="change" />


::: details Show Code

```vue
<template>
  <Star  :active="active" @change="change" disabled />
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 是否必传
-- | -- | -- | -- | --
active | 选中参数 | number | 1 | true
size | 图案大小 | number | 32px | false
color | 图案颜色 | string | pink | false
count | star 总数 | number | 5 | false
disabled | 是否禁用 | boolean | false | false

## Events
事件名称 | 说明 | 参数 | 必传
-- | -- | -- |--
change | 点击选择的回调 | (index: number) => void | true

