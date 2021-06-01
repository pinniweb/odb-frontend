<template>
  <div class="lightbox">
    <b-row>
      <b-col
        v-for="(image, index) in images"
        :key="index"
        md="4"
      >
        <div
          class="lightbox-thumbnail"
          :style="{ backgroundImage: 'url(' + image.url + ')' }"
          @click="showModal(index)"
        />
      </b-col>
    </b-row>
    <b-modal
      :id="modalId"
      centered
      hide-header
      hide-footer
      content-class="bg-transparent border-0 text-white"
      size="xl"
    >
      <b-carousel
        v-model="currentSlide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          v-for="(image, index) in images"
          :key="index"
        >
          <template #img>
            <div
              class="lightbox-image"
              :style="{ backgroundImage: 'url(' + image.url + ')' }"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: () => ({
    currentSlide: 0
  }),
  methods: {
    showModal (index) {
      this.$bvModal.show(this.modalId)
      this.currentSlide = index
    }
  }
}
</script>
