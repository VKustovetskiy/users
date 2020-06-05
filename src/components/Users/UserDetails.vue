<template>
  <users-user-card
    v-if="isUserLoaded"
    :user="selectedUser"
    :display-show-btn="false"
  />

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'UserDerails',
  computed: {
    ...mapGetters('users', {
      selectedUser: 'getSelectedUser'
    }),

    userId () {
      return this.$route.params.id
    },

    isUserLoaded () {
      return this.selectedUser && Object.keys(this.selectedUser).length
    }
  },
  beforeMount() {
    this.init()
  },
  methods: {
    ...mapActions('users', ['fetchUser']),
    ...mapMutations({ setLoadingState: 'app/SET_LOADING_STATE' }),

    async init () {
      try {
        this.setLoadingState(true)
        await this.fetchUser(this.userId)
        this.setLoadingState(false)
      } catch {
        this.setLoadingState(false)
        this.$router.push({ name: 'UserList' })
      }
    }
  }

}
</script>

<style>

</style>