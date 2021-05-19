<template>
  <div class="content contact flex-grow-1 bg-light">
    <section class="py-4 py-md-5">
      <b-container>
        <b-row>
          <b-col
            md="5"
          >
            <h1 class="h4 text-primary text-center text-md-left mb-4">
              Contactez-nous
            </h1>
            <p class="lead text-center text-md-left font-weight-bold">
              Une question, une remarque, une information à partager&nbsp;?
            </p>
            <p class="lead text-center text-md-left">
              C’est avec grand plaisir que nous répondrons à vos messages.
            </p>
            <address class="lead text-center text-md-left">
              <span class="font-weight-bold">OFFICE DU BATIMENT</span><br>
              33 allée du 4 septembre<br>
              82400 Valence d'Agen
            </address>
          </b-col>
          <b-col
            md="6"
            offset-md="1"
          >
            <div class="bg-dark rounded shadow p-4">
              <b-form
                novalidate
                autocomplete="off"
                @submit.prevent="handleContact()"
              >
                <b-form-group
                  id="company"
                  label="Votre entreprise*"
                  label-class="text-white font-weight-bold pl-1"
                  label-for="input-company"
                >
                  <b-form-input
                    id="input-company"
                    v-model="contact.company"
                    :state="$v.contact.company.$invalid && $v.contact.$dirty ? !$v.contact.company.$error : null"
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
                <b-form-row>
                  <b-col>
                    <b-form-group
                      id="lastname"
                      label="Votre nom*"
                      label-class="text-white font-weight-bold pl-1"
                      label-for="input-lastname"
                    >
                      <b-form-input
                        id="input-lastname"
                        v-model="contact.lastname"
                        :state="$v.contact.lastname.$invalid && $v.contact.$dirty ? !$v.contact.lastname.$error : null"
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
                  <b-col>
                    <b-form-group
                      id="firstname"
                      label="Votre prénom*"
                      label-class="text-white font-weight-bold pl-1"
                      label-for="input-firstname"
                    >
                      <b-form-input
                        id="input-firstname"
                        v-model="contact.firstname"
                        :state="$v.contact.firstname.$invalid && $v.contact.$dirty ? !$v.contact.firstname.$error : null"
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
                  id="phone"
                  label="Votre téléphone*"
                  label-class="text-white font-weight-bold pl-1"
                  label-for="input-phone"
                >
                  <b-form-input
                    id="input-phone"
                    v-model="contact.phone"
                    :state="$v.contact.phone.$invalid && $v.contact.$dirty ? !$v.contact.phone.$error : null"
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
                <b-form-group
                  id="email"
                  label="Votre email*"
                  label-class="text-white font-weight-bold pl-1"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    v-model="contact.email"
                    :state="$v.contact.email.$invalid && $v.contact.$dirty ? !$v.contact.email.$error : null"
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
                <b-form-group
                  id="message"
                  label="Votre message*"
                  label-class="text-white font-weight-bold pl-1"
                  label-for="input-message"
                >
                  <b-form-textarea
                    id="input-message"
                    v-model="contact.message"
                    :state="$v.contact.message.$invalid && $v.contact.$dirty ? !$v.contact.message.$error : null"
                    rows="3"
                    :disabled="loading"
                    no-resize
                    aria-describedby="input-message-feedback"
                    trim
                    size="lg"
                  />
                  <b-form-invalid-feedback id="input-message-feedback">
                    Ce champ est obligatoire
                  </b-form-invalid-feedback>
                </b-form-group>
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
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data: () => ({
    loading: false,
    contact: {
      company: null,
      firstname: null,
      lastname: null,
      phone: null,
      email: null,
      message: null
    }
  }),
  validations: {
    contact: {
      company: {
        required
      },
      firstname: {
        required
      },
      lastname: {
        required
      },
      phone: {
        required
      },
      email: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  head () {
    return {
      title: 'Contactez-nous | Le Bol',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Le Bol est un projet qui regroupe des cours de poterie en ligne, un blog sur la céramique et une activité de location de matériel de poterie.'
        }
      ]
    }
  },
  methods: {
    ...mapActions('contacts', { createContact: 'create' }),
    async handleContact () {
      try {
        this.$v.contact.$touch()
        if (this.$v.contact.$anyError) {
          return
        }
        this.loading = true
        await this.createContact({
          company: this.contact.company,
          firstname: this.contact.firstname,
          lastname: this.contact.lastname,
          phone: this.contact.phone,
          email: this.contact.email,
          message: this.contact.message,
          compack: false
        })
        this.$v.contact.$reset()
        this.contact = {
          company: null,
          firstname: null,
          lastname: null,
          phone: null,
          email: null,
          message: null
        }
        this.loading = false
        this.$bvToast.toast('Votre message a été envoyé avec succès, une réponse vous sera donnée dans les plus brefs délais.', {
          title: 'Mesage envoyé',
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
