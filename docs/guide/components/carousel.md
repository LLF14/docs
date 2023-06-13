# 走马灯 Carousel

## 何时使用

- 首页banner轮播展示
- 轮播新闻展示

<script setup lang="ts">
import { ref } from 'vue'
import { shallowRef, onMounted } from 'vue'    
const mapComponent = shallowRef(null)
onMounted(()=>{
    // import('./sunComponent.vue').then(module => {
    //   mapComponent.value = module.default
    // })
     import('../../../packages/carousel/Carousel.vue').then(module => {
      mapComponent.value = module.default
    })
    
})
const images = ref([
  {
    title: 'image-1',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg',
    link: ''
  },
  {
    title: 'image-2',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg',
    link: ''
  },
  {
    title: 'image-3',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg',
    link: ''
  },
  {
    title: 'image-4',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg',
    link: ''
  },
  {
    title: 'image-5',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg',
    link: ''
  }
])
</script>

## 基本使用
<component v-if="mapComponent" :is="mapComponent" :images="images" :height="360" ></component>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const images = ref([
  {
    title: 'image-1',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg',
    link: ''
  },
  {
    title: 'image-2',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg',
    link: ''
  },
  {
    title: 'image-3',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg',
    link: ''
  },
  {
    title: 'image-4',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg',
    link: ''
  },
  {
    title: 'image-5',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg',
    link: ''
  }
])
</script>

```
<component v-if="mapComponent" :is="mapComponent" :images="images" :height="360" ></component>

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
images | 走马灯图片数组 | Image[] | [] | true
interval | 自动滑动轮播间隔，单位s | number | 3000 | false
width | 走马灯宽度 | number &#124; string | '100vw' | false
height | 走马灯高度 | number &#124; string | '100vh' | false
navigation | 是否显示导航 | boolean | true | false
pagination | 是否显示分页 | boolean | true | false
disableOnInteraction | 用户操作导航或分页之后，是否禁止自动切换 | boolean | true | false
pauseOnMouseEnter | 鼠标悬浮时暂停自动切换，鼠标离开时恢复自动切换 | boolean | true | false

## Image Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
title | 图片名称 | string | false
src | 图片地址 | string | true
link | 图片跳转链接 | string | false
