/*! For license information please see components-Search-docs-Search-stories.808b8dc0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[39409,17694],{"./src/components/Search/docs/Search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithAPI:()=>WithAPI,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Search_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),Elevation=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),MagnifyingGlassIcon=__webpack_require__("./src/icons/actions/MagnifyingGlassIcon.tsx"),CloseIcon=__webpack_require__("./src/icons/actions/CloseIcon.tsx");function useControlledState([value,setValue],defaultState){const[state,setState]=react.useState(value||defaultState);return[void 0!==setValue?value:state,setValue||setState]}var Box=__webpack_require__("./src/components/Box/Box.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActiveStyle=`\n    background-color: ${Colors.w.ACTION_BLUE_50};\n    color: ${Colors.w.ACTION_BLUE_900};\n`,SearchResultsContainer=(0,styled_components_browser_esm.ZP)(Box.x)`
    position: absolute;
    z-index: ${Elevation.u.SUGGESTIONS_LIST};
    margin-top: 0.0625rem;
    padding: 0.25rem 0;
    width: inherit;
    background-color: ${props=>props.inverted?Colors.w.AUTHENTIC_BLUE_900:Colors.w.WHITE};
    box-shadow: 0 0.125rem 0.5rem 0.0625rem ${Colors.w.AUTHENTIC_BLUE_200};
    border-radius: 0.25rem;
    cursor: pointer;
`,ActiveBox=(0,styled_components_browser_esm.ZP)(Box.x)`
    &[aria-selected='true'] > div {
        ${ActiveStyle}
    }
`,SearchInputContainer=(0,styled_components_browser_esm.ZP)(Box.x)`
    box-sizing: border-box;
    background: white;
    border-radius: 0.25rem;
    border: ${p=>p.isInFocus?`0.0625rem solid ${Colors.w.ACTION_BLUE_900}`:`0.0625rem solid ${Colors.w.AUTHENTIC_BLUE_200}`};
    box-shadow: ${p=>p.isInFocus?`inset 0 0 0 0.0625rem ${Colors.w.ACTION_BLUE_900}`:"none"};
    height: ${p=>"small"===p.size?"2.2rem":"3.2rem"};
    transition: box-shadow 100ms ease, border 100ms ease;
`,StyledInput=(0,styled_components_browser_esm.ZP)(Input.I)`
    width: 100%;

    input {
        caret-color: ${Colors.w.ACTION_BLUE_900};
        background: transparent;
        border: 0;

        &:focus,
        &:active {
            outline: 0;
            border: 0;
            box-shadow: unset;
        }

        text-overflow: ellipsis;

        ::-webkit-search-cancel-button {
            display: none;
        }

        &::placeholder {
            color: ${p=>p.disabled?Colors.w.AUTHENTIC_BLUE_200:Colors.w.AUTHENTIC_BLUE_550};
            opacity: 1;
        }
    }
`,Search=({results=[],value:propsValue,setValue:setPropsValue,showResults:propsShowResults,setShowResults:setPropsShowResults,width,placeholder="Search...",disabled,inverted,size,onInputChange,onClear,onEnter,onChangeSelection})=>{const containerRef=react.useRef(null),[isInFocus,setIsInFocus]=react.useState(!1),[activeIndex,setActiveIndex]=react.useState(0),[value,setValue]=useControlledState([propsValue,setPropsValue],""),[showResults,setShowResults]=useControlledState([propsShowResults,setPropsShowResults],!1);react.useEffect((()=>{const elementLength=Array.isArray(results)?results.length:1,emitKeyEvent=({key})=>{if(isInFocus)switch(key){case"ArrowUp":{const index=activeIndex>0?(activeIndex-1)%elementLength:elementLength-1;setActiveIndex(index),onChangeSelection?.(index);break}case"ArrowDown":{const index=(activeIndex+1)%elementLength;setActiveIndex(index),onChangeSelection?.(index);break}case"Enter":{const el=document.querySelector(`#result-item-${activeIndex}`);el?.children[0]?.click(),onEnter?.(value);break}case"Escape":setShowResults(!1)}};return document.addEventListener("keydown",emitKeyEvent),()=>{document.removeEventListener("keydown",emitKeyEvent)}}),[isInFocus,activeIndex,setActiveIndex,onChangeSelection,onEnter,value,propsValue,results]),react.useEffect((()=>{const emitIfClickingOutsideSearch=event=>{disabled||(containerRef.current.contains(event.target)?setShowResults(!0):setShowResults(!1))};return document.addEventListener("click",emitIfClickingOutsideSearch),()=>{document.removeEventListener("click",emitIfClickingOutsideSearch)}}),[showResults,setShowResults,disabled]);return(0,jsx_runtime.jsxs)("div",{ref:containerRef,style:{width},role:"search",children:[(0,jsx_runtime.jsxs)(SearchInputContainer,{isInFocus,display:"flex",flexDirection:"row",alignItems:"center",width:"100%",size,children:[(0,jsx_runtime.jsx)(Box.x,{style:{display:"flex",margin:"small"===size?"0.5rem":"1rem",marginRight:"auto"},onClick:()=>!disabled&&onEnter?.(value),children:(0,jsx_runtime.jsx)(MagnifyingGlassIcon.Z,{size:"small"===size?20:24,"aria-hidden":"true",color:disabled?Colors.w.AUTHENTIC_BLUE_200:Colors.w.AUTHENTIC_BLUE_350})}),(0,jsx_runtime.jsx)(StyledInput,{size,type:"search",inverted,disabled,"aria-label":placeholder,autoComplete:"off",placeholder,value,onChange:event=>{setShowResults(!0);const searchText=event.target.value;setValue?.(searchText),onInputChange?.(searchText)},onFocus:()=>setIsInFocus(!0),onBlur:()=>setIsInFocus(!1)}),value?(0,jsx_runtime.jsx)(Box.x,{"aria-label":"clear-search",style:{margin:"1rem",marginLeft:"auto",cursor:"pointer",display:"flex"},onClick:()=>{setValue?.(""),onClear?.()},role:"button",children:(0,jsx_runtime.jsx)(CloseIcon.Z,{"aria-hidden":"true",color:Colors.w.AUTHENTIC_BLUE_550})}):void 0]}),showResults&&results.length>0&&(0,jsx_runtime.jsx)(SearchResultsContainer,{inverted,role:"listbox",children:results.map(((result,index)=>(0,jsx_runtime.jsx)(ActiveBox,{role:"option",id:`result-item-${index}`,onMouseEnter:()=>setActiveIndex(index),onMouseMove:()=>setActiveIndex(index),"aria-selected":activeIndex===index,children:result},index)))})]})};Search.displayName="Search";try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{results:{defaultValue:{value:"[]"},description:"",name:"results",required:!1,type:{name:"ReactNode[]"}},value:{defaultValue:null,description:"Sets the value",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"Function to set the value",name:"setValue",required:!1,type:{name:"(value: string) => void"}},showResults:{defaultValue:null,description:"show results dropdown",name:"showResults",required:!1,type:{name:"boolean"}},setShowResults:{defaultValue:null,description:"Function to show and hide the dropdown",name:"setShowResults",required:!1,type:{name:"(value: boolean) => void"}},width:{defaultValue:null,description:"Sets the width of the search box",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Search..."},description:"Sets the placeholder text to be shown",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the search box is disabled",name:"disabled",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"Determines whether the search box has an inverted color scheme",name:"inverted",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Determines the size of the search box",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},onEnter:{defaultValue:null,description:'This function is called when the "Enter" key is pressed or the search icon is clicked',name:"onEnter",required:!1,type:{name:"(value: string) => void"}},onChangeSelection:{defaultValue:null,description:"This function is called when the selection is changed. It emits the selected index",name:"onChangeSelection",required:!1,type:{name:"(index: number) => void"}},onInputChange:{defaultValue:null,description:"This function is called when the value in the search box changes",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},onClear:{defaultValue:null,description:"This function is called when the search box is cleared",name:"onClear",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/components/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}var Text=__webpack_require__("./src/components/Text/Text.tsx");const Search_stories={title:"Components/Search",component:Search,args:{results:["Adam","Barry","Charles","David"]}},Default={},WithPlaceholder={args:{placeholder:"Search by name"}},Disabled={args:{disabled:!0}},WithAPI={args:{width:"20rem",placeholder:"Enter a name"},parameters:{},argTypes:{results:{table:{disable:!0}}},render:args=>{const[results,setResults]=(0,react.useState)([]),mapName=({name},index)=>(0,jsx_runtime.jsx)(Box.x,{height:"2.5rem",display:"flex",alignItems:"center",children:(0,jsx_runtime.jsx)(Text.x,{marginLeft:"1rem",children:name})},`${name}-${index}`);return(0,jsx_runtime.jsx)(Search,{...args,results,onInputChange:name=>(async name=>{const response=await(await fetch(`https://swapi.dev/api/people/?search=${name}`)).json();setResults(response.results?.map(mapName))})(name),onClear:()=>setResults([])})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Search by name'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithAPI.parameters={...WithAPI.parameters,docs:{...WithAPI.parameters?.docs,source:{originalSource:'{\n  args: {\n    width: \'20rem\',\n    placeholder: \'Enter a name\'\n  },\n  parameters: {},\n  argTypes: {\n    results: {\n      table: {\n        disable: true\n      }\n    }\n  },\n  render: args => {\n    const [results, setResults] = useState<JSX.Element[]>([]);\n    const mapName = ({\n      name\n    }: {\n      name: string;\n    }, index: number) => <Box key={`${name}-${index}`} height="2.5rem" display="flex" alignItems="center">\n                <Text marginLeft="1rem">{name}</Text>\n            </Box>;\n    const fetchCharacter = async (name: string) => {\n      const response: {\n        results: {\n          name: string;\n        }[];\n      } = await (await fetch(`https://swapi.dev/api/people/?search=${name}`)).json();\n      setResults(response.results?.map(mapName));\n    };\n    return <Search {...args} results={results} onInputChange={name => fetchCharacter(name)} onClear={() => setResults([])} />;\n  }\n}',...WithAPI.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithPlaceholder","Disabled","WithAPI"]},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const Box=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.FK,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.eC,styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/InnerInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Password_Password__WEBPACK_IMPORTED_MODULE_2__.r,{...props,ref}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InnerInput__WEBPACK_IMPORTED_MODULE_3__._,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/deprecatedProperty.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    color: ${function determineTextColor(props){const{weak,secondary,inverted,disabled}=props;return void 0!==weak&&(0,_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_1__.M)("Text",weak,"weak","secondary","Rename `weak` to `secondary` to remove the warning."),disabled?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.disabledInverted":"semanticColors.text.disabled")(props):secondary||weak?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.secondaryInverted":"semanticColors.text.secondary")(props):inverted?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primaryInverted")(props):(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primary")(props)}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Adjust color for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},weak:{defaultValue:null,description:"Adjust color to indicate secondary information\n@deprecated use `secondary` instead",name:"weak",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Colors/Colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SemanticColors,w:()=>Colors});let Colors=function(Colors){return Colors.WHITE="#FFFFFF",Colors.BLACK="#000000",Colors.AUTHENTIC_BLUE_1100="#000F1F",Colors.AUTHENTIC_BLUE_900="#001E3E",Colors.AUTHENTIC_BLUE_550="#637689",Colors.AUTHENTIC_BLUE_350="#9CA7B4",Colors.AUTHENTIC_BLUE_200="#C6CDD4",Colors.AUTHENTIC_BLUE_50="#F1F2F4",Colors.FREEDOM_RED_1000="#BF0820",Colors.FREEDOM_RED_900="#FF0A2B",Colors.ACTION_BLUE_1000="#0750A4",Colors.ACTION_BLUE_900="#096BDB",Colors.ACTION_BLUE_350="#9FC5F1",Colors.ACTION_BLUE_150="#D6E6F9",Colors.ACTION_BLUE_100="#E4EFFB",Colors.ACTION_BLUE_50="#F1F7FD",Colors.BUMPY_MAGENTA_1000="#BF00B9",Colors.BUMPY_MAGENTA_900="#FF00F7",Colors.BUMPY_MAGENTA_350="#FF9CFC",Colors.BUMPY_MAGENTA_50="#FFF1FF",Colors.POSITIVE_GREEN_1000="#05763B",Colors.POSITIVE_GREEN_900="#069D4F",Colors.POSITIVE_GREEN_350="#9ED9BB",Colors.POSITIVE_GREEN_50="#F1FAF5",Colors.ATTENTION_YELLOW_900="#FFCC00",Colors.ATTENTION_YELLOW_350="#FFEB9C",Colors.ATTENTION_YELLOW_50="#FFFCF1",Colors.NEGATIVE_ORANGE_1000="#BF4704",Colors.NEGATIVE_ORANGE_900="#FF5E05",Colors.NEGATIVE_ORANGE_350="#FFC09E",Colors.NEGATIVE_ORANGE_50="#FFF6F1",Colors}({});const SemanticColors={text:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,link:Colors.ACTION_BLUE_900,linkInverted:Colors.WHITE,linkHover:Colors.ACTION_BLUE_1000,linkHoverInverted:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_1000,dangerInverted:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},background:{primary:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_50,danger:Colors.NEGATIVE_ORANGE_50,success:Colors.POSITIVE_GREEN_50,warning:Colors.ATTENTION_YELLOW_50,primaryEmphasized:Colors.AUTHENTIC_BLUE_900,secondaryEmphasized:Colors.AUTHENTIC_BLUE_550,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},icon:{primary:Colors.AUTHENTIC_BLUE_900,primaryInverted:Colors.WHITE,secondary:Colors.AUTHENTIC_BLUE_550,secondaryInverted:Colors.AUTHENTIC_BLUE_200,tertiary:Colors.AUTHENTIC_BLUE_350,tertiaryInverted:Colors.AUTHENTIC_BLUE_350,disabled:Colors.AUTHENTIC_BLUE_200,disabledInverted:Colors.AUTHENTIC_BLUE_550,action:Colors.ACTION_BLUE_900,danger:Colors.NEGATIVE_ORANGE_900,success:Colors.POSITIVE_GREEN_900,warning:Colors.ATTENTION_YELLOW_900},border:{primary:Colors.AUTHENTIC_BLUE_200,secondary:Colors.AUTHENTIC_BLUE_50,info:Colors.ACTION_BLUE_350,danger:Colors.NEGATIVE_ORANGE_350,success:Colors.POSITIVE_GREEN_350,warning:Colors.ATTENTION_YELLOW_350,infoEmphasized:Colors.ACTION_BLUE_900,dangerEmphasized:Colors.NEGATIVE_ORANGE_900,successEmphasized:Colors.POSITIVE_GREEN_900,warningEmphasized:Colors.ATTENTION_YELLOW_900},button:{primary:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.AUTHENTIC_BLUE_900,border:Colors.AUTHENTIC_BLUE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_1100,borderHover:Colors.AUTHENTIC_BLUE_1100,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.ACTION_BLUE_900,iconInverted:Colors.ACTION_BLUE_900,backgroundInverted:Colors.WHITE,borderInverted:Colors.WHITE,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.ACTION_BLUE_900,borderHoverInverted:Colors.ACTION_BLUE_900,textDisabledInverted:Colors.AUTHENTIC_BLUE_350,iconDisabledInverted:Colors.AUTHENTIC_BLUE_350,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_550,borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},secondary:{text:Colors.AUTHENTIC_BLUE_900,icon:Colors.AUTHENTIC_BLUE_900,background:Colors.WHITE,border:Colors.AUTHENTIC_BLUE_200,textHover:Colors.AUTHENTIC_BLUE_900,iconHover:Colors.AUTHENTIC_BLUE_900,backgroundHover:Colors.AUTHENTIC_BLUE_50,borderHover:Colors.AUTHENTIC_BLUE_200,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,backgroundDisabled:Colors.WHITE,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:"transparent",borderInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_900,iconHoverInverted:Colors.AUTHENTIC_BLUE_900,backgroundHoverInverted:Colors.WHITE,borderHoverInverted:Colors.WHITE,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550,backgroundDisabledInverted:"transparent",borderDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.WHITE,icon:Colors.WHITE,background:Colors.NEGATIVE_ORANGE_900,border:Colors.NEGATIVE_ORANGE_900,textHover:Colors.WHITE,iconHover:Colors.WHITE,backgroundHover:Colors.NEGATIVE_ORANGE_1000,borderHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.WHITE,iconDisabled:Colors.WHITE,backgroundDisabled:Colors.AUTHENTIC_BLUE_200,borderDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,backgroundInverted:Colors.NEGATIVE_ORANGE_900,borderInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.WHITE,iconHoverInverted:Colors.WHITE,backgroundHoverInverted:Colors.NEGATIVE_ORANGE_1000,borderHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.WHITE,iconDisabledInverted:Colors.WHITE,backgroundDisabledInverted:Colors.AUTHENTIC_BLUE_200,borderDisabledInverted:Colors.AUTHENTIC_BLUE_200}},textButton:{primary:{text:Colors.ACTION_BLUE_900,icon:Colors.ACTION_BLUE_900,textHover:Colors.ACTION_BLUE_1000,iconHover:Colors.ACTION_BLUE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.WHITE,iconInverted:Colors.WHITE,textHoverInverted:Colors.AUTHENTIC_BLUE_350,iconHoverInverted:Colors.AUTHENTIC_BLUE_350,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550},danger:{text:Colors.NEGATIVE_ORANGE_900,icon:Colors.NEGATIVE_ORANGE_900,textHover:Colors.NEGATIVE_ORANGE_1000,iconHover:Colors.NEGATIVE_ORANGE_1000,textDisabled:Colors.AUTHENTIC_BLUE_200,iconDisabled:Colors.AUTHENTIC_BLUE_200,textInverted:Colors.NEGATIVE_ORANGE_900,iconInverted:Colors.NEGATIVE_ORANGE_900,textHoverInverted:Colors.NEGATIVE_ORANGE_1000,iconHoverInverted:Colors.NEGATIVE_ORANGE_1000,textDisabledInverted:Colors.AUTHENTIC_BLUE_550,iconDisabledInverted:Colors.AUTHENTIC_BLUE_550}},forms:{toggle:{default:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.ACTION_BLUE_900},error:{slideOff:Colors.WHITE,slideOn:Colors.WHITE,frameOff:Colors.AUTHENTIC_BLUE_200,frameOn:Colors.NEGATIVE_ORANGE_900},disabled:{slideOff:Colors.AUTHENTIC_BLUE_50,slideOn:Colors.AUTHENTIC_BLUE_50,frameOff:Colors.AUTHENTIC_BLUE_50,frameOn:Colors.AUTHENTIC_BLUE_50}},datePicker:{calendar:{border:Colors.AUTHENTIC_BLUE_200,borderHover:Colors.AUTHENTIC_BLUE_200,borderRange:Colors.ACTION_BLUE_350,borderSelected:Colors.ACTION_BLUE_1000,borderRangeHover:Colors.ACTION_BLUE_350,background:Colors.WHITE,backgroundHover:Colors.AUTHENTIC_BLUE_50,backgroundRange:Colors.ACTION_BLUE_50,backgroundSelected:Colors.ACTION_BLUE_900,backgroundRangeHover:Colors.ACTION_BLUE_350}}},table:{skeleton:Colors.AUTHENTIC_BLUE_50,zebraStyles:{backgroundSecondary:"rgba(241, 242, 244, 0.4)",backgroundHover:Colors.ACTION_BLUE_100,backgroundActive:Colors.ACTION_BLUE_150},linesStyles:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100,border:Colors.AUTHENTIC_BLUE_200},blank:{backgroundHover:Colors.ACTION_BLUE_50,backgroundActive:Colors.ACTION_BLUE_100},header:{border:Colors.AUTHENTIC_BLUE_550}},dialog:{dimming:"rgba(0, 15, 31, 0.6)"}}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Colors_Colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,colors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__.w,semanticColors:_Colors_Colors__WEBPACK_IMPORTED_MODULE_1__._,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_2__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/icons/actions/CloseIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor",fillRule:"nonzero"})})};CloseIcon.displayName="CloseIcon",CloseIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=CloseIcon;try{CloseIcon.displayName="CloseIcon",CloseIcon.__docgenInfo={description:"",displayName:"CloseIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/CloseIcon.tsx#CloseIcon"]={docgenInfo:CloseIcon.__docgenInfo,name:"CloseIcon",path:"src/icons/actions/CloseIcon.tsx#CloseIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/MagnifyingGlassIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MagnifyingGlassIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M10 3a7 7 0 016.066 10.495l5.641 5.798-1.414 1.414-1.81-1.89.015-.012-3.022-3.13-.613-.64-.003.002-1.389-1.438a5 5 0 10-1.73 1.09l1.478 1.528A7 7 0 1110 3z",fill:"currentColor",fillRule:"nonzero"})})};MagnifyingGlassIcon.displayName="MagnifyingGlassIcon",MagnifyingGlassIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=MagnifyingGlassIcon;try{MagnifyingGlassIcon.displayName="MagnifyingGlassIcon",MagnifyingGlassIcon.__docgenInfo={description:"",displayName:"MagnifyingGlassIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/MagnifyingGlassIcon.tsx#MagnifyingGlassIcon"]={docgenInfo:MagnifyingGlassIcon.__docgenInfo,name:"MagnifyingGlassIcon",path:"src/icons/actions/MagnifyingGlassIcon.tsx#MagnifyingGlassIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/deprecatedProperty.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>deprecatedProperty});__webpack_require__("./node_modules/warning/warning.js");let deprecatedProperty=function deprecatedFunction(){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x0:()=>nanoid});let nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);
//# sourceMappingURL=components-Search-docs-Search-stories.808b8dc0.iframe.bundle.js.map