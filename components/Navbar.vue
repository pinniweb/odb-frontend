<template>
  <b-container
    class="px-0 mx-0"
    fluid
  >
    <b-navbar
      class="px-2 px-md-4 py-0"
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
          :to="{ name: 'actualites' }"
          class="mx-2"
          exact
          exact-active-class="text-primary"
        >
          Actualités
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
      <div class="navbar-right bg-primary">
        <b-button
          variant="outline-white"
          pill
          class="d-none d-lg-inline-block"
          href="https://app.officedubatiment.com"
        >
          Espace client
        </b-button>
        <b-button
          v-b-toggle.sidebar
          class="d-inline-block d-lg-none"
          variant="link"
        >
          <i class="fad fa-bars fa-2x text-white" />
        </b-button>
      </div>
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
              :to="{ name: 'actualites' }"
              exact
              exact-active-class="text-primary"
            >
              Actualités
            </b-nav-item>
            <b-nav-item
              :to="{ name: 'contact' }"
              exact
              exact-active-class="text-primary"
            >
              Contact
            </b-nav-item>
          </b-nav>
          <div class="d-flex align-items-center justify-content-center p-5">
            <b-button
              variant="outline-white"
              pill
              class="d-inline-block d-lg-none"
              href="https://app.officedubatiment.com"
            >
              Espace client
            </b-button>
          </div>
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
