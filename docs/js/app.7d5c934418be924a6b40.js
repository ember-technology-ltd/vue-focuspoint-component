webpackJsonp([1],{EOwc:function(t,e,i){t.exports=i.p+"vue-focuspoint-component/img/image_1.bb31ae2.jpg"},NHnr:function(t,e,i){"use strict";function s(t){i("k3LG")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),o=i("7+uW"),c={name:"FocusPoint",props:{focus:Object,focusDefault:{type:Object,default:function(){return{x:50,y:50}}},decimalLength:{type:Number,default:5}},data:function(){return{boundingPin:null,boundingElement:null,coordinates:this.focus?this.focus:this.focusDefault}},mounted:function(){this.boundingPin=this.$refs.pin.getBoundingClientRect(),this.updateFocus()},methods:{onClick:function(t){var e=t.clientX,i=t.clientY;this.boundingElement=this.$el.getBoundingClientRect(),this.coordinates={x:e-this.boundingElement.left,y:i-this.boundingElement.top},this.updateFocus()},updateFocus:function(){this.$emit("update:focus",this.coordinatesPercent)}},computed:{coordinatesPercent:function(){return this.boundingElement?{x:Math.max((this.coordinates.x/this.boundingElement.width*100).toFixed(this.decimalLength),0),y:Math.max((this.coordinates.y/this.boundingElement.height*100).toFixed(this.decimalLength),0)}:this.coordinates},pinStyle:function(){return this.boundingPin?{left:"calc("+this.coordinatesPercent.x+"% - "+this.boundingPin.width/2+"px)",top:"calc("+this.coordinatesPercent.y+"% - "+this.boundingPin.height/2+"px)"}:null}}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"focus-point",on:{click:t.onClick}},[t._t("default"),t._v(" "),i("div",{ref:"pin",staticClass:"focus-point-pin",style:t.pinStyle},[t._t("pin")],2)],2)},r=[],u={render:l,staticRenderFns:r},m=u,d=i("VU/8"),v=d(c,m,!1,null,null,null),p=v.exports,f={name:"app",data:function(){return{imageOne:null,imageTwo:{x:94,y:19},imageThree:null,imageFour:null}},components:{FocusPoint:p}},g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"my-5 container"},[t._m(0),t._v(" "),s("hr"),t._v(" "),s("main",{attrs:{role:"main"}},[s("div",{staticClass:"row my-5"},[s("div",{staticClass:"col-md-6"},[s("h4",[t._v("Feel free set a focus point")]),t._v(" "),s("p",[t._v("Click on the element (picture)")]),t._v(" "),s("focus-point",{attrs:{focus:t.imageOne},on:{"update:focus":function(e){t.imageOne=e}}},[s("img",{staticClass:"img-fluid",attrs:{src:i("EOwc")}})]),t._v(" "),t.imageOne?s("div",{staticClass:"row my-3"},[s("div",{staticClass:"col-6"},[s("pre",[t._v(t._s(t.imageOne))])]),t._v(" "),s("div",{staticClass:"col-5 col-sm-4 ml-auto image-description"},[s("img",{staticClass:"img-fluid preview-image",style:{objectPosition:t.imageOne.x+"% "+t.imageOne.y+"%"},attrs:{src:i("EOwc")}})])]):t._e()],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h4",[t._v("A saved focus point")]),t._v(" "),t._m(1),t._v(" "),s("focus-point",{attrs:{focus:t.imageTwo},on:{"update:focus":function(e){t.imageTwo=e}}},[s("img",{staticClass:"img-fluid",attrs:{src:i("EOwc")}})]),t._v(" "),t.imageTwo?s("div",{staticClass:"row my-3"},[s("div",{staticClass:"col-6"},[s("pre",[t._v(t._s(t.imageTwo))])]),t._v(" "),s("div",{staticClass:"col-5 col-sm-4 ml-auto image-description"},[s("img",{staticClass:"img-fluid preview-image",style:{objectPosition:t.imageTwo.x+"% "+t.imageTwo.y+"%"},attrs:{src:i("EOwc")}})])]):t._e()],1)]),t._v(" "),s("div",{staticClass:"row my-5"},[s("div",{staticClass:"col-md-6"},[s("h4",[t._v("Own focus pin")]),t._v(" "),t._m(2),t._v(" "),s("focus-point",{attrs:{focus:t.imageThree},on:{"update:focus":function(e){t.imageThree=e}}},[s("template",{slot:"pin"},[t._v("\n              😀\n            ")]),t._v(" "),s("img",{staticClass:"img-fluid",attrs:{src:i("EOwc")}})],2),t._v(" "),t.imageThree?s("div",{staticClass:"row my-3"},[s("div",{staticClass:"col-6"},[s("pre",[t._v(t._s(t.imageThree))])]),t._v(" "),s("div",{staticClass:"col-5 col-sm-4 ml-auto image-description"},[s("img",{staticClass:"img-fluid preview-image",style:{objectPosition:t.imageThree.x+"% "+t.imageThree.y+"%"},attrs:{src:i("EOwc")}})])]):t._e()],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h4",[t._v("Other elements")]),t._v(" "),s("p",[t._v("Test on another element")]),t._v(" "),s("focus-point",{attrs:{focus:t.imageFour},on:{"update:focus":function(e){t.imageFour=e}}},[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"display-4"},[t._v("Hello, world!")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.")]),t._v(" "),s("hr",{staticClass:"my-4"}),t._v(" "),s("p",[t._v("It uses utility classes for typography and spacing to space content out within the larger container.")]),t._v(" "),s("p",{staticClass:"lead"},[s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[t._v("Learn more")])])])]),t._v(" "),s("div",{staticClass:"row my-3"},[s("div",{staticClass:"col-6"},[s("pre",[t._v(t._s(t.imageFour))])])])],1)])])])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"my-3 clearfix"},[i("ul",{staticClass:"nav float-right"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"https://github.com/EvodiaAut/vue-focuspoint-component",target:"_blank"}},[t._v("Github")])])]),t._v(" "),i("h1",{staticClass:"text-muted"},[t._v("vue-focuspoint-component")]),t._v(" "),i("p",{staticClass:"lead"},[t._v("Set focus point on elements")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Use "),i("code",[t._v(':focus.sync="image"')]),t._v(" for get new coordinates")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("code",[t._v('slot="pin"')]),t._v(" Set your own pin")])}],h={render:g,staticRenderFns:_},C=h,y=i("VU/8"),w=s,b=y(f,C,!1,w,null,null),x=b.exports;o.a.config.productionTip=!1,new o.a(a()({el:"#app"},x))},k3LG:function(t,e){}},["NHnr"]);