(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ec4fd198"],{ec4fd198:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("9ed2e865");var r=l("5b220c3d"),s=l("a9d1a279");let t={labelCol:{span:4},wrapperCol:{span:8}},i={labelCol:{span:4},wrapperCol:{span:8,offset:4}};var o=()=>{let[e]=s.Form.useForm(),[a,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{e.validateFields(["nickname"]);},[a,e]);let o=async()=>{try{let a=await e.validateFields();console.log("Success:",a);}catch(e){console.log("Failed:",e);}};return(0,n.jsxs)(s.Form,{form:e,name:"dynamic_rule",style:{maxWidth:600},children:[(0,n.jsx)(s.Form.Item,{...t,name:"username",label:"Name",rules:[{required:!0,message:"Please input your name"}],children:(0,n.jsx)(s.Input,{placeholder:"Please input your name"})}),(0,n.jsx)(s.Form.Item,{...t,name:"nickname",label:"Nickname",rules:[{required:a,message:"Please input your nickname"}],children:(0,n.jsx)(s.Input,{placeholder:"Please input your nickname"})}),(0,n.jsx)(s.Form.Item,{...i,children:(0,n.jsx)(s.Checkbox,{checked:a,onChange:e=>{l(e.target.checked);},children:"Nickname is required"})}),(0,n.jsx)(s.Form.Item,{...i,children:(0,n.jsx)(s.Button,{type:"primary",onClick:o,children:"Check"})})]});};}}]);