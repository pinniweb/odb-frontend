<template>
  <b-button
    v-scroll-to="{ el: '.content', offset: header.fixed ? -80 : 0 }"
    class="btn-scroll-to-top"
    :class="{ 'show': header.fixed }"
    variant="primary"
  >
    <i class="fad fa-arrow-up" />
  </b-button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('pages', { header: 'header' })
  }
}
</script>
