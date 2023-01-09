<script setup>
// 解决打包错误 (window is not defined)
// VuePress 是在Node.js 服务端渲染，node没有window，所以报错ReferenceError: window is not defined
import { shallowRef, onMounted } from 'vue'    
const mapComponent = shallowRef(null)
onMounted(()=>{
    import('./sunComponent.vue').then(module => {
      mapComponent.value = module.default
    })
})
</script>
## 掘金文章

<component v-if="mapComponent" :is="mapComponent"></component>

<!-- ## 代码如下:

::: details 点我查看代码

<<< @/frontend/jueJin/sunComponent.vue

::: -->