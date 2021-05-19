const actions = {
  setHeader ({ commit }, header) {
    commit('setHeader', header)
  },
  setCookies ({ commit }, cookies) {
    commit('setCookies', cookies)
  }
}
export default actions
