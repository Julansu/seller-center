webpackJsonp([24],{"4QL/":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"profit"},[r("el-row",{staticClass:"detail-row"},[r("el-col",{attrs:{span:5}},[t._v("订单编号："+t._s(t.form.serialNumber))]),t._v(" "),r("el-col",{attrs:{span:5}},[t._v("买家："+t._s(t.form.buyerPhone))]),t._v(" "),r("el-col",{attrs:{span:5}},[t._v("是否展会订单：否")])],1),t._v(" "),r("el-table",{staticClass:"table-con",attrs:{data:t.tableData,align:"center","row-style":{height:"100px"}}},[r("el-table-column",{attrs:{prop:"createdAt",label:"时间",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"productName",label:"商品名称",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"productNum",label:"数量",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"orderTotalMoney",label:"订单金额",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"商家优惠",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"store-count"},[r("p",[t._v("-"+t._s(e.row.storePrivilege))]),t._v(" "),t._l(e.row.proPri,function(e){return r("p",[t._v(t._s(e.mes)+"：-￥"+t._s(e.count))])})],2)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"platformSubsidy",label:"平台补贴",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"userCost",label:"用户实付",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"platformCommission",label:"平台分润",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"storeIncome",label:"商家总收入",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"settledAmount",label:"已收入金额",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"settleAmount",label:"结算金额",align:"center"}})],1)],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},Ffkd:function(t,e,r){"use strict";r.d(e,"f",function(){return i}),r.d(e,"g",function(){return l}),r.d(e,"e",function(){return p}),r.d(e,"j",function(){return s}),r.d(e,"h",function(){return c}),r.d(e,"c",function(){return u}),r.d(e,"i",function(){return f}),r.d(e,"b",function(){return A}),r.d(e,"a",function(){return d}),r.d(e,"d",function(){return b});var n=r("cZQX"),o=r.n(n),a=config.apiHost,i=function(t){return o.a.get(a+"/order/listorderstatusandtype",{params:t})},l=function(t){return o.a.get(a+"/order/pageorderstore",{params:t})},p=function(t){return o.a.get(a+"/order/getorderstoredetail",{params:t})},s=function(t){return o.a.post(a+"/order/ship",t)},c=function(t){return o.a.get(a+"/order/pageorderstoreafter",{params:t})},u=function(t){return o.a.get(a+"/order/getafterorderdetail",{params:t})},f=function(t){return o.a.post(a+"/orderafter/shophandleorder",t)},A=function(t){return o.a.get(a+"/order/listaccountstore",{params:t})},d=function(t){return o.a.get(a+"/order/getaccountproductdetail",{params:t})},b=function(t){return o.a.get(a+"/marketing/voucher/list",{params:t})}},V1FA:function(t,e,r){e=t.exports=r("bKW+")(!0),e.push([t.i,".profit{width:100%;float:left;padding:40px}.profit,.profit *{-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.profit * p{margin:0;padding:0}.profit .detail-row{background:#f5f7fa;height:40px;line-height:40px;padding-left:10px}.profit .table-con{margin-top:20px}.profit .table-con .platform-count p,.profit .table-con .store-count p{font-size:14px;color:#333}.profit .table-con .platform-count p:nth-of-type(n+2),.profit .table-con .store-count p:nth-of-type(n+2){font-size:12px;color:#666;text-align:left}","",{version:3,sources:["E:/github/seller-center/src/views/transaction/ReservationDetail.vue"],names:[],mappings:"AACA,QAGE,WAAY,AACZ,WAAY,AACZ,YAAc,CACf,AACD,kBANE,wCAA0C,AAClC,+BAAkC,CAQ3C,AACD,YACM,SAAU,AACV,SAAW,CAChB,AACD,oBACI,mBAAoB,AACpB,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACtB,AACD,mBACI,eAAiB,CACpB,AACD,uEACM,eAAgB,AAChB,UAAe,CACpB,AACD,yGACM,eAAgB,AAChB,WAAe,AACf,eAAiB,CACtB",file:"ReservationDetail.vue",sourcesContent:["\n.profit {\n  -webkit-box-sizing: border-box !important;\n          box-sizing: border-box !important;\n  width: 100%;\n  float: left;\n  padding: 40px;\n}\n.profit * {\n    -webkit-box-sizing: border-box !important;\n            box-sizing: border-box !important;\n}\n.profit * p {\n      margin: 0;\n      padding: 0;\n}\n.profit .detail-row {\n    background: #F5F7FA;\n    height: 40px;\n    line-height: 40px;\n    padding-left: 10px;\n}\n.profit .table-con {\n    margin-top: 20px;\n}\n.profit .table-con .store-count p, .profit .table-con .platform-count p {\n      font-size: 14px;\n      color: #333333;\n}\n.profit .table-con .store-count p:nth-of-type(n+2), .profit .table-con .platform-count p:nth-of-type(n+2) {\n      font-size: 12px;\n      color: #666666;\n      text-align: left;\n}\n"],sourceRoot:""}])},YE54:function(t,e,r){"use strict";function n(t){r("rBwh")}Object.defineProperty(e,"__esModule",{value:!0});var o=r("Zf4w"),a=r("4QL/"),i=r("mPyB"),l=n,p=i(o.a,a.a,!1,l,null,null);e.default=p.exports},Zf4w:function(t,e,r){"use strict";var n=r("Ffkd");e.a={data:function(){return{tableData:null,form:{},value1:""}},created:function(){var t=this,e=this.$route.query.orderId;Object(n.a)({orderStoreId:e}).then(function(e){t.form=e.data.data,t.tableData=e.data.data.accountProductList;for(var r=0;r<t.tableData.length;r++){var n=t.tableData[r];n.proPri=[];for(var o in n.privileges){var a={mes:o,count:n.privileges[o]};n.proPri.push(a)}}})},methods:{}}},rBwh:function(t,e,r){var n=r("V1FA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("6imX")("6b5b646f",n,!0)}});
//# sourceMappingURL=24.642738193022a6ef6075.js.map