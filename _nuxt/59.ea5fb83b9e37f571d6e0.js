(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{503:function(e,t,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("5ddfda49",content,!0,{sourceMap:!1})},524:function(e,t,n){"use strict";n(503)},525:function(e,t,n){var d=n(45)(!1);d.push([e.i,".PageHeader[data-v-b0361594]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-b0361594]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-b0361594]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-b0361594]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-b0361594]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-b0361594]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-b0361594]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-b0361594]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),e.exports=d},530:function(e,t,n){"use strict";n.r(t);var d=n(0),r=n(172),o=d.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(e){return"".concat(this.$d(e,"dateTime")," JST")},convertDate:function(e){return Object(r.c)(e)}}}),l=(n(524),n(16)),c=n(73),m=n.n(c),f=n(432),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[e.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),e.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[e._v(e._s(e.$t("最終更新")))]),e._v(" "),n("time",{attrs:{datetime:e.convertDate(e.updatedAt)}},[e._v(e._s(e.formatDate(e.updatedAtAsDate)))])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(e.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[e._v(e._s(e.$t("注釈")))])])])}),[],!1,null,"b0361594",null);t.default=component.exports;m()(component,{VIcon:f.a})}}]);