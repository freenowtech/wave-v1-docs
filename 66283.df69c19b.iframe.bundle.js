"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[66283],{"./src/components/Offcanvas/docs/Offcanvas.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DismissedWithHook:()=>DismissedWithHook,DismissedWithRenderProps:()=>DismissedWithRenderProps,FromRightSide:()=>FromRightSide,WithoutAutomaticDismiss:()=>WithoutAutomaticDismiss,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Offcanvas_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useIsEscKeyPressed=__webpack_require__("./src/utils/hooks/useIsEscKeyPressed.ts"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),Elevation=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),Card=__webpack_require__("./src/components/Card/Card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TRANSITION_KEY="centered-card-animation",inFrom={top:styled_components_browser_esm.iv`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(-50% - 1rem));
        }

        &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
            opacity: 0;
            transform: translate(-0%, -50%);
        }
    `,bottom:styled_components_browser_esm.iv`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(50% + 1rem));
        }

        &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
            opacity: 0;
            transform: translate(0%, 10%);
        }
    `},position={top:styled_components_browser_esm.iv`
        left: 0;
        right: 0;
        top: 0;
        bottom: unset;
    `,bottom:styled_components_browser_esm.iv`
        left: 0;
        right: 0;
        top: unset;
        bottom: 0;
    `},StyledCard=(0,styled_components_browser_esm.ZP)(Card.Z)`
    position: fixed;
    
    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.u.CARD_ON_DIMMING};
    width: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>inFrom[p.side]};
    ${p=>position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,CenteredCard=({visible,height="28.375rem",...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:TRANSITION_KEY,timeout:150,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(StyledCard,{...rest,height,level:300})});CenteredCard.displayName="CenteredCard";try{CenteredCard.displayName="CenteredCard",CenteredCard.__docgenInfo={description:"",displayName:"CenteredCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"]={docgenInfo:CenteredCard.__docgenInfo,name:"CenteredCard",path:"src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"})}catch(__react_docgen_typescript_loader_error){}const SideCard_inFrom={right:styled_components_browser_esm.iv`
        &.${"centered-card-animation"}-appear, &.${"centered-card-animation"}-enter {
            opacity: 0;
            transform: translate(calc(50% + 1rem), 0%);
        }

        &.${"centered-card-animation"}-appear-active, &.${"centered-card-animation"}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit-done, &.${"centered-card-animation"}-exit-active {
            opacity: 0;
            transform: translate(+10%, 0%);
        }
    `,left:styled_components_browser_esm.iv`
        &.${"centered-card-animation"}-appear, &.${"centered-card-animation"}-enter {
            opacity: 0;
            transform: translate(calc(-50% - 1rem), 0%);
        }

        &.${"centered-card-animation"}-appear-active, &.${"centered-card-animation"}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit-done, &.${"centered-card-animation"}-exit-active {
            opacity: 0;
            transform: translate(-10%, 0%);
        }
    `},SideCard_position={right:styled_components_browser_esm.iv`
        left: unset;
        right: 0;
        top: 0;
        bottom: 0;
    `,left:styled_components_browser_esm.iv`
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
    `},SideCard_StyledCard=(0,styled_components_browser_esm.ZP)(Card.Z)`
    position: fixed;
    
    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.u.CARD_ON_DIMMING};
    height: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>SideCard_inFrom[p.side]};
    ${p=>SideCard_position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,SideCard=({visible,width="28.375rem",...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:"centered-card-animation",timeout:150,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(SideCard_StyledCard,{...rest,width,level:300})});SideCard.displayName="SideCard";try{SideCard.displayName="SideCard",SideCard.__docgenInfo={description:"",displayName:"SideCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/SideCard.tsx#SideCard"]={docgenInfo:SideCard.__docgenInfo,name:"SideCard",path:"src/components/Offcanvas/components/SideCard.tsx#SideCard"})}catch(__react_docgen_typescript_loader_error){}var Dimming=__webpack_require__("./src/components/Dimming/Dimming.tsx"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts");const fadeInAnimation=(maxOpacity=.6)=>styled_components_browser_esm.iv`
    transition: opacity ${200}ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &.${"dimming-fade-animation"}-appear, &.${"dimming-fade-animation"}-enter {
        opacity: 0;
    }

    &.${"dimming-fade-animation"}-appear-active, &.${"dimming-fade-animation"}-enter-active {
        opacity: ${maxOpacity};
    }

    &.${"dimming-fade-animation"}-exit {
        opacity: ${maxOpacity};
    }

    &.${"dimming-fade-animation"}-exit-done, &.${"dimming-fade-animation"}-exit-active {
        opacity: 0;
    }
