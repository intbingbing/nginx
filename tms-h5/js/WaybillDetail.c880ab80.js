(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WaybillDetail"],{"01d4":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=[{dictValue:"收入",dictCode:"1"},{dictValue:"支出",dictCode:"2"}],n=[{dictValue:"现付",dictCode:"1"},{dictValue:"定金",dictCode:"2"},{dictValue:"尾款",dictCode:"3"},{dictValue:"到付",dictCode:"4"},{dictValue:"月结",dictCode:"5"},{dictValue:"回单付",dictCode:"6"}]},"4c5d":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return r}));a("caf3");var i=a("b775"),n=a("794c"),c="/api-event/h5";function l(t){return Object(i["a"])({url:"".concat(n["e"]).concat(c,"/receiptBase/detailByOrderId"),method:"post",data:t})}function o(t){return Object(i["a"])({url:"".concat(n["k"]).concat(c,"/receiptBase/saveOrUpdate"),method:"post",data:t})}function r(t){return Object(i["a"])({url:"".concat(n["e"]).concat(c,"/receiptBase/detail"),method:"post",data:t})}},"57bb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"waybillDetail"},[a("div",{staticClass:"WaybillInfo"},[a("div",{staticClass:"WaybillTitle flex-align-center"},[a("span",[t._v("回单单号"+t._s(t.detailData.receiptCode||""))]),a("span",{style:"color:"+("已驳回"===t.receiveStatus?"#DC5659":"未确认"===t.receiveStatus&&"#3C73F1")},[t._v(t._s(t.receiveStatus))])]),a("p",[t._v("上传时间："+t._s(t.detailData.updateTime))]),a("p",{staticClass:"waybillDec flex"},[a("span",[t._v("备注信息:")]),a("span",[t._v(t._s(t.detailData.remark||""))])]),t._l(t.detailData.fileRelations,(function(e,i){return a("van-image",{key:i,attrs:{src:e.fileUrl},on:{click:function(e){return t.preview(t.detailData.fileRelations)}}})})),a("div",{staticClass:"rejectReason"},[a("p",[t.detailData.rejectReason?a("span",[t._v("驳回理由:")]):t._e(),a("span",[t._v(t._s(t.detailData.rejectReason))])]),a("p",[t.detailData.desc?a("span",[t._v("备注:")]):t._e(),a("span",[t._v(t._s(t.detailData.desc))])])])],2),a("van-overlay",{staticClass:"loading component-loading",attrs:{show:t.loading}},[a("van-loading",{attrs:{color:"#ffffff",size:"60"}})],1)],1)},n=[],c=a("50cc"),l=a("81db"),o=a("0920"),r=a("2f76"),s=(a("6dc2"),a("3a28"),a("0b9a"),a("b6bd"),a("aef9")),d=a("9d0b"),u=a("4c5d"),f=a("6fa8"),p=a("01d4"),v=function(t){Object(o["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.detailData={},t.items=["已确认","未确认","已驳回"],t.receiveStatus="",t.fileRelations=[],t.loading=!1,t}return Object(l["a"])(a,[{key:"created",value:function(){this.GetReceiptInfor()}},{key:"eventWatch",value:function(t){console.log(this)}},{key:"GetReceiptInfor",value:function(){var t=this;this.loading=!0;var e={id:this.$route.query.id};Object(u["b"])(e).then((function(e){t.loading=!1,console.log(e.data),t.detailData=e.data,t.receiveStatus=t.items[~~e.data.receiveStatus-1],t.fileRelations=e.data.fileRelations}))}},{key:"preview",value:function(t){Object(f["a"])({images:t.map((function(t){return t.fileUrl})),closeOnPopstate:!0})}}]),a}(d["f"]);Object(s["a"])([Object(d["g"])("app.eventStamp")],v.prototype,"eventWatch",null),v=Object(s["a"])([Object(d["a"])({components:{},filters:{formate:function(t){return p["a"].filter((function(e){return t.toString()===e.dictCode}))[0].dictValue}}})],v);var b=v,_=b,C=a("8d2f"),h=Object(C["a"])(_,i,n,!1,null,"796ae008",null);e["default"]=h.exports}}]);