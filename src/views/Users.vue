<template>
  <v-container fluid>
    <notifications
      group="userCrud"
      position="top right"/>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style>

</style>