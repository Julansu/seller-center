webpackJsonp([27],{"5HJb":function(t,e,n){var a=n("tUma");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("6imX")("4022b50a",a,!0)},UfAT:function(t,e,n){"use strict";var a=n("pgiz");e.a={data:function(){return{filters:{name:""},users:[],total:0,page:1,pageSize:10,listLoading:!1}},watch:{$route:function(t,e){console.log(this.$route.path),"/store/shop-management"==this.$route.path&&this.getUsers()}},methods:{getUsers:function(){var t=this,e={storeId:storeId,page:this.page,pageSize:this.pageSize};this.listLoading=!0,Object(a.m)(e).then(function(e){t.total=Number(e.data.data.total),t.users=e.data.data.list,t.listLoading=!1})},handleCurrentChange:function(t){this.page=t,this.getUsers()},handleDel:function(t,e){var n=this,s=this.$createElement,o=0==e.isHead?1:0;this.$msgbox({title:"设为总店",message:s("p",null,[s("span",null,"确认要设为总店吗？ "),s("i",{style:"text-align: center"},"")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(t,s,r){if("confirm"===t){var l=new URLSearchParams;l.append("storeBranchId",e.storeBranchId),l.append("isHead",o),Object(a.N)(l).then(function(t){0==t.data.code?(n.getUsers(),r()):(r(),n.$message.error(t.data.message))}).catch(function(t){})}else r()}})}},mounted:function(){this.getUsers()}}},fGvu:function(t,e,n){"use strict";function a(t){n("5HJb")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("UfAT"),o=n("j58b"),r=n("mPyB"),l=a,i=r(s.a,o.a,!1,l,null,null);e.default=i.exports},j58b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"门店管理"==t.$route.name?n("section",{staticClass:"shop-list"},[n("el-col",{staticClass:"tool-bar",attrs:{span:24}},[n("router-link",{attrs:{to:"/store/shop-management/add",icon:"plus"}},[n("el-button",{attrs:{type:"primary",icon:"plus"}},[t._v("添加门店")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.users}},[n("el-table-column",{attrs:{prop:"name",label:"门店名称",width:"190",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"门店地址","min-width":"190",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"workTime",label:"营业时间",width:"190",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"contactPerson",label:"联系人",width:"190",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"编辑门店",params:{id:e.row.storeBranchId}}}},[t._v("编辑")]),t._v(" "),n("span",{on:{click:function(n){t.handleDel(e.$index,e.row)}}},[t._v(t._s(0==e.row.isHead?"设为总店":""))])]}}])})],1),t._v(" "),n("el-col",{staticClass:"tool-bar",attrs:{span:24}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.page,"page-size":20,layout:"prev, pager, next, jumper,total",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1):n("router-view")},s=[],o={render:a,staticRenderFns:s};e.a=o},tUma:function(t,e,n){e=t.exports=n("bKW+")(!0),e.push([t.i,".shop-list a{text-decoration:none}.shop-list .tool-bar{width:100%;background:none;margin:20px 0}.shop-list .cell a{color:#45cdb6}.shop-list .cell span{color:#45cdb6;padding-left:20px;cursor:pointer}","",{version:3,sources:["E:/github/seller-center/src/views/shops/ShopManagement.vue"],names:[],mappings:"AACA,aACE,oBAAsB,CACvB,AACD,qBACE,WAAY,AACZ,gBAAiB,AACjB,aAAe,CAChB,AACD,mBACE,aAAe,CAChB,AACD,sBACE,cAAe,AACf,kBAAmB,AACnB,cAAgB,CACjB",file:"ShopManagement.vue",sourcesContent:["\n.shop-list a {\n  text-decoration: none;\n}\n.shop-list .tool-bar {\n  width: 100%;\n  background: none;\n  margin: 20px 0;\n}\n.shop-list .cell a {\n  color: #45cdb6;\n}\n.shop-list .cell span {\n  color: #45cdb6;\n  padding-left: 20px;\n  cursor: pointer;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=27.e1e0bba52c76028bdf34.js.map