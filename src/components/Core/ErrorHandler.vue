<template>
  <v-snackbar
    :timeout="delay"
    :value="getErrorState"
    top
    right
    color="error"
    @input="close()"
  >
    {{ getLastErrorMessage }}
    <v-icon
      color="white"
      @click="close()"
    >
      mdi-close
    </v-icon>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ErrorHandler',
  data: () => ({
    delay: 6000
  }),
  computed: {
    ...mapGetters('errors', ['getErrorState', 'getLastErrorMessage']),
  },
  methods: {
    ...mapActions('errors', ['removeError']),
    close () {
      this.removeError()
    }
  }
}
</script>
