(window.webpackJsonp=window.webpackJsonp||[]).push([[68,59],{503:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5ddfda49",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n(503)},525:function(t,e,n){var r=n(45)(!1);r.push([t.i,".PageHeader[data-v-b0361594]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-b0361594]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-b0361594]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-b0361594]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-b0361594]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-b0361594]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-b0361594]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-b0361594]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=r},530:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(172),d=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),l=(n(524),n(16)),c=n(73),_=n.n(c),v=n(432),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"b0361594",null);e.default=component.exports;_()(component,{VIcon:v.a})},694:function(t,e,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("8fc537ba",content,!0,{sourceMap:!1})},759:function(t,e,n){"use strict";n(694)},760:function(t,e,n){var r=n(45)(!1);r.push([t.i,".Contacts-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.Contacts-Card-Table{width:100%;border-collapse:collapse}.Contacts-Card-Table th{padding:1em 0;font-size:1.4rem!important}.Contacts-Card-Table td{padding:1em 16px;font-size:1.4rem}.Contacts-Card-Table .importantContact{font-weight:600;font-size:1.6rem!important}.Contacts-Card-Table .bold{font-weight:700}.Contacts-Card-Table .tel ul{list-style:none;padding:0}.Contacts-Card-Table .tel li{margin:8px 0}@media screen and (min-width:769px){.Contacts-Card-Table th.tel{width:35%}.Contacts-Card-Table th,.Contacts-Card-Table tr:not(:last-child){border:none;border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table tr:last-child{border:none}}@media screen and (max-width:768px){.Contacts-Card-Table thead{display:none}.Contacts-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr .content{font-weight:600;border-bottom:none!important;padding-top:12px;padding-bottom:8px}.Contacts-Card-Table tbody tr .bureau{border-bottom:none!important}.Contacts-Card-Table tbody tr .tel{padding-bottom:12px}.Contacts-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table td{display:block}}.Contacts-Card-Table p.caution{margin:0;font-size:1.2rem}",""]),t.exports=r},941:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(107),d=n(530),l=r.default.extend({components:{PageHeader:d.default,AppLink:o.default},data:function(){return{pc:!0}},head:function(){return{title:this.$t("お問い合わせ先一覧")}},computed:{tableAttrs:function(){return this.pc?{}:{role:"presentation"}},headingAttrs:function(){return this.pc?{}:{role:"heading","aria-level":"3"}}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.pc=window.innerWidth>768}}}),c=(n(759),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Contacts",attrs:{"aria-labelledby":"pageHeader","aria-describedby":"contactsCardTable"}},[n("page-header",{attrs:{id:"pageHeader",title:t.$t("お問い合わせ先一覧")}}),t._v(" "),n("div",{staticClass:"Contacts-Card"},[n("table",t._b({staticClass:"Contacts-Card-Table",attrs:{id:"contactsCardTable","aria-describedby":"pageHeader"}},"table",t.tableAttrs,!1),[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("お問い合わせ内容"))+"\n          ")]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("担当名")))]),t._v(" "),n("th",{staticClass:"text-center tel",attrs:{scope:"col"}},[t._v(t._s(t.$t("電話番号")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("相模原市 新型コロナウイルス感染症相談センター"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{staticClass:"importantContact",attrs:{href:"tel:042-769-9237"}},[t._v("042-769-9237")]),n("br"),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("24時間対応"))+"\n            ")]),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。"))+"\n            ")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルスワクチン接種に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("相模原市 新型コロナウイルス接種コールセンター"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("li",{staticClass:"bold"},[t._v("\n                "+t._s(t.$t("すべての電話番号から予約受付終了等の自動音声案内が確認できます。"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("外国人専用ダイヤル（対応言語：英語、中国語、韓国語）"))),n("br"),n("a",{attrs:{href:"tel:042-767-2104"}},[t._v("042-767-2104")])]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n                "+t._s(t.$t("全て、午前8時30分～午後8時（土・日曜日は午後7時まで）"))+"\n              ")]),t._v(" "),n("p",{staticClass:"caution"},[n("i18n",{attrs:{path:"詳しくは、{link}をご参照ください。"},scopedSlots:t._u([{key:"link",fn:function(){return[n("app-link",{attrs:{to:t.$t("https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/1024262/1022745.html")}},[t._v("\n                      "+t._s(t.$t("こちら"))+"\n                    ")])]},proxy:!0}])})],1)])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("かかりつけ医がない等受診に困った場合"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("神奈川県 発熱等診療予約センター"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("ul",[n("li",[t._v("\n                "+t._s(t.$t("相模原市にお住まいの方"))),n("br"),n("a",{attrs:{href:"tel:042-769-9237"}},[t._v("042-769-9237")])]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n                "+t._s(t.$t("24時間（毎日）"))+"\n              ")]),t._v(" "),n("p",{staticClass:"caution"},[n("i18n",{attrs:{path:"相模原市以外にお住まいの方は、{kanagawa}をご参照ください。"},scopedSlots:t._u([{key:"kanagawa",fn:function(){return[n("app-link",{attrs:{to:t.$t("https://www.pref.kanagawa.jp/docs/ga4/covid19/support.html")}},[t._v("\n                      "+t._s(t.$t("こちら"))+"\n                    ")])]},proxy:!0}])})],1)])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("本サイトの管理・運営に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v("\n            "+t._s(t.$t("本サイト製作者直通メールアドレス（個人）"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"mailto:contact@sagamihara-stopcovid19.jp"}},[t._v("contact@sagamihara-stopcovid19.jp")]),n("br"),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("お問い合わせの際は、氏名と共にお問い合わせ内容を記入していただきますようお願いいたします。"))+"\n            ")])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"tel:050-5445-4357"}},[t._v("050-5445-4357")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"tel:050-5445-4358"}},[t._v("050-5445-4358")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"tel:050-5445-9837"}},[t._v("050-5445-9837")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"tel:050-5445-9838"}},[t._v("050-5445-9838")])])}],!1,null,null,null);e.default=component.exports}}]);