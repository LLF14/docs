<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import NoDataTip from './NoDataTip.vue';
import { getCurrentInstance } from 'vue';


interface data{
    id:number,
    value:string,
    text:string, 
    disabled?:boolean,
    
}
interface Props{
    data?:data[],
    searchValue?:string,
    height?:number,
    width?:number,
    isScroll?:boolean
}
// const props=defineProps<Props>()

const props=withDefaults(defineProps<Props>(),{
    data:() => [
        { 
          id:1,
          value:'1',
          text:'选项1'
        },
        { 
          id:2,
          value:'2',
          text:'选项2'
        },
        { 
          id:3,
          value:'3',
          text:'选项3'
        }
        ],
    disabled:false,
    isScroll:false,
   
})

interface Emit {
    (name:'setItemValue',item:data):void
}
const emits=defineEmits<Emit>()
const setItemValue=(item:data)=>{
    if(item.disabled) return
    emits('setItemValue',item)
}

const searchData=ref<data[]>()
onMounted(()=>{
    searchData.value=props.data
   


})
const search=props.searchValue
const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue!.toLowerCase());
      });
    }



    watch( () => props.searchValue, (value) => {
      filterData(value);
    })


 
</script>
<!-- :style=" `height:${height}px`" -->
<template>
  <div class="selector-menu"    :style="{'height':height+'px', 'overflow':isScroll&&searchData?.length as number>=5?'auto':'hidden',}">
       <template v-if="searchData?.length">
        <div  
        :class="['menu-item', { 'disabled': item.disabled}]"
        v-for="(item, index) of searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <NoDataTip v-else />  
   
  </div>
</template>

<style lang="less" scoped>
.selector-menu {
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;
    z-index: 9;
    .menu-item {
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      transition: background-color .2s linear;
      
      &:hover {
        background-color: #ededed;
      }
    }
.disabled { // 下拉禁用样式
  color: rgba(0,0,0,.25);
  background: #f5f5f5;
  user-select: none;
  cursor: not-allowed;
}
  }
</style>