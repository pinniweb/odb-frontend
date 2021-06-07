<template>
  <div class="lightbox">
    <b-card-group columns>
      <b-card
        v-for="(image, index) in images"
        :key="index"
        class="border-0"
        :img-src="image.url"
        overlay
        @click="showModal(index)"
      />
    </b-card-group>
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
        fade
        background="#ababab"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          v-for="(image, index) in images"
          :key="index"
        >
          <template #img>
            <img
              :src="image.url"
              width="100%"
            >
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
