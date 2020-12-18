<template>
  <div class="CustomerView">
    <div class="row align-items-center pb-2 mx-0 mb-2 border-bottom border-isabelline">
      <div class="col-lg-6 p-0">
        <strong class="text-uppercase m-0">Customer Service</strong>
      </div>
      <div class="col-lg-6 p-0 text-right">
        <div class="d-flex align-items-center justify-content-end">
          <div class="btn-group border rounded" role="group" aria-label="Basic example">
            <router-link :to="{name:'Customer.index'}" class="btn btn-success btn-sm">
              <span class="fas fa-arrow-left px-1"></span> Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <h5>Customer</h5>
    <table class="table tablesorter border table-hover" border="1">
      <tr>
        <td>Name</td>
        <td>{{ data.customer.name }}</td>
      </tr> 
      <tr>
        <td>Email</td>
        <td>{{ data.customer.email }}</td>
      </tr>
      <tr>
        <td>Mobile</td>
        <td>{{ data.customer.mobile }}</td>
      </tr>   
      <tr>
        <td>Address</td>
        <td>{{ data.customer.address }}</td>
      </tr> 
    </table>
    <div class="col-12 p-0">
      <h5>Service</h5>
      <table class="table tablesorter border table-hover" border="1" v-for="(item, index) in data.service" :key="index">
        <tr>
          <th colspan="2">{{item.name}}<hr/></th>
        </tr> 
        <tr v-for="(item1, index1) in item.service_details" :key="index1">
          <td>{{item1.name}}</td>
          <td>
            <input
              v-if="item1.type=='date'"
              v-model="item1.value"
              type="date"
              class="form-control form-control-sm"
              :placeholder="item1.name"
            />
            <input
              v-else
              v-model="item1.value"
              type="text"
              class="form-control form-control-sm"
              :placeholder="item1.name"
            />
          </td>
        </tr> 
      </table>
      <button class="btn btn-sm btn-primary mt-3" type="button" @click="SubmitForm">Submit</button>
    </div>
    <!-- <pre>{{data}}</pre> -->
  </div>
</template>
<script>
const base_route='Customer';

export default {
  components: {
  },
  data() {
    return {
      base_route:base_route,
      data: {
        customer:{},
        service:{},
      }
    };
  },
  methods: {
    get_data(id) {
      this.$root.loading = true
      axios
        .get("Customer/" + id)
        .then(respons => {
          this.data = respons.data;
        })
        .catch(error => {
          console.log(error);
        })
        .then(response=>{
         this.$root.loading = false;
       })

    },
    SubmitForm(){
      axios
        .post("CustomerServicePost/"+this.$route.params.id, this.data.service)
        .then(respons => {
          this.$toaster.success('Successfully added')
          this.$router.push("/Customer");
        })
        .catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            this.focus_field = Object.keys(this.errors)[0];
          }
        });
    }
  },
  mounted() {
    this.get_data(this.$route.params.id);
  }
};
</script>


