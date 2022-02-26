(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const t=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e.g)return e.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===t.trustedTypes&&(t.trustedTypes={createPolicy:(e,t)=>t});const r=Object.freeze([]),o=[],i=t.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let s=i;const n=[];function a(){if(n.length)throw n.shift()}function l(e){try{e.call()}catch(e){n.push(e),setTimeout(a,0)}}const c=`fast-${Math.random().toString(36).substring(2,8)}`,h=`${c}{`,u=`}${c}`,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(s!==i)throw new Error("The HTML policy can only be set once.");s=e},createHTML:e=>s.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(c),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${c}:`,"")),createInterpolationPlaceholder:e=>`${h}${e}${u}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${c}:${e}--\x3e`,queueUpdate(e){o.length<1&&window.requestAnimationFrame(d.processUpdates),o.push(e)},processUpdates(){let e=0;for(;e<o.length;)if(l(o[e]),e++,e>1024){for(let t=0,r=o.length-e;t<r;t++)o[t]=o[t+e];o.length-=e,e=0}o.length=0},nextUpdate:()=>new Promise((e=>{d.queueUpdate(e)})),setAttribute(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)},setBooleanAttribute(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function f(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function g(e){const t=this.spillover,r=t.indexOf(e);-1!==r&&t.splice(r,1)}function p(e){const t=this.spillover,r=this.source;for(let o=0,i=t.length;o<i;++o)t[o].handleChange(r,e)}function b(e){return-1!==this.spillover.indexOf(e)}class v{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=f,this.unsubscribe=g,this.notify=p,this.has=b,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,r=this.sub2,o=this.source;void 0!==t&&t.handleChange(o,e),void 0!==r&&r.handleChange(o,e)}}class m{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const r=this.subscribers[e];void 0!==r&&r.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var r;if(t){let r=this.subscribers[t];void 0===r&&(this.subscribers[t]=r=new v(this.source)),r.subscribe(e)}else this.sourceSubscribers=null!==(r=this.sourceSubscribers)&&void 0!==r?r:new v(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var r;if(t){const r=this.subscribers[t];void 0!==r&&r.unsubscribe(e)}else null===(r=this.sourceSubscribers)||void 0===r||r.unsubscribe(e)}}const y=/(:|&&|\|\||if)/,w=new WeakMap,$=new WeakMap;let x,k=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class C{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==x&&x.watch(e,this.name),e[this.field]}setValue(e,t){const r=this.field,o=e[r];if(o!==t){e[r]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,o,t),V(e).notify(this.name)}}}const F=Object.freeze({setArrayObserverFactory(e){k=e},getNotifier(e){let t=e.$fastController||w.get(e);return void 0===t&&(Array.isArray(e)?t=k(e):w.set(e,t=new m(e))),t},track(e,t){void 0!==x&&x.watch(e,t)},trackVolatile(){void 0!==x&&(x.needsRefresh=!0)},notify(e,t){V(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new C(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=$.get(e);if(void 0===t){let r=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==r;)t=$.get(r),r=Reflect.getPrototypeOf(r);t=void 0===t?[]:t.slice(0),$.set(e,t)}return t},binding(e,t,r=this.isVolatileBinding(e)){return new B(e,t,r)},isVolatileBinding:e=>y.test(e.toString())}),V=F.getNotifier,D=(F.trackVolatile,d.queueUpdate);function T(e,t){F.defineProperty(e,t)}let S=null;function R(e){S=e}class O{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return S}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}F.defineProperty(O.prototype,"index"),F.defineProperty(O.prototype,"length");const L=Object.seal(new O);class B extends v{constructor(e,t,r=!1){super(e,t),this.binding=e,this.isVolatileBinding=r,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const r=x;x=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return x=r,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const r=this.last,o=V(e),i=null===r?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=o,o.subscribe(this,t),null!==r){if(!this.needsRefresh){let t;x=void 0,t=r.propertySource[r.propertyName],x=this,e===t&&(this.needsRefresh=!0)}r.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,D(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class A{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function N(e){return e.map((e=>e instanceof A?N(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function P(e){return e.map((e=>e instanceof A?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}A.create=(()=>{if(d.supportsAdoptedStyleSheets){const e=new Map;return t=>new E(t,e)}return e=>new M(e)})();class E extends A{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=P(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=N(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let r=t.get(e);return void 0===r&&(r=new CSSStyleSheet,r.replaceSync(e),t.set(e,r)),r}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let I=0;class M extends A{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=P(e),this.styleSheets=N(e),this.styleClass="fast-style-class-"+ ++I}addStylesTo(e){const t=this.styleSheets,r=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const i=document.createElement("style");i.innerHTML=t[o],i.className=r,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let r=0,o=t.length;r<o;++r)e.removeChild(t[r]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const H={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},z={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class j{constructor(e,t,r=t.toLowerCase(),o="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=o,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===i&&(this.converter=H)}setValue(e,t){const r=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return F.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||"fromView"===t||d.queueUpdate((()=>{r.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;d.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":d.setBooleanAttribute(e,this.attribute,o)}r.delete(e)}))}static collect(e,...t){const r=[];t.push(e.attributes);for(let o=0,i=t.length;o<i;++o){const i=t[o];if(void 0!==i)for(let t=0,o=i.length;t<o;++t){const o=i[t];"string"==typeof o?r.push(new j(e,o)):r.push(new j(e,o.property,o.attribute,o.mode,o.converter))}}return r}}function _(e,t){let r;function o(e,t){arguments.length>1&&(r.property=t);const o=e.constructor.attributes||(e.constructor.attributes=[]);o.push(r)}return arguments.length>1?(r={},void o(e,t)):(r=void 0===e?{}:e,o)}const q={mode:"open"},G={},U=new Map;class W{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const r=j.collect(e,t.attributes),o=new Array(r.length),i={},s={};for(let e=0,t=r.length;e<t;++e){const t=r[e];o[e]=t.attribute,i[t.name]=t,s[t.attribute]=t}this.attributes=r,this.observedAttributes=o,this.propertyLookup=i,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?q:null===t.shadowOptions?void 0:Object.assign(Object.assign({},q),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?G:Object.assign(Object.assign({},G),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?A.create(t.styles):t.styles instanceof A?t.styles:A.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,r=t.prototype;for(let t=0,o=e.length;t<o;++t)F.defineProperty(r,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),U.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return U.get(e)}}function Q(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}const K=new WeakMap,X={bubbles:!0,composed:!0,cancelable:!0};function Y(e){return e.shadowRoot||K.get(e)||null}class Z extends m{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const r=t.shadowOptions;if(void 0!==r){const t=e.attachShadow(r);"closed"===r.mode&&K.set(e,t)}const o=F.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let r=0,i=o.length;r<i;++r){const i=o[r].name,s=e[i];void 0!==s&&(delete e[i],t[i]=s)}}}get isConnected(){return F.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,F.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Y(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const r=e.behaviors;e.addStylesTo(t),null!==r&&this.addBehaviors(r)}}removeStyles(e){const t=Y(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const r=e.behaviors;e.removeStylesFrom(t),null!==r&&this.removeBehaviors(r)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),r=e.length,o=[];for(let i=0;i<r;++i){const r=e[i];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),o.push(r))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,L)}}removeBehaviors(e,t=!1){const r=this.behaviors;if(null===r)return;const o=e.length,i=[];for(let s=0;s<o;++s){const o=e[s];if(r.has(o)){const e=r.get(o)-1;0===e||t?r.delete(o)&&i.push(o):r.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,L);const t=this.behaviors;if(null!==t)for(const[r]of t)r.bind(e,L);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[r]of t)r.unbind(e)}}onAttributeChangedCallback(e,t,r){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,r)}emit(e,t,r){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},X),r)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const r=Object.keys(t);for(let o=0,i=r.length;o<i;++o){const i=r[o];e[i]=t[i]}this.boundObservables=null}const r=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,r=Y(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||d.removeChildNodes(r),e&&(this.view=e.render(t,r,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const r=W.forType(e.constructor);if(void 0===r)throw new Error("Missing FASTElement definition.");return e.$fastController=new Z(e,r)}}function J(e){return class extends e{constructor(){super(),Z.forCustomElement(this)}$emit(e,t,r){return this.$fastController.emit(e,t,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,r){this.$fastController.onAttributeChangedCallback(e,t,r)}}}const ee=Object.assign(J(HTMLElement),{from:e=>J(e),define:(e,t)=>new W(e,t).define().type}),te=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(r){Reflect.defineMetadata(e,t,r)}},Reflect.defineMetadata=function(e,t,r){let o=te.get(r);void 0===o&&te.set(r,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const r=te.get(t);if(void 0!==r)return r.get(e)});class re{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,De(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:r,key:o}=this;return this.container=this.key=void 0,r.registerResolver(o,new pe(o,e,t))}}function oe(e){const t=e.slice(),r=Object.keys(e),o=r.length;let i;for(let s=0;s<o;++s)i=r[s],Ne(i)||(t[i]=e[i]);return t}const ie=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new pe(e,1,e),transient:e=>new pe(e,2,e)}),se=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:ie.singleton})}),ne=new Map;function ae(e){return t=>Reflect.getOwnMetadata(e,t)}let le=null;const ce=Object.freeze({createContainer:e=>new Fe(null,Object.assign({},se.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ce.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ke,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ce.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Fe(e,Object.assign({},se.default,t,{parentLocator:ce.findParentContainer})):le||(le=new Fe(null,Object.assign({},se.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ae("design:paramtypes"),getAnnotationParamtypes:ae("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=ne.get(e);if(void 0===t){const r=e.inject;if(void 0===r){const r=ce.getDesignParamtypes(e),o=ce.getAnnotationParamtypes(e);if(void 0===r)if(void 0===o){const r=Object.getPrototypeOf(e);t="function"==typeof r&&r!==Function.prototype?oe(ce.getDependencies(r)):[]}else t=oe(o);else if(void 0===o)t=oe(r);else{t=oe(r);let e,i=o.length;for(let r=0;r<i;++r)e=o[r],void 0!==e&&(t[r]=e);const s=Object.keys(o);let n;i=s.length;for(let e=0;e<i;++e)n=s[e],Ne(n)||(t[n]=o[n])}}else t=oe(r);ne.set(e,t)}return t},defineProperty(e,t,r,o=!1){const i=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[i];if(void 0===e){const s=this instanceof HTMLElement?ce.findResponsibleContainer(this):ce.getOrCreateDOMContainer();if(e=s.get(r),this[i]=e,o&&this instanceof ee){const o=this.$fastController,s=()=>{ce.findResponsibleContainer(this).get(r)!==this[i]&&(this[i]=e,o.notify(t))};o.subscribe({handleChange:s},"isConnected")}}return e}})},createInterface(e,t){const r="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Oe,i="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),s=function(e,t,r){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${s.friendlyName}'`);t?ce.defineProperty(e,t,s,i):ce.getOrCreateAnnotationParamTypes(e)[r]=s};return s.$isInterface=!0,s.friendlyName=null==o?"(anonymous)":o,null!=r&&(s.register=function(e,t){return r(new re(e,null!=t?t:s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject:(...e)=>function(t,r,o){if("number"==typeof o){const r=ce.getOrCreateAnnotationParamTypes(t),i=e[0];void 0!==i&&(r[o]=i)}else if(r)ce.defineProperty(t,r,e[0]);else{const r=o?ce.getOrCreateAnnotationParamTypes(o.value):ce.getOrCreateAnnotationParamTypes(t);let i;for(let t=0;t<e.length;++t)i=e[t],void 0!==i&&(r[t]=i)}},transient:e=>(e.register=function(t){return Te.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=de)=>(e.register=function(t){return Te.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),he=ce.createInterface("Container");function ue(e){return function(t){const r=function(e,t,o){ce.inject(r)(e,t,o)};return r.$isResolver=!0,r.resolve=function(r,o){return e(t,r,o)},r}}ce.inject;const de={scoped:!1};function fe(e,t,r){ce.inject(fe)(e,t,r)}function ge(e,t){return t.getFactory(e).construct(t)}ue(((e,t,r)=>()=>r.get(e))),ue(((e,t,r)=>r.has(e,!0)?r.get(e):void 0)),fe.$isResolver=!0,fe.resolve=()=>{},ue(((e,t,r)=>{const o=ge(e,t),i=new pe(e,0,o);return r.registerResolver(e,i),o})),ue(((e,t,r)=>ge(e,t)));class pe{constructor(e,t,r){this.key=e,this.strategy=t,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const r=e.getFactory(this.state);if(null===r)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,r,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(r=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===r?void 0:r.call(t,e))&&void 0!==o?o:null;default:return null}}}function be(e){return this.get(e)}function ve(e,t){return t(e)}class me{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let r;return r=void 0===t?new this.Type(...this.dependencies.map(be,e)):new this.Type(...this.dependencies.map(be,e),...t),null==this.transformers?r:this.transformers.reduce(ve,r)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ye={$isResolver:!0,resolve:(e,t)=>t};function we(e){return"function"==typeof e.register}function $e(e){return function(e){return we(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const xe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ke="__DI_LOCATE_PARENT__",Ce=new Map;class Fe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(he,ye),e instanceof Node&&e.addEventListener(ke,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,r,o,i,s;const n=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Le(t))if(we(t))t.register(this,n);else if(void 0!==t.prototype)Te.singleton(t,t).register(this);else for(r=Object.keys(t),i=0,s=r.length;i<s;++i)o=t[r[i]],Le(o)&&(we(o)?o.register(this,n):this.register(o));return--this.registerDepth,this}registerResolver(e,t){Se(e);const r=this.resolvers,o=r.get(e);return null==o?r.set(e,t):o instanceof pe&&4===o.strategy?o.state.push(t):r.set(e,new pe(e,4,[o,t])),t}registerTransformer(e,t){const r=this.getResolver(e);if(null==r)return!1;if(r.getFactory){const e=r.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Se(e),void 0!==e.resolve)return e;let r,o=this;for(;null!=o;){if(r=o.resolvers.get(e),null!=r)return r;if(null==o.parent){const r=$e(e)?this:o;return t?this.jitRegister(e,r):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Se(e),e.$isResolver)return e.resolve(this,this);let t,r=this;for(;null!=r;){if(t=r.resolvers.get(e),null!=t)return t.resolve(r,this);if(null==r.parent){const o=$e(e)?this:r;return t=this.jitRegister(e,o),t.resolve(r,this)}r=r.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Se(e);const o=this;let i,s=o;if(t){let t=r;for(;null!=s;)i=s.resolvers.get(e),null!=i&&(t=t.concat(Re(i,s,o))),s=s.parent;return t}for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return Re(i,s,o);if(s=s.parent,null==s)return r}return r}getFactory(e){let t=Ce.get(e);if(void 0===t){if(Be(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ce.set(e,t=new me(e,ce.getDependencies(e)))}return t}registerFactory(e,t){Ce.set(e,t)}createChild(e){return new Fe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(xe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(we(e)){const r=e.register(t);if(!(r instanceof Object)||null==r.resolve){const r=t.resolvers.get(e);if(null!=r)return r;throw new Error("A valid resolver was not returned from the static register method")}return r}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const r=this.config.defaultResolver(e,t);return t.resolvers.set(e,r),r}}}const Ve=new WeakMap;function De(e){return function(t,r,o){if(Ve.has(o))return Ve.get(o);const i=e(t,r,o);return Ve.set(o,i),i}}const Te=Object.freeze({instance:(e,t)=>new pe(e,0,t),singleton:(e,t)=>new pe(e,1,t),transient:(e,t)=>new pe(e,2,t),callback:(e,t)=>new pe(e,3,t),cachedCallback:(e,t)=>new pe(e,3,De(t)),aliasTo:(e,t)=>new pe(t,5,e)});function Se(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Re(e,t,r){if(e instanceof pe&&4===e.strategy){const o=e.state;let i=o.length;const s=new Array(i);for(;i--;)s[i]=o[i].resolve(t,r);return s}return[e.resolve(t,r)]}const Oe="(anonymous)";function Le(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Be=function(){const e=new WeakMap;let t=!1,r="",o=0;return function(i){return t=e.get(i),void 0===t&&(r=i.toString(),o=r.length,t=o>=29&&o<=100&&125===r.charCodeAt(o-1)&&r.charCodeAt(o-2)<=32&&93===r.charCodeAt(o-3)&&101===r.charCodeAt(o-4)&&100===r.charCodeAt(o-5)&&111===r.charCodeAt(o-6)&&99===r.charCodeAt(o-7)&&32===r.charCodeAt(o-8)&&101===r.charCodeAt(o-9)&&118===r.charCodeAt(o-10)&&105===r.charCodeAt(o-11)&&116===r.charCodeAt(o-12)&&97===r.charCodeAt(o-13)&&110===r.charCodeAt(o-14)&&88===r.charCodeAt(o-15),e.set(i,t)),t}}(),Ae={};function Ne(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ae[e];if(void 0!==t)return t;const r=e.length;if(0===r)return Ae[e]=!1;let o=0;for(let t=0;t<r;++t)if(o=e.charCodeAt(t),0===t&&48===o&&r>1||o<48||o>57)return Ae[e]=!1;return Ae[e]=!0}default:return!1}}function Pe(e){return`${e.toLowerCase()}:presentation`}const Ee=new Map,Ie=Object.freeze({define(e,t,r){const o=Pe(e);void 0===Ee.get(o)?Ee.set(o,t):Ee.set(o,!1),r.register(Te.instance(o,t))},forTag(e,t){const r=Pe(e),o=Ee.get(r);return!1===o?ce.findResponsibleContainer(t).get(r):o||null}});class Me{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?A.create(t):t instanceof A?t:A.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class He extends ee{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Ie.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new je(this===He?class extends He{}:this,e,t)}}function ze(e,t,r){return"function"==typeof e?e(t,r):e}Q([T],He.prototype,"template",void 0),Q([T],He.prototype,"styles",void 0);class je{constructor(e,t,r){this.type=e,this.elementDefinition=t,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const r=this.definition,o=this.overrideDefinition,i=`${r.prefix||t.elementPrefix}-${r.baseName}`;t.tryDefineElement({name:i,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Me(ze(r.template,e,r),ze(r.styles,e,r));e.definePresentation(t);let i=ze(r.shadowOptions,e,r);e.shadowRootMode&&(i?o.shadowOptions||(i.mode=e.shadowRootMode):null!==i&&(i={mode:e.shadowRootMode})),e.defineElement({elementOptions:ze(r.elementOptions,e,r),shadowOptions:i,attributes:ze(r.attributes,e,r)})}})}}class _e{createCSS(){return""}createBehavior(){}}function qe(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ge=document.createElement("div");class Ue{setProperty(e,t){d.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){d.queueUpdate((()=>this.target.removeProperty(e)))}}class We extends Ue{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Qe extends Ue{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Ke{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),F.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),d.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),d.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:r}=this.style;if(r){const e=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[e].style}else this.target=null}}Q([T],Ke.prototype,"target",void 0);class Xe{constructor(e){this.target=e.style}setProperty(e,t){d.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){d.queueUpdate((()=>this.target.removeProperty(e)))}}class Ye{setProperty(e,t){Ye.properties[e]=t;for(const r of Ye.roots.values())et.getOrCreate(Ye.normalizeRoot(r)).setProperty(e,t)}removeProperty(e){delete Ye.properties[e];for(const t of Ye.roots.values())et.getOrCreate(Ye.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ye;if(!t.has(e)){t.add(e);const r=et.getOrCreate(this.normalizeRoot(e));for(const e in Ye.properties)r.setProperty(e,Ye.properties[e])}}static unregisterRoot(e){const{roots:t}=Ye;if(t.has(e)){t.delete(e);const r=et.getOrCreate(Ye.normalizeRoot(e));for(const e in Ye.properties)r.removeProperty(e)}}static normalizeRoot(e){return e===Ge?document:e}}Ye.roots=new Set,Ye.properties={};const Ze=new WeakMap,Je=d.supportsAdoptedStyleSheets?class extends Ue{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(A.create([t]))}}:Ke,et=Object.freeze({getOrCreate(e){if(Ze.has(e))return Ze.get(e);let t;return t=e===Ge?new Ye:e instanceof Document?d.supportsAdoptedStyleSheets?new We:new Qe:e instanceof ee?new Je(e):new Xe(e),Ze.set(e,t),t}});class tt extends _e{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=tt.uniqueId(),tt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new tt({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return tt.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=nt.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof tt&&(t=this.alias(t)),nt.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),nt.existsFor(e)&&nt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ge,e),this}subscribe(e,t){const r=this.getOrCreateSubscriberSet(t);t&&!nt.existsFor(t)&&nt.getOrCreate(t),r.has(e)||r.add(e)}unsubscribe(e,t){const r=this.subscribers.get(t||this);r&&r.has(e)&&r.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}tt.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),tt.tokensById=new Map;class rt{constructor(e,t,r){this.source=e,this.token=t,this.node=r,this.dependencies=new Set,this.observer=F.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,L))}}class ot{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),F.getNotifier(this).notify(e.id))}get(e){return F.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const it=new WeakMap,st=new WeakMap;class nt{constructor(e){this.target=e,this.store=new ot,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const r=tt.getTokenById(t);if(r&&(r.notify(this.target),tt.isCSSDesignToken(r))){const t=this.parent,o=this.isReflecting(r);if(t){const i=t.get(r),s=e.get(r);i===s||o?i===s&&o&&this.stopReflectToCSS(r):this.reflectToCSS(r)}else o||this.reflectToCSS(r)}}},it.set(e,this),F.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof ee?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return it.get(e)||new nt(e)}static existsFor(e){return it.has(e)}static findParent(e){if(Ge!==e.target){let t=qe(e.target);for(;null!==t;){if(it.has(t))return it.get(t);t=qe(t)}return nt.getOrCreate(Ge)}return null}static findClosestAssignedNode(e,t){let r=t;do{if(r.has(e))return r;r=r.parent?r.parent:r.target!==Ge?nt.getOrCreate(Ge):null}while(null!==r);return null}get parent(){return st.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const r=this.getRaw(e);return void 0!==r?(this.hydrate(e,r),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=nt.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){tt.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),tt.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=nt.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&st.get(this).removeChild(this)}appendChild(e){e.parent&&st.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));st.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),F.getNotifier(this.store).subscribe(e);for(const[t,r]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):r)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),F.getNotifier(this.store).unsubscribe(e),e.parent===this&&st.delete(e)}contains(e){return function(e,t){let r=t;for(;null!==r;){if(r===e)return!0;r=qe(r)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),nt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),nt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const r=tt.getTokenById(t);r&&this.hydrate(r,this.getRaw(r))}hydrate(e,t){if(!this.has(e)){const r=this.bindingObservers.get(e);tt.isDerivedDesignTokenValue(t)?r?r.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(r&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const r=new rt(t,e,this);return this.bindingObservers.set(e,r),r}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}nt.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:r}=e;this.add(t,r)}add(e,t){et.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(nt.getOrCreate(t).get(e)))}remove(e,t){et.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},Q([T],nt.prototype,"children",void 0);const at=Object.freeze({create:function(e){return tt.from(e)},notifyConnection:e=>!(!e.isConnected||!nt.existsFor(e)||(nt.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!nt.existsFor(e)||(nt.getOrCreate(e).unbind(),0)),registerRoot(e=Ge){Ye.registerRoot(e)},unregisterRoot(e=Ge){Ye.unregisterRoot(e)}}),lt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ct=new Map,ht=new Map;let ut=null;const dt=ce.createInterface((e=>e.cachedCallback((e=>(null===ut&&(ut=new gt(null,e)),ut))))),ft=Object.freeze({tagFor:e=>ht.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ce.findResponsibleContainer(e).get(dt)},getOrCreate(e){if(!e)return null===ut&&(ut=ce.getOrCreateDOMContainer().get(dt)),ut;const t=e.$$designSystem$$;if(t)return t;const r=ce.getOrCreateDOMContainer(e);if(r.has(dt,!1))return r.get(dt);{const t=new gt(e,r);return r.register(Te.instance(dt,t)),t}}});class gt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>lt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,r=[],o=this.disambiguate,i=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(e,s,n){const a=function(e,t,r){return"string"==typeof e?{name:e,type:t,callback:r}:e}(e,s,n),{name:l,callback:c,baseClass:h}=a;let{type:u}=a,d=l,f=ct.get(d),g=!0;for(;f;){const e=o(d,u,f);switch(e){case lt.ignoreDuplicate:return;case lt.definitionCallbackOnly:g=!1,f=void 0;break;default:d=e,f=ct.get(d)}}g&&((ht.has(u)||u===He)&&(u=class extends u{}),ct.set(d,u),ht.set(u,d),h&&ht.set(h,d)),r.push(new pt(t,d,u,i,c,g))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&at.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(const e of r)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class pt{constructor(e,t,r,o,i,s){this.container=e,this.name=t,this.type=r,this.shadowRootMode=o,this.callback=i,this.willDefine=s,this.definition=null}definePresentation(e){Ie.define(this.name,e,this.container)}defineElement(e){this.definition=new W(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ft.tagFor(e)}}class bt{}Q([_({attribute:"aria-atomic",mode:"fromView"})],bt.prototype,"ariaAtomic",void 0),Q([_({attribute:"aria-busy",mode:"fromView"})],bt.prototype,"ariaBusy",void 0),Q([_({attribute:"aria-controls",mode:"fromView"})],bt.prototype,"ariaControls",void 0),Q([_({attribute:"aria-current",mode:"fromView"})],bt.prototype,"ariaCurrent",void 0),Q([_({attribute:"aria-describedby",mode:"fromView"})],bt.prototype,"ariaDescribedby",void 0),Q([_({attribute:"aria-details",mode:"fromView"})],bt.prototype,"ariaDetails",void 0),Q([_({attribute:"aria-disabled",mode:"fromView"})],bt.prototype,"ariaDisabled",void 0),Q([_({attribute:"aria-errormessage",mode:"fromView"})],bt.prototype,"ariaErrormessage",void 0),Q([_({attribute:"aria-flowto",mode:"fromView"})],bt.prototype,"ariaFlowto",void 0),Q([_({attribute:"aria-haspopup",mode:"fromView"})],bt.prototype,"ariaHaspopup",void 0),Q([_({attribute:"aria-hidden",mode:"fromView"})],bt.prototype,"ariaHidden",void 0),Q([_({attribute:"aria-invalid",mode:"fromView"})],bt.prototype,"ariaInvalid",void 0),Q([_({attribute:"aria-keyshortcuts",mode:"fromView"})],bt.prototype,"ariaKeyshortcuts",void 0),Q([_({attribute:"aria-label",mode:"fromView"})],bt.prototype,"ariaLabel",void 0),Q([_({attribute:"aria-labelledby",mode:"fromView"})],bt.prototype,"ariaLabelledby",void 0),Q([_({attribute:"aria-live",mode:"fromView"})],bt.prototype,"ariaLive",void 0),Q([_({attribute:"aria-owns",mode:"fromView"})],bt.prototype,"ariaOwns",void 0),Q([_({attribute:"aria-relevant",mode:"fromView"})],bt.prototype,"ariaRelevant",void 0),Q([_({attribute:"aria-roledescription",mode:"fromView"})],bt.prototype,"ariaRoledescription",void 0);class vt{constructor(){this.targetIndex=0}}class mt extends vt{constructor(){super(...arguments),this.createPlaceholder=d.createInterpolationPlaceholder}}class yt extends vt{constructor(e,t,r){super(),this.name=e,this.behavior=t,this.options=r}createPlaceholder(e){return d.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function wt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=F.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function $t(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function xt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function kt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Ct(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ft(e){d.setAttribute(this.target,this.targetName,e)}function Vt(e){d.setBooleanAttribute(this.target,this.targetName,e)}function Dt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Tt(e){this.target[this.targetName]=e}function St(e){const t=this.classVersions||Object.create(null),r=this.target;let o=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,s=i.length;e<s;++e){const s=i[e];""!==s&&(t[s]=o,r.classList.add(s))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&r.classList.remove(e)}}class Rt extends mt{constructor(e){super(),this.binding=e,this.bind=wt,this.unbind=xt,this.updateTarget=Ft,this.isBindingVolatile=F.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Tt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,r)=>d.createHTML(e(t,r))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Vt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=$t,this.unbind=Ct;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=St)}}targetAtContent(){this.updateTarget=Dt,this.unbind=kt}createBehavior(e){return new Ot(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ot{constructor(e,t,r,o,i,s,n){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=r,this.bind=o,this.unbind=i,this.updateTarget=s,this.targetName=n}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){R(e);const t=this.binding(this.source,this.context);R(null),!0!==t&&e.preventDefault()}}let Lt=null;class Bt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Lt=this}static borrow(e){const t=Lt||new Bt;return t.directives=e,t.reset(),Lt=null,t}}function At(e){if(1===e.length)return e[0];let t;const r=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new Rt(((e,t)=>{let i="";for(let s=0;s<r;++s)i+=o[s](e,t);return i}));return i.targetName=t,i}const Nt=u.length;function Pt(e,t){const r=t.split(h);if(1===r.length)return null;const o=[];for(let t=0,i=r.length;t<i;++t){const i=r[t],s=i.indexOf(u);let n;if(-1===s)n=i;else{const t=parseInt(i.substring(0,s));o.push(e.directives[t]),n=i.substring(s+Nt)}""!==n&&o.push(n)}return o}function Et(e,t,r=!1){const o=t.attributes;for(let i=0,s=o.length;i<s;++i){const n=o[i],a=n.value,l=Pt(e,a);let c=null;null===l?r&&(c=new Rt((()=>a)),c.targetName=n.name):c=At(l),null!==c&&(t.removeAttributeNode(n),i--,s--,e.addFactory(c))}}function It(e,t,r){const o=Pt(e,t.textContent);if(null!==o){let i=t;for(let s=0,n=o.length;s<n;++s){const n=o[s],a=0===s?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof n?a.textContent=n:(a.textContent=" ",e.captureContentBinding(n)),i=a,e.targetIndex++,a!==t&&r.nextNode()}e.targetIndex--}}const Mt=document.createRange();class Ht{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,r=this.lastChild;let o,i=this.firstChild;for(;i!==r;)o=i.nextSibling,t.insertBefore(i,e),i=o;t.insertBefore(r,e)}}remove(){const e=this.fragment,t=this.lastChild;let r,o=this.firstChild;for(;o!==t;)r=o.nextSibling,e.appendChild(o),o=r;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let r,o=this.firstChild;for(;o!==t;)r=o.nextSibling,e.removeChild(o),o=r;e.removeChild(t);const i=this.behaviors,s=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}bind(e,t){const r=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let i=0,s=r.length;i<s;++i){const s=r[i];s.unbind(o),s.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,i=r.length;o<i;++o)r[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let r=0,o=e.length;r<o;++r)e[r].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Mt.setStartBefore(e[0].firstChild),Mt.setEndAfter(e[e.length-1].lastChild),Mt.deleteContents();for(let t=0,r=e.length;t<r;++t){const r=e[t],o=r.behaviors,i=r.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(i)}}}}class zt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=d.createHTML(t);const r=e.content.firstElementChild;null!==r&&"TEMPLATE"===r.tagName&&(e=r)}else e=t;const r=function(e,t){const r=e.content;document.adoptNode(r);const o=Bt.borrow(t);Et(o,e,!0);const i=o.behaviorFactories;o.reset();const s=d.createTemplateWalker(r);let n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:Et(o,n);break;case 3:It(o,n,s);break;case 8:d.isMarker(n)&&o.addFactory(t[d.extractDirectiveIndexFromMarker(n)])}let a=0;(d.isMarker(r.firstChild)||1===r.childNodes.length&&t.length)&&(r.insertBefore(document.createComment(""),r.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:r,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=r.fragment,this.viewBehaviorFactories=r.viewBehaviorFactories,this.hostBehaviorFactories=r.hostBehaviorFactories,this.targetOffset=r.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,o=new Array(this.behaviorCount),i=d.createTemplateWalker(t);let s=0,n=this.targetOffset,a=i.nextNode();for(let e=r.length;s<e;++s){const e=r[s],t=e.targetIndex;for(;null!==a;){if(n===t){o[s]=e.createBehavior(a);break}a=i.nextNode(),n++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let r=0,i=t.length;r<i;++r,++s)o[s]=t[r].createBehavior(e)}return new Ht(t,o)}render(e,t,r){"string"==typeof t&&(t=document.getElementById(t)),void 0===r&&(r=t);const o=this.create(r);return o.bind(e,L),o.appendTo(t),o}}const jt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _t(e,...t){const r=[];let o="";for(let i=0,s=e.length-1;i<s;++i){const s=e[i];let n=t[i];if(o+=s,n instanceof zt){const e=n;n=()=>e}if("function"==typeof n&&(n=new Rt(n)),n instanceof mt){const e=jt.exec(s);null!==e&&(n.targetName=e[2])}n instanceof vt?(o+=n.createPlaceholder(r.length),r.push(n)):o+=n}return o+=e[e.length-1],new zt(o,r)}class qt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Gt(e){return new yt("fast-ref",qt,e)}class Ut{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Wt=(e,t)=>_t`
    <span
        part="end"
        ${Gt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Gt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Qt=(e,t)=>_t`
    <span
        part="start"
        ${Gt("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Gt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function Kt(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((r=>{"constructor"!==r&&Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})),t.attributes){const r=e.attributes||[];e.attributes=r.concat(t.attributes)}}))}var Xt;_t`
    <span part="end" ${Gt("endContainer")}>
        <slot
            name="end"
            ${Gt("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,_t`
    <span part="start" ${Gt("startContainer")}>
        <slot
            name="start"
            ${Gt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Xt||(Xt={}));const Yt="ArrowDown",Zt="ArrowLeft",Jt="ArrowRight",er="ArrowUp",tr="Enter",rr={ArrowDown:Yt,ArrowLeft:Zt,ArrowRight:Jt,ArrowUp:er},or="form-associated-proxy",ir="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,sr=new Map;function nr(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ir}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=e?t.concat(Array.from(e)):t;return Object.freeze(r)}return r}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),d.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),d.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!ir)return null;let e=sr.get(this);return e||(e=this.attachInternals(),sr.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,r){this.elementInternals?this.elementInternals.setValidity(e,t,r):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",or),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",or)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===tr&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return _({mode:"boolean"})(t.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),_({attribute:"current-value"})(t.prototype,"currentValue"),_(t.prototype,"name"),_({mode:"boolean"})(t.prototype,"required"),T(t.prototype,"value"),t}function ar(e){class t extends(nr(e)){}class r extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return _({attribute:"checked",mode:"boolean"})(r.prototype,"checkedAttribute"),_({attribute:"current-checked",converter:H})(r.prototype,"currentChecked"),T(r.prototype,"defaultChecked"),T(r.prototype,"checked"),r}class lr extends He{}class cr extends(nr(lr)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class hr extends cr{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}Q([_({mode:"boolean"})],hr.prototype,"autofocus",void 0),Q([_({attribute:"form"})],hr.prototype,"formId",void 0),Q([_],hr.prototype,"formaction",void 0),Q([_],hr.prototype,"formenctype",void 0),Q([_],hr.prototype,"formmethod",void 0),Q([_({mode:"boolean"})],hr.prototype,"formnovalidate",void 0),Q([_],hr.prototype,"formtarget",void 0),Q([_],hr.prototype,"type",void 0),Q([T],hr.prototype,"defaultSlottedContent",void 0);class ur{}Q([_({attribute:"aria-expanded",mode:"fromView"})],ur.prototype,"ariaExpanded",void 0),Q([_({attribute:"aria-pressed",mode:"fromView"})],ur.prototype,"ariaPressed",void 0),Kt(ur,bt),Kt(hr,Ut,ur);class dr extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=F.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function fr(e){return"string"==typeof e&&(e={property:e}),new yt("fast-slotted",dr,e)}function gr(e,t){const r=[];let o="";const i=[];for(let s=0,n=e.length-1;s<n;++s){o+=e[s];let n=t[s];if(n instanceof _e){const e=n.createBehavior();n=n.createCSS(),e&&i.push(e)}n instanceof A||n instanceof CSSStyleSheet?(""!==o.trim()&&(r.push(o),o=""),r.push(n)):o+=n}return o+=e[e.length-1],""!==o.trim()&&r.push(o),{styles:r,behaviors:i}}function pr(e,...t){const{styles:r,behaviors:o}=gr(e,t),i=A.create(r);return o.length&&i.withBehaviors(...o),i}class br extends _e{constructor(e,t){super(),this.behaviors=t,this.css="";const r=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);r.length&&(this.styles=A.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}const vr="not-allowed";class mr extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,r=this.constructListener(e);r.bind(t)(),t.addListener(r),this.listenerCache.set(e,r)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new mr(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:o}=this;o&&!t?(e.$fastController.addStyles(r),t=o):!o&&t&&(e.$fastController.removeStyles(r),t=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const yr=mr.with(window.matchMedia("(forced-colors)"));var wr,$r;function xr(e){return`:host([hidden]){display:none}:host{display:${e}}`}let kr;mr.with(window.matchMedia("(prefers-color-scheme: dark)")),mr.with(window.matchMedia("(prefers-color-scheme: light)")),($r=wr||(wr={})).Canvas="Canvas",$r.CanvasText="CanvasText",$r.LinkText="LinkText",$r.VisitedText="VisitedText",$r.ActiveText="ActiveText",$r.ButtonFace="ButtonFace",$r.ButtonText="ButtonText",$r.Field="Field",$r.FieldText="FieldText",$r.Highlight="Highlight",$r.HighlightText="HighlightText",$r.GrayText="GrayText";const Cr=function(){if("boolean"==typeof kr)return kr;if("undefined"==typeof window||!window.document||!window.document.createElement)return kr=!1,kr;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),kr=!0}catch(e){kr=!1}finally{document.head.removeChild(e)}return kr}()?"focus-visible":"focus";var Fr,Vr;function Dr(e,t,r){return isNaN(e)||e<=t?t:e>=r?r:e}function Tr(e,t,r){return isNaN(e)||e<=t?0:e>=r?1:e/(r-t)}function Sr(e,t,r){return isNaN(e)?t:t+e*(r-t)}function Rr(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:t+e*(r-t)}function Or(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}!function(e){e.ltr="ltr",e.rtl="rtl"}(Fr||(Fr={})),Math.PI;class Lr{constructor(e,t,r){this.h=e,this.s=t,this.l=r}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new Lr(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Lr(Or(this.h,e),Or(this.s,e),Or(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Br{constructor(e,t,r){this.l=e,this.a=t,this.b=r}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new Br(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Br(Or(this.l,e),Or(this.a,e),Or(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Br.epsilon=216/24389,Br.kappa=24389/27;class Ar{constructor(e,t,r,o){this.r=e,this.g=t,this.b=r,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new Ar(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Sr(this.r,0,255))},${Math.round(Sr(this.g,0,255))},${Math.round(Sr(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Sr(this.r,0,255))},${Math.round(Sr(this.g,0,255))},${Math.round(Sr(this.b,0,255))},${Dr(this.a,0,1)})`}roundToPrecision(e){return new Ar(Or(this.r,e),Or(this.g,e),Or(this.b,e),Or(this.a,e))}clamp(){return new Ar(Dr(this.r,0,1),Dr(this.g,0,1),Dr(this.b,0,1),Dr(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(Dr(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(Sr(e,0,255))}}class Nr{constructor(e,t,r){this.x=e,this.y=t,this.z=r}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Nr(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Nr(Or(this.x,e),Or(this.y,e),Or(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Pr(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new Ar(t(e.r),t(e.g),t(e.b),1))}function Er(e,t,r){return r-t==0?0:(e-t)/(r-t)}function Ir(e,t,r){return(Er(e.r,t.r,r.r)+Er(e.g,t.g,r.g)+Er(e.b,t.b,r.b))/3}function Mr(e){const t=Math.max(e.r,e.g,e.b),r=Math.min(e.r,e.g,e.b),o=t-r;let i=0;0!==o&&(i=t===e.r?(e.g-e.b)/o%6*60:t===e.g?60*((e.b-e.r)/o+2):60*((e.r-e.g)/o+4)),i<0&&(i+=360);const s=(t+r)/2;let n=0;return 0!==o&&(n=o/(1-Math.abs(2*s-1))),new Lr(i,n,s)}function Hr(e,t=1){return function(e,t=1){function r(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const o=r(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),i=r(-.969266*e.x+1.8760108*e.y+.041556*e.z),s=r(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new Ar(o,i,s,t)}(function(e){const t=(e.l+16)/116,r=t+e.a/500,o=t-e.b/200,i=Math.pow(r,3),s=Math.pow(t,3),n=Math.pow(o,3);let a=0;a=i>Br.epsilon?i:(116*r-16)/Br.kappa;let l=0;l=e.l>Br.epsilon*Br.kappa?s:e.l/Br.kappa;let c=0;return c=n>Br.epsilon?n:(116*o-16)/Br.kappa,a=Nr.whitePoint.x*a,l=Nr.whitePoint.y*l,c=Nr.whitePoint.z*c,new Nr(a,l,c)}(e),t)}function zr(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new Ar(Rr(e,t.r,r.r),Rr(e,t.g,r.g),Rr(e,t.b,r.b),Rr(e,t.a,r.a))}function jr(e,t){const r=e.relativeLuminance>t.relativeLuminance?e:t,o=e.relativeLuminance>t.relativeLuminance?t:e;return(r.relativeLuminance+.05)/(o.relativeLuminance+.05)}Nr.whitePoint=new Nr(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Vr||(Vr={}));const _r=Object.freeze({create:(e,t,r)=>new qr(e,t,r),from:e=>new qr(e.r,e.g,e.b)});class qr extends Ar{constructor(e,t,r){super(e,t,r,1),this.toColorString=this.toStringHexRGB,this.contrast=jr.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Pr(this)}static fromObject(e){return new qr(e.r,e.g,e.b)}}function Gr(e,t,r=0,o=e.length-1){if(o===r)return e[r];const i=Math.floor((o-r)/2)+r;return t(e[i])?Gr(e,t,r,i):Gr(e,t,i+1,o)}const Ur=(-.1+Math.sqrt(.21))/2;function Wr(e){return e.relativeLuminance<=Ur}function Qr(e){return Wr(e)?-1:1}const Kr={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},Xr=Object.freeze({create:function(e,t,r){return"number"==typeof e?Xr.from(_r.create(e,t,r)):Xr.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const r in t)if(typeof t[r]!=typeof e[r])return!1;return!0}(e)?Yr.from(e,t):Yr.from(_r.create(e.r,e.g,e.b),t)}});class Yr{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,r,o){void 0===r&&(r=this.closestIndexOf(e));let i=this.swatches;const s=this.lastIndex;let n=r;return void 0===o&&(o=Qr(e)),-1===o&&(i=this.reversedSwatches,n=s-n),Gr(i,(r=>jr(e,r)>=t),n,s)}get(e){return this.swatches[e]||this.swatches[Dr(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const r=this.swatches.reduce(((t,r)=>Math.abs(r.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?r:t));return t=this.swatches.indexOf(r),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const r=Mr(e).s,o=Mr(t);return o.s<r?function(e,t=1){const r=(1-Math.abs(2*e.l-1))*e.s,o=r*(1-Math.abs(e.h/60%2-1)),i=e.l-r/2;let s=0,n=0,a=0;return e.h<60?(s=r,n=o,a=0):e.h<120?(s=o,n=r,a=0):e.h<180?(s=0,n=r,a=o):e.h<240?(s=0,n=o,a=r):e.h<300?(s=o,n=0,a=r):e.h<360&&(s=r,n=0,a=o),new Ar(s+i,n+i,a+i,t)}(new Lr(o.h,r,o.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],r=function(e){function t(e){return e>Br.epsilon?Math.pow(e,1/3):(Br.kappa*e+16)/116}const r=t(e.x/Nr.whitePoint.x),o=t(e.y/Nr.whitePoint.y),i=t(e.z/Nr.whitePoint.z);return new Br(116*o-16,500*(r-o),200*(o-i))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const r=t(e.r),o=t(e.g),i=t(e.b);return new Nr(.4124564*r+.3575761*o+.1804375*i,.2126729*r+.7151522*o+.072175*i,.0193339*r+.119192*o+.9503041*i)}(Ar.fromObject(e).roundToPrecision(4))),o=Hr(new Br(0,r.a,r.b)).clamp().roundToPrecision(4),i=Hr(new Br(50,r.a,r.b)).clamp().roundToPrecision(4),s=Hr(new Br(100,r.a,r.b)).clamp().roundToPrecision(4),n=new Ar(0,0,0),a=new Ar(1,1,1),l=s.equalValue(a)?0:14,c=o.equalValue(n)?0:14;for(let e=100+l;e>=0-c;e-=.5){let r;r=e<0?zr(e/c+1,n,o):e<=50?zr(Yr.ramp(e),o,i):e<=100?zr(Yr.ramp(e),i,s):zr((e-100)/l,s,a),r=Yr.saturationBump(i,r).roundToPrecision(4),t.push(_r.from(r))}return new Yr(e,t)}static adjustEnd(e,t,r,o){const i=-1===o?t.swatches:t.reversedSwatches,s=e=>{const r=t.closestIndexOf(e);return 1===o?t.lastIndex-r:r};1===o&&r.reverse();const n=e(r[r.length-2]);if(Or(jr(r[r.length-1],r[r.length-2]),2)<n){r.pop();const e=s(t.colorContrast(i[t.lastIndex],n,void 0,o))-s(r[r.length-2]);let a=1;for(let o=r.length-e-1;o<r.length;o++){const e=s(r[o]),n=o===r.length-1?t.lastIndex:e+a;r[o]=i[n],a++}}1===o&&r.reverse()}static createColorPaletteByContrast(e,t){const r=Yr.createHighResolutionPalette(e),o=e=>Or(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),i=[];let s=t.preserveSource?e:r.swatches[0];i.push(s);do{const e=o(s);s=r.colorContrast(s,e,void 0,1),i.push(s)}while(s.relativeLuminance>0);if(t.preserveSource){s=e;do{const e=o(s);s=r.colorContrast(s,e,void 0,-1),i.unshift(s)}while(s.relativeLuminance<1)}return this.adjustEnd(o,r,i,-1),t.preserveSource&&this.adjustEnd(o,r,i,1),i}static from(e,t){const r=void 0===t?Kr:Object.assign(Object.assign({},Kr),t);return new Yr(e,Object.freeze(Yr.createColorPaletteByContrast(e,r)))}}const Zr=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Jr(e){const t=Zr.exec(e);if(null===t)return null;let r=t[1];if(3===r.length){const e=r.charAt(0),t=r.charAt(1),o=r.charAt(2);r=e.concat(e,t,t,o,o)}const o=parseInt(r,16);return isNaN(o)?null:new Ar(Tr((16711680&o)>>>16,0,255),Tr((65280&o)>>>8,0,255),Tr(255&o,0,255),1)}const eo=_r.create(1,1,1),to=_r.create(0,0,0),ro=_r.create(.5,.5,.5),oo=Jr("#0078D4"),io=_r.create(oo.r,oo.g,oo.b);function so(e,t,r,o,i){const s=e=>e.contrast(eo)>=i?eo:to,n=s(e),a=s(t);return{rest:n,hover:a,active:n.relativeLuminance===a.relativeLuminance?n:s(r),focus:s(o)}}var no;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(no||(no={}));class ao{constructor(e,t,r,o){this.toColorString=()=>this.cssGradient,this.contrast=jr.bind(null,this),this.createCSS=this.toColorString,this.color=new Ar(e,t,r),this.cssGradient=o,this.relativeLuminance=Pr(this.color),this.r=e,this.g=t,this.b=r}static fromObject(e,t){return new ao(e.r,e.g,e.b,t)}}const lo=new Ar(0,0,0),co=new Ar(1,1,1);function ho(e,t,r,o,i,s,n,a,l=10,c=!1){const h=e.closestIndexOf(t);function u(r){if(c){const o=e.closestIndexOf(t),i=e.get(o),s=r.relativeLuminance<t.relativeLuminance?lo:co,n=function(e,t,r=null){let o=0,i=r;return null!==i?o=Ir(e,t,i):(i=new Ar(0,0,0,1),o=Ir(e,t,i),o<=0&&(i=new Ar(1,1,1,1),o=Ir(e,t,i))),o=Math.round(1e3*o)/1e3,new Ar(i.r,i.g,i.b,o)}(Jr(r.toColorString()),Jr(i.toColorString()),s).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new Ar(e.r,e.g,e.b,1);const r=t.a*t.r+(1-t.a)*e.r,o=t.a*t.g+(1-t.a)*e.g,i=t.a*t.b+(1-t.a)*e.b;return new Ar(r,o,i,1)}(Jr(t.toColorString()),n);return _r.from(a)}return r}void 0===a&&(a=Qr(t));const d=h+a*r,f=d+a*(o-r),g=d+a*(i-r),p=d+a*(s-r),b=-1===a?0:100-l,v=-1===a?l:100;function m(t,r){const o=e.get(t);if(r){const r=e.get(t+a*n),i=-1===a?r:o,s=-1===a?o:r,l=`linear-gradient(${u(i).toColorString()} ${b}%, ${u(s).toColorString()} ${v}%)`;return ao.fromObject(i,l)}return u(o)}return{rest:m(d,!0),hover:m(f,!0),active:m(g,!1),focus:m(p,!0)}}function uo(e,t,r,o,i,s,n,a){null==a&&(a=Qr(t));const l=e.closestIndexOf(e.colorContrast(t,r));return{rest:e.get(l+a*o),hover:e.get(l+a*i),active:e.get(l+a*s),focus:e.get(l+a*n)}}function fo(e,t,r,o,i,s,n){const a=e.closestIndexOf(t);return null==n&&(n=Qr(t)),{rest:e.get(a+n*r),hover:e.get(a+n*o),active:e.get(a+n*i),focus:e.get(a+n*s)}}function go(e,t,r,o,i,s,n,a,l,c,h,u){return Wr(t)?fo(e,t,a,l,c,h,u):fo(e,t,r,o,i,s,n)}var po;function bo(e,t){return e.closestIndexOf((r=t,_r.create(r,r,r)));var r}function vo(e,t,r){return e.get(bo(e,t)+-1*r)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(po||(po={}));const{create:mo}=at;function yo(e){return at.create({name:e,cssCustomPropertyName:null})}mo("direction").withDefault(Fr.ltr);const wo=mo("disabled-opacity").withDefault(.3),$o=mo("base-height-multiplier").withDefault(8),xo=(mo("base-horizontal-spacing-multiplier").withDefault(3),mo("density").withDefault(0)),ko=mo("design-unit").withDefault(4),Co=mo("control-corner-radius").withDefault(4),Fo=mo("layer-corner-radius").withDefault(8),Vo=mo("stroke-width").withDefault(1),Do=mo("focus-stroke-width").withDefault(2),To=mo("body-font").withDefault("Segoe UI, sans-serif"),So=mo("type-ramp-base-font-size").withDefault("14px"),Ro=mo("type-ramp-base-line-height").withDefault("20px"),Oo=mo("type-ramp-minus-1-font-size").withDefault("12px"),Lo=mo("type-ramp-minus-1-line-height").withDefault("16px"),Bo=(mo("type-ramp-minus-2-font-size").withDefault("10px"),mo("type-ramp-minus-2-line-height").withDefault("14px"),mo("type-ramp-plus-1-font-size").withDefault("16px"),mo("type-ramp-plus-1-line-height").withDefault("22px"),mo("type-ramp-plus-2-font-size").withDefault("20px"),mo("type-ramp-plus-2-line-height").withDefault("26px"),mo("type-ramp-plus-3-font-size").withDefault("24px"),mo("type-ramp-plus-3-line-height").withDefault("32px"),mo("type-ramp-plus-4-font-size").withDefault("28px"),mo("type-ramp-plus-4-line-height").withDefault("36px"),mo("type-ramp-plus-5-font-size").withDefault("32px"),mo("type-ramp-plus-5-line-height").withDefault("40px"),mo("type-ramp-plus-6-font-size").withDefault("40px"),mo("type-ramp-plus-6-line-height").withDefault("52px"),mo("base-layer-luminance").withDefault(po.LightMode)),Ao=yo("accent-fill-rest-delta").withDefault(0),No=yo("accent-fill-hover-delta").withDefault(-2),Po=yo("accent-fill-active-delta").withDefault(-5),Eo=yo("accent-fill-focus-delta").withDefault(0),Io=yo("accent-foreground-rest-delta").withDefault(0),Mo=yo("accent-foreground-hover-delta").withDefault(3),Ho=yo("accent-foreground-active-delta").withDefault(-8),zo=yo("accent-foreground-focus-delta").withDefault(0),jo=yo("neutral-fill-rest-delta").withDefault(-1),_o=yo("neutral-fill-hover-delta").withDefault(1),qo=yo("neutral-fill-active-delta").withDefault(0),Go=yo("neutral-fill-focus-delta").withDefault(0),Uo=yo("neutral-fill-input-rest-delta").withDefault(-1),Wo=yo("neutral-fill-input-hover-delta").withDefault(1),Qo=yo("neutral-fill-input-active-delta").withDefault(0),Ko=yo("neutral-fill-input-focus-delta").withDefault(-2),Xo=yo("neutral-fill-input-alt-rest-delta").withDefault(2),Yo=yo("neutral-fill-input-alt-hover-delta").withDefault(4),Zo=yo("neutral-fill-input-alt-active-delta").withDefault(6),Jo=yo("neutral-fill-input-alt-focus-delta").withDefault(2),ei=yo("neutral-fill-layer-rest-delta").withDefault(-2),ti=yo("neutral-fill-layer-hover-delta").withDefault(-3),ri=yo("neutral-fill-layer-active-delta").withDefault(-3),oi=yo("neutral-fill-layer-alt-rest-delta").withDefault(-1),ii=yo("neutral-fill-secondary-rest-delta").withDefault(3),si=yo("neutral-fill-secondary-hover-delta").withDefault(2),ni=yo("neutral-fill-secondary-active-delta").withDefault(1),ai=yo("neutral-fill-secondary-focus-delta").withDefault(3),li=yo("neutral-fill-stealth-rest-delta").withDefault(0),ci=yo("neutral-fill-stealth-hover-delta").withDefault(3),hi=yo("neutral-fill-stealth-active-delta").withDefault(2),ui=yo("neutral-fill-stealth-focus-delta").withDefault(0),di=yo("neutral-fill-strong-rest-delta").withDefault(0),fi=yo("neutral-fill-strong-hover-delta").withDefault(8),gi=yo("neutral-fill-strong-active-delta").withDefault(-5),pi=yo("neutral-fill-strong-focus-delta").withDefault(0),bi=yo("neutral-stroke-rest-delta").withDefault(8),vi=yo("neutral-stroke-hover-delta").withDefault(12),mi=yo("neutral-stroke-active-delta").withDefault(6),yi=yo("neutral-stroke-focus-delta").withDefault(8),wi=yo("neutral-stroke-control-rest-delta").withDefault(3),$i=yo("neutral-stroke-control-hover-delta").withDefault(5),xi=yo("neutral-stroke-control-active-delta").withDefault(5),ki=yo("neutral-stroke-control-focus-delta").withDefault(5),Ci=yo("neutral-stroke-divider-rest-delta").withDefault(4),Fi=yo("neutral-stroke-layer-rest-delta").withDefault(3),Vi=yo("neutral-stroke-layer-hover-delta").withDefault(3),Di=yo("neutral-stroke-layer-active-delta").withDefault(3),Ti=yo("neutral-stroke-strong-hover-delta").withDefault(0),Si=yo("neutral-stroke-strong-active-delta").withDefault(0),Ri=yo("neutral-stroke-strong-focus-delta").withDefault(0),Oi=mo("neutral-base-color").withDefault(ro),Li=yo("neutral-palette").withDefault((e=>Xr.from(Oi.getValueFor(e)))),Bi=mo("accent-base-color").withDefault(io),Ai=yo("accent-palette").withDefault((e=>Xr.from(Bi.getValueFor(e)))),Ni=yo("neutral-layer-card-container-recipe").withDefault({evaluate:e=>vo(Li.getValueFor(e),Bo.getValueFor(e),ei.getValueFor(e))}),Pi=(mo("neutral-layer-card-container").withDefault((e=>Ni.getValueFor(e).evaluate(e))),yo("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(bo(e,t)+r)}(Li.getValueFor(e),Bo.getValueFor(e),ei.getValueFor(e))})),Ei=(mo("neutral-layer-floating").withDefault((e=>Pi.getValueFor(e).evaluate(e))),yo("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(bo(e,t))}(Li.getValueFor(e),Bo.getValueFor(e))})),Ii=mo("neutral-layer-1").withDefault((e=>Ei.getValueFor(e).evaluate(e))),Mi=yo("neutral-layer-2-recipe").withDefault({evaluate:e=>vo(Li.getValueFor(e),Bo.getValueFor(e),ei.getValueFor(e))}),Hi=mo("neutral-layer-2").withDefault((e=>Mi.getValueFor(e).evaluate(e))),zi=yo("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(bo(e,t)+-1*r*2)}(Li.getValueFor(e),Bo.getValueFor(e),ei.getValueFor(e))}),ji=mo("neutral-layer-3").withDefault((e=>zi.getValueFor(e).evaluate(e))),_i=yo("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(bo(e,t)+-1*r*3)}(Li.getValueFor(e),Bo.getValueFor(e),ei.getValueFor(e))}),qi=(mo("neutral-layer-4").withDefault((e=>_i.getValueFor(e).evaluate(e))),mo("fill-color").withDefault((e=>Ii.getValueFor(e))));var Gi;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(Gi||(Gi={}));const Ui=yo("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,o,i,s,n,a,l,c,h,u,d,f){return Wr(t)?uo(e,t,8,c,h,u,d,void 0):uo(e,t,5,o,i,s,n,void 0)}(Ai.getValueFor(e),t||qi.getValueFor(e),0,Ao.getValueFor(e),No.getValueFor(e),Po.getValueFor(e),Eo.getValueFor(e),0,0,Ao.getValueFor(e),No.getValueFor(e),Po.getValueFor(e),Eo.getValueFor(e))}),Wi=mo("accent-fill-rest").withDefault((e=>Ui.getValueFor(e).evaluate(e).rest)),Qi=mo("accent-fill-hover").withDefault((e=>Ui.getValueFor(e).evaluate(e).hover)),Ki=mo("accent-fill-active").withDefault((e=>Ui.getValueFor(e).evaluate(e).active)),Xi=mo("accent-fill-focus").withDefault((e=>Ui.getValueFor(e).evaluate(e).focus)),Yi=yo("foreground-on-accent-recipe").withDefault({evaluate:e=>so(Wi.getValueFor(e),Qi.getValueFor(e),Ki.getValueFor(e),Xi.getValueFor(e),Gi.normal)}),Zi=mo("foreground-on-accent-rest").withDefault((e=>Yi.getValueFor(e).evaluate(e).rest)),Ji=mo("foreground-on-accent-hover").withDefault((e=>Yi.getValueFor(e).evaluate(e).hover)),es=mo("foreground-on-accent-active").withDefault((e=>Yi.getValueFor(e).evaluate(e).active)),ts=(mo("foreground-on-accent-focus").withDefault((e=>Yi.getValueFor(e).evaluate(e).focus)),yo("accent-foreground-recipe").withDefault({evaluate:(e,t)=>uo(Ai.getValueFor(e),t||qi.getValueFor(e),9.5,Io.getValueFor(e),Mo.getValueFor(e),Ho.getValueFor(e),zo.getValueFor(e))})),rs=mo("accent-foreground-rest").withDefault((e=>ts.getValueFor(e).evaluate(e).rest)),os=mo("accent-foreground-hover").withDefault((e=>ts.getValueFor(e).evaluate(e).hover)),is=mo("accent-foreground-active").withDefault((e=>ts.getValueFor(e).evaluate(e).active)),ss=(mo("accent-foreground-focus").withDefault((e=>ts.getValueFor(e).evaluate(e).focus)),yo("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>ho(Li.getValueFor(e),t||qi.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),ns=mo("accent-stroke-control-rest").withDefault((e=>ss.getValueFor(e).evaluate(e,Wi.getValueFor(e)).rest)),as=mo("accent-stroke-control-hover").withDefault((e=>ss.getValueFor(e).evaluate(e,Qi.getValueFor(e)).hover)),ls=mo("accent-stroke-control-active").withDefault((e=>ss.getValueFor(e).evaluate(e,Ki.getValueFor(e)).active)),cs=(mo("accent-stroke-control-focus").withDefault((e=>ss.getValueFor(e).evaluate(e,Xi.getValueFor(e)).focus)),yo("neutral-fill-recipe").withDefault({evaluate:(e,t)=>go(Li.getValueFor(e),t||qi.getValueFor(e),jo.getValueFor(e),_o.getValueFor(e),qo.getValueFor(e),Go.getValueFor(e),void 0,2,3,1,2,void 0)})),hs=mo("neutral-fill-rest").withDefault((e=>cs.getValueFor(e).evaluate(e).rest)),us=mo("neutral-fill-hover").withDefault((e=>cs.getValueFor(e).evaluate(e).hover)),ds=mo("neutral-fill-active").withDefault((e=>cs.getValueFor(e).evaluate(e).active)),fs=(mo("neutral-fill-focus").withDefault((e=>cs.getValueFor(e).evaluate(e).focus)),yo("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>go(Li.getValueFor(e),t||qi.getValueFor(e),Uo.getValueFor(e),Wo.getValueFor(e),Qo.getValueFor(e),Ko.getValueFor(e),void 0,2,3,1,0,void 0)})),gs=mo("neutral-fill-input-rest").withDefault((e=>fs.getValueFor(e).evaluate(e).rest)),ps=mo("neutral-fill-input-hover").withDefault((e=>fs.getValueFor(e).evaluate(e).hover)),bs=(mo("neutral-fill-input-active").withDefault((e=>fs.getValueFor(e).evaluate(e).active)),mo("neutral-fill-input-focus").withDefault((e=>fs.getValueFor(e).evaluate(e).focus))),vs=yo("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>go(Li.getValueFor(e),t||qi.getValueFor(e),Xo.getValueFor(e),Yo.getValueFor(e),Zo.getValueFor(e),Jo.getValueFor(e),1,Xo.getValueFor(e),Xo.getValueFor(e)-Yo.getValueFor(e),Xo.getValueFor(e)-Zo.getValueFor(e),Jo.getValueFor(e),1)}),ms=mo("neutral-fill-input-alt-rest").withDefault((e=>vs.getValueFor(e).evaluate(e).rest)),ys=mo("neutral-fill-input-alt-hover").withDefault((e=>vs.getValueFor(e).evaluate(e).hover)),ws=mo("neutral-fill-input-alt-active").withDefault((e=>vs.getValueFor(e).evaluate(e).active)),$s=mo("neutral-fill-input-alt-focus").withDefault((e=>vs.getValueFor(e).evaluate(e).focus)),xs=yo("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),ei.getValueFor(e),ti.getValueFor(e),ri.getValueFor(e),ei.getValueFor(e),1)}),ks=(mo("neutral-fill-layer-rest").withDefault((e=>xs.getValueFor(e).evaluate(e).rest)),mo("neutral-fill-layer-hover").withDefault((e=>xs.getValueFor(e).evaluate(e).hover)),mo("neutral-fill-layer-active").withDefault((e=>xs.getValueFor(e).evaluate(e).active)),yo("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),oi.getValueFor(e),oi.getValueFor(e),oi.getValueFor(e),oi.getValueFor(e))})),Cs=(mo("neutral-fill-layer-alt-rest").withDefault((e=>ks.getValueFor(e).evaluate(e).rest)),yo("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),ii.getValueFor(e),si.getValueFor(e),ni.getValueFor(e),ai.getValueFor(e))})),Fs=mo("neutral-fill-secondary-rest").withDefault((e=>Cs.getValueFor(e).evaluate(e).rest)),Vs=mo("neutral-fill-secondary-hover").withDefault((e=>Cs.getValueFor(e).evaluate(e).hover)),Ds=(mo("neutral-fill-secondary-active").withDefault((e=>Cs.getValueFor(e).evaluate(e).active)),mo("neutral-fill-secondary-focus").withDefault((e=>Cs.getValueFor(e).evaluate(e).focus)),yo("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),li.getValueFor(e),ci.getValueFor(e),hi.getValueFor(e),ui.getValueFor(e))})),Ts=mo("neutral-fill-stealth-rest").withDefault((e=>Ds.getValueFor(e).evaluate(e).rest)),Ss=mo("neutral-fill-stealth-hover").withDefault((e=>Ds.getValueFor(e).evaluate(e).hover)),Rs=mo("neutral-fill-stealth-active").withDefault((e=>Ds.getValueFor(e).evaluate(e).active)),Os=(mo("neutral-fill-stealth-focus").withDefault((e=>Ds.getValueFor(e).evaluate(e).focus)),yo("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>uo(Li.getValueFor(e),t||qi.getValueFor(e),4.5,di.getValueFor(e),fi.getValueFor(e),gi.getValueFor(e),pi.getValueFor(e))})),Ls=(mo("neutral-fill-strong-rest").withDefault((e=>Os.getValueFor(e).evaluate(e).rest)),mo("neutral-fill-strong-hover").withDefault((e=>Os.getValueFor(e).evaluate(e).hover)),mo("neutral-fill-strong-active").withDefault((e=>Os.getValueFor(e).evaluate(e).active)),mo("neutral-fill-strong-focus").withDefault((e=>Os.getValueFor(e).evaluate(e).focus)),yo("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>uo(Li.getValueFor(e),t||qi.getValueFor(e),16,0,-19,-30,0)})),Bs=mo("neutral-foreground-rest").withDefault((e=>Ls.getValueFor(e).evaluate(e).rest)),As=(mo("neutral-foreground-hover").withDefault((e=>Ls.getValueFor(e).evaluate(e).hover)),mo("neutral-foreground-active").withDefault((e=>Ls.getValueFor(e).evaluate(e).active)),mo("neutral-foreground-focus").withDefault((e=>Ls.getValueFor(e).evaluate(e).focus)),yo("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t,r){return e.colorContrast(t,4.5)}(Li.getValueFor(e),t||qi.getValueFor(e))})),Ns=(mo("neutral-foreground-hint").withDefault((e=>As.getValueFor(e).evaluate(e))),yo("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),bi.getValueFor(e),vi.getValueFor(e),mi.getValueFor(e),yi.getValueFor(e))})),Ps=mo("neutral-stroke-rest").withDefault((e=>Ns.getValueFor(e).evaluate(e).rest)),Es=mo("neutral-stroke-hover").withDefault((e=>Ns.getValueFor(e).evaluate(e).hover)),Is=mo("neutral-stroke-active").withDefault((e=>Ns.getValueFor(e).evaluate(e).active)),Ms=(mo("neutral-stroke-focus").withDefault((e=>Ns.getValueFor(e).evaluate(e).focus)),yo("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>ho(Li.getValueFor(e),t||qi.getValueFor(e),wi.getValueFor(e),$i.getValueFor(e),xi.getValueFor(e),ki.getValueFor(e),5)})),Hs=mo("neutral-stroke-control-rest").withDefault((e=>Ms.getValueFor(e).evaluate(e).rest)),zs=mo("neutral-stroke-control-hover").withDefault((e=>Ms.getValueFor(e).evaluate(e).hover)),js=mo("neutral-stroke-control-active").withDefault((e=>Ms.getValueFor(e).evaluate(e).active)),_s=(mo("neutral-stroke-control-focus").withDefault((e=>Ms.getValueFor(e).evaluate(e).focus)),yo("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,r){return e.get(e.closestIndexOf(t)+Qr(t)*r)}(Li.getValueFor(e),t||qi.getValueFor(e),Ci.getValueFor(e))})),qs=(mo("neutral-stroke-divider-rest").withDefault((e=>_s.getValueFor(e).evaluate(e))),yo("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,o,i,s,n,a){const l=e.closestIndexOf(t),c=Qr(t),h=l+c*r,u=h+c*(o-r),d=h+c*(i-r),f=h+c*(s-r),g=`calc(100% - ${a})`;function p(t,r){const o=e.get(t);if(r){const r=e.get(t+20*c),i=`linear-gradient(${o.toColorString()} ${g}, ${r.toColorString()} ${g}, ${r.toColorString()})`;return ao.fromObject(o,i)}return o}return{rest:p(h,!0),hover:p(u,!0),active:p(d,!1),focus:p(f,!0)}}(Li.getValueFor(e),t||qi.getValueFor(e),wi.getValueFor(e),$i.getValueFor(e),xi.getValueFor(e),ki.getValueFor(e),0,Vo.getValueFor(e)+"px")})),Gs=mo("neutral-stroke-input-rest").withDefault((e=>qs.getValueFor(e).evaluate(e).rest)),Us=mo("neutral-stroke-input-hover").withDefault((e=>qs.getValueFor(e).evaluate(e).hover)),Ws=(mo("neutral-stroke-input-active").withDefault((e=>qs.getValueFor(e).evaluate(e).active)),mo("neutral-stroke-input-focus").withDefault((e=>qs.getValueFor(e).evaluate(e).focus)),yo("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>fo(Li.getValueFor(e),t||qi.getValueFor(e),Fi.getValueFor(e),Vi.getValueFor(e),Di.getValueFor(e),Fi.getValueFor(e))})),Qs=mo("neutral-stroke-layer-rest").withDefault((e=>Ws.getValueFor(e).evaluate(e).rest)),Ks=(mo("neutral-stroke-layer-hover").withDefault((e=>Ws.getValueFor(e).evaluate(e).hover)),mo("neutral-stroke-layer-active").withDefault((e=>Ws.getValueFor(e).evaluate(e).active)),yo("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>uo(Li.getValueFor(e),t||qi.getValueFor(e),5.5,0,Ti.getValueFor(e),Si.getValueFor(e),Ri.getValueFor(e))})),Xs=mo("neutral-stroke-strong-rest").withDefault((e=>Ks.getValueFor(e).evaluate(e).rest)),Ys=mo("neutral-stroke-strong-hover").withDefault((e=>Ks.getValueFor(e).evaluate(e).hover)),Zs=mo("neutral-stroke-strong-active").withDefault((e=>Ks.getValueFor(e).evaluate(e).active)),Js=(mo("neutral-stroke-strong-focus").withDefault((e=>Ks.getValueFor(e).evaluate(e).focus)),yo("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Li.getValueFor(e),Wr(qi.getValueFor(e))?eo:to)})),en=mo("focus-stroke-outer").withDefault((e=>Js.getValueFor(e).evaluate(e))),tn=yo("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ai.getValueFor(e),t=qi.getValueFor(e),en.getValueFor(e),Wr(t)?to:eo;var t}}),rn=mo("focus-stroke-inner").withDefault((e=>tn.getValueFor(e).evaluate(e))),on=yo("foreground-on-accent-large-recipe").withDefault({evaluate:e=>so(Wi.getValueFor(e),Qi.getValueFor(e),Ki.getValueFor(e),Xi.getValueFor(e),Gi.large)}),sn=(mo("foreground-on-accent-rest-large").withDefault((e=>on.getValueFor(e).evaluate(e).rest)),mo("foreground-on-accent-hover-large").withDefault((e=>on.getValueFor(e).evaluate(e,Qi.getValueFor(e)).hover)),mo("foreground-on-accent-active-large").withDefault((e=>on.getValueFor(e).evaluate(e,Ki.getValueFor(e)).active)),mo("foreground-on-accent-focus-large").withDefault((e=>on.getValueFor(e).evaluate(e,Xi.getValueFor(e)).focus)),mo("neutral-fill-inverse-rest-delta").withDefault(0)),nn=mo("neutral-fill-inverse-hover-delta").withDefault(-3),an=mo("neutral-fill-inverse-active-delta").withDefault(7),ln=mo("neutral-fill-inverse-focus-delta").withDefault(0),cn=yo("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,o,i,s){const n=Qr(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+n*Math.abs(r-o);let c,h;return(1===n?r<o:n*r>n*o)?(c=a,h=l):(c=l,h=a),{rest:e.get(c),hover:e.get(h),active:e.get(c+n*i),focus:e.get(c+n*s)}}(Li.getValueFor(e),t||qi.getValueFor(e),sn.getValueFor(e),nn.getValueFor(e),an.getValueFor(e),ln.getValueFor(e))}),hn=(mo("neutral-fill-inverse-rest").withDefault((e=>cn.getValueFor(e).evaluate(e).rest)),mo("neutral-fill-inverse-hover").withDefault((e=>cn.getValueFor(e).evaluate(e).hover)),mo("neutral-fill-inverse-active").withDefault((e=>cn.getValueFor(e).evaluate(e).active)),mo("neutral-fill-inverse-focus").withDefault((e=>cn.getValueFor(e).evaluate(e).focus)),(function(e,...t){const{styles:r,behaviors:o}=gr(e,t);return new br(r,o)})`(${$o} + ${xo}) * ${ko}`);class un{constructor(e,t,r){this.propertyName=e,this.value=t,this.styles=r}bind(e){F.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){F.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function dn(e,t){return new un("appearance",e,t)}const fn=":not([disabled])",gn="[disabled]";class pn extends hr{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Q([_],pn.prototype,"appearance",void 0);const bn=pn.compose({baseName:"button",baseClass:hr,template:(e,t)=>_t`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Gt("control")}
    >
        ${Qt(0,t)}
        <span class="content" part="content">
            <slot ${fr("defaultSlottedContent")}></slot>
        </span>
        ${Wt(0,t)}
    </button>
`,styles:(e,t)=>pr`
    :host([disabled]) {
      opacity: ${wo};
      cursor: ${vr};
    }

    ${((e,t,r="",o="")=>pr`
    ${xr("inline-flex")} :host {
      position: relative;
      box-sizing: border-box;
      font-family: ${To};
      outline: none;
      font-size: ${So};
      line-height: ${Ro};
      height: calc(${hn} * 1px);
      min-width: calc(${hn} * 1px);
      color: ${Bs};
      border-radius: calc(${Co} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    :host .control {
      background: padding-box linear-gradient(${hs}, ${hs}),
        border-box ${Hs};
      border: calc(${Vo} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${ko} * 2 * ${xo})) * 1px);
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

    :host .control${r}:hover {
      background: padding-box linear-gradient(${us}, ${us}),
        border-box ${zs};
    }

    :host .control${r}:active {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${js};
    }

    :host .control:${Cr} {
      border-color: ${en} !important;
      box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${en} inset !important;
    }

    :host .control${o} {
      background: padding-box linear-gradient(${hs}, ${hs}), border-box ${Ps};
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
  `.withBehaviors(yr(pr`
        :host .control {
          background: ${wr.ButtonFace};
          border-color: ${wr.ButtonText};
          color: ${wr.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled])) .control:hover,
        :host .control${r}:hover,
        .control${r}:hover {
          forced-color-adjust: none;
          background: ${wr.Highlight};
          color: ${wr.HighlightText};
        }
        .control:${Cr},
        :host .control:${Cr},
        :host(:${Cr}) .control {
          forced-color-adjust: none;
          background: ${wr.ButtonFace};
          border-color: ${wr.Highlight} !important;
          box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${wr.Highlight} !important;
        }
        :host([href]) .control {
          background: ${wr.ButtonFace};
          border-color: ${wr.LinkText};
          color: ${wr.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover {
          background: ${wr.LinkText};
          border-color: ${wr.LinkText} !important;
          color: ${wr.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control:${Cr}{
          forced-color-adjust: none;
          border-color: ${wr.LinkText} !important;
          box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${wr.LinkText} !important;
        }
    `)))(0,0,fn,gn)}
  `.withBehaviors(yr(pr`
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .control {
          border-color: ${wr.GrayText};
          color: ${wr.GrayText};
          fill: currentcolor;
        }
      `),dn("accent",pr`
      ${((e,t,r="",o="")=>pr`
    :host .control {
      background: padding-box linear-gradient(${Wi}, ${Wi}),
        border-box ${ns};
      color: ${Zi};
    }

    :host .control${r}:hover {
      background: padding-box linear-gradient(${Qi}, ${Qi}),
        border-box ${as};
      color: ${Ji};
    }

    :host .control${r}:active {
      background: padding-box linear-gradient(${Ki}, ${Ki}),
        border-box ${ls};
      color: ${es};
    }

    :host .control:${Cr} {
      box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${en} inset,
        0 0 0 calc(((${Do} + ${Vo}) - ${Vo}) * 1px) ${rn} inset !important;
    }

    :host .control${o} {
      background: ${Wi};
    }
  `.withBehaviors(yr(pr`
        :host .control {
          forced-color-adjust: none;
          background: ${wr.Highlight};
          color: ${wr.HighlightText};
        }
        :host .control${r}:hover,
        :host .control${r}:active {
          background: ${wr.HighlightText};
          border-color: ${wr.Highlight};
          color: ${wr.Highlight};
        }
        :host .control:${Cr} {
          background: ${wr.Highlight};
          box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${wr.Highlight} inset,
            0 0 0 calc(((${Do} + ${Vo}) - ${Vo}) * 1px) ${wr.HighlightText} inset !important;
        }
        :host([href]) .control {
          background: ${wr.LinkText};
          color: ${wr.HighlightText};
        }
        :host([href]) .control:hover {
          background: ${wr.ButtonFace};
          border-color: ${wr.LinkText};
          box-shadow: none;
          color: ${wr.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:${Cr} {
          background: ${wr.LinkText};
          box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${wr.LinkText} inset,
            0 0 0 calc(((${Do} + ${Vo}) - ${Vo}) * 1px) ${wr.HighlightText} inset !important;
          color: ${wr.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,fn,gn)},
      `.withBehaviors(yr(pr`
            :host([disabled]) .control {
              background: ${wr.ButtonFace};
            }
          `))),dn("lightweight",pr`
      ${((e,t,r="",o="")=>pr`
    :host {
      color: ${rs};
    }

    :host .control {
      background: ${Ts};
    }

    :host .control${r}:hover {
      background: ${Ss};
      color: ${os};
    }

    :host .control${r}:active {
      background: ${Rs};
      color: ${is};
    }

    :host .control${o} {
      background: ${Ts};
    }
  `.withBehaviors(yr(pr`
        :host .control {
          border-color: ${wr.ButtonFace};
          color: ${wr.ButtonText};
        }
        :host .control${r}:hover,
        :host .control${r}:active,
        :host .control:${Cr} {
          border-color: ${wr.Highlight};
          background: ${wr.Highlight};
          box-shadow: none;
          color: ${wr.HighlightText};
        }
        :host([href]) .control {
          border-color: ${wr.ButtonFace};
          color: ${wr.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Cr} {
          background: ${wr.ButtonFace};
          box-shadow: none;
          color: ${wr.LinkText};
        }
      `)))(0,0,fn,gn)},
      `.withBehaviors(yr(pr`
            :host([disabled]) .control {
              border-color: ${wr.ButtonFace};
            }
          `))),dn("outline",pr`
      ${((e,t,r="",o="")=>pr`
    :host .control {
      background: transparent !important;
      border-color: ${Ps};
    }

    :host .control${r}:hover {
      border-color: ${Es};
    }

    :host .control${r}:active {
      border-color: ${Is};
    }

    :host .control${o} {
      background: transparent !important;
      border-color: ${Ps};
    }
  `.withBehaviors(yr(pr`
        :host .control${o} {
          border-color: ${wr.ButtonText};
        }
        :host .control${r}:hover {
          border-color: ${wr.Highlight};
          color: ${wr.ButtonText};
        }
        :host([href]) {
          border-color: ${wr.LinkText};
        }
        :host([href]) .control:hover {
          box-shadow: 0 0 0 calc((${Do} - ${Vo}) * 1px) ${wr.LinkText};
          color: ${wr.LinkText};
        }
      `)))(0,0,fn,gn)}
      `.withBehaviors(yr(pr`
            :host([disabled]) .control {
              border-color: ${wr.GrayText};
            }
          `))),dn("stealth",pr`
      ${((e,t,r="",o="")=>pr`
    :host .control {
      background: ${Ts};
    }

    :host .control${r}:hover {
      background: ${Ss};
    }

    :host .control${r}:active {
      background: ${Rs};
    }

    :host .control${o} {
      background: ${Ts};
    }
  `.withBehaviors(yr(pr`
        :host .control {
          background: ${wr.ButtonFace};
          border-color: ${wr.ButtonFace};
          color: ${wr.ButtonText};
          fill: currentcolor;
        }
        :host .control${r}:hover,
        :host .control${r}:active,
        :host .control:${Cr} {
          background: ${wr.Highlight};
          border-color: ${wr.Highlight};
          box-shadow: none !important;
          color: ${wr.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control {
          border-color: ${wr.ButtonFace};
          color: ${wr.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Cr} {
          background: ${wr.LinkText};
          border-color: ${wr.LinkText};
          box-shadow: none !important;
          color: ${wr.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,fn,gn)}
      `.withBehaviors(yr(pr`
            :host([disabled]) .control {
              border-color: ${wr.ButtonFace};
            }
          `)))),shadowOptions:{delegatesFocus:!0}});class vn extends He{}const mn=at.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,r)=>{let o=.12,i=.14;return t>16&&(o=.2,i=.24),`0 0 2px rgba(0, 0, 0, ${o}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${i})`}}),yn=at.create("elevation-shadow-card-rest-size").withDefault(4),wn=at.create("elevation-shadow-card-hover-size").withDefault(8),$n=at.create("elevation-shadow-card-active-size").withDefault(0),xn=at.create("elevation-shadow-card-focus-size").withDefault(8),kn=at.create("elevation-shadow-card-rest").withDefault((e=>mn.getValueFor(e).evaluate(e,yn.getValueFor(e)))),Cn=(at.create("elevation-shadow-card-hover").withDefault((e=>mn.getValueFor(e).evaluate(e,wn.getValueFor(e)))),at.create("elevation-shadow-card-active").withDefault((e=>mn.getValueFor(e).evaluate(e,$n.getValueFor(e)))),at.create("elevation-shadow-card-focus").withDefault((e=>mn.getValueFor(e).evaluate(e,xn.getValueFor(e)))),at.create("elevation-shadow-tooltip-size").withDefault(16)),Fn=(at.create("elevation-shadow-tooltip").withDefault((e=>mn.getValueFor(e).evaluate(e,Cn.getValueFor(e)))),at.create("elevation-shadow-flyout-size").withDefault(32)),Vn=(at.create("elevation-shadow-flyout").withDefault((e=>mn.getValueFor(e).evaluate(e,Fn.getValueFor(e)))),at.create("elevation-shadow-dialog-size").withDefault(128));at.create("elevation-shadow-dialog").withDefault((e=>mn.getValueFor(e).evaluate(e,Vn.getValueFor(e))));class Dn extends vn{cardFillColorChanged(e,t){if(t){const e=Jr(t);null!==e&&(this.neutralPaletteSource=t,qi.setValueFor(this,_r.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=Jr(t),r=_r.create(e.r,e.g,e.b);Li.setValueFor(this,Xr.create(r))}}handleChange(e,t){this.cardFillColor||qi.setValueFor(this,(t=>xs.getValueFor(t).evaluate(t,qi.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=qe(this);if(e){const t=F.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}Q([_({attribute:"card-fill-color",mode:"fromView"})],Dn.prototype,"cardFillColor",void 0),Q([_({attribute:"neutral-palette-source",mode:"fromView"})],Dn.prototype,"neutralPaletteSource",void 0);const Tn=Dn.compose({baseName:"card",baseClass:vn,template:(e,t)=>_t`
    <slot></slot>
`,styles:(e,t)=>pr`
    ${xr("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${qi};
      color: ${Bs};
      border: calc(${Vo} * 1px) solid ${Qs};
      border-radius: calc(${Fo} * 1px);
      box-shadow: ${kn};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(yr(pr`
        :host {
          background: ${wr.Canvas};
          color: ${wr.CanvasText};
        }
      `))});class Sn extends He{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}Q([_({attribute:"fill"})],Sn.prototype,"fill",void 0),Q([_({attribute:"color"})],Sn.prototype,"color",void 0),Q([_({mode:"boolean"})],Sn.prototype,"circular",void 0);class Rn extends Sn{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,t){e!==t&&d.queueUpdate((()=>{this.classList.add(t),this.classList.remove(e)}))}}Q([_({mode:"fromView"})],Rn.prototype,"appearance",void 0);const On=Rn.compose({baseName:"badge",baseClass:Sn,template:(e,t)=>_t`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>pr`
    ${xr("inline-block")} :host {
      box-sizing: border-box;
      font-family: ${To};
      font-size: ${Oo};
      line-height: ${Lo};
    }

    .control {
      border-radius: calc(${Co} * 1px);
      padding: calc(((${ko} * 0.5) - ${Vo}) * 1px) calc((${ko} - ${Vo}) * 1px);
      border: calc(${Vo} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Bs};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Wi};
      color: ${Zi};
    }

    :host(.neutral) .control {
      background: ${Fs};
      color: ${Bs};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Lo} - calc(${ko} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});class Ln extends He{}class Bn extends(nr(Ln)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var An;!function(e){e.email="email",e.password="password",e.tel="tel",e.text="text",e.url="url"}(An||(An={}));class Nn extends Bn{constructor(){super(...arguments),this.type=An.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&d.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}Q([_({attribute:"readonly",mode:"boolean"})],Nn.prototype,"readOnly",void 0),Q([_({mode:"boolean"})],Nn.prototype,"autofocus",void 0),Q([_],Nn.prototype,"placeholder",void 0),Q([_],Nn.prototype,"type",void 0),Q([_],Nn.prototype,"list",void 0),Q([_({converter:z})],Nn.prototype,"maxlength",void 0),Q([_({converter:z})],Nn.prototype,"minlength",void 0),Q([_],Nn.prototype,"pattern",void 0),Q([_({converter:z})],Nn.prototype,"size",void 0),Q([_({mode:"boolean"})],Nn.prototype,"spellcheck",void 0),Q([T],Nn.prototype,"defaultSlottedNodes",void 0);class Pn{}function En(e,t,r){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}Kt(Pn,bt),Kt(Nn,Ut,Pn);const In=at.create("input-placeholder-rest").withDefault((e=>{const t=fs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Mn=at.create("input-placeholder-hover").withDefault((e=>{const t=fs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),Hn=at.create("input-filled-placeholder-rest").withDefault((e=>{const t=Cs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),zn=at.create("input-filled-placeholder-hover").withDefault((e=>{const t=Cs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).hover)}));class jn extends Nn{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Q([_],jn.prototype,"appearance",void 0);const _n=jn.compose({baseName:"text-field",baseClass:Nn,template:(e,t)=>_t`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${fr({property:"defaultSlottedNodes",filter:En})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Qt(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Gt("control")}
            />
            ${Wt(0,t)}
        </div>
    </template>
`,styles:(e,t)=>{return pr`
    ${xr("inline-block")}

    ${r=".root",pr`
  :host {
    font-family: ${To};
    font-size: ${So};
    line-height: ${Ro};
    color: ${Bs};
    fill: currentcolor;
    outline: none;
    user-select: none;
    position: relative;
  }

  ${r} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    background: padding-box linear-gradient(${gs}, ${gs}),
      border-box ${Gs};
    border: calc(${Vo} * 1px) solid transparent;
    border-radius: calc(${Co} * 1px);
    height: calc(${hn} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
  }

  .control:hover,
  .control:${Cr},
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

  :host(:hover:not([disabled]):not(:focus-within)) ${r} {
    background: padding-box linear-gradient(${ps}, ${ps}),
      border-box ${Us};
  }

  :host(:not([disabled]):focus-within) ${r} {
    background: padding-box linear-gradient(${bs}, ${bs}),
      border-box ${Gs};
  }

  .control::placeholder {
    color: ${In};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${Mn};
  }

  :host([disabled]) ${r}, :host([readonly]) ${r}, :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${vr};
  }

  :host([disabled]) {
    opacity: ${wo};
  }

  :host([disabled]) ${r} {
    background: padding-box linear-gradient(${gs}, ${gs}),
      border-box ${Ps};
  }
`}

    ${pr`
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
    height: calc(${Do} * 1px);
    bottom: 0;
    border-bottom: calc(${Do} * 1px) solid ${Wi};
    border-bottom-left-radius: calc(${Co} * 1px);
    border-bottom-right-radius: calc(${Co} * 1px);
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
      padding: 0 calc(${ko} * 2px + 1px);
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
  `.withBehaviors(dn("filled",((e,t)=>{return pr`
    ${r=".root",pr`
  :host ${r} {
    background: ${Fs};
    border-color: transparent;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${r} {
    background: ${Vs};
    border-color: transparent;
  }

  .control::placeholder {
    color: ${Hn};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${zn};
  }

  :host(:focus-within:not([disabled])) ${r} {
    border-color: transparent;
    box-shadow: none;
  }
`}
  `.withBehaviors(yr(pr`
        ${((e,t,r)=>pr`
  :host ${r},
  :host(:hover:not([disabled])) ${r},
  :host(:active:not([disabled])) ${r},
  :host(:focus-within:not([disabled])) ${r} {
    background: ${wr.Field};
    border-color: ${wr.FieldText};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${wr.Highlight};
  }
  :host([disabled]) ${r} {
    border-color: ${wr.GrayText};
  }
`)(0,0,".root")}
      `));var r})()),yr(pr`
        ${((e,t,r)=>pr`
  :host ${r} {
    background: ${wr.Field};
    border-color: ${wr.FieldText};
  }
  :host(:hover:not([disabled]):not(:focus-within)) ${r} {
    border-color: ${wr.Highlight};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${wr.Highlight};
  }
  :host([disabled]) {
    opacity: 1;
  }
  :host([disabled]) ${r} {
    border-color: ${wr.GrayText};
  }
  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder,
  :host([disabled]) .label {
    color: ${wr.GrayText};
    fill: currentcolor;
  }
`)(0,0,".root")}
      `));var r},shadowOptions:{delegatesFocus:!0}});class qn extends He{}class Gn extends(ar(qn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Un extends Gn{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(" "!==e.key)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Q([_({attribute:"readonly",mode:"boolean"})],Un.prototype,"readOnly",void 0),Q([T],Un.prototype,"name",void 0),Q([T],Un.prototype,"defaultSlottedNodes",void 0);const Wn=Un.compose({baseName:"radio",template:(e,t)=>_t`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fr("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>pr`
    ${xr("inline-flex")} :host {
      --input-size: calc((${hn} / 2) + ${ko});
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
      border: calc(${Vo} * 1px) solid ${Xs};
      background: ${ms};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${To};
      color: ${Bs};
      ${""} padding-inline-start: calc(${ko} * 2px + 2px);
      margin-inline-end: calc(${ko} * 2px + 2px);
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
      fill: ${Zi};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${ys};
      border-color: ${Ys};
    }

    :host(:not(.disabled):active) .control {
      background: ${ws};
      border-color: ${Zs};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Cr}) .control {
      box-shadow: 0 0 0 1px ${qi}, 0 0 0 3px ${en};
      background: ${$s};
      border-color: ${en};
    }

    :host(.checked) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Qi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ki};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${vr};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${wo};
    }
  `.withBehaviors(yr(pr`
        .control {
          background: ${wr.Field};
          border-color: ${wr.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${wr.Highlight};
        }
        :host(:${Cr}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${wr.Field}, 0 0 0 3px ${wr.FieldText};
          background: ${wr.Field};
          border-color: ${wr.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${wr.Highlight};
          background: ${wr.Highlight};
        }
        :host(.checked:${Cr}) .control {
          box-shadow: 0 0 0 1px ${wr.Field}, 0 0 0 3px ${wr.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${wr.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${wr.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${wr.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${wr.Field};
          border-color: ${wr.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${wr.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '});var Qn;!function(e){e.horizontal="horizontal",e.vertical="vertical"}(Qn||(Qn={}));class Kn extends He{constructor(){super(...arguments),this.orientation=Qn.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const r=e[t];this.isInsideToolbar||(r.setAttribute("tabindex","0"),r.readOnly?this.slottedRadioButtons.forEach((e=>{e!==r&&e.setAttribute("tabindex","-1")})):(r.checked=!0,this.selectedRadio=r)),this.focusedRadio=r,r.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,r=e.target,o=null!==r?t.indexOf(r):0,i=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===i&&o===i||i===t.length-1&&i===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,r)=>e===t.length&&this.isInsideToolbar&&r===Jt,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Zt,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let r=0;if(r=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(r,t,e.key))this.moveRightOffGroup();else for(r===t.length&&(r=0);r<t.length&&t.length>1;){if(!t[r].disabled){this.moveToRadioByIndex(t,r);break}if(this.focusedRadio&&r===t.indexOf(this.focusedRadio))break;if(r+1>=t.length){if(this.isInsideToolbar)break;r=0}else r+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let r=0;if(r=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,r=r<0?t.length-1:r,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;r>=0&&t.length>1;){if(!t[r].disabled){this.moveToRadioByIndex(t,r);break}if(this.focusedRadio&&r===t.indexOf(this.focusedRadio))break;r-1<0?r=t.length-1:r-=1}},this.keydownHandler=e=>{const t=e.key;if(t in rr&&this.isInsideFoundationToolbar)return!0;switch(t){case tr:this.checkFocusedRadio();break;case Jt:case Yt:this.direction===Fr.ltr?this.moveRight(e):this.moveLeft(e);break;case Zt:case er:this.direction===Fr.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.getAttribute("value")===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?Fr.rtl:Fr.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let r=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),r=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!r){const r=e[t-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Q([_({attribute:"readonly",mode:"boolean"})],Kn.prototype,"readOnly",void 0),Q([_({attribute:"disabled",mode:"boolean"})],Kn.prototype,"disabled",void 0),Q([_],Kn.prototype,"name",void 0),Q([_],Kn.prototype,"value",void 0),Q([_],Kn.prototype,"orientation",void 0),Q([T],Kn.prototype,"childItems",void 0),Q([T],Kn.prototype,"slottedRadioButtons",void 0);const Xn=Kn.compose({baseName:"radio-group",template:(e,t)=>{return _t`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===Qn.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${fr({property:"slottedRadioButtons",filter:(r="[role=radio]",function(e,t,o){return 1===e.nodeType&&e.matches(r)})})}
            ></slot>
        </div>
    </template>
`;var r},styles:(e,t)=>pr`
  ${xr("flex")} :host {
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
`});class Yn extends He{}class Zn extends(ar(Yn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Jn extends Zn{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{" "===e.key&&(this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Q([_({attribute:"readonly",mode:"boolean"})],Jn.prototype,"readOnly",void 0),Q([T],Jn.prototype,"defaultSlottedNodes",void 0),Q([T],Jn.prototype,"indeterminate",void 0);const ea=Jn.compose({baseName:"checkbox",template:(e,t)=>_t`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fr("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>pr`
    ${xr("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${hn} / 2 + ${ko}) * 1px);
      height: calc((${hn} / 2 + ${ko}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Co} * 1px);
      border: calc(${Vo} * 1px) solid ${Xs};
      background: ${ms};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${To};
      color: ${Bs};
      ${""} padding-inline-start: calc(${ko} * 2px + 2px);
      margin-inline-end: calc(${ko} * 2px + 2px);
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
      fill: ${Zi};
    }

    :host(:not(.disabled):hover) .control {
      background: ${ys};
      border-color: ${Ys};
    }

    :host(:not(.disabled):active) .control {
      background: ${ws};
      border-color: ${Zs};
    }

    :host(:${Cr}) .control {
      box-shadow: 0 0 0 1px ${qi}, 0 0 0 3px ${en};
      background: ${$s};
      border-color: ${en};
    }

    :host(.checked) .control {
      background: ${Wi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Qi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ki};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${vr};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${wo};
    }
  `.withBehaviors(yr(pr`
        .control {
          border-color: ${wr.FieldText};
          background: ${wr.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${wr.Highlight};
          background: ${wr.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${wr.FieldText};
        }
        :host(:${Cr}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${wr.Field}, 0 0 0 3px ${wr.FieldText};
          background: ${wr.Field};
          border-color: ${wr.Highlight};
        }
        :host(.checked) .control {
          background: ${wr.Highlight};
          border-color: ${wr.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${wr.HighlightText};
          border-color: ${wr.Highlight};
        }
        :host(.checked:${Cr}) .control {
          box-shadow: 0 0 0 1px ${wr.Field}, 0 0 0 3px ${wr.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${wr.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${wr.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${wr.GrayText};
          background: ${wr.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${wr.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});ft.getOrCreate(undefined).withPrefix("fluent").register(bn(),Tn(),On(),_n(),Wn(),Xn(),ea());const ta=document.querySelector(".sidebar");ta&&qi.setValueFor(ta,Hi);const ra=document.querySelector("body");ra&&qi.setValueFor(ra,ji);const oa=document.getElementById("update-style");null==oa||oa.addEventListener("click",(()=>{const e=document.getElementById("accent-color").value,t=document.getElementById("base-color").value;ra&&(Bi.setValueFor(ra,_r.from(Jr(e))),Oi.setValueFor(ra,_r.from(Jr(t))))}));const ia=document.querySelector("fluent-switch");ia.addEventListener("click",(()=>{ia.checked?ra&&Bo.setValueFor(ra,po.DarkMode):ra&&Bo.setValueFor(ra,po.LightMode)}))})();
//# sourceMappingURL=bundle.js.map