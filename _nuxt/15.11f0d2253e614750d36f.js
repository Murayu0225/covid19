(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14,17,40,70,128],{448:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},485:function(t,e,n){"use strict";var o=n(1);n(4),n(209),n(11),n(210);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,d="object"===Object(o.a)(c)?c:{handler:c,options:{}},f=d.handler,v=d.options,_=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,v=null==(o=t._observe)?void 0:o[n.context._uid];if(v){var _=c.some((function(t){return t.isIntersecting}));!f||l.quiet&&!v.init||l.once&&!_&&!v.init||f(c,d,_),_&&l.once?r(t,e,n):v.init=!0}}),v);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:_},_.observe(t)}},unbind:r};e.a=l},493:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5e22af2d",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";n(105);var o=n(29),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),d=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},499:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(57);var o=n(14),r=(n(4),n(105),n(37),n(27),n(88),n(309),n(53),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(54),n(63),n(18),n(11),n(19),n(20),n(209),n(210),n(89),n(324),n(0)),l=n(212),c=n(29);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],_=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(_),offset:Object.keys(m),order:Object.keys(x)};function h(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var S=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=S.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=h(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},514:function(t,e,n){"use strict";n.r(e);n(63),n(65);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(522),l=n(16);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},522:function(t,e,n){"use strict";var o=n(493),r=n.n(o);n.d(e,"default",(function(){return r.a}))},523:function(t,e,n){var o=n(45)(!1);o.push([t.i,".parent_CheNg{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_CheNg"},t.exports=o},530:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("3e97eeea",content,!0,{sourceMap:!1})},531:function(t,e,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("11c64022",content,!0,{sourceMap:!1})},555:function(t,e,n){var content=n(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("1d30f684",content,!0,{sourceMap:!1})},592:function(t,e,n){"use strict";var o=n(530),r=n.n(o);n.d(e,"default",(function(){return r.a}))},593:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.container_kcQnm{width:100%;color:#085c6c;line-height:1.35;padding-left:0!important}.container_kcQnm,.container_kcQnm *{box-sizing:border-box}.container_kcQnm ul{padding-left:0}.group_pUvsu{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #085c6c;border-left:3px solid #085c6c}.content_esO1e{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #085c6c}.content_esO1e>span{display:block;font-size:1.4rem}.content_esO1e>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_esO1e>span:not(:last-child){word-wrap:break-word}.content_esO1e strong{font-size:1.6rem}.content_esO1e span.unit_J6W14{font-size:1.4rem}.box_OdfBn{display:block;margin-top:3px}.box_OdfBn.parent_qoBuf{border-top:3px solid #085c6c;border-left:3px solid #085c6c;position:relative;padding-left:29px}.box_OdfBn.parent_qoBuf:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #085c6c}.box_OdfBn.parent_qoBuf>.content_esO1e{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_pUvsu{padding-left:.238vw!important;border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c}.content_esO1e{padding:.396vw .792vw;border:.238vw solid #085c6c}.content_esO1e>span{font-size:1.4rem}.content_esO1e>span:first-child{margin-top:.08vw}.content_esO1e strong{font-size:1.6rem}.content_esO1e span.unit_J6W14{font-size:1.4rem}.box_OdfBn{margin-top:.238vw}.box_OdfBn.parent_qoBuf{border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c;padding-left:2.296vw}.box_OdfBn.parent_qoBuf:after{width:2.534vw;border-bottom:.238vw solid #085c6c}.box_OdfBn.parent_qoBuf>.content_esO1e{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_pUvsu{padding-left:.313vw!important;border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c}.content_esO1e{padding:.521vw 1.042vw;border:.313vw solid #085c6c}.content_esO1e>span{font-size:1.4rem}.content_esO1e>span:first-child{margin-top:.105vw}.content_esO1e strong{font-size:1.6rem}.content_esO1e span.unit_J6W14{font-size:1.4rem}.box_OdfBn{margin-top:.313vw}.box_OdfBn.parent_qoBuf{border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c;padding-left:3.02vw}.box_OdfBn.parent_qoBuf:after{width:3.334vw;border-bottom:.313vw solid #085c6c}.box_OdfBn.parent_qoBuf>.content_esO1e{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_pUvsu{padding-left:.5vw!important;border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c}.content_esO1e{padding:.834vw 1.667vw;border:.5vw solid #085c6c}.content_esO1e>span{font-size:1.4rem}.content_esO1e>span:first-child{margin-top:.167vw}.content_esO1e strong{font-size:1.6rem}.content_esO1e span.unit_J6W14{font-size:1.4rem}.box_OdfBn{margin-top:.5vw}.box_OdfBn.parent_qoBuf{border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c;padding-left:4.834vw}.box_OdfBn.parent_qoBuf:after{width:5.334vw;border-bottom:.5vw solid #085c6c}.box_OdfBn.parent_qoBuf>.content_esO1e{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_kcQnm",group:"group_pUvsu",content:"content_esO1e",unit:"unit_J6W14",box:"box_OdfBn",parent:"parent_qoBuf"},t.exports=o},594:function(t,e,n){"use strict";var o=n(531),r=n.n(o);n.d(e,"default",(function(){return r.a}))},595:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.container_dhKIe{width:100%;color:#085c6c;line-height:1.35;padding-left:0!important}.container_dhKIe,.container_dhKIe *{box-sizing:border-box}.container_dhKIe ul{padding-left:0}.group_k0I-S{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #085c6c;border-left:3px solid #085c6c}.content_SC4G5{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #085c6c}.content_SC4G5>span{display:block;font-size:1.4rem}.content_SC4G5>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_SC4G5>span:not(:last-child){word-wrap:break-word}.content_SC4G5 strong{font-size:1.6rem}.content_SC4G5 span.unit_0Ys10{font-size:1.4rem}.box_S-sGm{display:block;margin-top:3px}.box_S-sGm.parent_Mx-sS{border-top:3px solid #085c6c;border-left:3px solid #085c6c;position:relative;padding-left:29px}.box_S-sGm.parent_Mx-sS:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #085c6c}.box_S-sGm.parent_Mx-sS>.content_SC4G5{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_k0I-S{padding-left:.238vw!important;border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c}.content_SC4G5{padding:.396vw .792vw;border:.238vw solid #085c6c}.content_SC4G5>span{font-size:1.4rem}.content_SC4G5>span:first-child{margin-top:.08vw}.content_SC4G5 strong{font-size:1.6rem}.content_SC4G5 span.unit_0Ys10{font-size:1.4rem}.box_S-sGm{margin-top:.238vw}.box_S-sGm.parent_Mx-sS{border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c;padding-left:2.296vw}.box_S-sGm.parent_Mx-sS:after{width:2.534vw;border-bottom:.238vw solid #085c6c}.box_S-sGm.parent_Mx-sS>.content_SC4G5{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_k0I-S{padding-left:.313vw!important;border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c}.content_SC4G5{padding:.521vw 1.042vw;border:.313vw solid #085c6c}.content_SC4G5>span{font-size:1.4rem}.content_SC4G5>span:first-child{margin-top:.105vw}.content_SC4G5 strong{font-size:1.6rem}.content_SC4G5 span.unit_0Ys10{font-size:1.4rem}.box_S-sGm{margin-top:.313vw}.box_S-sGm.parent_Mx-sS{border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c;padding-left:3.02vw}.box_S-sGm.parent_Mx-sS:after{width:3.334vw;border-bottom:.313vw solid #085c6c}.box_S-sGm.parent_Mx-sS>.content_SC4G5{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_k0I-S{padding-left:.5vw!important;border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c}.content_SC4G5{padding:.834vw 1.667vw;border:.5vw solid #085c6c}.content_SC4G5>span{font-size:1.4rem}.content_SC4G5>span:first-child{margin-top:.167vw}.content_SC4G5 strong{font-size:1.6rem}.content_SC4G5 span.unit_0Ys10{font-size:1.4rem}.box_S-sGm{margin-top:.5vw}.box_S-sGm.parent_Mx-sS{border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c;padding-left:4.834vw}.box_S-sGm.parent_Mx-sS:after{width:5.334vw;border-bottom:.5vw solid #085c6c}.box_S-sGm.parent_Mx-sS>.content_SC4G5{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}.reference_jbt\\+r{color:#707070;margin:16px 0;font-size:1.4rem}.description_ta1OM{margin:10px 0;color:#707070;font-size:1.2rem}.description_ta1OM ul{list-style:disc inside;padding-left:1em}.description_ta1OM ul li{margin-left:1.5em;text-indent:-1.5em}',""]),o.locals={container:"container_dhKIe",group:"group_k0I-S",content:"content_SC4G5",unit:"unit_0Ys10",box:"box_S-sGm",parent:"parent_Mx-sS",reference:"reference_jbt+r",description:"description_ta1OM"},t.exports=o},647:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(514),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0},date:{type:String,required:!0}}}),c=n(592),d=n(16);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("新規陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["新規陽性者"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("うち65歳以上")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["うち65歳以上の高齢者数"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["死亡者数"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("都外からの持込検体による陽性数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["都外からの持込検体による陽性数"].toLocaleString(),unit:{text:"",translatable:!1},bold:!0}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査数（{date}参考値（3日間移動平均））",{date:t.date})))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["検査数"].toLocaleString(),unit:{text:"件.reports",translatable:!0},bold:!0}})],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},648:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(514),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(594),d=n(16);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{class:t.$style.container},[t.items["ワクチン接種状況"]["3回接種"]?n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("3回接種")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["ワクチン接種状況"]["3回接種"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)]):t._e(),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("2回接種")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["ワクチン接種状況"]["2回接種"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("1回接種")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["ワクチン接種状況"]["1回接種"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("接種なし")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["ワクチン接種状況"]["接種なし"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("不明")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["ワクチン接種状況"]["不明"].toLocaleString(),unit:{text:"人",translatable:!0},bold:!0}})],1)])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},682:function(t,e,n){"use strict";var o=n(555),r=n.n(o);n.d(e,"default",(function(){return r.a}))},683:function(t,e,n){var o=n(45)(!1);o.push([t.i,".section_kXl0W{margin:10px 0 20px}.section_kXl0W h4{color:#4d4d4d;margin:5px 0 10px;font-weight:400;font-size:1.6rem}.frame_qz\\+6s{margin-bottom:20px}.link_qVZi3{display:flex;margin:16px 0;font-size:1.4rem}",""]),o.locals={section:"section_kXl0W",frame:"frame_qz+6s",link:"link_qVZi3"},t.exports=o},760:function(t,e,n){"use strict";n.r(e);var o=n(62),r=n(0),l=n(107),c=n(454),d=n(647),f=n(648),v=r.default.extend({components:{AppLink:l.default,DataView:c.default,InfectionStatus:d.default,VaccinationStatus:f.default},data:function(){return{mdiChevronRight:o.e}},computed:{statuses:function(){return this.infectionMedicalCareSummary.data},date:function(){return this.infectionMedicalCareSummary.date},publicationDate:function(){return this.infectionMedicalCareSummary.data["日付"]},statisticDate:function(){return this.infectionMedicalCareSummary.data["検査統計日時"]},infectionMedicalCareSummary:function(){return this.$store.state.infectionMedicalCareSummary}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),_=n(682),m=n(16),x=n(73),w=n.n(x),h=n(499),S=n(436);var component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard InfectionSummaryCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("{date}の患者の発生状況等",{date:t.formatDate(t.publicationDate)}),"title-id":"infection-summary",date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む"))+"\n          ")])])]},proxy:!0}])},[n("section",{class:t.$style.section},[n("infection-status",{attrs:{"aria-label":t.$t("患者の発生状況等"),items:t.statuses,date:t.formatDate(t.statisticDate)}})],1),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("ワクチン接種状況")))]),t._v(" "),n("vaccination-status",{attrs:{"aria-label":t.$t("ワクチン接種状況"),items:t.statuses}})],1),t._v(" "),n("div",{class:t.$style.link},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"}},[t._v("\n          "+t._s(t.$t("新型コロナウイルスに関連した患者の発生について（過去1週間分）"))+"\n        ")])],1)])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;w()(component,{VCol:h.a,VIcon:S.a})}}]);