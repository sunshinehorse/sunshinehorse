(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5047e3ea"],{2423:function(t,e,r){"use strict";r.d(e,"s",function(){return l}),r.d(e,"a",function(){return a}),r.d(e,"y",function(){return o}),r.d(e,"r",function(){return s}),r.d(e,"n",function(){return i}),r.d(e,"u",function(){return u}),r.d(e,"x",function(){return d}),r.d(e,"b",function(){return c}),r.d(e,"o",function(){return f}),r.d(e,"l",function(){return m}),r.d(e,"z",function(){return p}),r.d(e,"c",function(){return h}),r.d(e,"i",function(){return b}),r.d(e,"t",function(){return g}),r.d(e,"h",function(){return k}),r.d(e,"p",function(){return v}),r.d(e,"m",function(){return y}),r.d(e,"d",function(){return O}),r.d(e,"A",function(){return j}),r.d(e,"e",function(){return _}),r.d(e,"B",function(){return I}),r.d(e,"f",function(){return w}),r.d(e,"v",function(){return x}),r.d(e,"w",function(){return T}),r.d(e,"q",function(){return A}),r.d(e,"g",function(){return B}),r.d(e,"k",function(){return S}),r.d(e,"j",function(){return $});var n=r("b775");function l(t){return Object(n["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function a(t){return Object(n["a"])({url:"/article/create",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/article/update",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/mgr/drugbrand/listMadeIns",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/mgr/task/listInTasks",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/mgr/task/getTaskDetail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/mgr/box/listByInTaskId",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/mgr/import/inTask",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/mgr/task/listOutTasks",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/mgr/box/listByOutTaskId",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/mgr/task/updateOutTask",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/mgr/task/createOutTask",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/mgr/drugbrand/listAll",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/mgr/seller/listAll",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/mgr/dealer/listBySellerId",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/mgr/task/listReturnTasks",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/mgr/drug/listByReturnTaskId",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/mgr/task/createReturnTask",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/mgr/task/updateReturnTask",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/mgr/user/create",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/mgr/user/update",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/mgr/user/delete",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/mgr/user/listAll",method:"post",data:t})}function T(t){return Object(n["a"])({url:"/mgr/version/listAll",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/mgr/log/listAll",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/mgr/boxrule/listAll",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/mgr/role/listAll",method:"post",data:t})}function $(t){return Object(n["a"])({url:"/mgr/permission/listAll",method:"post",data:t})}},6035:function(t,e,r){"use strict";var n=r("7ccc"),l=r.n(n);l.a},"7ccc":function(t,e,r){},b40e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail_page"},[r("el-form",{ref:"form"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"货品名:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.form.drugBrandId,callback:function(e){t.$set(t.form,"drugBrandId",e)},expression:"form.drugBrandId"}},t._l(t.drugbrand,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"数量:","label-width":"120px"}},[r("el-input",{staticStyle:{width:"120px",display:"inline-block"},attrs:{type:"number",placeholder:"请输入数量"},model:{value:t.form.taskQty,callback:function(e){t.$set(t.form,"taskQty",e)},expression:"form.taskQty"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"销售:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.searchDealer(t.form.sellerId)}},model:{value:t.form.sellerId,callback:function(e){t.$set(t.form,"sellerId",e)},expression:"form.sellerId"}},t._l(t.seller,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:8}},[t.form.seller?r("el-form-item",{attrs:{label:"销售电话:","label-width":"120px"}},[t._v("\n          "+t._s(t.form.seller.phone)+"\n        ")]):t._e()],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"经销商:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getDealer(t.form.dealerId)}},model:{value:t.form.dealerId,callback:function(e){t.$set(t.form,"dealerId",e)},expression:"form.dealerId"}},t._l(t.dealer,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:8}},[t.form.dealer?r("el-form-item",{attrs:{label:"经销商电话:","label-width":"120px"}},[t._v("\n          "+t._s(t.form.dealer.phone)+"\n        ")]):t._e()],1),t._v(" "),r("el-col",{attrs:{span:8}},[t.form.dealer?r("el-form-item",{attrs:{label:"经销商地址:","label-width":"120px"}},[t._v("\n          "+t._s(t.form.dealer.address)+"\n        ")]):t._e()],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"任务类别:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.importanceOptions,function(t){return r("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}),1)],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"info"},on:{click:function(e){return t.cancel()}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createNew()}}},[t._v("创建")])],1)],1)],1)],1)},l=[],a=(r("7f7f"),r("2423")),o={data:function(){return{form:{type:void 0,drugBrandId:void 0,taskQty:void 0,seller:void 0,sellerId:void 0,dealer:void 0,dealerId:void 0},drugbrand:[],seller:[],dealer:[],num:null,importanceOptions:[{key:"SALE_OUT",display_name:"销售出库"},{key:"SAMPLE_OUT",display_name:"样品出库"},{key:"EXCHANGE_OUT",display_name:"换货出库"}]}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;Object(a["i"])().then(function(e){200==e.status&&(t.drugbrand=e.entity)}),Object(a["t"])().then(function(e){200==e.status&&(t.seller=e.entity)})},selectPhone:function(t){console.log(1)},searchDealer:function(t){var e=this;if(t){for(var r=0;r<this.seller.length;r++)t==this.seller[r].id&&(this.form.seller={phone:this.seller[r].phone,id:this.seller[r].id,name:this.seller[r].name});console.log(this.form.dealer),Object(a["h"])({sellerId:t}).then(function(t){console.log(t),200==t.status&&(e.dealer=t.entity,e.form.dealerId="",e.form.dealer=void 0)})}else this.dealer=[],this.form.dealerId="",this.form.sellerId="",this.form.dealer=void 0,this.form.seller=void 0},getDealer:function(t){if(t)for(var e=0;e<this.dealer.length;e++)t==this.dealer[e].id&&(this.form.dealer={phone:this.dealer[e].phone,id:this.dealer[e].id,name:this.dealer[e].name,address:this.dealer[e].address});else this.form.dealer=void 0},createNew:function(){var t=this;console.log(this.form.seller),Object(a["c"])({type:this.form.type,drugBrandId:this.form.drugBrandId,taskQty:this.form.taskQty,sellerId:this.form.seller.id,dealerId:this.form.dealer.id}).then(function(e){console.log(e),200==e.status&&t.$message({message:"创建成功！",type:"success",onClose:t.$router.push({path:"/stock-table/out-table"})})})},cancel:function(){this.$router.back(-1)}}},s=o,i=(r("6035"),r("2877")),u=Object(i["a"])(s,n,l,!1,null,null,null);e["default"]=u.exports}}]);