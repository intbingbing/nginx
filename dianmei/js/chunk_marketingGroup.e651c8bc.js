(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk_marketingGroup","chunk-2d0c8636"],{"3dd2":function(t,e,n){},5555:function(t,e,n){"use strict";n.r(e),n.d(e,"columns",(function(){return a})),n.d(e,"condition",(function(){return r}));n("99af");var a=[{title:"#",scopedSlots:{customRender:"serial"}},{title:"拼团活动名称",dataIndex:"name"},{title:"活动时间",customRender:function(t,e,n){return"".concat(e.startTime,"至").concat(e.endTime)}},{title:"拼团状态",dataIndex:"statusNote"},{title:"开团数",dataIndex:"group"},{title:"成团数",dataIndex:"groupSuccess"},{title:"参团订单数",dataIndex:"order"},{title:"成团订单数",dataIndex:"orderSuccess"},{title:"创建时间",dataIndex:"createTime"},{title:"总部审批",dataIndex:"approvalStatusNote"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],r=[{title:"拼团活动名称",dataIndex:"name",type:"input"},{title:"拼团状态",dataIndex:"status",type:"select",defaultValue:"0",options:[{label:"未开始",value:"0"},{label:"进行中",value:"1"},{label:"已结束",value:"2"}]}]},c8a8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-card",{staticClass:"card-list",attrs:{bordered:!1}},[n("a-row",{attrs:{gutter:20}},[n("a-col",{attrs:{span:6}},[n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[t._v("普通拼团")]),n("p",{staticClass:"content"},[t._v("以优惠价吸引客户开团，依托社交关系链裂变带来流量，帮助店铺提升购买转化")]),n("div",[n("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.action("新建拼团",null)}}},[t._v(" 立即新建 ")])],1)])]),n("a-col",{attrs:{span:6}},[n("div",{staticClass:"card more"},[n("div",{staticClass:"title"},[t._v("更多拼团")]),n("p",{staticClass:"content"}),n("div",[n("a-button",{attrs:{type:"primary",size:"small"}},[t._v(" 敬请期待 ")])],1)])])],1)],1),n("a-card",{attrs:{bordered:!1}},[n("s-table",{ref:"table",attrs:{rowKey:"id",columns:t.columns,data:t.loadData,condition:t.condition},scopedSlots:t._u([{key:"serial",fn:function(e,a,r){return n("span",{},[t._v(" "+t._s(r+1)+" ")])}},{key:"action",fn:function(e,a){return n("span",{},[[0===a.status&&1!==a.approvalStatus?n("span",{on:{click:function(e){return t.action("编辑拼团",a)}}},[n("a",[t._v("编辑")])]):n("span",{on:{click:function(e){return t.action("拼团详情",a)}}},[n("a",[t._v("详情")])]),n("a-divider",{attrs:{type:"vertical"}}),1===a.status&&2!==a.approvalStatus?n("a-popconfirm",{attrs:{title:"确定停止?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.action("停止",a)}}},[n("span",[n("a",[t._v("停止")])])]):n("a-popconfirm",{attrs:{title:"确定删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.action("删除",a)}}},[n("span",[n("a",[t._v("删除")])])])]],2)}}])})],1),n("Create",{ref:"Create"})],1)},r=[],o=n("ab09"),c=n("0a99"),s=n("e876"),i=n("5555"),u=n("4e1d"),d={name:"marketingGroup",components:{STable:o["a"],Create:u["default"]},data:function(){return{columns:i["columns"],queryParam:{},condition:i["condition"],loadData:function(t){return Object(c["d"])(t)}}},mounted:function(){},methods:{action:function(t,e){var n=this;"编辑拼团"===t||"新建拼团"===t||"拼团详情"===t?this.$refs.Create.open(t,e):"停止"===t?Object(s["d"])({ids:[e.id],column:"status",status:2}).then((function(t){n.$message.success("停止成功！"),n.refresh()})):"删除"===t&&Object(s["d"])({ids:[e.id],column:"is_delete",status:1}).then((function(t){n.$message.success("删除成功！"),n.refresh()}))},refresh:function(){this.$refs.table.refresh()}}},l=d,f=(n("ec10"),n("2877")),p=Object(f["a"])(l,a,r,!1,null,"0e60aa1e",null);e["default"]=p.exports},e876:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var a=n("b775");function r(t){return Object(a["a"])({url:"/v1/module/sort",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/v1/activity/_update",method:"put",data:t})}function c(t){return Object(a["a"])({url:"/v1/module/windows/".concat(t.id),method:"put",data:t})}function s(t){return Object(a["a"])({url:"/v1/module/windows",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/v1/module/windows/_search",method:"post",data:t})}},ec10:function(t,e,n){"use strict";n("3dd2")}}]);