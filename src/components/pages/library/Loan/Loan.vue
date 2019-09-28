<template>
  <div>
      <b-row class="mt-3 mb-2">
        <b-col lg="4" class="text-center text-md-left my-1 my-md-0">
          <h4> <i class="fa fa-arrow-right"></i>Meus empréstimos</h4> 
        </b-col>          
        <b-col lg="4" class="text-center my-1 my-md-0">
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Procurar um título"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
            </b-input-group-append>
          </b-input-group> 
        </b-col>
        <b-col lg="4" class="text-center text-md-right my-1 my-md-0">
            <b-button @click="$router.push('search')" size="sm">Voltar para a pesquisa de títulos</b-button>
        </b-col>
      </b-row>
      <b-row>
          <b-col lg="12">
            <b-table  :items="titulos" 
                        :fields="campos"
                        :filter="filter"
                        responsive
                        stacked="md"
                        show-empty
                        empty-filtered-text="Não há registros para exibir com as configurações selecionadas"
                        small
                        bordered
                        table-class="text-center"
                        >

                        <template v-slot:cell(reservado)="data">
                            <span v-if="!!data.item.reservado" class="text-danger">Já reservado</span>
                            <span v-else class="text-success">Disponível</span>
                        </template>                    

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
            campos: [
                {
                  key: 'nomeDoLivro',
                  label: 'Nome do livro',
                },                                
                {
                  key: 'dataDevolucao',
                  label: 'Devolução Prevista Para',
                },                                    
            ],  
            indexTituloReservado: null              
        }
    },
    computed: {
        titulos: {
            get() {
                return this.$store.getters.titulos.filter(livro => livro.reservadoPorMim == true)
            },
            set(titulos) {
                this.$store.commit('titulos', titulos)
            }
        },
        carregando: {
            get() {
                return this.$store.getters.carregando
            },
            set(value) {
                this.$store.commit('carregando', value)
            }
        }
    },
}
</script>

<style>

</style>
