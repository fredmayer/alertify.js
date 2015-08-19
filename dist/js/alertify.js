<<<<<<< HEAD
var Alertify=function(t,e){"use strict";var i,n=t.document;i=function(){function t(t){return n.getElementById(t)}function i(t){"undefined"!=typeof f&&t.parentNode===f&&f.removeChild(t)}function a(){if(!u){var t=n.createElement("fakeelement"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(var a in i)if(i.hasOwnProperty(a)&&t.style[a]!==e){u=i[a],h=!0;break}}return{type:u,supported:h}}var r,o,l,s,f,c,d,u,p=!1,y=[],h=!1,g={buttons:{holder:"<nav class='alertify-buttons'>{{buttons}}</nav>",ok:"<button class='alertify-button alertify-button-ok' id='alertify-ok'>{{ok}}</button>",cancel:"<button class='alertify-button alertify-button-cancel' id='alertify-cancel'>{{cancel}}</button>"},input:"<div class='alertify-text-wrapper'><input type='text' class='alertify-text' id='alertify-text'></div>",message:"<p class='alertify-message'>{{message}}</p>",log:"<div class='alertify-log{{class}}'>{{message}}</div>"},m={defaultOkLabel:"Ok",okLabel:this.defaultOkLabel,defaultCancelLabel:"Cancel",cancelLabel:this.defaultCancelLabel,defaultMaxLogItems:2,maxLogItems:this.defaultMaxLogItems,promptValue:"",promptPlaceholder:"",delay:5e3,defaultDelay:5e3,transition:e,addListeners:function(t,e){var i="undefined"!=typeof l,n="undefined"!=typeof o,a=this,r=function(){a.hide(),i&&l.removeEventListener("click",s),n&&o.removeEventListener("click",f)},s=function(e){r(e),"function"==typeof t&&("undefined"==typeof d?t(e):t(d.value,e))},f=function(t){r(t),"function"==typeof e&&e(t)};i&&l.addEventListener("click",s),n&&o.addEventListener("click",f)},build:function(t){var e=(t.cssClass||"",g.buttons.ok),i="<div class='alertify-dialog'><div class='alertify-inner'>"+g.message.replace("{{message}}",t.message);return("confirm"===t.type||"prompt"===t.type)&&(e=g.buttons.cancel+g.buttons.ok),"prompt"===t.type&&(i+=g.input),i=(i+g.buttons.holder+"</div></div>").replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel),s.className="alertify",i},closeLogOnClick:!1,closeLogOnClickDefault:!1,setCloseLogOnClick:function(t){this.closeLogOnClick=!!t},close:function(t,e){var n,a,r=e&&!isNaN(e)?+e:this.delay,o=this;this.closeLogOnClick&&t.addEventListener("click",function(){n(t)}),a=function(t){t.stopPropagation(),this.removeEventListener(o.transition.type,a),i(this)},n=function(t){var e=1;"undefined"!=typeof t&&t.parentNode===f&&(o.transition.supported&&(t.addEventListener(o.transition.type,a),t.className+=" alertify-log-hide",e=500),setTimeout(function(){i(t)},e||1))},0!==e&&setTimeout(function(){n(t)},r)},dialog:function(t,e,i,n){this.init(),y.push({type:e,message:t,onOkay:i,onCancel:n}),p||this.setup()},hide:function(){var t,e=this;y.splice(0,1),y.length>0?this.setup(!0):(p=!1,t=function(i){i.stopPropagation(),s.removeEventListener(e.transition.type,t)},this.transition.supported&&s.addEventListener(this.transition.type,t),s.className="alertify alertify-hide alertify-hidden")},init:function(){this.injectCss(),null===t("alertify")&&(p=!1,y=[],s=n.createElement("div"),s.setAttribute("id","alertify"),s.className="alertify alertify-hidden",n.body.appendChild(s)),null===t("alertify-logs")&&(f=n.createElement("div"),f.setAttribute("id","alertify-logs"),f.className="alertify-logs",n.body.appendChild(f)),this.transition=a()},log:function(t,e,i){this.init(),f.className="alertify-logs";var n=f.childNodes.length-this.maxLogItems;if(n>=0)for(var a=0,r=n+1;r>a;a++)this.close(f.childNodes[a],1);this.notify(t,e,i)},notify:function(t,e,i){var a=n.createElement("div");a.className="alertify-log alertify-log-"+(e||"default"),a.innerHTML=t,"function"==typeof i&&a.addEventListener("click",i),f.appendChild(a),setTimeout(function(){a.className+=" alertify-log-show"},50),this.close(a,this.delay)},setup:function(i){var n=y[0],a=this,r=function(t){s.removeEventListener(a.transition.type,r)};p=!0,this.transition.supported&&!i&&s.addEventListener(this.transition.type,r),s.innerHTML=this.build(n),l=t("alertify-ok")||e,o=t("alertify-cancel")||e,d=t("alertify-text")||e,c=t("alertify-form")||e,d&&("string"==typeof this.promptPlaceholder&&(d.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(d.value=this.promptValue)),this.addListeners(n.onOkay,n.onCancel)},okBtn:function(t){return this.okLabel=t,this},setDelay:function(t){var e=parseInt(t||0,10);return this.delay=isNaN(e)?this.defultDelay:t,this},cancelBtn:function(t){return this.cancelLabel=t,this},setMaxLogItems:function(t){this.maxLogItems=parseInt(t||this.defaultMaxLogItems)},reset:function(){this.okBtn(this.defaultOkLabel),this.cancelBtn(this.defaultCancelLabel),this.setMaxLogItems(),this.promptValue="",this.promptPlaceholder="",this.delay=this.defaultDelay,this.setCloseLogOnClick(this.closeLogOnClickDefault)},injectCss:function(){if(!r){var t=n.getElementsByTagName("head")[0],e=n.createElement("style");e.type="text/css",e.innerHTML=".alertify,.alertify *,.alertify-button{box-sizing:border-box}.alertify{font-family:inherit;position:fixed;background-color:rgba(0,0,0,.6);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:99999}.alertify .alertify-alert,.alertify .alertify-dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alertify-alert .alertify-inner,.alertify .alertify-dialog .alertify-inner{width:400px;max-width:95%;margin:0 auto;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alertify-buttons{text-align:right}.alertify,.alertify-hide,.alertify-log,.alertify-show{box-sizing:border-box;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.alertify-dialog{padding:12px}.alertify-hidden{opacity:0;display:none}.alertify-logs{position:fixed;z-index:5000;bottom:0;right:0}.alertify-log{display:block;margin-top:10px;position:relative;right:-100%;opacity:0}.alertify-log-show{right:0;opacity:1}.alertify-log-hide{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);opacity:0}.alertify-inner{text-align:center}.alertify-text{margin-bottom:15px;width:100%;font-size:100%;border:1px solid #CCC;padding:12px}.alertify .alertify-message{padding:12px;margin:0;text-align:left}.alertify-button{background:0 0;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-weight:500;font-size:14px;text-decoration:none;cursor:pointer;border-radius:2px}.alertify-button:active,.alertify-button:hover{background-color:rgba(0,0,0,.05)}.alertify-log{float:right;clear:right;background:rgba(0,0,0,.8);padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.alertify-log.alertify-log-error{background:rgba(244,67,54,.8)}.alertify-log.alertify-log-success{background:rgba(76,175,80,.9)}",t.insertBefore(e,t.firstChild),r=!0}}};return{reset:function(){return m.reset(),this},alert:function(t,e,i){return m.dialog(t,"alert",e,i),this},confirm:function(t,e,i){return m.dialog(t,"confirm",e,i),this},prompt:function(t,e,i){return m.dialog(t,"prompt",e,i),this},log:function(t,e){return m.log(t,"default",e),this},success:function(t,e){return m.log(t,"success",e),this},error:function(t,e){return m.log(t,"error",e),this},cancelBtn:function(t){return m.cancelBtn(t),this},okBtn:function(t){return m.okBtn(t),this},delay:function(t){return m.setDelay(t),this},placeholder:function(t){return m.promptPlaceholder=t,this},defaultValue:function(t){return m.promptValue=t,this},maxLogItems:function(t){return m.setMaxLogItems(t),this},closeLogOnClick:function(t){return m.setCloseLogOnClick(!!t),this}}},"undefined"!=typeof module&&module&&module.exports?module.exports=i:"function"==typeof define&&define.amd?define(function(){return i}):t.alertify=new i}("undefined"!=typeof window?window:{});
=======
var Alertify=function(e,t){"use strict";var n,i=e.document;n=function(){function n(e,t,n){for(var o="undefined"!=typeof n?[n]:i.styleSheets,s=0,r=o.length;r>s;s++)if(n=o[s],n.cssRules)for(var a=0,l=n.cssRules.length;l>a;a++){var c=n.cssRules[a];if(c.selectorText&&-1!==c.selectorText.split(",").indexOf(t))return c.style[e]}return null}var o,s,r,a,l,c,u,f,d,y,p,h,m,v={},b={},g=!1,k={ENTER:13,ESC:27,SPACE:32},E=[];return b={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',cancel:'<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},m=function(){var e,n,o=!1,s=i.createElement("fakeelement"),r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(e in r)if(r.hasOwnProperty(e)&&s.style[e]!==t){n=r[e],o=!0;break}return{type:n,supported:o}},o=function(e){return i.getElementById(e)},v={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,buttonReverse:!1,buttonFocus:"ok",transition:t,keydown:!1,addListeners:function(t){var n,i,o,c,u,f,d="undefined"!=typeof r,y="undefined"!=typeof s,p="undefined"!=typeof h,m="",v=this;i=function(e){e.preventDefault(),c(e),"undefined"!=typeof h&&(m=h.value),"function"==typeof t&&("undefined"!=typeof h?t(!0,m):t(!0))},o=function(e){e.preventDefault(),c(e),"function"==typeof t&&t(!1)},c=function(){v.hide(),e.removeEventListener("keyup",u),e.removeEventListener("keydown",n),e.removeEventListener("focus",f),d&&r.removeEventListener("click",i),y&&s.removeEventListener("click",o)},u=function(e){var t=e.keyCode;v.keydown=!1,t===k.SPACE&&!p||p&&t===k.ENTER?i(e):t===k.ESC&&y&&o(e)},n=function(){v.keydown=!0},f=function(){p?h.focus():!y||v.buttonReverse?r.focus():s.focus()},a.addEventListener("focus",f),l.addEventListener("focus",f),d&&r.addEventListener("click",i),y&&s.addEventListener("click",o),e.addEventListener("keyup",u),e.addEventListener("keydown",n),this.transition.supported||this.setFocus()},handleErrors:function(){if("undefined"!=typeof e.onerror){var t=this;return e.onerror=function(e,n,i){t.error("["+e+" on line "+i+" of "+n+"]",0)},!0}return!1},appendButtons:function(e,t){return this.buttonReverse?t+e:e+t},build:function(e){var t="",n=e.type,i=e.message,o=e.cssClass||"";switch(t+='<div class="alertify-dialog">',t+='<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>',"none"===v.buttonFocus&&(t+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'),"prompt"===n&&(t+='<div id="alertify-form">'),t+='<article class="alertify-inner">',t+=b.message.replace("{{message}}",i),"prompt"===n&&(t+=b.input),t+=b.buttons.holder,t+="</article>","prompt"===n&&(t+="</div>"),t+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',t+="</div>",n){case"confirm":t=t.replace("{{buttons}}",this.appendButtons(b.buttons.cancel,b.buttons.ok)),t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":t=t.replace("{{buttons}}",this.appendButtons(b.buttons.cancel,b.buttons.submit)),t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":t=t.replace("{{buttons}}",b.buttons.ok),t=t.replace("{{ok}}",this.labels.ok)}return d.className="alertify alertify-"+n+" "+o,f.className="alertify-cover",t},close:function(e,t){var i,o,s=t&&!isNaN(t)?+t:this.delay,r=this;e.addEventListener("click",function(){i(e)}),o=function(e){e.stopPropagation(),this.removeEventListener(r.transition.type,o),y.removeChild(this),y.hasChildNodes()||(y.className+=" alertify-logs-hidden")},i=function(e){if("undefined"!=typeof e&&e.parentNode===y)if(r.transition.supported){e.addEventListener(r.transition.type,o),e.className+=" alertify-log-hide";var t=(n("transition-duration",".alertify-log-hide")||n("-webkit-transition-duration",".alertify-log-hide")||n("-moz-transition-duration",".alertify-log-hide")||n("-o-transition-duration",".alertify-log-hide")||"0").toLowerCase(),i=parseInt(t),s=1;(!i||isNaN(i))&&(i=500),t.indexOf("ms")>-1?i+=s:t.indexOf("s")>-1&&(i*=1e3,i+=s),setTimeout(function(){"undefined"!=typeof e&&e.parentNode===y&&y.removeChild(e)},i)}else y.removeChild(e),y.hasChildNodes()||(y.className+=" alertify-logs-hidden")},0!==t&&setTimeout(function(){i(e)},s)},dialog:function(e,t,n,o,s){u=i.activeElement;var r=function(){y&&null!==y.scrollTop&&f&&null!==f.scrollTop||r()};if("string"!=typeof e)throw new Error("message must be a string");if("string"!=typeof t)throw new Error("type must be a string");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("fn must be a function");return this.init(),r(),E.push({type:t,message:e,callback:n,placeholder:o,cssClass:s}),g||this.setup(),this},extend:function(e){if("string"!=typeof e)throw new Error("extend method must have exactly one parameter");return function(t,n){return this.log(t,e,n),this}},hide:function(){var e,t=this;E.splice(0,1),E.length>0?this.setup(!0):(g=!1,e=function(n){n.stopPropagation(),d.removeEventListener(t.transition.type,e)},this.transition.supported?(d.addEventListener(this.transition.type,e),d.className="alertify alertify-hide alertify-hidden"):d.className="alertify alertify-hide alertify-hidden alertify-isHidden",f.className="alertify-cover alertify-cover-hidden",setTimeout(function(){t.keydown?i.body.focus():u.focus()}))},init:function(){null==o("alertify-cover")&&(f=i.createElement("div"),f.setAttribute("id","alertify-cover"),f.className="alertify-cover alertify-cover-hidden",i.body.appendChild(f)),null==o("alertify")&&(g=!1,E=[],d=i.createElement("section"),d.setAttribute("id","alertify"),d.className="alertify alertify-hidden",i.body.appendChild(d)),null==o("alertify-logs")&&(y=i.createElement("section"),y.setAttribute("id","alertify-logs"),y.className="alertify-logs alertify-logs-hidden",i.body.appendChild(y)),i.body.setAttribute("tabindex","0"),this.transition=m()},log:function(e,t,n,i){var o=function(){y&&null!==y.scrollTop||o()};return this.init(),o(),y.className="alertify-logs",this.notify(e,t,n,i),this},notify:function(e,t,n,o){var s=i.createElement("article");s.className="alertify-log"+("string"==typeof t&&""!==t?" alertify-log-"+t:""),s.innerHTML=e,"function"==typeof o&&s.addEventListener("click",o),y.appendChild(s),setTimeout(function(){s.className=s.className+" alertify-log-show"},50),this.close(s,n)},set:function(e){var t;if("object"!=typeof e&&e instanceof Array)throw new Error("args must be an object");for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},setFocus:function(){h?(h.focus(),h.select()):c.focus()},setup:function(e){var n,i=E[0],u=this;g=!0,n=function(e){e.stopPropagation(),u.setFocus(),d.removeEventListener(u.transition.type,n)},this.transition.supported&&!e&&d.addEventListener(this.transition.type,n),d.innerHTML=this.build(i),a=o("alertify-resetFocus"),l=o("alertify-resetFocusBack"),r=o("alertify-ok")||t,s=o("alertify-cancel")||t,c="cancel"===v.buttonFocus?s:"none"===v.buttonFocus?o("alertify-noneFocus"):r,h=o("alertify-text")||t,p=o("alertify-form")||t,"string"==typeof i.placeholder&&""!==i.placeholder&&(h.value=i.placeholder),e&&this.setFocus(),this.addListeners(i.callback)}},{alert:function(e,t,n){return v.dialog(e,"alert",t,"",n),this},confirm:function(e,t,n){return v.dialog(e,"confirm",t,"",n),this},extend:v.extend,init:v.init,log:function(e,t,n,i){return v.log(e,t,n,i),this},prompt:function(e,t,n,i){return v.dialog(e,"prompt",t,n,i),this},success:function(e,t,n){return v.log(e,"success",t,n),this},error:function(e,t,n){return v.log(e,"error",t,n),this},set:function(e){v.set(e)},labels:v.labels,debug:v.handleErrors}},"undefined"!=typeof module&&module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return new n}):e.alertify=new n}("undefined"!=typeof window?window:{});
>>>>>>> 6dd022a77acf1effbf51cdec730a6510e621c5df
