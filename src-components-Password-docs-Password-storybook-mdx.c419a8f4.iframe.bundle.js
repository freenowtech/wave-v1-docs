/*! For license information please see src-components-Password-docs-Password-storybook-mdx.c419a8f4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[91363],{"./src/components/Password/docs/Password.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomLined:()=>BottomLined,Default:()=>Default,Disabled:()=>Disabled,Inverted:()=>Inverted,Small:()=>Small,WithError:()=>WithError,WithLabel:()=>WithLabel,WithNewPasswordPurpose:()=>WithNewPasswordPurpose,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Password__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Password/Password.tsx"),_docs_parameters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/docs/parameters.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Form Elements/Password",component:_Password__WEBPACK_IMPORTED_MODULE_0__.r,argTypes:{variant:{options:["boxed","bottom-lined"],defaultValue:"boxed",control:"radio"},size:{options:["small","medium"],defaultValue:"medium",control:"radio"}},args:{label:"Password"}},Default={args:{label:void 0}},WithLabel={},WithPlaceholder={args:{placeholder:"hello!"}},BottomLined={args:{variant:"bottom-lined"}},Small={args:{size:"small"}},WithError={args:{error:!0}},Disabled={args:{disabled:!0}},Inverted={args:{inverted:!0},parameters:{..._docs_parameters__WEBPACK_IMPORTED_MODULE_1__.e}},WithNewPasswordPurpose={args:{purpose:"new-password"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'hello!'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},BottomLined.parameters={...BottomLined.parameters,docs:{...BottomLined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'bottom-lined'\n  }\n}",...BottomLined.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true\n  },\n  parameters: {\n    ...onDarkBackground\n  }\n}",...Inverted.parameters?.docs?.source}}},WithNewPasswordPurpose.parameters={...WithNewPasswordPurpose.parameters,docs:{...WithNewPasswordPurpose.parameters?.docs,source:{originalSource:"{\n  args: {\n    purpose: 'new-password'\n  }\n}",...WithNewPasswordPurpose.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","WithPlaceholder","BottomLined","Small","WithError","Disabled","Inverted","WithNewPasswordPurpose"]},"./src/docs/parameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>onDarkBackground});const onDarkBackground={backgrounds:{default:"dark"}}},"./src/components/Password/docs/Password.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_Password_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Password/docs/Password.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",pre:"pre",strong:"strong"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Password_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"password",children:"Password"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A form input component to ask for a password or set a password."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It has two modes a user can toggle between with a button:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hidden"})," — the password is hidden"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"shown"})," — the password is shown as plain text"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Password_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.h,{component:"Password",supportedProps:["margin","width"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"login",children:"Login"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Password />"})," has the settings to be used for login screen or any case when a user\nmust provide the existing password."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In that case the browser, or the password manager will recognise the password field and will offer autocomplete."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sign-up-or-reset-password",children:"Sign up or reset password"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you are in the situation when a user needs to create a new password, set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"purpose"})," prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"new-password"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Password purpose="new-password" label="New password" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This will allow password managers to generate a password for the user automatically."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The component is done with accessibility in mind and has built-in English aria labels for the button and the component state."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'When screen reader user clicks the toggle mode button, the screen reader announces the new state "Your password is hidden/shown":'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video",{src:"/password/a11y.mp4",controls:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"If you project supports multiple languages it is recommended to pass translated labels to the component:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<Password\n    label=\"Password\"\n    aria={{\n        showPasswordButton: 'Show password',\n        hidePasswordButton: 'Hide password',\n        messagePasswordIsHidden: 'Your password is hidden',\n        messagePasswordIsShown: 'Your password is shown'\n    }}\n/>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The keys to set are:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showPasswordButton"})," - the label of the button when the password is hidden"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hidePasswordButton"})," - the label of the button when the password is shown"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"messagePasswordIsHidden"})," - the message to announce the state of the component after the password value is hidden"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"messagePasswordIsShown"})," - the message to announce the state of the component after the password value is shown"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x0:()=>nanoid});let nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);