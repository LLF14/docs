

<script setup lang="ts">
import '../icons/star/iconfont.css'


interface Props {
    count?:number //星星数量
    size?:number//字体大小
    active?:number //默认选中
    disabled?:boolean//是否禁用
    color?:string //星星颜色
}
withDefaults(defineProps<Props>(),{
    count:5, 
    size:32, 
    active:1,
    disabled:false, 
    color:'pink'
})


interface Emit {
    (name:'change',index:number):void
}
const emit=defineEmits<Emit>()



const change=(index:number)=>{
// console.log(index);

// emit('update:value',index)
    emit('change',index)
}

</script>

<template>
    
  <div>
    <span 
    :class="['iconfont icon-star ',disabled?'disabled':'', active>=item?'active ':'',]" 
    :style="{'font-size':size +'px','color':active>=item&&color?color:''}" 
    v-for="item in count" :key="item" @click="change(item)" >&#xe617;</span>
  </div>
</template>

<style lang="less" scoped>


@font-face {
  font-family: "iconfont"; /* Project id 4139311 */
  src: url('//at.alicdn.com/t/c/font_4139311_qqiua51blu.woff2?t=1687780493640') format('woff2'),
       url('//at.alicdn.com/t/c/font_4139311_qqiua51blu.woff?t=1687780493640') format('woff'),
       url('//at.alicdn.com/t/c/font_4139311_qqiua51blu.ttf?t=1687780493640') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  cursor: pointer;

&.icon-StarUnselected:before {
  content: "\e617";
}
&.icon-star{
    transition: color .3s;
}
&.active{
    color: #feba60;
}
&.disabled{
    // cursor: not-allowed;
    pointer-events: none;
    
}
}


</style>