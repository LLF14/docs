import{c as y,r as $}from"./index.981925da.js";import{i as T,j as o,e as w,o as C,c as R,b as a,x as n,p as g,n as S,d as p,t as h,_ as z}from"../app.a2747a60.js";const M={class:"m-arrow"},W=T({__name:"Tooltip",props:{maxWidth:{default:120},content:{default:"暂无内容"},title:{default:"暂无提示"},fontSize:{default:14},color:{default:"#FFF"},backgroundColor:{default:"rgba(0,0,0,.85)"}},setup(e){const l=o(!1),c=o(),i=o(0),r=o(0),u=o(),s=o();w(()=>{d()});const d=()=>{const t=u.value.getBoundingClientRect(),m=t.top,x=t.left,b=t.width,_=s.value.offsetWidth,k=s.value.offsetHeight;i.value=m-k,r.value=x-(_-b)/2},f=()=>{d(),y(c.value),l.value=!0},v=()=>{c.value=$(()=>{l.value=!1},100)};return(t,m)=>(C(),R("div",{class:"m-tooltip",onMouseenter:f,onMouseleave:v},[a("div",{ref_key:"titleRef",ref:s,class:S(["m-title",{"show-tip":l.value}]),onMouseenter:f,onMouseleave:v,style:n(`max-width: ${e.maxWidth}px; top: ${i.value}px; left: ${r.value}px;`)},[a("div",{class:"u-title",style:n(`font-size: ${e.fontSize}px; color: ${e.color}; background-color: ${e.backgroundColor};`)},[g(t.$slots,"title",{},()=>[p(h(e.title),1)],!0)],4),a("div",M,[a("span",{class:"u-arrow",style:n(`background-color: ${e.backgroundColor};`)},null,4)])],38),a("div",{ref_key:"contentRef",ref:u,class:"u-content"},[g(t.$slots,"default",{},()=>[p(h(e.content),1)],!0)],512)],32))}});const H=z(W,[["__scopeId","data-v-71f279ab"]]);export{H as default};
