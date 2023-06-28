<script setup lang="ts">
import { getCurrentInstance } from 'vue';

interface Props {
    placeholder?:string
    value?:string
}
const props=withDefaults(defineProps<Props>(),{
    placeholder:'请选择'
})
const instance = getCurrentInstance();
interface Emit {
  (name:'searchOptions', value:string):void
}
const emits=defineEmits<Emit>()
const searchOptions =(e)=>{
  emits('searchOptions',e.target.value)
}




const setValue=(value)=>{
  // const _input = instance!.refs.inputValue;
  // // @ts-ignore
  // if (_input.value.length > 0) {
  //   // @ts-ignore
  //       _input.value = value;
  //     }
  
}

const iconClickFn=(value)=>{
  const _input = instance!.refs.inputValue;

  
  // @ts-ignore
  if (_input.value.length > 0) {
    // @ts-ignore
        _input.value = '';
        // @ts-ignore
        instance!.refs.inputValue.focus()
      }
  
}
</script>

<template>
 <div class="selector-input">
  <input  ref="inputValue" type="text" class="input" :value="value" @input="searchOptions($event)" @focus="searchOptions($event)" @blur="setValue(value)">
    <label class="placeholder">{{ placeholder }}</label>
   
    <span class="iconfont icon-arrow-down" @click="iconClickFn(value)"></span>
 </div>
</template>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 4139311 */
  src: url('//at.alicdn.com/t/c/font_4139311_lw30evgzdya.woff2?t=1687920685633') format('woff2'),
       url('//at.alicdn.com/t/c/font_4139311_lw30evgzdya.woff?t=1687920685633') format('woff'),
       url('//at.alicdn.com/t/c/font_4139311_lw30evgzdya.ttf?t=1687920685633') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-down:before {
  content: "\e665";
}
@font-face {
  font-family: "iconfont"; /* Project id 4141637 */
  src: url('//at.alicdn.com/t/c/font_4141637_xa9tl0pw35.woff2?t=1687918601660') format('woff2'),
       url('//at.alicdn.com/t/c/font_4141637_xa9tl0pw35.woff?t=1687918601660') format('woff'),
       url('//at.alicdn.com/t/c/font_4141637_xa9tl0pw35.ttf?t=1687918601660') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e741";
}

@font-face {
  font-family: "iconfont"; /* Project id 4142659 */
  src: url('//at.alicdn.com/t/c/font_4142659_bqxhsfwqjm8.woff2?t=1687941789181') format('woff2'),
       url('//at.alicdn.com/t/c/font_4142659_bqxhsfwqjm8.woff?t=1687941789181') format('woff'),
       url('//at.alicdn.com/t/c/font_4142659_bqxhsfwqjm8.ttf?t=1687941789181') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-delete:before {
  content: "\e631";
}


.selector-input {
    position: relative;
    width: 100%;
    height: 38px;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      // background-color: #fff;
      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      transition: all .2s linear;

      &:focus {
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }

    .placeholder,
    .iconfont {
      position: absolute;
    }

    .placeholder {
      left: 15px;
      top: 8px;
      color: #999;
      z-index: -1;
    }

    .iconfont {
      right: 15px;
      top: 10px;
      color: #999;

      &.icon-search {
        font-size: 22px;
        top: 8px;
      }
    }
  }
</style>