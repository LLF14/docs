<script setup lang="ts">
import selectInput from './input.vue'
import selectMenu from './Menu.vue'
import vFocus from '../utils/focus'
import { ref } from 'vue';


interface data{
    id:number,
    value:string,
    text:string, 
    disabled?:boolean,
}

interface Props {
  placeholder:string,
  data:data[],
  height?:number,
  width?:number,
  isScroll?:boolean
}
// const vFocus = {
//   mounted (el) {
//       console.log(el);
      
//     }
// }

defineProps<Props>()

interface Emit {
  (name:'setItemValue',item:data):void
}
const emits=defineEmits<Emit>()
const inputValue=ref('')
const setItemValue=(item)=>{
  inputValue.value=item.text
  emits('setItemValue',item)
}

const searchValue=ref('')
const searchOptions=(value)=>{
  
  searchValue.value=value
}
</script>

<template>
  <div class="selector" :style="`width:${width}px`" v-focus>
    <selectInput :placeholder="placeholder" :value="inputValue"  @searchOptions="searchOptions"/>

    <selectMenu :data="data" @setItemValue="setItemValue" :searchValue="searchValue" :height="height" :isScroll="isScroll"/>
  </div>
</template>

<style lang="less" scoped>
.selector{
    position: relative;
    width: 200px;
}
</style >