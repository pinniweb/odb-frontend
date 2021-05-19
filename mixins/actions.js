import { mapActions } from 'vuex'

const actions = {
  methods: {
    ...mapActions('posts', { findPosts: 'find' }),
    ...mapActions('contacts', { createContact: 'create' })
  }
}
export { actions }
