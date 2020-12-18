<template>
  <div class="ServiceCreate">
    <div class="card shadow-sm border-top-custom">
      <div class="card-body p-2">
        <div class="row align-items-center pb-2 mx-0 mb-2 border-bottom border-isabelline">
          <div class="col-lg-6 p-0">
            <strong class="text-uppercase m-0">Add Service</strong>
          </div>
          <div class="col-lg-6 p-0 text-right">
            <div class="d-flex align-items-center justify-content-end">
              <div class="btn-group border rounded" role="group" aria-label="Basic example">
                <router-link :to="{name:'Service.index'}" class="btn btn-success btn-sm">
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
              required
            />
            <small v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</small>
          </div>
          <div class="col-12">
            <fieldset class="border rounded p-2 w-100">
            <legend
              class="px-2 w-50 border rounded shadow-sm"
            >Details</legend>
            <table class="table" style="width:70%">
              <tr v-for="(service_detail,index) in data.service_details" :key="index">
                <td>
                  <input
                    v-model="service_detail.name"
                    :name="'service_details['+index+'][name]'"
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Name"
                    required
                  />
                </td>
                <td style="width:20%">
                 <select
                  v-model="service_detail.type"
                  :name="'service_details['+index+'][type]'"
                    id
                    class="form-control form-control-sm rounded-0"
                    required
                  >
                    <option disabled :value="null">Please select one</option>
                    <option
                      v-for="(value, name, index) in types"
                      :key="index"
                      v-bind:value="name"
                    >{{ value }}</option>
                  </select>
                </td>
                <td>
                  <slot v-if="service_detail.id">
                    <button
                      v-if="index>0" v-on:click="destroy(service_detail,index)"   class="btn btn-sm btn-danger float-right" type="button" >
                      Remove
                    </button>
                  </slot>
                  <slot  v-else>
                    <button
                      v-if="index>0" @click="data.service_details.splice(index,1)" class="btn btn-sm btn-danger float-right" type="button" >
                      Remove
                    </button>
                  </slot>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <button
                    @click="data.service_details.push({type: null, name: null})"
                    class="btn btn-sm btn-primary float-right"
                    type="button"
                  >Add More</button>
                 
                </td>
              </tr>
            </table>
          </fieldset>
          </div>
          <div class="form-group col-12">
            <button class="btn btn-sm btn-primary mt-3" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <pre>{{data}}</pre> -->
  </div>
</template>

<script>
const base_route = "Service";

export default {
  components: {
  },
  data() {
    return {
      txt: "Form",
      data: {
        service_details :[{type: null, name: null}]
      },
      errors: {},
      types:{
        'text':'text',
        'date':'date',
      },
      focus_field: ""
    };
  },
  methods: {
    submit: function() {
      if (this.data.id) {
        axios
          .put("/Service/" + this.data.id, this.data)
          .then(respons => {
            this.$toaster.success('Successfully updated')
            this.$router.push("/Service");
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
              this.focus_field = Object.keys(this.errors)[0];
            }
          });
      } else {
        axios
          .post("Service", this.data)
          .then(respons => {
            this.$toaster.success('Successfully added')
            this.$router.push("/Service");
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
        .get("/Service/" + id)
        .then(respons => {
          this.data = respons.data;
        })
        .catch(error => {
          console.log(error);
        })
        .then(response => {
          this.$root.loading = false;
        });
    },
    destroy(obj,index) {
      if (confirm("Do you really want to delete?")) {
        axios
          .post("service_detail_delete", obj)
          .then(respons => {
            this.data.service_details.splice(index,1);
          })
          .catch(error => {
            console.log(error);
          });
      }
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

