webpackJsonp([23],{Ffkd:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return A}),n.d(t,"e",function(){return l}),n.d(t,"j",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"c",function(){return c}),n.d(t,"i",function(){return p}),n.d(t,"b",function(){return C}),n.d(t,"a",function(){return B}),n.d(t,"d",function(){return g});var i=n("cZQX"),a=n.n(i),o=config.apiHost,r=function(e){return a.a.get(o+"/order/listorderstatusandtype",{params:e})},A=function(e){return a.a.get(o+"/order/pageorderstore",{params:e})},l=function(e){return a.a.get(o+"/order/getorderstoredetail",{params:e})},s=function(e){return a.a.post(o+"/order/ship",e)},d=function(e){return a.a.get(o+"/order/pageorderstoreafter",{params:e})},c=function(e){return a.a.get(o+"/order/getafterorderdetail",{params:e})},p=function(e){return a.a.post(o+"/orderafter/shophandleorder",e)},C=function(e){return a.a.get(o+"/order/listaccountstore",{params:e})},B=function(e){return a.a.get(o+"/order/getaccountproductdetail",{params:e})},g=function(e){return a.a.get(o+"/marketing/voucher/list",{params:e})}},Fp0J:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"detail-con"},[n("div",{staticClass:"user-message"},[n("div",{staticClass:"title"},[e._v("买家信息")]),e._v(" "),n("el-row",{staticClass:"user-detail"},[n("el-col",{attrs:{span:5}},[e._v("\n                用户昵称："),n("span",[e._v(e._s(e.detail.buyerName))])]),e._v(" "),n("el-col",{attrs:{span:5}},[e._v("\n                手机号："),n("span",[e._v(e._s(e.detail.buyerPhone))])])],1)],1),e._v(" "),n("div",{staticClass:"send-message"},[n("div",{staticClass:"title"},[e._v("配送信息")]),e._v(" "),n("el-row",{staticClass:"send-detail"},[n("el-col",{attrs:{span:5}},[e._v("\n                配送方式："),n("span",[e._v(e._s(e.detail.shippingWay))])]),e._v(" "),"无需配送"!=e.detail.shippingWay?n("el-col",{attrs:{span:5}},[e._v("\n                备注："),n("span",[e._v(e._s(e.detail.remark))])]):e._e(),e._v(" "),1==e.detail.orderType?n("el-col",{attrs:{span:5}},[e._v("\n                收货人："),n("span",[e._v(e._s(e.detail.receiverName))])]):e._e(),e._v(" "),1==e.detail.orderType?n("el-col",{attrs:{span:5}},[e._v("\n                收货人手机号："),n("span",[e._v(e._s(e.detail.receiverPhone))])]):e._e()],1),e._v(" "),1==e.detail.orderType?n("el-row",{staticClass:"send-addres"},[e._v("\n            收货地址："),n("span",[e._v(e._s(e.detail.receiverAddr))])]):e._e()],1),e._v(" "),n("div",{staticClass:"order-message"},[n("div",{staticClass:"title"},[e._v("订单信息")]),e._v(" "),n("el-row",{staticClass:"order-detail"},[n("el-col",{attrs:{span:5}},[e._v("\n                订单号："),n("span",[e._v(e._s(e.detail.serialNumber))])]),e._v(" "),n("el-col",{attrs:{span:5}},[e._v("\n                下单时间："),n("span",[e._v(e._s(e.detail.orderTime))])]),e._v(" "),n("el-col",{attrs:{span:5}},[e._v("\n                交易号："),n("span",[e._v(e._s(e.detail.tradeId))])])],1),e._v(" "),n("el-row",{staticClass:"table-head"},[n("el-col",{attrs:{span:5}},[e._v("商品")]),e._v(" "),n("el-col",{attrs:{span:3}},[e._v("单价")]),e._v(" "),n("el-col",{attrs:{span:3}},[e._v("数量")]),e._v(" "),n("el-col",{attrs:{span:4}},[e._v("订单类型")]),e._v(" "),n("el-col",{attrs:{span:4}},[e._v("订单状态")]),e._v(" "),n("el-col",{attrs:{span:5}},[e._v("订单金额")])],1),e._v(" "),n("el-row",{staticClass:"table-detail"},[n("el-col",{attrs:{span:5}},[n("div",{staticClass:"pro-name"},[1==e.detail.orderStoreType?n("span",[e._v("展会")]):e._e(),e._v(e._s(e.detail.productName))]),e._v(" "),n("div",{staticClass:"pro-color"},[e._v(e._s(e.detail.standard))]),e._v(" "),n("div",{staticClass:"pro-item"},[e._v("类目："+e._s(e.detail.cate))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("p",[e._v("￥"+e._s(e.detail.unitPrice))])]),e._v(" "),n("el-col",{attrs:{span:3}},[e._v(e._s(e.detail.orderNum))]),e._v(" "),n("el-col",{attrs:{span:4}},[e._v(e._s(e.detail.productType))]),e._v(" "),n("el-col",{attrs:{span:4}},[e._v(e._s(e.switchStatus(e.detail.orderProductStatus)))]),e._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"order-price"},[e._v("￥"+e._s(e.detail.unitPrice*e.detail.orderNum))]),e._v(" "),e._l(e.detail.proPri,function(t){return n("div",{staticClass:"youhui"},[n("p",[e._v(e._s(t.mes)),n("span",[e._v("-￥"+e._s(t.count))])])])}),e._v(" "),n("div",{staticClass:"one-count"},[e._v("小计：￥"+e._s(e.detail.orderProductTotal))])],2)],1)],1),e._v(" "),n("div",{staticClass:"service"},[n("el-row",{staticClass:"table-detail"},[n("el-col",{attrs:{span:5}},[e._v("售后单编号："+e._s(e.detail.orderAfterSerialNumber))]),e._v(" "),n("el-col",{attrs:{span:3}}),e._v(" "),n("el-col",{attrs:{span:3}}),e._v(" "),n("el-col",{attrs:{span:4}},[e._v("售后单")]),e._v(" "),n("el-col",{attrs:{span:4}},[e._v(e._s(e.switchAfter(e.detail.orderProductAfterStatus)))]),e._v(" "),n("el-col",{attrs:{span:5}})],1),e._v(" "),n("div",{staticClass:"service-user"},[n("div",{staticClass:"service-user-detail"},[n("div",[e._v("售后时间："+e._s(e.detail.orderProductTime))]),e._v(" "),n("div",[e._v("售后原因："+e._s(e.detail.orderProductAfterReason))]),e._v(" "),n("div",[e._v("用户备注："+e._s(e.detail.orderProductAfterRemark))]),e._v(" "),n("div",[e._v("商家备注："+e._s(e.detail.orderProductAfterStoreRemark))]),e._v(" "),n("div",[e._v("平台备注："+e._s(e.detail.orderProductAfterPlatformRemark))])]),e._v(" "),n("div",{staticClass:"service-img"},e._l(this.detail.orderProductAfterProof,function(e){return n("div",{staticClass:"img-con"},[n("img",{attrs:{src:e,alt:""}})])}))])],1),e._v(" "),n("div",{staticClass:"total-message"},[n("div",[n("p",[e._v("订单金额：")]),n("span",[e._v("￥"+e._s(e.detail.unitPrice*e.detail.orderNum))])]),e._v(" "),n("div",[n("p",[e._v("优惠金额：")]),n("span",[e._v("￥-"+e._s(e.detail.priMoney))])]),e._v(" "),n("div",[n("p",[e._v("运费：")]),n("span",[e._v(e._s(e.detail.orderProductShipping))])]),e._v(" "),n("div",[n("p",[e._v("实付：")]),n("span",[e._v(e._s(e.detail.orderProductTotal))])])]),e._v(" "),e.serviceIsOk?e._e():n("div",{staticClass:"beizhu"},[n("div",{staticClass:"font-count"},[e._v(e._s(e.textLength)+"/200")]),e._v(" "),n("div",{staticClass:"font-content"},[n("p",[e._v("备注信息：")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.serviceText,expression:"serviceText"}],attrs:{maxlength:200},domProps:{value:e.serviceText},on:{input:[function(t){t.target.composing||(e.serviceText=t.target.value)},e.textCount]}})]),e._v(" "),n("el-button",{staticClass:"submit-btn gray",attrs:{disabled:e.disabled},on:{click:e.postRight}},[e._v("提交审核")])],1)])},a=[],o={render:i,staticRenderFns:a};t.a=o},FzGE:function(e,t,n){"use strict";function i(e){n("Gb1n")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("s8lU"),o=n("Fp0J"),r=n("mPyB"),A=i,l=r(a.a,o.a,!1,A,null,null);t.default=l.exports},Gb1n:function(e,t,n){var i=n("uGo4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("6imX")("3fd0a190",i,!0)},s8lU:function(e,t,n){"use strict";var i=n("Ffkd"),a=n("TOsV"),o=n.n(a);t.a={data:function(){return{hasServiceOrder:!1,serviceIsOk:!1,textLength:0,serviceText:"",detail:"",after:{},disabled:!0}},beforeCreate:function(){},created:function(){var e=this,t=this.$route.query.orderId,n=this.$route.query.productId;Object(i.c)({orderStoreId:t,orderProductId:n}).then(function(t){e.detail=t.data.data,e.detail.proPri=[],e.detail.priMoney=0;for(var n in e.detail.productPrivileges){var i={mes:n,count:that.productPrivileges[n]};e.detail.proPri.push(i)}e.detail.orderProductAfterProof=e.detail.orderProductAfterProof.split(",");for(var a=0;a<e.detail.proPri.length;a++)e.detail.priMoney+=e.detail.proPri[a].count;e.serviceIsOk=1!=e.detail.orderProductAfterStatus})},methods:{switchStatus:function(e){var t="";switch(e){case 1:t="待用户支付";break;case 2:t="待发货";break;case 3:t="待用户收货";break;case 4:t="交易成功";break;case 5:t="待商家处理";break;case 6:t="待平台审核";break;case 7:t="售后完成";break;case 8:t="取消售后";break;default:t="订单关闭"}return t},switchAfter:function(e){var t="";switch(e){case 1:t="待商家处理";break;case 2:t="待平台审核";break;case 3:t="售后完成";break;case 4:t="售后取消"}return t},changeType:function(){var e=this;e.onRight=!e.onRight},textCount:function(){var e=this;e.textLength=e.serviceText.length,e.disabled=0===e.textLength},postRight:function(){var e=this,t=this,n={orderAfterId:t.detail.orderProductAfterId,storeRemark:t.serviceText};Object(i.i)(o.a.stringify(n)).then(function(n){"成功"==n.data.message?(t.detail.orderProductAfterStatus=2,t.detail.serviceIsOk=!0,e.$message({message:"售后提交成功，请等待审核",type:"success"})):t.warn(n.data.message)})},warn:function(e){this.$message({message:e,type:"warning"})}}}},uGo4:function(e,t,n){t=e.exports=n("bKW+")(!0),t.push([e.i,".detail-con{width:100%;padding:40px;float:left}.detail-con,.detail-con *{-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.detail-con * p{margin:0;padding:0}.detail-con .title{font-size:16px;color:#333;border-left:3px solid #45cdb6;font-weight:600;text-indent:12px}.detail-con .user-message{padding-bottom:5px}.detail-con .user-message .user-detail{margin-top:20px;font-size:14px;color:#666}.detail-con .user-message .user-detail span{margin-left:8px;color:#333}.detail-con .send-message{margin-top:15px;padding:20px 5px 5px;border-top:1px solid #eee}.detail-con .send-message .send-addres,.detail-con .send-message .send-detail{padding-top:20px;font-size:14px;color:#666}.detail-con .send-message .send-addres span,.detail-con .send-message .send-detail span{margin-left:8px;color:#333}.detail-con .order-message{margin-top:15px;padding:20px 5px 0!important;border-top:1px solid #eee}.detail-con .order-message .order-detail{padding-top:20px;font-size:14px;color:#666}.detail-con .order-message .order-detail span{margin-left:8px;color:#333}.detail-con .table-head{margin-top:20px;text-align:center;font-size:14px;color:#333;font-weight:600;height:44px;line-height:44px;background:#f5f7fa;-webkit-box-shadow:0 1px 0 0 #eee;box-shadow:0 1px 0 0 #eee}.detail-con .table-detail{padding:15px 20px;border-bottom:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.detail-con .table-detail .el-col{height:100%;font-size:14px;color:#333;text-align:center;position:relative}.detail-con .table-detail .el-col .pro-name span{color:red;border:1px solid red}.detail-con .table-detail .el-col div{line-height:150%;text-align:left}.detail-con .table-detail .el-col .send-pro{text-align:center;margin-top:3px;cursor:pointer;color:#45cdb6}.detail-con .table-detail .el-col .pro-color,.detail-con .table-detail .el-col .pro-item{color:#666}.detail-con .table-detail .el-col div:nth-of-type(n+2){margin-top:5px}.detail-con .table-detail .el-col p{position:relative;top:48%}.detail-con .table-detail .el-col:nth-of-type(6){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:12px}.detail-con .table-detail .el-col:nth-of-type(6) .order-price{color:#333}.detail-con .table-detail .el-col:nth-of-type(6) .youhui{color:#666}.detail-con .table-detail .el-col:nth-of-type(6) .youhui p{font-size:12px}.detail-con .table-detail .el-col:nth-of-type(6) .youhui p span{margin-left:15px}.detail-con .table-detail .el-col:nth-of-type(6) .one-count{color:#45cdb6}.detail-con .service .table-detail .el-col:first-of-type{text-align:left}.detail-con .service .service-user{padding:15px 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eee}.detail-con .service .service-user .service-user-detail{font-size:14px;color:#666}.detail-con .service .service-user .service-user-detail div:nth-of-type(n+2){margin-top:8px}.detail-con .service .service-user .service-img{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.detail-con .service .service-user .service-img .img-con{width:100px;height:100px}.detail-con .service .service-user .service-img .img-con:nth-of-type(n+2){margin-left:8px}.detail-con .service .service-user .service-img img{width:100%;height:100%}.detail-con .service img{width:100px;height:100px}.detail-con .total-message{float:right;padding:10px 0}.detail-con .total-message div{margin-top:10px;font-size:12px}.detail-con .total-message div p{display:inline-block;width:60px;margin-right:35px;color:#666;text-align:right}.detail-con .total-message div span{color:#333}.detail-con .total-message div:nth-of-type(4) span{font-weight:600;font-size:14px;color:#45cdb6}.detail-con .beizhu{clear:both;padding:15px 20px;color:#666;border-top:1px solid #eee;margin-top:20px}.detail-con .beizhu .font-count{float:right}.detail-con .beizhu .font-content{padding-top:10px;clear:both;display:-webkit-box;display:-ms-flexbox;display:flex}.detail-con .beizhu .font-content p{width:5%}.detail-con .beizhu .font-content textarea{width:95%;height:150px;resize:none}.detail-con .beizhu .submit-btn{margin-top:20px;float:right;background:#45cdb6;color:#fff;height:40px;text-align:center;border-radius:5px}","",{version:3,sources:["E:/github/seller-center/src/views/transaction/ServiceDetail.vue"],names:[],mappings:"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",file:"ServiceDetail.vue",sourcesContent:["\n.detail-con {\n  -webkit-box-sizing: border-box !important;\n          box-sizing: border-box !important;\n  width: 100%;\n  padding: 40px;\n  float: left;\n}\n.detail-con * {\n    -webkit-box-sizing: border-box !important;\n            box-sizing: border-box !important;\n}\n.detail-con * p {\n      margin: 0;\n      padding: 0;\n}\n.detail-con .title {\n    font-size: 16px;\n    color: #333333;\n    border-left: 3px solid #45cdb6;\n    font-weight: 600;\n    text-indent: 12px;\n}\n.detail-con .user-message {\n    padding-bottom: 5px;\n}\n.detail-con .user-message .user-detail {\n      margin-top: 20px;\n      font-size: 14px;\n      color: #666666;\n}\n.detail-con .user-message .user-detail span {\n        margin-left: 8px;\n        color: #333333;\n}\n.detail-con .send-message {\n    margin-top: 15px;\n    padding: 20px 5px 5px;\n    border-top: 1px solid #eee;\n}\n.detail-con .send-message .send-detail, .detail-con .send-message .send-addres {\n      padding-top: 20px;\n      font-size: 14px;\n      color: #666666;\n}\n.detail-con .send-message .send-detail span, .detail-con .send-message .send-addres span {\n        margin-left: 8px;\n        color: #333333;\n}\n.detail-con .order-message {\n    margin-top: 15px;\n    padding: 20px 5px 0 !important;\n    border-top: 1px solid #eee;\n}\n.detail-con .order-message .order-detail {\n      padding-top: 20px;\n      font-size: 14px;\n      color: #666666;\n}\n.detail-con .order-message .order-detail span {\n        margin-left: 8px;\n        color: #333333;\n}\n.detail-con .table-head {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 14px;\n    color: #333333;\n    font-weight: 600;\n    height: 44px;\n    line-height: 44px;\n    background: #F5F7FA;\n    -webkit-box-shadow: 0 1px 0 0 #EEEEEE;\n            box-shadow: 0 1px 0 0 #EEEEEE;\n}\n.detail-con .table-detail {\n    padding: 15px 20px;\n    border-bottom: 1px solid #eee;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.detail-con .table-detail .el-col {\n      height: 100%;\n      font-size: 14px;\n      color: #333333;\n      text-align: center;\n      position: relative;\n}\n.detail-con .table-detail .el-col .pro-name span {\n        color: #f00;\n        border: 1px solid #f00;\n}\n.detail-con .table-detail .el-col div {\n        line-height: 150%;\n        text-align: left;\n}\n.detail-con .table-detail .el-col .send-pro {\n        text-align: center;\n        margin-top: 3px;\n        cursor: pointer;\n        color: #45cdb6;\n}\n.detail-con .table-detail .el-col .pro-color, .detail-con .table-detail .el-col .pro-item {\n        color: #666666;\n}\n.detail-con .table-detail .el-col div:nth-of-type(n+2) {\n        margin-top: 5px;\n}\n.detail-con .table-detail .el-col p {\n        position: relative;\n        top: 48%;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      font-size: 12px;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) .order-price {\n        color: #333333;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) .youhui {\n        color: #666666;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) .youhui p {\n          font-size: 12px;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) .youhui p span {\n            margin-left: 15px;\n}\n.detail-con .table-detail .el-col:nth-of-type(6) .one-count {\n        color: #45cdb6;\n}\n.detail-con .service .table-detail .el-col:nth-of-type(1) {\n    text-align: left;\n}\n.detail-con .service .service-user {\n    padding: 15px 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-bottom: 1px solid #eee;\n}\n.detail-con .service .service-user .service-user-detail {\n      font-size: 14px;\n      color: #666666;\n}\n.detail-con .service .service-user .service-user-detail div:nth-of-type(n+2) {\n        margin-top: 8px;\n}\n.detail-con .service .service-user .service-img {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.detail-con .service .service-user .service-img .img-con {\n        width: 100px;\n        height: 100px;\n}\n.detail-con .service .service-user .service-img .img-con:nth-of-type(n+2) {\n        margin-left: 8px;\n}\n.detail-con .service .service-user .service-img img {\n        width: 100%;\n        height: 100%;\n}\n.detail-con .service img {\n    width: 100px;\n    height: 100px;\n}\n.detail-con .total-message {\n    float: right;\n    padding: 10px 0;\n}\n.detail-con .total-message div {\n      margin-top: 10px;\n      font-size: 12px;\n}\n.detail-con .total-message div p {\n        display: inline-block;\n        width: 60px;\n        margin-right: 35px;\n        color: #666666;\n        text-align: right;\n}\n.detail-con .total-message div span {\n        color: #333333;\n}\n.detail-con .total-message div:nth-of-type(4) span {\n      font-weight: 600;\n      font-size: 14px;\n      color: #45cdb6;\n}\n.detail-con .beizhu {\n    clear: both;\n    padding: 15px 20px;\n    color: #666;\n    border-top: 1px solid #eee;\n    margin-top: 20px;\n}\n.detail-con .beizhu .font-count {\n      float: right;\n}\n.detail-con .beizhu .font-content {\n      padding-top: 10px;\n      clear: both;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.detail-con .beizhu .font-content p {\n        width: 5%;\n}\n.detail-con .beizhu .font-content textarea {\n        width: 95%;\n        height: 150px;\n        resize: none;\n}\n.detail-con .beizhu .submit-btn {\n      margin-top: 20px;\n      float: right;\n      background: #45cdb6;\n      color: #fff;\n      height: 40px;\n      text-align: center;\n      border-radius: 5px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=23.ecef92bc928fc568a182.js.map