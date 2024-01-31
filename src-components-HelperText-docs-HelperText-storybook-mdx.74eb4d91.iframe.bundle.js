/*! For license information please see src-components-HelperText-docs-HelperText-storybook-mdx.74eb4d91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[625,17694,4464],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/HelperText/docs/HelperText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Inverted:()=>Inverted,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _HelperText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/HelperText/HelperText.tsx"),_docs_parameters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/docs/parameters.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/HelperText",component:_HelperText__WEBPACK_IMPORTED_MODULE_0__.p,args:{children:"This field is required"},argTypes:{variant:{control:"radio",options:["info","danger"]}}},Default={},Danger={args:{variant:"danger"}},Inverted={args:{inverted:!0},parameters:{..._docs_parameters__WEBPACK_IMPORTED_MODULE_1__.e}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true\n  },\n  parameters: {\n    ...onDarkBackground\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Danger","Inverted"]},"./src/components/HelperText/HelperText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>HelperText});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/themeGet.ts"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx");const HelperText=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    display: block;
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__.U)("fontSizes.0")};
    text-align: left;
    ${props=>{return(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)((inverted=props.inverted,(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{info:{color:inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.w.AUTHENTIC_BLUE_350:_essentials__WEBPACK_IMPORTED_MODULE_1__.w.AUTHENTIC_BLUE_550},danger:{color:inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.w.NEGATIVE_ORANGE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.w.NEGATIVE_ORANGE_1000}}})),styled_system__WEBPACK_IMPORTED_MODULE_0__.e6);var inverted}};
`;HelperText.defaultProps={inverted:!1,variant:"info"};try{HelperText.displayName="HelperText",HelperText.__docgenInfo={description:"",displayName:"HelperText",props:{variant:{defaultValue:{value:"info"},description:"Set the appropriate colors for component with 'info' as default",name:"variant",required:!1,type:{name:'ResponsiveValue<"info" | "danger", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:{value:"false"},description:"Adjust component for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},weak:{defaultValue:null,description:"Adjust color to indicate secondary information\n@deprecated use `secondary` instead",name:"weak",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HelperText/HelperText.tsx#HelperText"]={docgenInfo:HelperText.__docgenInfo,name:"HelperText",path:"src/components/HelperText/HelperText.tsx#HelperText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/InnerInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Password_Password__WEBPACK_IMPORTED_MODULE_2__.r,{...props,ref}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InnerInput__WEBPACK_IMPORTED_MODULE_3__._,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/deprecatedProperty.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    color: ${function determineTextColor(props){const{weak,secondary,inverted,disabled}=props;return void 0!==weak&&(0,_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_1__.M)("Text",weak,"weak","secondary","Rename `weak` to `secondary` to remove the warning."),disabled?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.disabledInverted":"semanticColors.text.disabled")(props):secondary||weak?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.secondaryInverted":"semanticColors.text.secondary")(props):inverted?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primaryInverted")(props):(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primary")(props)}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Adjust color for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},weak:{defaultValue:null,description:"Adjust color to indicate secondary information\n@deprecated use `secondary` instead",name:"weak",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/parameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>onDarkBackground});const onDarkBackground={backgrounds:{default:"dark"}}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Colors/Colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SemanticColors,w:()=>Colors});let Colors=function(Colors){return Colors.WHITE="#FFFFFF",Colors.BLACK="#000000",Colors.AUTHENTIC_BLUE_1100="#000F1F",Colors.AUTHENTIC_BLUE_900="#001E3E",Colors.AUTHENTIC_BLUE_550="#637689",Colors.AUTHENTIC_BLUE_350="#9CA7B4",Colors.AUTHENTIC_BLUE_200="#C6CDD4",Colors.AUTHENTIC_BLUE_50="#F1F2F4",Colors.FREEDOM_RED_1000="#BF0820",Colors.FREEDOM_RED_900="#FF0A2B",Colors.ACTION_BLUE_1000="#0750A4",Colors.ACTION_BLUE_900="#096BDB",Colors.ACTION_BLUE_350="#9FC5F1",Colors.ACTION_BLUE_150="#D6E6F9",Colors.ACTION_BLUE_100="#E4EFFB",Colors.ACTION_BLUE_50="#F1F7FD",Colors.BUMPY_MAGENTA_1000="#BF00B9",Colors.BUMPY_MAGENTA_900="#FF00F7",Colors.BUMPY_MAGENTA_350="#FF9CFC",Colors.BUMPY_MAGENTA_50="#FFF1FF",Colors.POSITIVE_GREEN_1000="#05763B",Colors.POSITIVE_GREEN_900="#069D4F",Colors.POSITIVE_GREEN_350="#9ED9BB",Colors.POSITIVE_GREEN_50="#F1FAF5",Colors.ATTENTION_YELLOW_900="#FFCC00",Colors.ATTENTION_YELLOW_350="#FFEB9C",Colors.ATTENTION_YELLOW_50="#FFFCF1",Colors.NEGATIVE_ORANGE_1000="#BF4704",Colors.NEGATIVE_ORANGE_900="#FF5E05",Colors.NEGATIVE_ORANGE_350="#FFC09E",Colors.NEGATIVE_ORANGE_50="#FFF6F1",Colors}({});const SemanticColors={text:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,link:Colors.ACTION_BLUE_900,linkInverted:Colors.WHITE,linkHover:Colors.ACTION_BLUE_1000,linkHoverInverted:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_1000,dangerInverted:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},background:{primary:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_50,success:Colors.POSITIVE_GREEN_50,warning:Colors.ATTENTION_YELLOW_50,primaryEmphasized:Colors.AUTHENTIC_BLUE_900,secondaryEmphasized:Colors.AUTHENTIC_BLUE_550,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},icon:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,action:Colors.ACTION_BLUE_900,danger:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},border:{primary:Colors.AUTHENTIC_BLUE_200,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_350,danger:Colors.NEGATIVE_ORANGE_350,success:Colors.POSITIVE_GREEN_350,warning:Colors.ATTENTION_YELLOW_350,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},button:{primary:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.AUTHENTIC_BLUE_900,border:Colors.AUTHENTIC_BLUE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_1100,borderHover:Colors.AUTHENTIC_BLUE_1100,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.ACTION_BLUE_900,iconInverted:Colors.ACTION_BLUE_900,backgroundInverted:Colors.WHITE,borderInverted:Colors.WHITE,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.ACTION_BLUE_900,borderHoverInverted:Colors.ACTION_BLUE_900,textDisabledInverted:Colors.AUTHENTIC_BLUE_350,iconDisabledInverted:Colors.AUTHENTIC_BLUE_350,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_550,borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},secondary:{text:Colors.AUTHENTIC_BLUE_900,icon:Colors.AUTHENTIC_BLUE_900,background:Colors.WHITE,border:Colors.AUTHENTIC_BLUE_200,textHover:Colors.AUTHENTIC_BLUE_900,iconHover:Colors.AUTHENTIC_BLUE_900,backgroundHover:Colors.AUTHENTIC_BLUE_50,borderHover:Colors.AUTHENTIC_BLUE_200,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,backgroundDisabled:Colors.WHITE,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:"transparent",borderInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_900,iconHoverInverted:Colors.AUTHENTIC_BLUE_900,backgroundHoverInverted:Colors.WHITE,borderHoverInverted:Colors.WHITE,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550,backgroundDisabledInverted:"transparent",borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.NEGATIVE_ORANGE_900,border:Colors.NEGATIVE_ORANGE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.NEGATIVE_ORANGE_1000,borderHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:Colors.NEGATIVE_ORANGE_900,borderInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.NEGATIVE_ORANGE_1000,borderHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.WHITE,iconDisabledInverted:Colors.WHITE,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_200,borderDisabledInverted:Colors.AUTHENTIC_BLUE_200}},textButton:{primary:{text:Colors.ACTION_BLUE_900,icon:Colors.ACTION_BLUE_900,textHover:Colors.ACTION_BLUE_1000,iconHover:Colors.ACTION_BLUE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_350,iconHoverInverted:Colors.AUTHENTIC_BLUE_350,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.NEGATIVE_ORANGE_900,icon:Colors.NEGATIVE_ORANGE_900,textHover:Colors.NEGATIVE_ORANGE_1000,iconHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.NEGATIVE_ORANGE_900,iconInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.NEGATIVE_ORANGE_1000,iconHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550}},forms:{toggle:{default:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.ACTION_BLUE_900},error:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.NEGATIVE_ORANGE_900},disabled:{slideOff:Colors.AUTHENTIC_BLUE_50,slideOn:Colors.AUTHENTIC_BLUE_50,frameOff:Colors.AUTHENTIC_BLUE_50,frameOn:Colors.AUTHENTIC_BLUE_50}},datePicker:{calendar:{border:Colors.AUTHENTIC_BLUE_200,borderHover:Colors.AUTHENTIC_BLUE_200,borderRange:Colors.ACTION_BLUE_350,borderSelected:Colors.ACTION_BLUE_1000,borderRangeHover:Colors.ACTION_BLUE_350,background:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_50,backgroundRange:Colors.ACTION_BLUE_50,backgroundSelected:Colors.ACTION_BLUE_900,backgroundRangeHover:Colors.ACTION_BLUE_350}}},table:{skeleton:Colors.AUTHENTIC_BLUE_50,zebraStyles:{backgroundSecondary:"rgba(241, 242, 244, 0.4)",backgroundHover:Colors.ACTION_BLUE_100,backgroundActive:Colors.ACTION_BLUE_150},linesStyles:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100,border:Colors.AUTHENTIC_BLUE_200},blank:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100},header:{border:Colors.AUTHENTIC_BLUE_550}},dialog:{dimming:"rgba(0, 15, 31, 0.6)"}}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Colors_Colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,colors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__.w,semanticColors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__._,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/deprecatedProperty.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>deprecatedProperty});__webpack_require__("./node_modules/warning/warning.js");let deprecatedProperty=function deprecatedFunction(){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./src/components/HelperText/docs/HelperText.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Input_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Input/Input.tsx"),_HelperText__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/HelperText/HelperText.tsx"),_HelperText_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/HelperText/docs/HelperText.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_HelperText_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"helpertext",children:"HelperText"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component is a support for Input, Textarea and Dropdown components to display error feedback\nfor users action or to provide further information in advance."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"HelperText could be shown either for a single or a cluster of sources (e.g. displaying an error message for two inputs)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Occurring error message will replace existing hint notifications"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"They are placed underneath its regarding source and they are left align"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"In case of multiple error notifications you should additionally show an error banner to provide global feedback"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_HelperText_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HelperText"})," also supports all the properties of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-text--docs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Text"})}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"provide-additional-information-about-form-inputs",children:"Provide additional information about form inputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.E$,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_5__.I,{placeholder:"Enter something"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HelperText__WEBPACK_IMPORTED_MODULE_6__.p,{mt:"1",children:"127 Characters left"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Input placeholder="Enter something" />\n<HelperText mt="1">127 Characters left</HelperText>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"validation-messages",children:"Validation messages"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.E$,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_5__.I,{label:"Email",placeholder:"who@free-now.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HelperText__WEBPACK_IMPORTED_MODULE_6__.p,{mt:"1",variant:"danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Email is required"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Input label=\'Email\' placeholder="who@free-now.com" />\n<HelperText mt="1" variant="danger">\n    Email field is required\n</HelperText>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x0:()=>nanoid});let nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);
//# sourceMappingURL=src-components-HelperText-docs-HelperText-storybook-mdx.74eb4d91.iframe.bundle.js.map