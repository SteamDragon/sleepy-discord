"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[6207],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],l={title:"SleepyDiscord::BaseWebHookParams"},i=void 0,c={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_base_web_hook_params",id:"reference/Classes/struct_sleepy_discord_1_1_base_web_hook_params",title:"SleepyDiscord::BaseWebHookParams",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_base_web_hook_params.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_base_web_hook_params",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_base_web_hook_params",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::BaseWebHookParams"},sidebar:"Reference",previous:{title:"SleepyDiscord::BaseEditWebhookParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_base_edit_webhook_params"},next:{title:"SleepyDiscord::BasicAudioSourceForContainers",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_basic_audio_source_for_containers"}},p=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable tts",id:"variable-tts",children:[],level:3},{value:"variable content",id:"variable-content",children:[],level:3},{value:"variable embeds",id:"variable-embeds",children:[],level:3},{value:"variable allowedMentions",id:"variable-allowedmentions",children:[],level:3},{value:"variable components",id:"variable-components",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,o.kt)("p",null,"Inherits from ",(0,o.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),(0,o.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Type >\nstruct SleepyDiscord::BaseWebHookParams;\n")),(0,o.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,o.kt)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),(0,o.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,o.kt)("h3",{id:"variable-tts"},"variable tts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"bool tts = false;\n")),(0,o.kt)("h3",{id:"variable-content"},"variable content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string content;\n")),(0,o.kt)("h3",{id:"variable-embeds"},"variable embeds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Embed > embeds;\n")),(0,o.kt)("h3",{id:"variable-allowedmentions"},"variable allowedMentions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"AllowedMentions allowedMentions;\n")),(0,o.kt)("h3",{id:"variable-components"},"variable components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector< std::shared_ptr< BaseComponent > > components;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 19 January 2022 at 21:37:12 UTC"))}u.isMDXComponent=!0}}]);