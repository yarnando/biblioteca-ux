<template>
  <div>
    <b-row>
        <b-col>
            <h4 class="text-center">Login</h4>
            <hr>
        </b-col>
    </b-row>  

    <b-row>
        <b-col>
            <b-form-group label-for="nomeUsuario">
                            <label>
                              Usuário*:
                            </label>                           
                            <b-form-input 
                              id="nomeUsuario"
                              ref="nomeUsuario"
                              name="nomeUsuario"                
                              v-model="nomeUsuario"
                              :class="{ 'is-invalid': errors.has('nomeUsuario') }"
                              v-validate="'required|min:3'">
                            </b-form-input>   
                            <b-form-invalid-feedback>
                                  {{errors.first('nomeUsuario')}}
                            </b-form-invalid-feedback>                                                       
            </b-form-group>            
            <b-form-group label-for="nomeUsuario">
                            <label>
                              Senha*:
                            </label>                           
                            <b-form-input 
                              id="senhaUsuario"
                              ref="senhaUsuario"
                              name="senhaUsuario"                
                              v-model="senhaUsuario"
                              type="password"
                              :class="{ 'is-invalid': errors.has('senhaUsuario') }"
                              v-validate="'required|min:3'">
                            </b-form-input>   
                            <b-form-invalid-feedback>
                                  {{errors.first('senhaUsuario')}}
                            </b-form-invalid-feedback>                                                       
            </b-form-group>            
        </b-col>
    </b-row>    
    <b-row>
        <b-col>
            <b-button class="mb-1" variant="primary" @click="entrar">
                <b-spinner v-if="$store.getters.carregando" label="Spinning"></b-spinner>
                <span v-else>Entrar</span>
            </b-button>
            <router-link :to="'signup'">
                <a class="ml-3" href="">Não possui cadastro?</a>    
            </router-link>              
        </b-col>
    </b-row>
  </div>
</template>

<script>
import { usuarioModel } from '../usuarioModel'
export default {
    mixins: [usuarioModel],
    created() {
        this.usuario = {
            nome: '',
            senha: ''
        }        
    },    
    methods: {
        entrar() {
            this.$store.commit('carregando', true)
            setTimeout(() => {
                this.$store.commit('usuarioLogado', true);
                this.$store.commit('tipoMsg', 'success');
                this.$store.commit('mensagem', 'Usuario logado com sucesso!');
            }, 1500);            
            setTimeout(() => {
                this.$store.commit('tipoMsg', '');
                this.$store.commit('mensagem', '');                
                this.$router.push('search')
                this.$store.commit('carregando', false)
            }, 3000);
        }
    },
}
</script>

<style>

</style>