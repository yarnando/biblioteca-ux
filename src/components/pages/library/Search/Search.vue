<template>
  <div>
      <b-row align-h="center">
        <b-col lg="6" class="mb-2">
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Procurar um título"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group> 
        </b-col>
      </b-row>
      <b-row>
          <b-col>
      <b-table :items="$store.getters.titulos" :filter="filter">

      </b-table>              
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            filter: null,
        }
    },
}
</script>

<style>

</style>