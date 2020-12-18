<template>
  <div class="top-head">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link  :to="{name:'Service.index'}" class="nav-link">
                <i class="fas fa-plus"></i> Services
              </router-link>
          </li>
          <li class="nav-item">
            <router-link  :to="{name:'Customer.index'}" class="nav-link">
                <i class="fas fa-plus"></i> Customer
              </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopHead"
};
</script>
