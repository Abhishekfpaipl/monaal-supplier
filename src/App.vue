<template>
  <TopNav />
  <router-view />
  <bottom-nav style="position: fixed; bottom: 0px; width: 100%;" />
</template>
<script>
import BottomNav from '@/components/navbar/BottomNav.vue'
import TopNav from '@/components/navbar/TopNav.vue'
export default {
  components: { BottomNav, TopNav }
}
</script>