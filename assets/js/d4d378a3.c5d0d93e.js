(self.webpackChunksite=self.webpackChunksite||[]).push([[2579],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1072:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7294),i={container:"container_31k_",webpack:"webpack_1p3M",vite:"vite_KQcn"};var a=function(e){var n=e.list;return r.createElement("span",{className:i.container},["webpack","vite"].map((function(e){return r.createElement("img",{title:e,className:i[e],key:e,src:"/img/svg/"+(n.includes(e)?e:e+"-gray")+".svg"})})))}},6339:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),l=t(1072),o=["components"],p={title:"antd",order:3},u={unversionedId:"plugin/list/antd",id:"plugin/list/antd",isDocsHomePage:!1,title:"antd",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 icejs \u9879\u76ee\u4e2d\u5982\u4f55\u6b63\u786e\u7684\u5f15\u5165 antd \u7ec4\u4ef6\u3002",source:"@site/docs/plugin/list/antd.md",sourceDirName:"plugin/list",slug:"/plugin/list/antd",permalink:"/docs/plugin/list/antd",editUrl:"https://github.com/ice-lab/site/edit/master/docs/plugin/list/antd.md",version:"current",frontMatter:{title:"antd",order:3},sidebar:"plugin",previous:{title:"fusion",permalink:"/docs/plugin/list/fusion"},next:{title:"ignore-style",permalink:"/docs/plugin/list/ignore-style"}},s=[{value:"\u4f7f\u7528 antd \u7ec4\u4ef6",id:"\u4f7f\u7528-antd-\u7ec4\u4ef6",children:[{value:"\u4e0d\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898",id:"\u4e0d\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898",children:[]},{value:"\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898",id:"\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898",children:[]},{value:"\u6309\u9700\u5f15\u5165\u7ec4\u4ef6\u6837\u5f0f\uff08\u4e0d\u63a8\u8350\uff09",id:"\u6309\u9700\u5f15\u5165\u7ec4\u4ef6\u6837\u5f0f\uff08\u4e0d\u63a8\u8350\uff09",children:[]}]},{value:"\u63d2\u4ef6\u4ecb\u7ecd",id:"\u63d2\u4ef6\u4ecb\u7ecd",children:[{value:"Install",id:"install",children:[]},{value:"Options",id:"options",children:[]},{value:"Usage",id:"usage",children:[]}]}],c={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{list:["webpack","vite"],mdxType:"Support"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 icejs \u9879\u76ee\u4e2d\u5982\u4f55\u6b63\u786e\u7684\u5f15\u5165 antd \u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-antd-\u7ec4\u4ef6"},"\u4f7f\u7528 antd \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5173\u4e8e antd \u7ec4\u4ef6\u6309\u9700\u5f15\u5165\u7684\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u4ee3\u7801\u6309\u9700\u5f15\u5165\uff1a\u4e0d\u63a8\u8350\u4f7f\u7528 babel-plugin-import\uff0c\u793e\u533a\u4e3b\u6d41\u5de5\u5177 Webpack/Vite \u7b49\u90fd\u5df2\u652f\u6301 tree-shaking\uff0c\u6784\u5efa\u65f6\u9ed8\u8ba4\u90fd\u4f1a\u505a\u6309\u9700\u7684\u5f15\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\u4ee3\u7801\u6309\u9700\u5f15\u5165\uff1a\u7ed3\u5408\u793e\u533a\u8ba8\u8bba ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ant-design/ant-design/issues/16600#issuecomment-492572520"},"issue"),"\uff0c\u5927\u591a\u6570\u573a\u666f\u4e0b\u6837\u5f0f\u6309\u9700\u5f15\u5165\u5e76\u65e0\u592a\u5927\u610f\u4e49\uff0c\u53cd\u800c\u4f1a\u5f15\u5165\u5176\u4ed6\u5de5\u7a0b\u95ee\u9898\uff0c\u56e0\u6b64\u63a8\u8350\u7ec4\u4ef6\u6837\u5f0f\u5728\u9879\u76ee\u7ea7\u5168\u91cf\u5f15\u5165\u3002")),(0,a.kt)("p",null,"\u7efc\u5408\u4e0a\u8ff0\u89c2\u70b9\uff0c\u6211\u4eec\u4e0d\u518d\u63a8\u8350\u9879\u76ee\u4e2d\u4f7f\u7528 babel-plugin-import \u505a\u811a\u672c\u6309\u9700\u5f15\u5165\u4ee5\u53ca\u6837\u5f0f\u81ea\u52a8&\u6309\u9700\u5f15\u5165\uff0c\u800c\u63a8\u8350\u5168\u91cf\u5f15\u5165\u7ec4\u4ef6\u6837\u5f0f + \u901a\u8fc7\u5185\u7f6e\u7684 tree-shaking \u8fdb\u884c\u811a\u672c\u6309\u9700\u6253\u5305\u3002"),(0,a.kt)("h3",{id:"\u4e0d\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898"},"\u4e0d\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/global.css")," \u4e2d\u5f15\u5165 antd \u7684\u5168\u91cf CSS \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+ @import 'antd/dist/antd.css';\n\nbody {}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6709\u7528\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ant-design/pro-layout")," \u4e4b\u7c7b\u7684 NPM \u5305\uff0c\u5185\u90e8\u53ef\u80fd\u6709\u4e00\u4e9b\u4e0d\u5408\u7406\u7684\u8bed\u6cd5\u5bfc\u81f4\u6837\u5f0f\u91cd\u590d\u5f15\u5165\u5f71\u54cd\u6784\u5efa\u901f\u5ea6\uff0c\u8bf7\u7ed3\u5408 ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugin/list/ignore-style"},"build-plugin-ignore-style")," \u89e3\u51b3\u8be5\u95ee\u9898")),(0,a.kt)("h3",{id:"\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898"},"\u9700\u8981\u5b9a\u5236\u7ec4\u4ef6\u4e3b\u9898"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," \u914d\u7f6e\u4e3b\u9898\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    ["build-plugin-antd", {\n      "disableModularImport": true,\n      "themeConfig": {\n        "primary-color": "#f40"\n      }\n    }]\n  ]\n}\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/global.less")," \u4e2d\u5168\u91cf\u5f15\u5165 antd Less \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+ @import 'antd/dist/antd.less';\n\nbody {}\n")),(0,a.kt)("h3",{id:"\u6309\u9700\u5f15\u5165\u7ec4\u4ef6\u6837\u5f0f\uff08\u4e0d\u63a8\u8350\uff09"},"\u6309\u9700\u5f15\u5165\u7ec4\u4ef6\u6837\u5f0f\uff08\u4e0d\u63a8\u8350\uff09"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," \u914d\u7f6e\u4e3b\u9898\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    ["build-plugin-antd", {\n      "themeConfig": {\n        "primary-color": "#f40"\n      }\n    }]\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u4ecb\u7ecd"},"\u63d2\u4ef6\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install build-plugin-antd --save-dev\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"themeConfig: \u8bbe\u7f6e Less \u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"disableModularImport: \u7981\u7528 antd \u9ed8\u8ba4\u7684 babel-plugin-import \u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"importOptions: \u540c ",(0,a.kt)("inlineCode",{parentName:"li"},"babel-plugin-import")," \u6309\u9700\u52a0\u8f7d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"{  'libraryName': 'antd',libraryDirectory: 'es', style: true}"),"\uff0c\u6839\u636e\u7528\u6237\u8bbe\u7f6e\u8fdb\u884c\u5408\u5e76")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    [\n      "build-plugin-antd",\n      {\n        "disableModularImport": true,\n        "themeConfig": {\n          "primary-color": "#1DA57A"\n        }\n      }\n    ]\n  ]\n}\n')))}d.isMDXComponent=!0}}]);