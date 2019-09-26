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

      <main>
          <section :class="`container conteudo ${($route.name == 'signup') || ($route.name == 'signin') ? 'conteudo-menor' : ''}`">
            <router-view></router-view>
          </section>
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
