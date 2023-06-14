# 进度条 Progress




<br/>

*展示操作的当前进度*

## 何时使用

- 当需要显示当前进度和状态时
- 当需要显示一个操作完成的百分比时

<script setup lang="ts">
import { ref } from 'vue'
import{requestAnimationFrame}from "../../../packages/index.ts"
  import { shallowRef, onMounted } from 'vue'  
  const mapComponent = shallowRef(null)
  const btnComponent = shallowRef(null)
  const switchComponent = shallowRef(null)
onMounted(()=>{
    // import('./sunComponent.vue').then(module => {
    //   mapComponent.value = module.default
    // })
     import('../../../packages/progress/Progress.vue').then(module => {
      mapComponent.value = module.default
    })
     import('../../../packages/button/Button.vue').then(module => {
      btnComponent.value = module.default
    })
     import('../../../packages/switch/switch.vue').then(module => {
      switchComponent.value = module.default
    })
})
const percent = ref(60)
const checked = ref(false)

const onIncrease = (scale: number)=>{
  const res = percent.value + scale
  if (res > 100) {
    percent.value = 100
  } else {
    percent.value = res
  }
}
const onDecline=(scale: number)=>{
  const res = percent.value - scale
  if (res < 0) {
    percent.value = 0
  } else {
    percent.value = res
  }
}




const isloadFn=()=>{
  percent.value++

  if(checked.value){
    console.log(percent.value)
  if(percent.value==100) return
     window.requestAnimationFrame(isloadFn)
  }
  
  // let time
  // if(checked.value){
  //     time=setInterval(()=>{
  //       percent.value++
  //       console.log(percent.value)
  //       if(percent.value==100){
  //         clearInterval(time)
  //       }
  //       },100)
  // }else{
  //    if(time){
  //         clearInterval(time)
  //       }
  // }
}
</script>

## 基本使用

<component v-if="mapComponent" :is="mapComponent"  :percent="percent" />
<component v-if="btnComponent" :is="btnComponent" @click="onDecline(20)" size="large" style="margin-right: 30px; margin-top: 30px;">-20</component>
<component v-if="btnComponent" :is="btnComponent" @click="onIncrease(20)" size="large">+20</component>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(60)
</script>
<template>
  <Progress :percent="percent" />
  <Button @click="onDecline(20)" size="large" style="margin-right: 30px; margin-top: 30px;">-20</Button>
  <Button @click="onIncrease(20)" size="large">+20</Button>
</template>
```

:::

## 完成进度条

<component v-if="mapComponent" :is="mapComponent"  width="100%" :percent="100" />

::: details Show Code

```vue
<template>
  <Progress width="100%" :percent="100" />
</template>
```

:::

## 渐变进度条

*strokeColor: { '0%': '#108ee9', '100%': '#87d068', direction: 'right' } 或 { from: '#108ee9', to: '#87d068', direction: 'right' }*

<br/>

<component v-if="mapComponent" :is="mapComponent" 
  :percent="percent"
  :strokeColor="{
    '0%': '#108ee9',
    '100%': '#87d068',
    direction: 'right'
  }" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(60)
</script>
<template>
  <Progress
  :percent="percent"
  :strokeColor="{
    '0%': '#108ee9',
    '100%': '#87d068',
    direction: 'right'
  }" />
</template>
```

:::

## 进度圈

<component v-if="mapComponent" :is="mapComponent" 
  :width="120"
  :percent="percent"
  type="circle" />

<br/>

<component v-if="btnComponent" :is="btnComponent" @click="onDecline(5)" size="large" style="margin-right: 30px; margin-top: 30px;">Decline-</component>
<component v-if="btnComponent" :is="btnComponent" @click="onIncrease(5)" size="large">Increase+</component>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(60)
const onIncrease = (scale: number)=>{
  const res = percent.value + scale
  if (res > 100) {
    percent.value = 100
  } else {
    percent.value = res
  }
}
const onDecline=(scale: number)=>{
  const res = percent.value - scale
  if (res < 0) {
    percent.value = 0
  } else {
    percent.value = res
  }
}
</script>
<template>
  <Progress
    :width="120"
    :percent="percent"
    type="circle" />
  <br/>
  <Button @click="onDecline(5)" size="large" style="margin-right: 30px; margin-top: 30px;">Decline-</Button>
  <Button @click="onIncrease(5)" size="large">Increase+</Button>
</template>
```
:::

<!-- ## 自动加载

自动加载需要自己加上定时器让绑定percent的属性值自增就ok了 

<component v-if="mapComponent" :is="mapComponent"  :percent="percent" />

<div class="m-flex">
  <h3 class="u-h3">Loading state: </h3>
  <component v-if="switchComponent" :is="switchComponent"   v-model:checked="checked"  @change="isloadFn()"/>
</div>

::: details Show Code

```vue
<script setup lang="ts">
const percent = ref(60)
const checked = ref(false)

const isloadFn=()=>{

  const time
  if(checked.value){
        time=setInterval(()=>{
        percent.value++
        console.log(percent.value)
        if(percent.value==100){
          percent.value=0
          clearInterval(time)
        }
        },100)
  }else{
    if(time){
      clearInterval(time)
    }
  }

}
</script>
<template>
  <Progress  :percent="percent" />

  <Switch  v-model:checked="checked"  @change="isloadFn()" ></Switch>
</template>
```
:::

<style>
.m-flex {
  display: flex;
  gap: 12px;
 
  align-items: center;
}
.u-h3 {
  margin-top: 0 !important;
}
.spin-content {
  display: inline-block;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 16px;
}
.u-spin {
  display: inline-block;
  width: 100px !important;
  height: 100px !important;
}
</style> -->

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
width | 进度条总宽度 | number &#124; string | '100%' | false
percent | 当前进度百分比 | number | 0 | false
strokeColor | 进度条的色彩，传入 string 时为纯色，传入 object 时为渐变 | string &#124; Gradient | '#1677FF' | false
strokeWidth | 进度条线的宽度，单位px | number | 8 | false
showInfo | 是否显示进度数值或状态图标 | boolean | true | false
type | 进度条类型 | 'line' &#124; 'circle' | 'line' | false

## Gradient Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
'0%' | 起始值 | string | false
'100%' | 终点值 | string | false
from | 起始值 | string | false
to | 终点值 | string | false
direction | 渐变方向 | 'right' &#124; 'left' | false
