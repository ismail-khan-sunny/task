<template>
  <!-- <div id="dashboardLayout">
    <router-view></router-view>
  </div>-->

  <div id="app" class="container">
    <header class="header">
      <!--top-header-->
      <TopHead />
      <!--//top-header-->
    </header>
    <div >
      <router-view />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from "../TopHead";

export default {
  name: "home",
  components: {
    TopHead,
  },
  methods: {
   
  },
  created() {
    
  },
  destroyed() {
    
  }
};
</script>

<style scoped>
main {
  min-height: 70vh;
}
</style>

