webpackJsonp([32],{"6FSb":function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],o=0;o<e.length;++o)void 0!==e[o]&&n.push(e[o]);r.obj[r.prop]=n}}return e};e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},e.merge=function(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e.merge(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e.merge(t[a],i,o):t[a]=i,t},a)},e.assign=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=e.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},e.compact=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],u=Object.keys(i),c=0;c<u.length;++c){var s=u[c],l=i[s];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:i,prop:s}),r.push(l))}return a(e)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},"9Y/5":function(t,e,r){"use strict";var n=r("6FSb"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,u=n.split(e.delimiter,i),c=0;c<u.length;++c){var s,l,d=u[c],p=d.indexOf("]="),f=-1===p?d.indexOf("="):p+1;-1===f?(s=e.decoder(d,a.decoder),l=e.strictNullHandling?null:""):(s=e.decoder(d.slice(0,f),a.decoder),l=e.decoder(d.slice(f+1),a.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(l):r[s]=l}return r},u=function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var a,i=t[o];if("[]"===i)a=[],a=a.concat(n);else{a=r.plainObjects?Object.create(null):{};var u="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(u,10);!isNaN(c)&&i!==u&&String(c)===u&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[],a[c]=n):a[u]=n}n=a}return n},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(n),s=c?n.slice(0,c.index):n,l=[];if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var d=0;null!==(c=i.exec(n))&&d<r.depth;){if(d+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+n.slice(c.index)+"]"),u(l,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?i(t,r):t,u=r.plainObjects?Object.create(null):{},s=Object.keys(o),l=0;l<s.length;++l){var d=s[l],p=c(d,o[d],r);u=n.merge(u,p,r)}return n.compact(u)}},BWJn:function(t,e,r){"use strict";var n=r("6FSb"),o=r("zN2i"),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,o,a,i,c,s,l,d,p,f,g){var m=e;if("function"==typeof s)m=s(r,m);else if(m instanceof Date)m=p(m);else if(null===m){if(a)return c&&!g?c(r,u.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m)){if(c){return[f(g?r:c(r,u.encoder))+"="+f(c(m,u.encoder))]}return[f(r)+"="+f(String(m))]}var y=[];if(void 0===m)return y;var h;if(Array.isArray(s))h=s;else{var b=Object.keys(m);h=l?b.sort(l):b}for(var v=0;v<h.length;++v){var O=h[v];i&&null===m[O]||(y=Array.isArray(m)?y.concat(t(m[O],o(r,O),o,a,i,c,s,l,d,p,f,g)):y.concat(t(m[O],r+(d?"."+O:"["+O+"]"),o,a,i,c,s,l,d,p,f,g)))}return y};t.exports=function(t,e){var r=t,i=e?n.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?u.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:u.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:u.skipNulls,p="boolean"==typeof i.encode?i.encode:u.encode,f="function"==typeof i.encoder?i.encoder:u.encoder,g="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,y="function"==typeof i.serializeDate?i.serializeDate:u.serializeDate,h="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:u.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,v,O=o.formatters[i.format];"function"==typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,b=v);var j=[];if("object"!=typeof r||null===r)return"";var w;w=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var A=a[w];b||(b=Object.keys(r)),g&&b.sort(g);for(var N=0;N<b.length;++N){var L=b[N];d&&null===r[L]||(j=j.concat(c(r[L],L,A,l,d,p?f:null,v,g,m,y,O,h)))}var x=j.join(s),S=!0===i.addQueryPrefix?"?":"";return x.length>0?S+x:""}},HRGl:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"account-list"},[r("el-col",{staticClass:"tool-bar",staticStyle:{"padding-bottom":"0px"}},[r("el-button",{staticClass:"wid140",attrs:{type:"primary",icon:"plus"},on:{click:t.addAccount}},[t._v("新建子账号")])],1),t._v(" "),r("el-table",{staticClass:"hover-style",attrs:{data:t.datas}},[r("el-table-column",{attrs:{prop:"account",label:"账号名","min-width":"150",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"使用者","min-width":"150",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"roleName",label:"岗位","min-width":"150",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"isUsed",formatter:t.formatUsed,label:"状态","min-width":"150",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:{name:"编辑子账号",query:{id:e.row.storeOperatorId}}}},[t._v("编辑")]),t._v(" "),r("span",{on:{click:function(r){t.handleOptation(e.row)}}},[t._v(t._s(1==e.row.isUsed?"冻结":"解冻"))])]}}])})],1),t._v(" "),t.total?r("el-col",{staticClass:"tool-bar pages-bar",staticStyle:{"margin-top":"20px"},attrs:{span:24}},[r("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[20,50,100],"current-page":t.pageNum,"page-size":t.pageSize,layout:"sizes,prev, pager, next, jumper,total",total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1):t._e()],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},TOsV:function(t,e,r){"use strict";var n=r("BWJn"),o=r("9Y/5"),a=r("zN2i");t.exports={formats:a,parse:o,stringify:n}},UpfK:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("venH"),o=r("HRGl"),a=r("mPyB"),i=a(n.a,o.a,!1,null,null,null);e.default=i.exports},pgiz:function(t,e,r){"use strict";r.d(e,"o",function(){return i}),r.d(e,"S",function(){return u}),r.d(e,"P",function(){return c}),r.d(e,"Q",function(){return s}),r.d(e,"s",function(){return l}),r.d(e,"p",function(){return d}),r.d(e,"r",function(){return p}),r.d(e,"n",function(){return f}),r.d(e,"m",function(){return g}),r.d(e,"N",function(){return m}),r.d(e,"R",function(){return y}),r.d(e,"t",function(){return h}),r.d(e,"v",function(){return b}),r.d(e,"w",function(){return v}),r.d(e,"x",function(){return O}),r.d(e,"y",function(){return j}),r.d(e,"z",function(){return w}),r.d(e,"u",function(){return A}),r.d(e,"F",function(){return N}),r.d(e,"H",function(){return L}),r.d(e,"J",function(){return x}),r.d(e,"I",function(){return S}),r.d(e,"K",function(){return C}),r.d(e,"L",function(){return k}),r.d(e,"M",function(){return z}),r.d(e,"G",function(){return P}),r.d(e,"h",function(){return _}),r.d(e,"i",function(){return F}),r.d(e,"j",function(){return D}),r.d(e,"k",function(){return R}),r.d(e,"l",function(){return H}),r.d(e,"A",function(){return I}),r.d(e,"D",function(){return U}),r.d(e,"B",function(){return E}),r.d(e,"E",function(){return $}),r.d(e,"C",function(){return B}),r.d(e,"d",function(){return T}),r.d(e,"e",function(){return V}),r.d(e,"O",function(){return Q}),r.d(e,"g",function(){return J}),r.d(e,"q",function(){return G}),r.d(e,"b",function(){return K}),r.d(e,"f",function(){return q}),r.d(e,"c",function(){return M}),r.d(e,"a",function(){return W});var n=r("Kriy"),o=r("TOsV"),a=(r.n(o),"http://shop.dmp.hzjiehun.bid"),i=(Object({NODE_ENV:"production"}).API_ROOT,function(t){return n.a.get(a+"/store/get",{params:t})}),u=function(t){return n.a.post(a+"/store/update",t)},c=function(t){return n.a.get(a+"/store/checkname",{params:t})},s=function(t){return n.a.get(a+"/store/getmerchant",{params:t})},l=function(t){return n.a.post(a+"/merchant/update",t)},d=function(t){return n.a.get(a+"/industry/listall",{params:t})},p=function(t){return n.a.post(a+"/merchant/save",t)},f=function(t){return n.a.get(a+"/store/branch/list",{params:t})},g=function(t){return n.a.get(a+"/store/branch/get",{params:t})},m=function(t){return n.a.post(a+"/store/branch/save",t)},y=function(t){return n.a.post(a+"/store/branch/update",t,{})},h=function(t){return n.a.post(a+"/store/operator/changestatus",t)},b=function(t){return n.a.get(a+"/store/operator/get",{params:t})},v=function(t){return n.a.get(a+"/store/operator/getnum",{params:t})},O=function(t){return n.a.get(a+"/store/operator/list",{params:t})},j=function(t){return n.a.post(a+"/store/operator/save",t)},w=function(t){return n.a.post(a+"/store/operator/update",t)},A=function(t){return n.a.get(a+"/store/operator/checkaccount",{params:t})},N=function(t){return n.a.post(a+"/store/operator/role/changestatus",t)},L=function(t){return n.a.get(a+"/store/operator/role/get",{params:t})},x=function(t){return n.a.get(a+"/store/operator/role/list",{params:t})},S=function(t){return n.a.get(a+"/store/operator/role/getauthority",{params:t})},C=function(t){return n.a.post(a+"/store/operator/role/save",t)},k=function(t){return n.a.post(a+"/store/operator/role/update",t)},z=function(t){return n.a.get(a+"/store/operator/role/usedlist",{params:t})},P=function(t){return n.a.get(a+"/store/operator/role/checkname",{params:t})},_=function(t){return n.a.get(a+"/store/cate/get",{params:t})},F=function(t){return n.a.get(a+"/store/cate/list",{params:t})},D=function(t){return n.a.post(a+"/store/cate/remove",t)},R=function(t){return n.a.post(a+"/store/cate/save",t)},H=function(t){return n.a.post(a+"/store/cate/update",t)},I=function(t){return n.a.get(a+"/store/cate/product/list",{params:t})},U=function(t){return n.a.post(a+"/store/cate/product/remove",t)},E=function(t){return n.a.get(a+"/store/cate/product/listcate",{params:t})},$=function(t){return n.a.post(a+"/store/cate/product/save",t)},B=function(t){return n.a.get(a+"/product/pagetheshelves",{params:t})},T=function(t){return n.a.get(a+"/store/brand/get",{params:t})},V=function(t){return n.a.get(a+"/store/brand/list",{params:t})},Q=function(t){return n.a.post(a+"/store/brand/update",t)},J=function(t){return n.a.post(a+"/store/brand/verify",t)},G=function(t){return n.a.get(a+"/store/brand/listindustrybrand",{params:t})},K=function(t){return n.a.post(a+"/store/brand/cancelverify",t)},q=function(t){return n.a.post(a+"/store/brand/savebrand",t)},M=function(t){return n.a.get(a+"/store/brand/checkbrandname",{params:t})},W=function(t){return n.a.get(a+"/brand/get",{params:t})}},venH:function(t,e,r){"use strict";var n=r("pgiz");e.a={data:function(){return{datas:[],total:0,pageSize:20,pageNum:1,listLoading:!1,addLoading:!1,usedNum:"",addFlag:!1}},methods:{getNum:function(t){var e=this,r={storeId:config.storeId};this.listLoading=!0,Object(n.w)(r).then(function(r){e.listLoading=!1,0==r.data.code&&(e.usedNum=r.data.data.usedNum,e.usedNum>=5?e.$message({message:"子账号使用数量已满，先去冻结子账号",type:"warning"}):e.addFlag?e.optation():e.handleAjax(t))}).catch(function(t){e.listLoading=!1,e.$message.error("接口建立连接失败")})},addAccount:function(){this.addFlag=!0,this.getNum()},optation:function(){this.addFlag=!1,this.$router.push({path:"/store/bypass-management/new-account"})},formatUsed:function(t){return 0==t.isUsed?"已冻结":"使用中"},getAccountList:function(){var t=this,e={storeId:config.storeId,pageSize:this.pageSize,pageNum:this.pageNum};this.listLoading=!0,Object(n.x)(e).then(function(e){0==e.data.code?(t.total=Number(e.data.data.total),t.datas=e.data.data.list):t.$message.error(e.data.message),t.listLoading=!1}).catch(function(e){t.listLoading=!1,t.$message.error("接口建立连接失败")})},handleSizeChange:function(t){this.pageNum=1,this.pageSize=t,this.getAccountList()},handleOptation:function(t){1==t.isUsed?this.handleAjax(t):this.getNum(t)},handleAjax:function(t){var e=this,r="解冻",o=1;1==t.isUsed&&(r="冻结",o=0),this.$confirm("确定要"+r+"“"+t.account+"”这个账号吗?","提示",{type:"warning"}).then(function(){e.listLoading=!0;var r=new URLSearchParams;r.append("storeOperatorId",t.storeOperatorId),r.append("storeId",config.storeId),r.append("isUsed",o),Object(n.t)(r).then(function(t){e.listLoading=!1,0==t.data.code?e.getAccountList():"所选角色已冻结"==t.data.message?e.$message.error("请先在管理角色中启用该子账号的角色"):e.$message.error(t.data.message)}).catch(function(t){e.listLoading=!1,e.$message.error("接口建立连接失败")})}).catch(function(){})},handleCurrentChange:function(t){this.pageNum=t,this.getAccountList()}},mounted:function(){this.getAccountList()}}},zN2i:function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}}});
//# sourceMappingURL=32.678d09561208408efeca.js.map