/*! For license information please see 426.722d81d4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkapp=self.webpackChunkapp||[]).push([[426],{"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return exports},module.exports.__esModule=!0,module.exports.default=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(obj){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(obj)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Text});var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=(0,chunk_QEVFQ4EU.G)((function Text2(props,ref){const styles=(0,chunk_T2VHL7RE.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,dist.Lr)(props),aliasedProps=function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.p,{ref,className:(0,shared_utils_dist.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var scale={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},dist=__webpack_require__("./node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),react_use_disclosure_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs"),chunk_7PJKT2BG=__webpack_require__("./node_modules/@chakra-ui/popper/dist/chunk-7PJKT2BG.mjs"),chunk_WRZEGNKC=__webpack_require__("./node_modules/@chakra-ui/popper/dist/chunk-WRZEGNKC.mjs"),react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),getDoc=ref=>{var _a;return(null==(_a=ref.current)?void 0:_a.ownerDocument)||document},getWin=ref=>{var _a,_b;return(null==(_b=null==(_a=ref.current)?void 0:_a.ownerDocument)?void 0:_b.defaultView)||window};function useTooltip(props={}){const{openDelay=0,closeDelay=0,closeOnClick=!0,closeOnMouseDown,closeOnScroll,closeOnPointerDown=closeOnMouseDown,closeOnEsc=!0,onOpen:onOpenProp,onClose:onCloseProp,placement,id,isOpen:isOpenProp,defaultIsOpen,arrowSize=10,arrowShadowColor,arrowPadding,modifiers,isDisabled,gutter,offset,direction,...htmlProps}=props,{isOpen,onOpen,onClose}=(0,react_use_disclosure_dist.q)({isOpen:isOpenProp,defaultIsOpen,onOpen:onOpenProp,onClose:onCloseProp}),{referenceRef,getPopperProps,getArrowInnerProps,getArrowProps}=(0,chunk_7PJKT2BG.D)({enabled:isOpen,placement,arrowPadding,modifiers,gutter,offset,direction}),uuid=(0,react.useId)(),tooltipId=`tooltip-${null!=id?id:uuid}`,ref=(0,react.useRef)(null),enterTimeout=(0,react.useRef)(),clearEnterTimeout=(0,react.useCallback)((()=>{enterTimeout.current&&(clearTimeout(enterTimeout.current),enterTimeout.current=void 0)}),[]),exitTimeout=(0,react.useRef)(),clearExitTimeout=(0,react.useCallback)((()=>{exitTimeout.current&&(clearTimeout(exitTimeout.current),exitTimeout.current=void 0)}),[]),closeNow=(0,react.useCallback)((()=>{clearExitTimeout(),onClose()}),[onClose,clearExitTimeout]),dispatchCloseEvent=function useCloseEvent(ref,close){return(0,react.useEffect)((()=>{const doc=getDoc(ref);return doc.addEventListener(closeEventName,close),()=>doc.removeEventListener(closeEventName,close)}),[close,ref]),()=>{const doc=getDoc(ref),win=getWin(ref);doc.dispatchEvent(new win.CustomEvent(closeEventName))}}(ref,closeNow),openWithDelay=(0,react.useCallback)((()=>{if(!isDisabled&&!enterTimeout.current){dispatchCloseEvent();const win=getWin(ref);enterTimeout.current=win.setTimeout(onOpen,openDelay)}}),[dispatchCloseEvent,isDisabled,onOpen,openDelay]),closeWithDelay=(0,react.useCallback)((()=>{clearEnterTimeout();const win=getWin(ref);exitTimeout.current=win.setTimeout(closeNow,closeDelay)}),[closeDelay,closeNow,clearEnterTimeout]),onClick=(0,react.useCallback)((()=>{isOpen&&closeOnClick&&closeWithDelay()}),[closeOnClick,closeWithDelay,isOpen]),onPointerDown=(0,react.useCallback)((()=>{isOpen&&closeOnPointerDown&&closeWithDelay()}),[closeOnPointerDown,closeWithDelay,isOpen]),onKeyDown=(0,react.useCallback)((event=>{isOpen&&"Escape"===event.key&&closeWithDelay()}),[isOpen,closeWithDelay]);(0,dist.O)((()=>getDoc(ref)),"keydown",closeOnEsc?onKeyDown:void 0),(0,dist.O)((()=>getDoc(ref)),"scroll",(()=>{isOpen&&closeOnScroll&&closeNow()})),(0,react.useEffect)((()=>{isDisabled&&(clearEnterTimeout(),isOpen&&onClose())}),[isDisabled,isOpen,onClose,clearEnterTimeout]),(0,react.useEffect)((()=>()=>{clearEnterTimeout(),clearExitTimeout()}),[clearEnterTimeout,clearExitTimeout]),(0,dist.O)((()=>ref.current),"pointerleave",closeWithDelay);const getTriggerProps=(0,react.useCallback)(((props2={},_ref=null)=>({...props2,ref:(0,react_use_merge_refs_dist.lq)(ref,_ref,referenceRef),onPointerEnter:(0,shared_utils_dist.v0)(props2.onPointerEnter,(e=>{"touch"!==e.pointerType&&openWithDelay()})),onClick:(0,shared_utils_dist.v0)(props2.onClick,onClick),onPointerDown:(0,shared_utils_dist.v0)(props2.onPointerDown,onPointerDown),onFocus:(0,shared_utils_dist.v0)(props2.onFocus,openWithDelay),onBlur:(0,shared_utils_dist.v0)(props2.onBlur,closeWithDelay),"aria-describedby":isOpen?tooltipId:void 0})),[openWithDelay,closeWithDelay,onPointerDown,isOpen,tooltipId,onClick,referenceRef]),getTooltipPositionerProps=(0,react.useCallback)(((props2={},forwardedRef=null)=>getPopperProps({...props2,style:{...props2.style,[chunk_WRZEGNKC.Dq.arrowSize.var]:arrowSize?`${arrowSize}px`:void 0,[chunk_WRZEGNKC.Dq.arrowShadowColor.var]:arrowShadowColor}},forwardedRef)),[getPopperProps,arrowSize,arrowShadowColor]),getTooltipProps=(0,react.useCallback)(((props2={},ref2=null)=>{const styles={...props2.style,position:"relative",transformOrigin:chunk_WRZEGNKC.Dq.transformOrigin.varRef};return{ref:ref2,...htmlProps,...props2,id:tooltipId,role:"tooltip",style:styles}}),[htmlProps,tooltipId]);return{isOpen,show:openWithDelay,hide:closeWithDelay,getTriggerProps,getTooltipProps,getTooltipPositionerProps,getArrowProps,getArrowInnerProps}}var closeEventName="chakra-ui:close-tooltip";var chunk_YLCZP3C4=__webpack_require__("./node_modules/@chakra-ui/portal/dist/chunk-YLCZP3C4.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_NLMMK76H=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-NLMMK76H.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var MotionDiv=(0,chunk_3LE6AY5Q.m)(motion.E.div),Tooltip=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{var _a,_b;const styles=(0,chunk_T2VHL7RE.mq)("Tooltip",props),ownProps=(0,styled_system_dist.Lr)(props),theme=(0,chunk_NLMMK76H.F)(),{children,label,shouldWrapChildren,"aria-label":ariaLabel,hasArrow,bg,portalProps,background,backgroundColor,bgColor,motionProps,...rest}=ownProps,userDefinedBg=null!=(_b=null!=(_a=null!=background?background:backgroundColor)?_a:bg)?_b:bgColor;if(userDefinedBg){styles.bg=userDefinedBg;const bgVar=(0,styled_system_dist.K1)(theme,"colors",userDefinedBg);styles[chunk_WRZEGNKC.Dq.arrowBg.var]=bgVar}const tooltip=useTooltip({...rest,direction:theme.direction});let trigger;if("string"==typeof children||shouldWrapChildren)trigger=(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{display:"inline-block",tabIndex:0,...tooltip.getTriggerProps(),children});else{const child=react.Children.only(children);trigger=(0,react.cloneElement)(child,tooltip.getTriggerProps(child.props,child.ref))}const hasAriaLabel=!!ariaLabel,_tooltipProps=tooltip.getTooltipProps({},ref),tooltipProps=hasAriaLabel?function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}(_tooltipProps,["role","id"]):_tooltipProps,srOnlyProps=function pick(object,keysToPick){const result={};for(const key of keysToPick)key in object&&(result[key]=object[key]);return result}(_tooltipProps,["role","id"]);return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[trigger,(0,jsx_runtime.jsx)(AnimatePresence.M,{children:tooltip.isOpen&&(0,jsx_runtime.jsx)(chunk_YLCZP3C4.h,{...portalProps,children:(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{...tooltip.getTooltipPositionerProps(),__css:{zIndex:styles.zIndex,pointerEvents:"none"},children:(0,jsx_runtime.jsxs)(MotionDiv,{variants:scale,initial:"exit",animate:"enter",exit:"exit",...motionProps,...tooltipProps,__css:styles,children:[label,hasAriaLabel&&(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{srOnly:!0,...srOnlyProps,children:ariaLabel}),hasArrow&&(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:styles.bg}})})]})})})})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})}));Tooltip.displayName="Tooltip"}}]);