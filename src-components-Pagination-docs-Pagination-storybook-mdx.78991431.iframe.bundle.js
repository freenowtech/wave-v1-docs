"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[120],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Pagination/docs/Pagination.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Pagination_storybook});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Text=__webpack_require__("./src/components/Text/Text.tsx"),Pagination=__webpack_require__("./src/components/Pagination/Pagination.tsx");const PAGE_SIZES=[{label:"10",value:"10"},{label:"15",value:"15"},{label:"20",value:"20"}],PaginationProvider=({children})=>{const[currentPage,setCurrentPage]=(0,react.useState)(1),[pageSize,setPageSize]=(0,react.useState)(10);return children({currentPage,pageSize,pageSizes:PAGE_SIZES,totalItems:200,handleNextPage:()=>{setCurrentPage((current=>current+1))},handlePrevPage:()=>{setCurrentPage((current=>current-1))},handleSelectPageSize:selected=>{setPageSize(Number.parseInt(selected.value,10))},handleSkipForward:()=>{setCurrentPage(Math.ceil(200/pageSize))},handleSkipBackward:()=>{setCurrentPage(1)}})},NormalPagination=()=>(0,jsx_runtime.jsx)(PaginationProvider,{children:({currentPage,pageSize,totalItems,handleNextPage,handlePrevPage,handleSkipForward,handleSkipBackward})=>(0,jsx_runtime.jsx)(Pagination.t,{value:currentPage,pageSize,totalItems,label:(0,jsx_runtime.jsxs)(Text.x,{secondary:!0,children:["Page"," ",(0,jsx_runtime.jsxs)(Text.x,{as:"b",fontWeight:"semibold",secondary:!0,children:[currentPage," of ",Math.ceil(totalItems/pageSize)]})]}),onNextPage:handleNextPage,onPrevPage:handlePrevPage,onSkipForward:handleSkipForward,onSkipBackward:handleSkipBackward})});NormalPagination.displayName="NormalPagination";const PaginationWithPageSize=()=>(0,jsx_runtime.jsx)(PaginationProvider,{children:({currentPage,pageSize,pageSizes,totalItems,handleNextPage,handlePrevPage,handleSelectPageSize,handleSkipForward,handleSkipBackward})=>(0,jsx_runtime.jsx)(Pagination.t,{value:currentPage,pageSize,pageSizes,totalItems,label:(0,jsx_runtime.jsxs)(Text.x,{secondary:!0,children:["Page"," ",(0,jsx_runtime.jsxs)(Text.x,{as:"b",fontWeight:"semibold",secondary:!0,children:[currentPage," of ",Math.ceil(totalItems/pageSize)]})]}),onNextPage:handleNextPage,onPrevPage:handlePrevPage,onSelectPageSize:handleSelectPageSize,onSkipForward:handleSkipForward,onSkipBackward:handleSkipBackward})});PaginationWithPageSize.displayName="PaginationWithPageSize";try{NormalPagination.displayName="NormalPagination",NormalPagination.__docgenInfo={description:"",displayName:"NormalPagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/docs/PaginationProvider.tsx#NormalPagination"]={docgenInfo:NormalPagination.__docgenInfo,name:"NormalPagination",path:"src/components/Pagination/docs/PaginationProvider.tsx#NormalPagination"})}catch(__react_docgen_typescript_loader_error){}try{PaginationWithPageSize.displayName="PaginationWithPageSize",PaginationWithPageSize.__docgenInfo={description:"",displayName:"PaginationWithPageSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/docs/PaginationProvider.tsx#PaginationWithPageSize"]={docgenInfo:PaginationWithPageSize.__docgenInfo,name:"PaginationWithPageSize",path:"src/components/Pagination/docs/PaginationProvider.tsx#PaginationWithPageSize"})}catch(__react_docgen_typescript_loader_error){}var Pagination_stories=__webpack_require__("./src/components/Pagination/docs/Pagination.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Pagination_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use pagination to split long datasets like tables and lists"}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["As a rule of thumb set pagination after ",(0,jsx_runtime.jsx)(_components.strong,{children:"10, 15 or 20 items"})]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use small navigation on mobile and for small datasets"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.sq,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Pagination_stories}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The component provides the UI, but the state of the pages needs to be managed by the consuming component."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(NormalPagination,{})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'export default () => {\n    const PAGE_SIZE = 20;\n    const TOTAL_ITEMS = 200;\n\n    const [currentPage, setCurrentPage] = useState(1);\n\n    const lastPage = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);\n\n    return (\n        <Pagination\n            value={currentPage}\n            pageSize={PAGE_SIZE}\n            totalItems={TOTAL_ITEMS}\n            label={\n                <Text secondary={}>\n                    Page{\' \'}\n                    <Text as="b" fontWeight="semibold" secondary={}>\n                        {currentPage} of {lastPage}\n                    </Text>\n                </Text>\n            }\n            onNextPage={() => setCurrentPage(current => current + 1)}\n            onPrevPage={() => setCurrentPage(current => current - 1)}\n            onSkipForward={() => setCurrentPage(lastPage)}\n            onSkipBackward={() => setCurrentPage(1)}\n        />\n    );\n};\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"page-size-selector",children:"Page size selector"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When using the selector for the page size, provide a set of possible page size values and a callback ",(0,jsx_runtime.jsx)(_components.code,{children:"onSelectPageSize"})," to handle the change.\nWhen new ",(0,jsx_runtime.jsx)(_components.code,{children:"pageSize"})," prop is passed to the component, the amount of pages will be recalculated."]}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(PaginationWithPageSize,{})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const PageSizeOptions = [\n    { label: '10', value: '10' },\n    { label: '20', value: '20' }\n];\n\nconst WithPageSize = () => {\n    const TOTAL_ITEMS = 200;\n\n    const [currentPage, setCurrentPage] = useState(1);\n    const [pageSize, setPageSize] = useState(PageSizeOptions[0]);\n\n    const lastPage = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);\n\n    return (\n        <Pagination\n            value={currentPage}\n            pageSize={pageSize}\n            totalItems={TOTAL_ITEMS}\n            label={\n                <Text secondary>\n                    Page{' '}\n                    <Text as=\"b\" fontWeight=\"semibold\" secondary>\n                        {currentPage} of {lastPage}\n                    </Text>\n                </Text>\n            }\n            pageSizeOptions={PageSizeOptions}\n            onSelectPageSize={selected => setPageSize(Number.parseInt(selected.value, 10))}\n            onNextPage={() => setCurrentPage(current => current + 1)}\n            onPrevPage={() => setCurrentPage(current => current - 1)}\n            onSkipForward={() => setCurrentPage(lastPage)}\n            onSkipBackward={() => setCurrentPage(1)}\n        />\n    );\n};\n"})}),"\n",(0,jsx_runtime.jsx)(dist.fQ,{includePrimary:!1})]})}const Pagination_storybook=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);