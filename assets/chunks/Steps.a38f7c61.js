import{i as f,l as d,o,c as n,b as a,F as w,z as S,x as h,u as i,n as y,t as u,m as g,v as k,A as B,B as C,_ as z}from"../app.a2747a60.js";const I=t=>(B("data-v-06331161"),t=t(),C(),t),b={class:"m-steps"},x=["onClick"],M={class:"m-steps-icon"},W={key:0,class:"u-num"},$={key:1,class:"u-icon",viewBox:"64 64 896 896","data-icon":"check","aria-hidden":"true",focusable:"false"},D=I(()=>a("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"},null,-1)),F=[D],L={class:"m-steps-content"},A={class:"u-steps-title"},E=f({__name:"Steps",props:{steps:{default:()=>[]},current:{default:1},width:{default:"100%"},descMaxWidth:{default:120}},emits:["update:current","change"],setup(t,{emit:p}){const s=t,m=d(()=>typeof s.width=="number"?s.width+"px":s.width),_=d(()=>s.steps.length),c=d(()=>s.current<1?1:s.current>_.value+1?_.value+1:s.current),v=r=>{c.value!==r&&(p("update:current",r),p("change",r))};return(r,H)=>(o(),n("div",{class:"m-steps-area",style:h(`width: ${i(m)};`)},[a("div",b,[(o(!0),n(w,null,S(t.steps,(l,e)=>(o(),n("div",{class:y(["m-steps-item",{finish:i(c)>e+1,process:i(c)===e+1,wait:i(c)<e+1}]),key:e},[a("div",{class:"m-info-wrap",onClick:N=>v(e+1)},[a("div",M,[i(c)<=e+1?(o(),n("span",W,u(e+1),1)):(o(),n("svg",$,F))]),a("div",L,[a("div",A,u(l.title),1),g(a("div",{class:"u-steps-description",style:h(`max-width: ${t.descMaxWidth}px;`)},u(l.description),5),[[k,l.description]])])],8,x)],2))),128))])],4))}});const j=z(E,[["__scopeId","data-v-06331161"]]);export{j as default};