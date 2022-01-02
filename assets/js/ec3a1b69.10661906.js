"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[9387],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return f}});var t=n(7294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=t.createContext({}),a=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=a(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=a(n),f=c,_=p["".concat(o,".").concat(f)]||p[f]||u[f]||s;return n?t.createElement(_,l(l({ref:r},d),{},{components:n})):t.createElement(_,l({ref:r},d))}));function f(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var s=n.length,l=new Array(s);l[0]=p;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,l[1]=i;for(var a=2;a<s;a++)l[a]=n[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7723:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return a},toc:function(){return d},default:function(){return p}});var t=n(3117),c=n(102),s=(n(7294),n(3905)),l=["components"],i={title:"SleepyDiscord::GenericScheduleHandler"},o=void 0,a={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",id:"reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",title:"SleepyDiscord::GenericScheduleHandler",description:"Inherited by SleepyDiscord::ASIOBasedScheduleHandler",source:"@site/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::GenericScheduleHandler"},sidebar:"Reference",previous:{title:"SleepyDiscord::GenericMessageReceiver",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver"},next:{title:"SleepyDiscord::GenericSession",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_session"}},d=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ~GenericScheduleHandler",id:"function-genericschedulehandler",children:[],level:3},{value:"function schedule",id:"function-schedule",children:[],level:3}],level:2}],u={toc:d};function p(e){var r=e.components,n=(0,c.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Inherited by ",(0,s.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_based_schedule_handler"},"SleepyDiscord::ASIOBasedScheduleHandler")),(0,s.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,s.kt)("h3",{id:"function-genericschedulehandler"},"function ~GenericScheduleHandler"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual ~GenericScheduleHandler() =default\n")),(0,s.kt)("h3",{id:"function-schedule"},"function schedule"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual Timer schedule(\n    TimedTask code,\n    const time_t milliseconds\n) =0\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,s.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_websocketpp_schedule_handler#function-schedule"},"SleepyDiscord::WebsocketppScheduleHandler::schedule"),", ",(0,s.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_schedule_handler#function-schedule"},"SleepyDiscord::ASIOScheduleHandler::schedule")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Updated on  2 January 2022 at 01:46:00 UTC"))}p.isMDXComponent=!0}}]);