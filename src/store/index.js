import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import { lang } from './i18n.module'

Vue.use( Vuex )

export default new Vuex.Store({
    modules: {
        auth, lang
    },
})
/**Khi chúng ta bắt đầu xác định module Vuex Authentication để chứa
 *  state: {trạng thái, user}
 *  actions: {login, logout, register}
 *  mutations: {loginSuccess, loginFailure, logout, registerSuccess, registerFailure}
 */