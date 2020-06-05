<template>
  <v-card
    class="mx-auto"
    max-width="344"
    >
      <v-img
        :src="user.avatar"
        height="200px"
      ></v-img>
  
      <v-card-title>
        {{ `${user.first_name} ${user.last_name}` }}
      </v-card-title>
  
      <v-card-subtitle>
        {{ user.email }}
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn outlined @click.stop="handleDelete">Delete</v-btn>

      <v-btn 
        color="primary"
        outlined
        @click.stop="toggleEditDialog"
      >
        Edit
      </v-btn>
  
      <v-btn
        v-if="displayShowBtn"
        color="purple"
        outlined
        @click.stop="goToDetailsPage"
      >
        Show
      </v-btn>
    </v-card-actions>

    <v-dialog
      v-if="editDialogVisible"
      v-model="editDialogVisible"
      max-width="650px"
      persistent
    >
      <users-edit-user-form
        :user-id="this.user.id"
        :cancel-handler="toggleEditDialog" />
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    },
    displayShowBtn: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    editDialogVisible: false
  }),
  methods: {
    ...mapActions('users', ['deleteUser']),
    ...mapMutations({
      setLoadingState: 'app/SET_LOADING_STATE'
    }),

    goToDetailsPage () {
      this.$router.push({ name: 'UserDetails', params: { id: this.user.id } })
    },

    toggleEditDialog () {
      this.editDialogVisible = !this.editDialogVisible
    },

    async handleDelete () {
      try {
        this.setLoadingState(true)
        await this.deleteUser(this.user.id)
        this.setLoadingState(false)
        this.$notify({
          type: 'success',
          group: 'userCrud',
          text: 'Successfully deleted.'
        })
      } catch {
        this.setLoadingState(false)
      }
    }
  }
}
</script>

<style>

</style>
