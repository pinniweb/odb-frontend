<template>
  <div class="footer">
    <b-container class="py-5">
      <b-row class="mb-5">
        <b-col
          md="4"
          class="mb-5 mb-md-0 text-center text-md-left"
        >
          <img
            src="/images/logo/white.png"
            alt="Office du batiment"
            width="160px"
            class="mb-4"
          >
          <div class="d-flex flex-column flex-md-row align-items-center mb-4">
            <img
              src="/images/icons/map.png"
              alt="Office du batiment adresse"
              width="18px"
              class="mb-3 mb-md-0"
            >
            <address class="ml-0 ml-md-3 mb-0 font-weight-medium text-white">
              33 Allée du 4 Septembre<br>
              82400 Valence d'Agen
            </address>
          </div>
          <div class="d-flex flex-column flex-md-row align-items-center">
            <img
              src="/images/icons/phone.png"
              alt="Office du batiment tel"
              width="18px"
              class="mb-3 mb-md-0"
            >
            <div class="text-white font-weight-medium ml-0 ml-md-3">
              +33 7 85 83 56 78
            </div>
          </div>
        </b-col>
        <b-col
          md="4"
        >
          <div class="h6 mb-4 text-white text-uppercase text-center text-md-left">
            Legal
          </div>
          <ul class="list-unstyled">
            <li class="text-center text-md-left">
              <router-link
                to="/mentions-legales"
              >
                Mentions légales
              </router-link>
            </li>
            <li class="text-center text-md-left">
              <router-link
                :to="{ name: 'index' }"
              >
                CGU
              </router-link>
            </li>
          </ul>
        </b-col>
        <b-col
          md="4"
        >
          <div class="h6 mb-4 text-white text-uppercase text-center text-md-left">
            Nous suivre
          </div>
          <ul class="list-inline text-center text-md-left">
            <li class="list-inline-item">
              <a
                href="https://www.facebook.com/officedubatiment"
                target="_blank"
              >
                <i class="fab fa-facebook-f fa-2x" />
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a
                href="https://www.linkedin.com/in/petit-laurent-assistance-administrative/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in fa-2x" />
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="bg-primary py-3">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <div class="text-white font-weight-medium">
              © 2021 Office du Bâtiment. Tous droits réservés
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  methods: {
    scrollTo (sectionId) {
      VueScrollTo.scrollTo(sectionId, 500, {
        offset: -80
      })
    }
  }
}
</script>
