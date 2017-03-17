(function(){for(var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,r=["Number","MIN_SAFE_INTEGER"],o=0;o<r.length-1;o++){var a=r[o];a in n||(n[a]={}),n=n[a]}var i=r[r.length-1];-9007199254740991!=n[i]&&e(n,i,{configurable:!0,writable:!0,value:-9007199254740991});var u=this,c=function(t){return void 0!==t},s=function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e},l=function(t,e){return-1!==t.indexOf(e)},f=function(t,e,n){function r(){f||(f=!0,e.apply(null,arguments))}function o(e){c=setTimeout(function(){c=null,t(a,2===l)},e)}function a(t,e){if(!f)if(t)r.apply(null,arguments);else if(2===l||s)r.apply(null,arguments);else{64>u&&(u*=2);var n;1===l?(l=2,n=0):n=1e3*(u+Math.random()),o(n)}}function i(t){p||(p=!0,f||(null!==c?(t||(l=2),clearTimeout(c),o(0)):t||(l=1)))}var u=1,c=null,s=!1,l=0,f=!1,p=!1;return o(0),setTimeout(function(){s=!0,i(!0)},n),i},p="https://firebasestorage.googleapis.com",h=function(t,e){this.code="storage/"+t,this.message="Firebase Storage: "+e,this.serverResponse=null,this.name="FirebaseError"};!function(){function t(){}var e=Error;t.prototype=e.prototype,h.b=e.prototype,h.prototype=new t,h.a=function(t,n,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[n].apply(t,o)}}();var d=function(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")},b=function(){return new h("canceled","User canceled the upload/download.")},y=function(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},g=function(t,e,n){return new h("invalid-argument","Invalid argument in `"+e+"` at index "+t+": "+n)},w=function(){return new h("app-deleted","The Firebase app was deleted.")},v=function(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)},m=function(t){throw new h("internal-error","Internal error: "+t)},E=function(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])},k=function(t){var e={};return E(t,function(t,n){e[t]=n}),e},x=function(t,e){return e=e.split("/").filter(function(t){return 0<t.length}).join("/"),0===t.length?e:t+"/"+e},R=function(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)},A=function(t){if("undefined"!=typeof firebase)return new firebase.Promise(t);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.")},S=function(t,e,n,r){this.h=t,this.b={},this.method=e,this.headers={},this.body=null,this.j=n,this.l=this.a=null,this.c=[200],this.g=[],this.timeout=r,this.f=!0},U={STATE_CHANGED:"state_changed"},T={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},O=function(t){switch(t){case"running":case"pausing":case"canceling":return"running";case"paused":return"paused";case"success":return"success";case"canceled":return"canceled";case"error":return"error";default:return"error"}},j=function(t){return c(t)&&null!==t},C=function(t){return"string"==typeof t||t instanceof String},I=function(){return"undefined"!=typeof Blob},L=function(t,e){var n=Ut;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)},N=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},B=function(t,e){return t<e?-1:t>e?1:0},M=function(t){return function(){var e=[];Array.prototype.push.apply(e,arguments),firebase.Promise.resolve(!0).then(function(){t.apply(null,e)})}},P=function(t,e){this.bucket=t,this.path=e},_=function(t){var e=encodeURIComponent;return"/b/"+e(t.bucket)+"/o/"+e(t.path)},F=function(t){for(var e=null,n=[{K:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,G:{bucket:1,path:3},J:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path=t.path.slice(0,-1))}},{K:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,G:{bucket:1,path:3},J:function(t){t.path=decodeURIComponent(t.path)}}],r=0;r<n.length;r++){var o=n[r],a=o.K.exec(t);if(a){e=a[o.G.bucket],(a=a[o.G.path])||(a=""),e=new P(e,a),o.J(e);break}}if(null==e)throw new h("invalid-url","Invalid URL '"+t+"'.");return e},G=function(t,e,n){"function"==s(t)||j(e)||j(n)?(this.c=t,this.a=e||null,this.b=n||null):(this.c=t.next||null,this.a=t.error||null,this.b=t.complete||null)},D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},z=function(t){switch(t){case"raw":case"base64":case"base64url":case"data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url]."}},X=function(t,e){this.b=t,this.a=e||null},H=function(t,e){switch(t){case"raw":return new X(W(e));case"base64":case"base64url":return new X(q(t,e));case"data_url":t=new K(e);var n;if(t.a)n=q("base64",t.c);else{try{n=decodeURIComponent(t.c)}catch(t){throw v("data_url","Malformed data URL.")}n=W(n)}return new X(n,new K(e).b)}throw d()},W=function(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(127>=r)e.push(r);else if(2047>=r)e.push(192|r>>6,128|63&r);else if(55296==(64512&r))if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){var o=t.charCodeAt(++n),r=65536|(1023&r)<<10|1023&o;e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189);else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)},q=function(t,e){switch(t){case"base64":var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r)throw v(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break;case"base64url":if(n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/"),n||r)throw v(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var o;try{o=atob(e)}catch(e){throw v(t,"Invalid character found")}for(t=new Uint8Array(o.length),e=0;e<o.length;e++)t[e]=o.charCodeAt(e);return t},K=function(t){var e=t.match(/^data:([^,]+)?,/);if(null===e)throw v("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");if(e=e[1]||null,this.a=!1,this.b=null,null!=e){var n=e.length-7;this.b=(this.a=0<=n&&e.indexOf(";base64",n)==n)?e.substring(0,e.length-7):e}this.c=t.substring(t.indexOf(",")+1)},Z=function(t){var e=encodeURIComponent,n="?";return E(t,function(t,r){t=e(t)+"="+e(r),n=n+t+"&"}),n=n.slice(0,-1)},J=function(){var t=this;this.a=new XMLHttpRequest,this.c=0,this.f=A(function(e){t.a.addEventListener("abort",function(){t.c=2,e(t)}),t.a.addEventListener("error",function(){t.c=1,e(t)}),t.a.addEventListener("load",function(){e(t)})}),this.b=!1},V=function(t,e,n,r,o){if(t.b)throw m("cannot .send() more than once");return t.b=!0,t.a.open(n,e,!0),j(o)&&E(o,function(e,n){t.a.setRequestHeader(e,n.toString())}),j(r)?t.a.send(r):t.a.send(),t.f},$=function(t){if(!t.b)throw m("cannot .getErrorCode() before sending");return t.c},Y=function(t){if(!t.b)throw m("cannot .getStatus() before sending");try{return t.a.status}catch(t){return-1}},Q=function(t){if(!t.b)throw m("cannot .getResponseText() before sending");return t.a.responseText};J.prototype.abort=function(){this.a.abort()};var tt=function(t,e,n,r,o,a){this.b=t,this.h=e,this.f=n,this.a=r,this.g=o,this.c=a};t=tt.prototype,t.V=function(){return this.b},t.qa=function(){return this.h},t.na=function(){return this.f},t.ia=function(){return this.a},t.W=function(){if(j(this.a)){var t=this.a.downloadURLs;return j(t)&&j(t[0])?t[0]:null}return null},t.pa=function(){return this.g},t.la=function(){return this.c};var et;t:{var nt=u.navigator;if(nt){var rt=nt.userAgent;if(rt){et=rt;break t}}et=""}var ot=function(t,e,n,r,o,a,i,u,c,s,l){this.C=t,this.A=e,this.v=n,this.o=r,this.B=o.slice(),this.m=a.slice(),this.j=this.l=this.c=this.b=null,this.f=this.g=!1,this.s=i,this.h=u,this.D=l,this.w=c;var f=this;this.u=A(function(t,e){f.l=t,f.j=e,it(f)})},at=function(t,e,n){this.b=t,this.c=e,this.a=!!n},it=function(t){function e(t,e){e?t(!1,new at(!1,null,!0)):(e=new J,e.a.withCredentials=r.D,r.b=e,V(e,r.C,r.A,r.o,r.v).then(function(e){r.b=null;var n=0===$(e),o=Y(e);if(!(n=!n))var n=l([408,429],o),a=l(r.m,o),n=500<=o&&600>o||n||a;n?(e=2===$(e),t(!1,new at(!1,null,e))):t(!0,new at(l(r.B,o),e))}))}function n(t,e){var n=r.l;t=r.j;var o=e.c;if(e.b)try{var a=r.s(o,Q(o));c(a)?n(a):n()}catch(e){t(e)}else null!==o?(e=d(),a=Q(o),e.serverResponse=a,t(r.h?r.h(o,e):e)):(e=e.a?r.f?w():b():new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),t(e))}var r=t;t.g?n(0,new at(!1,null,!0)):t.c=f(e,n,t.w)};ot.prototype.a=function(){return this.u},ot.prototype.cancel=function(t){this.g=!0,this.f=t||!1,null!==this.c&&(0,this.c)(!1),null!==this.b&&this.b.abort()};var ut=function(t,e,n){var r=Z(t.b),r=t.h+r,o=t.headers?k(t.headers):{};return null!==e&&0<e.length&&(o.Authorization="Firebase "+e),o["X-Firebase-Storage-Version"]="webjs/"+("undefined"!=typeof firebase?firebase.SDK_VERSION:"AppManager"),new ot(r,t.method,o,t.body,t.c,t.g,t.j,t.a,t.timeout,0,n)},ct=function(){},st=function(t){this.b=firebase.Promise.reject(t)};st.prototype.a=function(){return this.b},st.prototype.cancel=function(){};var lt=function(){this.a={},this.b=Number.MIN_SAFE_INTEGER},ft=function(t,e){function n(){delete o.a[r]}var r=t.b;t.b++,t.a[r]=e;var o=t;e.a().then(n,n)},pt=function(t){E(t.a,function(t,e){e&&e.cancel(!0)}),t.a={}},ht=function(t,e,n,r,o){if(this.a=t,this.g=null,null!==this.a&&(t=this.a.options,j(t))){if(t=t.storageBucket||null,null==t)t=null;else{var a=null;try{a=F(t)}catch(t){}if(null!==a){if(""!==a.path)throw new h("invalid-default-bucket","Invalid default bucket '"+t+"'.");t=a.bucket}}this.g=t}this.o=e,this.m=n,this.j=o,this.l=r,this.c=12e4,this.b=6e4,this.h=new lt,this.f=!1},dt=function(t){return null!==t.a&&j(t.a.INTERNAL)&&j(t.a.INTERNAL.getToken)?t.a.INTERNAL.getToken().then(function(t){return j(t)?t.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};ht.prototype.bucket=function(){if(this.f)throw w();return this.g};var bt,yt=function(t,e,n){return t.f?new st(w()):(e=t.m(e,n,null===t.a,t.j),ft(t.h,e),e)},gt=-1!=et.indexOf("Opera"),wt=-1!=et.indexOf("Trident")||-1!=et.indexOf("MSIE"),vt=-1!=et.indexOf("Edge"),mt=!(-1==et.indexOf("Gecko")||-1!=et.toLowerCase().indexOf("webkit")&&-1==et.indexOf("Edge")||-1!=et.indexOf("Trident")||-1!=et.indexOf("MSIE")||-1!=et.indexOf("Edge")),Et=-1!=et.toLowerCase().indexOf("webkit")&&-1==et.indexOf("Edge");t:{var kt="",xt=function(){var t=et;return mt?/rv\:([^\);]+)(\)|;)/.exec(t):vt?/Edge\/([\d\.]+)/.exec(t):wt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Et?/WebKit\/(\S+)/.exec(t):gt?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(xt&&(kt=xt?xt[1]:""),wt){var Rt,At=u.document;if(Rt=At?At.documentMode:void 0,null!=Rt&&Rt>parseFloat(kt)){bt=String(Rt);break t}}bt=kt}var St=bt,Ut={},Tt=function(t){return L(t,function(){for(var e=0,n=N(String(St)).split("."),r=N(String(t)).split("."),o=Math.max(n.length,r.length),a=0;0==e&&a<o;a++){var i=n[a]||"",u=r[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],u=/(\d*)(\D*)(.*)/.exec(u)||["","","",""],0==i[0].length&&0==u[0].length)break;e=B(0==i[1].length?0:parseInt(i[1],10),0==u[1].length?0:parseInt(u[1],10))||B(0==i[2].length,0==u[2].length)||B(i[2],u[2]),i=i[3],u=u[3]}while(0==e)}return 0<=e})},Ot=function(t){var e=u.BlobBuilder||u.WebKitBlobBuilder;if(c(e)){for(var e=new e,n=0;n<arguments.length;n++)e.append(arguments[n]);return e.getBlob()}if(e=Array.prototype.slice.call(arguments),n=u.BlobBuilder||u.WebKitBlobBuilder,c(n)){for(var n=new n,r=0;r<e.length;r++)n.append(e[r],void 0);e=n.getBlob(void 0)}else{if(!c(u.Blob))throw Error("This browser doesn't seem to support creating Blobs");e=new Blob(e,{})}return e},jt=function(t,e,n){return c(n)||(n=t.size),t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?mt&&!Tt("13.0")||Et&&!Tt("537.1")?(0>e&&(e+=t.size),0>e&&(e=0),0>n&&(n+=t.size),n<e&&(n=e),t.slice(e,n-e)):t.slice(e,n):null},Ct=function(t,e){return e},It=function(t,e,n,r){this.c=t,this.b=e||t,this.writable=!!n,this.a=r||Ct},Lt=null,Nt=function(){if(Lt)return Lt;var t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));var e=new It("name");return e.a=function(t,e){return!C(e)||2>e.length?e:R(e)},t.push(e),e=new It("size"),e.a=function(t,e){return j(e)?+e:e},t.push(e),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),t.push(new It("downloadTokens","downloadURLs",!1,function(t,e){if(!(C(e)&&0<e.length))return[];var n=encodeURIComponent;return e.split(",").map(function(e){var r=t.fullPath,r="https://firebasestorage.googleapis.com/v0"+("/b/"+n(t.bucket)+"/o/"+n(r));return e=Z({alt:"media",token:e}),r+e})})),Lt=t},Bt=function(t,e){Object.defineProperty(t,"ref",{get:function(){return e.o(e,new P(t.bucket,t.fullPath))}})},Mt=function(t,e){for(var n={},r=e.length,o=0;o<r;o++){var a=e[o];a.writable&&(n[a.c]=t[a.b])}return JSON.stringify(n)},Pt=function(t){if(!t||"object"!=typeof t)throw"Expected Metadata object.";for(var e in t){var n=t[e];if("customMetadata"===e){if("object"!=typeof n)throw"Expected object for 'customMetadata' mapping."}else if(null!=n&&"object"==typeof n)throw"Mapping for '"+e+"' cannot be an object."}},_t=function(t,e,n){for(var r=e.length,o=e.length,a=0;a<e.length;a++)if(e[a].b){r=a;break}if(!(r<=n.length&&n.length<=o))throw r===o?(e=r,r=1===r?"argument":"arguments"):(e="between "+r+" and "+o,r="arguments"),new h("invalid-argument-count","Invalid argument count in `"+t+"`: Expected "+e+" "+r+", received "+n.length+".");for(a=0;a<n.length;a++)try{e[a].a(n[a])}catch(e){if(e instanceof Error)throw g(a,t,e.message);throw g(a,t,e)}},Ft=function(t,e){var n=this;this.a=function(e){n.b&&!c(e)||t(e)},this.b=!!e},Gt=function(t,e){return function(n){t(n),e(n)}},Dt=function(t,e){function n(t){if(!("string"==typeof t||t instanceof String))throw"Expected string."}var r;return r=t?Gt(n,t):n,new Ft(r,e)},zt=function(){return new Ft(function(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||I()&&t instanceof Blob))throw"Expected Blob or File."})},Xt=function(){return new Ft(function(t){if(!(("number"==typeof t||t instanceof Number)&&0<=t))throw"Expected a number 0 or greater."})},Ht=function(t,e){return new Ft(function(e){if(!(null===e||j(e)&&e instanceof Object))throw"Expected an Object.";j(t)&&t(e)},e)},Wt=function(){return new Ft(function(t){if(null!==t&&"function"!=s(t))throw"Expected a Function."},!0)},qt=function(t,e){I()&&t instanceof Blob?(this.i=t,e=t.size,t=t.type):(t instanceof ArrayBuffer?(e?this.i=new Uint8Array(t):(this.i=new Uint8Array(t.byteLength),this.i.set(new Uint8Array(t))),e=this.i.length):(e?this.i=t:(this.i=new Uint8Array(t.length),this.i.set(t)),e=t.length),t=""),this.a=e,this.b=t};qt.prototype.type=function(){return this.b},qt.prototype.slice=function(t,e){return I()&&this.i instanceof Blob?(t=jt(this.i,t,e),null===t?null:new qt(t)):(t=new Uint8Array(this.i.buffer,t,e-t),new qt(t,!0))};var Kt=function(t){var e=[];if(Array.prototype.push.apply(e,arguments),I())return e=e.map(function(t){return t instanceof qt?t.i:t}),new qt(Ot.apply(null,e));var e=e.map(function(t){return C(t)?H("raw",t).b.buffer:t.i.buffer}),n=0;e.forEach(function(t){n+=t.byteLength});var r=new Uint8Array(n),o=0;return e.forEach(function(t){t=new Uint8Array(t);for(var e=0;e<t.length;e++)r[o++]=t[e]}),new qt(r,!0)},Zt=function(t){if(!t)throw d()},Jt=function(t,e){return function(n,r){var o;t:{try{o=JSON.parse(r)}catch(t){o=null;break t}n=typeof o,o="object"==n&&null!=o||"function"==n?o:null}if(null===o)o=null;else{n={type:"file"},r=e.length;for(var a=0;a<r;a++){var i=e[a];n[i.b]=i.a(n,o[i.c])}Bt(n,t),o=n}return Zt(null!==o),o}},Vt=function(t){return function(e,n){return e=401===Y(e)?new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===Y(e)?new h("quota-exceeded","Quota for bucket '"+t.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===Y(e)?new h("unauthorized","User does not have permission to access '"+t.path+"'."):n,e.serverResponse=n.serverResponse,e}},$t=function(t){var e=Vt(t);return function(n,r){var o=e(n,r);return 404===Y(n)&&(o=new h("object-not-found","Object '"+t.path+"' does not exist.")),o.serverResponse=r.serverResponse,o}},Yt=function(t,e,n){var r=_(e);return t=new S(p+"/v0"+r,"GET",Jt(t,n),t.c),t.a=$t(e),t},Qt=function(t,e){var n=_(e);return t=new S(p+"/v0"+n,"DELETE",function(){},t.c),t.c=[200,204],t.a=$t(e),t},te=function(t,e,n){return n=n?k(n):{},n.fullPath=t.path,n.size=e.a,n.contentType||(t=e&&e.type()||"application/octet-stream",n.contentType=t),n},ee=function(t,e,n,r,o){var a,i="/b/"+encodeURIComponent(e.bucket)+"/o",u={"X-Goog-Upload-Protocol":"multipart"};a="";for(var c=0;2>c;c++)a+=Math.random().toString().slice(2);if(u["Content-Type"]="multipart/related; boundary="+a,o=te(e,r,o),c=Mt(o,n),r=Kt("--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+a+"\r\nContent-Type: "+o.contentType+"\r\n\r\n",r,"\r\n--"+a+"--"),null===r)throw y();return t=new S(p+"/v0"+i,"POST",Jt(t,n),t.b),t.b={name:o.fullPath},t.headers=u,t.body=r.i,t.a=Vt(e),t},ne=function(t,e,n,r){this.a=t,this.b=e,this.c=!!n,this.f=r||null},re=function(t,e){var n;try{n=t.a.getResponseHeader("X-Goog-Upload-Status")}catch(t){Zt(!1)}return Zt(l(e||["active"],n)),n},oe=function(t,e,n,r,o){var a="/b/"+encodeURIComponent(e.bucket)+"/o",i=te(e,r,o);return o={name:i.fullPath},a=p+"/v0"+a,r={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.a,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},n=Mt(i,n),t=new S(a,"POST",function(t){re(t);var e;try{e=t.a.getResponseHeader("X-Goog-Upload-URL")}catch(t){Zt(!1)}return Zt(C(e)),e},t.b),t.b=o,t.headers=r,t.body=n,t.a=Vt(e),t},ae=function(t,e,n,r){return t=new S(n,"POST",function(t){var e,n=re(t,["active","final"]);try{e=t.a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){Zt(!1)}return t=e,isFinite(t)&&(t=String(t)),t="string"==typeof t?/^\s*-?0x/i.test(t)?parseInt(t,16):parseInt(t,10):NaN,Zt(!isNaN(t)),new ne(t,r.a,"final"===n)},t.b),t.headers={"X-Goog-Upload-Command":"query"},t.a=Vt(e),t.f=!1,t},ie=function(t,e,n,r,o,a,i){var u=new ne(0,0);if(i?(u.a=i.a,u.b=i.b):(u.a=0,u.b=r.a),r.a!==u.b)throw new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var c=i=u.b-u.a;0<o&&(c=Math.min(c,o));var s=u.a;if(o={"X-Goog-Upload-Command":c===i?"upload, finalize":"upload","X-Goog-Upload-Offset":u.a},i=r.slice(s,s+c),null===i)throw y();return n=new S(n,"POST",function(t,n){var o,i=re(t,["active","final"]),s=u.a+c,l=r.a;return o="final"===i?Jt(e,a)(t,n):null,new ne(s,l,"final"===i,o)},e.b),n.headers=o,n.body=i.i,n.l=null,n.a=Vt(t),n.f=!1,n},ue=function(t,e,n,r,o,a){this.L=t,this.c=e,this.l=n,this.f=o,this.h=a||null,this.s=r,this.m=0,this.D=this.u=!1,this.B=[],this.S=262144<this.f.a,this.b="running",this.a=this.v=this.g=null,this.j=1;var i=this;this.F=function(t){i.a=null,i.j=1,"storage/canceled"===t.code?(i.u=!0,ge(i)):(i.g=t,ye(i,"error"))},this.P=function(t){i.a=null,"storage/canceled"===t.code?ge(i):(i.g=t,ye(i,"error"))},this.A=this.o=null,this.C=A(function(t,e){i.o=t,i.A=e,ce(i)}),this.C.then(null,function(){})},ce=function(t){"running"===t.b&&null===t.a&&(t.S?null===t.v?le(t):t.u?fe(t):t.D?he(t):pe(t):de(t))},se=function(t,e){dt(t.c).then(function(n){switch(t.b){case"running":e(n);break;case"canceling":ye(t,"canceled");break;case"pausing":ye(t,"paused")}})},le=function(t){se(t,function(e){var n=oe(t.c,t.l,t.s,t.f,t.h);t.a=yt(t.c,n,e),t.a.a().then(function(e){t.a=null,t.v=e,t.u=!1,ge(t)},this.F)})},fe=function(t){var e=t.v;se(t,function(n){var r=ae(t.c,t.l,e,t.f);t.a=yt(t.c,r,n),t.a.a().then(function(e){t.a=null,be(t,e.a),t.u=!1,e.c&&(t.D=!0),ge(t)},t.F)})},pe=function(t){var e=262144*t.j,n=new ne(t.m,t.f.a),r=t.v;se(t,function(o){var a;try{a=ie(t.l,t.c,r,t.f,e,t.s,n)}catch(e){return t.g=e,void ye(t,"error")}t.a=yt(t.c,a,o),t.a.a().then(function(e){33554432>262144*t.j&&(t.j*=2),t.a=null,be(t,e.a),e.c?(t.h=e.f,ye(t,"success")):ge(t)},t.F)})},he=function(t){se(t,function(e){var n=Yt(t.c,t.l,t.s);t.a=yt(t.c,n,e),t.a.a().then(function(e){t.a=null,t.h=e,ye(t,"success")},t.P)})},de=function(t){se(t,function(e){var n=ee(t.c,t.l,t.s,t.f,t.h);t.a=yt(t.c,n,e),t.a.a().then(function(e){t.a=null,t.h=e,be(t,t.f.a),ye(t,"success")},t.F)})},be=function(t,e){var n=t.m;t.m=e,t.m>n&&ve(t)},ye=function(t,e){if(t.b!==e)switch(e){case"canceling":t.b=e,null!==t.a&&t.a.cancel();break;case"pausing":t.b=e,null!==t.a&&t.a.cancel();break;case"running":var n="paused"===t.b;t.b=e,n&&(ve(t),ce(t));break;case"paused":t.b=e,ve(t);break;case"canceled":t.g=b(),t.b=e,ve(t);break;case"error":t.b=e,ve(t);break;case"success":t.b=e,ve(t)}},ge=function(t){switch(t.b){case"pausing":ye(t,"paused");break;case"canceling":ye(t,"canceled");break;case"running":ce(t)}};ue.prototype.w=function(){return new tt(this.m,this.f.a,O(this.b),this.h,this,this.L)},ue.prototype.M=function(t,e,n,r){function o(t){try{return void i(t)}catch(t){}try{if(u(t),!(c(t.next)||c(t.error)||c(t.complete)))throw""}catch(t){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties."}}function a(t){return function(e,n,r){null!==t&&_t("on",t,arguments);var o=new G(e,n,r);return we(s,o),function(){var t=s.B,e=t.indexOf(o);-1!==e&&t.splice(e,1)}}}var i=Wt().a,u=Ht(null,!0).a;_t("on",[Dt(function(){if("state_changed"!==t)throw"Expected one of the event types: [state_changed]."}),Ht(o,!0),Wt(),Wt()],arguments);var s=this,l=[Ht(function(t){if(null===t)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";o(t)}),Wt(),Wt()];return c(e)||c(n)||c(r)?a(null)(e,n,r):a(l)},ue.prototype.then=function(t,e){return this.C.then(t,e)};var we=function(t,e){t.B.push(e),Ee(t,e)},ve=function(t){me(t),Array.prototype.slice.call(t.B).forEach(function(e){Ee(t,e)})},me=function(t){if(null!==t.o){var e=!0;switch(O(t.b)){case"success":M(t.o.bind(null,t.w()))();break;case"canceled":case"error":M(t.A.bind(null,t.g))();break;default:e=!1}e&&(t.o=null,t.A=null)}},Ee=function(t,e){switch(O(t.b)){case"running":case"paused":null!==e.c&&M(e.c.bind(e,t.w()))();break;case"success":null!==e.b&&M(e.b.bind(e))();break;case"canceled":case"error":null!==e.a&&M(e.a.bind(e,t.g))();break;default:null!==e.a&&M(e.a.bind(e,t.g))()}};ue.prototype.O=function(){_t("resume",[],arguments);var t="paused"===this.b||"pausing"===this.b;return t&&ye(this,"running"),t},ue.prototype.N=function(){_t("pause",[],arguments);var t="running"===this.b;return t&&ye(this,"pausing"),t},ue.prototype.cancel=function(){_t("cancel",[],arguments);var t="running"===this.b||"pausing"===this.b;return t&&ye(this,"canceling"),t};var ke=function(t,e){if(this.b=t,e)this.a=e instanceof P?e:F(e);else{if(t=t.bucket(),null===t)throw new h("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");this.a=new P(t,"")}};ke.prototype.toString=function(){return _t("toString",[],arguments),"gs://"+this.a.bucket+"/"+this.a.path};var xe=function(t,e){return new ke(t,e)};t=ke.prototype,t.H=function(t){_t("child",[Dt()],arguments);var e=x(this.a.path,t);return xe(this.b,new P(this.a.bucket,e))},t.ka=function(){var t;if(t=this.a.path,0==t.length)t=null;else{var e=t.lastIndexOf("/");t=-1===e?"":t.slice(0,e)}return null===t?null:xe(this.b,new P(this.a.bucket,t))},t.ma=function(){return xe(this.b,new P(this.a.bucket,""))},t.U=function(){return this.a.bucket},t.fa=function(){return this.a.path},t.ja=function(){return R(this.a.path)},t.oa=function(){return this.b.l},t.Z=function(t,e){return _t("put",[zt(),new Ft(Pt,!0)],arguments),Re(this,"put"),new ue(this,this.b,this.a,Nt(),new qt(t),e)},t.$=function(t,e,n){_t("putString",[Dt(),Dt(z,!0),new Ft(Pt,!0)],arguments),Re(this,"putString");var r=H(j(e)?e:"raw",t),o=n?k(n):{};return!j(o.contentType)&&j(r.a)&&(o.contentType=r.a),new ue(this,this.b,this.a,Nt(),new qt(r.b,!0),o)},t.X=function(){_t("delete",[],arguments),Re(this,"delete");var t=this;return dt(this.b).then(function(e){var n=Qt(t.b,t.a);return yt(t.b,n,e).a()})},t.I=function(){_t("getMetadata",[],arguments),Re(this,"getMetadata");var t=this;return dt(this.b).then(function(e){var n=Yt(t.b,t.a,Nt());return yt(t.b,n,e).a()})},t.aa=function(t){_t("updateMetadata",[new Ft(Pt,void 0)],arguments),Re(this,"updateMetadata");var e=this;return dt(this.b).then(function(n){var r=e.b,o=e.a,a=t,i=Nt(),u=_(o),u=p+"/v0"+u,a=Mt(a,i),r=new S(u,"PATCH",Jt(r,i),r.c);return r.headers={"Content-Type":"application/json; charset=utf-8"},r.body=a,r.a=$t(o),yt(e.b,r,n).a()})},t.Y=function(){return _t("getDownloadURL",[],arguments),Re(this,"getDownloadURL"),this.I().then(function(t){if(t=t.downloadURLs[0],j(t))return t;throw new h("no-download-url","The given file does not have any download URLs.")})};var Re=function(t,e){if(""===t.a.path)throw new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")},Ae=function(t,e){this.a=new ht(t,function(t,e){return new ke(t,e)},ut,this,j(e)?e:new ct),this.b=t,this.c=new Se(this)};t=Ae.prototype,t.ba=function(t){_t("ref",[Dt(function(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments);var e=new ke(this.a);return c(t)?e.H(t):e},t.ca=function(t){return _t("refFromURL",[Dt(function(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{F(t)}catch(t){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new ke(this.a,t)},t.ha=function(){return this.a.b},t.ea=function(t){_t("setMaxUploadRetryTime",[Xt()],arguments),this.a.b=t},t.ga=function(){return this.a.c},t.da=function(t){_t("setMaxOperationRetryTime",[Xt()],arguments),this.a.c=t},t.T=function(){return this.b},t.R=function(){return this.c};var Se=function(t){this.a=t};Se.prototype.b=function(){var t=this.a.a;t.f=!0,t.a=null,pt(t.h)};var Ue=function(t,e,n){Object.defineProperty(t,e,{get:n})};ke.prototype.toString=ke.prototype.toString,ke.prototype.child=ke.prototype.H,ke.prototype.put=ke.prototype.Z,ke.prototype.putString=ke.prototype.$,ke.prototype.delete=ke.prototype.X,ke.prototype.getMetadata=ke.prototype.I,ke.prototype.updateMetadata=ke.prototype.aa,ke.prototype.getDownloadURL=ke.prototype.Y,Ue(ke.prototype,"parent",ke.prototype.ka),Ue(ke.prototype,"root",ke.prototype.ma),Ue(ke.prototype,"bucket",ke.prototype.U),Ue(ke.prototype,"fullPath",ke.prototype.fa),Ue(ke.prototype,"name",ke.prototype.ja),Ue(ke.prototype,"storage",ke.prototype.oa),Ae.prototype.ref=Ae.prototype.ba,Ae.prototype.refFromURL=Ae.prototype.ca,Ue(Ae.prototype,"maxOperationRetryTime",Ae.prototype.ga),Ae.prototype.setMaxOperationRetryTime=Ae.prototype.da,Ue(Ae.prototype,"maxUploadRetryTime",Ae.prototype.ha),Ae.prototype.setMaxUploadRetryTime=Ae.prototype.ea,Ue(Ae.prototype,"app",Ae.prototype.T),Ue(Ae.prototype,"INTERNAL",Ae.prototype.R),Se.prototype.delete=Se.prototype.b,Ae.prototype.capi_=function(t){p=t},ue.prototype.on=ue.prototype.M,ue.prototype.resume=ue.prototype.O,ue.prototype.pause=ue.prototype.N,ue.prototype.cancel=ue.prototype.cancel,Ue(ue.prototype,"snapshot",ue.prototype.w),Ue(tt.prototype,"bytesTransferred",tt.prototype.V),Ue(tt.prototype,"totalBytes",tt.prototype.qa),Ue(tt.prototype,"state",tt.prototype.na),Ue(tt.prototype,"metadata",tt.prototype.ia),Ue(tt.prototype,"downloadURL",tt.prototype.W),Ue(tt.prototype,"task",tt.prototype.pa),Ue(tt.prototype,"ref",tt.prototype.la),U.STATE_CHANGED="state_changed",T.RUNNING="running",T.PAUSED="paused",T.SUCCESS="success",T.CANCELED="canceled",T.ERROR="error",D.RAW="raw",D.BASE64="base64",D.BASE64URL="base64url",D.DATA_URL="data_url",function(){function t(t){return new Ae(t)}var e={TaskState:T,TaskEvent:U,StringFormat:D,Storage:Ae,Reference:ke};if("undefined"==typeof firebase)throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("storage",t,e)}()}).call(this);