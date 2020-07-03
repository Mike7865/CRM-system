/* eslint-disable no-empty */
import firebase from "firebase/app";

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch("getUid");
        // eslint-disable-next-line prettier/prettier
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit("setInfo", info);
      // eslint-disable-next-line prettier/prettier
      } catch (e) {

      }
    }
  },
  getters: {
    info: s => s.info
  }
};
