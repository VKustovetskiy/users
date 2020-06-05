<template>
      <v-navigation-drawer
        :mini-variant.sync="minimized"
        width="280px"
        permanent
        app
      >
        <v-list-item class="px-2">
          <v-list-item-avatar v-if="displayUserInfo">
            <v-img :src="user.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-title v-if="displayUserInfo">
            <v-row no-gutters>
              <v-col>
                <span class="title">{{ `${user.first_name} ${user.last_name}` }}</span>
              </v-col>
              <v-col>
                <span class="body-2 grey--text lighten-1">{{ user.email }}</span>
              </v-col>
            </v-row>
          </v-list-item-title>

          <v-list-item-avatar
            v-else
            color="grey"
          ></v-list-item-avatar>

          <v-spacer></v-spacer>
  
          <v-btn
            icon
            @click.stop="minimized = !minimized"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="link in links"
            :key="link.title"
            :to="{ name: `${link.to}`}"
            exact
            link
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title class="subtitle-2">{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Drawer',
  computed: {
    ...mapGetters('users', {
      user: 'getSelectedUser'
    }),

    displayUserInfo () {
      return this.user && Object.keys(this.user).length
    }
  },
  data: () => ({
    minimized: true,
    links: [
      {
        to: 'Home',
        icon: 'mdi-home',
        title: 'Home'
      },
      {
        to: 'UserList',
        icon: 'mdi-account-group-outline',
        title: 'Users'
      }
    ]
  })
}
</script>

<style>

</style>