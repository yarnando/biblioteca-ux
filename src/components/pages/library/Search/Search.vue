<template>
  <div>
      <b-row class="mt-3 mb-2">
        <b-col lg="4" class="text-center text-md-left my-1 my-md-0">
          <h4> <i class="fa fa-arrow-right"></i>Consultar Títulos</h4> 
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
            <b-button @click="$router.push('loan')" size="sm">Minhas Reservas</b-button>
        </b-col>
      </b-row>
      <b-row class="mt-2">
          <b-col>
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

                        <template v-slot:cell(dataDevolucao)="data">
                            <span>{{data.item.dataDevolucao || '---'}}</span>
                        </template>                   

                        <template v-slot:cell(acao)="data">
                            <span v-if="!!data.item.reservado">
                                ---
                            </span>
                            <b-button   v-else 
                                        :style="{'min-width': '90px'}"
                                        variant="primary" 
                                        size="sm"
                                        @click="reservaTitulo(data.item)"
                                        :disabled="carregando && (data.index != indexTituloReservado)">
                                    <b-spinner style="width: 1.5rem; height: 1.5rem;" v-if="carregando && (data.index == indexTituloReservado)" label="Spinning"></b-spinner>
                                    <span v-else>Reservar</span>                                        
                            </b-button>
                        </template>   

            </b-table>              
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('tituloSelecionado', null);
    },
    data() {
        return {
            filter: null,
            campos: [
                {
                  key: 'nomeDoLivro',
                  label: 'Nome do livro',
                },     
                {
                  key: 'reservado',
                  label: 'Disponibilidade',
                },                             
                {
                  key: 'dataDevolucao',
                  label: 'Data de Devolução',
                },                             
                {
                  key: 'acao',
                  label: 'Ação',
                },         
            ],  
            indexTituloReservado: null              
        }
    },
    computed: {
        titulos: {
            get() {
                return this.$store.getters.titulos
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
    methods: {
        reservaTitulo(titulo) {
            this.carregando = true
            let titulosNovos = [...this.titulos]
            this.indexTituloReservado = titulosNovos.indexOf(titulo)            
            setTimeout(() => {
                let tituloAlterado = titulo = {...titulo, dataDevolucao:'12/12/2019' , reservado: true, reservadoPorMim: true}
                titulosNovos[this.indexTituloReservado] = tituloAlterado
                this.titulos = titulosNovos                
                this.$store.commit('tituloSelecionado', tituloAlterado);
                this.$store.commit('tipoMsg', 'success');
                this.$store.commit('mensagem', 'Livro reservado com sucesso!');
            }, 1500);            
            setTimeout(() => {
                this.$store.commit('tipoMsg', '');
                this.$store.commit('mensagem', '');                
                this.$router.push('loan')
                this.carregando = false
            }, 3000);            
        }
    }
}
</script>

<style>

</style>