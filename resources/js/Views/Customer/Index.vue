<template>
  <div class="customer">
    <div class="card shadow-sm border-top-custom">
      <div v-cloak class="card-body">
         <div class="col-md-3 ml-auto pr-0 text-right">
            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link  :to="{name:'Customer.create'}" class="btn btn-success btn-sm">
                <i class="fas fa-plus"></i> Add Customer
              </router-link>
            </div>
          </div>
        <div class="tableList py-2 minHeight">
         <div class="table-responsive">
           <table class="table tablesorter border table-hover" border="1">
              <thead class="bg-light text-secondary">
                <tr>
                  <th>Sl</th>
                  <th style="width: 30%">Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Adress</th>
                  <th>Action</th>
              </tr>
              </thead>
              <tbody>
                <slot v-if=" Object.keys(table.datas).length>0">
                  <tr v-for="(item, index) in table.datas" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{ item.name }}</td>
                    <td>
                    {{ item.email }}
                    </td>
                    <td>{{ item.mobile }}</td>
                    <td>{{ item.address }}</td>
                    <td>
                      <router-link :to="{ name:'Customer.show', params: { id: item.id }}" class="btn btn-info">Service</router-link>
                    <router-link :to="{ name:'Customer.edit', params: { id: item.id }}" class="btn btn-success">Edit</router-link>
                    <button  v-on:click="destroy(item)" class="btn btn-table btn-danger">Delete</button>
                    </td>
                  </tr>
                </slot>
                <slot v-else>
                  <tr>
                    <td colspan="6">
                      <div class="panel-body text-center">
                        <h4>No Data</h4>
                      </div>
                    </td>
                  </tr>
                </slot>
              </tbody>
            </table>
          </div>
        </div>
        <slot v-if="meta">
          <div class="page-footer" v-if="meta.last_page>1">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12 col-md-5 p-0">
                  <div
                    role="status"
                    aria-live="polite"
                  >Showing {{meta.from}} to {{meta.to}} of {{meta.total}} entries</div>
                </div>
                <div class="col-sm-12 col-md-7 p-0">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-sm justify-content-end">
                      <li class="page-item">
                        <a class="page-link" v-on:click="get_datas(1)" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item" v-if="meta.current_page>2">
                        <a
                          class="page-link"
                          v-on:click="get_datas(meta.current_page-2)"
                        >{{meta.current_page-2}}</a>
                      </li>
                      <li class="page-item" v-if="meta.current_page>1">
                        <a
                          class="page-link"
                          v-on:click="get_datas(meta.current_page-1)"
                        >{{meta.current_page-1}}</a>
                      </li>
                      <li class="page-item active">
                        <a
                          class="page-link"
                          v-on:click="get_datas(meta.current_page)"
                        >{{meta.current_page}}</a>
                      </li>
                      <li class="page-item" v-if="meta.current_page<meta.last_page">
                        <a
                          class="page-link"
                          v-on:click="get_datas(meta.current_page+1)"
                        >{{meta.current_page+1}}</a>
                      </li>
                      <li class="page-item" v-if="meta.current_page+1<meta.last_page">
                        <a
                          class="page-link"
                          v-on:click="get_datas(meta.current_page+2)"
                        >{{meta.current_page+2}}</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" v-on:click="get_datas(meta.last_page)" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const base_route="Customer";
const title='Customer';
const routes_name = {
  view: base_route+".show",
  edit: base_route+".edit",
  destroy: base_route+".destroy"
};
const breadcumb = {
  0: {
    title: title,
    route_name:base_route
  }
};
const tableData = [];
export default {
  components: {
  },
  data() {
    return {
      table: {
        title: "Simple Table",
        routes: routes_name,
        datas: []
      },
      pagination: [],
      meta: [],
      links: []
    };
  },
  methods: {
    get_datas: function(page_index) {
      this.$root.loading = true
      let url = "/Customer";
      if (page_index > 0) {
        url = "/Customer/?page=" + page_index;
      }
      axios
        .get(url)
        .then(respons => {
          this.table.datas = respons.data.data;
          this.meta = respons.data.meta;
          this.links = respons.data.links;
        })
        .catch(error => {
          console.log(error.respons);
        })
        .then(response=>{
         this.$root.loading = false;
       })

    },
   destroy(obj) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("/Customer/" + obj.id)
          .then(respons => {
            this.get_datas();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount: function() {},
  mounted() {
    this.get_datas();
  },

  beforeUpdate: function() {
  },
  updated() {
  },
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

