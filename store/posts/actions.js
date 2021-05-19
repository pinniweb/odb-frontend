import findQuery from '~/apollo/queries/post/find'

const actions = {
  async find ({ commit }, params) {
    try {
      const client = this.app.apolloProvider.defaultClient
      const response = await client.query({
        query: findQuery,
        variables: {
          ...params
        }
      })
      return response.data.posts
    } catch (errors) {
      console.log(errors)
    }
  }
}

export default actions
