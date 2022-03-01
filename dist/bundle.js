(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();const e=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==t.g)return t.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===e.trustedTypes&&(e.trustedTypes={createPolicy:(t,e)=>e});const i=Object.freeze([]),o=[],r=e.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let s=r;const n=[];function a(){if(n.length)throw n.shift()}function l(t){try{t.call()}catch(t){n.push(t),setTimeout(a,0)}}const c=`fast-${Math.random().toString(36).substring(2,8)}`,h=`${c}{`,d=`}${c}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(s!==r)throw new Error("The HTML policy can only be set once.");s=t},createHTML:t=>s.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(c),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${c}:`,"")),createInterpolationPlaceholder:t=>`${h}${t}${d}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${c}:${t}--\x3e`,queueUpdate(t){o.length<1&&window.requestAnimationFrame(u.processUpdates),o.push(t)},processUpdates(){let t=0;for(;t<o.length;)if(l(o[t]),t++,t>1024){for(let e=0,i=o.length-t;e<i;e++)o[e]=o[e+t];o.length-=t,t=0}o.length=0},nextUpdate:()=>new Promise((t=>{u.queueUpdate(t)})),setAttribute(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});function f(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function p(t){const e=this.spillover,i=e.indexOf(t);-1!==i&&e.splice(i,1)}function g(t){const e=this.spillover,i=this.source;for(let o=0,r=e.length;o<r;++o)e[o].handleChange(i,t)}function b(t){return-1!==this.spillover.indexOf(t)}class v{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=f,this.unsubscribe=p,this.notify=g,this.has=b,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,i=this.sub2,o=this.source;void 0!==e&&e.handleChange(o,t),void 0!==i&&i.handleChange(o,t)}}class m{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const i=this.subscribers[t];void 0!==i&&i.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var i;if(e){let i=this.subscribers[e];void 0===i&&(this.subscribers[e]=i=new v(this.source)),i.subscribe(t)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new v(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var i;if(e){const i=this.subscribers[e];void 0!==i&&i.unsubscribe(t)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(t)}}const y=/(:|&&|\|\||if)/,w=new WeakMap,$=new WeakMap;let x,k=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class C{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==x&&x.watch(t,this.name),t[this.field]}setValue(t,e){const i=this.field,o=t[i];if(o!==e){t[i]=e;const r=t[this.callback];"function"==typeof r&&r.call(t,o,e),V(t).notify(this.name)}}}const F=Object.freeze({setArrayObserverFactory(t){k=t},getNotifier(t){let e=t.$fastController||w.get(t);return void 0===e&&(Array.isArray(t)?e=k(t):w.set(t,e=new m(t))),e},track(t,e){void 0!==x&&x.watch(t,e)},trackVolatile(){void 0!==x&&(x.needsRefresh=!0)},notify(t,e){V(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new C(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=$.get(t);if(void 0===e){let i=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==i;)e=$.get(i),i=Reflect.getPrototypeOf(i);e=void 0===e?[]:e.slice(0),$.set(t,e)}return e},binding(t,e,i=this.isVolatileBinding(t)){return new N(t,e,i)},isVolatileBinding:t=>y.test(t.toString())}),V=F.getNotifier,D=(F.trackVolatile,u.queueUpdate);function T(t,e){F.defineProperty(t,e)}let O=null;function S(t){O=t}class R{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return O}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}F.defineProperty(R.prototype,"index"),F.defineProperty(R.prototype,"length");const M=Object.seal(new R);class N extends v{constructor(t,e,i=!1){super(t,e),this.binding=t,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const i=x;x=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(t,e);return x=i,o}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const i=this.last,o=V(t),r=null===i?this.first:{};if(r.propertySource=t,r.propertyName=e,r.notifier=o,o.subscribe(this,e),null!==i){if(!this.needsRefresh){let e;x=void 0,e=i.propertySource[i.propertyName],x=this,t===e&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,D(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}class L{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function B(t){return t.map((t=>t instanceof L?B(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function E(t){return t.map((t=>t instanceof L?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}L.create=(()=>{if(u.supportsAdoptedStyleSheets){const t=new Map;return e=>new P(e,t)}return t=>new I(t)})();class P extends L{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=E(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=B(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let i=e.get(t);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(t),e.set(t,i)),i}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let A=0;class I extends L{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=E(t),this.styleSheets=B(t),this.styleClass="fast-style-class-"+ ++A}addStylesTo(t){const e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const r=document.createElement("style");r.innerHTML=e[o],r.className=i,t.append(r)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=e.length;i<o;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const H={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},z={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class j{constructor(t,e,i=e.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=o,this.converter=r,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===o&&void 0===r&&(this.converter=H)}setValue(t,e){const i=t[this.fieldName],o=this.converter;void 0!==o&&(e=o.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return F.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,i=this.guards;i.has(t)||"fromView"===e||u.queueUpdate((()=>{i.add(t);const o=t[this.fieldName];switch(e){case"reflect":const e=this.converter;u.setAttribute(t,this.attribute,void 0!==e?e.toView(o):o);break;case"boolean":u.setBooleanAttribute(t,this.attribute,o)}i.delete(t)}))}static collect(t,...e){const i=[];e.push(t.attributes);for(let o=0,r=e.length;o<r;++o){const r=e[o];if(void 0!==r)for(let e=0,o=r.length;e<o;++e){const o=r[e];"string"==typeof o?i.push(new j(t,o)):i.push(new j(t,o.property,o.attribute,o.mode,o.converter))}}return i}}function _(t,e){let i;function o(t,e){arguments.length>1&&(i.property=e);const o=t.constructor.attributes||(t.constructor.attributes=[]);o.push(i)}return arguments.length>1?(i={},void o(t,e)):(i=void 0===t?{}:t,o)}const q={mode:"open"},G={},U=new Map;class W{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const i=j.collect(t,e.attributes),o=new Array(i.length),r={},s={};for(let t=0,e=i.length;t<e;++t){const e=i[t];o[t]=e.attribute,r[e.name]=e,s[e.attribute]=e}this.attributes=i,this.observedAttributes=o,this.propertyLookup=r,this.attributeLookup=s,this.shadowOptions=void 0===e.shadowOptions?q:null===e.shadowOptions?void 0:Object.assign(Object.assign({},q),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?G:Object.assign(Object.assign({},G),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?L.create(e.styles):e.styles instanceof L?e.styles:L.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,i=e.prototype;for(let e=0,o=t.length;e<o;++e)F.defineProperty(i,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),U.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return U.get(t)}}function X(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}const Y=new WeakMap,K={bubbles:!0,composed:!0,cancelable:!0};function Q(t){return t.shadowRoot||Y.get(t)||null}class Z extends m{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const e=t.attachShadow(i);"closed"===i.mode&&Y.set(t,e)}const o=F.getAccessors(t);if(o.length>0){const e=this.boundObservables=Object.create(null);for(let i=0,r=o.length;i<r;++i){const r=o[i].name,s=t[r];void 0!==s&&(delete t[r],e[r]=s)}}}get isConnected(){return F.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,F.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=Q(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const i=t.behaviors;t.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(t){const e=Q(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const i=t.behaviors;t.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),i=t.length,o=[];for(let r=0;r<i;++r){const i=t[r];e.has(i)?e.set(i,e.get(i)+1):(e.set(i,1),o.push(i))}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].bind(t,M)}}removeBehaviors(t,e=!1){const i=this.behaviors;if(null===i)return;const o=t.length,r=[];for(let s=0;s<o;++s){const o=t[s];if(i.has(o)){const t=i.get(o)-1;0===t||e?i.delete(o)&&r.push(o):i.set(o,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<r.length;++e)r[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,M);const e=this.behaviors;if(null!==e)for(const[i]of e)i.bind(t,M);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[i]of e)i.unbind(t)}}onAttributeChangedCallback(t,e,i){const o=this.definition.attributeLookup[t];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},K),i)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const i=Object.keys(e);for(let o=0,r=i.length;o<r;++o){const r=i[o];t[r]=e[r]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,i=Q(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(i),t&&(this.view=t.render(e,i,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const i=W.forType(t.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return t.$fastController=new Z(t,i)}}function J(t){return class extends t{constructor(){super(),Z.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}const tt=Object.assign(J(HTMLElement),{from:t=>J(t),define:(t,e)=>new W(t,e).define().type}),et=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let o=et.get(i);void 0===o&&et.set(i,o=new Map),o.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=et.get(e);if(void 0!==i)return i.get(t)});class it{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Dt(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new gt(o,t,e))}}function ot(t){const e=t.slice(),i=Object.keys(t),o=i.length;let r;for(let s=0;s<o;++s)r=i[s],Bt(r)||(e[r]=t[r]);return e}const rt=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new gt(t,1,t),transient:t=>new gt(t,2,t)}),st=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:rt.singleton})}),nt=new Map;function at(t){return e=>Reflect.getOwnMetadata(t,e)}let lt=null;const ct=Object.freeze({createContainer:t=>new Ft(null,Object.assign({},st.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:ct.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(kt,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||ct.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new Ft(t,Object.assign({},st.default,e,{parentLocator:ct.findParentContainer})):lt||(lt=new Ft(null,Object.assign({},st.default,e,{parentLocator:()=>null}))),getDesignParamtypes:at("design:paramtypes"),getAnnotationParamtypes:at("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=nt.get(t);if(void 0===e){const i=t.inject;if(void 0===i){const i=ct.getDesignParamtypes(t),o=ct.getAnnotationParamtypes(t);if(void 0===i)if(void 0===o){const i=Object.getPrototypeOf(t);e="function"==typeof i&&i!==Function.prototype?ot(ct.getDependencies(i)):[]}else e=ot(o);else if(void 0===o)e=ot(i);else{e=ot(i);let t,r=o.length;for(let i=0;i<r;++i)t=o[i],void 0!==t&&(e[i]=t);const s=Object.keys(o);let n;r=s.length;for(let t=0;t<r;++t)n=s[t],Bt(n)||(e[n]=o[n])}}else e=ot(i);nt.set(t,e)}return e},defineProperty(t,e,i,o=!1){const r=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[r];if(void 0===t){const s=this instanceof HTMLElement?ct.findResponsibleContainer(this):ct.getOrCreateDOMContainer();if(t=s.get(i),this[r]=t,o&&this instanceof tt){const o=this.$fastController,s=()=>{ct.findResponsibleContainer(this).get(i)!==this[r]&&(this[r]=t,o.notify(e))};o.subscribe({handleChange:s},"isConnected")}}return t}})},createInterface(t,e){const i="function"==typeof t?t:e,o="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||Rt,r="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),s=function(t,e,i){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${s.friendlyName}'`);e?ct.defineProperty(t,e,s,r):ct.getOrCreateAnnotationParamTypes(t)[i]=s};return s.$isInterface=!0,s.friendlyName=null==o?"(anonymous)":o,null!=i&&(s.register=function(t,e){return i(new it(t,null!=e?e:s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject:(...t)=>function(e,i,o){if("number"==typeof o){const i=ct.getOrCreateAnnotationParamTypes(e),r=t[0];void 0!==r&&(i[o]=r)}else if(i)ct.defineProperty(e,i,t[0]);else{const i=o?ct.getOrCreateAnnotationParamTypes(o.value):ct.getOrCreateAnnotationParamTypes(e);let r;for(let e=0;e<t.length;++e)r=t[e],void 0!==r&&(i[e]=r)}},transient:t=>(t.register=function(e){return Tt.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=ut)=>(t.register=function(e){return Tt.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),ht=ct.createInterface("Container");function dt(t){return function(e){const i=function(t,e,o){ct.inject(i)(t,e,o)};return i.$isResolver=!0,i.resolve=function(i,o){return t(e,i,o)},i}}ct.inject;const ut={scoped:!1};function ft(t,e,i){ct.inject(ft)(t,e,i)}function pt(t,e){return e.getFactory(t).construct(e)}dt(((t,e,i)=>()=>i.get(t))),dt(((t,e,i)=>i.has(t,!0)?i.get(t):void 0)),ft.$isResolver=!0,ft.resolve=()=>{},dt(((t,e,i)=>{const o=pt(t,e),r=new gt(t,0,o);return i.registerResolver(t,r),o})),dt(((t,e,i)=>pt(t,e)));class gt{constructor(t,e,i){this.key=t,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=t.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,i,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(o=null===(i=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===i?void 0:i.call(e,t))&&void 0!==o?o:null;default:return null}}}function bt(t){return this.get(t)}function vt(t,e){return e(t)}class mt{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let i;return i=void 0===e?new this.Type(...this.dependencies.map(bt,t)):new this.Type(...this.dependencies.map(bt,t),...e),null==this.transformers?i:this.transformers.reduce(vt,i)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const yt={$isResolver:!0,resolve:(t,e)=>e};function wt(t){return"function"==typeof t.register}function $t(t){return function(t){return wt(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const xt=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),kt="__DI_LOCATE_PARENT__",Ct=new Map;class Ft{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ht,yt),t instanceof Node&&t.addEventListener(kt,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,i,o,r,s;const n=this.context;for(let a=0,l=t.length;a<l;++a)if(e=t[a],Mt(e))if(wt(e))e.register(this,n);else if(void 0!==e.prototype)Tt.singleton(e,e).register(this);else for(i=Object.keys(e),r=0,s=i.length;r<s;++r)o=e[i[r]],Mt(o)&&(wt(o)?o.register(this,n):this.register(o));return--this.registerDepth,this}registerResolver(t,e){Ot(t);const i=this.resolvers,o=i.get(t);return null==o?i.set(t,e):o instanceof gt&&4===o.strategy?o.state.push(e):i.set(t,new gt(t,4,[o,e])),e}registerTransformer(t,e){const i=this.getResolver(t);if(null==i)return!1;if(i.getFactory){const t=i.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(Ot(t),void 0!==t.resolve)return t;let i,o=this;for(;null!=o;){if(i=o.resolvers.get(t),null!=i)return i;if(null==o.parent){const i=$t(t)?this:o;return e?this.jitRegister(t,i):null}o=o.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(Ot(t),t.$isResolver)return t.resolve(this,this);let e,i=this;for(;null!=i;){if(e=i.resolvers.get(t),null!=e)return e.resolve(i,this);if(null==i.parent){const o=$t(t)?this:i;return e=this.jitRegister(t,o),e.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){Ot(t);const o=this;let r,s=o;if(e){let e=i;for(;null!=s;)r=s.resolvers.get(t),null!=r&&(e=e.concat(St(r,s,o))),s=s.parent;return e}for(;null!=s;){if(r=s.resolvers.get(t),null!=r)return St(r,s,o);if(s=s.parent,null==s)return i}return i}getFactory(t){let e=Ct.get(t);if(void 0===e){if(Nt(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ct.set(t,e=new mt(t,ct.getDependencies(t)))}return e}registerFactory(t,e){Ct.set(t,e)}createChild(t){return new Ft(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(xt.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(wt(t)){const i=t.register(e);if(!(i instanceof Object)||null==i.resolve){const i=e.resolvers.get(t);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const i=this.config.defaultResolver(t,e);return e.resolvers.set(t,i),i}}}const Vt=new WeakMap;function Dt(t){return function(e,i,o){if(Vt.has(o))return Vt.get(o);const r=t(e,i,o);return Vt.set(o,r),r}}const Tt=Object.freeze({instance:(t,e)=>new gt(t,0,e),singleton:(t,e)=>new gt(t,1,e),transient:(t,e)=>new gt(t,2,e),callback:(t,e)=>new gt(t,3,e),cachedCallback:(t,e)=>new gt(t,3,Dt(e)),aliasTo:(t,e)=>new gt(e,5,t)});function Ot(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function St(t,e,i){if(t instanceof gt&&4===t.strategy){const o=t.state;let r=o.length;const s=new Array(r);for(;r--;)s[r]=o[r].resolve(e,i);return s}return[t.resolve(e,i)]}const Rt="(anonymous)";function Mt(t){return"object"==typeof t&&null!==t||"function"==typeof t}const Nt=function(){const t=new WeakMap;let e=!1,i="",o=0;return function(r){return e=t.get(r),void 0===e&&(i=r.toString(),o=i.length,e=o>=29&&o<=100&&125===i.charCodeAt(o-1)&&i.charCodeAt(o-2)<=32&&93===i.charCodeAt(o-3)&&101===i.charCodeAt(o-4)&&100===i.charCodeAt(o-5)&&111===i.charCodeAt(o-6)&&99===i.charCodeAt(o-7)&&32===i.charCodeAt(o-8)&&101===i.charCodeAt(o-9)&&118===i.charCodeAt(o-10)&&105===i.charCodeAt(o-11)&&116===i.charCodeAt(o-12)&&97===i.charCodeAt(o-13)&&110===i.charCodeAt(o-14)&&88===i.charCodeAt(o-15),t.set(r,e)),e}}(),Lt={};function Bt(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=Lt[t];if(void 0!==e)return e;const i=t.length;if(0===i)return Lt[t]=!1;let o=0;for(let e=0;e<i;++e)if(o=t.charCodeAt(e),0===e&&48===o&&i>1||o<48||o>57)return Lt[t]=!1;return Lt[t]=!0}default:return!1}}function Et(t){return`${t.toLowerCase()}:presentation`}const Pt=new Map,At=Object.freeze({define(t,e,i){const o=Et(t);void 0===Pt.get(o)?Pt.set(o,e):Pt.set(o,!1),i.register(Tt.instance(o,e))},forTag(t,e){const i=Et(t),o=Pt.get(i);return!1===o?ct.findResponsibleContainer(e).get(i):o||null}});class It{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?L.create(e):e instanceof L?e:L.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class Ht extends tt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=At.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new jt(this===Ht?class extends Ht{}:this,t,e)}}function zt(t,e,i){return"function"==typeof t?t(e,i):t}X([T],Ht.prototype,"template",void 0),X([T],Ht.prototype,"styles",void 0);class jt{constructor(t,e,i){this.type=t,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const i=this.definition,o=this.overrideDefinition,r=`${i.prefix||e.elementPrefix}-${i.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new It(zt(i.template,t,i),zt(i.styles,t,i));t.definePresentation(e);let r=zt(i.shadowOptions,t,i);t.shadowRootMode&&(r?o.shadowOptions||(r.mode=t.shadowRootMode):null!==r&&(r={mode:t.shadowRootMode})),t.defineElement({elementOptions:zt(i.elementOptions,t,i),shadowOptions:r,attributes:zt(i.attributes,t,i)})}})}}class _t{createCSS(){return""}createBehavior(){}}function qt(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const Gt=document.createElement("div");class Ut{setProperty(t,e){u.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.queueUpdate((()=>this.target.removeProperty(t)))}}class Wt extends Ut{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Xt extends Ut{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Yt{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),F.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),u.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),u.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:i}=this.style;if(i){const t=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[t].style}else this.target=null}}X([T],Yt.prototype,"target",void 0);class Kt{constructor(t){this.target=t.style}setProperty(t,e){u.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.queueUpdate((()=>this.target.removeProperty(t)))}}class Qt{setProperty(t,e){Qt.properties[t]=e;for(const i of Qt.roots.values())te.getOrCreate(Qt.normalizeRoot(i)).setProperty(t,e)}removeProperty(t){delete Qt.properties[t];for(const e of Qt.roots.values())te.getOrCreate(Qt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=Qt;if(!e.has(t)){e.add(t);const i=te.getOrCreate(this.normalizeRoot(t));for(const t in Qt.properties)i.setProperty(t,Qt.properties[t])}}static unregisterRoot(t){const{roots:e}=Qt;if(e.has(t)){e.delete(t);const i=te.getOrCreate(Qt.normalizeRoot(t));for(const t in Qt.properties)i.removeProperty(t)}}static normalizeRoot(t){return t===Gt?document:t}}Qt.roots=new Set,Qt.properties={};const Zt=new WeakMap,Jt=u.supportsAdoptedStyleSheets?class extends Ut{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(L.create([e]))}}:Yt,te=Object.freeze({getOrCreate(t){if(Zt.has(t))return Zt.get(t);let e;return e=t===Gt?new Qt:t instanceof Document?u.supportsAdoptedStyleSheets?new Wt:new Xt:t instanceof tt?new Jt(t):new Kt(t),Zt.set(t,e),e}});class ee extends _t{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ee.uniqueId(),ee.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new ee({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return ee.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=ne.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof ee&&(e=this.alias(e)),ne.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),ne.existsFor(t)&&ne.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Gt,t),this}subscribe(t,e){const i=this.getOrCreateSubscriberSet(e);e&&!ne.existsFor(e)&&ne.getOrCreate(e),i.has(t)||i.add(t)}unsubscribe(t,e){const i=this.subscribers.get(e||this);i&&i.has(t)&&i.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}ee.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),ee.tokensById=new Map;class ie{constructor(t,e,i){this.source=t,this.token=e,this.node=i,this.dependencies=new Set,this.observer=F.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,M))}}class oe{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),F.getNotifier(this).notify(t.id))}get(t){return F.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const re=new WeakMap,se=new WeakMap;class ne{constructor(t){this.target=t,this.store=new oe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const i=ee.getTokenById(e);if(i&&(i.notify(this.target),ee.isCSSDesignToken(i))){const e=this.parent,o=this.isReflecting(i);if(e){const r=e.get(i),s=t.get(i);r===s||o?r===s&&o&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else o||this.reflectToCSS(i)}}},re.set(t,this),F.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof tt?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return re.get(t)||new ne(t)}static existsFor(t){return re.has(t)}static findParent(t){if(Gt!==t.target){let e=qt(t.target);for(;null!==e;){if(re.has(e))return re.get(e);e=qt(e)}return ne.getOrCreate(Gt)}return null}static findClosestAssignedNode(t,e){let i=e;do{if(i.has(t))return i;i=i.parent?i.parent:i.target!==Gt?ne.getOrCreate(Gt):null}while(null!==i);return null}get parent(){return se.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const i=this.getRaw(t);return void 0!==i?(this.hydrate(t,i),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=ne.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){ee.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),ee.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=ne.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&se.get(this).removeChild(this)}appendChild(t){t.parent&&se.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));se.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),F.getNotifier(this.store).subscribe(t);for(const[e,i]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):i)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),F.getNotifier(this.store).unsubscribe(t),t.parent===this&&se.delete(t)}contains(t){return function(t,e){let i=e;for(;null!==i;){if(i===t)return!0;i=qt(i)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),ne.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),ne.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const i=ee.getTokenById(e);i&&this.hydrate(i,this.getRaw(i))}hydrate(t,e){if(!this.has(t)){const i=this.bindingObservers.get(t);ee.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(i&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const i=new ie(e,t,this);return this.bindingObservers.set(t,i),i}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}ne.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:i}=t;this.add(e,i)}add(t,e){te.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(ne.getOrCreate(e).get(t)))}remove(t,e){te.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},X([T],ne.prototype,"children",void 0);const ae=Object.freeze({create:function(t){return ee.from(t)},notifyConnection:t=>!(!t.isConnected||!ne.existsFor(t)||(ne.getOrCreate(t).bind(),0)),notifyDisconnection:t=>!(t.isConnected||!ne.existsFor(t)||(ne.getOrCreate(t).unbind(),0)),registerRoot(t=Gt){Qt.registerRoot(t)},unregisterRoot(t=Gt){Qt.unregisterRoot(t)}}),le=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ce=new Map,he=new Map;let de=null;const ue=ct.createInterface((t=>t.cachedCallback((t=>(null===de&&(de=new pe(null,t)),de))))),fe=Object.freeze({tagFor:t=>he.get(t),responsibleFor(t){const e=t.$$designSystem$$;return e||ct.findResponsibleContainer(t).get(ue)},getOrCreate(t){if(!t)return null===de&&(de=ct.getOrCreateDOMContainer().get(ue)),de;const e=t.$$designSystem$$;if(e)return e;const i=ct.getOrCreateDOMContainer(t);if(i.has(ue,!1))return i.get(ue);{const e=new pe(t,i);return i.register(Tt.instance(ue,e)),e}}});class pe{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>le.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,i=[],o=this.disambiguate,r=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(t,s,n){const a=function(t,e,i){return"string"==typeof t?{name:t,type:e,callback:i}:t}(t,s,n),{name:l,callback:c,baseClass:h}=a;let{type:d}=a,u=l,f=ce.get(u),p=!0;for(;f;){const t=o(u,d,f);switch(t){case le.ignoreDuplicate:return;case le.definitionCallbackOnly:p=!1,f=void 0;break;default:u=t,f=ce.get(u)}}p&&((he.has(d)||d===Ht)&&(d=class extends d{}),ce.set(u,d),he.set(d,u),h&&he.set(h,u)),i.push(new ge(e,u,d,r,c,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&ae.registerRoot(this.designTokenRoot)),e.registerWithContext(s,...t);for(const t of i)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class ge{constructor(t,e,i,o,r,s){this.container=t,this.name=e,this.type=i,this.shadowRootMode=o,this.callback=r,this.willDefine=s,this.definition=null}definePresentation(t){At.define(this.name,t,this.container)}defineElement(t){this.definition=new W(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return fe.tagFor(t)}}class be{}X([_({attribute:"aria-atomic",mode:"fromView"})],be.prototype,"ariaAtomic",void 0),X([_({attribute:"aria-busy",mode:"fromView"})],be.prototype,"ariaBusy",void 0),X([_({attribute:"aria-controls",mode:"fromView"})],be.prototype,"ariaControls",void 0),X([_({attribute:"aria-current",mode:"fromView"})],be.prototype,"ariaCurrent",void 0),X([_({attribute:"aria-describedby",mode:"fromView"})],be.prototype,"ariaDescribedby",void 0),X([_({attribute:"aria-details",mode:"fromView"})],be.prototype,"ariaDetails",void 0),X([_({attribute:"aria-disabled",mode:"fromView"})],be.prototype,"ariaDisabled",void 0),X([_({attribute:"aria-errormessage",mode:"fromView"})],be.prototype,"ariaErrormessage",void 0),X([_({attribute:"aria-flowto",mode:"fromView"})],be.prototype,"ariaFlowto",void 0),X([_({attribute:"aria-haspopup",mode:"fromView"})],be.prototype,"ariaHaspopup",void 0),X([_({attribute:"aria-hidden",mode:"fromView"})],be.prototype,"ariaHidden",void 0),X([_({attribute:"aria-invalid",mode:"fromView"})],be.prototype,"ariaInvalid",void 0),X([_({attribute:"aria-keyshortcuts",mode:"fromView"})],be.prototype,"ariaKeyshortcuts",void 0),X([_({attribute:"aria-label",mode:"fromView"})],be.prototype,"ariaLabel",void 0),X([_({attribute:"aria-labelledby",mode:"fromView"})],be.prototype,"ariaLabelledby",void 0),X([_({attribute:"aria-live",mode:"fromView"})],be.prototype,"ariaLive",void 0),X([_({attribute:"aria-owns",mode:"fromView"})],be.prototype,"ariaOwns",void 0),X([_({attribute:"aria-relevant",mode:"fromView"})],be.prototype,"ariaRelevant",void 0),X([_({attribute:"aria-roledescription",mode:"fromView"})],be.prototype,"ariaRoledescription",void 0);class ve{constructor(){this.targetIndex=0}}class me extends ve{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class ye extends ve{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return u.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function we(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=F.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function $e(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function xe(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ke(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Ce(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Fe(t){u.setAttribute(this.target,this.targetName,t)}function Ve(t){u.setBooleanAttribute(this.target,this.targetName,t)}function De(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Te(t){this.target[this.targetName]=t}function Oe(t){const e=this.classVersions||Object.create(null),i=this.target;let o=this.version||0;if(null!=t&&t.length){const r=t.split(/\s+/);for(let t=0,s=r.length;t<s;++t){const s=r[t];""!==s&&(e[s]=o,i.classList.add(s))}}if(this.classVersions=e,this.version=o+1,0!==o){o-=1;for(const t in e)e[t]===o&&i.classList.remove(t)}}class Se extends me{constructor(t){super(),this.binding=t,this.bind=we,this.unbind=xe,this.updateTarget=Fe,this.isBindingVolatile=F.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Te,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,i)=>u.createHTML(t(e,i))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Ve;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=$e,this.unbind=Ce;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=Oe)}}targetAtContent(){this.updateTarget=De,this.unbind=ke}createBehavior(t){return new Re(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Re{constructor(t,e,i,o,r,s,n){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=o,this.unbind=r,this.updateTarget=s,this.targetName=n}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){S(t);const e=this.binding(this.source,this.context);S(null),!0!==e&&t.preventDefault()}}let Me=null;class Ne{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Me=this}static borrow(t){const e=Me||new Ne;return e.directives=t,e.reset(),Me=null,e}}function Le(t){if(1===t.length)return t[0];let e;const i=t.length,o=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),r=new Se(((t,e)=>{let r="";for(let s=0;s<i;++s)r+=o[s](t,e);return r}));return r.targetName=e,r}const Be=d.length;function Ee(t,e){const i=e.split(h);if(1===i.length)return null;const o=[];for(let e=0,r=i.length;e<r;++e){const r=i[e],s=r.indexOf(d);let n;if(-1===s)n=r;else{const e=parseInt(r.substring(0,s));o.push(t.directives[e]),n=r.substring(s+Be)}""!==n&&o.push(n)}return o}function Pe(t,e,i=!1){const o=e.attributes;for(let r=0,s=o.length;r<s;++r){const n=o[r],a=n.value,l=Ee(t,a);let c=null;null===l?i&&(c=new Se((()=>a)),c.targetName=n.name):c=Le(l),null!==c&&(e.removeAttributeNode(n),r--,s--,t.addFactory(c))}}function Ae(t,e,i){const o=Ee(t,e.textContent);if(null!==o){let r=e;for(let s=0,n=o.length;s<n;++s){const n=o[s],a=0===s?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof n?a.textContent=n:(a.textContent=" ",t.captureContentBinding(n)),r=a,t.targetIndex++,a!==e&&i.nextNode()}t.targetIndex--}}const Ie=document.createRange();class He{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,i=this.lastChild;let o,r=this.firstChild;for(;r!==i;)o=r.nextSibling,e.insertBefore(r,t),r=o;e.insertBefore(i,t)}}remove(){const t=this.fragment,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.appendChild(o),o=i;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.removeChild(o),o=i;t.removeChild(e);const r=this.behaviors,s=this.source;for(let t=0,e=r.length;t<e;++t)r[t].unbind(s)}bind(t,e){const i=this.behaviors;if(this.source!==t)if(null!==this.source){const o=this.source;this.source=t,this.context=e;for(let r=0,s=i.length;r<s;++r){const s=i[r];s.unbind(o),s.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,r=i.length;o<r;++o)i[o].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let i=0,o=t.length;i<o;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){Ie.setStartBefore(t[0].firstChild),Ie.setEndAfter(t[t.length-1].lastChild),Ie.deleteContents();for(let e=0,i=t.length;e<i;++e){const i=t[e],o=i.behaviors,r=i.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(r)}}}}class ze{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=u.createHTML(e);const i=t.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(t=i)}else t=e;const i=function(t,e){const i=t.content;document.adoptNode(i);const o=Ne.borrow(e);Pe(o,t,!0);const r=o.behaviorFactories;o.reset();const s=u.createTemplateWalker(i);let n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:Pe(o,n);break;case 3:Ae(o,n,s);break;case 8:u.isMarker(n)&&o.addFactory(e[u.extractDirectiveIndexFromMarker(n)])}let a=0;(u.isMarker(i.firstChild)||1===i.childNodes.length&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(t,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,o=new Array(this.behaviorCount),r=u.createTemplateWalker(e);let s=0,n=this.targetOffset,a=r.nextNode();for(let t=i.length;s<t;++s){const t=i[s],e=t.targetIndex;for(;null!==a;){if(n===e){o[s]=t.createBehavior(a);break}a=r.nextNode(),n++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let i=0,r=e.length;i<r;++i,++s)o[s]=e[i].createBehavior(t)}return new He(e,o)}render(t,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const o=this.create(i);return o.bind(t,M),o.appendTo(e),o}}const je=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _e(t,...e){const i=[];let o="";for(let r=0,s=t.length-1;r<s;++r){const s=t[r];let n=e[r];if(o+=s,n instanceof ze){const t=n;n=()=>t}if("function"==typeof n&&(n=new Se(n)),n instanceof me){const t=je.exec(s);null!==t&&(n.targetName=t[2])}n instanceof ve?(o+=n.createPlaceholder(i.length),i.push(n)):o+=n}return o+=t[t.length-1],new ze(o,i)}class qe{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function Ge(t){return new ye("fast-ref",qe,t)}class Ue{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const We=(t,e)=>_e`
    <span
        part="end"
        ${Ge("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Ge("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Xe=(t,e)=>_e`
    <span
        part="start"
        ${Ge("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ge("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;function Ye(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))})),e.attributes){const i=t.attributes||[];t.attributes=i.concat(e.attributes)}}))}var Ke;_e`
    <span part="end" ${Ge("endContainer")}>
        <slot
            name="end"
            ${Ge("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,_e`
    <span part="start" ${Ge("startContainer")}>
        <slot
            name="start"
            ${Ge("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(Ke||(Ke={}));const Qe="ArrowDown",Ze="ArrowLeft",Je="ArrowRight",ti="ArrowUp",ei="Enter",ii={ArrowDown:Qe,ArrowLeft:Ze,ArrowRight:Je,ArrowUp:ti},oi="form-associated-proxy",ri="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,si=new Map;function ni(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ri}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?e.concat(Array.from(t)):e;return Object.freeze(i)}return i}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!ri)return null;let t=si.get(this);return t||(t=this.attachInternals(),si.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,i){this.elementInternals?this.elementInternals.setValidity(t,e,i):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",oi),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",oi)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===ei&&this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return _({mode:"boolean"})(e.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),_({attribute:"current-value"})(e.prototype,"currentValue"),_(e.prototype,"name"),_({mode:"boolean"})(e.prototype,"required"),T(e.prototype,"value"),e}function ai(t){class e extends(ni(t)){}class i extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return _({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),_({attribute:"current-checked",converter:H})(i.prototype,"currentChecked"),T(i.prototype,"defaultChecked"),T(i.prototype,"checked"),i}class li extends Ht{}class ci extends(ni(li)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class hi extends ci{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}X([_({mode:"boolean"})],hi.prototype,"autofocus",void 0),X([_({attribute:"form"})],hi.prototype,"formId",void 0),X([_],hi.prototype,"formaction",void 0),X([_],hi.prototype,"formenctype",void 0),X([_],hi.prototype,"formmethod",void 0),X([_({mode:"boolean"})],hi.prototype,"formnovalidate",void 0),X([_],hi.prototype,"formtarget",void 0),X([_],hi.prototype,"type",void 0),X([T],hi.prototype,"defaultSlottedContent",void 0);class di{}X([_({attribute:"aria-expanded",mode:"fromView"})],di.prototype,"ariaExpanded",void 0),X([_({attribute:"aria-pressed",mode:"fromView"})],di.prototype,"ariaPressed",void 0),Ye(di,be),Ye(hi,Ue,di);class ui extends class{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=F.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(i),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function fi(t){return"string"==typeof t&&(t={property:t}),new ye("fast-slotted",ui,t)}function pi(t,e){const i=[];let o="";const r=[];for(let s=0,n=t.length-1;s<n;++s){o+=t[s];let n=e[s];if(n instanceof _t){const t=n.createBehavior();n=n.createCSS(),t&&r.push(t)}n instanceof L||n instanceof CSSStyleSheet?(""!==o.trim()&&(i.push(o),o=""),i.push(n)):o+=n}return o+=t[t.length-1],""!==o.trim()&&i.push(o),{styles:i,behaviors:r}}function gi(t,...e){const{styles:i,behaviors:o}=pi(t,e),r=L.create(i);return o.length&&r.withBehaviors(...o),r}class bi extends _t{constructor(t,e){super(),this.behaviors=e,this.css="";const i=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);i.length&&(this.styles=L.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}const vi="not-allowed";class mi extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new mi(t,e)}constructListener(t){let e=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!e?(t.$fastController.addStyles(i),e=o):!o&&e&&(t.$fastController.removeStyles(i),e=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const yi=mi.with(window.matchMedia("(forced-colors)"));var wi,$i;function xi(t){return`:host([hidden]){display:none}:host{display:${t}}`}let ki;mi.with(window.matchMedia("(prefers-color-scheme: dark)")),mi.with(window.matchMedia("(prefers-color-scheme: light)")),($i=wi||(wi={})).Canvas="Canvas",$i.CanvasText="CanvasText",$i.LinkText="LinkText",$i.VisitedText="VisitedText",$i.ActiveText="ActiveText",$i.ButtonFace="ButtonFace",$i.ButtonText="ButtonText",$i.Field="Field",$i.FieldText="FieldText",$i.Highlight="Highlight",$i.HighlightText="HighlightText",$i.GrayText="GrayText";const Ci=function(){if("boolean"==typeof ki)return ki;if("undefined"==typeof window||!window.document||!window.document.createElement)return ki=!1,ki;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),ki=!0}catch(t){ki=!1}finally{document.head.removeChild(t)}return ki}()?"focus-visible":"focus";var Fi,Vi;function Di(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function Ti(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function Oi(t,e,i){return isNaN(t)?e:e+t*(i-e)}function Si(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function Ri(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}!function(t){t.ltr="ltr",t.rtl="rtl"}(Fi||(Fi={})),Math.PI;class Mi{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new Mi(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Mi(Ri(this.h,t),Ri(this.s,t),Ri(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ni{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new Ni(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ni(Ri(this.l,t),Ri(this.a,t),Ri(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ni.epsilon=216/24389,Ni.kappa=24389/27;class Li{constructor(t,e,i,o){this.r=t,this.g=e,this.b=i,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new Li(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Oi(this.r,0,255))},${Math.round(Oi(this.g,0,255))},${Math.round(Oi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Oi(this.r,0,255))},${Math.round(Oi(this.g,0,255))},${Math.round(Oi(this.b,0,255))},${Di(this.a,0,1)})`}roundToPrecision(t){return new Li(Ri(this.r,t),Ri(this.g,t),Ri(this.b,t),Ri(this.a,t))}clamp(){return new Li(Di(this.r,0,1),Di(this.g,0,1),Di(this.b,0,1),Di(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(Di(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(Oi(t,0,255))}}class Bi{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new Bi(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new Bi(Ri(this.x,t),Ri(this.y,t),Ri(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Ei(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return function(t){return.2126*t.r+.7152*t.g+.0722*t.b}(new Li(e(t.r),e(t.g),e(t.b),1))}function Pi(t,e,i){return i-e==0?0:(t-e)/(i-e)}function Ai(t,e,i){return(Pi(t.r,e.r,i.r)+Pi(t.g,e.g,i.g)+Pi(t.b,e.b,i.b))/3}function Ii(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),o=e-i;let r=0;0!==o&&(r=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),r<0&&(r+=360);const s=(e+i)/2;let n=0;return 0!==o&&(n=o/(1-Math.abs(2*s-1))),new Mi(r,n,s)}function Hi(t,e=1){return function(t,e=1){function i(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const o=i(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),r=i(-.969266*t.x+1.8760108*t.y+.041556*t.z),s=i(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new Li(o,r,s,e)}(function(t){const e=(t.l+16)/116,i=e+t.a/500,o=e-t.b/200,r=Math.pow(i,3),s=Math.pow(e,3),n=Math.pow(o,3);let a=0;a=r>Ni.epsilon?r:(116*i-16)/Ni.kappa;let l=0;l=t.l>Ni.epsilon*Ni.kappa?s:t.l/Ni.kappa;let c=0;return c=n>Ni.epsilon?n:(116*o-16)/Ni.kappa,a=Bi.whitePoint.x*a,l=Bi.whitePoint.y*l,c=Bi.whitePoint.z*c,new Bi(a,l,c)}(t),e)}function zi(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Li(Si(t,e.r,i.r),Si(t,e.g,i.g),Si(t,e.b,i.b),Si(t,e.a,i.a))}function ji(t,e){const i=t.relativeLuminance>e.relativeLuminance?t:e,o=t.relativeLuminance>e.relativeLuminance?e:t;return(i.relativeLuminance+.05)/(o.relativeLuminance+.05)}Bi.whitePoint=new Bi(.95047,1,1.08883),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(Vi||(Vi={}));const _i=Object.freeze({create:(t,e,i)=>new qi(t,e,i),from:t=>new qi(t.r,t.g,t.b)});class qi extends Li{constructor(t,e,i){super(t,e,i,1),this.toColorString=this.toStringHexRGB,this.contrast=ji.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Ei(this)}static fromObject(t){return new qi(t.r,t.g,t.b)}}function Gi(t,e,i=0,o=t.length-1){if(o===i)return t[i];const r=Math.floor((o-i)/2)+i;return e(t[r])?Gi(t,e,i,r):Gi(t,e,r+1,o)}const Ui=(-.1+Math.sqrt(.21))/2;function Wi(t){return t.relativeLuminance<=Ui}function Xi(t){return Wi(t)?-1:1}const Yi={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},Ki=Object.freeze({create:function(t,e,i){return"number"==typeof t?Ki.from(_i.create(t,e,i)):Ki.from(t)},from:function(t,e){return function(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in e)if(typeof e[i]!=typeof t[i])return!1;return!0}(t)?Qi.from(t,e):Qi.from(_i.create(t.r,t.g,t.b),e)}});class Qi{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,i,o){void 0===i&&(i=this.closestIndexOf(t));let r=this.swatches;const s=this.lastIndex;let n=i;return void 0===o&&(o=Xi(t)),-1===o&&(r=this.reversedSwatches,n=s-n),Gi(r,(i=>ji(t,i)>=e),n,s)}get(t){return this.swatches[t]||this.swatches[Di(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const i=this.swatches.reduce(((e,i)=>Math.abs(i.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?i:e));return e=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const i=Ii(t).s,o=Ii(e);return o.s<i?function(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,o=i*(1-Math.abs(t.h/60%2-1)),r=t.l-i/2;let s=0,n=0,a=0;return t.h<60?(s=i,n=o,a=0):t.h<120?(s=o,n=i,a=0):t.h<180?(s=0,n=i,a=o):t.h<240?(s=0,n=o,a=i):t.h<300?(s=o,n=0,a=i):t.h<360&&(s=i,n=0,a=o),new Li(s+r,n+r,a+r,e)}(new Mi(o.h,i,o.l)):e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],i=function(t){function e(t){return t>Ni.epsilon?Math.pow(t,1/3):(Ni.kappa*t+16)/116}const i=e(t.x/Bi.whitePoint.x),o=e(t.y/Bi.whitePoint.y),r=e(t.z/Bi.whitePoint.z);return new Ni(116*o-16,500*(i-o),200*(o-r))}(function(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const i=e(t.r),o=e(t.g),r=e(t.b);return new Bi(.4124564*i+.3575761*o+.1804375*r,.2126729*i+.7151522*o+.072175*r,.0193339*i+.119192*o+.9503041*r)}(Li.fromObject(t).roundToPrecision(4))),o=Hi(new Ni(0,i.a,i.b)).clamp().roundToPrecision(4),r=Hi(new Ni(50,i.a,i.b)).clamp().roundToPrecision(4),s=Hi(new Ni(100,i.a,i.b)).clamp().roundToPrecision(4),n=new Li(0,0,0),a=new Li(1,1,1),l=s.equalValue(a)?0:14,c=o.equalValue(n)?0:14;for(let t=100+l;t>=0-c;t-=.5){let i;i=t<0?zi(t/c+1,n,o):t<=50?zi(Qi.ramp(t),o,r):t<=100?zi(Qi.ramp(t),r,s):zi((t-100)/l,s,a),i=Qi.saturationBump(r,i).roundToPrecision(4),e.push(_i.from(i))}return new Qi(t,e)}static adjustEnd(t,e,i,o){const r=-1===o?e.swatches:e.reversedSwatches,s=t=>{const i=e.closestIndexOf(t);return 1===o?e.lastIndex-i:i};1===o&&i.reverse();const n=t(i[i.length-2]);if(Ri(ji(i[i.length-1],i[i.length-2]),2)<n){i.pop();const t=s(e.colorContrast(r[e.lastIndex],n,void 0,o))-s(i[i.length-2]);let a=1;for(let o=i.length-t-1;o<i.length;o++){const t=s(i[o]),n=o===i.length-1?e.lastIndex:t+a;i[o]=r[n],a++}}1===o&&i.reverse()}static createColorPaletteByContrast(t,e){const i=Qi.createHighResolutionPalette(t),o=t=>Ri(e.stepContrast+e.stepContrast*(1-t.relativeLuminance)*e.stepContrastRamp,2),r=[];let s=e.preserveSource?t:i.swatches[0];r.push(s);do{const t=o(s);s=i.colorContrast(s,t,void 0,1),r.push(s)}while(s.relativeLuminance>0);if(e.preserveSource){s=t;do{const t=o(s);s=i.colorContrast(s,t,void 0,-1),r.unshift(s)}while(s.relativeLuminance<1)}return this.adjustEnd(o,i,r,-1),e.preserveSource&&this.adjustEnd(o,i,r,1),r}static from(t,e){const i=void 0===e?Yi:Object.assign(Object.assign({},Yi),e);return new Qi(t,Object.freeze(Qi.createColorPaletteByContrast(t,i)))}}const Zi=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ji(t){const e=Zi.exec(t);if(null===e)return null;let i=e[1];if(3===i.length){const t=i.charAt(0),e=i.charAt(1),o=i.charAt(2);i=t.concat(t,e,e,o,o)}const o=parseInt(i,16);return isNaN(o)?null:new Li(Ti((16711680&o)>>>16,0,255),Ti((65280&o)>>>8,0,255),Ti(255&o,0,255),1)}const to=_i.create(1,1,1),eo=_i.create(0,0,0),io=_i.create(.5,.5,.5),oo=Ji("#0078D4"),ro=_i.create(oo.r,oo.g,oo.b);function so(t,e,i,o,r){const s=t=>t.contrast(to)>=r?to:eo,n=s(t),a=s(e);return{rest:n,hover:a,active:n.relativeLuminance===a.relativeLuminance?n:s(i),focus:s(o)}}var no;!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(no||(no={}));class ao{constructor(t,e,i,o){this.toColorString=()=>this.cssGradient,this.contrast=ji.bind(null,this),this.createCSS=this.toColorString,this.color=new Li(t,e,i),this.cssGradient=o,this.relativeLuminance=Ei(this.color),this.r=t,this.g=e,this.b=i}static fromObject(t,e){return new ao(t.r,t.g,t.b,e)}}const lo=new Li(0,0,0),co=new Li(1,1,1);function ho(t,e,i,o,r,s,n,a,l=10,c=!1){const h=t.closestIndexOf(e);function d(i){if(c){const o=t.closestIndexOf(e),r=t.get(o),s=i.relativeLuminance<e.relativeLuminance?lo:co,n=function(t,e,i=null){let o=0,r=i;return null!==r?o=Ai(t,e,r):(r=new Li(0,0,0,1),o=Ai(t,e,r),o<=0&&(r=new Li(1,1,1,1),o=Ai(t,e,r))),o=Math.round(1e3*o)/1e3,new Li(r.r,r.g,r.b,o)}(Ji(i.toColorString()),Ji(r.toColorString()),s).roundToPrecision(2),a=function(t,e){if(e.a>=1)return e;if(e.a<=0)return new Li(t.r,t.g,t.b,1);const i=e.a*e.r+(1-e.a)*t.r,o=e.a*e.g+(1-e.a)*t.g,r=e.a*e.b+(1-e.a)*t.b;return new Li(i,o,r,1)}(Ji(e.toColorString()),n);return _i.from(a)}return i}void 0===a&&(a=Xi(e));const u=h+a*i,f=u+a*(o-i),p=u+a*(r-i),g=u+a*(s-i),b=-1===a?0:100-l,v=-1===a?l:100;function m(e,i){const o=t.get(e);if(i){const i=t.get(e+a*n),r=-1===a?i:o,s=-1===a?o:i,l=`linear-gradient(${d(r).toColorString()} ${b}%, ${d(s).toColorString()} ${v}%)`;return ao.fromObject(r,l)}return d(o)}return{rest:m(u,!0),hover:m(f,!0),active:m(p,!1),focus:m(g,!0)}}function uo(t,e,i,o,r,s,n,a){null==a&&(a=Xi(e));const l=t.closestIndexOf(t.colorContrast(e,i));return{rest:t.get(l+a*o),hover:t.get(l+a*r),active:t.get(l+a*s),focus:t.get(l+a*n)}}function fo(t,e,i,o,r,s,n){const a=t.closestIndexOf(e);return null==n&&(n=Xi(e)),{rest:t.get(a+n*i),hover:t.get(a+n*o),active:t.get(a+n*r),focus:t.get(a+n*s)}}function po(t,e,i,o,r,s,n,a,l,c,h,d){return Wi(e)?fo(t,e,a,l,c,h,d):fo(t,e,i,o,r,s,n)}var go;function bo(t,e){return t.closestIndexOf((i=e,_i.create(i,i,i)));var i}function vo(t,e,i){return t.get(bo(t,e)+-1*i)}!function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"}(go||(go={}));const{create:mo}=ae;function yo(t){return ae.create({name:t,cssCustomPropertyName:null})}const wo=mo("direction").withDefault(Fi.ltr),$o=mo("disabled-opacity").withDefault(.3),xo=mo("base-height-multiplier").withDefault(8),ko=(mo("base-horizontal-spacing-multiplier").withDefault(3),mo("density").withDefault(0)),Co=mo("design-unit").withDefault(4),Fo=mo("control-corner-radius").withDefault(4),Vo=mo("layer-corner-radius").withDefault(8),Do=mo("stroke-width").withDefault(1),To=mo("focus-stroke-width").withDefault(2),Oo=mo("body-font").withDefault("Segoe UI, sans-serif"),So=mo("type-ramp-base-font-size").withDefault("14px"),Ro=mo("type-ramp-base-line-height").withDefault("20px"),Mo=mo("type-ramp-minus-1-font-size").withDefault("12px"),No=mo("type-ramp-minus-1-line-height").withDefault("16px"),Lo=(mo("type-ramp-minus-2-font-size").withDefault("10px"),mo("type-ramp-minus-2-line-height").withDefault("14px"),mo("type-ramp-plus-1-font-size").withDefault("16px"),mo("type-ramp-plus-1-line-height").withDefault("22px"),mo("type-ramp-plus-2-font-size").withDefault("20px"),mo("type-ramp-plus-2-line-height").withDefault("26px"),mo("type-ramp-plus-3-font-size").withDefault("24px"),mo("type-ramp-plus-3-line-height").withDefault("32px"),mo("type-ramp-plus-4-font-size").withDefault("28px"),mo("type-ramp-plus-4-line-height").withDefault("36px"),mo("type-ramp-plus-5-font-size").withDefault("32px"),mo("type-ramp-plus-5-line-height").withDefault("40px"),mo("type-ramp-plus-6-font-size").withDefault("40px"),mo("type-ramp-plus-6-line-height").withDefault("52px"),mo("base-layer-luminance").withDefault(go.LightMode)),Bo=yo("accent-fill-rest-delta").withDefault(0),Eo=yo("accent-fill-hover-delta").withDefault(-2),Po=yo("accent-fill-active-delta").withDefault(-5),Ao=yo("accent-fill-focus-delta").withDefault(0),Io=yo("accent-foreground-rest-delta").withDefault(0),Ho=yo("accent-foreground-hover-delta").withDefault(3),zo=yo("accent-foreground-active-delta").withDefault(-8),jo=yo("accent-foreground-focus-delta").withDefault(0),_o=yo("neutral-fill-rest-delta").withDefault(-1),qo=yo("neutral-fill-hover-delta").withDefault(1),Go=yo("neutral-fill-active-delta").withDefault(0),Uo=yo("neutral-fill-focus-delta").withDefault(0),Wo=yo("neutral-fill-input-rest-delta").withDefault(-1),Xo=yo("neutral-fill-input-hover-delta").withDefault(1),Yo=yo("neutral-fill-input-active-delta").withDefault(0),Ko=yo("neutral-fill-input-focus-delta").withDefault(-2),Qo=yo("neutral-fill-input-alt-rest-delta").withDefault(2),Zo=yo("neutral-fill-input-alt-hover-delta").withDefault(4),Jo=yo("neutral-fill-input-alt-active-delta").withDefault(6),tr=yo("neutral-fill-input-alt-focus-delta").withDefault(2),er=yo("neutral-fill-layer-rest-delta").withDefault(-2),ir=yo("neutral-fill-layer-hover-delta").withDefault(-3),or=yo("neutral-fill-layer-active-delta").withDefault(-3),rr=yo("neutral-fill-layer-alt-rest-delta").withDefault(-1),sr=yo("neutral-fill-secondary-rest-delta").withDefault(3),nr=yo("neutral-fill-secondary-hover-delta").withDefault(2),ar=yo("neutral-fill-secondary-active-delta").withDefault(1),lr=yo("neutral-fill-secondary-focus-delta").withDefault(3),cr=yo("neutral-fill-stealth-rest-delta").withDefault(0),hr=yo("neutral-fill-stealth-hover-delta").withDefault(3),dr=yo("neutral-fill-stealth-active-delta").withDefault(2),ur=yo("neutral-fill-stealth-focus-delta").withDefault(0),fr=yo("neutral-fill-strong-rest-delta").withDefault(0),pr=yo("neutral-fill-strong-hover-delta").withDefault(8),gr=yo("neutral-fill-strong-active-delta").withDefault(-5),br=yo("neutral-fill-strong-focus-delta").withDefault(0),vr=yo("neutral-stroke-rest-delta").withDefault(8),mr=yo("neutral-stroke-hover-delta").withDefault(12),yr=yo("neutral-stroke-active-delta").withDefault(6),wr=yo("neutral-stroke-focus-delta").withDefault(8),$r=yo("neutral-stroke-control-rest-delta").withDefault(3),xr=yo("neutral-stroke-control-hover-delta").withDefault(5),kr=yo("neutral-stroke-control-active-delta").withDefault(5),Cr=yo("neutral-stroke-control-focus-delta").withDefault(5),Fr=yo("neutral-stroke-divider-rest-delta").withDefault(4),Vr=yo("neutral-stroke-layer-rest-delta").withDefault(3),Dr=yo("neutral-stroke-layer-hover-delta").withDefault(3),Tr=yo("neutral-stroke-layer-active-delta").withDefault(3),Or=yo("neutral-stroke-strong-hover-delta").withDefault(0),Sr=yo("neutral-stroke-strong-active-delta").withDefault(0),Rr=yo("neutral-stroke-strong-focus-delta").withDefault(0),Mr=mo("neutral-base-color").withDefault(io),Nr=yo("neutral-palette").withDefault((t=>Ki.from(Mr.getValueFor(t)))),Lr=mo("accent-base-color").withDefault(ro),Br=yo("accent-palette").withDefault((t=>Ki.from(Lr.getValueFor(t)))),Er=yo("neutral-layer-card-container-recipe").withDefault({evaluate:t=>vo(Nr.getValueFor(t),Lo.getValueFor(t),er.getValueFor(t))}),Pr=(mo("neutral-layer-card-container").withDefault((t=>Er.getValueFor(t).evaluate(t))),yo("neutral-layer-floating-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(bo(t,e)+i)}(Nr.getValueFor(t),Lo.getValueFor(t),er.getValueFor(t))})),Ar=(mo("neutral-layer-floating").withDefault((t=>Pr.getValueFor(t).evaluate(t))),yo("neutral-layer-1-recipe").withDefault({evaluate:t=>function(t,e){return t.get(bo(t,e))}(Nr.getValueFor(t),Lo.getValueFor(t))})),Ir=mo("neutral-layer-1").withDefault((t=>Ar.getValueFor(t).evaluate(t))),Hr=yo("neutral-layer-2-recipe").withDefault({evaluate:t=>vo(Nr.getValueFor(t),Lo.getValueFor(t),er.getValueFor(t))}),zr=mo("neutral-layer-2").withDefault((t=>Hr.getValueFor(t).evaluate(t))),jr=yo("neutral-layer-3-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(bo(t,e)+-1*i*2)}(Nr.getValueFor(t),Lo.getValueFor(t),er.getValueFor(t))}),_r=mo("neutral-layer-3").withDefault((t=>jr.getValueFor(t).evaluate(t))),qr=yo("neutral-layer-4-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(bo(t,e)+-1*i*3)}(Nr.getValueFor(t),Lo.getValueFor(t),er.getValueFor(t))}),Gr=(mo("neutral-layer-4").withDefault((t=>qr.getValueFor(t).evaluate(t))),mo("fill-color").withDefault((t=>Ir.getValueFor(t))));var Ur;!function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"}(Ur||(Ur={}));const Wr=yo("accent-fill-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,r,s,n,a,l,c,h,d,u,f){return Wi(e)?uo(t,e,8,c,h,d,u,void 0):uo(t,e,5,o,r,s,n,void 0)}(Br.getValueFor(t),e||Gr.getValueFor(t),0,Bo.getValueFor(t),Eo.getValueFor(t),Po.getValueFor(t),Ao.getValueFor(t),0,0,Bo.getValueFor(t),Eo.getValueFor(t),Po.getValueFor(t),Ao.getValueFor(t))}),Xr=mo("accent-fill-rest").withDefault((t=>Wr.getValueFor(t).evaluate(t).rest)),Yr=mo("accent-fill-hover").withDefault((t=>Wr.getValueFor(t).evaluate(t).hover)),Kr=mo("accent-fill-active").withDefault((t=>Wr.getValueFor(t).evaluate(t).active)),Qr=mo("accent-fill-focus").withDefault((t=>Wr.getValueFor(t).evaluate(t).focus)),Zr=yo("foreground-on-accent-recipe").withDefault({evaluate:t=>so(Xr.getValueFor(t),Yr.getValueFor(t),Kr.getValueFor(t),Qr.getValueFor(t),Ur.normal)}),Jr=mo("foreground-on-accent-rest").withDefault((t=>Zr.getValueFor(t).evaluate(t).rest)),ts=mo("foreground-on-accent-hover").withDefault((t=>Zr.getValueFor(t).evaluate(t).hover)),es=mo("foreground-on-accent-active").withDefault((t=>Zr.getValueFor(t).evaluate(t).active)),is=(mo("foreground-on-accent-focus").withDefault((t=>Zr.getValueFor(t).evaluate(t).focus)),yo("accent-foreground-recipe").withDefault({evaluate:(t,e)=>uo(Br.getValueFor(t),e||Gr.getValueFor(t),9.5,Io.getValueFor(t),Ho.getValueFor(t),zo.getValueFor(t),jo.getValueFor(t))})),os=mo("accent-foreground-rest").withDefault((t=>is.getValueFor(t).evaluate(t).rest)),rs=mo("accent-foreground-hover").withDefault((t=>is.getValueFor(t).evaluate(t).hover)),ss=mo("accent-foreground-active").withDefault((t=>is.getValueFor(t).evaluate(t).active)),ns=(mo("accent-foreground-focus").withDefault((t=>is.getValueFor(t).evaluate(t).focus)),yo("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>ho(Nr.getValueFor(t),e||Gr.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)})),as=mo("accent-stroke-control-rest").withDefault((t=>ns.getValueFor(t).evaluate(t,Xr.getValueFor(t)).rest)),ls=mo("accent-stroke-control-hover").withDefault((t=>ns.getValueFor(t).evaluate(t,Yr.getValueFor(t)).hover)),cs=mo("accent-stroke-control-active").withDefault((t=>ns.getValueFor(t).evaluate(t,Kr.getValueFor(t)).active)),hs=(mo("accent-stroke-control-focus").withDefault((t=>ns.getValueFor(t).evaluate(t,Qr.getValueFor(t)).focus)),yo("neutral-fill-recipe").withDefault({evaluate:(t,e)=>po(Nr.getValueFor(t),e||Gr.getValueFor(t),_o.getValueFor(t),qo.getValueFor(t),Go.getValueFor(t),Uo.getValueFor(t),void 0,2,3,1,2,void 0)})),ds=mo("neutral-fill-rest").withDefault((t=>hs.getValueFor(t).evaluate(t).rest)),us=mo("neutral-fill-hover").withDefault((t=>hs.getValueFor(t).evaluate(t).hover)),fs=mo("neutral-fill-active").withDefault((t=>hs.getValueFor(t).evaluate(t).active)),ps=(mo("neutral-fill-focus").withDefault((t=>hs.getValueFor(t).evaluate(t).focus)),yo("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>po(Nr.getValueFor(t),e||Gr.getValueFor(t),Wo.getValueFor(t),Xo.getValueFor(t),Yo.getValueFor(t),Ko.getValueFor(t),void 0,2,3,1,0,void 0)})),gs=mo("neutral-fill-input-rest").withDefault((t=>ps.getValueFor(t).evaluate(t).rest)),bs=mo("neutral-fill-input-hover").withDefault((t=>ps.getValueFor(t).evaluate(t).hover)),vs=(mo("neutral-fill-input-active").withDefault((t=>ps.getValueFor(t).evaluate(t).active)),mo("neutral-fill-input-focus").withDefault((t=>ps.getValueFor(t).evaluate(t).focus))),ms=yo("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>po(Nr.getValueFor(t),e||Gr.getValueFor(t),Qo.getValueFor(t),Zo.getValueFor(t),Jo.getValueFor(t),tr.getValueFor(t),1,Qo.getValueFor(t),Qo.getValueFor(t)-Zo.getValueFor(t),Qo.getValueFor(t)-Jo.getValueFor(t),tr.getValueFor(t),1)}),ys=mo("neutral-fill-input-alt-rest").withDefault((t=>ms.getValueFor(t).evaluate(t).rest)),ws=mo("neutral-fill-input-alt-hover").withDefault((t=>ms.getValueFor(t).evaluate(t).hover)),$s=mo("neutral-fill-input-alt-active").withDefault((t=>ms.getValueFor(t).evaluate(t).active)),xs=mo("neutral-fill-input-alt-focus").withDefault((t=>ms.getValueFor(t).evaluate(t).focus)),ks=yo("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),er.getValueFor(t),ir.getValueFor(t),or.getValueFor(t),er.getValueFor(t),1)}),Cs=(mo("neutral-fill-layer-rest").withDefault((t=>ks.getValueFor(t).evaluate(t).rest)),mo("neutral-fill-layer-hover").withDefault((t=>ks.getValueFor(t).evaluate(t).hover)),mo("neutral-fill-layer-active").withDefault((t=>ks.getValueFor(t).evaluate(t).active)),yo("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),rr.getValueFor(t),rr.getValueFor(t),rr.getValueFor(t),rr.getValueFor(t))})),Fs=(mo("neutral-fill-layer-alt-rest").withDefault((t=>Cs.getValueFor(t).evaluate(t).rest)),yo("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),sr.getValueFor(t),nr.getValueFor(t),ar.getValueFor(t),lr.getValueFor(t))})),Vs=mo("neutral-fill-secondary-rest").withDefault((t=>Fs.getValueFor(t).evaluate(t).rest)),Ds=mo("neutral-fill-secondary-hover").withDefault((t=>Fs.getValueFor(t).evaluate(t).hover)),Ts=(mo("neutral-fill-secondary-active").withDefault((t=>Fs.getValueFor(t).evaluate(t).active)),mo("neutral-fill-secondary-focus").withDefault((t=>Fs.getValueFor(t).evaluate(t).focus)),yo("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),cr.getValueFor(t),hr.getValueFor(t),dr.getValueFor(t),ur.getValueFor(t))})),Os=mo("neutral-fill-stealth-rest").withDefault((t=>Ts.getValueFor(t).evaluate(t).rest)),Ss=mo("neutral-fill-stealth-hover").withDefault((t=>Ts.getValueFor(t).evaluate(t).hover)),Rs=mo("neutral-fill-stealth-active").withDefault((t=>Ts.getValueFor(t).evaluate(t).active)),Ms=(mo("neutral-fill-stealth-focus").withDefault((t=>Ts.getValueFor(t).evaluate(t).focus)),yo("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>uo(Nr.getValueFor(t),e||Gr.getValueFor(t),4.5,fr.getValueFor(t),pr.getValueFor(t),gr.getValueFor(t),br.getValueFor(t))})),Ns=mo("neutral-fill-strong-rest").withDefault((t=>Ms.getValueFor(t).evaluate(t).rest)),Ls=(mo("neutral-fill-strong-hover").withDefault((t=>Ms.getValueFor(t).evaluate(t).hover)),mo("neutral-fill-strong-active").withDefault((t=>Ms.getValueFor(t).evaluate(t).active)),mo("neutral-fill-strong-focus").withDefault((t=>Ms.getValueFor(t).evaluate(t).focus)),yo("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>uo(Nr.getValueFor(t),e||Gr.getValueFor(t),16,0,-19,-30,0)})),Bs=mo("neutral-foreground-rest").withDefault((t=>Ls.getValueFor(t).evaluate(t).rest)),Es=(mo("neutral-foreground-hover").withDefault((t=>Ls.getValueFor(t).evaluate(t).hover)),mo("neutral-foreground-active").withDefault((t=>Ls.getValueFor(t).evaluate(t).active)),mo("neutral-foreground-focus").withDefault((t=>Ls.getValueFor(t).evaluate(t).focus)),yo("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>function(t,e,i){return t.colorContrast(e,4.5)}(Nr.getValueFor(t),e||Gr.getValueFor(t))})),Ps=(mo("neutral-foreground-hint").withDefault((t=>Es.getValueFor(t).evaluate(t))),yo("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),vr.getValueFor(t),mr.getValueFor(t),yr.getValueFor(t),wr.getValueFor(t))})),As=mo("neutral-stroke-rest").withDefault((t=>Ps.getValueFor(t).evaluate(t).rest)),Is=mo("neutral-stroke-hover").withDefault((t=>Ps.getValueFor(t).evaluate(t).hover)),Hs=mo("neutral-stroke-active").withDefault((t=>Ps.getValueFor(t).evaluate(t).active)),zs=(mo("neutral-stroke-focus").withDefault((t=>Ps.getValueFor(t).evaluate(t).focus)),yo("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>ho(Nr.getValueFor(t),e||Gr.getValueFor(t),$r.getValueFor(t),xr.getValueFor(t),kr.getValueFor(t),Cr.getValueFor(t),5)})),js=mo("neutral-stroke-control-rest").withDefault((t=>zs.getValueFor(t).evaluate(t).rest)),_s=mo("neutral-stroke-control-hover").withDefault((t=>zs.getValueFor(t).evaluate(t).hover)),qs=mo("neutral-stroke-control-active").withDefault((t=>zs.getValueFor(t).evaluate(t).active)),Gs=(mo("neutral-stroke-control-focus").withDefault((t=>zs.getValueFor(t).evaluate(t).focus)),yo("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>function(t,e,i){return t.get(t.closestIndexOf(e)+Xi(e)*i)}(Nr.getValueFor(t),e||Gr.getValueFor(t),Fr.getValueFor(t))})),Us=(mo("neutral-stroke-divider-rest").withDefault((t=>Gs.getValueFor(t).evaluate(t))),yo("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,r,s,n,a){const l=t.closestIndexOf(e),c=Xi(e),h=l+c*i,d=h+c*(o-i),u=h+c*(r-i),f=h+c*(s-i),p=`calc(100% - ${a})`;function g(e,i){const o=t.get(e);if(i){const i=t.get(e+20*c),r=`linear-gradient(${o.toColorString()} ${p}, ${i.toColorString()} ${p}, ${i.toColorString()})`;return ao.fromObject(o,r)}return o}return{rest:g(h,!0),hover:g(d,!0),active:g(u,!1),focus:g(f,!0)}}(Nr.getValueFor(t),e||Gr.getValueFor(t),$r.getValueFor(t),xr.getValueFor(t),kr.getValueFor(t),Cr.getValueFor(t),0,Do.getValueFor(t)+"px")})),Ws=mo("neutral-stroke-input-rest").withDefault((t=>Us.getValueFor(t).evaluate(t).rest)),Xs=mo("neutral-stroke-input-hover").withDefault((t=>Us.getValueFor(t).evaluate(t).hover)),Ys=(mo("neutral-stroke-input-active").withDefault((t=>Us.getValueFor(t).evaluate(t).active)),mo("neutral-stroke-input-focus").withDefault((t=>Us.getValueFor(t).evaluate(t).focus)),yo("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>fo(Nr.getValueFor(t),e||Gr.getValueFor(t),Vr.getValueFor(t),Dr.getValueFor(t),Tr.getValueFor(t),Vr.getValueFor(t))})),Ks=mo("neutral-stroke-layer-rest").withDefault((t=>Ys.getValueFor(t).evaluate(t).rest)),Qs=(mo("neutral-stroke-layer-hover").withDefault((t=>Ys.getValueFor(t).evaluate(t).hover)),mo("neutral-stroke-layer-active").withDefault((t=>Ys.getValueFor(t).evaluate(t).active)),yo("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>uo(Nr.getValueFor(t),e||Gr.getValueFor(t),5.5,0,Or.getValueFor(t),Sr.getValueFor(t),Rr.getValueFor(t))})),Zs=mo("neutral-stroke-strong-rest").withDefault((t=>Qs.getValueFor(t).evaluate(t).rest)),Js=mo("neutral-stroke-strong-hover").withDefault((t=>Qs.getValueFor(t).evaluate(t).hover)),tn=mo("neutral-stroke-strong-active").withDefault((t=>Qs.getValueFor(t).evaluate(t).active)),en=(mo("neutral-stroke-strong-focus").withDefault((t=>Qs.getValueFor(t).evaluate(t).focus)),yo("focus-stroke-outer-recipe").withDefault({evaluate:t=>(Nr.getValueFor(t),Wi(Gr.getValueFor(t))?to:eo)})),on=mo("focus-stroke-outer").withDefault((t=>en.getValueFor(t).evaluate(t))),rn=yo("focus-stroke-inner-recipe").withDefault({evaluate:t=>{return Br.getValueFor(t),e=Gr.getValueFor(t),on.getValueFor(t),Wi(e)?eo:to;var e}}),sn=mo("focus-stroke-inner").withDefault((t=>rn.getValueFor(t).evaluate(t))),nn=yo("foreground-on-accent-large-recipe").withDefault({evaluate:t=>so(Xr.getValueFor(t),Yr.getValueFor(t),Kr.getValueFor(t),Qr.getValueFor(t),Ur.large)}),an=(mo("foreground-on-accent-rest-large").withDefault((t=>nn.getValueFor(t).evaluate(t).rest)),mo("foreground-on-accent-hover-large").withDefault((t=>nn.getValueFor(t).evaluate(t,Yr.getValueFor(t)).hover)),mo("foreground-on-accent-active-large").withDefault((t=>nn.getValueFor(t).evaluate(t,Kr.getValueFor(t)).active)),mo("foreground-on-accent-focus-large").withDefault((t=>nn.getValueFor(t).evaluate(t,Qr.getValueFor(t)).focus)),mo("neutral-fill-inverse-rest-delta").withDefault(0)),ln=mo("neutral-fill-inverse-hover-delta").withDefault(-3),cn=mo("neutral-fill-inverse-active-delta").withDefault(7),hn=mo("neutral-fill-inverse-focus-delta").withDefault(0),dn=yo("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,r,s){const n=Xi(e),a=t.closestIndexOf(t.colorContrast(e,14)),l=a+n*Math.abs(i-o);let c,h;return(1===n?i<o:n*i>n*o)?(c=a,h=l):(c=l,h=a),{rest:t.get(c),hover:t.get(h),active:t.get(c+n*r),focus:t.get(c+n*s)}}(Nr.getValueFor(t),e||Gr.getValueFor(t),an.getValueFor(t),ln.getValueFor(t),cn.getValueFor(t),hn.getValueFor(t))}),un=(mo("neutral-fill-inverse-rest").withDefault((t=>dn.getValueFor(t).evaluate(t).rest)),mo("neutral-fill-inverse-hover").withDefault((t=>dn.getValueFor(t).evaluate(t).hover)),mo("neutral-fill-inverse-active").withDefault((t=>dn.getValueFor(t).evaluate(t).active)),mo("neutral-fill-inverse-focus").withDefault((t=>dn.getValueFor(t).evaluate(t).focus)),(function(t,...e){const{styles:i,behaviors:o}=pi(t,e);return new bi(i,o)})`(${xo} + ${ko}) * ${Co}`);class fn{constructor(t,e,i){this.propertyName=t,this.value=e,this.styles=i}bind(t){F.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){F.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function pn(t,e){return new fn("appearance",t,e)}const gn=":not([disabled])",bn="[disabled]";class vn extends hi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}X([_],vn.prototype,"appearance",void 0);const mn=vn.compose({baseName:"button",baseClass:hi,template:(t,e)=>_e`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Ge("control")}
    >
        ${Xe(0,e)}
        <span class="content" part="content">
            <slot ${fi("defaultSlottedContent")}></slot>
        </span>
        ${We(0,e)}
    </button>
`,styles:(t,e)=>gi`
    :host([disabled]) {
      opacity: ${$o};
      cursor: ${vi};
    }

    ${((t,e,i="",o="")=>gi`
    ${xi("inline-flex")} :host {
      position: relative;
      box-sizing: border-box;
      font-family: ${Oo};
      outline: none;
      font-size: ${So};
      line-height: ${Ro};
      height: calc(${un} * 1px);
      min-width: calc(${un} * 1px);
      color: ${Bs};
      border-radius: calc(${Fo} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    :host .control {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${js};
      border: calc(${Do} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Co} * 2 * ${ko})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      cursor: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    :host .control${i}:hover {
      background: padding-box linear-gradient(${us}, ${us}),
        border-box ${_s};
    }

    :host .control${i}:active {
      background: padding-box linear-gradient(${fs}, ${fs}),
        border-box ${qs};
    }

    :host .control:${Ci} {
      border-color: ${on} !important;
      box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${on} inset !important;
    }

    :host .control${o} {
      background: padding-box linear-gradient(${ds}, ${ds}), border-box ${As};
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `.withBehaviors(yi(gi`
        :host .control {
          background: ${wi.ButtonFace};
          border-color: ${wi.ButtonText};
          color: ${wi.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled])) .control:hover,
        :host .control${i}:hover,
        .control${i}:hover {
          forced-color-adjust: none;
          background: ${wi.Highlight};
          color: ${wi.HighlightText};
        }
        .control:${Ci},
        :host .control:${Ci},
        :host(:${Ci}) .control {
          forced-color-adjust: none;
          background: ${wi.ButtonFace};
          border-color: ${wi.Highlight} !important;
          box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${wi.Highlight} !important;
        }
        :host([href]) .control {
          background: ${wi.ButtonFace};
          border-color: ${wi.LinkText};
          color: ${wi.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover {
          background: ${wi.LinkText};
          border-color: ${wi.LinkText} !important;
          color: ${wi.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control:${Ci}{
          forced-color-adjust: none;
          border-color: ${wi.LinkText} !important;
          box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${wi.LinkText} !important;
        }
    `)))(0,0,gn,bn)}
  `.withBehaviors(yi(gi`
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .control {
          border-color: ${wi.GrayText};
          color: ${wi.GrayText};
          fill: currentcolor;
        }
      `),pn("accent",gi`
      ${((t,e,i="",o="")=>gi`
    :host .control {
      background: padding-box linear-gradient(${Xr}, ${Xr}),
        border-box ${as};
      color: ${Jr};
    }

    :host .control${i}:hover {
      background: padding-box linear-gradient(${Yr}, ${Yr}),
        border-box ${ls};
      color: ${ts};
    }

    :host .control${i}:active {
      background: padding-box linear-gradient(${Kr}, ${Kr}),
        border-box ${cs};
      color: ${es};
    }

    :host .control:${Ci} {
      box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${on} inset,
        0 0 0 calc(((${To} + ${Do}) - ${Do}) * 1px) ${sn} inset !important;
    }

    :host .control${o} {
      background: ${Xr};
    }
  `.withBehaviors(yi(gi`
        :host .control {
          forced-color-adjust: none;
          background: ${wi.Highlight};
          color: ${wi.HighlightText};
        }
        :host .control${i}:hover,
        :host .control${i}:active {
          background: ${wi.HighlightText};
          border-color: ${wi.Highlight};
          color: ${wi.Highlight};
        }
        :host .control:${Ci} {
          background: ${wi.Highlight};
          box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${wi.Highlight} inset,
            0 0 0 calc(((${To} + ${Do}) - ${Do}) * 1px) ${wi.HighlightText} inset !important;
        }
        :host([href]) .control {
          background: ${wi.LinkText};
          color: ${wi.HighlightText};
        }
        :host([href]) .control:hover {
          background: ${wi.ButtonFace};
          border-color: ${wi.LinkText};
          box-shadow: none;
          color: ${wi.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:${Ci} {
          background: ${wi.LinkText};
          box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${wi.LinkText} inset,
            0 0 0 calc(((${To} + ${Do}) - ${Do}) * 1px) ${wi.HighlightText} inset !important;
          color: ${wi.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,gn,bn)},
      `.withBehaviors(yi(gi`
            :host([disabled]) .control {
              background: ${wi.ButtonFace};
            }
          `))),pn("lightweight",gi`
      ${((t,e,i="",o="")=>gi`
    :host {
      color: ${os};
    }

    :host .control {
      background: ${Os};
    }

    :host .control${i}:hover {
      background: ${Ss};
      color: ${rs};
    }

    :host .control${i}:active {
      background: ${Rs};
      color: ${ss};
    }

    :host .control${o} {
      background: ${Os};
    }
  `.withBehaviors(yi(gi`
        :host .control {
          border-color: ${wi.ButtonFace};
          color: ${wi.ButtonText};
        }
        :host .control${i}:hover,
        :host .control${i}:active,
        :host .control:${Ci} {
          border-color: ${wi.Highlight};
          background: ${wi.Highlight};
          box-shadow: none;
          color: ${wi.HighlightText};
        }
        :host([href]) .control {
          border-color: ${wi.ButtonFace};
          color: ${wi.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Ci} {
          background: ${wi.ButtonFace};
          box-shadow: none;
          color: ${wi.LinkText};
        }
      `)))(0,0,gn,bn)},
      `.withBehaviors(yi(gi`
            :host([disabled]) .control {
              border-color: ${wi.ButtonFace};
            }
          `))),pn("outline",gi`
      ${((t,e,i="",o="")=>gi`
    :host .control {
      background: transparent !important;
      border-color: ${As};
    }

    :host .control${i}:hover {
      border-color: ${Is};
    }

    :host .control${i}:active {
      border-color: ${Hs};
    }

    :host .control${o} {
      background: transparent !important;
      border-color: ${As};
    }
  `.withBehaviors(yi(gi`
        :host .control${o} {
          border-color: ${wi.ButtonText};
        }
        :host .control${i}:hover {
          border-color: ${wi.Highlight};
          color: ${wi.ButtonText};
        }
        :host([href]) {
          border-color: ${wi.LinkText};
        }
        :host([href]) .control:hover {
          box-shadow: 0 0 0 calc((${To} - ${Do}) * 1px) ${wi.LinkText};
          color: ${wi.LinkText};
        }
      `)))(0,0,gn,bn)}
      `.withBehaviors(yi(gi`
            :host([disabled]) .control {
              border-color: ${wi.GrayText};
            }
          `))),pn("stealth",gi`
      ${((t,e,i="",o="")=>gi`
    :host .control {
      background: ${Os};
    }

    :host .control${i}:hover {
      background: ${Ss};
    }

    :host .control${i}:active {
      background: ${Rs};
    }

    :host .control${o} {
      background: ${Os};
    }
  `.withBehaviors(yi(gi`
        :host .control {
          background: ${wi.ButtonFace};
          border-color: ${wi.ButtonFace};
          color: ${wi.ButtonText};
          fill: currentcolor;
        }
        :host .control${i}:hover,
        :host .control${i}:active,
        :host .control:${Ci} {
          background: ${wi.Highlight};
          border-color: ${wi.Highlight};
          box-shadow: none !important;
          color: ${wi.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control {
          border-color: ${wi.ButtonFace};
          color: ${wi.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Ci} {
          background: ${wi.LinkText};
          border-color: ${wi.LinkText};
          box-shadow: none !important;
          color: ${wi.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,gn,bn)}
      `.withBehaviors(yi(gi`
            :host([disabled]) .control {
              border-color: ${wi.ButtonFace};
            }
          `)))),shadowOptions:{delegatesFocus:!0}});class yn extends Ht{}const wn=ae.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,i)=>{let o=.12,r=.14;return e>16&&(o=.2,r=.24),`0 0 2px rgba(0, 0, 0, ${o}), 0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${r})`}}),$n=ae.create("elevation-shadow-card-rest-size").withDefault(4),xn=ae.create("elevation-shadow-card-hover-size").withDefault(8),kn=ae.create("elevation-shadow-card-active-size").withDefault(0),Cn=ae.create("elevation-shadow-card-focus-size").withDefault(8),Fn=ae.create("elevation-shadow-card-rest").withDefault((t=>wn.getValueFor(t).evaluate(t,$n.getValueFor(t)))),Vn=(ae.create("elevation-shadow-card-hover").withDefault((t=>wn.getValueFor(t).evaluate(t,xn.getValueFor(t)))),ae.create("elevation-shadow-card-active").withDefault((t=>wn.getValueFor(t).evaluate(t,kn.getValueFor(t)))),ae.create("elevation-shadow-card-focus").withDefault((t=>wn.getValueFor(t).evaluate(t,Cn.getValueFor(t)))),ae.create("elevation-shadow-tooltip-size").withDefault(16)),Dn=(ae.create("elevation-shadow-tooltip").withDefault((t=>wn.getValueFor(t).evaluate(t,Vn.getValueFor(t)))),ae.create("elevation-shadow-flyout-size").withDefault(32)),Tn=(ae.create("elevation-shadow-flyout").withDefault((t=>wn.getValueFor(t).evaluate(t,Dn.getValueFor(t)))),ae.create("elevation-shadow-dialog-size").withDefault(128));ae.create("elevation-shadow-dialog").withDefault((t=>wn.getValueFor(t).evaluate(t,Tn.getValueFor(t))));class On extends yn{cardFillColorChanged(t,e){if(e){const t=Ji(e);null!==t&&(this.neutralPaletteSource=e,Gr.setValueFor(this,_i.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=Ji(e),i=_i.create(t.r,t.g,t.b);Nr.setValueFor(this,Ki.create(i))}}handleChange(t,e){this.cardFillColor||Gr.setValueFor(this,(e=>ks.getValueFor(e).evaluate(e,Gr.getValueFor(t)).rest))}connectedCallback(){super.connectedCallback();const t=qt(this);if(t){const e=F.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}X([_({attribute:"card-fill-color",mode:"fromView"})],On.prototype,"cardFillColor",void 0),X([_({attribute:"neutral-palette-source",mode:"fromView"})],On.prototype,"neutralPaletteSource",void 0);const Sn=On.compose({baseName:"card",baseClass:yn,template:(t,e)=>_e`
    <slot></slot>
`,styles:(t,e)=>gi`
    ${xi("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Gr};
      color: ${Bs};
      border: calc(${Do} * 1px) solid ${Ks};
      border-radius: calc(${Vo} * 1px);
      box-shadow: ${Fn};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(yi(gi`
        :host {
          background: ${wi.Canvas};
          color: ${wi.CanvasText};
        }
      `))});class Rn extends Ht{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}}X([_({attribute:"fill"})],Rn.prototype,"fill",void 0),X([_({attribute:"color"})],Rn.prototype,"color",void 0),X([_({mode:"boolean"})],Rn.prototype,"circular",void 0);class Mn extends Rn{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&u.queueUpdate((()=>{this.classList.add(e),this.classList.remove(t)}))}}X([_({mode:"fromView"})],Mn.prototype,"appearance",void 0);const Nn=Mn.compose({baseName:"badge",baseClass:Rn,template:(t,e)=>_e`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(t,e)=>gi`
    ${xi("inline-block")} :host {
      box-sizing: border-box;
      font-family: ${Oo};
      font-size: ${Mo};
      line-height: ${No};
    }

    .control {
      border-radius: calc(${Fo} * 1px);
      padding: calc(((${Co} * 0.5) - ${Do}) * 1px) calc((${Co} - ${Do}) * 1px);
      border: calc(${Do} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Bs};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Xr};
      color: ${Jr};
    }

    :host(.neutral) .control {
      background: ${Vs};
      color: ${Bs};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${No} - calc(${Co} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});class Ln extends Ht{}class Bn extends(ni(Ln)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var En;!function(t){t.email="email",t.password="password",t.tel="tel",t.text="text",t.url="url"}(En||(En={}));class Pn extends Bn{constructor(){super(...arguments),this.type=En.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&u.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}X([_({attribute:"readonly",mode:"boolean"})],Pn.prototype,"readOnly",void 0),X([_({mode:"boolean"})],Pn.prototype,"autofocus",void 0),X([_],Pn.prototype,"placeholder",void 0),X([_],Pn.prototype,"type",void 0),X([_],Pn.prototype,"list",void 0),X([_({converter:z})],Pn.prototype,"maxlength",void 0),X([_({converter:z})],Pn.prototype,"minlength",void 0),X([_],Pn.prototype,"pattern",void 0),X([_({converter:z})],Pn.prototype,"size",void 0),X([_({mode:"boolean"})],Pn.prototype,"spellcheck",void 0),X([T],Pn.prototype,"defaultSlottedNodes",void 0);class An{}function In(t,e,i){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}Ye(An,be),Ye(Pn,Ue,An);const Hn=ae.create("input-placeholder-rest").withDefault((t=>{const e=ps.getValueFor(t);return Es.getValueFor(t).evaluate(t,e.evaluate(t).rest)})),zn=ae.create("input-placeholder-hover").withDefault((t=>{const e=ps.getValueFor(t);return Es.getValueFor(t).evaluate(t,e.evaluate(t).hover)})),jn=ae.create("input-filled-placeholder-rest").withDefault((t=>{const e=Fs.getValueFor(t);return Es.getValueFor(t).evaluate(t,e.evaluate(t).rest)})),_n=ae.create("input-filled-placeholder-hover").withDefault((t=>{const e=Fs.getValueFor(t);return Es.getValueFor(t).evaluate(t,e.evaluate(t).hover)}));class qn extends Pn{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([_],qn.prototype,"appearance",void 0);const Gn=qn.compose({baseName:"text-field",baseClass:Pn,template:(t,e)=>_e`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${fi({property:"defaultSlottedNodes",filter:In})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Xe(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Ge("control")}
            />
            ${We(0,e)}
        </div>
    </template>
`,styles:(t,e)=>{return gi`
    ${xi("inline-block")}

    ${i=".root",gi`
  :host {
    font-family: ${Oo};
    font-size: ${So};
    line-height: ${Ro};
    color: ${Bs};
    fill: currentcolor;
    outline: none;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    background: padding-box linear-gradient(${gs}, ${gs}),
      border-box ${Ws};
    border: calc(${Do} * 1px) solid transparent;
    border-radius: calc(${Fo} * 1px);
    height: calc(${un} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
  }

  .control:hover,
  .control:${Ci},
  .control:disabled,
  .control:active {
    outline: none;
  }

  .label {
    display: block;
    color: ${Bs};
    cursor: pointer;
    font-size: ${So};
    line-height: ${Ro};
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${i} {
    background: padding-box linear-gradient(${bs}, ${bs}),
      border-box ${Xs};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${vs}, ${vs}),
      border-box ${Ws};
  }

  .control::placeholder {
    color: ${Hn};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${zn};
  }

  :host([disabled]) ${i}, :host([readonly]) ${i}, :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${vi};
  }

  :host([disabled]) {
    opacity: ${$o};
  }

  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${gs}, ${gs}),
      border-box ${As};
  }
`}

    ${gi`
  :host(:not([disabled]):active)::after {
    left: 50%;
    width: 40%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(:not([disabled]):focus-within)::after {
    left: 0;
    width: 100%;
    transform: none;
  }

  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    content: '';
    position: absolute;
    height: calc(${To} * 1px);
    bottom: 0;
    border-bottom: calc(${To} * 1px) solid ${Xr};
    border-bottom-left-radius: calc(${Fo} * 1px);
    border-bottom-right-radius: calc(${Fo} * 1px);
    z-index: 2;
    transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Co} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(pn("filled",((t,e)=>{return gi`
    ${i=".root",gi`
  :host ${i} {
    background: ${Vs};
    border-color: transparent;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${i} {
    background: ${Ds};
    border-color: transparent;
  }

  .control::placeholder {
    color: ${jn};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${_n};
  }

  :host(:focus-within:not([disabled])) ${i} {
    border-color: transparent;
    box-shadow: none;
  }
`}
  `.withBehaviors(yi(gi`
        ${((t,e,i)=>gi`
  :host ${i},
  :host(:hover:not([disabled])) ${i},
  :host(:active:not([disabled])) ${i},
  :host(:focus-within:not([disabled])) ${i} {
    background: ${wi.Field};
    border-color: ${wi.FieldText};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${wi.Highlight};
  }
  :host([disabled]) ${i} {
    border-color: ${wi.GrayText};
  }
`)(0,0,".root")}
      `));var i})()),yi(gi`
        ${((t,e,i)=>gi`
  :host ${i} {
    background: ${wi.Field};
    border-color: ${wi.FieldText};
  }
  :host(:hover:not([disabled]):not(:focus-within)) ${i} {
    border-color: ${wi.Highlight};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${wi.Highlight};
  }
  :host([disabled]) {
    opacity: 1;
  }
  :host([disabled]) ${i} {
    border-color: ${wi.GrayText};
  }
  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder,
  :host([disabled]) .label {
    color: ${wi.GrayText};
    fill: currentcolor;
  }
`)(0,0,".root")}
      `));var i},shadowOptions:{delegatesFocus:!0}});class Un extends Ht{}class Wn extends(ai(Un)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Xn extends Wn{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(" "!==t.key)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(t){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}X([_({attribute:"readonly",mode:"boolean"})],Xn.prototype,"readOnly",void 0),X([T],Xn.prototype,"name",void 0),X([T],Xn.prototype,"defaultSlottedNodes",void 0);const Yn=Xn.compose({baseName:"radio",template:(t,e)=>_e`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(t,e)=>gi`
    ${xi("inline-flex")} :host {
      --input-size: calc((${un} / 2) + ${Co});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${Do} * 1px) solid ${Zs};
      background: ${ys};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Oo};
      color: ${Bs};
      ${""} padding-inline-start: calc(${Co} * 2px + 2px);
      margin-inline-end: calc(${Co} * 2px + 2px);
      cursor: pointer;
      font-size: ${So};
      line-height: ${Ro};
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Jr};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${ws};
      border-color: ${Js};
    }

    :host(:not(.disabled):active) .control {
      background: ${$s};
      border-color: ${tn};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Ci}) .control {
      box-shadow: 0 0 0 1px ${Gr}, 0 0 0 3px ${on};
      background: ${xs};
      border-color: ${on};
    }

    :host(.checked) .control {
      background: ${Xr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Yr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Kr};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${vi};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$o};
    }
  `.withBehaviors(yi(gi`
        .control {
          background: ${wi.Field};
          border-color: ${wi.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${wi.Highlight};
        }
        :host(:${Ci}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
          background: ${wi.Field};
          border-color: ${wi.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${wi.Highlight};
          background: ${wi.Highlight};
        }
        :host(.checked:${Ci}) .control {
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${wi.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${wi.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${wi.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${wi.Field};
          border-color: ${wi.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${wi.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '});var Kn;!function(t){t.horizontal="horizontal",t.vertical="vertical"}(Kn||(Kn={}));const Qn=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?Fi.rtl:Fi.ltr};class Zn extends Ht{constructor(){super(...arguments),this.orientation=Kn.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach((t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))})),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((t=>{t!==i&&t.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,i=t.target,o=null!==i?e.indexOf(i):0,r=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===r&&o===r||r===e.length-1&&r===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")})))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")})))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&i===Je,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Ze,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.key))this.moveRightOffGroup();else for(i===e.length&&(i=0);i<e.length&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.key))this.moveLeftOffGroup();else for(;i>=0&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}},this.keydownHandler=t=>{const e=t.key;if(e in ii&&this.isInsideFoundationToolbar)return!0;switch(e){case ei:this.checkFocusedRadio();break;case Je:case Qe:this.direction===Fi.ltr?this.moveRight(t):this.moveLeft(t);break;case Ze:case ti:this.direction===Fi.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.disabled?t.disabled=!0:t.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)})),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Qn(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((t=>{t.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=t?t.length:0;e>1&&(t[e-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.value?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=null!==t?t.length:0;if(e>0&&!i){const i=t[e-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}X([_({attribute:"readonly",mode:"boolean"})],Zn.prototype,"readOnly",void 0),X([_({attribute:"disabled",mode:"boolean"})],Zn.prototype,"disabled",void 0),X([_],Zn.prototype,"name",void 0),X([_],Zn.prototype,"value",void 0),X([_],Zn.prototype,"orientation",void 0),X([T],Zn.prototype,"childItems",void 0),X([T],Zn.prototype,"slottedRadioButtons",void 0);const Jn=Zn.compose({baseName:"radio-group",template:(t,e)=>{return _e`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===Kn.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${fi({property:"slottedRadioButtons",filter:(i="[role=radio]",function(t,e,o){return 1===t.nodeType&&t.matches(i)})})}
            ></slot>
        </div>
    </template>
`;var i},styles:(t,e)=>gi`
  ${xi("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});class ta extends Ht{}class ea extends(ai(ta)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ia extends ea{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{" "===t.key&&(this.checked=!this.checked)},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}X([_({attribute:"readonly",mode:"boolean"})],ia.prototype,"readOnly",void 0),X([T],ia.prototype,"defaultSlottedNodes",void 0),X([T],ia.prototype,"indeterminate",void 0);const oa=ia.compose({baseName:"checkbox",template:(t,e)=>_e`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(t,e)=>gi`
    ${xi("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${un} / 2 + ${Co}) * 1px);
      height: calc((${un} / 2 + ${Co}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Fo} * 1px);
      border: calc(${Do} * 1px) solid ${Zs};
      background: ${ys};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Oo};
      color: ${Bs};
      ${""} padding-inline-start: calc(${Co} * 2px + 2px);
      margin-inline-end: calc(${Co} * 2px + 2px);
      cursor: pointer;
      font-size: ${So};
      line-height: ${Ro};
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Bs};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Jr};
    }

    :host(:not(.disabled):hover) .control {
      background: ${ws};
      border-color: ${Js};
    }

    :host(:not(.disabled):active) .control {
      background: ${$s};
      border-color: ${tn};
    }

    :host(:${Ci}) .control {
      box-shadow: 0 0 0 1px ${Gr}, 0 0 0 3px ${on};
      background: ${xs};
      border-color: ${on};
    }

    :host(.checked) .control {
      background: ${Xr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Yr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Kr};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${vi};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$o};
    }
  `.withBehaviors(yi(gi`
        .control {
          border-color: ${wi.FieldText};
          background: ${wi.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${wi.Highlight};
          background: ${wi.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${wi.FieldText};
        }
        :host(:${Ci}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
          background: ${wi.Field};
          border-color: ${wi.Highlight};
        }
        :host(.checked) .control {
          background: ${wi.Highlight};
          border-color: ${wi.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${wi.HighlightText};
          border-color: ${wi.Highlight};
        }
        :host(.checked:${Ci}) .control {
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${wi.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${wi.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${wi.GrayText};
          background: ${wi.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${wi.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});class ra extends Ht{}class sa extends(ai(ra)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class na extends sa{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case ei:case" ":this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}X([_({attribute:"readonly",mode:"boolean"})],na.prototype,"readOnly",void 0),X([T],na.prototype,"defaultSlottedNodes",void 0);class aa{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&wo.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new la(this.ltr,this.rtl,t),i=wo.getValueFor(t);wo.subscribe(e),e.attach(i),this.cache.set(t,e)}}class la{constructor(t,e,i){this.ltr=t,this.rtl=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const ca=na.compose({baseName:"switch",template:(t,e)=>_e`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fi("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${e.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(t,e)=>gi`
    :host([hidden]) {
      display: none;
    }

    ${xi("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Oo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${$o};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${vi};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${un} / 2) + ${Co}) * 2px);
      height: calc(((${un} / 2) + ${Co}) * 1px);
      background: ${ys};
      border-radius: calc(${un} * 1px);
      border: calc(${Do} * 1px) solid ${Zs};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${ws};
      border-color: ${Js};
    }

    :host(:not(.disabled):active) .switch {
      background: ${$s};
      border-color: ${tn};
    }

    :host(:${Ci}) .switch {
      box-shadow: 0 0 0 1px ${Gr}, 0 0 0 3px ${on};
      background: ${xs};
      border-color: ${on};
    }

    :host(.checked) .switch {
      background: ${Xr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Yr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Kr};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Bs};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Bs};
      cursor: pointer;
      font-size: ${So};
      line-height: ${Ro};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Bs};
      font-size: ${So};
      line-height: ${Ro};
      margin-inline-end: calc(${Co} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Co} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Xr};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Jr};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Yr};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${ts};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Kr};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${es};
    }

    :host(.checked:${Ci}:not(.disabled)) .switch {
      box-shadow: 0 0 0 1px ${Gr}, 0 0 0 3px ${on};
      border-color: transparent;
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new aa(gi`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,gi`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),yi(gi`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${wi.FieldText};
        }
        .switch {
          background: ${wi.Field};
          border-color: ${wi.FieldText};
        }
        :host(.checked) .switch {
          background: ${wi.Highlight};
          border-color: ${wi.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${wi.HighlightText};
          border-color: ${wi.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${wi.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${wi.Highlight};
        }
        :host(:${Ci}) .switch {
          forced-color-adjust: none;
          background: ${wi.Field};
          border-color: ${wi.Highlight};
          box-shadow: 0 0 0 1px ${wi.Highlight}, 0 0 0 3px ${wi.FieldText};
        }
        :host(.checked:${Ci}:not(.disabled)) .switch {
          forced-color-adjust: none;
          background: ${wi.Highlight};
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
          border-color: ${wi.Field};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${wi.GrayText};
        }
        :host(.disabled) .switch {
          background: ${wi.Field};
          border-color: ${wi.GrayText};
        }
        .status-message,
        .label {
          color: ${wi.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});function ha(t,e,i,o){let r=(0,1,s=(t-e)/(i-e),Math.min(Math.max(s,0),1));var s;return o===Fi.rtl&&(r=1-r),r}class da extends Ht{}class ua extends(ni(da)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var fa;!function(t){t.singleValue="single-value"}(fa||(fa={}));class pa extends ua{constructor(){super(...arguments),this.direction=Fi.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Kn.horizontal,this.mode=fa.singleValue,this.keypressHandler=t=>{if("Home"===t.key)t.preventDefault(),this.value=`${this.min}`;else if("End"===t.key)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Je:case ti:t.preventDefault(),this.increment();break;case Ze:case Qe:t.preventDefault(),this.decrement()}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,0===this.trackWidth&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=(t?"remove":"add")+"EventListener";this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown),this.thumb[e]("touchstart",this.handleThumbMouseDown),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.preventDefault(),t.target.focus()}const e=(null!==t?"add":"remove")+"EventListener";window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),window[e]("touchmove",this.handleMouseMove),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=null!==t},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===Kn.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=t=>{const e=ha(t,this.orientation===Kn.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Kn.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=(null!==t?"add":"remove")+"EventListener";if((null===t||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const e=this.orientation===Kn.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(e)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const i=e-Math.round(e/this.step)*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=i>=Number(this.step)/2?e-i+Number(this.step):e-i,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Qn(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==Fi.rtl&&this.orientation!==Kn.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),i=e<Number(this.max)?`${e}`:`${this.max}`;this.value=i}decrement(){const t=this.direction!==Fi.rtl&&this.orientation!==Kn.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),i=e>Number(this.min)?`${e}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(t){const e=100*(1-ha(Number(this.value),Number(this.min),Number(this.max),t));this.orientation===Kn.horizontal?this.position=this.isDragging?`right: ${e}%; transition: none;`:`right: ${e}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${e}%; transition: none;`:`bottom: ${e}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if("string"==typeof this.value)if(0===this.value.length)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}X([_({attribute:"readonly",mode:"boolean"})],pa.prototype,"readOnly",void 0),X([T],pa.prototype,"direction",void 0),X([T],pa.prototype,"isDragging",void 0),X([T],pa.prototype,"position",void 0),X([T],pa.prototype,"trackWidth",void 0),X([T],pa.prototype,"trackMinWidth",void 0),X([T],pa.prototype,"trackHeight",void 0),X([T],pa.prototype,"trackLeft",void 0),X([T],pa.prototype,"trackMinHeight",void 0),X([T],pa.prototype,"valueTextFormatter",void 0),X([_({converter:z})],pa.prototype,"min",void 0),X([_({converter:z})],pa.prototype,"max",void 0),X([_({converter:z})],pa.prototype,"step",void 0),X([_],pa.prototype,"orientation",void 0),X([_],pa.prototype,"mode",void 0);const ga=pa.compose({baseName:"slider",template:(t,e)=>_e`
    <template
        role="slider"
        class="${t=>t.readOnly?"readonly":""}
        ${t=>t.orientation||Kn.horizontal}"
        tabindex="${t=>t.disabled?null:0}"
        aria-valuetext="${t=>t.valueTextFormatter(t.value)}"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        aria-disabled="${t=>!!t.disabled||void 0}"
        aria-readonly="${t=>!!t.readOnly||void 0}"
        aria-orientation="${t=>t.orientation}"
        class="${t=>t.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${Ge("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${Ge("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${t=>t.position}"
            >
                <slot name="thumb">${e.thumb||""}</slot>
            </div>
        </div>
    </template>
`,styles:(t,e)=>gi`
    ${xi("inline-grid")} :host {
      --thumb-size: calc((${un} / 2) + ${Co} + (${Do} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${Co} / 2) * -1);
      --track-width: ${Co};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${Fo} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${Ci}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${Gr}, 0 0 0 4px ${on};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${js};
      border: calc(${Do} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${Xr};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Yr};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Kr};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${_s};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${qs};
    }
    .track-start {
      background: ${Xr};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${Fo} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${Ns};
      border: 1px solid ${Zs};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${Co} * 60px);
      min-width: calc(${Co} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${vi};
    }
    :host(.disabled) {
      opacity: ${$o};
    }
  `.withBehaviors(yi(gi`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${wi.FieldText};
          background: ${wi.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${wi.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${wi.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${wi.Field};
        }
        :host(:${Ci}) .thumb-cursor {
          background: ${wi.Highlight};
          border-color: ${wi.Highlight};
          box-shadow: 0 0 0 1px ${wi.Field}, 0 0 0 3px ${wi.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${wi.GrayText};
        }
      `)),thumb:'\n    <div class="thumb-cursor"></div>\n  '}),ba={min:0,max:0,direction:Fi.ltr,orientation:Kn.horizontal,disabled:!1};class va extends Ht{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=Fi.ltr,this.getSliderConfiguration=()=>{if(this.isSliderConfig(this.parentNode)){const t=this.parentNode,{min:e,max:i,direction:o,orientation:r,disabled:s}=t;void 0!==s&&(this.disabled=s),this.sliderDirection=o||Fi.ltr,this.sliderOrientation=r||Kn.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=e}else this.sliderDirection=ba.direction||Fi.ltr,this.sliderOrientation=ba.orientation||Kn.horizontal,this.sliderMaxPosition=ba.max,this.sliderMinPosition=ba.min},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:Fi.ltr,e=ha(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let i=Math.round(100*(1-e)),o=Math.round(100*e);return Number.isNaN(o)&&Number.isNaN(i)&&(i=50,o=50),this.sliderOrientation===Kn.horizontal?t===Fi.rtl?`right: ${o}%; left: ${i}%;`:`left: ${o}%; right: ${i}%;`:`top: ${o}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=F.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMinPosition=t.max;break;case"min":this.sliderMinPosition=t.min}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return void 0!==t.max&&void 0!==t.min}}X([T],va.prototype,"positionStyle",void 0),X([_],va.prototype,"position",void 0),X([_({attribute:"hide-mark",mode:"boolean"})],va.prototype,"hideMark",void 0),X([_({attribute:"disabled",mode:"boolean"})],va.prototype,"disabled",void 0),X([T],va.prototype,"sliderOrientation",void 0),X([T],va.prototype,"sliderMinPosition",void 0),X([T],va.prototype,"sliderMaxPosition",void 0),X([T],va.prototype,"sliderDirection",void 0);const ma=va.compose({baseName:"slider-label",template:(t,e)=>_e`
    <template
        aria-disabled="${t=>t.disabled}"
        class="${t=>t.sliderOrientation||Kn.horizontal}
            ${t=>t.disabled?"disabled":""}"
    >
        <div ${Ge("root")} part="root" class="root" style="${t=>t.positionStyle}">
            <div class="container">
                ${function(t,e){const i="function"==typeof e?e:()=>e;return(t,e)=>t.hideMark?null:i(t,e)}(0,_e`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`,styles:(t,e)=>gi`
    ${xi("block")} :host {
      font-family: ${Oo};
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${Do} * 1px);
      height: calc(${Co} * 1px);
      background: ${Zs};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${Co} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${$o};
    }
  `.withBehaviors(yi(gi`
        .mark {
          forced-color-adjust: none;
          background: ${wi.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${wi.GrayText};
        }
        :host(.disabled) .mark {
          background: ${wi.GrayText};
        }
      `))});fe.getOrCreate(undefined).withPrefix("fluent").register(mn(),Sn(),Nn(),Gn(),Yn(),Jn(),oa(),ca(),ga(),ma());const ya=document.querySelector("body"),wa=document.querySelector(".sidebar"),$a=document.getElementById("accent-color"),xa=document.getElementById("base-color"),ka=document.querySelector("fluent-switch"),Ca=document.querySelector("fluent-slider");wa&&Gr.setValueFor(wa,zr),ya&&Gr.setValueFor(ya,_r);const Fa=(t,e)=>{"accent"===e?ya&&Lr.setValueFor(ya,_i.from(Ji(t))):"base"===e&&ya&&Mr.setValueFor(ya,_i.from(Ji(t)))};$a.addEventListener("change",(()=>{Fa($a.value,"accent")})),xa.addEventListener("change",(()=>{Fa(xa.value,"base")})),ka.addEventListener("click",(()=>{ka.checked?(ya&&Lo.setValueFor(ya,go.DarkMode),Ca.value=100):ka.checked||(ya&&Lo.setValueFor(ya,go.LightMode),Ca.value=0)})),Ca.addEventListener("change",(()=>{ya&&Lo.setValueFor(ya,(100-Ca.value)/100),console.log(Ca.value),Ca.value<=45?ka.checked=!1:Ca.value>=46&&(ka.checked=!0)}))})();
//# sourceMappingURL=bundle.js.map