<template>
  <b-card
    class="card-post shadow h-100 border-0"
    no-body
  >
    <b-card-body
      class="p-0"
    >
      <div
        class="card-post-img rounded-top"
        :style="{ backgroundImage: 'url(' + post.thumbnail.url + ')' }"
      />
      <div class="px-3 pt-2 pb-3">
        <b-card-title class="h5 text-truncate">
          {{ post.title }}
        </b-card-title>
        <b-card-text
          class="card-post-date font-italic font-weight-medium"
        >
          Postée le {{ post.createdAt | createdAt }}
        </b-card-text>
        <b-card-text>
          {{ post.excerpt }}
        </b-card-text>
        <router-link
          class="card-post-link font-weight-bold"
          :to="{ name: 'actualites-slug', params: { slug: post.slug } }"
        >
          Lire la suite
        </router-link>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
export default {
  filters: {
    createdAt (value) {
      return format(new Date(value), 'd MMM yyyy', { locale: fr })
    }
  },
  props: {
    post: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
