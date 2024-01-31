/*! For license information please see src-components-Tag-docs-Tag-storybook-mdx.c3328631.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[22496],{"./src/components/Tag/docs/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NotDismissible:()=>NotDismissible,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),theme=__webpack_require__("./src/essentials/theme.ts"),CloseIcon=__webpack_require__("./src/icons/actions/CloseIcon.tsx"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TagText=(0,styled_components_browser_esm.ZP)(Text.x).attrs({theme:theme.r})`
    margin-left: 0.75rem;
    margin-right: ${props=>props.dismissible?"0.25rem":"0.75rem"};
    font-size: ${(0,themeGet.U)("fontSizes.1")};
    font-weight: ${(0,themeGet.U)("fontWeights.semibold")};
    cursor: default;
    transition: color 125ms ease;
`,DismissIcon=(0,styled_components_browser_esm.ZP)(CloseIcon.Z).attrs({size:18})`
    margin-right: 0.5rem;
    transition: color 125ms ease;

    &:hover {
        cursor: pointer;
    }
`,tagVariant=(0,index_esm.bU)({variants:{default:{backgroundColor:(0,themeGet.U)("semanticColors.background.info"),borderColor:(0,themeGet.U)("semanticColors.border.infoEmphasized"),[`> ${TagText}`]:{color:(0,themeGet.U)("semanticColors.text.link")},[`> ${DismissIcon}`]:{color:(0,themeGet.U)("semanticColors.icon.action")},"&:hover":{backgroundColor:(0,themeGet.U)("semanticColors.background.infoEmphasized"),borderColor:(0,themeGet.U)("semanticColors.border.infoEmphasized"),[`> ${TagText}`]:{color:(0,themeGet.U)("semanticColors.text.primaryInverted")},[`> ${DismissIcon}`]:{color:(0,themeGet.U)("semanticColors.icon.primaryInverted")}}},disabled:{borderColor:(0,themeGet.U)("semanticColors.border.primary"),[`> ${TagText}`]:{color:(0,themeGet.U)("semanticColors.text.disabled")},[`> ${DismissIcon}`]:{color:(0,themeGet.U)("semanticColors.icon.disabled")}},error:{backgroundColor:(0,themeGet.U)("semanticColors.background.danger"),borderColor:(0,themeGet.U)("semanticColors.border.dangerEmphasized"),[`> ${TagText}`]:{color:(0,themeGet.U)("semanticColors.text.dangerInverted")},[`> ${DismissIcon}`]:{color:(0,themeGet.U)("semanticColors.icon.danger")},"&:hover":{backgroundColor:(0,themeGet.U)("semanticColors.background.dangerEmphasized"),borderColor:(0,themeGet.U)("semanticColors.border.dangerEmphasized"),[`> ${TagText}`]:{color:(0,themeGet.U)("semanticColors.text.primaryInverted")},[`> ${DismissIcon}`]:{color:(0,themeGet.U)("semanticColors.icon.primaryInverted")}}}}}),TagWrapper=styled_components_browser_esm.ZP.div.attrs({theme:theme.r})`
    box-sizing: border-box;
    border: solid 0.0625rem;
    display: inline-flex;
    align-items: center;
    border-radius: 2rem;
    height: 2rem;
    margin-right: 0.25rem;
    margin-bottom: 0.375rem;
    padding: 0.375rem 0;
    transition: background-color 125ms ease;

    ${index_esm.e6}
    ${tagVariant}
`,Tag=({children,onDismiss,dismissible=!0,variant:variantValue="default",...rest})=>(0,jsx_runtime.jsxs)(TagWrapper,{variant:variantValue,...rest,children:[(0,jsx_runtime.jsx)(TagText,{dismissible,children}),dismissible&&(0,jsx_runtime.jsx)(DismissIcon,{"data-testid":"dismiss-icon",color:Colors.w.ACTION_BLUE_900,onClick:onDismiss})]});Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{onDismiss:{defaultValue:null,description:"The function to handle when the dismiss icon is clicked",name:"onDismiss",required:!1,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},dismissible:{defaultValue:{value:"true"},description:"The prop to determine whether the dismiss functionality is enabled",name:"dismissible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"Set the appropriate semantic tag color.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"disabled"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}const Tag_stories={title:"Components/Tag",component:Tag,argTypes:{children:{description:"Content of the tag"}},args:{children:"Taxi"}},Default={},NotDismissible={args:{dismissible:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},NotDismissible.parameters={...NotDismissible.parameters,docs:{...NotDismissible.parameters?.docs,source:{originalSource:"{\n  args: {\n    dismissible: false\n  }\n}",...NotDismissible.parameters?.docs?.source}}};const __namedExportsOrder=["Default","NotDismissible"]},"./src/icons/actions/CloseIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor",fillRule:"nonzero"})})};CloseIcon.displayName="CloseIcon",CloseIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=CloseIcon;try{CloseIcon.displayName="CloseIcon",CloseIcon.__docgenInfo={description:"",displayName:"CloseIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/CloseIcon.tsx#CloseIcon"]={docgenInfo:CloseIcon.__docgenInfo,name:"CloseIcon",path:"src/icons/actions/CloseIcon.tsx#CloseIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tag/docs/Tag.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_Tag_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tag/docs/Tag.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Tag_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tag",children:"Tag"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Tag component is used to categorize items. The text inside the Tag should be kept as short as possible. Multi-labels\nshould be avoided as well."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Tag_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.h,{component:"Tag",supportedProps:["margin"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);
//# sourceMappingURL=src-components-Tag-docs-Tag-storybook-mdx.c3328631.iframe.bundle.js.map