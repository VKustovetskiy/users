<template>
  <v-app>
    <core-error-handler />

    <core-loader />

    <core-drawer />

    <v-content>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>

</style>
