import app from "../main";

export const lang = {
  mutations: {
    SET_LANG(state, payload) {
      app.$i18n.locale = payload;
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit("SET_LANG", payload);
    },
  }
};
