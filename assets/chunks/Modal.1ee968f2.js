import{i as T,j as l,e as w,C as B,D as d,o as f,g as M,w as S,T as H,m as h,v as C,b as e,u as m,n as I,x as o,t as n,p as D,c as R,h as j,A as z,B as N,_ as O}from"../app.a2747a60.js";const a=t=>(z("data-v-978562ff"),t=t(),N(),t),V={class:"model-mask"},A={class:"m-spin-dot"},E=a(()=>e("span",{class:"u-dot-item"},null,-1)),$=a(()=>e("span",{class:"u-dot-item"},null,-1)),p=a(()=>e("span",{class:"u-dot-item"},null,-1)),q=a(()=>e("span",{class:"u-dot-item"},null,-1)),F=[E,$,p,q],G={class:"content"},J={key:0,class:"btn-group"},K=T({__name:"Modal",props:{show:{type:Boolean},borderRadius:{default:20},titleText:{default:"this is a title "},titleTextColor:null,titleColor:{default:"pink"},contentText:null,contentTextColor:{default:"#000"},center:{type:Boolean,default:!0},btnShow:{type:Boolean,default:!1},width:null,top:{default:100},left:null,right:null,confirmText:{default:"确定"},cancelText:{default:"取消"},backgroundColor:null,btnColor:null,onCancelMask:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(t,{emit:r}){const s=t,c=l(null),x=l(null),g=l();w(()=>{b.uiModalHeight=c.value.offsetHeight});const b=B({uiModalHeight:0});l(!1),d(c,()=>{if(s.onCancelMask&&s.show)return i()});const i=()=>{r("cancel",!1)},k=()=>{r("confirm",!1)};return(v,u)=>(f(),M(H,null,{default:S(()=>[h(e("div",V,[e("div",{"on:onClickOutside":u[0]||(u[0]=(...y)=>m(d)&&m(d)(...y)),class:I(["ui-model ",t.center?"relative-hv-center":"top-center",t.loading?"loading":""]),ref_key:"uiModal",ref:c,style:o({width:t.width+"px",borderRadius:t.borderRadius+"px",top:t.center?"50%":t.top+"px",left:t.left+"px",right:t.right+"px",backgroundColor:t.backgroundColor})},[e("header",{class:"header",ref_key:"header",ref:x,style:o({color:t.titleTextColor,backgroundColor:t.titleColor,height:g.value*100})},[e("h1",null,n(t.titleText),1),e("a",{href:"javascript:;",style:o({color:t.titleTextColor}),onClick:i},"×",4)],4),h(e("div",A,F,512),[[C,t.loading]]),D(v.$slots,"content",{},void 0,!0),e("article",G,[e("p",{style:o({color:t.contentTextColor})},n(t.contentText),5)]),t.btnShow?(f(),R("div",J,[e("button",{class:"btn btn-cancel",onClick:i},n(t.cancelText),1),e("button",{class:"btn btn-confirm",onClick:k,style:o({color:t.titleTextColor,backgroundColor:t.btnColor||t.titleColor})},n(t.confirmText),5)])):j("",!0)],38)],512),[[C,s.show]])]),_:3}))}});const P=O(K,[["__scopeId","data-v-978562ff"]]);export{P as default};
