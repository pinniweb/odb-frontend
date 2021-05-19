import createMutation from '~/apollo/mutations/contact/create'

const actions = {
  async create ({ commit }, data) {
    try {
      const client = this.app.apolloProvider.defaultClient
      const response = await client.mutate({
        mutation: createMutation,
        variables: {
          input: {
            data
          }
        }
      })
      const contact = response.data.createContact.contact
      return contact
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default actions
