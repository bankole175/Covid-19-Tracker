<template>
  <nav class="navbar navbar-expand-lg navbar-light mt-navbar" id="topnav">
    <div class="container">

      <!-- Toggler -->
      <button class="navbar-toggler mr-auto" type="button" data-toggle="collapse"
              data-target="#navbar" aria-controls="navbar" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Brand -->
      <router-link class="navbar-brand mr-auto" to="/">
        <img src="@/assets/img/coronavirus-64.png" alt="..." class="navbar-brand-img">
        <span>Covid-19</span>
      </router-link>

      <!-- Collapse -->
      <div class="collapse navbar-collapse mr-auto" id="navbar">
        <ul>
          <li class="list-unstyled text-left ml-n5 d-lg-none">
            <router-link :to="{name: 'all.state'}" class="text-dark">State Breakdown</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
};
</script>

<style lang="scss" scoped>
  .mt-navbar {
    z-index: 999;
  }
</style>
