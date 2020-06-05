<template>
  <users-base-user-form
    :user-data="selectedUser"
    :form-title="getFormTitle"
    :submit-handler="updateAction"
    :cancel-handler="cancelHandler"
    :is-loading="isLoading"
    submit-btn-title="save" />
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'EditUserForm',
  props: {
    userId: {
      type: [String, Number],
      required: true
    },
    cancelHandler: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      selectedUser: 'users/getSelectedUser',
      isLoading: 'app/isLoading'
    }),

    getFormTitle () {
      return this.isUserLoaded ? `Edit: ${this.selectedUser.first_name} ${this.selectedUser.last_name}` : 'Edit:'
    },

    isUserLoaded () {
      return Object.keys(this.selectedUser).length
    }
  },
  beforeMount () {
    this.init()
  },
  methods: {
    ...mapActions('users', ['fetchUser', 'updateUser']),
    ...mapMutations({
      setLoadingState: 'app/SET_LOADING_STATE'
    }),

    async updateAction (formData) {
      try {
        this.setLoadingState(true)
        await this.updateUser(formData)
        this.setLoadingState(false)
      } catch {
        this.setLoadingState(false)
      }
    },

    async init () {
      try {
        this.setLoadingState(true)
        await this.fetchUser(this.userId)
        this.setLoadingState(false)
      } catch {
        this.setLoadingState(false)
        this.cancelHandler()
      }
    }
  }
}
</script>

<style>

</style>