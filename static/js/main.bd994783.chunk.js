(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports={fileselect:"FileSelect_fileselect__1cm97",smallerfont:"FileSelect_smallerfont__17YiH"}},114:function(e,t,n){e.exports={footerContainer:"Footer_footerContainer__28i-G"}},165:function(e,t,n){e.exports={body:"body_body__2mzJJ"}},166:function(e,t,n){e.exports={container:"Container_container__ZP6uU"}},169:function(e,t,n){var a=n(242),r=["handleFiles","combineToZip","checkCrypt","getKey","getSHA256","fileToData","encrypt","decrypt","getHint"];e.exports=function(){var e=new Worker(n.p+"1d09e8771a46f2481b0f.worker.js",{name:"[hash].worker.js"});return a(e,r),e}},183:function(e,t,n){e.exports={layout:"App_layout__uyoyn"}},189:function(e,t,n){e.exports=n(401)},194:function(e,t,n){},36:function(e,t,n){e.exports={meter:"PasswordMeter_meter__1t66h",bar:"PasswordMeter_bar__R1Cx9",invisible:"PasswordMeter_invisible__M79q1",weak:"PasswordMeter_weak__ArcO1",good:"PasswordMeter_good__3Uer0",strong:"PasswordMeter_strong__9MZlk"}},401:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),i=(n(194),n(54)),c=n(55),l=n(61),p=n(56),u=n(62),d=n(406),f=(n(195),n(6)),m=n(78),h=n.n(m),y=function(e){return r.a.createElement(d.a.Header,{className:h.a.header},r.a.createElement("div",{className:h.a.brand},r.a.createElement("h1",null,"Cryption")),r.a.createElement("div",{className:h.a.github},r.a.createElement("a",{href:"https://github.com/lagmoellertim/cryption",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{type:"github"}))))},E=n(165),b=n.n(E),v=n(166),w=n.n(v),g=n(186),_=n(3),S=n.n(_),O=n(111),j=n.n(O),C=n(169),F=n.n(C).a,k=n(29),M=Object(k.b)(function(e){return{}},function(e){return{onFilesAdded:function(t,n,a){e({type:"ADD_FILES",payload:{fileList:t,mode:n,hint:a}})}}})(function(e){return r.a.createElement(g.a,{onDrop:function(t){return function(e,t){var n=F();n.handleFiles(t).then(function(a){"decrypt"===a?n.getHint(t[0]).then(function(n){e.onFilesAdded(t,a,n)}):e.onFilesAdded(t,a)})}(e,t)}},function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive;return r.a.createElement("div",Object.assign({},t(),{className:S()("dropzone",{"dropzone--isActive":a})+" "+j.a.fileselect}),r.a.createElement("input",n()),r.a.createElement("h1",{className:"ant-upload-drag-icon icon"},r.a.createElement(f.a,{type:"inbox"})),r.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),r.a.createElement("p",{className:j.a.smallerfont+" ant-upload-hint"},"Support for a single or bulk upload."))})}),P=n(402),A=n(403),D=n(404),T=function(e,t){e.updateFileInfo(t.password,t.hint)},R=n(36),I=n.n(R);var N=function(e){var t=function(e){var t=0;if(!e)return null;for(var n={},a=0;a<e.length;a++)n[e[a]]=(n[e[a]]||0)+1,t+=5/n[e[a]];var r={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},o=0;for(var s in r)o+=!0===r[s]?1:0;return(t+=10*(o-1))>80?2:t>60?1:t>=0?0:null}(e.password),n={null:I.a.invisible,0:I.a.weak,1:I.a.good,2:I.a.strong};return r.a.createElement("div",{className:I.a.meter},r.a.createElement("div",{className:I.a.bar+" "+n[t]}))},x=P.a.create({name:"form_in_modal"})(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.onCancel,a=e.onCreate,o=e.form,s=e.hint,i=e.mode,c=o.getFieldDecorator,l=this.props.form.getFieldValue("password");return r.a.createElement(A.a,{visible:t,title:"decrypt"!==i?"Encryption":"Decryption",okText:"decrypt"!==i?"Encrypt":"Decrypt",onCancel:n,onOk:a},r.a.createElement(P.a,{layout:"vertical"},r.a.createElement(P.a.Item,{label:"Password"},c("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(D.a.Password,{placeholder:"Input Password"})),"decrypt"!==i?r.a.createElement(N,{password:l}):""),null!==s||"decrypt"!==i?r.a.createElement(P.a.Item,{label:"Hint"},"decrypt"!==i?c("hint",{rules:[{required:!1}]})(r.a.createElement(D.a,{placeholder:"Input Hint",prefix:r.a.createElement(f.a,{type:"info-circle",style:{color:"rgb(0,0,0)"}})})):s):null))}}]),t}(a.Component)),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleCreate=function(){var e=n.formRef.props.form;e.validateFields(function(t,a){t||(e.resetFields(),T(n.props,a))})},n.saveFormRef=function(e){n.formRef=e},n.onReset=function(){n.formRef.props.form.resetFields(),n.props.onReset()},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{wrappedComponentRef:this.saveFormRef,visible:this.props.modal.show,onCancel:this.onReset,onCreate:this.handleCreate,hint:this.props.hint,mode:this.props.mode})}}]),t}(a.Component),L=Object(k.b)(function(e){return{modal:e.passwordModal,hint:e.files.hint,mode:e.files.mode}},function(e){return{onReset:function(){e({type:"RESET",payload:{}})},updateFileInfo:function(t,n){e({type:"ADD_FORM_DATA",payload:{password:t,hint:n}})}}})(H),q=n(405),z=n(187),W=n(80),Z=n.n(W),G=q.a.Step,K=Object(k.b)(function(e){return{modal:e.stepModal,files:e.files,process:e.process}},function(e){return{setSteps:function(t){e({type:"SET_STEPS",payload:{steps:t}})},nextStep:function(){e({type:"INCREMENT_STEP",payload:{}})},isProcessActive:function(t){e({type:"PROCESS_ACTIVE",payload:{active:t}})},processFinished:function(t){e({type:"PROCESS_FINISHED",payload:{status:t}})},reset:function(){e({type:"RESET",payload:{}})}}})(function(e){var t=e.modal,n=t.steps,o=t.currentStep,s=t.show;return Object(a.useEffect)(function(){!e.process.active&&s&&(function(e){var t=[];"decrypt"!==e.files.mode?(t="encrypt-multiple"===e.files.mode?["Combine Files to ZIP"]:["Transform File"],t=[].concat(Object(z.a)(t),["Salt and Hash Key","Encrypt File with AES","Generate MD5-Hash","Generate and Encrypt SHA256-Hash","Encrypt Filename","Generate Metadata","Create Cryptionfile"])):t=["Salt and Hash Key","Read Cryptionfile","Decrypt File with AES","Generate SHA256-Hash","Check Data Integrity","Decrypt Filename","Recreate File"];var n=F();e.setSteps(t),n.addEventListener("message",function(t){"incrementProgress"===t.data&&e.nextStep()}),"encrypt-multiple"===e.files.mode?n.combineToZip(e.files.fileList).then(function(t){e.nextStep(),n.encrypt(t,"package.zip",e.files.password,e.files.hint).then(function(t){A.a.success({title:"Success",content:"The files were zipped and encrypted successfully, you will be able to save the Cryptionfile now",onOk:function(){return e.reset()}}),Z.a.saveAs(t.file,t.name)})}):"encrypt"===e.files.mode?n.fileToData(e.files.fileList[0]).then(function(t){e.nextStep(),n.encrypt(t,e.files.fileList[0].name,e.files.password,e.files.hint).then(function(t){A.a.success({title:"Success",content:"The file was encrypted successfully, you will be able to save the Cryptionfile now",onOk:function(){return e.reset()}}),Z.a.saveAs(t.file,t.name)})}):n.decrypt(e.files.fileList[0],e.files.password).then(function(t){null==t.error?(A.a.success({title:"Success",content:"The file was decrypted successfully, you will be able to save it now",onOk:function(){return e.reset()}}),Z.a.saveAs(t.file,t.name)):"key-incorrect-or-corrupted"===t.error?A.a.error({title:"Key incorrect or File corrupted",content:"The file could not be decrypted, maybe you entered the wrong password or the file got damaged",onOk:function(){return e.reset()}}):"no-integrity"===t.error&&A.a.error({title:"No File Integrity",content:"One or multiple hashes did not match, meaning the file must have been manipulated",onOk:function(){return e.reset()}})})}(e),e.isProcessActive(!0))}),r.a.createElement(A.a,{title:"Please wait",visible:s,footer:null,closable:!1},r.a.createElement(q.a,{direction:"vertical",current:o},n.map(function(e){var t=n.indexOf(e);return t<o?r.a.createElement(G,{description:"",title:e,key:t}):t>o?r.a.createElement(G,{description:"",title:e,key:t}):r.a.createElement(G,{description:"",title:e,icon:r.a.createElement(f.a,{type:"loading"}),key:t})})))}),J=function(e){return r.a.createElement("div",{className:w.a.container},r.a.createElement("h1",null,"Decrypt and Encrypt Files"),r.a.createElement("h3",null,"Protect your data by using Cryption. Using AES-Encryption and our .cryption File Format, your Data is encrypted and decrypted securely in your browser."),r.a.createElement(L,null),r.a.createElement(K,null),r.a.createElement(M,null))},U=function(e){return r.a.createElement("div",{className:b.a.body},r.a.createElement(J,null))},V=n(183),B=n.n(V),X=n(58),Y=n(17),$={stepModal:{show:!1,steps:[],currentStep:0},passwordModal:{show:!1},files:{mode:null,fileList:[],data:null,hint:null,password:null},process:{active:!1,status:""}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"RESET":return $;case"ADD_FILES":return Object(Y.a)({},e,{files:Object(Y.a)({},e.files,{fileList:a.fileList,mode:a.mode,hint:a.hint}),passwordModal:{show:!0}});case"ADD_FORM_DATA":return Object(Y.a)({},e,{files:Object(Y.a)({},e.files,{hint:a.hint,password:a.password}),passwordModal:{show:!1},stepModal:Object(Y.a)({},e.stepModal,{show:!0})});case"SET_STEPS":return Object(Y.a)({},e,{stepModal:Object(Y.a)({},e.stepModal,{steps:a.steps})});case"INCREMENT_STEP":return Object(Y.a)({},e,{stepModal:Object(Y.a)({},e.stepModal,{currentStep:e.stepModal.currentStep+1})});case"PROCESS_ACTIVE":return Object(Y.a)({},e,{process:{active:a.active}});case"PROCESS_FINISHED":return Object(Y.a)({},$,{process:{active:!1,status:a.status}});default:return e}},ee=n(184),te=n.n(ee),ne=n(114),ae=n.n(ne),re=function(){return r.a.createElement(d.a.Footer,{className:ae.a.footer},r.a.createElement("div",{className:ae.a.footerContainer},r.a.createElement("p",null,"Made with ",r.a.createElement(f.a,{type:"heart",theme:"filled"})," by"," ",r.a.createElement("a",{href:"https://en.lagmoellertim.de"},"Tim-Luca Lagm\xf6ller")),r.a.createElement("a",{href:"http://donate.lagmoellertim.de"},"Donate")))},oe=n(185),se=n.n(oe),ie=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).developmentMode=!1,e.developmentMode?e.store=Object(X.b)(Q,te()()):e.store=Object(X.b)(Q),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{store:this.store},this.developmentMode?null:r.a.createElement(se.a,null,r.a.createElement("meta",{httpEquiv:"Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; style-src https://fonts.googleapis.com https://cryption.pw 'unsafe-inline'; img-src 'self'; media-src 'none'; frame-src 'none'; font-src https://fonts.gstatic.com; connect-src 'none'"}),r.a.createElement("meta",{httpEquiv:"X-Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; style-src https://fonts.googleapis.com https://cryption.pw 'unsafe-inline'; img-src 'self'; media-src 'none'; frame-src 'none'; font-src https://fonts.gstatic.com; connect-src 'none'"}),r.a.createElement("meta",{httpEquiv:"X-WebKit-CSP",content:"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; style-src https://fonts.googleapis.com https://cryption.pw 'unsafe-inline'; img-src 'self'; media-src 'none'; frame-src 'none'; font-src https://fonts.gstatic.com; connect-src 'none'"})),r.a.createElement(d.a,{className:B.a.layout},r.a.createElement(y,null),r.a.createElement(U,null),r.a.createElement(re,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,n){e.exports={header:"header_header__3rn7i",brand:"header_brand__16pbq",github:"header_github__169L0"}}},[[189,1,2]]]);
//# sourceMappingURL=main.bd994783.chunk.js.map