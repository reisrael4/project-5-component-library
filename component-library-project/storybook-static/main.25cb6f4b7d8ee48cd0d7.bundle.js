(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Button_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(171),__webpack_require__(2)),Form=function Form(props){var classList="",placeholder="";return["email","dropdown","counter","code"].includes(props.type)&&(classList+=" form-".concat(props.type)),props.medium&&(classList+=" ".concat(props.type,"-medium")),props.large&&(classList+=" ".concat(props.type,"-large")),props.shadow&&(classList+=" ".concat(props.type,"-shadow")),placeholder=props.placeholder?"".concat(props.placeholder):"".concat(props.label),"email"===props.type?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",placeholder:placeholder,className:classList})):"dropdown"===props.type?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select",{className:classList},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{default:!0},placeholder),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",null,"A"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",null,"B"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",null,"C"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",null,"D"))):"code"!==props.type||props.large?props.large&&"code"===props.type?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",placeholder:placeholder,className:classList}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.a,{type:"primary",label:props.label,large:!0,white:!0})):void 0:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",placeholder:placeholder,className:classList}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.a,{type:"primary",label:props.label,white:!0}))};Form.__docgenInfo={description:"",methods:[],displayName:"Form"},__webpack_exports__.a=Form,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Form/Form.js"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/Form/Form.js"})},171:function(module,exports,__webpack_require__){},172:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/cart_2.df57aa99.svg"},173:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/hearts.0cce8b87.svg"},2:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Button=(__webpack_require__(620),function Button(props){var classList="";return["primary","danger","success","warning"].includes(props.type)&&(classList+=" button-".concat(props.type)),props.hover&&(props.type?classList+=" button-".concat(props.type,"-hover"):classList+=" button-default-hover"),props.large&&(classList+=" button-large"),props.outline&&(classList+=" button-outline"),props.white&&(classList+=" button-white"),props.pale&&(props.type?classList+=" button-".concat(props.type,"-pale button-border"):classList+=" button-default-pale button-border"),props.none&&(classList+=" button-no-text"),props.icon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:props.onClick,className:classList},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:props.icon,alt:""}),props.label):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:classList,onClick:props.onClick},props.label)});Button.__docgenInfo={description:"",methods:[],displayName:"Button"},__webpack_exports__.a=Button,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/Button/Button.js"})},275:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(112),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(113),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(115),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Button_Button__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(171),__webpack_require__(2)),Counter=function(_Component){function Counter(){var _this;return Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Counter),(_this=Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Counter).call(this))).increaseCount=function(){var count=_this.state.count+1;_this.setState({count:count})},_this.decreaseCount=function(){var count=_this.state.count-1;_this.setState({count:count})},_this.state={count:0},_this}return Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Counter,_Component),Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Counter,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"counter"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.decreaseCount,label:"-",type:"primary",outline:!0}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"count"},this.state.count),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.increaseCount,label:"+",type:"primary",outline:!0}))}}]),Counter}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Counter},276:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(112),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(113),_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(115),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),Checkbox=(__webpack_require__(171),function(_Component){function Checkbox(){var _this;return Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Checkbox),(_this=Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Checkbox).call(this))).handleCheckboxChange=function(event){return _this.setState({checked:event.target.checked})},_this.state={checked:!1},_this}return Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Checkbox,_Component),Object(_Users_rachelnims_sei_projects_project_5_component_library_component_library_project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Checkbox,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"checkbox",checked:this.state.checked,onClick:this.handleCheckboxChange}),this.props.label)}}]),Checkbox}(react__WEBPACK_IMPORTED_MODULE_5__.Component));__webpack_exports__.a=Checkbox},277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(424),module.exports=__webpack_require__(425)},342:function(module,exports){},425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(618)],module)}.call(this,__webpack_require__(142)(module))},618:function(module,exports,__webpack_require__){var map={"./Button/Button.stories.js":619,"./Form/Form.stories.js":621};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=618},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Icons_cart_2_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172),_Icons_cart_2_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_Icons_cart_2_svg__WEBPACK_IMPORTED_MODULE_3__),_Icons_hearts_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(173),_Icons_hearts_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_Icons_hearts_svg__WEBPACK_IMPORTED_MODULE_4__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("Primary",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",white:!0,hover:!0})})).add("Danger",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",white:!0,hover:!0})})).add("Success",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",white:!0,hover:!0})})).add("Warning",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",white:!0,hover:!0})})).add("Default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",white:!0,hover:!0})})).add("Large Primary",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",large:!0,white:!0,hover:!0})})).add("Large Danger",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",large:!0,white:!0,hover:!0})})).add("Large Success",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",large:!0,white:!0,hover:!0})})).add("Large Warning",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",large:!0,white:!0,hover:!0})})).add("Large Default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",large:!0,white:!0,hover:!0})})).add("Primary Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",outline:!0})})).add("Large Primary Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",large:!0,outline:!0})})).add("Danger Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",outline:!0})})).add("Large Danger Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",large:!0,outline:!0})})).add("Success Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",outline:!0})})).add("Large Success Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",large:!0,outline:!0})})).add("Warning Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",outline:!0})})).add("Large Warning Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",large:!0,outline:!0})})).add("Default Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",outline:!0})})).add("Large Default Outline",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",large:!0,outline:!0})})).add("Primary Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",pale:!0})})).add("Large Primary Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Primary",type:"primary",large:!0,pale:!0})})).add("Danger Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",pale:!0})})).add("Large Danger Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Danger",type:"danger",large:!0,pale:!0})})).add("Success Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",pale:!0})})).add("Large Success Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Success",type:"success",large:!0,pale:!0})})).add("Warning Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",pale:!0})})).add("Large Warning Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Warning",type:"warning",large:!0,pale:!0})})).add("Default Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",pale:!0})})).add("Large Default Pale",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Default",large:!0,pale:!0})})).add("heart button with text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:" Add to Favorites",type:"primary",pale:!0,icon:_Icons_hearts_svg__WEBPACK_IMPORTED_MODULE_4___default.a})})).add("heart button no text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{type:"primary",pale:!0,none:!0,icon:_Icons_hearts_svg__WEBPACK_IMPORTED_MODULE_4___default.a})})).add("cart button with text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:" Add to Cart",type:"primary",pale:!0,icon:_Icons_cart_2_svg__WEBPACK_IMPORTED_MODULE_3___default.a})})).add("cart button no text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{type:"primary",pale:!0,none:!0,icon:_Icons_cart_2_svg__WEBPACK_IMPORTED_MODULE_3___default.a})}))}.call(this,__webpack_require__(142)(module))},620:function(module,exports,__webpack_require__){},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_Form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(17),_Counter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(275),_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(276);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Form",module).add("Email",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Email",type:"email",input:"text"})})).add("Medium Email",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Email",type:"email",input:"text",medium:!0})})).add("Large Email",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Email",type:"email",input:"text",large:!0})})).add("Small Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select"})})).add("Medium Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select",medium:!0})})).add("Large Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select",large:!0})})).add("Small Darker Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select",shadow:!0})})).add("Medium Darker Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select",medium:!0,shadow:!0})})).add("Large Darker Dropdown",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{placeholder:"Select",type:"dropdown",input:"select",large:!0,shadow:!0})})).add("Small Voucher",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Submit",placeholder:"Voucher code",type:"code",input:"text"})})).add("Large Voucher",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__.a,{label:"Submit",placeholder:"Voucher code",type:"code",input:"text",large:!0})})).add("Counter",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Counter__WEBPACK_IMPORTED_MODULE_3__.a,{type:"counter"})})).add("Checkbox",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Don't show this popup again"})}))}.call(this,__webpack_require__(142)(module))}},[[277,1,2]]]);
//# sourceMappingURL=main.25cb6f4b7d8ee48cd0d7.bundle.js.map