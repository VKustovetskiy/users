<template>
  <div style="">
    <v-row>
      <v-col 
        v-for="user in userList"
        :key="user.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <users-user-card :user="user" />
      </v-col>
    </v-row>

    <div class="text-center">
      <v-pagination
        v-model="currentPage"
        total-visible="7"
        :length="pagination.total_pages"
        circle
      ></v-pagination>
    </div>

    <v-btn
      absolute
      right
      fab
      dark
      color="pink"
      @click.stop="toggleCreateDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog
      v-if="createDialogVisible"
      v-model="createDialogVisible"
      max-width="650px"
      persistent
    >
      <users-create-user-form
        :cancel-handler="toggleCreateDialog" />
    </v-dialog>

    <notifications
      group="userCrud"
      position="top right"/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'UserList',
  data: () => ({
    createDialogVisible: false
  }),
  computed: {
    ...mapGetters({
      userList: 'users/getUserList',
      pagination: 'users/getPagination',
      isLoading: 'app/isLoading'
    }),

    currentPage: {
      get () {
        return this.pagination.page
      },
      set (val) {
        return this.setPagination({ page: val })
      }
    }
  },
  beforeMount() {
    this.init()
  },
  methods: {
    ...mapActions('users', ['fetchUserList', 'setPagination']),
    ...mapMutations('app', {
      setLoadingState: 'SET_LOADING_STATE'
    }),

    async init () {
      try {
        this.setLoadingState(true)
        await this.fetchUserList()
        this.setLoadingState(false)
      } catch {
        this.setLoadingState(false)
      }
    },

    toggleCreateDialog () {
      this.createDialogVisible = !this.createDialogVisible
    },
  }
}
</script>

<style>

</style>
