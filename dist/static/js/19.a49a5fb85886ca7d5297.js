webpackJsonp([19],{DTfq:function(e,t,n){"use strict";var r=n("Ffkd");t.a={data:function(){return{tableData:[],currentPage:1,pageSize:20,total:null,form:{orderNumber:null,userPhone:null,planCheck:"",orderPlan:[{label:"全部",value:-1},{label:"未核销",value:0},{label:"核销中",value:1},{label:"核销完成",value:2}],cashNumber:null,startTime:null,endTime:null}}},created:function(){var e=this,t={storeId:config.storeId,page:1,size:20,voucherStatus:-1};e.getTableData(t)},methods:{numberIsRight:function(e){var t=this;return!/^1[0-9]{10}$/.test(t.form.userPhone)&&t.form.userPhone&&1==e?(t.form.userPhone="",t.warn("请输入正确的手机号"),!1):1!=e&&t.form.orderNumber?(t.form.orderNumber="",t.warn("请输入正确的订单号"),!1):void 0},chooseTime:function(){var e=this;Date.parse(e.form.startTime)>Date.parse(e.form.endTime)&&(e.form.endTime="",e.warn("不可小于查询起始时间"))},searchParams:function(){var e=this;e.getTableData(e.getParams())},getParams:function(){var e=this,t={};return t.storeId=config.storeId,t.userMobile=e.form.userPhone,t.userVoucherId=e.form.cashNumber,t.voucherFromOrder=e.form.orderNumber,t.voucherStatus=""===e.form.planCheck?-1:e.form.planCheck,t.createBeginTime=e.form.startTime?e.timeFormat(e.form.startTime):null,t.createEndTime=e.form.endTime?e.timeFormat(e.form.endTime)+" 23:59:59":null,t.pageNum=e.currentPage,t.pageSize=e.pageSize,t},getTableData:function(e){var t=this;Object(r.d)(e).then(function(e){e.data.data.list&&(t.tableData=e.data.data.list,t.total=Number(e.data.data.total))})},handleSizeChange:function(e){var t=this;t.pageSize=e,t.getTableData(t.getParams())},handleCurrentChange:function(e){var t=this;t.currentPage=e,t.getTableData(t.getParams())},warn:function(e){this.$message({message:e,type:"warning"})},switchTime:function(e){function t(e){return e<10?"0"+e:e}var n=new Date(e),r=n.getFullYear(),o=n.getMonth()+1,a=n.getDate(),c=n.getHours(),i=n.getMinutes(),l=n.getSeconds();return r+"/"+t(o)+"/"+t(a)+" "+t(c)+":"+t(i)+":"+t(l)},timeFormat:function(e){var t=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),n=e.getDate()>9?e.getDate():"0"+e.getDate();return e.getFullYear()+"-"+t+"-"+n}}}},Ffkd:function(e,t,n){"use strict";n.d(t,"f",function(){return c}),n.d(t,"g",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"j",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return A}),n.d(t,"d",function(){return d});var r=n("cZQX"),o=n.n(r),a=config.apiHost,c=function(e){return o.a.get(a+"/order/listorderstatusandtype",{params:e})},i=function(e){return o.a.get(a+"/order/pageorderstore",{params:e})},l=function(e){return o.a.get(a+"/order/getorderstoredetail",{params:e})},s=function(e){return o.a.post(a+"/order/ship",e)},u=function(e){return o.a.get(a+"/order/pageorderstoreafter",{params:e})},p=function(e){return o.a.get(a+"/order/getafterorderdetail",{params:e})},m=function(e){return o.a.post(a+"/orderafter/shophandleorder",e)},f=function(e){return o.a.get(a+"/order/listaccountstore",{params:e})},A=function(e){return o.a.get(a+"/order/getaccountproductdetail",{params:e})},d=function(e){return o.a.get(a+"/marketing/voucher/list",{params:e})}},Mehv:function(e,t,n){var r=n("Rkl+");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("6imX")("2f7dae71",r,!0)},"Rkl+":function(e,t,n){t=e.exports=n("bKW+")(!0),t.push([e.i,".coupon-con{width:100%;float:left;padding:40px}.coupon-con,.coupon-con *{-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.coupon-con * p{margin:0;padding:0}.coupon-con .w180{width:180px}.coupon-con .w120{width:120px}.coupon-con .ml10{margin-left:10px}.coupon-con .search-row .span-sty{font-size:14px;color:#666;margin:0 10px}.coupon-con .search-row .search-btn{margin-left:40px;width:60px;background:#45cdb6;color:#fff;border:none}.coupon-con .search-row .search-btn span{color:#fff}.coupon-con .table-con{margin-top:30px}.coupon-con .table-con tr td:nth-of-type(6) span.el-tag{background:none;color:#45cdb6;cursor:pointer}.coupon-con .block{float:right}.pop-time{font-size:14px;color:#666}.pop-time i{color:#999;margin-right:10px}.pop-time p:nth-of-type(n+2){margin-top:10px}","",{version:3,sources:["E:/github/seller-center/src/views/transaction/Coupon.vue"],names:[],mappings:"AACA,YAGE,WAAY,AACZ,WAAY,AACZ,YAAc,CACf,AACD,0BANE,wCAA0C,AAClC,+BAAkC,CAQ3C,AACD,gBACM,SAAU,AACV,SAAW,CAChB,AACD,kBACI,WAAa,CAChB,AACD,kBACI,WAAa,CAChB,AACD,kBACI,gBAAkB,CACrB,AACD,kCACI,eAAgB,AAChB,WAAe,AACf,aAAe,CAClB,AACD,oCACI,iBAAkB,AAClB,WAAY,AACZ,mBAAoB,AACpB,WAAY,AACZ,WAAa,CAChB,AACD,yCACM,UAAY,CACjB,AACD,uBACI,eAAiB,CACpB,AACD,wDACM,gBAAiB,AACjB,cAAe,AACf,cAAgB,CACrB,AACD,mBACI,WAAa,CAChB,AACD,UACE,eAAgB,AAChB,UAAe,CAChB,AACD,YACI,WAAY,AACZ,iBAAmB,CACtB,AACD,6BACI,eAAiB,CACpB",file:"Coupon.vue",sourcesContent:["\n.coupon-con {\n  -webkit-box-sizing: border-box !important;\n          box-sizing: border-box !important;\n  width: 100%;\n  float: left;\n  padding: 40px;\n}\n.coupon-con * {\n    -webkit-box-sizing: border-box !important;\n            box-sizing: border-box !important;\n}\n.coupon-con * p {\n      margin: 0;\n      padding: 0;\n}\n.coupon-con .w180 {\n    width: 180px;\n}\n.coupon-con .w120 {\n    width: 120px;\n}\n.coupon-con .ml10 {\n    margin-left: 10px;\n}\n.coupon-con .search-row .span-sty {\n    font-size: 14px;\n    color: #666666;\n    margin: 0 10px;\n}\n.coupon-con .search-row .search-btn {\n    margin-left: 40px;\n    width: 60px;\n    background: #45cdb6;\n    color: #fff;\n    border: none;\n}\n.coupon-con .search-row .search-btn span {\n      color: #fff;\n}\n.coupon-con .table-con {\n    margin-top: 30px;\n}\n.coupon-con .table-con tr td:nth-of-type(6) span.el-tag {\n      background: none;\n      color: #45cdb6;\n      cursor: pointer;\n}\n.coupon-con .block {\n    float: right;\n}\n.pop-time {\n  font-size: 14px;\n  color: #666666;\n}\n.pop-time i {\n    color: #999;\n    margin-right: 10px;\n}\n.pop-time p:nth-of-type(n+2) {\n    margin-top: 10px;\n}\n"],sourceRoot:""}])},Xbwy:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"coupon-con"},[n("el-row",{staticClass:"search-row"},[n("el-input",{staticClass:"w180",attrs:{placeholder:"订单编号"},model:{value:e.form.orderNumber,callback:function(t){e.$set(e.form,"orderNumber",t)},expression:"form.orderNumber"}}),e._v(" "),n("el-input",{staticClass:"w180 ml10",attrs:{placeholder:"买家手机号"},on:{blur:function(t){e.numberIsRight(1)}},model:{value:e.form.userPhone,callback:function(t){e.$set(e.form,"userPhone",t)},expression:"form.userPhone"}}),e._v(" "),n("el-select",{staticClass:"w180 ml10",attrs:{placeholder:"核销进度"},model:{value:e.form.planCheck,callback:function(t){e.$set(e.form,"planCheck",t)},expression:"form.planCheck"}},e._l(e.form.orderPlan,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-input",{staticClass:"w180 ml10",attrs:{placeholder:"点券编号"},on:{blur:function(t){e.numberIsRight(2)}},model:{value:e.form.cashNumber,callback:function(t){e.$set(e.form,"cashNumber",t)},expression:"form.cashNumber"}}),e._v(" "),n("el-date-picker",{staticClass:"w120 ml10",attrs:{type:"date",placeholder:"生成日期"},on:{change:e.chooseTime},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}}),e._v(" "),n("span",{staticClass:"span-sty"},[e._v("—")]),e._v(" "),n("el-date-picker",{staticClass:"w120",attrs:{type:"date",placeholder:"生成日期"},on:{change:e.chooseTime},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}}),e._v(" "),n("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.searchParams}},[e._v("查询")])],1),e._v(" "),n("el-table",{staticClass:"table-con",attrs:{data:e.tableData,align:"center","row-style":{height:"100px"}}},[n("el-table-column",{attrs:{prop:"orderSerialNumber",label:"订单编号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"userVoucherNumber",label:"点券编号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"生成时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(e._s(e.switchTime(t.row.createdAt)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"voucherProductTitle",label:"商品名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"infoTelephone",label:"用户手机号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"已核销",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"bottom","popper-class":"pop-time"}},[e._l(t.row.voucherRecordList,function(t){return n("p",[n("i",{staticClass:"el-icon-time"}),e._v(e._s(e.switchTime(t)))])}),e._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[n("el-tag",[e._v(e._s(t.row.voucherUseTimes))])],1)],2)]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"voucherTimes",label:"总次数",align:"center"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[20,50,100],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],a={render:r,staticRenderFns:o};t.a=a},tiyc:function(e,t,n){"use strict";function r(e){n("Mehv")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("DTfq"),a=n("Xbwy"),c=n("mPyB"),i=r,l=c(o.a,a.a,!1,i,null,null);t.default=l.exports}});
//# sourceMappingURL=19.a49a5fb85886ca7d5297.js.map