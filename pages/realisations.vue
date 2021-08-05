<template>
  <div
    v-if="productions.length"
    class="content flex-grow-1"
  >
    <section
      v-for="production in productions"
      :id="slugify(production.title)"
      :key="production._id"
      class="py-5"
    >
      <b-container>
        <b-row>
          <b-col
            lg="3"
            md="12"
          >
            <h2
              v-if="production.title"
              class="h4"
            >
              {{ production.title }}
            </h2>
            <p
              v-if="production.description"
              class="font-weight-medium"
            >
              {{ production.description }}
            </p>
          </b-col>
          <b-col
            lg="9"
            md="12"
          >
            <Carousel
              :per-page-custom="[[768, 2], [992, 3]]"
            >
              <Slide
                v-for="(image, index) in production.images"
                :key="index"
              >
                <b-card
                  overlay
                  :img-src="image.url"
                  :img-alt="production.title"
                  class="border-0 mx-3"
                />
              </Slide>
            </Carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { kebabCase } from 'lodash'
import { Carousel, Slide } from 'vue-carousel'
import { actions } from '~/mixins/actions'

export default {
  components: {
    Carousel,
    Slide
  },
  mixins: [actions],
  data: () => ({
    productions: []
  }),
  async fetch () {
    this.productions = await this.findProductions({
      limit: -1
    })
  },
  head () {
    return {
      title: 'Nos réalisations | Office du Bâtiment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Implanté au carrefour du Tarn et Garonne, du Lot et Garonne et du Gers, Office du bâtiment allie les compétences d’une agence de communication à une connaissance approfondie des métiers du BTP.'
        }
      ]
    }
  },
  updated () {
    if (this.$route.params && this.$route.params.section) {
      this.$scrollTo('#' + this.$route.params.section, 500)
    }
  },
  methods: {
    slugify (title) {
      return kebabCase(title)
    }
  }
}
</script>
