export default {
    mounted(el) {
        const onSeleceorInput=el.querySelector('.selector-input'),
             onSeleceorMenu=el.querySelector('.selector-menu')
              

        const onInput=onSeleceorInput.querySelector('input'),
              onPlaceHolder=onSeleceorInput.querySelector('label'),
              onIcon=onSeleceorInput.querySelector('span')
        
           onInput.addEventListener('focus',function(){
            onPlaceHolder.style.display='none',
            onIcon.className='iconfont icon-search'

            setTimeout(()=>{
                onSeleceorMenu.style.display="block"
            },200)
           
            if (this.value.length>=1) {
                onIcon.className='iconfont icon-delete'
               
            }

           },false)

           onInput.addEventListener('blur',function (){
           
            onIcon.className='iconfont icon-arrow-down'
            onPlaceHolder.style.display='none'
            
           setTimeout(()=>{
            onSeleceorMenu.style.display="none"
            if (this.value.length === 0) {
                onPlaceHolder.style.display = 'block';
              }
           },200)
           },false)

           onInput.addEventListener('input',function (){
           

            if (this.value.length>=1) {
                onIcon.className='iconfont icon-delete'
                onPlaceHolder.style.display='none'

            }else{
                onIcon.className='iconfont icon-search'
                
            }
            
            
            
           
           },false)
      }
  }