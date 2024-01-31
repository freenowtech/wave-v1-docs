/*! For license information please see components-Textarea-docs-Textarea-stories.b4cd3812.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[61360],{"./src/components/Textarea/docs/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Inverted:()=>Inverted,WithError:()=>WithError,WithLabel:()=>WithLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),BoxedInput=__webpack_require__("./src/components/Input/BoxedInput.ts"),BoxedInputLabel=__webpack_require__("./src/components/Input/BoxedInputLabel.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextAreaWrapper=styled_components_browser_esm.ZP.div.attrs({theme:theme.r})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 21.5rem;
    height: 7.25rem;

    ${(0,index_esm.qC)(index_esm.e6,index_esm.Cb,index_esm.bf)}
`,TextareaField=(0,styled_components_browser_esm.ZP)(BoxedInput.i).attrs({as:"textarea"})`
    height: 100%;
    padding: 0.75rem;
    overflow: auto;

    resize: ${p=>p.resize};
`,Textarea=({resize="both",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(withoutClassName),{widthProps,restProps:withoutWidth}=(0,extractProps.Jy)(withoutMargin),{heightProps,restProps}=(0,extractProps.Qb)(withoutWidth),{label,onChange,...rest}=restProps,id=(0,useGeneratedId.I)(props.id),[hasValue,setHasValue]=(0,react.useState)(rest.value&&rest.value.toString().length>0);return(0,react.useEffect)((()=>{setHasValue(rest.value&&rest.value.toString().length>0)}),[rest.value]),(0,jsx_runtime.jsxs)(TextAreaWrapper,{...classNameProps,...marginProps,...widthProps,...heightProps,children:[(0,jsx_runtime.jsx)(TextareaField,{...rest,resize,id,variant:"boxed",size:"medium",hasValue,onChange:event=>{onChange&&onChange(event)}}),label&&(0,jsx_runtime.jsx)(BoxedInputLabel.H,{htmlFor:id,size:"medium",children:label})]})};Textarea.displayName="Textarea";try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"'boxed'"},description:"Sets the variant of the textarea",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},size:{defaultValue:{value:"'medium'"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}var parameters=__webpack_require__("./src/docs/parameters.ts");const Textarea_stories={title:"Form Elements/Textarea",component:Textarea,argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},args:{label:"E-Mail Address"}},Default={args:{label:void 0}},WithLabel={},WithPlaceholder={args:{placeholder:"user@free-now.com"}},WithError={args:{error:!0}},Disabled={args:{disabled:!0}},Inverted={args:{inverted:!0},parameters:{...parameters.e}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'user@free-now.com'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true\n  },\n  parameters: {\n    ...onDarkBackground\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","WithPlaceholder","WithError","Disabled","Inverted"]},"./src/components/Input/BaseInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BaseInput});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.1")},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2")}}}),inputVariants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{boxed:{borderRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.2"),border:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900,boxShadow:`inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.1"),borderTopRightRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.1"),borderBottom:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900,boxShadow:`inset 0 -0.0625rem 0 0 ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900}`}}}}),BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
    margin: 0;
    box-sizing: border-box;
    background: ${p=>p.inverted?"transparent":_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
    border-radius: 0;
    color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_350};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.bf,sizeVariant,inputVariants)};

    &:disabled {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        border-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900};
        transition: background-color 99999999ms ease 99999999ms;
    }
`},"./src/components/Input/BaseInputLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>BaseInputLabel,i:()=>activePositionBaseStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const activePositionBaseStyles=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontWeights.semibold")};
`,BaseInputLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 2rem);
    transition: top ${100}ms ease-out, left ${100}ms ease-out,
        padding ${100}ms ease-out, font-size ${100}ms ease-out,
        color ${100}ms ease-out, background ${100}ms ease-out;
`;try{BaseInputLabel.displayName="BaseInputLabel",BaseInputLabel.__docgenInfo={description:"",displayName:"BaseInputLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/BaseInputLabel.tsx#BaseInputLabel"]={docgenInfo:BaseInputLabel.__docgenInfo,name:"BaseInputLabel",path:"src/components/Input/BaseInputLabel.tsx#BaseInputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/BoxedInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BoxedInput});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_BaseInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Input/BaseInput.ts"),_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const errorStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    box-shadow: inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};
    border-color: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};

    & ~ ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        color: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};
    }
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{height:"2rem",padding:"0 0.5rem"},medium:{height:"3rem",padding:"0 0.75rem"}}}),BoxedInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(_BaseInput__WEBPACK_IMPORTED_MODULE_4__.Q)`
    ${sizeVariant}
    & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        ${p=>p.hasValue||p.placeholder?(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size):void 0};
        color: ${({hasValue,inverted})=>inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200:hasValue?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_350};
        background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
        background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size)};
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900};
            background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
            background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
        }
    }
`},"./src/components/Input/BoxedInputLabel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BoxedInputLabel,V:()=>activeBoxedPosition});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/themeGet.ts"),_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBoxedPosition=size=>styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    ${_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.i};

    top: ${"small"===size?"-0.375rem":"-0.5rem"};
    font-size: ${"small"===size?"0.625rem":(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.0")};
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{top:"0.5rem",left:"0.375rem",padding:"0 0.125rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.1")},medium:{top:"0.75rem",left:"0.5rem",padding:"0 0.25rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.2")}}}),BoxedInputLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.h).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    ${sizeVariant};
`},"./src/docs/parameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>onDarkBackground});const onDarkBackground={backgrounds:{default:"dark"}}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Colors/Colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SemanticColors,w:()=>Colors});let Colors=function(Colors){return Colors.WHITE="#FFFFFF",Colors.BLACK="#000000",Colors.AUTHENTIC_BLUE_1100="#000F1F",Colors.AUTHENTIC_BLUE_900="#001E3E",Colors.AUTHENTIC_BLUE_550="#637689",Colors.AUTHENTIC_BLUE_350="#9CA7B4",Colors.AUTHENTIC_BLUE_200="#C6CDD4",Colors.AUTHENTIC_BLUE_50="#F1F2F4",Colors.FREEDOM_RED_1000="#BF0820",Colors.FREEDOM_RED_900="#FF0A2B",Colors.ACTION_BLUE_1000="#0750A4",Colors.ACTION_BLUE_900="#096BDB",Colors.ACTION_BLUE_350="#9FC5F1",Colors.ACTION_BLUE_150="#D6E6F9",Colors.ACTION_BLUE_100="#E4EFFB",Colors.ACTION_BLUE_50="#F1F7FD",Colors.BUMPY_MAGENTA_1000="#BF00B9",Colors.BUMPY_MAGENTA_900="#FF00F7",Colors.BUMPY_MAGENTA_350="#FF9CFC",Colors.BUMPY_MAGENTA_50="#FFF1FF",Colors.POSITIVE_GREEN_1000="#05763B",Colors.POSITIVE_GREEN_900="#069D4F",Colors.POSITIVE_GREEN_350="#9ED9BB",Colors.POSITIVE_GREEN_50="#F1FAF5",Colors.ATTENTION_YELLOW_900="#FFCC00",Colors.ATTENTION_YELLOW_350="#FFEB9C",Colors.ATTENTION_YELLOW_50="#FFFCF1",Colors.NEGATIVE_ORANGE_1000="#BF4704",Colors.NEGATIVE_ORANGE_900="#FF5E05",Colors.NEGATIVE_ORANGE_350="#FFC09E",Colors.NEGATIVE_ORANGE_50="#FFF6F1",Colors}({});const SemanticColors={text:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,link:Colors.ACTION_BLUE_900,linkInverted:Colors.WHITE,linkHover:Colors.ACTION_BLUE_1000,linkHoverInverted:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_1000,dangerInverted:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},background:{primary:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_50,success:Colors.POSITIVE_GREEN_50,warning:Colors.ATTENTION_YELLOW_50,primaryEmphasized:Colors.AUTHENTIC_BLUE_900,secondaryEmphasized:Colors.AUTHENTIC_BLUE_550,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},icon:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,action:Colors.ACTION_BLUE_900,danger:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},border:{primary:Colors.AUTHENTIC_BLUE_200,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_350,danger:Colors.NEGATIVE_ORANGE_350,success:Colors.POSITIVE_GREEN_350,warning:Colors.ATTENTION_YELLOW_350,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},button:{primary:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.AUTHENTIC_BLUE_900,border:Colors.AUTHENTIC_BLUE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_1100,borderHover:Colors.AUTHENTIC_BLUE_1100,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.ACTION_BLUE_900,iconInverted:Colors.ACTION_BLUE_900,backgroundInverted:Colors.WHITE,borderInverted:Colors.WHITE,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.ACTION_BLUE_900,borderHoverInverted:Colors.ACTION_BLUE_900,textDisabledInverted:Colors.AUTHENTIC_BLUE_350,iconDisabledInverted:Colors.AUTHENTIC_BLUE_350,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_550,borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},secondary:{text:Colors.AUTHENTIC_BLUE_900,icon:Colors.AUTHENTIC_BLUE_900,background:Colors.WHITE,border:Colors.AUTHENTIC_BLUE_200,textHover:Colors.AUTHENTIC_BLUE_900,iconHover:Colors.AUTHENTIC_BLUE_900,backgroundHover:Colors.AUTHENTIC_BLUE_50,borderHover:Colors.AUTHENTIC_BLUE_200,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,backgroundDisabled:Colors.WHITE,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:"transparent",borderInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_900,iconHoverInverted:Colors.AUTHENTIC_BLUE_900,backgroundHoverInverted:Colors.WHITE,borderHoverInverted:Colors.WHITE,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550,backgroundDisabledInverted:"transparent",borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.NEGATIVE_ORANGE_900,border:Colors.NEGATIVE_ORANGE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.NEGATIVE_ORANGE_1000,borderHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:Colors.NEGATIVE_ORANGE_900,borderInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.NEGATIVE_ORANGE_1000,borderHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.WHITE,iconDisabledInverted:Colors.WHITE,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_200,borderDisabledInverted:Colors.AUTHENTIC_BLUE_200}},textButton:{primary:{text:Colors.ACTION_BLUE_900,icon:Colors.ACTION_BLUE_900,textHover:Colors.ACTION_BLUE_1000,iconHover:Colors.ACTION_BLUE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_350,iconHoverInverted:Colors.AUTHENTIC_BLUE_350,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.NEGATIVE_ORANGE_900,icon:Colors.NEGATIVE_ORANGE_900,textHover:Colors.NEGATIVE_ORANGE_1000,iconHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.NEGATIVE_ORANGE_900,iconInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.NEGATIVE_ORANGE_1000,iconHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550}},forms:{toggle:{default:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.ACTION_BLUE_900},error:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.NEGATIVE_ORANGE_900},disabled:{slideOff:Colors.AUTHENTIC_BLUE_50,slideOn:Colors.AUTHENTIC_BLUE_50,frameOff:Colors.AUTHENTIC_BLUE_50,frameOn:Colors.AUTHENTIC_BLUE_50}},datePicker:{calendar:{border:Colors.AUTHENTIC_BLUE_200,borderHover:Colors.AUTHENTIC_BLUE_200,borderRange:Colors.ACTION_BLUE_350,borderSelected:Colors.ACTION_BLUE_1000,borderRangeHover:Colors.ACTION_BLUE_350,background:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_50,backgroundRange:Colors.ACTION_BLUE_50,backgroundSelected:Colors.ACTION_BLUE_900,backgroundRangeHover:Colors.ACTION_BLUE_350}}},table:{skeleton:Colors.AUTHENTIC_BLUE_50,zebraStyles:{backgroundSecondary:"rgba(241, 242, 244, 0.4)",backgroundHover:Colors.ACTION_BLUE_100,backgroundActive:Colors.ACTION_BLUE_150},linesStyles:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100,border:Colors.AUTHENTIC_BLUE_200},blank:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100},header:{border:Colors.AUTHENTIC_BLUE_550}},dialog:{dimming:"rgba(0, 15, 31, 0.6)"}}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Colors_Colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,colors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__.w,semanticColors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__._,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ids__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/ids.ts");const useGeneratedId=id=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>id||(0,_ids__WEBPACK_IMPORTED_MODULE_1__.O)()),[id])},"./src/utils/ids.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>generateId});var nanoid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/nanoid/index.browser.js");const generateId=()=>`wave-${(0,nanoid__WEBPACK_IMPORTED_MODULE_0__.x0)(6)}`},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x0:()=>nanoid});let nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-Textarea-docs-Textarea-stories.b4cd3812.iframe.bundle.js.map