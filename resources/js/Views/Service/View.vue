<template>
  <div class="CustomerView">
    <!-- <pre>{{data}}</pre> -->
  </div>
</template>
<script>
const base_route='Service';

export default {
  components: {
  },
  data() {
    return {
      base_route:base_route,
      data: []
    };
  },
  methods: {
    get_data(id) {
      this.$root.loading = true
      axios
        .get("/Service/" + id)
        .then(respons => {
          this.data = respons.data;
        })
        .catch(error => {
          console.log(error);
        })
        .then(response=>{
         this.$root.loading = false;
       })

    }
  },
  mounted() {
    this.get_data(this.$route.params.id);
  }
};
</script>


