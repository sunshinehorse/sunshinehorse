(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4011b7ce"],{2423:function(t,n,r){"use strict";r.d(n,"s",function(){return a}),r.d(n,"a",function(){return u}),r.d(n,"y",function(){return o}),r.d(n,"r",function(){return i}),r.d(n,"n",function(){return d}),r.d(n,"u",function(){return l}),r.d(n,"x",function(){return c}),r.d(n,"b",function(){return s}),r.d(n,"o",function(){return f}),r.d(n,"l",function(){return m}),r.d(n,"z",function(){return p}),r.d(n,"c",function(){return b}),r.d(n,"i",function(){return g}),r.d(n,"t",function(){return h}),r.d(n,"h",function(){return O}),r.d(n,"p",function(){return j}),r.d(n,"m",function(){return k}),r.d(n,"d",function(){return v}),r.d(n,"A",function(){return w}),r.d(n,"e",function(){return y}),r.d(n,"B",function(){return T}),r.d(n,"f",function(){return _}),r.d(n,"v",function(){return A}),r.d(n,"w",function(){return I}),r.d(n,"q",function(){return L}),r.d(n,"g",function(){return x}),r.d(n,"k",function(){return B}),r.d(n,"j",function(){return C});var e=r("b775");function a(t){return Object(e["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function u(t){return Object(e["a"])({url:"/article/create",method:"post",data:t})}function o(t){return Object(e["a"])({url:"/article/update",method:"post",data:t})}function i(t){return Object(e["a"])({url:"/mgr/drugbrand/listMadeIns",method:"post",data:t})}function d(t){return Object(e["a"])({url:"/mgr/task/listInTasks",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/mgr/task/getTaskDetail",method:"post",data:t})}function c(t){return Object(e["a"])({url:"/mgr/box/listByInTaskId",method:"post",data:t})}function s(t){return Object(e["a"])({url:"/mgr/import/inTask",method:"post",data:t})}function f(t){return Object(e["a"])({url:"/mgr/task/listOutTasks",method:"post",data:t})}function m(t){return Object(e["a"])({url:"/mgr/box/listByOutTaskId",method:"post",data:t})}function p(t){return Object(e["a"])({url:"/mgr/task/updateOutTask",method:"post",data:t})}function b(t){return Object(e["a"])({url:"/mgr/task/createOutTask",method:"post",data:t})}function g(t){return Object(e["a"])({url:"/mgr/drugbrand/listAll",method:"post",data:t})}function h(t){return Object(e["a"])({url:"/mgr/seller/listAll",method:"post",data:t})}function O(t){return Object(e["a"])({url:"/mgr/dealer/listBySellerId",method:"post",data:t})}function j(t){return Object(e["a"])({url:"/mgr/task/listReturnTasks",method:"post",data:t})}function k(t){return Object(e["a"])({url:"/mgr/drug/listByReturnTaskId",method:"post",data:t})}function v(t){return Object(e["a"])({url:"/mgr/task/createReturnTask",method:"post",data:t})}function w(t){return Object(e["a"])({url:"/mgr/task/updateReturnTask",method:"post",data:t})}function y(t){return Object(e["a"])({url:"/mgr/user/create",method:"post",data:t})}function T(t){return Object(e["a"])({url:"/mgr/user/update",method:"post",data:t})}function _(t){return Object(e["a"])({url:"/mgr/user/delete",method:"post",data:t})}function A(t){return Object(e["a"])({url:"/mgr/user/listAll",method:"post",data:t})}function I(t){return Object(e["a"])({url:"/mgr/version/listAll",method:"post",data:t})}function L(t){return Object(e["a"])({url:"/mgr/log/listAll",method:"post",data:t})}function x(t){return Object(e["a"])({url:"/mgr/boxrule/listAll",method:"post",data:t})}function B(t){return Object(e["a"])({url:"/mgr/role/listAll",method:"post",data:t})}function C(t){return Object(e["a"])({url:"/mgr/permission/listAll",method:"post",data:t})}},e6e2:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"app-container"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.downloadLoading,expression:"downloadLoading"}],staticClass:"oyt"},[r("div",{staticClass:"filter-container"},[r("el-button",{staticClass:"filter-item",attrs:{type:"primary"}},[t._v("添加")])],1),t._v(" "),r("el-table",{staticStyle:{width:"60%"},attrs:{data:t.list,border:""}},[r("el-table-column",{attrs:{label:"产品名称",prop:"drugBrand.name",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"代表码",prop:"code",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"规格",prop:"capacities",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"编辑",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.handleToDetail(n.row.id)}}},[t._v("编辑")]),t._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.handleToDetail(n.row.id)}}},[t._v("删除")])]}}])})],1)],1)])},a=[],u=r("2423"),o={data:function(){return{list:[],downloadLoading:!1}},created:function(){this.getVersionList()},methods:{getVersionList:function(){var t=this;this.downloadLoading=!0,Object(u["g"])().then(function(n){200==n.status&&(t.list=n.entity,t.downloadLoading=!1)})},handleToDetail:function(t){}}},i=o,d=r("2877"),l=Object(d["a"])(i,e,a,!1,null,null,null);n["default"]=l.exports}}]);