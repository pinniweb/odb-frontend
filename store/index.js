import cookieparser from 'cookieparser'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req, app }) {
    let cookies = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      cookies = parsed.cookies || null
    }
    if (cookies) {
      commit('pages/setCookies', JSON.parse(cookies))
    }
  }
}

export const strict = false
