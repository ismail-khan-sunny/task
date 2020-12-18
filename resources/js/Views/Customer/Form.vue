<template>
  <div class="customerCreate">
    <div class="card shadow-sm border-top-custom">
      <div class="card-body p-2">
        <div class="row align-items-center pb-2 mx-0 mb-2 border-bottom border-isabelline">
          <div class="col-lg-6 p-0">
            <strong class="text-uppercase m-0">Add Customer</strong>
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
        <form v-on:submit.prevent="submit" class="form-row px-3">
          <input type="hidden" v-model="data.id" />
          <div :class="['form-group col-3', errors.type ? 'has-error' : '']">
            <label class="col-form-label-sm font-weight-normal mb-0" for="type">Name</label>
             <input
              v-model="data.name"
              type="text"
              class="form-control form-control-sm"
              placeholder="Name"
            />
            <small v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</small>
          </div>
          <div :class="['form-group col-3', errors.mobile ? 'has-error' : '']">
            <label class="col-form-label-sm font-weight-normal mb-0" for="mobile">Mobile</label>
             <input
              v-model="data.mobile"
              type="text"
              class="form-control form-control-sm"
              placeholder="Mobile"
            />
            <small v-if="errors && errors.mobile" class="text-danger">{{ errors.mobile[0] }}</small>
          </div>
          <div :class="['form-group col-3', errors.email ? 'has-error' : '']">
            <label class="col-form-label-sm font-weight-normal mb-0" for="mobile">Email</label>
             <input
              v-model="data.email"
              type="text"
              class="form-control form-control-sm"
              placeholder="Email"
            />
            <small v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</small>
          </div>
          <div class="form-group col-4">
            <label class="col-form-label-sm font-weight-normal mb-0" for="mobile">Address</label>
            <textarea name="address" v-model="data.address" class="form-control form-control-sm"  placeholder="Address">Address</textarea>
            <small v-if="errors && errors.address" class="text-danger">{{ errors.address[0] }}</small>
          </div>
          
          <div class="form-group col-12">
            <button class="btn btn-sm btn-primary mt-3" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const base_route = "Customer";

export default {
  components: {
  },
  data() {
    return {
      txt: "Form",
      data: {
      },
      errors: {},
      focus_field: ""
    };
  },
  methods: {
    submit: function() {
      if (this.data.id) {
        axios
          .put("/Customer/" + this.data.id, this.data)
          .then(respons => {
            this.$toaster.success('Successfully updated')
            this.$router.push("/Customer");
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
              this.focus_field = Object.keys(this.errors)[0];
            }
          });
      } else {
        axios
          .post("Customer", this.data)
          .then(respons => {
            this.$toaster.success('Successfully added')
            this.$router.push("/Customer");
            this.focus_field = "";
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
    get_data: function(id) {
      this.$root.loading = true;
      axios
        .get("/Customer/" + id)
        .then(respons => {
          this.data = respons.data.customer;
        })
        .catch(error => {
          console.log(error);
        })
        .then(response => {
          this.$root.loading = false;
        });
    },
     
  },

  mounted() {
    if (this.$route.params.id) {
      this.get_data(this.$route.params.id);
    } else {
      this.$root.loading = false;
    }
  }
};
</script>

