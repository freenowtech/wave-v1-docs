"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[3596],{"./src/components/Link/docs/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inverted:()=>Inverted,WithManualFontSize:()=>WithManualFontSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _docs_parameters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/docs/parameters.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",component:__webpack_require__("./src/components/Link/Link.tsx").r,argTypes:{children:{description:"Content of the link",table:{type:{summary:"ReactNode"}}},fontSize:{options:[0,1,2,3,4],defaultValue:2,control:"select",description:"Font size of the link",table:{type:{summary:"number | string"}}},target:{description:"Target of the link, see [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)",table:{type:{summary:"_self | _blank | _parent | _top"}}},href:{description:"Href of the link, see [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)",table:{type:{summary:"string"}}},as:{description:"What html-tag to use",table:{defaultValue:{summary:"a"},type:{summary:"string | ReactComponent"}}},ref:{description:"Reference to the DOM element"},theme:{table:{disable:!0}},forwardedAs:{table:{disable:!0}}},args:{href:"https://free-now.com/",target:"_blank",children:"Go to FreeNow website"}},Default={},WithManualFontSize={args:{fontSize:1}},Inverted={args:{inverted:!0},parameters:{..._docs_parameters__WEBPACK_IMPORTED_MODULE_1__.e}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithManualFontSize.parameters={...WithManualFontSize.parameters,docs:{...WithManualFontSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    fontSize: 1\n  }\n}",...WithManualFontSize.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true\n  },\n  parameters: {\n    ...onDarkBackground\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithManualFontSize","Inverted"]},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    display: inline-block;
    color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_3__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.ACTION_BLUE_900};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontWeights.semibold")};
    text-decoration: none;

    &:link,
    &:visited {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_3__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.ACTION_BLUE_900};
    }

    &:hover,
    &:active {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_350:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.ACTION_BLUE_1000};
        text-decoration: underline;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},inverted:{defaultValue:null,description:"Adjust color for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/parameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>onDarkBackground});const onDarkBackground={backgrounds:{default:"dark"}}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Colors/Colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SemanticColors,w:()=>Colors});let Colors=function(Colors){return Colors.WHITE="#FFFFFF",Colors.BLACK="#000000",Colors.AUTHENTIC_BLUE_1100="#000F1F",Colors.AUTHENTIC_BLUE_900="#001E3E",Colors.AUTHENTIC_BLUE_550="#637689",Colors.AUTHENTIC_BLUE_350="#9CA7B4",Colors.AUTHENTIC_BLUE_200="#C6CDD4",Colors.AUTHENTIC_BLUE_50="#F1F2F4",Colors.FREEDOM_RED_1000="#BF0820",Colors.FREEDOM_RED_900="#FF0A2B",Colors.ACTION_BLUE_1000="#0750A4",Colors.ACTION_BLUE_900="#096BDB",Colors.ACTION_BLUE_350="#9FC5F1",Colors.ACTION_BLUE_150="#D6E6F9",Colors.ACTION_BLUE_100="#E4EFFB",Colors.ACTION_BLUE_50="#F1F7FD",Colors.BUMPY_MAGENTA_1000="#BF00B9",Colors.BUMPY_MAGENTA_900="#FF00F7",Colors.BUMPY_MAGENTA_350="#FF9CFC",Colors.BUMPY_MAGENTA_50="#FFF1FF",Colors.POSITIVE_GREEN_1000="#05763B",Colors.POSITIVE_GREEN_900="#069D4F",Colors.POSITIVE_GREEN_350="#9ED9BB",Colors.POSITIVE_GREEN_50="#F1FAF5",Colors.ATTENTION_YELLOW_900="#FFCC00",Colors.ATTENTION_YELLOW_350="#FFEB9C",Colors.ATTENTION_YELLOW_50="#FFFCF1",Colors.NEGATIVE_ORANGE_1000="#BF4704",Colors.NEGATIVE_ORANGE_900="#FF5E05",Colors.NEGATIVE_ORANGE_350="#FFC09E",Colors.NEGATIVE_ORANGE_50="#FFF6F1",Colors}({});const SemanticColors={text:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,link:Colors.ACTION_BLUE_900,linkInverted:Colors.WHITE,linkHover:Colors.ACTION_BLUE_1000,linkHoverInverted:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_1000,dangerInverted:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},background:{primary:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_50,success:Colors.POSITIVE_GREEN_50,warning:Colors.ATTENTION_YELLOW_50,primaryEmphasized:Colors.AUTHENTIC_BLUE_900,secondaryEmphasized:Colors.AUTHENTIC_BLUE_550,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},icon:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,action:Colors.ACTION_BLUE_900,danger:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},border:{primary:Colors.AUTHENTIC_BLUE_200,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_350,danger:Colors.NEGATIVE_ORANGE_350,success:Colors.POSITIVE_GREEN_350,warning:Colors.ATTENTION_YELLOW_350,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},button:{primary:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.AUTHENTIC_BLUE_900,border:Colors.AUTHENTIC_BLUE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_1100,borderHover:Colors.AUTHENTIC_BLUE_1100,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.ACTION_BLUE_900,iconInverted:Colors.ACTION_BLUE_900,backgroundInverted:Colors.WHITE,borderInverted:Colors.WHITE,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.ACTION_BLUE_900,borderHoverInverted:Colors.ACTION_BLUE_900,textDisabledInverted:Colors.AUTHENTIC_BLUE_350,iconDisabledInverted:Colors.AUTHENTIC_BLUE_350,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_550,borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},secondary:{text:Colors.AUTHENTIC_BLUE_900,icon:Colors.AUTHENTIC_BLUE_900,background:Colors.WHITE,border:Colors.AUTHENTIC_BLUE_200,textHover:Colors.AUTHENTIC_BLUE_900,iconHover:Colors.AUTHENTIC_BLUE_900,backgroundHover:Colors.AUTHENTIC_BLUE_50,borderHover:Colors.AUTHENTIC_BLUE_200,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,backgroundDisabled:Colors.WHITE,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:"transparent",borderInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_900,iconHoverInverted:Colors.AUTHENTIC_BLUE_900,backgroundHoverInverted:Colors.WHITE,borderHoverInverted:Colors.WHITE,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550,backgroundDisabledInverted:"transparent",borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.NEGATIVE_ORANGE_900,border:Colors.NEGATIVE_ORANGE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.NEGATIVE_ORANGE_1000,borderHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:Colors.NEGATIVE_ORANGE_900,borderInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.NEGATIVE_ORANGE_1000,borderHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.WHITE,iconDisabledInverted:Colors.WHITE,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_200,borderDisabledInverted:Colors.AUTHENTIC_BLUE_200}},textButton:{primary:{text:Colors.ACTION_BLUE_900,icon:Colors.ACTION_BLUE_900,textHover:Colors.ACTION_BLUE_1000,iconHover:Colors.ACTION_BLUE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_350,iconHoverInverted:Colors.AUTHENTIC_BLUE_350,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.NEGATIVE_ORANGE_900,icon:Colors.NEGATIVE_ORANGE_900,textHover:Colors.NEGATIVE_ORANGE_1000,iconHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.NEGATIVE_ORANGE_900,iconInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.NEGATIVE_ORANGE_1000,iconHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550}},forms:{toggle:{default:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.ACTION_BLUE_900},error:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.NEGATIVE_ORANGE_900},disabled:{slideOff:Colors.AUTHENTIC_BLUE_50,slideOn:Colors.AUTHENTIC_BLUE_50,frameOff:Colors.AUTHENTIC_BLUE_50,frameOn:Colors.AUTHENTIC_BLUE_50}},datePicker:{calendar:{border:Colors.AUTHENTIC_BLUE_200,borderHover:Colors.AUTHENTIC_BLUE_200,borderRange:Colors.ACTION_BLUE_350,borderSelected:Colors.ACTION_BLUE_1000,borderRangeHover:Colors.ACTION_BLUE_350,background:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_50,backgroundRange:Colors.ACTION_BLUE_50,backgroundSelected:Colors.ACTION_BLUE_900,backgroundRangeHover:Colors.ACTION_BLUE_350}}},table:{skeleton:Colors.AUTHENTIC_BLUE_50,zebraStyles:{backgroundSecondary:"rgba(241, 242, 244, 0.4)",backgroundHover:Colors.ACTION_BLUE_100,backgroundActive:Colors.ACTION_BLUE_150},linesStyles:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100,border:Colors.AUTHENTIC_BLUE_200},blank:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100},header:{border:Colors.AUTHENTIC_BLUE_550}},dialog:{dimming:"rgba(0, 15, 31, 0.6)"}}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Colors_Colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,colors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__.w,semanticColors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__._,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-Link-docs-Link-stories.2c591bee.iframe.bundle.js.map