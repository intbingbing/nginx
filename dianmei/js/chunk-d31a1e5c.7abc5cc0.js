(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d31a1e5c"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void r(c)}u.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function u(t){n(i,a,o,u,s,"next",t)}function s(t){n(i,a,o,u,s,"throw",t)}u(void 0)}))}}},"4fa5":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("baseCard",{attrs:{title:"活动信息"}},[r("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"label-col":{span:4},"wrapper-col":{span:14}}},[r("a-form-model-item",{attrs:{label:"标题",prop:"name"}},[r("a-input",{attrs:{placeholder:"请输入",disabled:t.disabled},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("a-form-model-item",{attrs:{label:"活动有效时间",prop:"time",required:!0}},[r("a-range-picker",{staticStyle:{width:"100%"},attrs:{placeholder:["请选择生效时间","请选择过期时间"],disabled:t.disabled,"show-time":""},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),r("a-form-model-item",{attrs:{label:"上架",prop:"status"}},[r("a-radio-group",{attrs:{disabled:t.disabled},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("a-radio",{attrs:{value:1}},[t._v(" 上架 ")]),r("a-radio",{attrs:{value:0}},[t._v(" 下架 ")])],1)],1),r("a-form-model-item",{attrs:{label:"活动封面图",prop:"image",required:!0}},[r("ImgUpload",{attrs:{disabled:t.disabled},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}}),r("div",{staticClass:"tip"},[t._v("建议尺寸为：347*80")])],1)],1)],1)},a=[],o=r("1da1"),i=(r("96cf"),r("b0c0"),r("d3b7"),r("f6ef")),u=r("cd3f"),s=r.n(u),c=r("d549"),l=r("c1df"),f=r.n(l),d={name:"",time:void 0,image:"",status:1},h={components:{baseCard:i["a"],ImgUpload:c["a"]},props:["record","disabled"],data:function(){return{form:s()(d),rules:{name:[{required:!0,message:"请输入",trigger:"blur"}],time:[{required:!0,message:"请选择",trigger:"blur"}],image:[{required:!0,message:"请选择",trigger:"blur"}],status:[{required:!0,message:"请选择",trigger:"blur"}]}}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.record&&(r=t.record,n=r.name,a=r.image,o=r.status,i=r.startTime,u=r.endTime,t.form={name:n,time:[f()(i),f()(u)],image:a,status:o});case 1:case"end":return e.stop()}}),e)})))()},methods:{check:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.$refs.ruleForm.validate((function(r){var n=t.form,a=n.name,o=n.time,i=n.image,u=n.status;return e(!!r&&{title:a,name:a,startTime:o[0].format(t.$ds),endTime:o[1].format(t.$ds),image:i,status:u})}))})));case 1:case"end":return e.stop()}}),e)})))()}}},m=h,p=(r("f929"),r("2877")),v=Object(p["a"])(m,n,a,!1,null,"ae0196d6",null);e["a"]=v.exports},"882e":function(t,e,r){"use strict";r("c10a")},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",m="completed",p={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(q([])));y&&y!==n&&a.call(y,i)&&(v=y);var w=j.prototype=L.prototype=Object.create(v);_.prototype=w.constructor=j,j.constructor=_,j[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[u]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,n){var a=new O(b(t,e,r,n));return l.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=q,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return u.type="throw",u.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:q(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function b(t,e,r,n){var a=e&&e.prototype instanceof L?e:L,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=k(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function _(){}function j(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,o,i){var u=x(t[r],t,n);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(c).then((function(t){s.value=t,o(s)}),i)}i(u.arg)}var r;function n(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function k(t,e,r){var n=f;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return G()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var u=$(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?m:d,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function $(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,$(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function q(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},c10a:function(t,e,r){},cc76:function(t,e,r){},d549:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-upload",{staticClass:"avatar-uploader",attrs:{"list-type":"picture-card","show-upload-list":!1,action:t.host,"before-upload":t.beforeUpload,disabled:t.disabled,method:"put",customRequest:t.customRequest},on:{change:t.handleChange}},[t.url?r("img",{staticStyle:{height:"106px"},attrs:{src:t.url,alt:"avatar"}}):r("div",[r("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("请上传")])],1)])},a=[],o=r("1da1"),i=(r("b0c0"),r("96cf"),r("b775")),u=(r("e876"),r("bc3a")),s=r.n(u),c={name:"ImgUpload",props:["value","disabled"],data:function(){return{url:"",loading:!1,host:i["b"].upload}},created:function(){this.value&&(this.url=this.value)},methods:{handleChange:function(t){if("uploading"!==t.file.status){if("done"===t.file.status){var e=t.file.response.data[0].fileUrl;this.url=e,this.$emit("input",e),this.loading=!1}}else this.loading=!0},beforeUpload:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n="image/jpeg"===t.type||"image/png"===t.type,n||e.$message.error("You can only upload JPG file!"),a=t.size/1024/1024<2,a||e.$message.error("Image must smaller than 2MB!"),r.abrupt("return",n&&a);case 5:case"end":return r.stop()}}),r)})))()},customRequest:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t.file,e.loading=!0,a=e.host+"/"+n.name,o={method:"put",url:a,headers:{"Content-Type":"image/jpeg"},data:n},i=e,s()(o).then((function(t){var e=a;i.url=e,i.$emit("input",e),i.loading=!1})).catch((function(t){i.$message.error(t)}));case 6:case"end":return r.stop()}}),r)})))()}}},l=c,f=r("2877"),d=Object(f["a"])(l,n,a,!1,null,null,null);e["a"]=d.exports},e876:function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s}));var n=r("b775");function a(t){return Object(n["a"])({url:"/v1/module/sort",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/v1/activity/_update",method:"put",data:t})}function i(t){return Object(n["a"])({url:"/v1/module/windows/".concat(t.id),method:"put",data:t})}function u(t){return Object(n["a"])({url:"/v1/module/windows",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/module/windows/_search",method:"post",data:t})}},f6ef:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{attrs:{title:t.title,size:"small"}},[t._t("default")],2)},a=[],o={props:["title"],data:function(){return{}},mounted:function(){},methods:{}},i=o,u=(r("882e"),r("2877")),s=Object(u["a"])(i,n,a,!1,null,"3b2a7956",null);e["a"]=s.exports},f929:function(t,e,r){"use strict";r("cc76")}}]);