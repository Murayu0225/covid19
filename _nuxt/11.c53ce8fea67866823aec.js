(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12,70,77,131],{448:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},452:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("905bdcd6",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(107),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(476),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n(452)},477:function(t,e,n){var o=n(45)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},485:function(t,e,n){"use strict";var o=n(1);n(4),n(209),n(11),n(210);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,d="object"===Object(o.a)(c)?c:{handler:c,options:{}},f=d.handler,_=d.options,v=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,_=null==(o=t._observe)?void 0:o[n.context._uid];if(_){var v=c.some((function(t){return t.isIntersecting}));!f||l.quiet&&!_.init||l.once&&!v&&!_.init||f(c,d,v),v&&l.once?r(t,e,n):_.init=!0}}),_);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},498:function(t,e,n){"use strict";n(105);var o=n(29),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),d=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},499:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(57);var o=n(14),r=(n(4),n(105),n(37),n(27),n(88),n(309),n(53),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(54),n(63),n(18),n(11),n(19),n(20),n(209),n(210),n(89),n(324),n(0)),l=n(212),c=n(29);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=_.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),m=_.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(m)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var h=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=h.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),h.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},529:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("02d82e73",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("b4e0088e",content,!0,{sourceMap:!1})},590:function(t,e,n){"use strict";var o=n(529),r=n.n(o);n.d(e,"default",(function(){return r.a}))},591:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.container_e49uy{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_e49uy,.container_e49uy *{box-sizing:border-box}.container_e49uy ul{padding-left:0}.group_cIpGx{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_i\\+xzw{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_i\\+xzw>span{display:block;font-size:1.4rem}.content_i\\+xzw>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_i\\+xzw>span:last-child{margin-left:10px;text-align:right;flex-shrink:1}.content_i\\+xzw>span:not(:last-child){word-wrap:break-word}.content_i\\+xzw strong{font-size:1.6rem}.content_i\\+xzw span.unit_lUCR1{font-size:1.4rem}.box_bzuZ\\+{display:block;margin-top:3px}.box_bzuZ\\+.parent_S6X0c{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_bzuZ\\+.parent_S6X0c:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_bzuZ\\+.parent_S6X0c>.content_i\\+xzw{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_cIpGx{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_i\\+xzw{padding:.396vw .792vw;border:.238vw solid #008830}.content_i\\+xzw>span{font-size:1.4rem}.content_i\\+xzw>span:first-child{margin-top:.08vw}.content_i\\+xzw>span:last-child{margin-left:10px}.content_i\\+xzw strong{font-size:1.6rem}.content_i\\+xzw span.unit_lUCR1{font-size:1.4rem}.box_bzuZ\\+{margin-top:.238vw}.box_bzuZ\\+.parent_S6X0c{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_bzuZ\\+.parent_S6X0c:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_bzuZ\\+.parent_S6X0c>.content_i\\+xzw{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_cIpGx{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_i\\+xzw{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_i\\+xzw>span{font-size:1.4rem}.content_i\\+xzw>span:first-child{margin-top:.105vw}.content_i\\+xzw>span:last-child{margin-left:10px}.content_i\\+xzw strong{font-size:1.6rem}.content_i\\+xzw span.unit_lUCR1{font-size:1.4rem}.box_bzuZ\\+{margin-top:.313vw}.box_bzuZ\\+.parent_S6X0c{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_bzuZ\\+.parent_S6X0c:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_bzuZ\\+.parent_S6X0c>.content_i\\+xzw{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_cIpGx{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_i\\+xzw{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_i\\+xzw>span{font-size:1.4rem}.content_i\\+xzw>span:first-child{margin-top:.167vw}.content_i\\+xzw>span:last-child{margin-left:10px}.content_i\\+xzw strong{font-size:1.6rem}.content_i\\+xzw span.unit_lUCR1{font-size:1.4rem}.box_bzuZ\\+{margin-top:.5vw}.box_bzuZ\\+.parent_S6X0c{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_bzuZ\\+.parent_S6X0c:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_bzuZ\\+.parent_S6X0c>.content_i\\+xzw{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_e49uy",group:"group_cIpGx",content:"content_i+xzw",unit:"unit_lUCR1",box:"box_bzuZ+",parent:"parent_S6X0c"},t.exports=o},646:function(t,e,n){"use strict";n.r(e);n(105);var o=n(0).default.extend({props:{"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"自宅療養":{type:Number,required:!0},"調査中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}}),r=n(590),l=n(16);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("陽性者数"))+" ("+t._s(t.$t("累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("自宅療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.自宅療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院・療養等調整中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.調査中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院等（療養期間経過を含む）")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},678:function(t,e,n){"use strict";var o=n(554),r=n.n(o);n.d(e,"default",(function(){return r.a}))},679:function(t,e,n){var o=n(45)(!1);o.push([t.i,".button_mU1fJ{margin:20px 0 0;color:#008830!important;text-decoration:none;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_mU1fJ:hover{color:#fff!important;background-color:#008830;color:#fff}.button_mU1fJ:hover>i{color:#fff!important}",""]),o.locals={button:"button_mU1fJ"},t.exports=o},756:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n.n(o),l=n(107),c=n(454),d=n(471),f=n(646),_=n(141);n(4),n(18),n(11),n(19),n(20);function v(data,t){var e;return function n(data){e||(data.attr===t?e=data.value:data.children&&data.children.forEach((function(t){e||n(t)})))}(data),e||0}var x={components:{DataView:c.default,ConfirmedCasesDetailsTable:f.default,AppLink:l.default,OpenDataLink:d.default},data:function(){var t=_.main_summary,e=function(data){return{"陽性者数":v(data,"陽性患者数"),"入院中":v(data,"入院中"),"軽症中等症":v(data,"軽症・中等症"),"重症":v(data,"重症"),"宿泊療養":v(data,"宿泊療養"),"自宅療養":v(data,"自宅療養"),"調査中":v(data,"調査中"),"死亡":v(data,"死亡"),"退院":v(data,"退院")}}(t);return{confirmedCases:e,date:r()(t.children[0].date).format("YYYY/MM/DD HH:mm")}}},m=n(678),w=n(16),y=n(73),h=n.n(y),$=n(499);var component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesDetailsCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「重症」は、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。"))+"\n            "),n("app-link",{attrs:{to:"https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"}},[t._v("\n              "+t._s(t.$t("重症基準の考え方はこちら"))+"\n            ")])],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「入院・療養等調整中」は、当日の新規陽性者及び前日までの陽性者のうち、入院・宿泊療養・自宅療養の調整中や保健所間の移管手続中の陽性者等の人数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("退院者数の把握には一定の期間を要しており、確認次第数値を更新している"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("2022年2月2日以降は、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む"))+"\n          ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000089"}})]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1)),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:("ja"!==t.$i18n.locale?t.$i18n.locale:"")+"/cards/deaths-by-death-date"}},[t._v("\n          "+t._s(t.$t("死亡日別による死亡者数の推移はこちら"))+"\n        ")])],1)],1)],1)],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;h()(component,{VCol:$.a})}}]);