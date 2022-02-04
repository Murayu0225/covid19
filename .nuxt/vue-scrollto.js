import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"duration":1000,"offset":-72})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}
