(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"ab973d9c","chunk-2d2308ce":"4de827e7"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/users/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1dc3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[r("v-card",{staticClass:"pa-3",attrs:{color:"blue",dark:""}},[r("v-card-text",{staticClass:"subtitle-1"},[e._v(" Loading... "),r("v-progress-linear",{attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},a=[],s=r("5530"),i=r("2f62"),o={name:"Loader",computed:Object(s["a"])({},Object(i["c"])({isLoading:"app/isLoading"}))},c=o,u=r("2877"),l=r("6544"),d=r.n(l),f=r("b0af"),p=r("99d9"),m=r("169a"),v=r("8e36"),g=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=g.exports;d()(g,{VCard:f["a"],VCardText:p["c"],VDialog:m["a"],VProgressLinear:v["a"]})},"3ed1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("4160"),r("d3b7"),r("ac1f"),r("5319"),r("159b"),r("ddb0"),r("8103")),s=r.n(a),i=r("bba4"),o=r.n(i),c=r("ffe0");c.keys().forEach((function(e){var t=c(e),r=s()(o()(e.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["default"].component(r,t.default||t)}));var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("core-error-handler"),r("core-loader"),r("core-drawer"),r("v-content",[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1)},l=[],d={name:"App"},f=d,p=r("2877"),m=r("6544"),v=r.n(m),g=r("7496"),b=r("a75b"),h=Object(p["a"])(f,u,l,!1,null,null,null),_=h.exports;v()(h,{VApp:g["a"],VContent:b["a"]});var O=r("2f62"),w=function(){return{isLoading:!1}},L={namespaced:!0,state:w(),mutations:{SET_LOADING_STATE:function(e,t){e.isLoading=t}},getters:{isLoading:function(e){return e.isLoading}}},x=L,S=(r("c740"),r("a434"),r("15fd")),j=(r("96cf"),r("1da1")),y=r("5530"),E=(r("99af"),r("bc3a")),U=r.n(E),D=function(e){return e>=400&&e<=503},k=D,T=function(e,t){var r=404===t?"Entity not found.":e;Z.dispatch("errors/pushError","".concat(r),{root:!0})},V=T,R=!0,C="reqres.in",I=U.a.create({baseURL:"http".concat(R?"s":"","://").concat(C,"/api/"),timeout:5e4,headers:{"Content-Type":"application/json; charset=UTF-8"}});I.interceptors.response.use((function(e){var t=e.data,r=e.status;return k(r)&&V(t,r),t}),(function(e){var t=e.response,r=t.data,n=t.status;V(r,n)}));var P=I;function A(e){return P.get("users",{params:e})}function F(e){var t=e.userId,r=Object(S["a"])(e,["userId"]);return P.get("users/".concat(t),{params:r})}function $(e){return P.post("users",e)}function N(e){return P.put("users/".concat(e.id),e)}function B(e){return P.delete("users/".concat(e))}var H=function(){return{userList:[],selectedUser:{},pagination:{page:1,total_pages:0,per_page:10,total:10}}},M={namespaced:!0,state:H(),mutations:{SET_USER_LIST:function(e,t){e.userList=t},SET_USER:function(e,t){e.selectedUser=t},APPEND_USER_TO_LIST:function(e,t){e.userList.push(t)},UPDATE_USER_AT_LIST:function(e,t){var r=e.userList.findIndex((function(e){return e.id===t.id}));-1!==r&&e.userList.splice(r,1,t)},REMOVE_USER_FROM_LIST:function(e,t){e.userList.splice(e.userList.findIndex((function(e){return e.id===t})),1)},SET_PAGINATION:function(e,t){e.pagination=Object(y["a"])(Object(y["a"])({},e.pagination),t)}},actions:{fetchUserList:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,a={delay:3,page:n.pagination.page},t.next=4,A(a);case 4:s=t.sent,i=s.data,s.ad,o=Object(S["a"])(s,["data","ad"]),r("SET_USER_LIST",i),r("SET_PAGINATION",o);case 10:case"end":return t.stop()}}),t)})))()},fetchUser:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,F({userId:t,delay:3});case 3:a=r.sent,s=a.data,n("SET_USER",s);case 6:case"end":return r.stop()}}),r)})))()},createUser:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,$(t);case 3:a=r.sent,n("APPEND_USER_TO_LIST",a);case 5:case"end":return r.stop()}}),r)})))()},updateUser:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,N(t);case 3:a=r.sent,n("UPDATE_USER_AT_LIST",a);case 5:case"end":return r.stop()}}),r)})))()},deleteUser:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,B(t);case 3:n("REMOVE_USER_FROM_LIST",t);case 4:case"end":return r.stop()}}),r)})))()},setPagination:function(e,t){var r=e.commit,n=e.dispatch;r("SET_PAGINATION",t),n("fetchUserList")}},getters:{getUserList:function(e){return e.userList},getSelectedUser:function(e){return e.selectedUser},getPagination:function(e){return e.pagination}}},G=M,z={isError:!1,messages:[],formErrors:{}},q={namespaced:!0,state:z,mutations:{PUSH_ERROR_MESSAGE:function(e,t){e.isError=!0,e.messages.push(t)},SHIFT_ERROR:function(e){e.isError=!1,e.messages.shift()}},actions:{pushError:function(e,t){var r=e.commit;r("PUSH_ERROR_MESSAGE",t)},removeError:function(e){var t=e.commit;t("SHIFT_ERROR")}},getters:{getLastErrorMessage:function(e){return e.messages[e.messages.length-1]},getErrorState:function(e){return e.isError}}},J=q;n["default"].use(O["a"]);var Z=new O["a"].Store({modules:{app:x,users:G,errors:J}}),K=r("8c4f"),Q=K["a"].prototype.push;K["a"].prototype.push=function(e){return Q.call(this,e).catch((function(e){return e}))},n["default"].use(K["a"]);var W=new K["a"]({base:"/users/",mode:"history",routes:[{path:"/",name:"Home",component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/users",component:function(){return r.e("chunk-2d2308ce").then(r.bind(null,"ed81"))},children:[{path:"",name:"UserList",component:function(){return Promise.resolve().then(r.bind(null,"8f69"))}},{path:":id",name:"UserDetails",component:function(){return Promise.resolve().then(r.bind(null,"ff42"))}}]},{path:"*",redirect:{name:"Dashboard"}}],scrollBehavior:function(e,t,r){return r||(e.hash?{selector:e.hash}:{x:0,y:0})}}),X=W,Y=r("ee98"),ee=r.n(Y);n["default"].use(ee.a);var te=r("f309");n["default"].use(te["a"]);var re=new te["a"];r("3ed1");n["default"].config.productionTip=!1,new n["default"]({vuetify:re,store:Z,router:X,render:function(e){return e(_)}}).$mount("#app")},"7ebe":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("users-base-user-form",{attrs:{"user-data":e.selectedUser,"form-title":e.getFormTitle,"submit-handler":e.updateAction,"cancel-handler":e.cancelHandler,"is-loading":e.isLoading,"submit-btn-title":"save"}})},a=[],s=(r("99af"),r("a9e3"),r("b64b"),r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"EditUserForm",props:{userId:{type:[String,Number],required:!0},cancelHandler:{type:Function,default:function(){}}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({selectedUser:"users/getSelectedUser",isLoading:"app/isLoading"})),{},{getFormTitle:function(){return this.isUserLoaded?"Edit: ".concat(this.selectedUser.first_name," ").concat(this.selectedUser.last_name):"Edit:"},isUserLoaded:function(){return Object.keys(this.selectedUser).length}}),beforeMount:function(){this.init()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("users",["fetchUser","updateUser"])),Object(o["d"])({setLoadingState:"app/SET_LOADING_STATE"})),{},{updateAction:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.setLoadingState(!0),r.next=4,t.updateUser(e);case 4:t.setLoadingState(!1),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),t.setLoadingState(!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.setLoadingState(!0),t.next=4,e.fetchUser(e.userId);case 4:e.setLoadingState(!1),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.setLoadingState(!1),e.cancelHandler();case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}})},u=c,l=r("2877"),d=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},"8f69":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("v-row",e._l(e.userList,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("users-user-card",{attrs:{user:e}})],1)})),1),r("div",{staticClass:"text-center"},[r("v-pagination",{attrs:{"total-visible":"7",length:e.pagination.total_pages,circle:""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),r("v-btn",{attrs:{absolute:"",right:"",fab:"",dark:"",color:"pink"},on:{click:function(t){return t.stopPropagation(),e.toggleCreateDialog(t)}}},[r("v-icon",[e._v("mdi-plus")])],1),e.createDialogVisible?r("v-dialog",{attrs:{"max-width":"650px",persistent:""},model:{value:e.createDialogVisible,callback:function(t){e.createDialogVisible=t},expression:"createDialogVisible"}},[r("users-create-user-form",{attrs:{"cancel-handler":e.toggleCreateDialog}})],1):e._e()],1)},a=[],s=(r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"UserList",data:function(){return{createDialogVisible:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({userList:"users/getUserList",pagination:"users/getPagination",isLoading:"app/isLoading"})),{},{currentPage:{get:function(){return this.pagination.page},set:function(e){return this.setPagination({page:e})}}}),beforeMount:function(){this.init()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("users",["fetchUserList","setPagination"])),Object(o["d"])("app",{setLoadingState:"SET_LOADING_STATE"})),{},{init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.setLoadingState(!0),t.next=4,e.fetchUserList();case 4:e.setLoadingState(!1),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.setLoadingState(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},toggleCreateDialog:function(){this.createDialogVisible=!this.createDialogVisible}})},u=c,l=r("2877"),d=r("6544"),f=r.n(d),p=r("8336"),m=r("62ad"),v=r("169a"),g=r("132d"),b=r("891e"),h=r("0fd9"),_=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=_.exports;f()(_,{VBtn:p["a"],VCol:m["a"],VDialog:v["a"],VIcon:g["a"],VPagination:b["a"],VRow:h["a"]})},"8fbe":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("users-base-user-form",{attrs:{"submit-handler":e.createAction,"cancel-handler":e.cancelHandler,"is-loading":e.isLoading,"form-title":"Create","submit-btn-title":"create"}})},a=[],s=(r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"CreateUserForm",props:{cancelHandler:{type:Function,default:function(){}}},data:function(){return{}},computed:Object(i["a"])({},Object(o["c"])("app",["isLoading"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("users",["createUser"])),Object(o["d"])({setLoadingState:"app/SET_LOADING_STATE"})),{},{createAction:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.setLoadingState(!0),r.next=4,t.createUser(e);case 4:t.setLoadingState(!1),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),t.setLoadingState(!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}})},u=c,l=r("2877"),d=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},9653:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-snackbar",{attrs:{timeout:e.delay,value:e.getErrorState,top:"",right:"",color:"error"},on:{input:function(t){return e.close()}}},[e._v(" "+e._s(e.getLastErrorMessage)+" "),r("v-icon",{attrs:{color:"white"},on:{click:function(t){return e.close()}}},[e._v(" mdi-close ")])],1)},a=[],s=r("5530"),i=r("2f62"),o={name:"ErrorHandler",data:function(){return{delay:6e3}},computed:Object(s["a"])({},Object(i["c"])("errors",["getErrorState","getLastErrorMessage"])),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("errors",["removeError"])),{},{close:function(){this.removeError()}})},c=o,u=r("2877"),l=r("6544"),d=r.n(l),f=r("132d"),p=r("2db4"),m=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=m.exports;d()(m,{VIcon:f["a"],VSnackbar:p["a"]})},be3e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"userForm",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}},model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[r("v-card",{attrs:{elevation:"3"}},[r("v-card-title",{staticClass:"headline grey lighten-3"},[e._v(" "+e._s(e.formTitle)+" ")]),r("v-card-text",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.name},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("First Name "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.first_name,callback:function(t){e.$set(e.formData,"first_name","string"===typeof t?t.trim():t)},expression:"formData.first_name"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.name},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("Last Name "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.last_name,callback:function(t){e.$set(e.formData,"last_name","string"===typeof t?t.trim():t)},expression:"formData.last_name"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.email},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("Email "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email","string"===typeof t?t.trim():t)},expression:"formData.email"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.job},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("Job "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.job,callback:function(t){e.$set(e.formData,"job","string"===typeof t?t.trim():t)},expression:"formData.job"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.password},on:{input:e.validationSync},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("Password "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password","string"===typeof t?t.trim():t)},expression:"formData.password"}})],1)],1),r("v-row",[r("v-col",[r("v-text-field",{attrs:{rules:e.rules.confirm_password},scopedSlots:e._u([{key:"label",fn:function(){return[r("span",[e._v("Confirm password "),r("span",{staticClass:"red--text"},[e._v("*")])])]},proxy:!0}]),model:{value:e.formData.confirm_password,callback:function(t){e.$set(e.formData,"confirm_password","string"===typeof t?t.trim():t)},expression:"formData.confirm_password"}})],1)],1),r("v-divider",{staticClass:"mt-5"})],1),r("v-card-actions",{staticClass:"justify-center justify-sm-end"},[r("v-btn",{attrs:{text:"",color:"error",height:"45","min-width":"100"},on:{click:function(t){return t.stopPropagation(),e.handleCancel(t)}}},[e._v(" Close ")]),r("v-btn",{attrs:{disabled:e.isBtnDisabled,loading:e.showBtnLoader,text:"",color:"success",height:"45","min-width":"100",type:"submit"}},[e._v(" "+e._s(e.submitBtnTitle)+" ")])],1)],1)],1)},a=[],s=r("5530"),i=(r("96cf"),r("1da1")),o=function(e){return 0!==e.length||"Required."},c=function(e){return e.length>=3||"Name must be at least 3 characters."},u=function(e){return e.length<=20||"Name must be not greater than 20 characters."},l=(r("caad"),r("4d63"),r("ac1f"),r("25f0"),r("2532"),function(e){var t=new RegExp("^([A-Za-z0-9!-_|` À-ÖØ-öø-ÿ]*)$");return!(e&&!t.test(e))||"Password should contain only latin letters."}),d=function(e){return!(e&&e.length<3)||"Min password length should be at least 3 characters."},f=function(e){return!(e&&e.length>20)||"Max password length should be not greater than 20 characters."},p=function(e){return!e||!e.includes(" ")||"Password should not contain spaces"},m=function(e,t){return t===e||"Confirmation password not equal to password."},v=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e&&t.test(e)||"Invalid e-mail."},g={name:"BaseUserForm",props:{isLoading:{type:Boolean,default:!1},userData:{type:Object,default:function(){}},formTitle:{type:String,default:""},submitBtnTitle:{type:String,default:"submit"},submitHandler:{type:Function,default:function(){}},cancelHandler:{type:Function,default:function(){}}},data:function(){var e=this;return{isFormValid:!1,showBtnLoader:!1,formData:{first_name:"",last_name:"",email:"",job:"",password:"",confirm_password:""},rules:{name:[o,c,u],email:[o,v],job:[o],password:[o,l,d,f,p],confirm_password:[o,function(t){return m(e.formData.password,t)}]}}},watch:{userData:{handler:function(e){this.setFormData(e)}}},computed:{isBtnDisabled:function(){return this.isLoading||!this.isFormValid}},methods:{handleSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.validationSync()){t.next=13;break}return t.prev=1,e.showBtnLoader=!0,t.next=5,e.submitHandler(e.formData);case 5:e.showBtnLoader=!1,e.cancelHandler(),e.$notify({type:"success",group:"userCrud",text:"Successfully saved."}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.showBtnLoader=!1;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},setFormData:function(){this.formData=Object(s["a"])(Object(s["a"])({},this.formData),this.userData)},handleCancel:function(){this.cancelHandler()},validationSync:function(){return this.$refs.userForm.validate()}}},b=g,h=r("2877"),_=r("6544"),O=r.n(_),w=r("8336"),L=r("b0af"),x=r("99d9"),S=r("62ad"),j=r("ce7e"),y=r("4bd4"),E=r("0fd9"),U=r("8654"),D=Object(h["a"])(b,n,a,!1,null,null,null);t["default"]=D.exports;O()(D,{VBtn:w["a"],VCard:L["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:S["a"],VDivider:j["a"],VForm:y["a"],VRow:E["a"],VTextField:U["a"]})},f519:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{"mini-variant":e.minimized,width:"280px",permanent:"",app:""},on:{"update:miniVariant":function(t){e.minimized=t},"update:mini-variant":function(t){e.minimized=t}}},[r("v-list-item",{staticClass:"px-2"},[e.displayUserInfo?r("v-list-item-avatar",[r("v-img",{attrs:{src:e.user.avatar}})],1):e._e(),e.displayUserInfo?r("v-list-item-title",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("span",{staticClass:"title"},[e._v(e._s(e.user.first_name+" "+e.user.last_name))])]),r("v-col",[r("span",{staticClass:"body-2 grey--text lighten-1"},[e._v(e._s(e.user.email))])])],1)],1):r("v-list-item-avatar",{attrs:{color:"grey"}}),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.minimized=!e.minimized}}},[r("v-icon",[e._v("mdi-chevron-left")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:""}},e._l(e.links,(function(t){return r("v-list-item",{key:t.title,attrs:{to:{name:""+t.to},exact:"",link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"subtitle-2"},[e._v(e._s(t.title))])],1)],1)})),1)],1)},a=[],s=(r("b64b"),r("5530")),i=r("2f62"),o={name:"Drawer",computed:Object(s["a"])(Object(s["a"])({},Object(i["c"])("users",{user:"getSelectedUser"})),{},{displayUserInfo:function(){return this.user&&Object.keys(this.user).length}}),data:function(){return{minimized:!0,links:[{to:"Home",icon:"mdi-home",title:"Home"},{to:"UserList",icon:"mdi-account-group-outline",title:"Users"}]}}},c=o,u=r("2877"),l=r("6544"),d=r.n(l),f=r("8336"),p=r("62ad"),m=r("ce7e"),v=r("132d"),g=r("adda"),b=r("8860"),h=r("da13"),_=r("8270"),O=r("5d23"),w=r("34c3"),L=r("f774"),x=r("0fd9"),S=r("2fa4"),j=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=j.exports;d()(j,{VBtn:f["a"],VCol:p["a"],VDivider:m["a"],VIcon:v["a"],VImg:g["a"],VList:b["a"],VListItem:h["a"],VListItemAvatar:_["a"],VListItemContent:O["a"],VListItemIcon:w["a"],VListItemTitle:O["b"],VNavigationDrawer:L["a"],VRow:x["a"],VSpacer:S["a"]})},f903:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-img",{attrs:{src:e.user.avatar,height:"200px"}}),r("v-card-title",[e._v(" "+e._s(e.user.first_name+" "+e.user.last_name)+" ")]),r("v-card-subtitle",[e._v(" "+e._s(e.user.email)+" ")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:""},on:{click:function(t){return t.stopPropagation(),e.handleDelete(t)}}},[e._v("Delete")]),r("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(t){return t.stopPropagation(),e.toggleEditDialog(t)}}},[e._v(" Edit ")]),e.displayShowBtn?r("v-btn",{attrs:{color:"purple",outlined:""},on:{click:function(t){return t.stopPropagation(),e.goToDetailsPage(t)}}},[e._v(" Show ")]):e._e()],1),e.editDialogVisible?r("v-dialog",{attrs:{"max-width":"650px",persistent:""},model:{value:e.editDialogVisible,callback:function(t){e.editDialogVisible=t},expression:"editDialogVisible"}},[r("users-edit-user-form",{attrs:{"user-id":this.user.id,"cancel-handler":e.toggleEditDialog}})],1):e._e()],1)},a=[],s=(r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"UserCard",props:{user:{type:Object,required:!0},displayShowBtn:{type:Boolean,default:!0},redirectOnDelete:{type:Function,default:function(){}}},data:function(){return{editDialogVisible:!1}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("users",["deleteUser"])),Object(o["d"])({setLoadingState:"app/SET_LOADING_STATE"})),{},{goToDetailsPage:function(){this.$router.push({name:"UserDetails",params:{id:this.user.id}})},toggleEditDialog:function(){this.editDialogVisible=!this.editDialogVisible},handleDelete:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.setLoadingState(!0),t.next=4,e.deleteUser(e.user.id);case 4:e.setLoadingState(!1),e.$notify({type:"success",group:"userCrud",text:"Successfully deleted."}),e.redirectOnDelete(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.setLoadingState(!1);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}})},u=c,l=r("2877"),d=r("6544"),f=r.n(d),p=r("8336"),m=r("b0af"),v=r("99d9"),g=r("169a"),b=r("adda"),h=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=h.exports;f()(h,{VBtn:p["a"],VCard:m["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VDialog:g["a"],VImg:b["a"]})},ff42:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isUserLoaded?r("users-user-card",{attrs:{user:e.selectedUser,"display-show-btn":!1,"redirect-on-delete":e.redirectToUserList}}):e._e()},a=[],s=(r("b64b"),r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"UserDerails",computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])("users",{selectedUser:"getSelectedUser"})),{},{userId:function(){return this.$route.params.id},isUserLoaded:function(){return this.selectedUser&&Object.keys(this.selectedUser).length}}),beforeMount:function(){this.init()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("users",["fetchUser"])),Object(o["d"])({setLoadingState:"app/SET_LOADING_STATE"})),{},{init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.setLoadingState(!0),t.next=4,e.fetchUser(e.userId);case 4:e.setLoadingState(!1),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.setLoadingState(!1),e.$router.push({name:"UserList"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},redirectToUserList:function(){this.$router.push({name:"UserList"})}})},u=c,l=r("2877"),d=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},ffe0:function(e,t,r){var n={"./Core/Drawer.vue":"f519","./Core/ErrorHandler.vue":"9653","./Core/Loader.vue":"1dc3","./Users/BaseUserForm.vue":"be3e","./Users/CreateUserForm.vue":"8fbe","./Users/EditUserForm.vue":"7ebe","./Users/UserCard.vue":"f903","./Users/UserDetails.vue":"ff42","./Users/UserList.vue":"8f69"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.45e3b7d0.js.map