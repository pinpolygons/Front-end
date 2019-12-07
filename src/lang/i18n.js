import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VnMessage from '../lang/vi.json'
import EnMessage from '../lang/en.json'

Vue.use(VueI18n)
const messages = {
    vn: VnMessage,
    en: EnMessage
}

const i18n = new VueI18n({
    locale: 'vn',
    messages,
    fallbackLocale: 'vn',
})

export default i18n;