<template>
  <div class="d-flex flex-column min-vh-100">
    <fixed-header
      :threshold="Number(threshold)"
      :header-class="headerClass"
      :fixed-class="fixedClass"
      :hide-scroll-up="hideScrollUp"
      @change="updateHeader"
    >
      <header class="header bg-white">
        <navbar />
      </header>
    </fixed-header>
    <nuxt />
    <bottom />
    <cookie />
    <scroll-to-top />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  },
  data: () => ({
    threshold: 100,
    headerClass: '',
    fixedClass: 'fixed-top',
    hideScrollUp: false
  }),
  computed: {
    currentPage () {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions('pages', { setHeader: 'setHeader' }),
    updateHeader (fixed) {
      this.setHeader({
        fixed
      })
    }
  }
}
</script>