`,fullscreenDimming=styled_components_browser_esm.iv`
    background-color: ${Colors.w.WHITE};
    opacity: 1;
`,DimmingFadeStyled=(0,styled_components_browser_esm.ZP)(Dimming.g)`
    will-change: opacity;

    ${p=>p.fullscreen?fadeInAnimation(1):fadeInAnimation()};
    ${p=>p.fullscreen?fullscreenDimming:void 0}
`,DimmingFade=({visible,...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:"dimming-fade-animation",timeout:200,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(DimmingFadeStyled,{...rest})});DimmingFade.displayName="DimmingFade";try{DimmingFade.displayName="DimmingFade",DimmingFade.__docgenInfo={description:"",displayName:"DimmingFade",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"]={docgenInfo:DimmingFade.__docgenInfo,name:"DimmingFade",path:"src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"})}catch(__react_docgen_typescript_loader_error){}var Spaces=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),CloseIcon=__webpack_require__("./src/icons/actions/CloseIcon.tsx");const TopRightXIcon=(0,styled_components_browser_esm.ZP)(CloseIcon.Z)`
    position: absolute;
    top: ${Spaces.c0[1]};
    right: ${Spaces.c0[1]};
    cursor: pointer;
    z-index: ${Elevation.u.CARD_ON_DIMMING};
`;try{TopRightXIcon.displayName="TopRightXIcon",TopRightXIcon.__docgenInfo={description:"",displayName:"TopRightXIcon",props:{color:{defaultValue:null,description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:null,description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"]={docgenInfo:TopRightXIcon.__docgenInfo,name:"TopRightXIcon",path:"src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"})}catch(__react_docgen_typescript_loader_error){}const DismissContext=react.createContext(void 0),PreventBackgroundScroll=styled_components_browser_esm.vJ`
    body {
        overflow: hidden;
    }
