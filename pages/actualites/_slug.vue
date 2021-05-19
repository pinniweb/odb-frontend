<template>
  <div
    class="content post flex-grow-1 py-4 py-md-5"
  >
    <b-container>
      <b-row>
        <b-col
          v-if="post"
          md="8"
        >
          <img
            :src="post.image.url"
            :alt="post.metaTitle"
            class="rounded-top"
            width="100%"
          >
          <div class="rounded-bottom bg-white p-3 shadow">
            <div
              v-if="post.categories.length > 0"
              class="mb-3"
            >
              <b-button
                v-for="(category, index) in post.categories"
                :key="index"
                :to="{ name: 'actualites-categorie-slug', params: { slug: category.slug } }"
                variant="primary"
                pill
                size="sm"
              >
                {{ category.name }}
              </b-button>
            </div>
            <h1 class="h3 mb-3">
              {{ post.title }}
            </h1>
            <div class="text-primary font-italic font-weight-medium mb-3">
              Postée le {{ post.createdAt | createdAt }}
            </div>
            <div v-html="parseHtml(post.content)" />
          </div>
        </b-col>
        <b-col
          md="4"
        >
          <div
            v-if="relatedPosts.length > 0"
          >
            <div class="h4 text-primary ml-1 mb-3">
              A lire aussi
            </div>
            <b-card
              v-for="(rp, index) in relatedPosts"
              :key="index"
              class="border-0 rounded shadow"
            >
              <h4 class="h5 text-truncate">
                {{ rp.title }}
              </h4>
              <div class="text-primary font-italic font-weight-medium mb-1">
                Postée le {{ rp.createdAt | createdAt }}
              </div>
              <p class="text-truncate mb-1">
                {{ rp.excerpt }}
              </p>
              <router-link
                class="stretched-link font-weight-bold"
                :to="{ name: 'actualites-slug', params: { slug: rp.slug } }"
              >
                Lire la suite
              </router-link>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import showdown from 'showdown'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { actions } from '~/mixins/actions'

export default {
  filters: {
    createdAt (value) {
      return format(new Date(value), 'd MMM yyyy', { locale: fr })
    }
  },
  mixins: [actions],
  async fetch () {
    const posts = await this.findPosts({
      where: {
        slug: this.$route.params.slug
      }
    })
    this.post = posts[0]
    this.metaTitle = this.post.metaTitle
    this.metaDescription = this.post.metaDescription
    this.relatedPosts = await this.findPosts({
      where: {
        _id_ne: this.post._id,
        categories_in: this.post.categories
      },
      sort: 'createdAt:desc'
    })
  },
  data: () => ({
    post: null,
    relatedPosts: [],
    metaTitle: 'Meta title',
    metaDescription: 'Meta description'
  }),
  methods: {
    parseHtml (value) {
      const converter = new showdown.Converter()
      converter.setOption('noHeaderId', true)
      converter.setOption('parseImgDimensions', true)
      return converter.makeHtml(value)
    }
  },
  head () {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        }
      ]
    }
  }
}
</script>
