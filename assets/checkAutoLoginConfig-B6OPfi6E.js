import{d as n,b as f,c as r,u as s}from"./index-COFOeL2T.js";const g=n(({store:a})=>{f.is.electron||r.get("config.json").then(t=>{const o=s(a);t.data&&t.data.apiKey&&o.login(t.data),t.data&&t.data.history&&t.data.history.forEach(d=>{const i=JSON.stringify(d);o.loginHistory.includes(i)||o.loginHistory.push(i)})})});export{g as default};
