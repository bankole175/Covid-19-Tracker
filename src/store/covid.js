export default {
  namespaced: true,
  state: {
    affectedState: {},
  },

  mutations: {
    setAffectedState(state, covid) {
      state.affectedState = covid;
    },
  },
};
