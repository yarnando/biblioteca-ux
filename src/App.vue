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
