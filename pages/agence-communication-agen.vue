<template>
  <main
    class="content communication flex-grow-1"
  >
    <section class="banner d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col
            md="6"
          >
            <div class="caption ml-3 ml-md-3">
              <transition
                appear
                appear-active-class="bounce-in-right-enter"
              >
                <div>
                  <h1 class="h2 text-white mb-4">
                    Agence de communication pour le bâtiment
                  </h1>
                  <p class="lead text-white font-weight-bold">
                    « Bâtisseur de notoriété »
                  </p>
                  <p class="lead text-white font-weight-medium">
                    Une chose est sûre, votre priorité est de signer puis de réaliser vos chantier !
                  </p>
                  <p class="lead text-white font-weight-medium">
                    Cependant, que vous souhaitiez <strong>augmenter votre visibilité</strong> ou simplement <strong>cultiver votre notoriété</strong>, votre communication est un levier à ne pas négliger afin d’éviter les trous dans le planning.
                  </p>
                  <p class="lead text-white font-weight-medium">
                    L’Office du bâtiment allie <strong>les compétences d’une agence de communication</strong> à une connaissance approfondie des besoins de votre secteur.
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
    <section>
      <b-container>
        <b-row class="justify-content-center mb-5">
          <b-col md="6">
            <h2 class="h3 text-primary text-center">
              Les supports numériques de communication
            </h2>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
          >
            <h3 class="h4 mb-4 text-center text-md-left">
              La création graphique
            </h3>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Vous souhaitez changer votre image ou bien lui donner un coup de jeune&nbsp;?
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              <strong>L'équipe graphique</strong> de notre agence est toute dédiée à recréer votre identité visuelle.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Celle-ci sera l’élément principal qui se retrouvera lors de chacune de <strong>vos actions de communication.</strong>
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Elle vous permettra par la suite de designer vos <strong>véhicules,</strong> vos <strong>enseignes,</strong> vos <strong>panneaux</strong> et <strong>banderoles</strong> etc...
            </p>
            <p class="lead font-weight-medium text-center text-md-left mb-5 mb-md-0 mx-3 mx-md-0">
              Il est donc primordial que vous soyez pleinement convaincu des couleurs, du thème et du message envoyé par votre <strong>logo.</strong>
            </p>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="6"
          >
            <b-row
              v-for="production in filter(productions, ['slug', 'logo'])"
              :key="production._id"
            >
              <b-col
                v-for="(image, index) in slice(production.images, 0, 6)"
                :key="index"
                md="6"
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <img
                  :src="image.url"
                  alt=""
                  width="128px"
                >
              </b-col>
              <b-col
                md="12"
                class="d-flex justify-content-center"
              >
                <b-button
                  :to="{ name: 'realisations', params: { section: production.slug } }"
                  variant="primary"
                  size="lg"
                  pill
                >
                  Voir tous les logos
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
            class="d-none d-md-flex align-items-start justify-content-center"
          >
            <b-row
              v-for="production in filter(productions, ['slug', 'website'])"
              :key="production._id"
            >
              <b-col
                v-for="(image, index) in slice(production.images, 0, 6)"
                :key="index"
                md="6"
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <img
                  :src="image.url"
                  alt=""
                  width="128px"
                >
              </b-col>
              <b-col
                md="12"
                class="d-flex justify-content-center"
              >
                <b-button
                  :to="{ name: 'realisations', params: { section: production.slug } }"
                  variant="primary"
                  size="lg"
                  pill
                >
                  Voir tous les sites internet
                </b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="6"
          >
            <h3 class="h4 mb-4 text-center text-md-left">
              Le site internet
            </h3>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Aujourd'hui et plus encore depuis les derniers évènements sanitaires, les consommateurs se tournent inévitablement vers <strong>l'outil internet.</strong> Il est donc, à nos yeux, primordial de se doter d’une vitrine sur le web.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              En effet, que vous souhaitiez <strong>booster votre visibilité</strong> (en cumulant du référencement), <strong>promouvoir votre savoir-faire</strong> ou <strong>attirer les meilleurs profils</strong> de futurs collaborateurs, il est important de démontrer une image sérieuse, sincère et séduisante de votre entreprise.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Fort de notre expertise dans le BTP, notre agence vous conseillera pour <strong>adapter votre projet de site internet</strong> et votre communication à vos besoins et votre secteur d’activité.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Vous serez formé à l'utilisation de celui-ci mais nous resterons également en soutien afin de <strong>maintenir une activité sur votre site.</strong> En alimentant régulièrement en images et contenus, vous serez vus comme une entité dynamique et efficace.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white">
      <b-container>
        <b-row class="justify-content-center mb-5">
          <b-col md="6">
            <h2 class="h3 text-primary text-center">
              Les supports physiques de communication
            </h2>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
          >
            <h3 class="h4 mb-4 text-center text-md-left">
              Les documents papiers
            </h3>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Une communication bien pensée par <strong>documents en format papier</strong> peut avoir un <strong>impact très positif</strong> sur la façon dont vos prospects ou clients vous percevront.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Nous étudierons donc avec vous quel modèle de <strong>carte de visite</strong> vous correspondra le mieux (recto verso, pelliculage, vernis sélectif, effet 3D...) ou s’il est judicieux de réaliser quelques <strong>flyers</strong> ou <strong>triptyques.</strong>
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Nous réalisons également sur demande vos <strong>plaquettes à rabats</strong> qui présenteront votre entreprise, vos prestations et donneront sans aucun doute une toute autre dimension aux devis ou dossiers que vous souhaitez remettre en main propre.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Si besoin, notre agence <strong>personnalise</strong> également votre papier entête, enveloppes, carnets de bons etc...
            </p>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="6"
          >
            <b-row
              v-for="production in filter(productions, ['slug', 'print'])"
              :key="production._id"
            >
              <b-col
                v-for="(image, index) in slice(production.images, 0, 6)"
                :key="index"
                md="6"
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <img
                  :src="image.url"
                  alt=""
                  width="160px"
                >
              </b-col>
              <b-col
                md="12"
                class="d-flex justify-content-center"
              >
                <b-button
                  :to="{ name: 'realisations', params: { section: production.slug } }"
                  variant="primary"
                  size="lg"
                  pill
                >
                  Voir toutes les impressions papiers
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-animate-onscroll="'animated bounceInLeft delay-1'"
            md="6"
          >
            <b-row
              v-for="production in filter(productions, ['slug', 'car'])"
              :key="production._id"
            >
              <b-col
                v-for="(image, index) in slice(production.images, 0, 6)"
                :key="index"
                md="6"
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <img
                  :src="image.url"
                  alt=""
                  width="128px"
                >
              </b-col>
            </b-row>
            <b-row
              v-for="production in filter(productions, ['slug', 'banner'])"
              :key="production._id"
            >
              <b-col
                v-for="(image, index) in slice(production.images, 0, 6)"
                :key="index"
                md="6"
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <img
                  :src="image.url"
                  alt=""
                  width="128px"
                >
              </b-col>
              <b-col
                md="12"
                class="d-flex justify-content-center"
              >
                <b-button
                  :to="{ name: 'realisations', params: { section: production.slug } }"
                  variant="primary"
                  size="lg"
                  pill
                >
                  Voir tous les supports de communication
                </b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            v-animate-onscroll="'animated bounceInRight delay-2'"
            md="6"
          >
            <h3 class="h4 mb-4 text-center text-md-left">
              Les autres supports de communication
            </h3>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Il existe d’innombrables moyens de <strong>signaler votre présence</strong>, votre passage ou de simplement marquer les esprits.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Les plus courants et efficaces restent les <strong>panneaux en alu dibond</strong>, en pvc plein ou bien alvéolé, <strong>les banderoles, les adhésifs laminés...</strong> Il s'agira donc de réaliser votre <strong>enseigne</strong>, des <strong>panneaux directionnels</strong> ou « chantier réalisé par »... de personnaliser votre <strong>flotte de véhicule</strong>. Bien entendu, un éventail d’options permettront d’adapter le produit à votre besoin (recto verso, œillets, micro perforage...). Selon les projets, une <strong>prestation de pose</strong> pourra également vous être fournie.
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Renvoyer l’image d’une équipe soudée sera forcément bénéfique à votre communication. Aussi, de nombreux patrons choisissent d’habiller leurs collaborateurs aux couleurs de leur entreprise. <strong>Imprimerie numérique, transfert ou broderie</strong>, toutes ces techniques de personnalisation textile vous permettront d'uniformiser les <strong>tenues de chantier:</strong> t-shirts, polos, sweats, softshells, blousons, parkas etc...
            </p>
            <p class="lead font-weight-medium text-center text-md-left mx-3 mx-md-0">
              Pour finir, n'oubliez pas qu’un petit geste fait toujours plaisir, qu'il s’agisse de <strong>fidéliser ses collaborateurs</strong> ou de <strong>remercier ses clients</strong>. Selon vos besoins et les tendances du moment, nous serons en mesure de vous fournir les <strong>cadeaux clients</strong> ou <strong>goodies</strong> de votre choix (stylos, agendas...).
            </p>
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
            <h2 class="h3 text-white text-center mb-4 mx-3 mx-md-0">
              Notre formule d'accompagnement aux créateurs d'entreprise: Com'pack
            </h2>
            <p class="lead text-white text-center font-weight-medium mb-5 mx-3 mx-md-0">
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
                    299€ HT
                  </div>
                  <div class="text-center text-white font-weight-medium font-italic">
                    Soit 358.80€ TTC
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
import { filter, slice } from 'lodash'
import { actions } from '~/mixins/actions'
export default {
  mixins: [actions],
  data: () => ({
    productions: [],
    form: {
      company: 'odb'
    }
  }),
  async fetch () {
    this.productions = await this.findProductions({
      limit: -1
    })
  },
  head () {
    return {
      title: 'Agence de communication | Office du Bâtiment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Implanté au carrefour du Tarn et Garonne, du Lot et Garonne et du Gers, Office du bâtiment allie les compétences d’une agence de communication à une connaissance approfondie des métiers du BTP.'
        }
      ]
    }
  },
  methods: {
    filter (arr, params) {
      return filter(arr, params)
    },
    slice (arr, start, end) {
      return slice(arr, start, end)
    }
  }
}
</script>
