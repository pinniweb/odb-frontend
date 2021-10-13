<template>
  <div class="content home flex-grow-1">
    <section class="banner d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col
            md="7"
          >
            <div class="caption ml-3 ml-md-0">
              <transition
                appear
                appear-active-class="bounce-in-right-delay-1-enter"
              >
                <div>
                  <h1 class="h2 text-white mb-4">
                    L’office du bâtiment
                  </h1>
                  <p class="lead text-white font-weight-medium">
                    Après 15 ans au service des entreprises du BTP, OFFICE DU BATIMENT est né en 2020 au carrefour du <strong>Tarn et Garonne</strong>, du <strong>Lot et Garonne</strong> et du <strong>Gers</strong> et se positionne comme un <strong>interlocuteur privilégié</strong> des professionnels du secteur.
                  </p>
                  <p class="lead text-white font-weight-medium">
                    Qu’il s'agisse d’<strong>améliorer la visibilité et la notoriété</strong> de votre PME, de promouvoir de courageux créateurs ou d'épauler de vaillants artisans dans leur <strong>gestion au quotidien</strong>, nous mettons chaque jour toute notre énergie pour proposer l'accompagnement le plus adapté à chacun des profils qui nous sollicite.
                  </p>
                  <p class="lead text-white font-weight-medium">
                    Parce que votre temps est précieux, nous sommes le point d'ancrage de votre <strong>communication</strong>, l'interlocuteur unique qui centralisera la mise en œuvre de toutes vos actions.
                  </p>
                </div>
              </transition>
              <transition
                appear
                appear-active-class="bounce-in-left-delay-1-enter"
              >
                <b-button
                  :to="{ name: 'contact' }"
                  variant="primary"
                  size="lg"
                  pill
                >
                  Contactez-nous
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
    <section class="communication">
      <b-container>
        <b-row class="justify-content-center mb-4 mb-md-5">
          <b-col md="6">
            <h2 class="h4 text-center text-primary mx-3 mx-md-0">
              Une agence de communication spécialisée dans le bâtiment
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
          >
            <p class="lead text-center text-md-left font-weight-medium mx-3 mx-md-0">
              <strong>Création ou refonte de logo</strong>, création de site internet, <strong>réalisation et impression de plaquettes commerciales</strong>, flyers, cartes de visite... chacun de ces produits sera conçu sur mesure et correspondra à l'image que vous voudrez transmettre de votre entreprise.
            </p>
            <p class="lead text-center text-md-left font-weight-medium mx-3 mx-md-0">
              Réalisation de panneaux enseigne, <strong>panneaux publicitaires</strong> (« chantier réalisé », « permis de construire », fléchages chantier...), <strong>banderoles</strong> ou habillage de véhicules, votre visibilité sera la clé de votre notoriété et de votre pérennité.
            </p>
            <p class="lead text-center text-md-left font-weight-medium mb-4 mb-md-0 mx-3 mx-md-0">
              Vous souhaitez distribuer des cadeaux ou goodies à vos clients, des vêtements aux couleurs de la société à vos collaborateurs, nous personnalisons pour vous ces multiples outils de fidélisation.
            </p>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="5"
            offset-md="1"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src="/images/home/website-builder.png"
              width="100%"
              alt="site internet"
              class="mb-5 d-none d-md-inline"
            >
            <b-button
              :to="{ name: 'agence-communication-agen' }"
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
    <section
      v-if="productions.length"
      class="bg-white"
    >
      <b-container>
        <b-row class="justify-content-center mb-5">
          <b-col md="6">
            <h2 class="h4 text-center text-primary">
              Nos réalisations
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="(production, index) in productions"
            :key="index"
            md="4"
            class="mb-4"
          >
            <button-icon
              v-animate-onscroll="'animated zoomIn delay-' + (index + 1)"
              class="p-5 icon"
              block
              :color="production.color"
              :link="{ name: 'realisations', params: { section: production.slug } }"
            >
              <slot>
                <i :class="'fad fa-' + production.picto + ' fa-4x mb-3'" />
                <div class="font-weight-bold">
                  {{ production.title }}
                </div>
              </slot>
            </button-icon>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="compack">
      <b-container>
        <b-row>
          <b-col
            offset-md="2"
            md="8"
          >
            <h2 class="h3 text-white text-center mb-4">
              Notre formule d'accompagnement aux créateurs d'entreprise: Com'pack
            </h2>
            <p class="lead text-white text-center font-weight-medium mb-5">
              Parce que nous avons tous été un jour dans la peau du <strong>créateur</strong> et que la concurrence est rude, nous avons créé une offre spécialement destinée aux entrepreneurs qui se lancent dans l'aventure.
            </p>
            <b-card
              v-animate-onscroll="'animated bounceIn delay-4'"
              no-body
              class="border-0 shadow py-5 mb-5"
            >
              <div class="h4 text-white text-center mb-5">
                Offre spéciale créateurs
              </div>
              <div class="d-flex justify-content-center">
                <div class="card-price mb-5">
                  <div class="h2 text-center text-white">
                    399€ HT
                  </div>
                  <div class="text-center text-white font-weight-medium font-italic">
                    Soit 478.80€ TTC
                  </div>
                </div>
              </div>
              <b-list-group flush>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  Votre identité visuelle
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  100 cartes de visite
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  1 tampon encreur 5 lignes
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  2 autocollants véhicule 50*30 cm
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  5 panneaux Akilux 60*40 cm
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  5 T-shirts imprimés coeur + dos
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center"
                >
                  Votre page Google My Business
                </b-list-group-item>
                <b-list-group-item
                  class="lead font-weight-medium text-center bg-primary rounded-0"
                >
                  Signature mail offerte
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
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
          >
            <h2 class="h4 text-primary text-center text-md-left mb-4">
              Gestion entreprise
            </h2>
            <p class="lead font-weight-medium text-center text-md-left">
              Visiter les clients, rédiger les devis, planifier les appros, effectuer le chantier, facturer, se faire payer... <strong>Gérer une petite entreprise</strong> du bâtiment est loin d’être de tout repos.
            </p>
            <p class="lead font-weight-medium text-center text-md-left">
              Nous avons donc voulu dédier une partie de nos ressources à accompagner ces artisans à souffler une fois la journée de chantier terminée.
            </p>
            <p class="lead font-weight-medium mb-4 text-center text-md-left">
              Une méthode ainsi qu’une application ont été développées afin de soulager nos clients de leurs <strong>impératifs administratifs</strong> tout en les aidant à piloter au plus près leur trésorerie.
            </p>
            <div class="d-flex justify-content-center justify-md-start">
              <b-button
                variant="primary"
                size="lg"
                pill
                :to="{ name: 'gestion-entreprise' }"
              >
                Plus de détails
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white">
      <b-container>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
            class="d-flex justify-content-center mb-4 mb-md-0"
          >
            <div
              class="map"
            >
              <i class="fad fa-circle fa-2x text-primary" />
            </div>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            offset-md="1"
            md="5"
            class="d-flex flex-column justify-content-center"
          >
            <h2 class="h4 mb-4 text-primary text-center text-md-left">
              Notre rayon d'action
            </h2>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
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
          <b-col class="d-flex align-items-center justify-content-center justify-content-md-between">
            <h2 class="h4 mb-0">
              Les actualités
            </h2>
            <b-button
              variant="primary"
              pill
              to="/actualites"
              size="lg"
              class="d-none d-md-inline-block"
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
            class="mb-4"
          >
            <post-card
              :post="post"
            />
          </b-col>
        </b-row>
        <b-button
          variant="primary"
          pill
          to="/actualites"
          size="lg"
          block
          class="d-inline-block d-md-none"
        >
          Afficher plus d'actualités
        </b-button>
      </b-container>
    </section>
    <section
      class="contact bg-dark"
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
  </div>
</template>

<script>
import { actions } from '~/mixins/actions'

export default {
  mixins: [actions],
  data: () => ({
    show: false,
    posts: [],
    productions: [],
    currentIndex: null,
    intersect: null,
    threshold: 0.5
  }),
  async fetch () {
    this.posts = await this.findPosts({
      limit: 3,
      sort: 'createdAt:desc'
    })
    this.productions = await this.findProductions({
      limit: 10
    })
  },
  head () {
    return {
      title: 'Agence de communication des entreprises du bâtiment | Office du Bâtiment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Spécialisée dans l\'accompagnement des professionnels du BTP, OFFICE DU BATIMENT est une agence de communication de proximité située au cœur du Sud Ouest, entre Agen, Montauban et Auch.'
        }
      ]
    }
  },
  mounted () {
    this.show = true
  }
}
</script>
