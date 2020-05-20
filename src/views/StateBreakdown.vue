<template>
  <div class="about">
    <top-nav/>
    <div class="container-fluid">
      <div class="text-left">
        <div class="header-body mb-3">
          <h1 class="header-title">State Breakdown</h1>
        </div>
      </div>
      <div class="card">
        <div class="card-table">
          <table class="table table-sm table-responsive-sm table-nowrap">
            <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed Cases</th>
              <th scope="col">Cases on Admission</th>
              <th scope="col">Discharged</th>
              <th scope="col">Death</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="state in stateBreakdown.states" :key="state.id">
              <td>{{ state.state }}</td>
              <td>{{ state.confirmedCases }}</td>
              <td v-if="state.casesOnAdmission == null">-</td>
              <td v-if="state.casesOnAdmission != null">{{ state.casesOnAdmission }}</td>
              <td>{{ state.discharged }}</td>
              <td>{{ state.death }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    ...mapState({ stateBreakdown: (state) => state.covid.affectedState.data }),
  },
};
</script>
