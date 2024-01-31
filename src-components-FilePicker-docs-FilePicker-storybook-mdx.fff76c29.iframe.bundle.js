"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[14988],{"./src/components/HelperText/HelperText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>HelperText});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/themeGet.ts"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx");const HelperText=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    display: block;
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__.U)("fontSizes.0")};
    text-align: left;
    ${props=>{return(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)((inverted=props.inverted,(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{info:{color:inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.w.AUTHENTIC_BLUE_350:_essentials__WEBPACK_IMPORTED_MODULE_1__.w.AUTHENTIC_BLUE_550},danger:{color:inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.w.NEGATIVE_ORANGE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.w.NEGATIVE_ORANGE_1000}}})),styled_system__WEBPACK_IMPORTED_MODULE_0__.e6);var inverted}};
`;HelperText.defaultProps={inverted:!1,variant:"info"};try{HelperText.displayName="HelperText",HelperText.__docgenInfo={description:"",displayName:"HelperText",props:{variant:{defaultValue:{value:"info"},description:"Set the appropriate colors for component with 'info' as default",name:"variant",required:!1,type:{name:'ResponsiveValue<"info" | "danger", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:{value:"false"},description:"Adjust component for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},weak:{defaultValue:null,description:"Adjust color to indicate secondary information\n@deprecated use `secondary` instead",name:"weak",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HelperText/HelperText.tsx#HelperText"]={docgenInfo:HelperText.__docgenInfo,name:"HelperText",path:"src/components/HelperText/HelperText.tsx#HelperText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FilePicker/docs/FilePicker.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>FilePicker_storybook});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Box=__webpack_require__("./src/components/Box/Box.tsx"),FilePicker=__webpack_require__("./src/components/FilePicker/FilePicker.tsx"),HelperText=__webpack_require__("./src/components/HelperText/HelperText.tsx");const ControlledErrorFilePicker=()=>{const[error,setError]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Box.x,{maxWidth:"100%",width:"30rem",children:[(0,jsx_runtime.jsx)(FilePicker.G,{buttonText:"Browse files",label:"A picture of you",name:"avatar",error,onFileChange:()=>{setError(!0)}}),error&&(0,jsx_runtime.jsx)(HelperText.p,{mt:1,variant:"danger",children:"I need a file with no size!"})]})};ControlledErrorFilePicker.displayName="ControlledErrorFilePicker";try{ControlledErrorFilePicker.displayName="ControlledErrorFilePicker",ControlledErrorFilePicker.__docgenInfo={description:"",displayName:"ControlledErrorFilePicker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilePicker/docs/ControlledErrorFilePicker.tsx#ControlledErrorFilePicker"]={docgenInfo:ControlledErrorFilePicker.__docgenInfo,name:"ControlledErrorFilePicker",path:"src/components/FilePicker/docs/ControlledErrorFilePicker.tsx#ControlledErrorFilePicker"})}catch(__react_docgen_typescript_loader_error){}var StyledSystemLinks=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),FilePicker_stories=__webpack_require__("./src/components/FilePicker/docs/FilePicker.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",em:"em",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:FilePicker_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"filepicker",children:"FilePicker"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This component delivers an optimal user experience by utilizing core web technologies. It uses the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file",target:"_blank",rel:"nofollow noopener noreferrer",children:"HTML filepicker"})," for a lightweight and efficient approach to file uploading."]}),"\n",(0,jsx_runtime.jsx)(dist.sq,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:FilePicker_stories}),"\n",(0,jsx_runtime.jsx)(StyledSystemLinks.h,{component:"FilePicker",supportedProps:["margin"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"File title"}),": This provides a clear description of what the user should upload. If long, takes as many lines as needed extending the height of the component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Button label"}),": Describes the main action, it works better when short"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"placement",children:"Placement"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["They are mainly used in forms but can also appear in other places as a standalone component. In either case, prefer to have them inside ",(0,jsx_runtime.jsx)(_components.code,{children:"<form>"})," tag for better user experience."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Place ",(0,jsx_runtime.jsx)(_components.code,{children:"Filepicker"})," with a minimum of 8px ",(0,jsx_runtime.jsx)(_components.em,{children:'("Spaces" value 1 for our default spaces values)'})," margin on each side."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"behaviour",children:"Behaviour"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"The user may only select 1 file at a time."}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["By default, any file format is accepted, but you can add ",(0,jsx_runtime.jsx)(_components.code,{children:"accept"})," property to validate a specific file format."]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:'Click on "Browse" button triggers a browser-specific upload window.'}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Once the user selects the file, the browser-specific select window closes and the files will appear below the File title label."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"showing-errors",children:"Showing errors"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Below you have an example of how you can show an error using the ",(0,jsx_runtime.jsxs)(_components.a,{href:"?path=/docs/components-helpertext--docs",children:[(0,jsx_runtime.jsx)(_components.code,{children:"HelperText"})," component"]}),".\nSubmit any file to trigger the error and clean the input by canceling the selection to remove the error state."]}),"\n",(0,jsx_runtime.jsx)(ControlledErrorFilePicker,{}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'const UploadAvatar = () => {\n    const [error, setError] = useState<string>();\n\n    return (\n        <Box>\n            <FilePicker\n                buttonText="Browse files"\n                label="A picture of you"\n                name="avatar"\n                error={error}\n                onFileChange={eventFile => {\n                    try {\n                        setError(undefined);\n                        // here we make something that can throw\n                    } catch (error) {\n                        setError(error.message);\n                    }\n                }}\n            />\n            {error && (\n                <HelperText mt={1} variant="danger">\n                    {error}\n                </HelperText>\n            )}\n        </Box>\n    );\n};\n'})}),"\n",(0,jsx_runtime.jsx)(dist.fQ,{includePrimary:!1})]})}const FilePicker_storybook=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
//# sourceMappingURL=src-components-FilePicker-docs-FilePicker-storybook-mdx.fff76c29.iframe.bundle.js.map