<template>
  <b-modal
    id="modal-cookies"
    title="Gestion des cookies"
    title-class="h1 text-center text-primary"
    header-class="border-0 justify-content-center"
    footer-class="border-0 justify-content-center"
    ok-title="J'accepte"
    cancel-title="Je refuse"
    cancel-variant="outline-primary"
    centered
    no-fade
    no-close-on-esc
    no-close-on-backdrop
    hide-header-close
    @ok="saveCookies"
    @cancel="saveCookies"
  >
    <p class="mb-4 text-center">
      Nous utilisons les cookies afin de fournir les services et fonctionnalités proposés sur notre site et afin d’améliorer l’expérience de nos utilisateurs. Les cookies sont des données qui sont téléchargés ou stockés sur votre ordinateur ou sur tout autre appareil.
    </p>
    <p class="mb-4 text-center">
      En cliquant sur <span class="text-primary font-weight-bold">J’accepte</span>, vous acceptez l’utilisation des cookies. Vous pourrez toujours les désactiver ultérieurement. Si vous supprimez ou désactivez nos cookies, vous pourriez rencontrer des interruptions ou des problèmes d’accès au site.
    </p>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('pages', { cookies: 'cookies' })
  },
  mounted () {
    if (this.cookies.modal) {
      this.$bvModal.show('modal-cookies')
    }
  },
  methods: {
    ...mapActions('pages', { setCookies: 'setCookies' }),
    saveCookies (event) {
      if (event.trigger === 'ok') {
        this.setCookies({
          modal: false,
          store: true
        })
      } else {
        this.setCookies({
          modal: false,
          store: false
        })
      }
    }
  }
}
</script>
