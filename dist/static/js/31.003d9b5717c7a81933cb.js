webpackJsonp([31],{"0ePt":function(t,e,r){"use strict";var n=r("pgiz");e.a={data:function(){return{flag:!0,form:{fenlei:[{cateName:"全部",storeCateId:""},{cateName:"无",storeCateId:0}],storeCateId:"",goodId:"",productTitle:"",searchDate:"",searchStartTime:"",searchEndTime:""},dialogVisible1:!1,jurisdiction:[],roleAuthority:[],total:0,pageSize:20,pageNum:1,datas:[],listLoading:!1}},mounted:function(){var t=this;this.getProductPagetheshelves();var e={storeId:config.storeId,pageSize:1e3};Object(n.i)(e).then(function(e){if(t.listLoading=!1,0==e.data.code){t.jurisdiction=e.data.data.list;for(var r=0;r<t.jurisdiction.length;r++)t.$set(t.form.fenlei,t.form.fenlei.length,t.jurisdiction[r])}else t.$message.error(e.data.message)}).catch(function(e){t.listLoading=!1,t.$message.error("接口建立连接失败")})},methods:{datePickerHandle:function(t){var e=this;if(t){var r=t.split(" - ");e.form.searchStartTime=r[0]||"",e.form.searchEndTime=r[1]||""}else e.form.searchStartTime="",e.form.searchEndTime=""},handleSizeChange:function(t){this.pageSize=t,this.getProductPagetheshelves()},findGood:function(){this.getProductPagetheshelves()},formatUsed:function(t){var e="";switch(t.productStatus){case-1:e="未通过";break;case 0:e="草稿箱";break;case 1:e="审核中";break;case 2:e="待上架";break;case 3:e="已上架";break;case 4:e="已下架";break;case 5:e="回收站"}return e},formatFenlei:function(t){var e=t.storeCateNameList;return e=t.storeCateNameList?e.join(" / "):"无"},handleBangding:function(t){var e=this;this.dialogVisible1=!0,this.productId=t.productId,this.roleAuthority=[];var r={productId:t.productId,storeId:config.storeId};Object(n.B)(r).then(function(t){0==t.data.code?e.roleAuthority=t.data.data:e.$message.error(t.data.message),e.listLoading=!1}).catch(function(t){e.listLoading=!1,e.$message.error("接口建立连接失败")})},cancelBtn:function(){this.dialogVisible1=!1},addRelevanceBtn:function(){var t=this;if(!this.flag)return!1;this.flag=!1;var e=new URLSearchParams;e.append("storeId",config.storeId),e.append("productId",this.productId),e.append("storeCateIdList",this.roleAuthority),Object(n.E)(e).then(function(e){var r=t;0==e.data.code?(r.dialogVisible1=!1,t.$message({message:"关联成功",type:"success",onClose:function(){r.getProductPagetheshelves()}})):t.$message.error("关联失败"),t.listLoading=!1,t.flag=!0}).catch(function(e){t.flag=!0,t.listLoading=!1,t.$message.error("接口建立连接失败")})},getProductPagetheshelves:function(){var t=this,e={storeId:config.storeId,pageNum:this.pageNum,pageSize:this.pageSize,productId:this.form.goodId,productTitle:this.form.productTitle,storeCateId:this.form.storeCateId,searchStartTime:this.form.searchStartTime,searchEndTime:this.form.searchEndTime};this.listLoading=!0,Object(n.C)(e).then(function(e){0==e.data.code?(t.total=Number(e.data.data.total),t.datas=e.data.data.list):t.$message.error(e.data.message),t.listLoading=!1}).catch(function(e){t.listLoading=!1,t.$message.error("接口建立连接失败")})},handleCurrentChange:function(t){this.pageNum=t,this.getProductPagetheshelves()}}}},"6FSb":function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],o=0;o<e.length;++o)void 0!==e[o]&&n.push(e[o]);r.obj[r.prop]=n}}return e};e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},e.merge=function(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e.merge(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e.merge(t[a],i,o):t[a]=i,t},a)},e.assign=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=e.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},e.compact=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var u=s[c],l=i[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:i,prop:u}),r.push(l))}return a(e)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},"9Y/5":function(t,e,r){"use strict";var n=r("6FSb"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,s=n.split(e.delimiter,i),c=0;c<s.length;++c){var u,l,d=s[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(u=e.decoder(d,a.decoder),l=e.strictNullHandling?null:""):(u=e.decoder(d.slice(0,p),a.decoder),l=e.decoder(d.slice(p+1),a.decoder)),o.call(r,u)?r[u]=[].concat(r[u]).concat(l):r[u]=l}return r},s=function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var a,i=t[o];if("[]"===i)a=[],a=a.concat(n);else{a=r.plainObjects?Object.create(null):{};var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(s,10);!isNaN(c)&&i!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[],a[c]=n):a[s]=n}n=a}return n},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(n),u=c?n.slice(0,c.index):n,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var d=0;null!==(c=i.exec(n))&&d<r.depth;){if(d+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+n.slice(c.index)+"]"),s(l,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?i(t,r):t,s=r.plainObjects?Object.create(null):{},u=Object.keys(o),l=0;l<u.length;++l){var d=u[l],f=c(d,o[d],r);s=n.merge(s,f,r)}return n.compact(s)}},BWJn:function(t,e,r){"use strict";var n=r("6FSb"),o=r("zN2i"),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,o,a,i,c,u,l,d,f,p,g){var m=e;if("function"==typeof u)m=u(r,m);else if(m instanceof Date)m=f(m);else if(null===m){if(a)return c&&!g?c(r,s.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m)){if(c){return[p(g?r:c(r,s.encoder))+"="+p(c(m,s.encoder))]}return[p(r)+"="+p(String(m))]}var h=[];if(void 0===m)return h;var y;if(Array.isArray(u))y=u;else{var b=Object.keys(m);y=l?b.sort(l):b}for(var v=0;v<y.length;++v){var j=y[v];i&&null===m[j]||(h=Array.isArray(m)?h.concat(t(m[j],o(r,j),o,a,i,c,u,l,d,f,p,g)):h.concat(t(m[j],r+(d?"."+j:"["+j+"]"),o,a,i,c,u,l,d,f,p,g)))}return h};t.exports=function(t,e){var r=t,i=e?n.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var u=void 0===i.delimiter?s.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,f="boolean"==typeof i.encode?i.encode:s.encode,p="function"==typeof i.encoder?i.encoder:s.encoder,g="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,v,j=o.formatters[i.format];"function"==typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,b=v);var O=[];if("object"!=typeof r||null===r)return"";var C;C=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var w=a[C];b||(b=Object.keys(r)),g&&b.sort(g);for(var k=0;k<b.length;++k){var I=b[k];d&&null===r[I]||(O=O.concat(c(r[I],I,w,l,d,f?p:null,v,g,m,h,j,y)))}var N=O.join(u),P=!0===i.addQueryPrefix?"?":"";return N.length>0?P+N:""}},TOsV:function(t,e,r){"use strict";var n=r("BWJn"),o=r("9Y/5"),a=r("zN2i");t.exports={formats:a,parse:o,stringify:n}},bQuD:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("0ePt"),o=r("kpRm"),a=r("mPyB"),i=a(n.a,o.a,!1,null,null,null);e.default=i.exports},kpRm:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"all-good"},[r("el-row",{staticClass:"search-row",attrs:{stylle:"min-width:960px"}},[r("el-input",{staticClass:"w160",attrs:{placeholder:"请输入商品名称",maxlength:11},model:{value:t.form.productTitle,callback:function(e){t.$set(t.form,"productTitle",e)},expression:"form.productTitle"}}),t._v(" "),r("el-input",{staticClass:"w160",attrs:{placeholder:"请输入商品ID",maxlength:11},model:{value:t.form.goodId,callback:function(e){t.$set(t.form,"goodId",e)},expression:"form.goodId"}}),t._v(" "),r("el-select",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"店铺中分类"},model:{value:t.form.storeCateId,callback:function(e){t.$set(t.form,"storeCateId",e)},expression:"form.storeCateId"}},t._l(t.form.fenlei,function(t){return r("el-option",{key:t.storeCateId,attrs:{label:t.cateName,value:t.storeCateId}})})),t._v(" "),r("el-date-picker",{staticClass:"wid320",attrs:{editable:!1,type:"datetimerange",placeholder:"选择日期范围"},on:{change:t.datePickerHandle},model:{value:t.form.searchDate,callback:function(e){t.$set(t.form,"searchDate",e)},expression:"form.searchDate"}}),t._v(" "),r("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.findGood}},[t._v("查询")])],1),t._v(" "),r("el-table",{staticClass:"hover-style",staticStyle:{width:"100%"},attrs:{data:t.datas}},[r("el-table-column",{attrs:{prop:"productId",label:"ID","min-width":"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"productTitle",label:"商品名称","min-width":"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"190",align:"center",prop:"productCoverUrl",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("div",{staticClass:"table-pic"},[r("img",{attrs:{src:t.row.productCoverUrl}})])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"productStatus",formatter:t.formatUsed,label:"状态","min-width":"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"storeCateNameList",formatter:t.formatFenlei,label:"当前所属分类","min-width":"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticStyle:{padding:"0"},on:{click:function(r){t.handleBangding(e.row)}}},[t._v("关联")])]}}])})],1),t._v(" "),t.total?r("el-col",{staticClass:"tool-bar pages-bar",staticStyle:{"margin-top":"20px"},attrs:{span:24}},[r("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[20,50,100],"current-page":t.pageNum,"page-size":t.pageSize,layout:"sizes,prev, pager, next, jumper,total",total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1):t._e(),t._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{title:"关联",top:"30%",visible:t.dialogVisible1,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible1=e}}},[r("div",{staticClass:"relevanceGood"},[r("el-checkbox-group",{staticClass:"scorllbar",model:{value:t.roleAuthority,callback:function(e){t.roleAuthority=e},expression:"roleAuthority"}},t._l(t.jurisdiction,function(e){return r("el-checkbox",{key:e.storeCateId,attrs:{label:e.storeCateId}},[t._v("\n            "+t._s(e.cateName)+"\n        ")])}))],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.addRelevanceBtn}},[t._v("确定")]),t._v(" "),r("el-button",{on:{click:t.cancelBtn}},[t._v("取消")])],1)])],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},pgiz:function(t,e,r){"use strict";r.d(e,"o",function(){return i}),r.d(e,"S",function(){return s}),r.d(e,"P",function(){return c}),r.d(e,"Q",function(){return u}),r.d(e,"s",function(){return l}),r.d(e,"p",function(){return d}),r.d(e,"r",function(){return f}),r.d(e,"n",function(){return p}),r.d(e,"m",function(){return g}),r.d(e,"N",function(){return m}),r.d(e,"R",function(){return h}),r.d(e,"t",function(){return y}),r.d(e,"v",function(){return b}),r.d(e,"w",function(){return v}),r.d(e,"x",function(){return j}),r.d(e,"y",function(){return O}),r.d(e,"z",function(){return C}),r.d(e,"u",function(){return w}),r.d(e,"F",function(){return k}),r.d(e,"H",function(){return I}),r.d(e,"J",function(){return N}),r.d(e,"I",function(){return P}),r.d(e,"K",function(){return x}),r.d(e,"L",function(){return A}),r.d(e,"M",function(){return S}),r.d(e,"G",function(){return L}),r.d(e,"h",function(){return _}),r.d(e,"i",function(){return T}),r.d(e,"j",function(){return z}),r.d(e,"k",function(){return D}),r.d(e,"l",function(){return R}),r.d(e,"A",function(){return E}),r.d(e,"D",function(){return F}),r.d(e,"B",function(){return $}),r.d(e,"E",function(){return B}),r.d(e,"C",function(){return H}),r.d(e,"d",function(){return V}),r.d(e,"e",function(){return U}),r.d(e,"O",function(){return Q}),r.d(e,"g",function(){return G}),r.d(e,"q",function(){return J}),r.d(e,"b",function(){return K}),r.d(e,"f",function(){return M}),r.d(e,"c",function(){return W}),r.d(e,"a",function(){return Y});var n=r("Kriy"),o=r("TOsV"),a=(r.n(o),"http://shop.dmp.hzjiehun.bid"),i=(Object({NODE_ENV:"production"}).API_ROOT,function(t){return n.a.get(a+"/store/get",{params:t})}),s=function(t){return n.a.post(a+"/store/update",t)},c=function(t){return n.a.get(a+"/store/checkname",{params:t})},u=function(t){return n.a.get(a+"/store/getmerchant",{params:t})},l=function(t){return n.a.post(a+"/merchant/update",t)},d=function(t){return n.a.get(a+"/industry/listall",{params:t})},f=function(t){return n.a.post(a+"/merchant/save",t)},p=function(t){return n.a.get(a+"/store/branch/list",{params:t})},g=function(t){return n.a.get(a+"/store/branch/get",{params:t})},m=function(t){return n.a.post(a+"/store/branch/save",t)},h=function(t){return n.a.post(a+"/store/branch/update",t,{})},y=function(t){return n.a.post(a+"/store/operator/changestatus",t)},b=function(t){return n.a.get(a+"/store/operator/get",{params:t})},v=function(t){return n.a.get(a+"/store/operator/getnum",{params:t})},j=function(t){return n.a.get(a+"/store/operator/list",{params:t})},O=function(t){return n.a.post(a+"/store/operator/save",t)},C=function(t){return n.a.post(a+"/store/operator/update",t)},w=function(t){return n.a.get(a+"/store/operator/checkaccount",{params:t})},k=function(t){return n.a.post(a+"/store/operator/role/changestatus",t)},I=function(t){return n.a.get(a+"/store/operator/role/get",{params:t})},N=function(t){return n.a.get(a+"/store/operator/role/list",{params:t})},P=function(t){return n.a.get(a+"/store/operator/role/getauthority",{params:t})},x=function(t){return n.a.post(a+"/store/operator/role/save",t)},A=function(t){return n.a.post(a+"/store/operator/role/update",t)},S=function(t){return n.a.get(a+"/store/operator/role/usedlist",{params:t})},L=function(t){return n.a.get(a+"/store/operator/role/checkname",{params:t})},_=function(t){return n.a.get(a+"/store/cate/get",{params:t})},T=function(t){return n.a.get(a+"/store/cate/list",{params:t})},z=function(t){return n.a.post(a+"/store/cate/remove",t)},D=function(t){return n.a.post(a+"/store/cate/save",t)},R=function(t){return n.a.post(a+"/store/cate/update",t)},E=function(t){return n.a.get(a+"/store/cate/product/list",{params:t})},F=function(t){return n.a.post(a+"/store/cate/product/remove",t)},$=function(t){return n.a.get(a+"/store/cate/product/listcate",{params:t})},B=function(t){return n.a.post(a+"/store/cate/product/save",t)},H=function(t){return n.a.get(a+"/product/pagetheshelves",{params:t})},V=function(t){return n.a.get(a+"/store/brand/get",{params:t})},U=function(t){return n.a.get(a+"/store/brand/list",{params:t})},Q=function(t){return n.a.post(a+"/store/brand/update",t)},G=function(t){return n.a.post(a+"/store/brand/verify",t)},J=function(t){return n.a.get(a+"/store/brand/listindustrybrand",{params:t})},K=function(t){return n.a.post(a+"/store/brand/cancelverify",t)},M=function(t){return n.a.post(a+"/store/brand/savebrand",t)},W=function(t){return n.a.get(a+"/store/brand/checkbrandname",{params:t})},Y=function(t){return n.a.get(a+"/brand/get",{params:t})}},zN2i:function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}}});
//# sourceMappingURL=31.003d9b5717c7a81933cb.js.map