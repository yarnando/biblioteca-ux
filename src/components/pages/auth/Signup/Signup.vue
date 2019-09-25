<template>
  <div>
    <b-row>
        <b-col>
            <h4 class="text-center">Cadastro</h4>
            <hr>
        </b-col>
    </b-row>  

    <b-row>
        <b-col>
            <b-form-group label-for="nomeUsuario">
                            <label>
                              Digite um nome de usuário*:
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
                              Digite uma senha*:
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
            <b-button class="mb-1" variant="primary" @click="cadastrar">
                <b-spinner v-if="$store.getters.carregando" label="Spinning"></b-spinner>
                <span v-else>Cadastrar</span>
            </b-button>
            <router-link :to="'signin'">
                <a class="ml-3" href="">Já possui cadastro?</a>    
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
        cadastrar() {
            this.$store.commit('carregando', true)
            setTimeout(() => {
                this.$store.commit('usuarioLogado', true);
                this.$store.commit('tipoMsg', 'success');
                this.$store.commit('mensagem', 'Usuario cadastrado com sucesso! Realizando login...');
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