(window.webpackJsonp=window.webpackJsonp||[]).push([[80,81],{499:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(57);var r=n(14),o=(n(4),n(105),n(37),n(27),n(88),n(309),n(53),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(54),n(63),n(18),n(11),n(19),n(20),n(209),n(210),n(89),n(324),n(0)),c=n(212),l=n(29);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=["sm","md","lg","xl"],v=x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=x.reduce((function(t,e){return t["offset"+Object(l.C)(e)]={type:[String,Number],default:null},t}),{}),m=x.reduce((function(t,e){return t["order"+Object(l.C)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(m)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=O(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},583:function(t,e,n){var content=n(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5a537a67",content,!0,{sourceMap:!1})},673:function(t,e,n){"use strict";n(583)},674:function(t,e,n){var r=n(45)(!1);r.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600;flex:1 0 50%;padding-right:16px}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=r},675:function(t,e,n){var content=n(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("4fd3097c",content,!0,{sourceMap:!1})},716:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(107),c=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),l=(n(673),n(16)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},729:function(t,e,n){"use strict";n(675)},730:function(t,e,n){var r=n(45)(!1);r.push([t.i,".ConsultationWrap[data-v-98e62ae4]{display:flex;align-items:center;height:100%}.Consultation[data-v-98e62ae4]{height:100%;padding:3px 18px;min-height:5.5em}",""]),t.exports=r},844:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(716),c=r.default.extend({components:{StaticInfo:o.default}}),l=(n(729),n(16)),f=n(73),d=n.n(f),x=n(499),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"ConsultationWrap"},[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html",text:t.$t("ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら"),"btn-text":t.$t("新型コロナ保健医療情報ポータル")}})],1)])}),[],!1,null,"98e62ae4",null);e.default=component.exports;d()(component,{VCol:x.a})}}]);