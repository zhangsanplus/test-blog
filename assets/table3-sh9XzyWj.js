import{n as f,am as v,I as b,k as w,S as N,m as y,w as A}from"./index-Bm7lfUbx.js";import{d as i,z as G,o as g,S as L,R as t,r as C,n as z,u as k,U as T,T as B,a8 as u,c as D,P as a,b as V,V as m,t as E,F}from"./vue-CpysqPi9.js";const P=f({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:v,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),I=i({name:"ElText"}),U=i({...I,props:P,setup(p){const s=p,d=b(),e=w("text"),l=G(()=>[e.b(),e.m(s.type),e.m(d.value),e.is("truncated",s.truncated),e.is("line-clamp",!N(s.lineClamp))]);return(o,c)=>(g(),L(B(o.tag),{class:z(k(l)),style:T({"-webkit-line-clamp":o.lineClamp})},{default:t(()=>[C(o.$slots,"default")]),_:3},8,["class","style"]))}});var $=y(U,[["__file","text.vue"]]);const K=A($),R={style:{margin:"0 8px",padding:"15px",background:"var(--el-table-header-bg-color)"}},H=i({__name:"table3",setup(p){const s=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],d=[{type:"expand",label:"展开行",width:70},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],e=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],l=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],o=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];function c(x,_,n){setTimeout(()=>{n([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)}return(x,_)=>{const n=u("x-table"),r=u("x-card"),h=K;return g(),D(F,null,[a(r,{title:"树形表格"},{default:t(()=>[a(n,{"default-expand-all":"",columns:s,"data-source":e,pageable:!1})]),_:1}),a(r,{title:"懒加载"},{default:t(()=>[a(n,{lazy:"",load:c,columns:s,"data-source":l,pageable:!1})]),_:1}),a(r,{title:"展开行"},{default:t(()=>[a(n,{columns:d,"data-source":o,pageable:!1},{expand:t(({row:S})=>[V("p",R,[m(" 这条数据的日期是 "),a(h,{type:"primary"},{default:t(()=>[m(E(S.date),1)]),_:2},1024)])]),_:1})]),_:1})],64)}}});export{H as default};
