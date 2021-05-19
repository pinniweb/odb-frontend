<template>
  <div
    class="content compack flex-grow-1"
  >
    <section class="banner">
      <b-container>
        <b-row>
          <b-col
            md="6"
            class="d-flex flex-column justify-content-center"
          >
            <div class="h4 mb-4">
              Personne ne peut le nier, un jour il a bien fallu commencer&nbsp;!
            </div>
            <p class="lead font-weight-medium">
              Et lorsqu’on se lance, on n'est pas ou peu connu, il faut donc se donner toutes les chances de se faire remarquer.
            </p>
            <p class="lead font-weight-medium">
              A l'<strong>OFFICE DU BATIMENT</strong>, nous sommes aussi conscients que les budgets au démarrage ne sont pas extensibles, c'est pour cela que nous avons créé <strong>COM'PACK&nbsp;!</strong>
            </p>
            <p class="lead font-weight-medium">
              Le kit de communication conçu pour les créateurs de micro et TPE à un <strong>rapport qualité/prix IMBATTABLE&nbsp;!</strong>
            </p>
            <p class="lead font-weight-medium mb-0">
              Mieux, nous nous déplaçons vous rencontrez dans un rayon de 100 kms autour de <strong>Valence d'Agen, dans les départements du Tarn et Garonne (Montauban, Moissac, Castelsarrasin, Montech), Lot et Garonne (Agen, Villeneuve sur Lot, Marmande, Nérac, Tonneins) et Gers (Auch, fleurance, Lectoure, Condom, Eauze)</strong>
            </p>
          </b-col>
          <b-col
            md="6"
          >
            <b-card
              no-body
              class="border-0 shadow h-100 py-5"
            >
              <div class="h4 mb-4 text-white text-center">
                Offre spéciale créateurs
              </div>
              <div class="h2 text-center text-primary">
                299€ HT
              </div>
              <div class="text-center text-white font-weight-medium font-italic mb-5">
                Soit 358.80€ TTC
              </div>
              <b-list-group flush>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  Votre identité visuelle
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  100 cartes de visite
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  1 tampon encreur 5 lignes
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  2 autocollants véhicule 50*30 cm
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  5 panneaux Akilux 60*40 cm
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  5 T-shirts imprimés coeur + dos
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  Votre page Google My Business
                </b-list-group-item>
                <b-list-group-item
                  class="font-weight-medium bg-transparent text-white lead"
                >
                  Signature mail offerte
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-dark">
      <b-container>
        <b-row>
          <b-col>
            <b-form
              novalidate
              autocomplete="off"
              @submit.prevent="handleForm()"
            >
              <h3 class="title text-white pb-4 mb-4">
                Votre entreprise
              </h3>
              <b-form-row>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="company"
                    label="Nom de l'entreprise*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-company"
                  >
                    <b-form-input
                      id="input-company"
                      v-model="form.company"
                      :state="$v.form.company.$invalid && $v.form.$dirty ? !$v.form.company.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-company-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-company-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="activity"
                    label="Activité*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-activity"
                  >
                    <b-form-input
                      id="input-activity"
                      v-model="form.activity"
                      :state="$v.form.activity.$invalid && $v.form.$dirty ? !$v.form.activity.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-activity-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-activity-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="lastname"
                    label="Votre nom*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-lastname"
                  >
                    <b-form-input
                      id="input-lastname"
                      v-model="form.lastname"
                      :state="$v.form.lastname.$invalid && $v.form.$dirty ? !$v.form.lastname.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-lastname-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-lastname-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="firstname"
                    label="Prénom*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-firstname"
                  >
                    <b-form-input
                      id="input-firstname"
                      v-model="form.firstname"
                      :state="$v.form.firstname.$invalid && $v.form.$dirty ? !$v.form.firstname.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-firstname-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-firstname-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group
                id="address"
                label="Adresse*"
                label-class="text-white font-weight-bold pl-1"
                label-for="input-address"
              >
                <b-form-input
                  id="input-address"
                  v-model="form.address"
                  :state="$v.form.address.$invalid && $v.form.$dirty ? !$v.form.address.$error : null"
                  type="text"
                  :disabled="loading"
                  aria-describedby="input-address-feedback"
                  trim
                  size="lg"
                />
                <b-form-invalid-feedback id="input-address-feedback">
                  Ce champ est obligatoire
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-row>
                <b-col
                  md="4"
                >
                  <b-form-group
                    id="zip"
                    label="Code postal*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-zip"
                  >
                    <b-form-input
                      id="input-zip"
                      v-model="form.zip"
                      :state="$v.form.zip.$invalid && $v.form.$dirty ? !$v.form.zip.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-zip-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-zip-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col
                  md="8"
                >
                  <b-form-group
                    id="city"
                    label="Ville*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-city"
                  >
                    <b-form-input
                      id="input-city"
                      v-model="form.city"
                      :state="$v.form.city.$invalid && $v.form.$dirty ? !$v.form.city.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-city-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-city-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="phone"
                    label="Téléphone*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-phone"
                  >
                    <b-form-input
                      id="input-phone"
                      v-model="form.phone"
                      :state="$v.form.phone.$invalid && $v.form.$dirty ? !$v.form.phone.$error : null"
                      type="text"
                      :disabled="loading"
                      aria-describedby="input-phone-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-phone-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col
                  md="6"
                >
                  <b-form-group
                    id="email"
                    label="Email*"
                    label-class="text-white font-weight-bold pl-1"
                    label-for="input-email"
                  >
                    <b-form-input
                      id="input-email"
                      v-model="form.email"
                      :state="$v.form.email.$invalid && $v.form.$dirty ? !$v.form.email.$error : null"
                      type="email"
                      :disabled="loading"
                      aria-describedby="input-email-feedback"
                      trim
                      size="lg"
                    />
                    <b-form-invalid-feedback id="input-email-feedback">
                      Ce champ est obligatoire
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group
                id="creation-date"
                label="Date de création"
                label-class="text-white font-weight-bold pl-1"
                label-for="input-creation-date"
              >
                <b-form-datepicker
                  id="input-creation-date"
                  v-model="form.creationDate"
                  variant="primary"
                  nav-button-variant="primary"
                  dark
                  v-bind="labels[locale] || {}"
                  :readonly="true"
                  :locale="locale"
                  :start-weekday="weekday"
                  size="lg"
                />
              </b-form-group>
              <h3 class="title text-white pb-4 mb-4 mt-5">
                Prestations complémentaires (hors COM'PACK)
              </h3>
              <b-form-row class="mb-5">
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.website"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Site internet
                    </span>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.banner"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Banderoles
                    </span>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.commercialSign"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Plaquette commerciale / technique
                    </span>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.commercialBrochure"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Enseigne (dibond, lumineuse ...)
                    </span>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.flyers"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Flyers
                    </span>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  md="4"
                  class="mb-4"
                >
                  <b-form-checkbox
                    v-model="form.goodies"
                    switch
                  >
                    <span class="font-weight-bold text-white">
                      Goodies
                    </span>
                  </b-form-checkbox>
                </b-col>
              </b-form-row>
              <b-form-group
                id="dimension"
                label="Dimension de panneaux spécifiques"
                label-class="text-white font-weight-bold pl-1"
                label-for="input-dimension"
              >
                <b-form-textarea
                  id="input-dimension"
                  v-model="form.dimension"
                  :disabled="loading"
                  trim
                  size="lg"
                />
              </b-form-group>
              <b-form-group
                id="other"
                label="Autres"
                label-class="text-white font-weight-bold pl-1"
                label-for="input-other"
              >
                <b-form-textarea
                  id="input-other"
                  v-model="form.other"
                  :disabled="loading"
                  trim
                  size="lg"
                />
              </b-form-group>
              <div class="my-5">
                <b-form-checkbox
                  id="input-terms"
                  v-model="terms"
                  class="mb-2 text-white"
                  :state="$v.terms.$invalid && $v.terms.$dirty ? !$v.terms.$error : null"
                  :disabled="loading"
                >
                  J’accepte que la société OFFICE DU BATIMENT traite les données recueillies afin qu’elle puisse me recontacter.
                </b-form-checkbox>
                <small class="font-italic text-white">
                  Les informations d’identité recueillies sur ce formulaire sont enregistrées dans un fichier informatisé et seront utilisées par SAS OFFICE DU BATIMENT dans le seul but de recontacter les sociétés qui le souhaitent. Les données sont conservées pendant le temps nécessaire au processus de contact, présentation des services et prise de décision du prospect quant à l’éventuelle collaboration. Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, reportez-vous aux
                  <router-link to="/mentions-legales">
                    mentions légales.
                  </router-link>
                </small>
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <b-button
                  variant="primary"
                  :disabled="loading"
                  type="submit"
                  size="lg"
                  block
                >
                  <b-spinner
                    v-if="loading"
                    variant="white"
                    small
                    type="grow"
                  />
                  <span v-else>Envoyer</span>
                </b-button>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      id="section-5"
      class="section contact bg-dark"
    >
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="8">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <p class="lead text-center text-white font-weight-medium mb-5">
                Pour que chaque entreprise puisse bénéficier des services à sa mesure, nous vous invitons à vous rapprocher de notre service commercial afin de vous proposer la solution la plus adaptée à vos besoins.
              </p>
              <b-button
                v-b-modal.modal-contact
                variant="primary"
                pill
                size="lg"
              >
                Contactez-nous
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { actions } from '~/mixins/actions'
export default {
  mixins: [validationMixin, actions],
  data: () => ({
    loading: false,
    terms: false,
    form: {
      compack: true,
      email: null,
      company: null,
      activity: null,
      firstname: null,
      lastname: null,
      address: null,
      zip: null,
      city: null,
      phone: null,
      creationDate: null,
      website: false,
      banner: false,
      commercialSign: false,
      commercialBrochure: false,
      flyers: false,
      goodies: false,
      dimension: null,
      other: null
    },
    weekday: 1,
    locale: 'fr-FR',
    labels: {
      'fr-FR': {
        labelNoDateSelected: 'Sélectionnez une date',
        labelHelp: ''
      }
    }
  }),
  validations: {
    terms: {
      sameAs: sameAs(() => true)
    },
    form: {
      email: {
        required,
        email
      },
      company: {
        required
      },
      activity: {
        required
      },
      firstname: {
        required
      },
      lastname: {
        required
      },
      address: {
        required
      },
      zip: {
        required
      },
      city: {
        required
      },
      phone: {
        required
      }
    }
  },
  head () {
    return {
      title: 'Pack communication | Odb',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Entre Montauban, Agen et Auch, OFFICE DU BATIMENT propose aux créateurs d\'entreprise un pack de communication complet à petit prix afin de les accompagner vers un lancement réussi!'
        }
      ]
    }
  },
  methods: {
    async handleForm () {
      try {
        this.$v.form.$touch()
        this.$v.terms.$touch()
        if (this.$v.form.$anyError || this.$v.terms.$anyError) {
          return
        }
        this.loading = true
        await this.createContact({
          ...this.form
        })
        this.$v.form.$reset()
        this.$v.terms.$reset()
        this.terms = false
        this.form = {
          compack: true,
          email: null,
          company: null,
          activity: null,
          firstname: null,
          lastname: null,
          address: null,
          zip: null,
          city: null,
          phone: null,
          creationDate: null,
          website: false,
          banner: false,
          commercialSign: false,
          commercialBrochure: false,
          flyers: false,
          goodies: false,
          dimension: null,
          other: null
        }
        this.loading = false
        this.$bvToast.toast('Votre demande a été envoyée avec succès, vous serez recontacté sous 48 heures.', {
          title: 'Demande envoyée',
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'success',
          appendToast: true
        })
      } catch (error) {
        this.loading = false
      }
    }
  }
}
</script>
