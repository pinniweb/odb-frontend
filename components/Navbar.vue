<template>
  <b-container>
    <b-navbar
      class="px-2 px-md-0 py-0"
    >
      <b-navbar-brand to="/">
        <h1>
          <span class="d-none">
            Office du Bâtiment
          </span>
          <img
            src="/images/logo/black.png"
            alt="Office du batiment"
            width="190px"
          >
        </h1>
      </b-navbar-brand>
      <b-navbar-nav
        ref="menu"
        class="d-none d-lg-flex flex-lg-row flex-grow-1 justify-content-center"
      >
        <b-nav-item
          :to="{ name: 'index' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          <i class="fad fa-home-lg-alt" />
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'agence-communication-agen' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          Communication
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'pack-communication' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          Com'pack
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'gestion-entreprise' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          Gestion
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'contact' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          Contact
        </b-nav-item>
      </b-navbar-nav>
      <b-button
        variant="primary"
        pill
        class="d-none d-lg-inline-block ml-4"
        href="https://app.officedubatiment.com"
      >
        Espace client
      </b-button>
      <b-button
        variant="link"
        pill
        class="d-inline-block d-lg-none ml-4"
        href="https://app.officedubatiment.com"
      >
        <i class="fad fa-user-circle fa-2x" />
      </b-button>
      <b-button
        v-b-toggle.sidebar
        class="d-inline-block d-lg-none ml-auto"
        variant="link"
      >
        <i class="fad fa-bars fa-2x" />
      </b-button>
      <b-sidebar
        id="sidebar"
        right
        bg-variant="dark"
        text-variant="white"
        backdrop
      >
        <div class="h-100 d-flex flex-column justify-content-between">
          <b-nav vertical>
            <b-nav-item
              :to="{ name: 'index' }"
              exact
              exact-active-class="text-primary"
            >
              <i class="fad fa-home-lg-alt" />
            </b-nav-item>
            <b-nav-item
              :to="{ name: 'agence-communication-agen' }"
              exact
              exact-active-class="text-primary"
            >
              Communication
            </b-nav-item>
            <b-nav-item
              :to="{ name: 'pack-communication' }"
              exact
              exact-active-class="text-primary"
            >
              Com'pack
            </b-nav-item>
            <b-nav-item
              :to="{ name: 'gestion-entreprise' }"
              exact
              exact-active-class="text-primary"
            >
              Gestion
            </b-nav-item>
            <b-nav-item
              :to="{ name: 'contact' }"
              exact
              exact-active-class="text-primary"
            >
              Contact
            </b-nav-item>
          </b-nav>
        </div>
      </b-sidebar>
    </b-navbar>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import VueScrollTo from 'vue-scrollto'
export default {
  computed: {
    ...mapGetters('pages', { header: 'header' }),
    currentPage () {
      return this.$route.name
    }
  },
  methods: {
    scrollTo (sectionId) {
      VueScrollTo.scrollTo(sectionId, 500, {
        offset: -80
      })
    }
  }
}
</script>
