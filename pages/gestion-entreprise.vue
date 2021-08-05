<template>
  <main
    class="content gestion"
  >
    <section class="banner d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col
            md="6"
          >
            <div class="caption ml-3 ml-md-0">
              <transition
                appear
                appear-active-class="bounce-in-right-enter"
              >
                <div>
                  <h1 class="h3 text-white mb-5">
                    Office du Bâtiment,<br> votre partenaire gestion au quotidien
                  </h1>
                  <p class="lead text-white font-weight-medium">
                    Parce que votre temps est précieux, <span class="font-weight-bold">Office du bâtiment</span> vous propose d’externaliser votre gestion administrative et commerciale en vous permettant de vous concentrer sur votre cœur de métier.
                  </p>
                  <p class="lead text-white font-weight-bold mb-5">
                    Déléguez votre gestion, optimisez votre temps!
                  </p>
                </div>
              </transition>
              <transition
                appear
                appear-active-class="bounce-in-left-delay-1-enter"
              >
                <b-button
                  variant="primary"
                  pill
                  :to="{ name: 'contact' }"
                  size="lg"
                >
                  Demandez une démonstration
                </b-button>
              </transition>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="shape-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          />
        </svg>
      </div>
    </section>
    <section>
      <b-container>
        <b-row class="mb-3 mb-md-5">
          <b-col
            offset-md="1"
            offset-lg="3"
            md="10"
            lg="6"
          >
            <h2 class="h4 mb-4 text-center text-primary">
              Vos documents à portée de clic
            </h2>
            <p class="lead text-center font-weight-medium">
              La digitalisation n’est pas réservée aux grands groupes!<br> <strong>Office du Bâtiment</strong> a conçu un outil simple et efficace pour que vous <strong>artisans et PME</strong>, puissiez également en bénéficier.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInUp delay-1'"
            md="6"
            lg="3"
            class="mb-2 mb-md-3 mb-lg-0"
          >
            <b-card
              no-body
              class="pt-0 px-1 pb-1 h-100 shadow border-0"
            >
              <b-card-body class="text-center">
                <img
                  class="p-4 mb-3"
                  src="/images/gestion/sync.png"
                  height="200px"
                  alt=""
                >
                <b-card-title
                  title="Disponibilité"
                  title-tag="h6"
                />
                <b-card-text class="mb-0 font-weight-medium">
                  Vos documents sont accessibles depuis n’importe quel appareil (pc, tablette ou smartphone) à partir de votre espace client.
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInUp delay-2'"
            md="6"
            lg="3"
            class="mb-2 mb-md-3 mb-lg-0"
          >
            <b-card
              no-body
              class="pt-0 px-1 pb-1 h-100 shadow border-0"
            >
              <b-card-body class="text-center">
                <img
                  class="p-4 mb-3"
                  src="/images/gestion/security.png"
                  height="200px"
                  alt=""
                >
                <b-card-title
                  title="Sécurité"
                  title-tag="h6"
                />
                <b-card-text class="mb-0 font-weight-medium">
                  Nous nous engageons à la totale confidentialité de vos données qui seront stockées sur un cloud sécurisé.
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInUp delay-3'"
            md="6"
            lg="3"
            class="mb-2 mb-md-0"
          >
            <b-card
              no-body
              class="pt-0 px-1 pb-1 h-100 shadow border-0"
            >
              <b-card-body class="text-center">
                <img
                  class="p-4 mb-3"
                  src="/images/gestion/transfer.png"
                  height="200px"
                  alt=""
                >
                <b-card-title
                  title="Transmission comptable"
                  title-tag="h6"
                />
                <b-card-text class="mb-0 font-weight-medium">
                  Une exportation de l’ensemble de vos documents sera transmise mensuellement à votre cabinet comptable.
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInUp delay-4'"
            md="6"
            lg="3"
            class="mb-0"
          >
            <b-card
              no-body
              class="pt-0 px-1 pb-1 h-100 shadow border-0"
            >
              <b-card-body class="text-center">
                <img
                  class="p-4 mb-3"
                  src="/images/gestion/analysis.png"
                  height="200px"
                  alt=""
                >
                <b-card-title
                  title="Outils de suivi"
                  title-tag="h6"
                />
                <b-card-text class="mb-0 font-weight-medium">
                  Différents tableaux de bord vous assureront une lisibilité immédiate de la situation de vos créances client et dettes fournisseur.
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section bg-white"
    >
      <b-container>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            offset-md="1"
            offset-lg="0"
            md="10"
            lg="4"
            class="d-flex flex-column align-items-center align-items-lg-start justify-content-center"
          >
            <h2 class="title text-center text-md-left text-primary h4 mb-3">
              Un support digital à la portée de tous
            </h2>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Notre expérience auprès des professionnels du bâtiment nous a amené à développer un environnement à la fois convivial et structuré permettant le stockage des données essentielles au fonctionnement de votre entreprise.
            </p>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            offset-md="2"
            offset-lg="1"
            md="8"
            lg="7"
            class="d-flex align-items-center justify-content-center"
          >
            <img
              src="/images/laptop.png"
              alt=""
              width="300px"
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section"
    >
      <b-container>
        <b-row>
          <b-col
            md="6"
            offset-md="3"
            class="mb-5"
          >
            <h2 class="text-primary text-center h4">
              Une collaboration évolutive
            </h2>
            <p class="lead text-center font-weight-medium mx-3 mx-md-0">
              Notre objectif est d’être au plus proche de vous afin de garantir un service optimal sur le plan organisationnel mais aussi de pouvoir améliorer vos outils de communication.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
          >
            <b-card
              v-animate-onscroll="'animated bounceInUp delay-1'"
              no-body
              class="pt-0 px-1 pb-1 mb-2 mb-md-3 shadow border-0 mx-0 mx-md-5"
            >
              <b-card-body class="text-center text-md-left">
                <i
                  class="mb-3 fad fa-edit fa-2x text-primary"
                />
                <b-card-title
                  title="Suivi et encaissement"
                  title-tag="h5"
                  class="text-center text-md-left"
                />
                <b-card-text class="font-weight-medium mb-0 text-center text-md-left">
                  De la relance de vos devis à l’encaissement, le suivi commercial de vos chantiers est assuré.
                </b-card-text>
              </b-card-body>
            </b-card>
            <b-card
              v-animate-onscroll="'animated bounceInUp delay-2'"
              no-body
              class="pt-0 px-1 pb-1 mb-2 mb-md-3 shadow border-0"
            >
              <b-card-body class="text-center text-md-left">
                <i
                  class="mb-3 fad fa-comments fa-2x text-warning"
                />
                <b-card-title
                  title="Proximité et réactivité"
                  title-tag="h5"
                  class="text-center text-md-left"
                />
                <b-card-text class="font-weight-medium mb-0 text-center text-md-left">
                  Une équipe commerciale de terrain disponible ainsi qu’un chat en ligne sur votre espace.
                </b-card-text>
              </b-card-body>
            </b-card>
            <b-card
              v-animate-onscroll="'animated bounceInUp delay-3'"
              no-body
              class="pt-0 px-1 pb-1 shadow border-0 mx-0 mx-md-5"
            >
              <b-card-body class="text-center text-md-left">
                <i
                  class="mb-3 fad fa-chart-area fa-2x text-success"
                />
                <b-card-title
                  title="Analyse et conseil"
                  title-tag="h5"
                  class="text-center text-md-left"
                />
                <b-card-text class="font-weight-medium mb-0 text-center text-md-left">
                  L’expertise de nos consultants à votre service.
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section bg-white"
    >
      <b-container>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
            class="d-flex flex-column align-items-start justify-content-center"
          >
            <div class="description">
              <h2 class="title text-center text-md-left text-primary h4 mb-3">
                Des outils de communication sur mesure
              </h2>
              <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
                Parce qu’une activité pérenne passe aussi par la visibilité de son entreprise, un partenariat a été conclu avec une agence de communication locale.
              </p>
              <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
                <strong>Office du Bâtiment</strong> peut ainsi vous proposer diverses prestations comme la conception de site internet, le référencement web, la création graphique (logo par exemple), l’impression sur tous supports, cartes de visite, flyers...
              </p>
              <b-button
                variant="primary"
                pill
                :to="{ name: 'pack-communication' }"
                size="lg"
              >
                Découvrez notre pack de communication
              </b-button>
            </div>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="6"
            class="d-none d-md-flex align-items-center justify-content-center"
          >
            <img
              src="/images/agency.png"
              width="320px"
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
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
                :to="{ name: 'contact' }"
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
  </main>
</template>

<script>
export default {
  data: () => ({
    form: {
      company: 'odb'
    }
  }),
  head () {
    return {
      title: 'Gestion administrative et commerciale des entreprises du bâtiment | Office du Bâtiment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Office du Bâtiment, la polyvalence d\'une secrétaire indépendante, l\'expertise dans le bâtiment en plus ! Découvrez nos solutions de gestion administrative et commerciale entre Agen et Montauban.'
        }
      ]
    }
  }
}
</script>
