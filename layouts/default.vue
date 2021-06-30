<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav
      :show="displaySidenav"
      @close="displaySideNav = false"
    />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheSideNav from '@/components/Navigation/TheSidenav.vue'

export default {
  components: {
    TheHeader, TheSideNav
  },
  data () {
    return {
      displaySidenav: false
    }
  }

}
</script>

<style scoped>
</style>
