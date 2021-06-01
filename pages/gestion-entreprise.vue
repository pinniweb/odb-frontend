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
            <div class="caption">
              <h1 class="h3 text-white mb-5">
                Office du Bâtiment,<br> votre partenaire gestion au quotidien
              </h1>
              <p class="lead text-white font-weight-medium">
                Parce que votre temps est précieux, <span class="font-weight-bold">Office du bâtiment</span> vous propose d’externaliser votre gestion administrative et commerciale en vous permettant de vous concentrer sur votre cœur de métier.
              </p>
              <p class="lead text-white font-weight-bold mb-5">
                Déléguez votre gestion, optimisez votre temps!
              </p>
              <b-button
                variant="primary"
                pill
                :to="{ name: 'contact' }"
                size="lg"
              >
                Demandez une démonstration
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
            offset-md="1"
            offset-lg="0"
            md="10"
            lg="4"
            class="d-flex flex-column align-items-center align-items-lg-start justify-content-center"
          >
            <h2 class="title text-primary h4 mb-3">
              Un support digital à la portée de tous
            </h2>
            <p class="lead font-weight-medium">
              Notre expérience auprès des professionnels du bâtiment nous a amené à développer un environnement à la fois convivial et structuré permettant le stockage des données essentielles au fonctionnement de votre entreprise.
            </p>
          </b-col>
          <b-col
            offset-md="2"
            offset-lg="1"
            md="8"
            lg="7"
            class="d-flex align-items-center justify-content-center"
          >
            <img
              src="/images/laptop.png"
              alt=""
              width="400px"
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
            <p class="lead text-center font-weight-medium">
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
              no-body
              class="pt-0 px-1 pb-1 mb-2 mb-md-3 shadow border-0 mx-5"
            >
              <b-card-body class="text-left">
                <i
                  class="mb-3 fad fa-edit fa-2x text-primary"
                />
                <b-card-title
                  title="Suivi et encaissement"
                  title-tag="h5"
                />
                <b-card-text class="font-weight-medium mb-0">
                  De la relance de vos devis à l’encaissement, le suivi commercial de vos chantiers est assuré.
                </b-card-text>
              </b-card-body>
            </b-card>
            <b-card
              no-body
              class="pt-0 px-1 pb-1 mb-2 mb-md-3 shadow border-0"
            >
              <b-card-body class="text-left">
                <i
                  class="mb-3 fad fa-comments fa-2x text-warning"
                />
                <b-card-title
                  title="Proximité et réactivité"
                  title-tag="h5"
                />
                <b-card-text class="font-weight-medium mb-0">
                  Une équipe commerciale de terrain disponible ainsi qu’un chat en ligne sur votre espace.
                </b-card-text>
              </b-card-body>
            </b-card>
            <b-card
              no-body
              class="pt-0 px-1 pb-1 shadow border-0 mx-5"
            >
              <b-card-body class="text-left">
                <i
                  class="mb-3 fad fa-chart-area fa-2x text-success"
                />
                <b-card-title
                  title="Analyse et conseil"
                  title-tag="h5"
                />
                <b-card-text class="font-weight-medium mb-0">
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
            md="6"
            class="d-flex flex-column align-items-start justify-content-center"
          >
            <div class="description">
              <h2 class="title text-primary h4 mb-3">
                Des outils de communication sur mesure
              </h2>
              <p class="lead font-weight-medium">
                Parce qu’une activité pérenne passe aussi par la visibilité de son entreprise, un partenariat a été conclu avec une agence de communication locale.
              </p>
              <p class="lead font-weight-medium">
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
            md="6"
            class="d-flex align-items-center justify-content-center"
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
      title: 'Office du Bâtiment: gestion administrative et commerciale des entreprises du bâtiment',
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
