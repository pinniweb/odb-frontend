<template>
  <div class="content flex-grow-1 py-4 py-md-5">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="h4 mb-4">
            Les actualités
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(post, index) in posts"
          :key="index"
          md="4"
        >
          <post-card
            :post="post"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { actions } from '~/mixins/actions'

export default {
  mixins: [actions],
  async fetch () {
    this.posts = await this.findPosts({
      sort: 'createdAt:desc'
    })
  },
  data: () => ({
    posts: []
  }),
  head () {
    return {
      title: 'Office du Bâtiment: les actus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Description les actus'
        }
      ]
    }
  }
}
</script>
