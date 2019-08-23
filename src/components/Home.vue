<template>
    <div id="home">
      <v-card class="cardMedidas">
      <v-card-title>
          <v-toolbar-title>Mediciones</v-toolbar-title>
      </v-card-title>
      <v-card-text>
        <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Mediciones ultimas 24h</div>
    </v-card-text>
      </v-card>
      </v-card-text>
      </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }),

  name: 'Home',
  computed: {
    ...mapState(['medidas'])
  },
  mounted() {
    this.$store.dispatch('medidas/obtainMedidas')
  }
}
</script>

<style>
.cardMedidas {
border-radius: 10px !important;
padding: 10px;
margin: 10px;
}
</style>
