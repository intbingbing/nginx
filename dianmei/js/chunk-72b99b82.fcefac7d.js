(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b99b82"],{"3fe3":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return u})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"h",(function(){return d})),a.d(e,"f",(function(){return f})),a.d(e,"b",(function(){return p}));a("159b"),a("4de4");var n=a("b775"),r=a("da46"),o=a("ca00");function i(t){return Object(n["a"])({url:"/v1/module/homepage/_search",method:"post",data:t}).then((function(t){if(t.forEach((function(t){var e=r["moduleType"].filter((function(e){return e.value===t.moduleType}));t.moduleNote=e[0].label})),t.length>2){for(var e=0;e<2;e++)t[e].up=t[e].down=!1;for(var a=[],n=2;n<t.length;n++)a.push(t[n]);Object(o["a"])(a)}else for(var i=0;i<t.length;i++)t[i].up=t[i].down=!1;return Object(o["g"])(t)}))}function s(t){return Object(n["a"])({url:"/v1/activitys/_search",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/module/homepage/addMarketing",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/v1/module/homepage/update/".concat(t.id),method:"put",data:t})}var l=c;function d(t){return Object(n["a"])({url:"/v1/module/_update",method:"put",data:t})}function f(t){return Object(n["a"])({url:"/v1/activitys/_update",method:"put",data:t})}function p(t){return Object(n["a"])({url:"/v1/module/homepage/addGroup",method:"post",data:t})}},"68a6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{wrapClassName:"full-modal-wrap",title:t.type,destroyOnClose:!0,visible:t.visible,width:"60%",okText:"提交"},on:{cancel:t.close}},[a("Discount",{ref:"Discount",attrs:{defaultData:t.defaultData}}),a("ProjectList",{ref:"ProjectList",attrs:{defaultData:t.defaultData}}),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:t.close}},[t._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary",loading:t.loading},on:{click:t.handleOk}},[t._v(" 提交 ")])],1)],2)},r=[],o=a("5530"),i=a("1da1"),s=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("baseCard",{attrs:{title:"拼团模块"}},[a("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,layout:"inline"}},[a("a-form-model-item",{attrs:{label:"标题",prop:"title"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("a-form-model-item",{attrs:{label:"上架",prop:"status"}},[a("a-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 上架 ")]),a("a-radio",{attrs:{value:0}},[t._v(" 下架 ")])],1)],1)],1)],1)}),u=[],c=(a("d3b7"),a("f6ef")),l=a("cd3f"),d=a.n(l),f=(a("7b0a"),a("c1df"),{title:void 0,status:1}),p={name:"discount",components:{baseCard:c["a"]},props:["defaultData"],data:function(){return{form:d()(f),rules:{title:[{required:!0,message:"请输入",trigger:"blur"}],status:[{required:!0,message:"请选择",trigger:"blur"}]}}},mounted:function(){this.defaultData&&(this.form={title:this.defaultData.title,status:this.defaultData.status})},methods:{check:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.$refs.ruleForm.validate((function(a){return e(!!a&&t.form)}))})));case 1:case"end":return e.stop()}}),e)})))()}}},m=p,h=a("2877"),b=Object(h["a"])(m,s,u,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("baseCard",{attrs:{title:"添加拼团模块下的项目列表"}},[a("a-button",{staticClass:"margin-bottom-10",attrs:{type:"primary",icon:"plus"},on:{click:t.selectActivity}},[t._v(" 选择拼团活动 ")]),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"small",columns:t.columns,dataSource:t.tableData,pagination:!1},scopedSlots:t._u([{key:"action",fn:function(e,n,r){return a("span",{},[[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.action("删除",n,r)}}},[t._v(" 删除 ")]),0===n.status&&1!==n.approvalStatus?a("span",[a("a-divider",{attrs:{type:"vertical"}}),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.action("编辑拼团活动",n)}}},[t._v(" 编辑拼团活动 ")])],1):t._e()]],2)}}])}),a("GroupActivity",{ref:"GroupActivity",on:{ok:t.setActivityList}}),a("Create",{ref:"Create",attrs:{parent:t.that}})],1)},y=[],j=(a("99af"),a("a15b"),a("d81d"),a("a434"),a("c740"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseModal",{ref:"BaseModal",attrs:{title:"选择拼团活动",showSearch:!1},on:{ok:t.handleOk}},[a("s-table",{ref:"table",attrs:{rowKey:"id",size:"small",columns:t.columns,data:t.loadData,condition:t.condition,"row-selection":t.rowSelection}})],1)}),k=[],O=(a("b0c0"),a("159b"),a("c593")),D=a("ab09"),w=a("3fe3"),_={name:"SelectGroup",components:{BaseModal:O["a"],STable:D["a"]},data:function(){return{columns:this.$tableConfig.groupModal.columns,condition:this.$tableConfig.groupModal.condition,loadData:function(t){return Object(w["d"])(Object(o["a"])(Object(o["a"])({},t),{},{approvalStatus:1,status:"0,1",type:7}))},selectList:[]}},computed:{rowSelection:function(){var t=this;return{getCheckboxProps:function(t){return{props:{disabled:"Disabled User"===t.name,name:t.name}}},selectedRowKeys:this.selectList.map((function(t){return t.id})),onSelect:function(e,a,n,r){a?t.selectList.push(e):t.selectList.splice(t.selectList.findIndex((function(t){return e.id===t.id})),1)},onSelectAll:function(e,a,n){console.log(e,a,n);var r=d()(t.selectList);if(e)n.forEach((function(e){var a=t.selectList.findIndex((function(t){return e.id===t.id}));-1===a&&r.push(e)}));else{var o=[];n.forEach((function(e){var a=t.selectList.findIndex((function(t){return e.id===t.id}));-1!==a&&o.push(a)})),o.sort((function(t,e){return e-t})).forEach((function(t){r.splice(t,1)}))}t.selectList=r}}}},created:function(){},mounted:function(){},methods:{handleOk:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("ok",t.selectList);case 1:case"end":return e.stop()}}),e)})))()},open:function(t){this.selectList=d()(t),this.$refs.BaseModal.open()}}},L=_,x=Object(h["a"])(L,j,k,!1,null,"a6d49a36",null),$=x.exports,C=a("4e1d"),S={name:"projectList",components:{baseCard:c["a"],GroupActivity:$,Create:C["default"]},props:["defaultData"],data:function(){return{tableData:[],columns:[{title:"拼团活动名称",dataIndex:"name"},{title:"活动时间",customRender:function(t,e,a){return"".concat(e.startTime,"至").concat(e.endTime)}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],that:this}},mounted:function(){var t;null!==this&&void 0!==this&&null!==(t=this.defaultData)&&void 0!==t&&t.activityList&&(this.tableData=this.defaultData.activityList)},methods:{selectActivity:function(){this.$refs.GroupActivity.open(this.tableData)},setActivityList:function(t){this.tableData=t},check:function(){var t=this;return new Promise((function(e){t.tableData.length?e({content_id:t.tableData.map((function(t){return t.id})).join()}):(t.$message.error("请选择拼团活动！"),e(!1))}))},action:function(t,e,a){"编辑拼团活动"===t?this.$refs.Create.open(t,e):"删除"===t&&this.tableData.splice(a,1)},refresh:function(t){var e=this.tableData.findIndex((function(e){return e.id===t.id}));this.$set(this.tableData,e,t)}}},A=S,R=Object(h["a"])(A,g,y,!1,null,null,null),E=R.exports,M={components:{Discount:v,ProjectList:E},name:"group",props:["parent"],data:function(){return{visible:!1,type:"新增拼团",record:null,loading:!1,defaultData:{}}},mounted:function(){},methods:{handleOk:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.Discount.check();case 2:return a=e.sent,e.next=5,t.$refs.ProjectList.check();case 5:n=e.sent,a&&n&&(t.loading=!0,r="首页"===t.parent.pageName?1:2,"新增拼团"===t.type?Object(w["b"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},a),n),{},{target:r})).then((function(e){t.loading=!1,t.visible=!1,t.$message.success(t.type+"成功！"),t.parent.refresh()})):Object(w["g"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({id:t.defaultData.id},a),n),{},{target:r})).then((function(e){t.loading=!1,t.visible=!1,t.$message.success(t.type+"成功！"),t.parent.refresh()})));case 7:case"end":return e.stop()}}),e)})))()},close:function(){this.visible=!1},open:function(t,e){this.visible=!0,this.type=t+"拼团",this.record=e,this.defaultData="编辑"===t?d()(e):null}}},P=M,G=Object(h["a"])(P,n,r,!1,null,"8616f6b8",null);e["default"]=G.exports}}]);