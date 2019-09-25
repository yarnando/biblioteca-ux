<template>
  <div id="app">
      <header>
          <Header/>
      </header>

        <mensagem :tipo="$store.getters.tipoMsg"
                :mensagem="$store.getters.mensagem" 
                :display="$store.getters.mensagem.length > 0"
                :onClose="() => true">
        </mensagem>          

      <main class="container conteudo">
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue'
import MensagemSweetModal from './components/shared/mensagem-sweetmodal/MensagemSweetModal.vue';

export default {
  name: 'app',
  components: {
      Header,
      'mensagem': MensagemSweetModal,
  }
}
</script>

<style>
.conteudo {
  width: 96%;
  background-color: #fff;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 80px;
  border:1px solid #ccc;
  border-radius: 5px;
  box-shadow:0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);   
  padding: 14px;
  margin-bottom: 160px;
  margin-top: 20px;
  position: relative;
}
</style>
