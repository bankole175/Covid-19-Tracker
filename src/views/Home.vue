<template>
  <div class="home">
    <top-nav/>
    <section class="wave-container">
      <div class="container">
        <div class="row justify-content-center z-index">
          <div class="col-lg-9">
            <div class="card shadow-lg mt-7">
              <div class="card-body">
                <h1>Covid-19 Tracker</h1>
                <h1>Case Summary in Nigeria</h1>
                <p>{{ new Date().toLocaleString() }}</p>
                <div v-if="isLoading" class="spinner-border spinner-border-sm text-primary"
                     role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <p>{{ data.totalSamplesTested }} Samples tested</p>
                <p>{{ data.totalConfirmedCases }} Confirmed</p>
                <p>{{ data.totalActiveCases }} Active Cases</p>
                <p>{{ data.discharged }} Discharged</p>
                <p>{{ data.death }} Deaths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="down"></div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import Axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      data: {},
      error: {},
    };
  },

  computed: {
  },

  async created() {
    this.isLoading = true;
    try {
      const { data } = await Axios.get('https://covidnigeria.herokuapp.com/api');
      this.data = data.data;
      await this.$store.commit('covid/setAffectedState', data);
      this.isLoading = false;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    color: blue;
  }
  .z-index {
    z-index: 999;
  }
  .home {
    background: #2C7BE5;
  }
  .wave-container {
    position: relative;
    background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
    height: 50vh;
    animation: wave 2s infinite ease-in-out alternate
  }
  @keyframes wave {
    0%{
      transform: translateY(-10px);
      height: 1px;}
    100%{
      transform: translateY(-100px);
      height: 100px;}
  }
  .down {
    clip-path: polygon(0 73%, 12% 74%, 21% 77%, 27% 80%, 36% 86%, 58% 100%, 47% 100%,
      1% 100%, 0 100%);
    background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
    background-size: cover;
    width: 100%;
    height: 600px;
  }
</style>
