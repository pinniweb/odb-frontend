<template>
  <div class="content home flex-grow-1">
    <section class="banner bg-white">
      <b-container>
        <b-row>
          <b-col
            md="7"
          >
            <h1 class="h2 text-primary mb-4">
              L’office du bâtiment
            </h1>
            <p class="lead font-weight-medium">
              Après 15 ans au service des entreprises du BTP, OFFICE DU BATIMENT est né en 2020 au carrefour du <strong>Tarn et Garonne</strong>, du <strong>Lot et Garonne</strong> et du <strong>Gers</strong> et se positionne comme un <strong>interlocuteur privilégié</strong> des professionnels du secteur.
            </p>
            <p class="lead font-weight-medium">
              Qu’il s'agisse d’<strong>améliorer la visibilité et la notoriété</strong> de votre PME, de promouvoir de courageux créateurs ou d'épauler de vaillants artisans dans leur <strong>gestion au quotidien</strong>, nous mettons chaque jour toute notre énergie pour proposer l'accompagnement le plus adapté à chacun des profils qui nous sollicite.
            </p>
            <p class="lead font-weight-medium">
              Parce que votre temps est précieux, nous sommes le point d'ancrage de votre <strong>communication</strong>, l'interlocuteur unique qui centralisera la mise en œuvre de toutes vos actions.
            </p>
            <b-button
              variant="primary"
              size="lg"
              pill
            >
              Contactez-nous
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="communication">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="h4 text-center text-primary mb-5">
              Une agence de communication spécialisée dans le bâtiment
            </h2>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col
            md="6"
            class="d-flex align-items-center justify-content-center"
          >
            <img
              class="bg-white p-2 rounded shadow"
              src="/images/home/communication.png"
              width="100%"
            >
          </b-col>
          <b-col
            md="6"
          >
            <div class="ml-4">
              <p class="lead font-weight-medium text-justify">
                <strong>Création ou refonte de logo</strong>, création de site internet, <strong>réalisation et impression de plaquettes commerciales</strong>, flyers, cartes de visite... chacun de ces produits sera conçu sur mesure et correspondra à l'image que vous voudrez transmettre de votre entreprise.
              </p>
              <p class="lead font-weight-medium text-justify">
                Réalisation de panneaux enseigne, <strong>panneaux publicitaires</strong> (« chantier réalisé », « permis de construire », fléchages chantier...), <strong>banderoles</strong> ou habillage de véhicules, votre visibilité sera la clé de votre notoriété et de votre pérennité.
              </p>
              <p class="lead font-weight-medium mb-0 text-justify">
                Vous souhaitez distribuer des cadeaux ou goodies à vos clients, des vêtements aux couleurs de la société à vos collaborateurs, nous personnalisons pour vous ces multiples outils de fidélisation.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-flex justify-content-center">
            <b-button
              variant="primary"
              size="lg"
              pill
            >
              Découvrez notre agence
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white">
      <b-container>
        <b-row>
          <b-col
            offset-md="2"
            md="8"
          >
            <h2 class="h4 text-center mb-4">
              Notre formule d’accompagnement aux créateurs d’entreprise : <span class="text-primary">Com'pack</span>
            </h2>
            <p class="lead text-center font-weight-medium mb-5">
              Parce que nous avons tous été un jour dans la peau du <strong>créateur</strong> et que la concurrence est rude, nous avons créé une offre spécialement destinée aux entrepreneurs qui se lancent dans l'aventure.
            </p>
            <b-card
              no-body
              class="bg-light border-0 shadow pt-5 mb-5"
            >
              <div class="h4 mb-4 text-center">
                Offre spéciale créateurs
              </div>
              <div class="h2 text-center text-primary">
                299€ HT
              </div>
              <div class="text-center font-weight-medium font-italic mb-5">
                Soit 358.80€ TTC
              </div>
              <b-list-group flush>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  Votre identité visuelle
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad bg-light fa-asterisk text-primary mr-2" />
                  100 cartes de visite
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  1 tampon encreur 5 lignes
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  2 autocollants véhicule 50*30 cm
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  5 panneaux Akilux 60*40 cm
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  5 T-shirts imprimés coeur + dos
                </b-list-group-item>
                <b-list-group-item
                  class="lead bg-light font-weight-medium"
                >
                  <i class="fad fa-asterisk text-primary mr-2" />
                  Votre page Google My Business
                </b-list-group-item>
              </b-list-group>
            </b-card>
            <b-button
              variant="primary"
              size="lg"
              pill
              block
              :to="{ name: 'pack-communication' }"
            >
              Commandez votre pack
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="gestion">
      <b-container>
        <b-row>
          <b-col
            md="6"
          >
            <h2 class="h4 text-primary mb-4">
              Gestion entreprise
            </h2>
            <p class="lead font-weight-medium">
              Visiter les clients, rédiger les devis, planifier les appros, effectuer le chantier, facturer, se faire payer... <strong>Gérer une petite entreprise</strong> du bâtiment est loin d’être de tout repos.
            </p>
            <p class="lead font-weight-medium">
              Nous avons donc voulu dédier une partie de nos ressources à accompagner ces artisans à souffler une fois la journée de chantier terminée.
            </p>
            <p class="lead font-weight-medium mb-4">
              Une méthode ainsi qu’une application ont été développées afin de soulager nos clients de leurs <strong>impératifs administratifs</strong> tout en les aidant à piloter au plus près leur trésorerie.
            </p>
            <b-button
              variant="primary"
              size="lg"
              pill
              :to="{ name: 'gestion-entreprise' }"
            >
              Plus de détails
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white">
      <b-container>
        <b-row>
          <b-col
            md="6"
          >
            <div
              class="map"
            >
              <i class="fad fa-circle fa-2x text-primary" />
            </div>
          </b-col>
          <b-col
            offset-md="1"
            md="5"
            class="d-flex flex-column justify-content-center"
          >
            <h2 class="h4 mb-4 text-primary">
              Notre rayon d'action
            </h2>
            <p class="lead font-weight-medium">
              Nos bureaux installés à <strong>Valence d'Agen (Tarn et Garonne)</strong> nous permettent de rayonner sur <strong>Montauban, Moissac, Castelsarrasin, Montech</strong> et dans les départements limitrophes comme le <strong>Lot et Garonne</strong> dans les villes d'<strong>Agen, Villeneuve sur Lot, Marmande, Nérac, Tonneins</strong> ainsi que dans le <strong>Gers</strong> à <strong>Auch, Lectoure, Fleurance, Condom, Eauze.</strong>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      v-if="posts.length > 0"
    >
      <b-container>
        <b-row class="mb-4">
          <b-col class="d-flex align-items-center justify-content-between">
            <h2 class="h4 mb-0">
              Les actualités
            </h2>
            <b-button
              variant="primary"
              pill
              to="/actualites"
              size="lg"
            >
              Afficher plus d'actualités
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="(post, index) in posts"
            :key="index"
            md="4"
          >
            <post-card
              :post="post"
            />
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
import { actions } from '~/mixins/actions'

export default {
  mixins: [actions],
  data: () => ({
    posts: []
  }),
  async fetch () {
    this.posts = await this.findPosts({
      limit: 3,
      sort: 'createdAt:desc'
    })
  },
  head () {
    return {
      title: 'Office du Bâtiment: gestion administrative et commerciale des entreprises du bâtiment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Spécialisée dans l\'accompagnement des professionnels du BTP, OFFICE DU BATIMENT est une agence de communication de proximité située au cœur du Sud Ouest, entre Agen, Montauban et Auch.'
        }
      ]
    }
  }
}
</script>
