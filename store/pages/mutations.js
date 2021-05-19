import Cookies from 'js-cookie'

const mutations = {
  setHeader (state, header) {
    for (const [key, value] of Object.entries(header)) {
      state.header = { ...state.header, [key]: value }
    }
  },
  setCookies (state, cookies) {
    state.cookies = cookies
    Cookies.set('cookies', state.cookies)
  }
}

export default mutations
