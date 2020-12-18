<template>
  <div id="allpage">
    <router-view />
   
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data: function() {
    return {
      txt: "Dashboard",
      breadcrumbTitle: "Dashboard",
      isActive: "active",
      debug_data: {}
    };
  },
  components: {
  },

  methods: {
    toggleClass: function(event) {
      if (this.isActive) {
        this.isActive = "";
      } else {
        this.isActive = "active";
      }
    },
    username() {
      return this.$route.params.username;
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  mounted() {
  }
};
</script>