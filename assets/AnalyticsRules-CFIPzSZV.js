import{K as C,u as Q,H as v,f as p,A as w,L as A,M as k,N as s,O as a,a2 as N,a3 as r,a7 as i,a8 as S,W as u,R as f,X as U,S as q,Q as y,a1 as D}from"./index-COFOeL2T.js";import{c as g}from"./QSelect-2an0Xdjf.js";import{Q as T,a as $,b as B}from"./QTable-CzVGWkD1.js";import{Q as O}from"./QPage-BBJw8y2s.js";import{u as I}from"./use-quasar-CSTLctX9.js";import"./format-BvkBI9bc.js";import"./QList-BdM4oJbp.js";import"./QLinearProgress-BX_OVINY.js";const L={class:"text-h6"},W=C({__name:"AnalyticsRules",setup(P){const b=I(),n=Q();function d(){return{name:"",type:"popular_queries",params:{source:{collections:[]},destination:{collection:""},limit:100}}}const e=v({rule:d(),expanded:n.data.analyticsRules.length===0,filter:"",columns:[{label:"Rule Name",name:"name",field:"name",align:"left",sortable:!0},{label:"Rule Type",name:"type",field:"type",align:"left",sortable:!0},{label:"Source Collection(s)",name:"source",field:o=>o.params.source.collections.join(", "),align:"left",sortable:!0},{label:"Destination Collection",name:"destination",field:o=>o.params.destination.collection,align:"left",sortable:!0},{label:"Limit",name:"limit",field:o=>o.params.limit,align:"right",sortable:!0},{label:"Actions",name:"actions",align:"right"}]}),m=p(()=>n.data.collections.map(o=>o.name)),c=p(()=>n.data.analyticsRules.map(o=>o.name).includes(e.rule.name));async function V(){await n.createAnalyticsRule(e.rule),e.expanded=!1,e.rule=d()}function _(o){e.rule=JSON.parse(JSON.stringify(o)),e.expanded=!0}function R(o){b.dialog({title:"Confirm",message:`Delete analytics rule ${o}?`,cancel:!0,persistent:!0}).onOk(()=>{n.deleteAnalyticsRule(o)})}return w(()=>{n.getAnalyticsRules()}),(o,t)=>(k(),A(O,{padding:""},{default:s(()=>[a(T,{modelValue:e.expanded,"onUpdate:modelValue":t[6]||(t[6]=l=>e.expanded=l),"expand-separator":"",icon:"sym_s_add_circle","expand-icon":"sym_s_unfold_more","expanded-icon":"sym_s_unfold_less",label:`${c.value?"Update":"Add"} Analytics Rule`,"header-class":"bg-primary text-white"},{default:s(()=>[a(N,{class:"bg-surface column"},{default:s(()=>[a(r,{class:"row q-col-gutter-md"},{default:s(()=>[a(i,{modelValue:e.rule.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.rule.name=l),class:"col-12 col-sm-6",label:"Rule Name",filled:"",rules:[l=>!!l||"Field is required"]},null,8,["modelValue","rules"]),a(i,{modelValue:e.rule.type,"onUpdate:modelValue":t[1]||(t[1]=l=>e.rule.type=l),class:"col-12 col-sm-6",label:"Rule Type",filled:"",rules:[l=>!!l||"Field is required"]},null,8,["modelValue","rules"])]),_:1}),a(r,{class:"row q-col-gutter-md"},{default:s(()=>[a(g,{modelValue:e.rule.params.source.collections,"onUpdate:modelValue":t[2]||(t[2]=l=>e.rule.params.source.collections=l),class:"col-12 col-sm-6",label:"Source Collection(s)",filled:"",options:m.value,multiple:"",hint:"Track searches sent to these collections"},null,8,["modelValue","options"]),a(g,{modelValue:e.rule.params.destination.collection,"onUpdate:modelValue":t[3]||(t[3]=l=>e.rule.params.destination.collection=l),class:"col-12 col-sm-6",label:"Destination Collection",filled:"",options:m.value},null,8,["modelValue","options"])]),_:1}),a(r,{class:"row q-col-gutter-md"},{default:s(()=>[a(i,{modelValue:e.rule.params.limit,"onUpdate:modelValue":t[4]||(t[4]=l=>e.rule.params.limit=l),class:"col-12 col-sm-6",label:"Limit",filled:"",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),a(S,{align:"right",class:"bg-primary"},{default:s(()=>[a(u,{size:"md",padding:"sm lg",unelevated:"",color:"primary",onClick:t[5]||(t[5]=l=>V())},{default:s(()=>[f(U(c.value?"Update":"Add")+" Rule",1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","label"]),a($,{class:"q-mt-md",title:"Analytics Rules",flat:"",bordered:"",filter:e.filter,rows:q(n).data.analyticsRules,columns:e.columns,"row-key":"name",pagination:{rowsPerPage:50,sortBy:"name"}},{"top-left":s(()=>[D("div",L,[a(y,{size:"md",name:"sym_s_query_stats"}),t[8]||(t[8]=f(" Analytics Rules"))])]),"top-right":s(()=>[a(i,{modelValue:e.filter,"onUpdate:modelValue":t[7]||(t[7]=l=>e.filter=l),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:s(()=>[a(y,{name:"sym_s_search"})]),_:1},8,["modelValue"])]),"body-cell-actions":s(l=>[a(B,{class:"text-right"},{default:s(()=>[a(u,{flat:"",icon:"sym_s_edit",title:"Edit",onClick:x=>_(l.row)},null,8,["onClick"]),a(u,{flat:"",color:"negative",icon:"sym_s_delete_forever",title:"Delete",onClick:x=>R(l.row.name)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["filter","rows","columns"])]),_:1}))}});export{W as default};
