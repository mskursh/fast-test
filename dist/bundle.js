(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const t=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e.g)return e.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===t.trustedTypes&&(t.trustedTypes={createPolicy:(e,t)=>t});const o=Object.freeze([]),r=[],i=t.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let s=i;const n=[];function a(){if(n.length)throw n.shift()}function l(e){try{e.call()}catch(e){n.push(e),setTimeout(a,0)}}const c=`fast-${Math.random().toString(36).substring(2,8)}`,h=`${c}{`,d=`}${c}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(s!==i)throw new Error("The HTML policy can only be set once.");s=e},createHTML:e=>s.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(c),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${c}:`,"")),createInterpolationPlaceholder:e=>`${h}${e}${d}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${c}:${e}--\x3e`,queueUpdate(e){r.length<1&&window.requestAnimationFrame(u.processUpdates),r.push(e)},processUpdates(){let e=0;for(;e<r.length;)if(l(r[e]),e++,e>1024){for(let t=0,o=r.length-e;t<o;t++)r[t]=r[t+e];r.length-=e,e=0}r.length=0},nextUpdate:()=>new Promise((e=>{u.queueUpdate(e)})),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function f(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function g(e){const t=this.spillover,o=t.indexOf(e);-1!==o&&t.splice(o,1)}function p(e){const t=this.spillover,o=this.source;for(let r=0,i=t.length;r<i;++r)t[r].handleChange(o,e)}function b(e){return-1!==this.spillover.indexOf(e)}class v{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=f,this.unsubscribe=g,this.notify=p,this.has=b,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,o=this.sub2,r=this.source;void 0!==t&&t.handleChange(r,e),void 0!==o&&o.handleChange(r,e)}}class m{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new v(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new v(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const y=/(:|&&|\|\||if)/,w=new WeakMap,$=new WeakMap;let x,k=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class C{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==x&&x.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,r=e[o];if(r!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,r,t),V(e).notify(this.name)}}}const F=Object.freeze({setArrayObserverFactory(e){k=e},getNotifier(e){let t=e.$fastController||w.get(e);return void 0===t&&(Array.isArray(e)?t=k(e):w.set(e,t=new m(e))),t},track(e,t){void 0!==x&&x.watch(e,t)},trackVolatile(){void 0!==x&&(x.needsRefresh=!0)},notify(e,t){V(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new C(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=$.get(e);if(void 0===t){let o=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==o;)t=$.get(o),o=Reflect.getPrototypeOf(o);t=void 0===t?[]:t.slice(0),$.set(e,t)}return t},binding(e,t,o=this.isVolatileBinding(e)){return new B(e,t,o)},isVolatileBinding:e=>y.test(e.toString())}),V=F.getNotifier,D=(F.trackVolatile,u.queueUpdate);function T(e,t){F.defineProperty(e,t)}let S=null;function O(e){S=e}class R{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return S}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}F.defineProperty(R.prototype,"index"),F.defineProperty(R.prototype,"length");const L=Object.seal(new R);class B extends v{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=x;x=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return x=o,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,r=V(e),i=null===o?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=r,r.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;x=void 0,t=o.propertySource[o.propertyName],x=this,e===t&&(this.needsRefresh=!0)}o.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,D(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class N{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function A(e){return e.map((e=>e instanceof N?A(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function E(e){return e.map((e=>e instanceof N?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}N.create=(()=>{if(u.supportsAdoptedStyleSheets){const e=new Map;return t=>new P(t,e)}return e=>new M(e)})();class P extends N{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=E(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=A(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let I=0;class M extends N{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=E(e),this.styleSheets=A(e),this.styleClass="fast-style-class-"+ ++I}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){const i=document.createElement("style");i.innerHTML=t[r],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,r=t.length;o<r;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const H={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},z={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class j{constructor(e,t,o=t.toLowerCase(),r="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=r,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===r&&void 0===i&&(this.converter=H)}setValue(e,t){const o=e[this.fieldName],r=this.converter;void 0!==r&&(t=r.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return F.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||u.queueUpdate((()=>{o.add(e);const r=e[this.fieldName];switch(t){case"reflect":const t=this.converter;u.setAttribute(e,this.attribute,void 0!==t?t.toView(r):r);break;case"boolean":u.setBooleanAttribute(e,this.attribute,r)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(e.attributes);for(let r=0,i=t.length;r<i;++r){const i=t[r];if(void 0!==i)for(let t=0,r=i.length;t<r;++t){const r=i[t];"string"==typeof r?o.push(new j(e,r)):o.push(new j(e,r.property,r.attribute,r.mode,r.converter))}}return o}}function _(e,t){let o;function r(e,t){arguments.length>1&&(o.property=t);const r=e.constructor.attributes||(e.constructor.attributes=[]);r.push(o)}return arguments.length>1?(o={},void r(e,t)):(o=void 0===e?{}:e,r)}const q={mode:"open"},G={},U=new Map;class W{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=j.collect(e,t.attributes),r=new Array(o.length),i={},s={};for(let e=0,t=o.length;e<t;++e){const t=o[e];r[e]=t.attribute,i[t.name]=t,s[t.attribute]=t}this.attributes=o,this.observedAttributes=r,this.propertyLookup=i,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?q:null===t.shadowOptions?void 0:Object.assign(Object.assign({},q),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?G:Object.assign(Object.assign({},G),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?N.create(t.styles):t.styles instanceof N?t.styles:N.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,o=t.prototype;for(let t=0,r=e.length;t<r;++t)F.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),U.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return U.get(e)}}function X(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n}const Q=new WeakMap,K={bubbles:!0,composed:!0,cancelable:!0};function Y(e){return e.shadowRoot||Q.get(e)||null}class Z extends m{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Q.set(e,t)}const r=F.getAccessors(e);if(r.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=r.length;o<i;++o){const i=r[o].name,s=e[i];void 0!==s&&(delete e[i],t[i]=s)}}}get isConnected(){return F.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,F.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Y(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=Y(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,r=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),r.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].bind(e,L)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const r=e.length,i=[];for(let s=0;s<r;++s){const r=e[s];if(o.has(r)){const e=o.get(r)-1;0===e||t?o.delete(r)&&i.push(r):o.set(r,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,L);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,L);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const r=this.definition.attributeLookup[e];void 0!==r&&r.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},K),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let r=0,i=o.length;r<i;++r){const i=o[r];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=Y(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=W.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Z(e,o)}}function J(e){return class extends e{constructor(){super(),Z.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const ee=Object.assign(J(HTMLElement),{from:e=>J(e),define:(e,t)=>new W(e,t).define().type}),te=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let r=te.get(o);void 0===r&&te.set(o,r=new Map),r.set(e,t)},Reflect.getOwnMetadata=function(e,t){const o=te.get(t);if(void 0!==o)return o.get(e)});class oe{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,De(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:o,key:r}=this;return this.container=this.key=void 0,o.registerResolver(r,new pe(r,e,t))}}function re(e){const t=e.slice(),o=Object.keys(e),r=o.length;let i;for(let s=0;s<r;++s)i=o[s],Ae(i)||(t[i]=e[i]);return t}const ie=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new pe(e,1,e),transient:e=>new pe(e,2,e)}),se=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:ie.singleton})}),ne=new Map;function ae(e){return t=>Reflect.getOwnMetadata(e,t)}let le=null;const ce=Object.freeze({createContainer:e=>new Fe(null,Object.assign({},se.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ce.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ke,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ce.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Fe(e,Object.assign({},se.default,t,{parentLocator:ce.findParentContainer})):le||(le=new Fe(null,Object.assign({},se.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ae("design:paramtypes"),getAnnotationParamtypes:ae("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=ne.get(e);if(void 0===t){const o=e.inject;if(void 0===o){const o=ce.getDesignParamtypes(e),r=ce.getAnnotationParamtypes(e);if(void 0===o)if(void 0===r){const o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?re(ce.getDependencies(o)):[]}else t=re(r);else if(void 0===r)t=re(o);else{t=re(o);let e,i=r.length;for(let o=0;o<i;++o)e=r[o],void 0!==e&&(t[o]=e);const s=Object.keys(r);let n;i=s.length;for(let e=0;e<i;++e)n=s[e],Ae(n)||(t[n]=r[n])}}else t=re(o);ne.set(e,t)}return t},defineProperty(e,t,o,r=!1){const i=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[i];if(void 0===e){const s=this instanceof HTMLElement?ce.findResponsibleContainer(this):ce.getOrCreateDOMContainer();if(e=s.get(o),this[i]=e,r&&this instanceof ee){const r=this.$fastController,s=()=>{ce.findResponsibleContainer(this).get(o)!==this[i]&&(this[i]=e,r.notify(t))};r.subscribe({handleChange:s},"isConnected")}}return e}})},createInterface(e,t){const o="function"==typeof e?e:t,r="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Re,i="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),s=function(e,t,o){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${s.friendlyName}'`);t?ce.defineProperty(e,t,s,i):ce.getOrCreateAnnotationParamTypes(e)[o]=s};return s.$isInterface=!0,s.friendlyName=null==r?"(anonymous)":r,null!=o&&(s.register=function(e,t){return o(new oe(e,null!=t?t:s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject:(...e)=>function(t,o,r){if("number"==typeof r){const o=ce.getOrCreateAnnotationParamTypes(t),i=e[0];void 0!==i&&(o[r]=i)}else if(o)ce.defineProperty(t,o,e[0]);else{const o=r?ce.getOrCreateAnnotationParamTypes(r.value):ce.getOrCreateAnnotationParamTypes(t);let i;for(let t=0;t<e.length;++t)i=e[t],void 0!==i&&(o[t]=i)}},transient:e=>(e.register=function(t){return Te.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ue)=>(e.register=function(t){return Te.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),he=ce.createInterface("Container");function de(e){return function(t){const o=function(e,t,r){ce.inject(o)(e,t,r)};return o.$isResolver=!0,o.resolve=function(o,r){return e(t,o,r)},o}}ce.inject;const ue={scoped:!1};function fe(e,t,o){ce.inject(fe)(e,t,o)}function ge(e,t){return t.getFactory(e).construct(t)}de(((e,t,o)=>()=>o.get(e))),de(((e,t,o)=>o.has(e,!0)?o.get(e):void 0)),fe.$isResolver=!0,fe.resolve=()=>{},de(((e,t,o)=>{const r=ge(e,t),i=new pe(e,0,r);return o.registerResolver(e,i),r})),de(((e,t,o)=>ge(e,t)));class pe{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const o=e.getFactory(this.state);if(null===o)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(r=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==r?r:null;default:return null}}}function be(e){return this.get(e)}function ve(e,t){return t(e)}class me{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return o=void 0===t?new this.Type(...this.dependencies.map(be,e)):new this.Type(...this.dependencies.map(be,e),...t),null==this.transformers?o:this.transformers.reduce(ve,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ye={$isResolver:!0,resolve:(e,t)=>t};function we(e){return"function"==typeof e.register}function $e(e){return function(e){return we(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const xe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ke="__DI_LOCATE_PARENT__",Ce=new Map;class Fe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(he,ye),e instanceof Node&&e.addEventListener(ke,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,o,r,i,s;const n=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Le(t))if(we(t))t.register(this,n);else if(void 0!==t.prototype)Te.singleton(t,t).register(this);else for(o=Object.keys(t),i=0,s=o.length;i<s;++i)r=t[o[i]],Le(r)&&(we(r)?r.register(this,n):this.register(r));return--this.registerDepth,this}registerResolver(e,t){Se(e);const o=this.resolvers,r=o.get(e);return null==r?o.set(e,t):r instanceof pe&&4===r.strategy?r.state.push(t):o.set(e,new pe(e,4,[r,t])),t}registerTransformer(e,t){const o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){const e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Se(e),void 0!==e.resolve)return e;let o,r=this;for(;null!=r;){if(o=r.resolvers.get(e),null!=o)return o;if(null==r.parent){const o=$e(e)?this:r;return t?this.jitRegister(e,o):null}r=r.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Se(e),e.$isResolver)return e.resolve(this,this);let t,o=this;for(;null!=o;){if(t=o.resolvers.get(e),null!=t)return t.resolve(o,this);if(null==o.parent){const r=$e(e)?this:o;return t=this.jitRegister(e,r),t.resolve(o,this)}o=o.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Se(e);const r=this;let i,s=r;if(t){let t=o;for(;null!=s;)i=s.resolvers.get(e),null!=i&&(t=t.concat(Oe(i,s,r))),s=s.parent;return t}for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return Oe(i,s,r);if(s=s.parent,null==s)return o}return o}getFactory(e){let t=Ce.get(e);if(void 0===t){if(Be(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ce.set(e,t=new me(e,ce.getDependencies(e)))}return t}registerFactory(e,t){Ce.set(e,t)}createChild(e){return new Fe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(xe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(we(e)){const o=e.register(t);if(!(o instanceof Object)||null==o.resolve){const o=t.resolvers.get(e);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}const Ve=new WeakMap;function De(e){return function(t,o,r){if(Ve.has(r))return Ve.get(r);const i=e(t,o,r);return Ve.set(r,i),i}}const Te=Object.freeze({instance:(e,t)=>new pe(e,0,t),singleton:(e,t)=>new pe(e,1,t),transient:(e,t)=>new pe(e,2,t),callback:(e,t)=>new pe(e,3,t),cachedCallback:(e,t)=>new pe(e,3,De(t)),aliasTo:(e,t)=>new pe(t,5,e)});function Se(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Oe(e,t,o){if(e instanceof pe&&4===e.strategy){const r=e.state;let i=r.length;const s=new Array(i);for(;i--;)s[i]=r[i].resolve(t,o);return s}return[e.resolve(t,o)]}const Re="(anonymous)";function Le(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Be=function(){const e=new WeakMap;let t=!1,o="",r=0;return function(i){return t=e.get(i),void 0===t&&(o=i.toString(),r=o.length,t=r>=29&&r<=100&&125===o.charCodeAt(r-1)&&o.charCodeAt(r-2)<=32&&93===o.charCodeAt(r-3)&&101===o.charCodeAt(r-4)&&100===o.charCodeAt(r-5)&&111===o.charCodeAt(r-6)&&99===o.charCodeAt(r-7)&&32===o.charCodeAt(r-8)&&101===o.charCodeAt(r-9)&&118===o.charCodeAt(r-10)&&105===o.charCodeAt(r-11)&&116===o.charCodeAt(r-12)&&97===o.charCodeAt(r-13)&&110===o.charCodeAt(r-14)&&88===o.charCodeAt(r-15),e.set(i,t)),t}}(),Ne={};function Ae(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ne[e];if(void 0!==t)return t;const o=e.length;if(0===o)return Ne[e]=!1;let r=0;for(let t=0;t<o;++t)if(r=e.charCodeAt(t),0===t&&48===r&&o>1||r<48||r>57)return Ne[e]=!1;return Ne[e]=!0}default:return!1}}function Ee(e){return`${e.toLowerCase()}:presentation`}const Pe=new Map,Ie=Object.freeze({define(e,t,o){const r=Ee(e);void 0===Pe.get(r)?Pe.set(r,t):Pe.set(r,!1),o.register(Te.instance(r,t))},forTag(e,t){const o=Ee(e),r=Pe.get(o);return!1===r?ce.findResponsibleContainer(t).get(o):r||null}});class Me{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?N.create(t):t instanceof N?t:N.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class He extends ee{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Ie.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new je(this===He?class extends He{}:this,e,t)}}function ze(e,t,o){return"function"==typeof e?e(t,o):e}X([T],He.prototype,"template",void 0),X([T],He.prototype,"styles",void 0);class je{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const o=this.definition,r=this.overrideDefinition,i=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:i,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Me(ze(o.template,e,o),ze(o.styles,e,o));e.definePresentation(t);let i=ze(o.shadowOptions,e,o);e.shadowRootMode&&(i?r.shadowOptions||(i.mode=e.shadowRootMode):null!==i&&(i={mode:e.shadowRootMode})),e.defineElement({elementOptions:ze(o.elementOptions,e,o),shadowOptions:i,attributes:ze(o.attributes,e,o)})}})}}class _e{createCSS(){return""}createBehavior(){}}function qe(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ge=document.createElement("div");class Ue{setProperty(e,t){u.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){u.queueUpdate((()=>this.target.removeProperty(e)))}}class We extends Ue{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Xe extends Ue{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Qe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),F.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),u.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),u.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:o}=this.style;if(o){const e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}X([T],Qe.prototype,"target",void 0);class Ke{constructor(e){this.target=e.style}setProperty(e,t){u.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){u.queueUpdate((()=>this.target.removeProperty(e)))}}class Ye{setProperty(e,t){Ye.properties[e]=t;for(const o of Ye.roots.values())et.getOrCreate(Ye.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete Ye.properties[e];for(const t of Ye.roots.values())et.getOrCreate(Ye.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ye;if(!t.has(e)){t.add(e);const o=et.getOrCreate(this.normalizeRoot(e));for(const e in Ye.properties)o.setProperty(e,Ye.properties[e])}}static unregisterRoot(e){const{roots:t}=Ye;if(t.has(e)){t.delete(e);const o=et.getOrCreate(Ye.normalizeRoot(e));for(const e in Ye.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===Ge?document:e}}Ye.roots=new Set,Ye.properties={};const Ze=new WeakMap,Je=u.supportsAdoptedStyleSheets?class extends Ue{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(N.create([t]))}}:Qe,et=Object.freeze({getOrCreate(e){if(Ze.has(e))return Ze.get(e);let t;return t=e===Ge?new Ye:e instanceof Document?u.supportsAdoptedStyleSheets?new We:new Xe:e instanceof ee?new Je(e):new Ke(e),Ze.set(e,t),t}});class tt extends _e{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=tt.uniqueId(),tt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new tt({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return tt.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=nt.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof tt&&(t=this.alias(t)),nt.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),nt.existsFor(e)&&nt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ge,e),this}subscribe(e,t){const o=this.getOrCreateSubscriberSet(t);t&&!nt.existsFor(t)&&nt.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){const o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}tt.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),tt.tokensById=new Map;class ot{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=F.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,L))}}class rt{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),F.getNotifier(this).notify(e.id))}get(e){return F.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const it=new WeakMap,st=new WeakMap;class nt{constructor(e){this.target=e,this.store=new rt,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const o=tt.getTokenById(t);if(o&&(o.notify(this.target),tt.isCSSDesignToken(o))){const t=this.parent,r=this.isReflecting(o);if(t){const i=t.get(o),s=e.get(o);i===s||r?i===s&&r&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else r||this.reflectToCSS(o)}}},it.set(e,this),F.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof ee?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return it.get(e)||new nt(e)}static existsFor(e){return it.has(e)}static findParent(e){if(Ge!==e.target){let t=qe(e.target);for(;null!==t;){if(it.has(t))return it.get(t);t=qe(t)}return nt.getOrCreate(Ge)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==Ge?nt.getOrCreate(Ge):null}while(null!==o);return null}get parent(){return st.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const o=this.getRaw(e);return void 0!==o?(this.hydrate(e,o),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=nt.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){tt.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),tt.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=nt.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&st.get(this).removeChild(this)}appendChild(e){e.parent&&st.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));st.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),F.getNotifier(this.store).subscribe(e);for(const[t,o]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):o)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),F.getNotifier(this.store).unsubscribe(e),e.parent===this&&st.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=qe(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),nt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),nt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const o=tt.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){const o=this.bindingObservers.get(e);tt.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const o=new ot(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}nt.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:o}=e;this.add(t,o)}add(e,t){et.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(nt.getOrCreate(t).get(e)))}remove(e,t){et.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},X([T],nt.prototype,"children",void 0);const at=Object.freeze({create:function(e){return tt.from(e)},notifyConnection:e=>!(!e.isConnected||!nt.existsFor(e)||(nt.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!nt.existsFor(e)||(nt.getOrCreate(e).unbind(),0)),registerRoot(e=Ge){Ye.registerRoot(e)},unregisterRoot(e=Ge){Ye.unregisterRoot(e)}}),lt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ct=new Map,ht=new Map;let dt=null;const ut=ce.createInterface((e=>e.cachedCallback((e=>(null===dt&&(dt=new gt(null,e)),dt))))),ft=Object.freeze({tagFor:e=>ht.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ce.findResponsibleContainer(e).get(ut)},getOrCreate(e){if(!e)return null===dt&&(dt=ce.getOrCreateDOMContainer().get(ut)),dt;const t=e.$$designSystem$$;if(t)return t;const o=ce.getOrCreateDOMContainer(e);if(o.has(ut,!1))return o.get(ut);{const t=new gt(e,o);return o.register(Te.instance(ut,t)),t}}});class gt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>lt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,o=[],r=this.disambiguate,i=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(e,s,n){const a=function(e,t,o){return"string"==typeof e?{name:e,type:t,callback:o}:e}(e,s,n),{name:l,callback:c,baseClass:h}=a;let{type:d}=a,u=l,f=ct.get(u),g=!0;for(;f;){const e=r(u,d,f);switch(e){case lt.ignoreDuplicate:return;case lt.definitionCallbackOnly:g=!1,f=void 0;break;default:u=e,f=ct.get(u)}}g&&((ht.has(d)||d===He)&&(d=class extends d{}),ct.set(u,d),ht.set(d,u),h&&ht.set(h,u)),o.push(new pt(t,u,d,i,c,g))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&at.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(const e of o)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class pt{constructor(e,t,o,r,i,s){this.container=e,this.name=t,this.type=o,this.shadowRootMode=r,this.callback=i,this.willDefine=s,this.definition=null}definePresentation(e){Ie.define(this.name,e,this.container)}defineElement(e){this.definition=new W(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ft.tagFor(e)}}class bt{}X([_({attribute:"aria-atomic",mode:"fromView"})],bt.prototype,"ariaAtomic",void 0),X([_({attribute:"aria-busy",mode:"fromView"})],bt.prototype,"ariaBusy",void 0),X([_({attribute:"aria-controls",mode:"fromView"})],bt.prototype,"ariaControls",void 0),X([_({attribute:"aria-current",mode:"fromView"})],bt.prototype,"ariaCurrent",void 0),X([_({attribute:"aria-describedby",mode:"fromView"})],bt.prototype,"ariaDescribedby",void 0),X([_({attribute:"aria-details",mode:"fromView"})],bt.prototype,"ariaDetails",void 0),X([_({attribute:"aria-disabled",mode:"fromView"})],bt.prototype,"ariaDisabled",void 0),X([_({attribute:"aria-errormessage",mode:"fromView"})],bt.prototype,"ariaErrormessage",void 0),X([_({attribute:"aria-flowto",mode:"fromView"})],bt.prototype,"ariaFlowto",void 0),X([_({attribute:"aria-haspopup",mode:"fromView"})],bt.prototype,"ariaHaspopup",void 0),X([_({attribute:"aria-hidden",mode:"fromView"})],bt.prototype,"ariaHidden",void 0),X([_({attribute:"aria-invalid",mode:"fromView"})],bt.prototype,"ariaInvalid",void 0),X([_({attribute:"aria-keyshortcuts",mode:"fromView"})],bt.prototype,"ariaKeyshortcuts",void 0),X([_({attribute:"aria-label",mode:"fromView"})],bt.prototype,"ariaLabel",void 0),X([_({attribute:"aria-labelledby",mode:"fromView"})],bt.prototype,"ariaLabelledby",void 0),X([_({attribute:"aria-live",mode:"fromView"})],bt.prototype,"ariaLive",void 0),X([_({attribute:"aria-owns",mode:"fromView"})],bt.prototype,"ariaOwns",void 0),X([_({attribute:"aria-relevant",mode:"fromView"})],bt.prototype,"ariaRelevant",void 0),X([_({attribute:"aria-roledescription",mode:"fromView"})],bt.prototype,"ariaRoledescription",void 0);class vt{constructor(){this.targetIndex=0}}class mt extends vt{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class yt extends vt{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return u.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function wt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=F.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function $t(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function xt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function kt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Ct(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ft(e){u.setAttribute(this.target,this.targetName,e)}function Vt(e){u.setBooleanAttribute(this.target,this.targetName,e)}function Dt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Tt(e){this.target[this.targetName]=e}function St(e){const t=this.classVersions||Object.create(null),o=this.target;let r=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,s=i.length;e<s;++e){const s=i[e];""!==s&&(t[s]=r,o.classList.add(s))}}if(this.classVersions=t,this.version=r+1,0!==r){r-=1;for(const e in t)t[e]===r&&o.classList.remove(e)}}class Ot extends mt{constructor(e){super(),this.binding=e,this.bind=wt,this.unbind=xt,this.updateTarget=Ft,this.isBindingVolatile=F.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Tt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>u.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Vt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=$t,this.unbind=Ct;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=St)}}targetAtContent(){this.updateTarget=Dt,this.unbind=kt}createBehavior(e){return new Rt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Rt{constructor(e,t,o,r,i,s,n){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=r,this.unbind=i,this.updateTarget=s,this.targetName=n}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){O(e);const t=this.binding(this.source,this.context);O(null),!0!==t&&e.preventDefault()}}let Lt=null;class Bt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Lt=this}static borrow(e){const t=Lt||new Bt;return t.directives=e,t.reset(),Lt=null,t}}function Nt(e){if(1===e.length)return e[0];let t;const o=e.length,r=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new Ot(((e,t)=>{let i="";for(let s=0;s<o;++s)i+=r[s](e,t);return i}));return i.targetName=t,i}const At=d.length;function Et(e,t){const o=t.split(h);if(1===o.length)return null;const r=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],s=i.indexOf(d);let n;if(-1===s)n=i;else{const t=parseInt(i.substring(0,s));r.push(e.directives[t]),n=i.substring(s+At)}""!==n&&r.push(n)}return r}function Pt(e,t,o=!1){const r=t.attributes;for(let i=0,s=r.length;i<s;++i){const n=r[i],a=n.value,l=Et(e,a);let c=null;null===l?o&&(c=new Ot((()=>a)),c.targetName=n.name):c=Nt(l),null!==c&&(t.removeAttributeNode(n),i--,s--,e.addFactory(c))}}function It(e,t,o){const r=Et(e,t.textContent);if(null!==r){let i=t;for(let s=0,n=r.length;s<n;++s){const n=r[s],a=0===s?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof n?a.textContent=n:(a.textContent=" ",e.captureContentBinding(n)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Mt=document.createRange();class Ht{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,o=this.lastChild;let r,i=this.firstChild;for(;i!==o;)r=i.nextSibling,t.insertBefore(i,e),i=r;t.insertBefore(o,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,e.appendChild(r),r=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,e.removeChild(r),r=o;e.removeChild(t);const i=this.behaviors,s=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const r=this.source;this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i){const s=o[i];s.unbind(r),s.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,i=o.length;r<i;++r)o[r].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,r=e.length;o<r;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Mt.setStartBefore(e[0].firstChild),Mt.setEndAfter(e[e.length-1].lastChild),Mt.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],r=o.behaviors,i=o.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}}}}class zt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=u.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const r=Bt.borrow(t);Pt(r,e,!0);const i=r.behaviorFactories;r.reset();const s=u.createTemplateWalker(o);let n;for(;n=s.nextNode();)switch(r.targetIndex++,n.nodeType){case 1:Pt(r,n);break;case 3:It(r,n,s);break;case 8:u.isMarker(n)&&r.addFactory(t[u.extractDirectiveIndexFromMarker(n)])}let a=0;(u.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const l=r.behaviorFactories;return r.release(),{fragment:o,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,r=new Array(this.behaviorCount),i=u.createTemplateWalker(t);let s=0,n=this.targetOffset,a=i.nextNode();for(let e=o.length;s<e;++s){const e=o[s],t=e.targetIndex;for(;null!==a;){if(n===t){r[s]=e.createBehavior(a);break}a=i.nextNode(),n++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++s)r[s]=t[o].createBehavior(e)}return new Ht(t,r)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const r=this.create(o);return r.bind(e,L),r.appendTo(t),r}}const jt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _t(e,...t){const o=[];let r="";for(let i=0,s=e.length-1;i<s;++i){const s=e[i];let n=t[i];if(r+=s,n instanceof zt){const e=n;n=()=>e}if("function"==typeof n&&(n=new Ot(n)),n instanceof mt){const e=jt.exec(s);null!==e&&(n.targetName=e[2])}n instanceof vt?(r+=n.createPlaceholder(o.length),o.push(n)):r+=n}return r+=e[e.length-1],new zt(r,o)}class qt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Gt(e){return new yt("fast-ref",qt,e)}class Ut{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Wt=(e,t)=>_t`
    <span
        part="end"
        ${Gt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Gt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Xt=(e,t)=>_t`
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
`;function Qt(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))})),t.attributes){const o=e.attributes||[];e.attributes=o.concat(t.attributes)}}))}var Kt;_t`
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
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Kt||(Kt={}));const Yt="ArrowDown",Zt="ArrowLeft",Jt="ArrowRight",eo="ArrowUp",to="Enter",oo={ArrowDown:Yt,ArrowLeft:Zt,ArrowRight:Jt,ArrowUp:eo},ro="form-associated-proxy",io="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,so=new Map;function no(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return io}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return o}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!io)return null;let e=so.get(this);return e||(e=this.attachInternals(),so.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ro),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ro)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===to&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return _({mode:"boolean"})(t.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),_({attribute:"current-value"})(t.prototype,"currentValue"),_(t.prototype,"name"),_({mode:"boolean"})(t.prototype,"required"),T(t.prototype,"value"),t}function ao(e){class t extends(no(e)){}class o extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return _({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),_({attribute:"current-checked",converter:H})(o.prototype,"currentChecked"),T(o.prototype,"defaultChecked"),T(o.prototype,"checked"),o}class lo extends He{}class co extends(no(lo)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ho extends co{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}X([_({mode:"boolean"})],ho.prototype,"autofocus",void 0),X([_({attribute:"form"})],ho.prototype,"formId",void 0),X([_],ho.prototype,"formaction",void 0),X([_],ho.prototype,"formenctype",void 0),X([_],ho.prototype,"formmethod",void 0),X([_({mode:"boolean"})],ho.prototype,"formnovalidate",void 0),X([_],ho.prototype,"formtarget",void 0),X([_],ho.prototype,"type",void 0),X([T],ho.prototype,"defaultSlottedContent",void 0);class uo{}X([_({attribute:"aria-expanded",mode:"fromView"})],uo.prototype,"ariaExpanded",void 0),X([_({attribute:"aria-pressed",mode:"fromView"})],uo.prototype,"ariaPressed",void 0),Qt(uo,bt),Qt(ho,Ut,uo);class fo extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=F.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function go(e){return"string"==typeof e&&(e={property:e}),new yt("fast-slotted",fo,e)}function po(e,t){const o=[];let r="";const i=[];for(let s=0,n=e.length-1;s<n;++s){r+=e[s];let n=t[s];if(n instanceof _e){const e=n.createBehavior();n=n.createCSS(),e&&i.push(e)}n instanceof N||n instanceof CSSStyleSheet?(""!==r.trim()&&(o.push(r),r=""),o.push(n)):r+=n}return r+=e[e.length-1],""!==r.trim()&&o.push(r),{styles:o,behaviors:i}}function bo(e,...t){const{styles:o,behaviors:r}=po(e,t),i=N.create(o);return r.length&&i.withBehaviors(...r),i}class vo extends _e{constructor(e,t){super(),this.behaviors=t,this.css="";const o=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);o.length&&(this.styles=N.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}const mo="not-allowed";class yo extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new yo(e,t)}constructListener(e){let t=!1;const o=this.styles;return function(){const{matches:r}=this;r&&!t?(e.$fastController.addStyles(o),t=r):!r&&t&&(e.$fastController.removeStyles(o),t=r)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const wo=yo.with(window.matchMedia("(forced-colors)"));var $o,xo;function ko(e){return`:host([hidden]){display:none}:host{display:${e}}`}let Co;yo.with(window.matchMedia("(prefers-color-scheme: dark)")),yo.with(window.matchMedia("(prefers-color-scheme: light)")),(xo=$o||($o={})).Canvas="Canvas",xo.CanvasText="CanvasText",xo.LinkText="LinkText",xo.VisitedText="VisitedText",xo.ActiveText="ActiveText",xo.ButtonFace="ButtonFace",xo.ButtonText="ButtonText",xo.Field="Field",xo.FieldText="FieldText",xo.Highlight="Highlight",xo.HighlightText="HighlightText",xo.GrayText="GrayText";const Fo=function(){if("boolean"==typeof Co)return Co;if("undefined"==typeof window||!window.document||!window.document.createElement)return Co=!1,Co;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Co=!0}catch(e){Co=!1}finally{document.head.removeChild(e)}return Co}()?"focus-visible":"focus";var Vo,Do;function To(e,t,o){return isNaN(e)||e<=t?t:e>=o?o:e}function So(e,t,o){return isNaN(e)||e<=t?0:e>=o?1:e/(o-t)}function Oo(e,t,o){return isNaN(e)?t:t+e*(o-t)}function Ro(e,t,o){return isNaN(e)||e<=0?t:e>=1?o:t+e*(o-t)}function Lo(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}!function(e){e.ltr="ltr",e.rtl="rtl"}(Vo||(Vo={})),Math.PI;class Bo{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new Bo(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Bo(Lo(this.h,e),Lo(this.s,e),Lo(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class No{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new No(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new No(Lo(this.l,e),Lo(this.a,e),Lo(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}No.epsilon=216/24389,No.kappa=24389/27;class Ao{constructor(e,t,o,r){this.r=e,this.g=t,this.b=o,this.a="number"!=typeof r||isNaN(r)?1:r}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new Ao(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Oo(this.r,0,255))},${Math.round(Oo(this.g,0,255))},${Math.round(Oo(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Oo(this.r,0,255))},${Math.round(Oo(this.g,0,255))},${Math.round(Oo(this.b,0,255))},${To(this.a,0,1)})`}roundToPrecision(e){return new Ao(Lo(this.r,e),Lo(this.g,e),Lo(this.b,e),Lo(this.a,e))}clamp(){return new Ao(To(this.r,0,1),To(this.g,0,1),To(this.b,0,1),To(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(To(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(Oo(e,0,255))}}class Eo{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Eo(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Eo(Lo(this.x,e),Lo(this.y,e),Lo(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Po(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new Ao(t(e.r),t(e.g),t(e.b),1))}function Io(e,t,o){return o-t==0?0:(e-t)/(o-t)}function Mo(e,t,o){return(Io(e.r,t.r,o.r)+Io(e.g,t.g,o.g)+Io(e.b,t.b,o.b))/3}function Ho(e){const t=Math.max(e.r,e.g,e.b),o=Math.min(e.r,e.g,e.b),r=t-o;let i=0;0!==r&&(i=t===e.r?(e.g-e.b)/r%6*60:t===e.g?60*((e.b-e.r)/r+2):60*((e.r-e.g)/r+4)),i<0&&(i+=360);const s=(t+o)/2;let n=0;return 0!==r&&(n=r/(1-Math.abs(2*s-1))),new Bo(i,n,s)}function zo(e,t=1){return function(e,t=1){function o(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const r=o(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),i=o(-.969266*e.x+1.8760108*e.y+.041556*e.z),s=o(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new Ao(r,i,s,t)}(function(e){const t=(e.l+16)/116,o=t+e.a/500,r=t-e.b/200,i=Math.pow(o,3),s=Math.pow(t,3),n=Math.pow(r,3);let a=0;a=i>No.epsilon?i:(116*o-16)/No.kappa;let l=0;l=e.l>No.epsilon*No.kappa?s:e.l/No.kappa;let c=0;return c=n>No.epsilon?n:(116*r-16)/No.kappa,a=Eo.whitePoint.x*a,l=Eo.whitePoint.y*l,c=Eo.whitePoint.z*c,new Eo(a,l,c)}(e),t)}function jo(e,t,o){return isNaN(e)||e<=0?t:e>=1?o:new Ao(Ro(e,t.r,o.r),Ro(e,t.g,o.g),Ro(e,t.b,o.b),Ro(e,t.a,o.a))}function _o(e,t){const o=e.relativeLuminance>t.relativeLuminance?e:t,r=e.relativeLuminance>t.relativeLuminance?t:e;return(o.relativeLuminance+.05)/(r.relativeLuminance+.05)}Eo.whitePoint=new Eo(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Do||(Do={}));const qo=Object.freeze({create:(e,t,o)=>new Go(e,t,o),from:e=>new Go(e.r,e.g,e.b)});class Go extends Ao{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=_o.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Po(this)}static fromObject(e){return new Go(e.r,e.g,e.b)}}function Uo(e,t,o=0,r=e.length-1){if(r===o)return e[o];const i=Math.floor((r-o)/2)+o;return t(e[i])?Uo(e,t,o,i):Uo(e,t,i+1,r)}const Wo=(-.1+Math.sqrt(.21))/2;function Xo(e){return e.relativeLuminance<=Wo}function Qo(e){return Xo(e)?-1:1}const Ko={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},Yo=Object.freeze({create:function(e,t,o){return"number"==typeof e?Yo.from(qo.create(e,t,o)):Yo.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const o in t)if(typeof t[o]!=typeof e[o])return!1;return!0}(e)?Zo.from(e,t):Zo.from(qo.create(e.r,e.g,e.b),t)}});class Zo{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,r){void 0===o&&(o=this.closestIndexOf(e));let i=this.swatches;const s=this.lastIndex;let n=o;return void 0===r&&(r=Qo(e)),-1===r&&(i=this.reversedSwatches,n=s-n),Uo(i,(o=>_o(e,o)>=t),n,s)}get(e){return this.swatches[e]||this.swatches[To(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const o=this.swatches.reduce(((t,o)=>Math.abs(o.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?o:t));return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const o=Ho(e).s,r=Ho(t);return r.s<o?function(e,t=1){const o=(1-Math.abs(2*e.l-1))*e.s,r=o*(1-Math.abs(e.h/60%2-1)),i=e.l-o/2;let s=0,n=0,a=0;return e.h<60?(s=o,n=r,a=0):e.h<120?(s=r,n=o,a=0):e.h<180?(s=0,n=o,a=r):e.h<240?(s=0,n=r,a=o):e.h<300?(s=r,n=0,a=o):e.h<360&&(s=o,n=0,a=r),new Ao(s+i,n+i,a+i,t)}(new Bo(r.h,o,r.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],o=function(e){function t(e){return e>No.epsilon?Math.pow(e,1/3):(No.kappa*e+16)/116}const o=t(e.x/Eo.whitePoint.x),r=t(e.y/Eo.whitePoint.y),i=t(e.z/Eo.whitePoint.z);return new No(116*r-16,500*(o-r),200*(r-i))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const o=t(e.r),r=t(e.g),i=t(e.b);return new Eo(.4124564*o+.3575761*r+.1804375*i,.2126729*o+.7151522*r+.072175*i,.0193339*o+.119192*r+.9503041*i)}(Ao.fromObject(e).roundToPrecision(4))),r=zo(new No(0,o.a,o.b)).clamp().roundToPrecision(4),i=zo(new No(50,o.a,o.b)).clamp().roundToPrecision(4),s=zo(new No(100,o.a,o.b)).clamp().roundToPrecision(4),n=new Ao(0,0,0),a=new Ao(1,1,1),l=s.equalValue(a)?0:14,c=r.equalValue(n)?0:14;for(let e=100+l;e>=0-c;e-=.5){let o;o=e<0?jo(e/c+1,n,r):e<=50?jo(Zo.ramp(e),r,i):e<=100?jo(Zo.ramp(e),i,s):jo((e-100)/l,s,a),o=Zo.saturationBump(i,o).roundToPrecision(4),t.push(qo.from(o))}return new Zo(e,t)}static adjustEnd(e,t,o,r){const i=-1===r?t.swatches:t.reversedSwatches,s=e=>{const o=t.closestIndexOf(e);return 1===r?t.lastIndex-o:o};1===r&&o.reverse();const n=e(o[o.length-2]);if(Lo(_o(o[o.length-1],o[o.length-2]),2)<n){o.pop();const e=s(t.colorContrast(i[t.lastIndex],n,void 0,r))-s(o[o.length-2]);let a=1;for(let r=o.length-e-1;r<o.length;r++){const e=s(o[r]),n=r===o.length-1?t.lastIndex:e+a;o[r]=i[n],a++}}1===r&&o.reverse()}static createColorPaletteByContrast(e,t){const o=Zo.createHighResolutionPalette(e),r=e=>Lo(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),i=[];let s=t.preserveSource?e:o.swatches[0];i.push(s);do{const e=r(s);s=o.colorContrast(s,e,void 0,1),i.push(s)}while(s.relativeLuminance>0);if(t.preserveSource){s=e;do{const e=r(s);s=o.colorContrast(s,e,void 0,-1),i.unshift(s)}while(s.relativeLuminance<1)}return this.adjustEnd(r,o,i,-1),t.preserveSource&&this.adjustEnd(r,o,i,1),i}static from(e,t){const o=void 0===t?Ko:Object.assign(Object.assign({},Ko),t);return new Zo(e,Object.freeze(Zo.createColorPaletteByContrast(e,o)))}}const Jo=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function er(e){const t=Jo.exec(e);if(null===t)return null;let o=t[1];if(3===o.length){const e=o.charAt(0),t=o.charAt(1),r=o.charAt(2);o=e.concat(e,t,t,r,r)}const r=parseInt(o,16);return isNaN(r)?null:new Ao(So((16711680&r)>>>16,0,255),So((65280&r)>>>8,0,255),So(255&r,0,255),1)}const tr=qo.create(1,1,1),or=qo.create(0,0,0),rr=qo.create(.5,.5,.5),ir=er("#0078D4"),sr=qo.create(ir.r,ir.g,ir.b);function nr(e,t,o,r,i){const s=e=>e.contrast(tr)>=i?tr:or,n=s(e),a=s(t);return{rest:n,hover:a,active:n.relativeLuminance===a.relativeLuminance?n:s(o),focus:s(r)}}var ar;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(ar||(ar={}));class lr{constructor(e,t,o,r){this.toColorString=()=>this.cssGradient,this.contrast=_o.bind(null,this),this.createCSS=this.toColorString,this.color=new Ao(e,t,o),this.cssGradient=r,this.relativeLuminance=Po(this.color),this.r=e,this.g=t,this.b=o}static fromObject(e,t){return new lr(e.r,e.g,e.b,t)}}const cr=new Ao(0,0,0),hr=new Ao(1,1,1);function dr(e,t,o,r,i,s,n,a,l=10,c=!1){const h=e.closestIndexOf(t);function d(o){if(c){const r=e.closestIndexOf(t),i=e.get(r),s=o.relativeLuminance<t.relativeLuminance?cr:hr,n=function(e,t,o=null){let r=0,i=o;return null!==i?r=Mo(e,t,i):(i=new Ao(0,0,0,1),r=Mo(e,t,i),r<=0&&(i=new Ao(1,1,1,1),r=Mo(e,t,i))),r=Math.round(1e3*r)/1e3,new Ao(i.r,i.g,i.b,r)}(er(o.toColorString()),er(i.toColorString()),s).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new Ao(e.r,e.g,e.b,1);const o=t.a*t.r+(1-t.a)*e.r,r=t.a*t.g+(1-t.a)*e.g,i=t.a*t.b+(1-t.a)*e.b;return new Ao(o,r,i,1)}(er(t.toColorString()),n);return qo.from(a)}return o}void 0===a&&(a=Qo(t));const u=h+a*o,f=u+a*(r-o),g=u+a*(i-o),p=u+a*(s-o),b=-1===a?0:100-l,v=-1===a?l:100;function m(t,o){const r=e.get(t);if(o){const o=e.get(t+a*n),i=-1===a?o:r,s=-1===a?r:o,l=`linear-gradient(${d(i).toColorString()} ${b}%, ${d(s).toColorString()} ${v}%)`;return lr.fromObject(i,l)}return d(r)}return{rest:m(u,!0),hover:m(f,!0),active:m(g,!1),focus:m(p,!0)}}function ur(e,t,o,r,i,s,n,a){null==a&&(a=Qo(t));const l=e.closestIndexOf(e.colorContrast(t,o));return{rest:e.get(l+a*r),hover:e.get(l+a*i),active:e.get(l+a*s),focus:e.get(l+a*n)}}function fr(e,t,o,r,i,s,n){const a=e.closestIndexOf(t);return null==n&&(n=Qo(t)),{rest:e.get(a+n*o),hover:e.get(a+n*r),active:e.get(a+n*i),focus:e.get(a+n*s)}}function gr(e,t,o,r,i,s,n,a,l,c,h,d){return Xo(t)?fr(e,t,a,l,c,h,d):fr(e,t,o,r,i,s,n)}var pr;function br(e,t){return e.closestIndexOf((o=t,qo.create(o,o,o)));var o}function vr(e,t,o){return e.get(br(e,t)+-1*o)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(pr||(pr={}));const{create:mr}=at;function yr(e){return at.create({name:e,cssCustomPropertyName:null})}const wr=mr("direction").withDefault(Vo.ltr),$r=mr("disabled-opacity").withDefault(.3),xr=mr("base-height-multiplier").withDefault(8),kr=(mr("base-horizontal-spacing-multiplier").withDefault(3),mr("density").withDefault(0)),Cr=mr("design-unit").withDefault(4),Fr=mr("control-corner-radius").withDefault(4),Vr=mr("layer-corner-radius").withDefault(8),Dr=mr("stroke-width").withDefault(1),Tr=mr("focus-stroke-width").withDefault(2),Sr=mr("body-font").withDefault("Segoe UI, sans-serif"),Or=mr("type-ramp-base-font-size").withDefault("14px"),Rr=mr("type-ramp-base-line-height").withDefault("20px"),Lr=mr("type-ramp-minus-1-font-size").withDefault("12px"),Br=mr("type-ramp-minus-1-line-height").withDefault("16px"),Nr=(mr("type-ramp-minus-2-font-size").withDefault("10px"),mr("type-ramp-minus-2-line-height").withDefault("14px"),mr("type-ramp-plus-1-font-size").withDefault("16px"),mr("type-ramp-plus-1-line-height").withDefault("22px"),mr("type-ramp-plus-2-font-size").withDefault("20px"),mr("type-ramp-plus-2-line-height").withDefault("26px"),mr("type-ramp-plus-3-font-size").withDefault("24px"),mr("type-ramp-plus-3-line-height").withDefault("32px"),mr("type-ramp-plus-4-font-size").withDefault("28px"),mr("type-ramp-plus-4-line-height").withDefault("36px"),mr("type-ramp-plus-5-font-size").withDefault("32px"),mr("type-ramp-plus-5-line-height").withDefault("40px"),mr("type-ramp-plus-6-font-size").withDefault("40px"),mr("type-ramp-plus-6-line-height").withDefault("52px"),mr("base-layer-luminance").withDefault(pr.LightMode)),Ar=yr("accent-fill-rest-delta").withDefault(0),Er=yr("accent-fill-hover-delta").withDefault(-2),Pr=yr("accent-fill-active-delta").withDefault(-5),Ir=yr("accent-fill-focus-delta").withDefault(0),Mr=yr("accent-foreground-rest-delta").withDefault(0),Hr=yr("accent-foreground-hover-delta").withDefault(3),zr=yr("accent-foreground-active-delta").withDefault(-8),jr=yr("accent-foreground-focus-delta").withDefault(0),_r=yr("neutral-fill-rest-delta").withDefault(-1),qr=yr("neutral-fill-hover-delta").withDefault(1),Gr=yr("neutral-fill-active-delta").withDefault(0),Ur=yr("neutral-fill-focus-delta").withDefault(0),Wr=yr("neutral-fill-input-rest-delta").withDefault(-1),Xr=yr("neutral-fill-input-hover-delta").withDefault(1),Qr=yr("neutral-fill-input-active-delta").withDefault(0),Kr=yr("neutral-fill-input-focus-delta").withDefault(-2),Yr=yr("neutral-fill-input-alt-rest-delta").withDefault(2),Zr=yr("neutral-fill-input-alt-hover-delta").withDefault(4),Jr=yr("neutral-fill-input-alt-active-delta").withDefault(6),ei=yr("neutral-fill-input-alt-focus-delta").withDefault(2),ti=yr("neutral-fill-layer-rest-delta").withDefault(-2),oi=yr("neutral-fill-layer-hover-delta").withDefault(-3),ri=yr("neutral-fill-layer-active-delta").withDefault(-3),ii=yr("neutral-fill-layer-alt-rest-delta").withDefault(-1),si=yr("neutral-fill-secondary-rest-delta").withDefault(3),ni=yr("neutral-fill-secondary-hover-delta").withDefault(2),ai=yr("neutral-fill-secondary-active-delta").withDefault(1),li=yr("neutral-fill-secondary-focus-delta").withDefault(3),ci=yr("neutral-fill-stealth-rest-delta").withDefault(0),hi=yr("neutral-fill-stealth-hover-delta").withDefault(3),di=yr("neutral-fill-stealth-active-delta").withDefault(2),ui=yr("neutral-fill-stealth-focus-delta").withDefault(0),fi=yr("neutral-fill-strong-rest-delta").withDefault(0),gi=yr("neutral-fill-strong-hover-delta").withDefault(8),pi=yr("neutral-fill-strong-active-delta").withDefault(-5),bi=yr("neutral-fill-strong-focus-delta").withDefault(0),vi=yr("neutral-stroke-rest-delta").withDefault(8),mi=yr("neutral-stroke-hover-delta").withDefault(12),yi=yr("neutral-stroke-active-delta").withDefault(6),wi=yr("neutral-stroke-focus-delta").withDefault(8),$i=yr("neutral-stroke-control-rest-delta").withDefault(3),xi=yr("neutral-stroke-control-hover-delta").withDefault(5),ki=yr("neutral-stroke-control-active-delta").withDefault(5),Ci=yr("neutral-stroke-control-focus-delta").withDefault(5),Fi=yr("neutral-stroke-divider-rest-delta").withDefault(4),Vi=yr("neutral-stroke-layer-rest-delta").withDefault(3),Di=yr("neutral-stroke-layer-hover-delta").withDefault(3),Ti=yr("neutral-stroke-layer-active-delta").withDefault(3),Si=yr("neutral-stroke-strong-hover-delta").withDefault(0),Oi=yr("neutral-stroke-strong-active-delta").withDefault(0),Ri=yr("neutral-stroke-strong-focus-delta").withDefault(0),Li=mr("neutral-base-color").withDefault(rr),Bi=yr("neutral-palette").withDefault((e=>Yo.from(Li.getValueFor(e)))),Ni=mr("accent-base-color").withDefault(sr),Ai=yr("accent-palette").withDefault((e=>Yo.from(Ni.getValueFor(e)))),Ei=yr("neutral-layer-card-container-recipe").withDefault({evaluate:e=>vr(Bi.getValueFor(e),Nr.getValueFor(e),ti.getValueFor(e))}),Pi=(mr("neutral-layer-card-container").withDefault((e=>Ei.getValueFor(e).evaluate(e))),yr("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(br(e,t)+o)}(Bi.getValueFor(e),Nr.getValueFor(e),ti.getValueFor(e))})),Ii=(mr("neutral-layer-floating").withDefault((e=>Pi.getValueFor(e).evaluate(e))),yr("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(br(e,t))}(Bi.getValueFor(e),Nr.getValueFor(e))})),Mi=mr("neutral-layer-1").withDefault((e=>Ii.getValueFor(e).evaluate(e))),Hi=yr("neutral-layer-2-recipe").withDefault({evaluate:e=>vr(Bi.getValueFor(e),Nr.getValueFor(e),ti.getValueFor(e))}),zi=mr("neutral-layer-2").withDefault((e=>Hi.getValueFor(e).evaluate(e))),ji=yr("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(br(e,t)+-1*o*2)}(Bi.getValueFor(e),Nr.getValueFor(e),ti.getValueFor(e))}),_i=mr("neutral-layer-3").withDefault((e=>ji.getValueFor(e).evaluate(e))),qi=yr("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(br(e,t)+-1*o*3)}(Bi.getValueFor(e),Nr.getValueFor(e),ti.getValueFor(e))}),Gi=(mr("neutral-layer-4").withDefault((e=>qi.getValueFor(e).evaluate(e))),mr("fill-color").withDefault((e=>Mi.getValueFor(e))));var Ui;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(Ui||(Ui={}));const Wi=yr("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,r,i,s,n,a,l,c,h,d,u,f){return Xo(t)?ur(e,t,8,c,h,d,u,void 0):ur(e,t,5,r,i,s,n,void 0)}(Ai.getValueFor(e),t||Gi.getValueFor(e),0,Ar.getValueFor(e),Er.getValueFor(e),Pr.getValueFor(e),Ir.getValueFor(e),0,0,Ar.getValueFor(e),Er.getValueFor(e),Pr.getValueFor(e),Ir.getValueFor(e))}),Xi=mr("accent-fill-rest").withDefault((e=>Wi.getValueFor(e).evaluate(e).rest)),Qi=mr("accent-fill-hover").withDefault((e=>Wi.getValueFor(e).evaluate(e).hover)),Ki=mr("accent-fill-active").withDefault((e=>Wi.getValueFor(e).evaluate(e).active)),Yi=mr("accent-fill-focus").withDefault((e=>Wi.getValueFor(e).evaluate(e).focus)),Zi=yr("foreground-on-accent-recipe").withDefault({evaluate:e=>nr(Xi.getValueFor(e),Qi.getValueFor(e),Ki.getValueFor(e),Yi.getValueFor(e),Ui.normal)}),Ji=mr("foreground-on-accent-rest").withDefault((e=>Zi.getValueFor(e).evaluate(e).rest)),es=mr("foreground-on-accent-hover").withDefault((e=>Zi.getValueFor(e).evaluate(e).hover)),ts=mr("foreground-on-accent-active").withDefault((e=>Zi.getValueFor(e).evaluate(e).active)),os=(mr("foreground-on-accent-focus").withDefault((e=>Zi.getValueFor(e).evaluate(e).focus)),yr("accent-foreground-recipe").withDefault({evaluate:(e,t)=>ur(Ai.getValueFor(e),t||Gi.getValueFor(e),9.5,Mr.getValueFor(e),Hr.getValueFor(e),zr.getValueFor(e),jr.getValueFor(e))})),rs=mr("accent-foreground-rest").withDefault((e=>os.getValueFor(e).evaluate(e).rest)),is=mr("accent-foreground-hover").withDefault((e=>os.getValueFor(e).evaluate(e).hover)),ss=mr("accent-foreground-active").withDefault((e=>os.getValueFor(e).evaluate(e).active)),ns=(mr("accent-foreground-focus").withDefault((e=>os.getValueFor(e).evaluate(e).focus)),yr("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>dr(Bi.getValueFor(e),t||Gi.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),as=mr("accent-stroke-control-rest").withDefault((e=>ns.getValueFor(e).evaluate(e,Xi.getValueFor(e)).rest)),ls=mr("accent-stroke-control-hover").withDefault((e=>ns.getValueFor(e).evaluate(e,Qi.getValueFor(e)).hover)),cs=mr("accent-stroke-control-active").withDefault((e=>ns.getValueFor(e).evaluate(e,Ki.getValueFor(e)).active)),hs=(mr("accent-stroke-control-focus").withDefault((e=>ns.getValueFor(e).evaluate(e,Yi.getValueFor(e)).focus)),yr("neutral-fill-recipe").withDefault({evaluate:(e,t)=>gr(Bi.getValueFor(e),t||Gi.getValueFor(e),_r.getValueFor(e),qr.getValueFor(e),Gr.getValueFor(e),Ur.getValueFor(e),void 0,2,3,1,2,void 0)})),ds=mr("neutral-fill-rest").withDefault((e=>hs.getValueFor(e).evaluate(e).rest)),us=mr("neutral-fill-hover").withDefault((e=>hs.getValueFor(e).evaluate(e).hover)),fs=mr("neutral-fill-active").withDefault((e=>hs.getValueFor(e).evaluate(e).active)),gs=(mr("neutral-fill-focus").withDefault((e=>hs.getValueFor(e).evaluate(e).focus)),yr("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>gr(Bi.getValueFor(e),t||Gi.getValueFor(e),Wr.getValueFor(e),Xr.getValueFor(e),Qr.getValueFor(e),Kr.getValueFor(e),void 0,2,3,1,0,void 0)})),ps=mr("neutral-fill-input-rest").withDefault((e=>gs.getValueFor(e).evaluate(e).rest)),bs=mr("neutral-fill-input-hover").withDefault((e=>gs.getValueFor(e).evaluate(e).hover)),vs=(mr("neutral-fill-input-active").withDefault((e=>gs.getValueFor(e).evaluate(e).active)),mr("neutral-fill-input-focus").withDefault((e=>gs.getValueFor(e).evaluate(e).focus))),ms=yr("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>gr(Bi.getValueFor(e),t||Gi.getValueFor(e),Yr.getValueFor(e),Zr.getValueFor(e),Jr.getValueFor(e),ei.getValueFor(e),1,Yr.getValueFor(e),Yr.getValueFor(e)-Zr.getValueFor(e),Yr.getValueFor(e)-Jr.getValueFor(e),ei.getValueFor(e),1)}),ys=mr("neutral-fill-input-alt-rest").withDefault((e=>ms.getValueFor(e).evaluate(e).rest)),ws=mr("neutral-fill-input-alt-hover").withDefault((e=>ms.getValueFor(e).evaluate(e).hover)),$s=mr("neutral-fill-input-alt-active").withDefault((e=>ms.getValueFor(e).evaluate(e).active)),xs=mr("neutral-fill-input-alt-focus").withDefault((e=>ms.getValueFor(e).evaluate(e).focus)),ks=yr("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),ti.getValueFor(e),oi.getValueFor(e),ri.getValueFor(e),ti.getValueFor(e),1)}),Cs=(mr("neutral-fill-layer-rest").withDefault((e=>ks.getValueFor(e).evaluate(e).rest)),mr("neutral-fill-layer-hover").withDefault((e=>ks.getValueFor(e).evaluate(e).hover)),mr("neutral-fill-layer-active").withDefault((e=>ks.getValueFor(e).evaluate(e).active)),yr("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),ii.getValueFor(e),ii.getValueFor(e),ii.getValueFor(e),ii.getValueFor(e))})),Fs=(mr("neutral-fill-layer-alt-rest").withDefault((e=>Cs.getValueFor(e).evaluate(e).rest)),yr("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),si.getValueFor(e),ni.getValueFor(e),ai.getValueFor(e),li.getValueFor(e))})),Vs=mr("neutral-fill-secondary-rest").withDefault((e=>Fs.getValueFor(e).evaluate(e).rest)),Ds=mr("neutral-fill-secondary-hover").withDefault((e=>Fs.getValueFor(e).evaluate(e).hover)),Ts=(mr("neutral-fill-secondary-active").withDefault((e=>Fs.getValueFor(e).evaluate(e).active)),mr("neutral-fill-secondary-focus").withDefault((e=>Fs.getValueFor(e).evaluate(e).focus)),yr("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),ci.getValueFor(e),hi.getValueFor(e),di.getValueFor(e),ui.getValueFor(e))})),Ss=mr("neutral-fill-stealth-rest").withDefault((e=>Ts.getValueFor(e).evaluate(e).rest)),Os=mr("neutral-fill-stealth-hover").withDefault((e=>Ts.getValueFor(e).evaluate(e).hover)),Rs=mr("neutral-fill-stealth-active").withDefault((e=>Ts.getValueFor(e).evaluate(e).active)),Ls=(mr("neutral-fill-stealth-focus").withDefault((e=>Ts.getValueFor(e).evaluate(e).focus)),yr("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>ur(Bi.getValueFor(e),t||Gi.getValueFor(e),4.5,fi.getValueFor(e),gi.getValueFor(e),pi.getValueFor(e),bi.getValueFor(e))})),Bs=(mr("neutral-fill-strong-rest").withDefault((e=>Ls.getValueFor(e).evaluate(e).rest)),mr("neutral-fill-strong-hover").withDefault((e=>Ls.getValueFor(e).evaluate(e).hover)),mr("neutral-fill-strong-active").withDefault((e=>Ls.getValueFor(e).evaluate(e).active)),mr("neutral-fill-strong-focus").withDefault((e=>Ls.getValueFor(e).evaluate(e).focus)),yr("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>ur(Bi.getValueFor(e),t||Gi.getValueFor(e),16,0,-19,-30,0)})),Ns=mr("neutral-foreground-rest").withDefault((e=>Bs.getValueFor(e).evaluate(e).rest)),As=(mr("neutral-foreground-hover").withDefault((e=>Bs.getValueFor(e).evaluate(e).hover)),mr("neutral-foreground-active").withDefault((e=>Bs.getValueFor(e).evaluate(e).active)),mr("neutral-foreground-focus").withDefault((e=>Bs.getValueFor(e).evaluate(e).focus)),yr("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t,o){return e.colorContrast(t,4.5)}(Bi.getValueFor(e),t||Gi.getValueFor(e))})),Es=(mr("neutral-foreground-hint").withDefault((e=>As.getValueFor(e).evaluate(e))),yr("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),vi.getValueFor(e),mi.getValueFor(e),yi.getValueFor(e),wi.getValueFor(e))})),Ps=mr("neutral-stroke-rest").withDefault((e=>Es.getValueFor(e).evaluate(e).rest)),Is=mr("neutral-stroke-hover").withDefault((e=>Es.getValueFor(e).evaluate(e).hover)),Ms=mr("neutral-stroke-active").withDefault((e=>Es.getValueFor(e).evaluate(e).active)),Hs=(mr("neutral-stroke-focus").withDefault((e=>Es.getValueFor(e).evaluate(e).focus)),yr("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>dr(Bi.getValueFor(e),t||Gi.getValueFor(e),$i.getValueFor(e),xi.getValueFor(e),ki.getValueFor(e),Ci.getValueFor(e),5)})),zs=mr("neutral-stroke-control-rest").withDefault((e=>Hs.getValueFor(e).evaluate(e).rest)),js=mr("neutral-stroke-control-hover").withDefault((e=>Hs.getValueFor(e).evaluate(e).hover)),_s=mr("neutral-stroke-control-active").withDefault((e=>Hs.getValueFor(e).evaluate(e).active)),qs=(mr("neutral-stroke-control-focus").withDefault((e=>Hs.getValueFor(e).evaluate(e).focus)),yr("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,o){return e.get(e.closestIndexOf(t)+Qo(t)*o)}(Bi.getValueFor(e),t||Gi.getValueFor(e),Fi.getValueFor(e))})),Gs=(mr("neutral-stroke-divider-rest").withDefault((e=>qs.getValueFor(e).evaluate(e))),yr("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,r,i,s,n,a){const l=e.closestIndexOf(t),c=Qo(t),h=l+c*o,d=h+c*(r-o),u=h+c*(i-o),f=h+c*(s-o),g=`calc(100% - ${a})`;function p(t,o){const r=e.get(t);if(o){const o=e.get(t+20*c),i=`linear-gradient(${r.toColorString()} ${g}, ${o.toColorString()} ${g}, ${o.toColorString()})`;return lr.fromObject(r,i)}return r}return{rest:p(h,!0),hover:p(d,!0),active:p(u,!1),focus:p(f,!0)}}(Bi.getValueFor(e),t||Gi.getValueFor(e),$i.getValueFor(e),xi.getValueFor(e),ki.getValueFor(e),Ci.getValueFor(e),0,Dr.getValueFor(e)+"px")})),Us=mr("neutral-stroke-input-rest").withDefault((e=>Gs.getValueFor(e).evaluate(e).rest)),Ws=mr("neutral-stroke-input-hover").withDefault((e=>Gs.getValueFor(e).evaluate(e).hover)),Xs=(mr("neutral-stroke-input-active").withDefault((e=>Gs.getValueFor(e).evaluate(e).active)),mr("neutral-stroke-input-focus").withDefault((e=>Gs.getValueFor(e).evaluate(e).focus)),yr("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>fr(Bi.getValueFor(e),t||Gi.getValueFor(e),Vi.getValueFor(e),Di.getValueFor(e),Ti.getValueFor(e),Vi.getValueFor(e))})),Qs=mr("neutral-stroke-layer-rest").withDefault((e=>Xs.getValueFor(e).evaluate(e).rest)),Ks=(mr("neutral-stroke-layer-hover").withDefault((e=>Xs.getValueFor(e).evaluate(e).hover)),mr("neutral-stroke-layer-active").withDefault((e=>Xs.getValueFor(e).evaluate(e).active)),yr("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>ur(Bi.getValueFor(e),t||Gi.getValueFor(e),5.5,0,Si.getValueFor(e),Oi.getValueFor(e),Ri.getValueFor(e))})),Ys=mr("neutral-stroke-strong-rest").withDefault((e=>Ks.getValueFor(e).evaluate(e).rest)),Zs=mr("neutral-stroke-strong-hover").withDefault((e=>Ks.getValueFor(e).evaluate(e).hover)),Js=mr("neutral-stroke-strong-active").withDefault((e=>Ks.getValueFor(e).evaluate(e).active)),en=(mr("neutral-stroke-strong-focus").withDefault((e=>Ks.getValueFor(e).evaluate(e).focus)),yr("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Bi.getValueFor(e),Xo(Gi.getValueFor(e))?tr:or)})),tn=mr("focus-stroke-outer").withDefault((e=>en.getValueFor(e).evaluate(e))),on=yr("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ai.getValueFor(e),t=Gi.getValueFor(e),tn.getValueFor(e),Xo(t)?or:tr;var t}}),rn=mr("focus-stroke-inner").withDefault((e=>on.getValueFor(e).evaluate(e))),sn=yr("foreground-on-accent-large-recipe").withDefault({evaluate:e=>nr(Xi.getValueFor(e),Qi.getValueFor(e),Ki.getValueFor(e),Yi.getValueFor(e),Ui.large)}),nn=(mr("foreground-on-accent-rest-large").withDefault((e=>sn.getValueFor(e).evaluate(e).rest)),mr("foreground-on-accent-hover-large").withDefault((e=>sn.getValueFor(e).evaluate(e,Qi.getValueFor(e)).hover)),mr("foreground-on-accent-active-large").withDefault((e=>sn.getValueFor(e).evaluate(e,Ki.getValueFor(e)).active)),mr("foreground-on-accent-focus-large").withDefault((e=>sn.getValueFor(e).evaluate(e,Yi.getValueFor(e)).focus)),mr("neutral-fill-inverse-rest-delta").withDefault(0)),an=mr("neutral-fill-inverse-hover-delta").withDefault(-3),ln=mr("neutral-fill-inverse-active-delta").withDefault(7),cn=mr("neutral-fill-inverse-focus-delta").withDefault(0),hn=yr("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,r,i,s){const n=Qo(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+n*Math.abs(o-r);let c,h;return(1===n?o<r:n*o>n*r)?(c=a,h=l):(c=l,h=a),{rest:e.get(c),hover:e.get(h),active:e.get(c+n*i),focus:e.get(c+n*s)}}(Bi.getValueFor(e),t||Gi.getValueFor(e),nn.getValueFor(e),an.getValueFor(e),ln.getValueFor(e),cn.getValueFor(e))}),dn=(mr("neutral-fill-inverse-rest").withDefault((e=>hn.getValueFor(e).evaluate(e).rest)),mr("neutral-fill-inverse-hover").withDefault((e=>hn.getValueFor(e).evaluate(e).hover)),mr("neutral-fill-inverse-active").withDefault((e=>hn.getValueFor(e).evaluate(e).active)),mr("neutral-fill-inverse-focus").withDefault((e=>hn.getValueFor(e).evaluate(e).focus)),(function(e,...t){const{styles:o,behaviors:r}=po(e,t);return new vo(o,r)})`(${xr} + ${kr}) * ${Cr}`);class un{constructor(e,t,o){this.propertyName=e,this.value=t,this.styles=o}bind(e){F.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){F.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function fn(e,t){return new un("appearance",e,t)}const gn=":not([disabled])",pn="[disabled]";class bn extends ho{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}X([_],bn.prototype,"appearance",void 0);const vn=bn.compose({baseName:"button",baseClass:ho,template:(e,t)=>_t`
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
        ${Xt(0,t)}
        <span class="content" part="content">
            <slot ${go("defaultSlottedContent")}></slot>
        </span>
        ${Wt(0,t)}
    </button>
`,styles:(e,t)=>bo`
    :host([disabled]) {
      opacity: ${$r};
      cursor: ${mo};
    }

    ${((e,t,o="",r="")=>bo`
    ${ko("inline-flex")} :host {
      position: relative;
      box-sizing: border-box;
      font-family: ${Sr};
      outline: none;
      font-size: ${Or};
      line-height: ${Rr};
      height: calc(${dn} * 1px);
      min-width: calc(${dn} * 1px);
      color: ${Ns};
      border-radius: calc(${Fr} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    :host .control {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${zs};
      border: calc(${Dr} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Cr} * 2 * ${kr})) * 1px);
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

    :host .control${o}:hover {
      background: padding-box linear-gradient(${us}, ${us}),
        border-box ${js};
    }

    :host .control${o}:active {
      background: padding-box linear-gradient(${fs}, ${fs}),
        border-box ${_s};
    }

    :host .control:${Fo} {
      border-color: ${tn} !important;
      box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${tn} inset !important;
    }

    :host .control${r} {
      background: padding-box linear-gradient(${ds}, ${ds}), border-box ${Ps};
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
  `.withBehaviors(wo(bo`
        :host .control {
          background: ${$o.ButtonFace};
          border-color: ${$o.ButtonText};
          color: ${$o.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled])) .control:hover,
        :host .control${o}:hover,
        .control${o}:hover {
          forced-color-adjust: none;
          background: ${$o.Highlight};
          color: ${$o.HighlightText};
        }
        .control:${Fo},
        :host .control:${Fo},
        :host(:${Fo}) .control {
          forced-color-adjust: none;
          background: ${$o.ButtonFace};
          border-color: ${$o.Highlight} !important;
          box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${$o.Highlight} !important;
        }
        :host([href]) .control {
          background: ${$o.ButtonFace};
          border-color: ${$o.LinkText};
          color: ${$o.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover {
          background: ${$o.LinkText};
          border-color: ${$o.LinkText} !important;
          color: ${$o.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control:${Fo}{
          forced-color-adjust: none;
          border-color: ${$o.LinkText} !important;
          box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${$o.LinkText} !important;
        }
    `)))(0,0,gn,pn)}
  `.withBehaviors(wo(bo`
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .control {
          border-color: ${$o.GrayText};
          color: ${$o.GrayText};
          fill: currentcolor;
        }
      `),fn("accent",bo`
      ${((e,t,o="",r="")=>bo`
    :host .control {
      background: padding-box linear-gradient(${Xi}, ${Xi}),
        border-box ${as};
      color: ${Ji};
    }

    :host .control${o}:hover {
      background: padding-box linear-gradient(${Qi}, ${Qi}),
        border-box ${ls};
      color: ${es};
    }

    :host .control${o}:active {
      background: padding-box linear-gradient(${Ki}, ${Ki}),
        border-box ${cs};
      color: ${ts};
    }

    :host .control:${Fo} {
      box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${tn} inset,
        0 0 0 calc(((${Tr} + ${Dr}) - ${Dr}) * 1px) ${rn} inset !important;
    }

    :host .control${r} {
      background: ${Xi};
    }
  `.withBehaviors(wo(bo`
        :host .control {
          forced-color-adjust: none;
          background: ${$o.Highlight};
          color: ${$o.HighlightText};
        }
        :host .control${o}:hover,
        :host .control${o}:active {
          background: ${$o.HighlightText};
          border-color: ${$o.Highlight};
          color: ${$o.Highlight};
        }
        :host .control:${Fo} {
          background: ${$o.Highlight};
          box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${$o.Highlight} inset,
            0 0 0 calc(((${Tr} + ${Dr}) - ${Dr}) * 1px) ${$o.HighlightText} inset !important;
        }
        :host([href]) .control {
          background: ${$o.LinkText};
          color: ${$o.HighlightText};
        }
        :host([href]) .control:hover {
          background: ${$o.ButtonFace};
          border-color: ${$o.LinkText};
          box-shadow: none;
          color: ${$o.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:${Fo} {
          background: ${$o.LinkText};
          box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${$o.LinkText} inset,
            0 0 0 calc(((${Tr} + ${Dr}) - ${Dr}) * 1px) ${$o.HighlightText} inset !important;
          color: ${$o.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,gn,pn)},
      `.withBehaviors(wo(bo`
            :host([disabled]) .control {
              background: ${$o.ButtonFace};
            }
          `))),fn("lightweight",bo`
      ${((e,t,o="",r="")=>bo`
    :host {
      color: ${rs};
    }

    :host .control {
      background: ${Ss};
    }

    :host .control${o}:hover {
      background: ${Os};
      color: ${is};
    }

    :host .control${o}:active {
      background: ${Rs};
      color: ${ss};
    }

    :host .control${r} {
      background: ${Ss};
    }
  `.withBehaviors(wo(bo`
        :host .control {
          border-color: ${$o.ButtonFace};
          color: ${$o.ButtonText};
        }
        :host .control${o}:hover,
        :host .control${o}:active,
        :host .control:${Fo} {
          border-color: ${$o.Highlight};
          background: ${$o.Highlight};
          box-shadow: none;
          color: ${$o.HighlightText};
        }
        :host([href]) .control {
          border-color: ${$o.ButtonFace};
          color: ${$o.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Fo} {
          background: ${$o.ButtonFace};
          box-shadow: none;
          color: ${$o.LinkText};
        }
      `)))(0,0,gn,pn)},
      `.withBehaviors(wo(bo`
            :host([disabled]) .control {
              border-color: ${$o.ButtonFace};
            }
          `))),fn("outline",bo`
      ${((e,t,o="",r="")=>bo`
    :host .control {
      background: transparent !important;
      border-color: ${Ps};
    }

    :host .control${o}:hover {
      border-color: ${Is};
    }

    :host .control${o}:active {
      border-color: ${Ms};
    }

    :host .control${r} {
      background: transparent !important;
      border-color: ${Ps};
    }
  `.withBehaviors(wo(bo`
        :host .control${r} {
          border-color: ${$o.ButtonText};
        }
        :host .control${o}:hover {
          border-color: ${$o.Highlight};
          color: ${$o.ButtonText};
        }
        :host([href]) {
          border-color: ${$o.LinkText};
        }
        :host([href]) .control:hover {
          box-shadow: 0 0 0 calc((${Tr} - ${Dr}) * 1px) ${$o.LinkText};
          color: ${$o.LinkText};
        }
      `)))(0,0,gn,pn)}
      `.withBehaviors(wo(bo`
            :host([disabled]) .control {
              border-color: ${$o.GrayText};
            }
          `))),fn("stealth",bo`
      ${((e,t,o="",r="")=>bo`
    :host .control {
      background: ${Ss};
    }

    :host .control${o}:hover {
      background: ${Os};
    }

    :host .control${o}:active {
      background: ${Rs};
    }

    :host .control${r} {
      background: ${Ss};
    }
  `.withBehaviors(wo(bo`
        :host .control {
          background: ${$o.ButtonFace};
          border-color: ${$o.ButtonFace};
          color: ${$o.ButtonText};
          fill: currentcolor;
        }
        :host .control${o}:hover,
        :host .control${o}:active,
        :host .control:${Fo} {
          background: ${$o.Highlight};
          border-color: ${$o.Highlight};
          box-shadow: none !important;
          color: ${$o.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control {
          border-color: ${$o.ButtonFace};
          color: ${$o.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${Fo} {
          background: ${$o.LinkText};
          border-color: ${$o.LinkText};
          box-shadow: none !important;
          color: ${$o.HighlightText};
          fill: currentcolor;
        }
      `)))(0,0,gn,pn)}
      `.withBehaviors(wo(bo`
            :host([disabled]) .control {
              border-color: ${$o.ButtonFace};
            }
          `)))),shadowOptions:{delegatesFocus:!0}});class mn extends He{}const yn=at.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,o)=>{let r=.12,i=.14;return t>16&&(r=.2,i=.24),`0 0 2px rgba(0, 0, 0, ${r}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${i})`}}),wn=at.create("elevation-shadow-card-rest-size").withDefault(4),$n=at.create("elevation-shadow-card-hover-size").withDefault(8),xn=at.create("elevation-shadow-card-active-size").withDefault(0),kn=at.create("elevation-shadow-card-focus-size").withDefault(8),Cn=at.create("elevation-shadow-card-rest").withDefault((e=>yn.getValueFor(e).evaluate(e,wn.getValueFor(e)))),Fn=(at.create("elevation-shadow-card-hover").withDefault((e=>yn.getValueFor(e).evaluate(e,$n.getValueFor(e)))),at.create("elevation-shadow-card-active").withDefault((e=>yn.getValueFor(e).evaluate(e,xn.getValueFor(e)))),at.create("elevation-shadow-card-focus").withDefault((e=>yn.getValueFor(e).evaluate(e,kn.getValueFor(e)))),at.create("elevation-shadow-tooltip-size").withDefault(16)),Vn=(at.create("elevation-shadow-tooltip").withDefault((e=>yn.getValueFor(e).evaluate(e,Fn.getValueFor(e)))),at.create("elevation-shadow-flyout-size").withDefault(32)),Dn=(at.create("elevation-shadow-flyout").withDefault((e=>yn.getValueFor(e).evaluate(e,Vn.getValueFor(e)))),at.create("elevation-shadow-dialog-size").withDefault(128));at.create("elevation-shadow-dialog").withDefault((e=>yn.getValueFor(e).evaluate(e,Dn.getValueFor(e))));class Tn extends mn{cardFillColorChanged(e,t){if(t){const e=er(t);null!==e&&(this.neutralPaletteSource=t,Gi.setValueFor(this,qo.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=er(t),o=qo.create(e.r,e.g,e.b);Bi.setValueFor(this,Yo.create(o))}}handleChange(e,t){this.cardFillColor||Gi.setValueFor(this,(t=>ks.getValueFor(t).evaluate(t,Gi.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=qe(this);if(e){const t=F.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}X([_({attribute:"card-fill-color",mode:"fromView"})],Tn.prototype,"cardFillColor",void 0),X([_({attribute:"neutral-palette-source",mode:"fromView"})],Tn.prototype,"neutralPaletteSource",void 0);const Sn=Tn.compose({baseName:"card",baseClass:mn,template:(e,t)=>_t`
    <slot></slot>
`,styles:(e,t)=>bo`
    ${ko("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Gi};
      color: ${Ns};
      border: calc(${Dr} * 1px) solid ${Qs};
      border-radius: calc(${Vr} * 1px);
      box-shadow: ${Cn};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(wo(bo`
        :host {
          background: ${$o.Canvas};
          color: ${$o.CanvasText};
        }
      `))});class On extends He{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}X([_({attribute:"fill"})],On.prototype,"fill",void 0),X([_({attribute:"color"})],On.prototype,"color",void 0),X([_({mode:"boolean"})],On.prototype,"circular",void 0);class Rn extends On{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,t){e!==t&&u.queueUpdate((()=>{this.classList.add(t),this.classList.remove(e)}))}}X([_({mode:"fromView"})],Rn.prototype,"appearance",void 0);const Ln=Rn.compose({baseName:"badge",baseClass:On,template:(e,t)=>_t`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>bo`
    ${ko("inline-block")} :host {
      box-sizing: border-box;
      font-family: ${Sr};
      font-size: ${Lr};
      line-height: ${Br};
    }

    .control {
      border-radius: calc(${Fr} * 1px);
      padding: calc(((${Cr} * 0.5) - ${Dr}) * 1px) calc((${Cr} - ${Dr}) * 1px);
      border: calc(${Dr} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Ns};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Xi};
      color: ${Ji};
    }

    :host(.neutral) .control {
      background: ${Vs};
      color: ${Ns};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Br} - calc(${Cr} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});class Bn extends He{}class Nn extends(no(Bn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var An;!function(e){e.email="email",e.password="password",e.tel="tel",e.text="text",e.url="url"}(An||(An={}));class En extends Nn{constructor(){super(...arguments),this.type=An.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&u.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}X([_({attribute:"readonly",mode:"boolean"})],En.prototype,"readOnly",void 0),X([_({mode:"boolean"})],En.prototype,"autofocus",void 0),X([_],En.prototype,"placeholder",void 0),X([_],En.prototype,"type",void 0),X([_],En.prototype,"list",void 0),X([_({converter:z})],En.prototype,"maxlength",void 0),X([_({converter:z})],En.prototype,"minlength",void 0),X([_],En.prototype,"pattern",void 0),X([_({converter:z})],En.prototype,"size",void 0),X([_({mode:"boolean"})],En.prototype,"spellcheck",void 0),X([T],En.prototype,"defaultSlottedNodes",void 0);class Pn{}function In(e,t,o){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}Qt(Pn,bt),Qt(En,Ut,Pn);const Mn=at.create("input-placeholder-rest").withDefault((e=>{const t=gs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Hn=at.create("input-placeholder-hover").withDefault((e=>{const t=gs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),zn=at.create("input-filled-placeholder-rest").withDefault((e=>{const t=Fs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),jn=at.create("input-filled-placeholder-hover").withDefault((e=>{const t=Fs.getValueFor(e);return As.getValueFor(e).evaluate(e,t.evaluate(e).hover)}));class _n extends En{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([_],_n.prototype,"appearance",void 0);const qn=_n.compose({baseName:"text-field",baseClass:En,template:(e,t)=>_t`
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
                ${go({property:"defaultSlottedNodes",filter:In})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Xt(0,t)}
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
`,styles:(e,t)=>{return bo`
    ${ko("inline-block")}

    ${o=".root",bo`
  :host {
    font-family: ${Sr};
    font-size: ${Or};
    line-height: ${Rr};
    color: ${Ns};
    fill: currentcolor;
    outline: none;
    user-select: none;
    position: relative;
  }

  ${o} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    background: padding-box linear-gradient(${ps}, ${ps}),
      border-box ${Us};
    border: calc(${Dr} * 1px) solid transparent;
    border-radius: calc(${Fr} * 1px);
    height: calc(${dn} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
  }

  .control:hover,
  .control:${Fo},
  .control:disabled,
  .control:active {
    outline: none;
  }

  .label {
    display: block;
    color: ${Ns};
    cursor: pointer;
    font-size: ${Or};
    line-height: ${Rr};
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${o} {
    background: padding-box linear-gradient(${bs}, ${bs}),
      border-box ${Ws};
  }

  :host(:not([disabled]):focus-within) ${o} {
    background: padding-box linear-gradient(${vs}, ${vs}),
      border-box ${Us};
  }

  .control::placeholder {
    color: ${Mn};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${Hn};
  }

  :host([disabled]) ${o}, :host([readonly]) ${o}, :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${mo};
  }

  :host([disabled]) {
    opacity: ${$r};
  }

  :host([disabled]) ${o} {
    background: padding-box linear-gradient(${ps}, ${ps}),
      border-box ${Ps};
  }
`}

    ${bo`
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
    height: calc(${Tr} * 1px);
    bottom: 0;
    border-bottom: calc(${Tr} * 1px) solid ${Xi};
    border-bottom-left-radius: calc(${Fr} * 1px);
    border-bottom-right-radius: calc(${Fr} * 1px);
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
      padding: 0 calc(${Cr} * 2px + 1px);
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
  `.withBehaviors(fn("filled",((e,t)=>{return bo`
    ${o=".root",bo`
  :host ${o} {
    background: ${Vs};
    border-color: transparent;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${o} {
    background: ${Ds};
    border-color: transparent;
  }

  .control::placeholder {
    color: ${zn};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${jn};
  }

  :host(:focus-within:not([disabled])) ${o} {
    border-color: transparent;
    box-shadow: none;
  }
`}
  `.withBehaviors(wo(bo`
        ${((e,t,o)=>bo`
  :host ${o},
  :host(:hover:not([disabled])) ${o},
  :host(:active:not([disabled])) ${o},
  :host(:focus-within:not([disabled])) ${o} {
    background: ${$o.Field};
    border-color: ${$o.FieldText};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${$o.Highlight};
  }
  :host([disabled]) ${o} {
    border-color: ${$o.GrayText};
  }
`)(0,0,".root")}
      `));var o})()),wo(bo`
        ${((e,t,o)=>bo`
  :host ${o} {
    background: ${$o.Field};
    border-color: ${$o.FieldText};
  }
  :host(:hover:not([disabled]):not(:focus-within)) ${o} {
    border-color: ${$o.Highlight};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${$o.Highlight};
  }
  :host([disabled]) {
    opacity: 1;
  }
  :host([disabled]) ${o} {
    border-color: ${$o.GrayText};
  }
  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder,
  :host([disabled]) .label {
    color: ${$o.GrayText};
    fill: currentcolor;
  }
`)(0,0,".root")}
      `));var o},shadowOptions:{delegatesFocus:!0}});class Gn extends He{}class Un extends(ao(Gn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Wn extends Un{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(" "!==e.key)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}X([_({attribute:"readonly",mode:"boolean"})],Wn.prototype,"readOnly",void 0),X([T],Wn.prototype,"name",void 0),X([T],Wn.prototype,"defaultSlottedNodes",void 0);const Xn=Wn.compose({baseName:"radio",template:(e,t)=>_t`
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
            <slot ${go("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>bo`
    ${ko("inline-flex")} :host {
      --input-size: calc((${dn} / 2) + ${Cr});
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
      border: calc(${Dr} * 1px) solid ${Ys};
      background: ${ys};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Sr};
      color: ${Ns};
      ${""} padding-inline-start: calc(${Cr} * 2px + 2px);
      margin-inline-end: calc(${Cr} * 2px + 2px);
      cursor: pointer;
      font-size: ${Or};
      line-height: ${Rr};
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
      fill: ${Ji};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${ws};
      border-color: ${Zs};
    }

    :host(:not(.disabled):active) .control {
      background: ${$s};
      border-color: ${Js};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Fo}) .control {
      box-shadow: 0 0 0 1px ${Gi}, 0 0 0 3px ${tn};
      background: ${xs};
      border-color: ${tn};
    }

    :host(.checked) .control {
      background: ${Xi};
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
      cursor: ${mo};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$r};
    }
  `.withBehaviors(wo(bo`
        .control {
          background: ${$o.Field};
          border-color: ${$o.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${$o.Highlight};
        }
        :host(:${Fo}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${$o.Field}, 0 0 0 3px ${$o.FieldText};
          background: ${$o.Field};
          border-color: ${$o.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${$o.Highlight};
          background: ${$o.Highlight};
        }
        :host(.checked:${Fo}) .control {
          box-shadow: 0 0 0 1px ${$o.Field}, 0 0 0 3px ${$o.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${$o.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${$o.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${$o.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${$o.Field};
          border-color: ${$o.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${$o.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '});var Qn;!function(e){e.horizontal="horizontal",e.vertical="vertical"}(Qn||(Qn={}));class Kn extends He{constructor(){super(...arguments),this.orientation=Qn.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const o=e[t];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach((e=>{e!==o&&e.setAttribute("tabindex","-1")})):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,o=e.target,r=null!==o?t.indexOf(o):0,i=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===i&&r===i||i===t.length-1&&i===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,o)=>e===t.length&&this.isInsideToolbar&&o===Jt,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Zt,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,t,e.key))this.moveRightOffGroup();else for(o===t.length&&(o=0);o<t.length&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;if(o+1>=t.length){if(this.isInsideToolbar)break;o=0}else o+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,o=o<0?t.length-1:o,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;o>=0&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;o-1<0?o=t.length-1:o-=1}},this.keydownHandler=e=>{const t=e.key;if(t in oo&&this.isInsideFoundationToolbar)return!0;switch(t){case to:this.checkFocusedRadio();break;case Jt:case Yt:this.direction===Vo.ltr?this.moveRight(e):this.moveLeft(e);break;case Zt:case eo:this.direction===Vo.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.getAttribute("value")===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?Vo.rtl:Vo.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let o=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!o){const o=e[t-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}X([_({attribute:"readonly",mode:"boolean"})],Kn.prototype,"readOnly",void 0),X([_({attribute:"disabled",mode:"boolean"})],Kn.prototype,"disabled",void 0),X([_],Kn.prototype,"name",void 0),X([_],Kn.prototype,"value",void 0),X([_],Kn.prototype,"orientation",void 0),X([T],Kn.prototype,"childItems",void 0),X([T],Kn.prototype,"slottedRadioButtons",void 0);const Yn=Kn.compose({baseName:"radio-group",template:(e,t)=>{return _t`
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
                ${go({property:"slottedRadioButtons",filter:(o="[role=radio]",function(e,t,r){return 1===e.nodeType&&e.matches(o)})})}
            ></slot>
        </div>
    </template>
`;var o},styles:(e,t)=>bo`
  ${ko("flex")} :host {
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
`});class Zn extends He{}class Jn extends(ao(Zn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ea extends Jn{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{" "===e.key&&(this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}X([_({attribute:"readonly",mode:"boolean"})],ea.prototype,"readOnly",void 0),X([T],ea.prototype,"defaultSlottedNodes",void 0),X([T],ea.prototype,"indeterminate",void 0);const ta=ea.compose({baseName:"checkbox",template:(e,t)=>_t`
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
            <slot ${go("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>bo`
    ${ko("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${dn} / 2 + ${Cr}) * 1px);
      height: calc((${dn} / 2 + ${Cr}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Fr} * 1px);
      border: calc(${Dr} * 1px) solid ${Ys};
      background: ${ys};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Sr};
      color: ${Ns};
      ${""} padding-inline-start: calc(${Cr} * 2px + 2px);
      margin-inline-end: calc(${Cr} * 2px + 2px);
      cursor: pointer;
      font-size: ${Or};
      line-height: ${Rr};
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Ns};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Ji};
    }

    :host(:not(.disabled):hover) .control {
      background: ${ws};
      border-color: ${Zs};
    }

    :host(:not(.disabled):active) .control {
      background: ${$s};
      border-color: ${Js};
    }

    :host(:${Fo}) .control {
      box-shadow: 0 0 0 1px ${Gi}, 0 0 0 3px ${tn};
      background: ${xs};
      border-color: ${tn};
    }

    :host(.checked) .control {
      background: ${Xi};
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
      cursor: ${mo};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$r};
    }
  `.withBehaviors(wo(bo`
        .control {
          border-color: ${$o.FieldText};
          background: ${$o.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${$o.Highlight};
          background: ${$o.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${$o.FieldText};
        }
        :host(:${Fo}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${$o.Field}, 0 0 0 3px ${$o.FieldText};
          background: ${$o.Field};
          border-color: ${$o.Highlight};
        }
        :host(.checked) .control {
          background: ${$o.Highlight};
          border-color: ${$o.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${$o.HighlightText};
          border-color: ${$o.Highlight};
        }
        :host(.checked:${Fo}) .control {
          box-shadow: 0 0 0 1px ${$o.Field}, 0 0 0 3px ${$o.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${$o.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${$o.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${$o.GrayText};
          background: ${$o.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${$o.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});class oa extends He{}class ra extends(ao(oa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ia extends ra{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case to:case" ":this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}X([_({attribute:"readonly",mode:"boolean"})],ia.prototype,"readOnly",void 0),X([T],ia.prototype,"defaultSlottedNodes",void 0);class sa{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&wr.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new na(this.ltr,this.rtl,e),o=wr.getValueFor(e);wr.subscribe(t),t.attach(o),this.cache.set(e,t)}}class na{constructor(e,t,o){this.ltr=e,this.rtl=t,this.source=o,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const aa=ia.compose({baseName:"switch",template:(e,t)=>_t`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${go("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
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
`,styles:(e,t)=>bo`
    :host([hidden]) {
      display: none;
    }

    ${ko("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Sr};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${$r};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${mo};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${dn} / 2) + ${Cr}) * 2px);
      height: calc(((${dn} / 2) + ${Cr}) * 1px);
      background: ${ys};
      border-radius: calc(${dn} * 1px);
      border: calc(${Dr} * 1px) solid ${Ys};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${ws};
      border-color: ${Zs};
    }

    :host(:not(.disabled):active) .switch {
      background: ${$s};
      border-color: ${Js};
    }

    :host(:${Fo}) .switch {
      box-shadow: 0 0 0 1px ${Gi}, 0 0 0 3px ${tn};
      background: ${xs};
      border-color: ${tn};
    }

    :host(.checked) .switch {
      background: ${Xi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Qi};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ki};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Ns};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Ns};
      cursor: pointer;
      font-size: ${Or};
      line-height: ${Rr};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Ns};
      font-size: ${Or};
      line-height: ${Rr};
      margin-inline-end: calc(${Cr} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Cr} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Xi};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Ji};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Qi};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${es};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ki};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${ts};
    }

    :host(.checked:${Fo}:not(.disabled)) .switch {
      box-shadow: 0 0 0 1px ${Gi}, 0 0 0 3px ${tn};
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
  `.withBehaviors(new sa(bo`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,bo`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),wo(bo`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${$o.FieldText};
        }
        .switch {
          background: ${$o.Field};
          border-color: ${$o.FieldText};
        }
        :host(.checked) .switch {
          background: ${$o.Highlight};
          border-color: ${$o.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${$o.HighlightText};
          border-color: ${$o.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${$o.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${$o.Highlight};
        }
        :host(:${Fo}) .switch {
          forced-color-adjust: none;
          background: ${$o.Field};
          border-color: ${$o.Highlight};
          box-shadow: 0 0 0 1px ${$o.Highlight}, 0 0 0 3px ${$o.FieldText};
        }
        :host(.checked:${Fo}:not(.disabled)) .switch {
          forced-color-adjust: none;
          background: ${$o.Highlight};
          box-shadow: 0 0 0 1px ${$o.Field}, 0 0 0 3px ${$o.FieldText};
          border-color: ${$o.Field};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${$o.GrayText};
        }
        :host(.disabled) .switch {
          background: ${$o.Field};
          border-color: ${$o.GrayText};
        }
        .status-message,
        .label {
          color: ${$o.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});ft.getOrCreate(undefined).withPrefix("fluent").register(vn(),Sn(),Ln(),qn(),Xn(),Yn(),ta(),aa());const la=document.querySelector(".sidebar");la&&Gi.setValueFor(la,zi);const ca=document.querySelector("body");ca&&Gi.setValueFor(ca,_i);const ha=document.getElementById("update-style");null==ha||ha.addEventListener("click",(()=>{const e=document.getElementById("accent-color").value,t=document.getElementById("base-color").value;ca&&(Ni.setValueFor(ca,qo.from(er(e))),Li.setValueFor(ca,qo.from(er(t))))}));const da=document.querySelector("fluent-switch");da.addEventListener("click",(()=>{da.checked?ca&&Nr.setValueFor(ca,pr.DarkMode):ca&&Nr.setValueFor(ca,pr.LightMode)}))})();
//# sourceMappingURL=bundle.js.map