`,Offcanvas_ANIMATION_DURATION=Math.max(200,150),Offcanvas=({children,onClose,dismissible,side="left",...rest})=>{const[visible,setVisible]=(0,react.useState)(!0),isEscKeyPressed=(0,useIsEscKeyPressed.d)(),handleClose=()=>{setVisible(!1),onClose&&setTimeout((()=>onClose()),Offcanvas_ANIMATION_DURATION)};(0,react.useEffect)((()=>{dismissible&&isEscKeyPressed&&handleClose()}),[dismissible,isEscKeyPressed]);const renderChildren=()=>"function"==typeof children?children(handleClose):children;return(0,jsx_runtime.jsxs)(DismissContext.Provider,{value:handleClose,children:[(0,jsx_runtime.jsx)(DimmingFade,{onClick:()=>{dismissible&&handleClose()},visible,"data-testid":"dimming-background"}),"top"===side||"bottom"===side?(0,jsx_runtime.jsxs)(CenteredCard,{visible,...rest,side,children:[dismissible&&(0,jsx_runtime.jsx)(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()]}):(0,jsx_runtime.jsxs)(SideCard,{visible,...rest,side,children:[dismissible&&(0,jsx_runtime.jsx)(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()]}),(0,jsx_runtime.jsx)(PreventBackgroundScroll,{})]})};Offcanvas.displayName="Offcanvas",Offcanvas.defaultProps={dismissible:!0};try{Offcanvas.displayName="Offcanvas",Offcanvas.__docgenInfo={description:"",displayName:"Offcanvas",props:{side:{defaultValue:{value:"left"},description:"Show the Offcanvas on the side of the page: left or right",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}},dismissible:{defaultValue:{value:"true"},description:"Makes the Offcanvas dismissible by the user (defaults to true)",name:"dismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Function that will be called when the user intends to close the Offcanvas",name:"onClose",required:!1,type:{name:"() => void"}},children:{defaultValue:null,description:"Children can be rendered with a dismiss function as render prop. Calling\nthe dismiss function will close the Offcanvas.",name:"children",required:!1,type:{name:"(ReactNode | ((dismiss: DismissFunc) => ReactNode)) & ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/Offcanvas.tsx#Offcanvas"]={docgenInfo:Offcanvas.__docgenInfo,name:"Offcanvas",path:"src/components/Offcanvas/Offcanvas.tsx#Offcanvas"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const Offcanvas_stories={title:"Components/Offcanvas",component:Offcanvas,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{willChange:"transform",height:"150px",border:"1px dashed gray"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{children:"Offcanvas Content"}},Default={render:({onClose,...args})=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"small",mr:1,onClick:()=>setOpen(!0),children:"Open Offcanvas"}),open&&(0,jsx_runtime.jsx)(Offcanvas,{...args,onClose:()=>{onClose?.(),setOpen(!1)}})]})}},WithoutAutomaticDismiss={...Default,args:{dismissible:!1}},FromRightSide={...Default,args:{side:"right"}},DismissedWithRenderProps={render:args=>(0,jsx_runtime.jsx)(Offcanvas,{...args,children:dismiss=>(0,jsx_runtime.jsx)(Button.z,{onClick:dismiss,children:"Close"})})},Content=()=>{const dismiss=(()=>{const dismiss=(0,react.useContext)(DismissContext);if(void 0===dismiss)throw new Error("useOffcanvasDismiss must be used within a <Offcanvas />");return dismiss})();return(0,jsx_runtime.jsx)(Button.z,{onClick:dismiss,children:"Close"})};Content.displayName="Content";const DismissedWithHook={render:args=>(0,jsx_runtime.jsx)(Offcanvas,{...args,children:(0,jsx_runtime.jsx)(Content,{})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: ({\n    onClose,\n    ...args\n  }) => {\n    const [open, setOpen] = useState(false);\n    return <>\n                <Button size="small" mr={1} onClick={() => setOpen(true)}>\n                    Open Offcanvas\n                </Button>\n                {open && <Offcanvas {...args} onClose={() => {\n        onClose?.();\n        setOpen(false);\n      }} />}\n            </>;\n  }\n}',...Default.parameters?.docs?.source}}},WithoutAutomaticDismiss.parameters={...WithoutAutomaticDismiss.parameters,docs:{...WithoutAutomaticDismiss.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    dismissible: false\n  }\n}",...WithoutAutomaticDismiss.parameters?.docs?.source}}},FromRightSide.parameters={...FromRightSide.parameters,docs:{...FromRightSide.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    side: 'right'\n  }\n}",...FromRightSide.parameters?.docs?.source}}},DismissedWithRenderProps.parameters={...DismissedWithRenderProps.parameters,docs:{...DismissedWithRenderProps.parameters?.docs,source:{originalSource:"{\n  render: args => <Offcanvas {...args}>{dismiss => <Button onClick={dismiss}>Close</Button>}</Offcanvas>\n}",...DismissedWithRenderProps.parameters?.docs?.source}}},DismissedWithHook.parameters={...DismissedWithHook.parameters,docs:{...DismissedWithHook.parameters?.docs,source:{originalSource:"{\n  render: args => <Offcanvas {...args}>\n            <Content />\n        </Offcanvas>\n}",...DismissedWithHook.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutAutomaticDismiss","FromRightSide","DismissedWithRenderProps","DismissedWithHook"]},"./src/components/Button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>BaseButton});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/deprecatedProperty.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.1"),height:"2rem",minWidth:"5rem",padding:"0 0.75rem"},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2"),height:"3rem",minWidth:"6.25rem",padding:"0 1rem"}}});const BaseButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    align-items: center;
    background: transparent;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.2")};
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: inline-flex;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fonts.normal")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontWeights.semibold")};
    justify-content: center;
    text-align: center;
    text-decoration: none;
    ${function handleBlockProp({block}){return void 0!==block&&(0,_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_2__.M)("Button",block,"block","width"),block?"width: 100%":""}};

    &:disabled {
        cursor: not-allowed;
    }

    svg path {
        fill: inherit;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,sizeVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.bf)}
`;try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"",displayName:"BaseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},size:{defaultValue:null,description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},block:{defaultValue:null,description:"Sets the button width to 100% of the parent\n@deprecated",name:"block",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/components/Button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts"),_BaseButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/BaseButton.tsx");const variantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{primary:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.text"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.icon"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.background"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.border"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.textHover"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.iconHover"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.backgroundHover"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.borderHover")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.textDisabled"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.iconDisabled"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.backgroundDisabled"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.borderDisabled")}},secondary:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.text"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.icon"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.background"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.border"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.textHover"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.iconHover"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.backgroundHover"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.borderHover")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.textDisabled"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.iconDisabled"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.backgroundDisabled"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.borderDisabled")}},danger:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.text"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.icon"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.background"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.border"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.textHover"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.iconHover"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.backgroundHover"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.borderHover")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.textDisabled"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.iconDisabled"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.backgroundDisabled"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.borderDisabled")}}}}),invertedVariantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{primary:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.textInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.iconInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.backgroundInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.borderInverted"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.textHoverInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.iconHoverInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.backgroundHoverInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.borderHoverInverted")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.textDisabledInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.iconDisabledInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.backgroundDisabledInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.primary.borderDisabledInverted")}},secondary:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.textInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.iconInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.backgroundInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.borderInverted"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.textHoverInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.iconHoverInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.backgroundHoverInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.borderHoverInverted")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.textDisabledInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.iconDisabledInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.backgroundDisabledInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.secondary.borderDisabledInverted")}},danger:{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.textInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.iconInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.backgroundInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.borderInverted"),"&:hover":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.textHoverInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.iconHoverInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.backgroundHoverInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.borderHoverInverted")},"&:disabled":{color:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.textDisabledInverted"),fill:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.iconDisabledInverted"),background:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.backgroundDisabledInverted"),borderColor:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("semanticColors.button.danger.borderDisabledInverted")}}}}),Button=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_BaseButton__WEBPACK_IMPORTED_MODULE_3__.Y).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${p=>p.inverted?invertedVariantStyles:variantStyles};
`;Button.defaultProps={size:"medium",variant:"primary"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Adjust colors for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"Define style of the button component, defaults to primary",name:"variant",required:!1,type:{name:'ResponsiveValue<"secondary" | "danger" | "primary", Required<Theme<TLengthStyledSystem>>>'}},block:{defaultValue:null,description:"Sets the button width to 100% of the parent\n@deprecated",name:"block",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const levelVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"level",variants:{0:{boxShadow:"none"},100:{boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r.shadows.small},200:{boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r.shadows.medium},300:{boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r.shadows.large}}}),Card=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r})`
    overflow: auto;
    box-sizing: border-box;
    background-color: ${_essentials__WEBPACK_IMPORTED_MODULE_3__.w.WHITE};
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("radii.1")};
    padding: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("space.5")};

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(levelVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.E0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bf,styled_system__WEBPACK_IMPORTED_MODULE_0__.o3)}
`;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dimming/Dimming.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Dimming});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Elevation/Elevation.ts");const Dimming=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    background-color: ${_essentials__WEBPACK_IMPORTED_MODULE_1__._.dialog.dimming};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.u.DIMMING};
`;try{Dimming.displayName="Dimming",Dimming.__docgenInfo={description:"",displayName:"Dimming",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dimming/Dimming.tsx#Dimming"]={docgenInfo:Dimming.__docgenInfo,name:"Dimming",path:"src/components/Dimming/Dimming.tsx#Dimming"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/icons/actions/CloseIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor",fillRule:"nonzero"})})};CloseIcon.displayName="CloseIcon",CloseIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=CloseIcon;try{CloseIcon.displayName="CloseIcon",CloseIcon.__docgenInfo={description:"",displayName:"CloseIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/CloseIcon.tsx#CloseIcon"]={docgenInfo:CloseIcon.__docgenInfo,name:"CloseIcon",path:"src/icons/actions/CloseIcon.tsx#CloseIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useIsEscKeyPressed.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useIsEscKeyPressed});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsEscKeyPressed=()=>{const[keyPressed,setKeyPressed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const upHandler=event=>{const key=event.key||event.keyCode;setKeyPressed("Escape"===key||"Esc"===key||27===key)};return window.addEventListener("keyup",upHandler),()=>{window.removeEventListener("keyup",upHandler)}}),[]),keyPressed}},"./node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);
//# sourceMappingURL=66283.df69c19b.iframe.bundle.js.map