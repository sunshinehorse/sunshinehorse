(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-754b24ff"],{2423:function(e,t,r){"use strict";r.d(t,"s",function(){return n}),r.d(t,"a",function(){return a}),r.d(t,"y",function(){return o}),r.d(t,"r",function(){return s}),r.d(t,"n",function(){return d}),r.d(t,"u",function(){return i}),r.d(t,"x",function(){return u}),r.d(t,"b",function(){return c}),r.d(t,"o",function(){return m}),r.d(t,"l",function(){return f}),r.d(t,"z",function(){return h}),r.d(t,"c",function(){return p}),r.d(t,"i",function(){return b}),r.d(t,"t",function(){return y}),r.d(t,"h",function(){return g}),r.d(t,"p",function(){return O}),r.d(t,"m",function(){return k}),r.d(t,"d",function(){return v}),r.d(t,"A",function(){return j}),r.d(t,"e",function(){return I}),r.d(t,"B",function(){return _}),r.d(t,"f",function(){return w}),r.d(t,"v",function(){return x}),r.d(t,"w",function(){return T}),r.d(t,"q",function(){return A}),r.d(t,"g",function(){return N}),r.d(t,"k",function(){return B}),r.d(t,"j",function(){return $});var l=r("b775");function n(e){return Object(l["a"])({url:"/article/pv",method:"get",params:{pv:e}})}function a(e){return Object(l["a"])({url:"/article/create",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/article/update",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/mgr/drugbrand/listMadeIns",method:"post",data:e})}function d(e){return Object(l["a"])({url:"/mgr/task/listInTasks",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/mgr/task/getTaskDetail",method:"post",data:e})}function u(e){return Object(l["a"])({url:"/mgr/box/listByInTaskId",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/mgr/import/inTask",method:"post",data:e})}function m(e){return Object(l["a"])({url:"/mgr/task/listOutTasks",method:"post",data:e})}function f(e){return Object(l["a"])({url:"/mgr/box/listByOutTaskId",method:"post",data:e})}function h(e){return Object(l["a"])({url:"/mgr/task/updateOutTask",method:"post",data:e})}function p(e){return Object(l["a"])({url:"/mgr/task/createOutTask",method:"post",data:e})}function b(e){return Object(l["a"])({url:"/mgr/drugbrand/listAll",method:"post",data:e})}function y(e){return Object(l["a"])({url:"/mgr/seller/listAll",method:"post",data:e})}function g(e){return Object(l["a"])({url:"/mgr/dealer/listBySellerId",method:"post",data:e})}function O(e){return Object(l["a"])({url:"/mgr/task/listReturnTasks",method:"post",data:e})}function k(e){return Object(l["a"])({url:"/mgr/drug/listByReturnTaskId",method:"post",data:e})}function v(e){return Object(l["a"])({url:"/mgr/task/createReturnTask",method:"post",data:e})}function j(e){return Object(l["a"])({url:"/mgr/task/updateReturnTask",method:"post",data:e})}function I(e){return Object(l["a"])({url:"/mgr/user/create",method:"post",data:e})}function _(e){return Object(l["a"])({url:"/mgr/user/update",method:"post",data:e})}function w(e){return Object(l["a"])({url:"/mgr/user/delete",method:"post",data:e})}function x(e){return Object(l["a"])({url:"/mgr/user/listAll",method:"post",data:e})}function T(e){return Object(l["a"])({url:"/mgr/version/listAll",method:"post",data:e})}function A(e){return Object(l["a"])({url:"/mgr/log/listAll",method:"post",data:e})}function N(e){return Object(l["a"])({url:"/mgr/boxrule/listAll",method:"post",data:e})}function B(e){return Object(l["a"])({url:"/mgr/role/listAll",method:"post",data:e})}function $(e){return Object(l["a"])({url:"/mgr/permission/listAll",method:"post",data:e})}},4070:function(e,t,r){"use strict";var l=r("7498"),n=r.n(l);n.a},5549:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detail_page"},[r("el-form",{ref:"form"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"货品名:","label-width":"120px"}},[e._v("\n          "+e._s(e.form.drugBrandName)+"\n          ")])],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"数量:","label-width":"120px"}},[r("el-input",{staticStyle:{width:"120px",display:"inline-block"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.form.taskQty,callback:function(t){e.$set(e.form,"taskQty",t)},expression:"form.taskQty"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"销售:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},on:{change:function(t){return e.searchDealer(e.form.sellerId)}},model:{value:e.form.sellerId,callback:function(t){e.$set(e.form,"sellerId",t)},expression:"form.sellerId"}},e._l(e.seller,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[e.form.seller?r("el-form-item",{attrs:{label:"销售电话:","label-width":"120px"}},[e._v(e._s(e.form.seller.phone))]):e._e()],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"经销商:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},on:{change:function(t){return e.getDealer(e.form.dealerId)}},model:{value:e.form.dealerId,callback:function(t){e.$set(e.form,"dealerId",t)},expression:"form.dealerId"}},e._l(e.dealer,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[e.form.dealer?r("el-form-item",{attrs:{label:"经销商电话:","label-width":"120px"}},[e._v(e._s(e.form.dealer.phone))]):e._e()],1),e._v(" "),r("el-col",{attrs:{span:8}},[e.form.dealer?r("el-form-item",{attrs:{label:"经销商地址:","label-width":"120px"}},[e._v(e._s(e.form.dealer.address))]):e._e()],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"任务类别:","label-width":"120px"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.importanceOptions,function(e){return r("el-option",{key:e.type,attrs:{label:e.display_name,value:e.type}})}),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"info"},on:{click:function(t){return e.cancel()}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateTask()}}},[e._v("创建")])],1)],1)],1)],1)},n=[],a=(r("7f7f"),r("bd86")),o=r("2423"),s={data:function(){var e;return e={id:null,batch:null,status:null,type:null,name:null,orgin:null,user:null,record:null,sellerPhone:null,sellerName:null,dealerName:null,dealerPhone:null,dealerAddress:null},Object(a["a"])(e,"record",null),Object(a["a"])(e,"tableData",[]),Object(a["a"])(e,"form",{drugBrandName:void 0,type:void 0,drugBrandId:void 0,taskQty:void 0,seller:void 0,sellerId:void 0,dealer:void 0,dealerId:void 0}),Object(a["a"])(e,"drugbrand",[]),Object(a["a"])(e,"seller",[]),Object(a["a"])(e,"dealer",[]),Object(a["a"])(e,"num",null),Object(a["a"])(e,"importanceOptions",[{type:21,key:"SALE_OUT",display_name:"销售出库"},{type:22,key:"SAMPLE_OUT",display_name:"样品出库"},{type:23,key:"EXCHANGE_OUT",display_name:"换货出库"}]),e},created:function(){this.id=this.$route.query.id,this.getDetail()},methods:{getDetail:function(){var e=this;Object(o["u"])({taskId:this.id}).then(function(t){console.log(t),200==t.status&&(e.form.drugBrandName=t.entity.drugBrandName,e.form.taskQty=t.entity.taskQty,e.form.type=t.entity.type,e.form.sellerId=t.entity.sellerId,e.form.dealerId=t.entity.dealerId,e.detail=t.entity,e.batch=t.entity.id,e.type=t.entity.type,e.status=t.entity.status,e.name=t.entity.drugBrandName,e.orgin=t.entity.madeIn,e.sellerPhone=t.entity.sellerPhone,e.sellerName=t.entity.sellerName,e.dealerName=t.entity.dealerName,e.dealerPhone=t.entity.dealerPhone,e.dealerAddress=t.entity.dealerAddress,e.user=t.entity.appuserRealName,Object(o["t"])().then(function(t){if(200==t.status){e.seller=t.entity;for(var r=0;r<e.seller.length;r++)e.form.sellerId==e.seller[r].id&&(e.form.seller={phone:e.seller[r].phone,id:e.seller[r].id,name:e.seller[r].name});Object(o["h"])({sellerId:e.form.sellerId}).then(function(t){if(console.log(t),200==t.status){e.dealer=t.entity;for(var r=0;r<e.dealer.length;r++)e.form.dealerId==e.dealer[r].id&&(e.form.dealer={phone:e.dealer[r].phone,id:e.dealer[r].id,name:e.dealer[r].name,address:e.dealer[r].address})}})}}))}),Object(o["l"])({outTaskId:this.id}).then(function(e){200==e.status&&console.log(e)}),Object(o["i"])().then(function(t){200==t.status&&(e.drugbrand=t.entity)})},searchDealer:function(e){var t=this;if(e){for(var r=0;r<this.seller.length;r++)e==this.seller[r].id&&(this.form.seller={phone:this.seller[r].phone,id:this.seller[r].id,name:this.seller[r].name});console.log(this.form.dealer),Object(o["h"])({sellerId:e}).then(function(e){console.log(e),200==e.status&&(t.dealer=e.entity,t.form.dealerId="",t.form.dealer=void 0)})}else this.dealer=[],this.form.dealerId="",this.form.sellerId="",this.form.dealer=void 0,this.form.seller=void 0},getDealer:function(e){if(e)for(var t=0;t<this.dealer.length;t++)e==this.dealer[t].id&&(this.form.dealer={phone:this.dealer[t].phone,id:this.dealer[t].id,name:this.dealer[t].name,address:this.dealer[t].address});else this.form.dealer=void 0},updateTask:function(){var e=this;console.log(this.form.seller),Object(o["z"])({taskId:this.id,type:this.form.type,taskQty:this.form.taskQty,sellerId:this.form.sellerId,dealerId:this.form.dealerId}).then(function(t){console.log(t),200==t.status&&e.$message({message:"更新成功！",type:"success",onClose:e.$router.push({path:"/stock-table/out-table"})})})},cancel:function(){this.$router.back(-1)}}},d=s,i=(r("4070"),r("2877")),u=Object(i["a"])(d,l,n,!1,null,null,null);t["default"]=u.exports},7498:function(e,t,r){}}]);