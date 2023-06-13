import { defineConfig } from "vitepress";

export default defineConfig({
    base:'/docs/',
    lang: 'zh-CN',
    title: '14 BLOG',
    description: '记录日常摸鱼瞬间~~',
    ignoreDeadLinks: true,
    lastUpdated: true,
    appearance: true,
    markdown: {  //设置代码块主题
        theme: 'material-palenight',
        lineNumbers: true
      },
      
      themeConfig: {
        logo: 'https://img1.baidu.com/it/u=1603808805,3557228353&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300',
        
        nav: [
            {text:'首页',link:'/'},
            {text:'摸鱼',link:'/frontend/'},
            {text:'组件库',link:'/guide/index'},
            {text:'关于',link:'/user/index'},
           
        ],
        sidebar: { 
          
            '/frontend/':[
               {
                text:'开始摸鱼',
                collapsible:true,
                collapsed:false,
                items:[
                    {
                      text:'排序算法',link: '/frontend/arithmetic/'
                    },
                    {
                      text:'掘金文章',link: '/frontend/jueJin/'
                    },
                ]
               },
               {
                text:'javaScript',
                collapsible:true,
                collapsed:false,
                items:[
                    {
                      text:'apply、call、bind',link: '/frontend/javaScript/apply_call_bind'
                    },
                    {
                      text:'Promise',link: '/frontend/javaScript/Promise'
                    },
                   
                    
                ]
               },
               {
                text:'typeScript',
                collapsible:true,
                collapsed:false,
                items:[
                    {
                      text:'类型',link: '/frontend/typeScript/类型'
                    },
                    
                ]
               },
               {
                text:'Vue',
                collapsible:true,
                collapsed:false,
                items:[
                    {
                      text:'nextTick',link: '/frontend/Vue/nextTick'
                    },
                    {
                      text:'Pinia',link: '/frontend/Vue/Pinia'
                    },
                    
                    
                ]
               },
               {
                text:'浏览器',
                collapsible:true,
                collapsed:false,
                items:[
                    {
                      text:'事件循环 EventLoop',link: '/frontend/Web/事件循环'
                    },  
                ]
               },
              
            ],
            '/guide/':[
              {
               text:'组件库',
               collapsible:true,
               collapsed:false,
               items:[
                    {
                      text:'加载动画 Spin',link: '/guide/components/spin'
                    },
                   {
                     text:'折叠面板 Collapse',link: '/guide/components/collapse'
                   },
                   {
                     text:'走马灯 Carousel',link: '/guide/components/carousel'
                   },
                   {
                    text:'步骤条 Steps',link: '/guide/components/steps'
                  },
                  {
                    text:'文字滚动 TextScroll',link: '/guide/components/textscroll'
                  },
               ]
              },
              
             
           ],
            

               
            
         },
         socialLinks: [
            { icon: 'github', link: 'https://github.com/LLF14' },
           
          ],
          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Liao Lan Fei'
          },
          algolia: {
            appId: 'X9WMGSVLOH',
            apiKey: '8a037349ae42e47846ac274e7dc82a2d',
            indexName: 'blog_search'
          }
      },
     
})