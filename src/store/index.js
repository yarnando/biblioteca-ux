import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  carregando: false,
  mensagem: "",
  tipoMsg: "",
  usuario: {
    nome: '',
    senha: ''
  },
  usuarioLogado: false,
  titulos: []
};

const getters = {
  carregando: store => store.carregando,
  mensagem: store => store.mensagem,
  tipoMsg: store => store.tipoMsg,
  usuario: store => store.usuario,
  nomeUsuario: store => store.usuario.nome,
  senhaUsuario: store => store.usuario.senha,
  usuarioLogado: store => store.usuarioLogado,
  titulos: state => state.titulos
};

const mutations = {
  carregando(state, obj) {
    state.carregando = obj;
  },
  mensagem(state, obj) {
    state.mensagem = obj;
  },
  tipoMsg(state, obj) {
    state.tipoMsg = obj;
  },
  usuario(state, obj) {
    state.usuario = obj;
  },
  nomeUsuario(state, obj) {
    state.usuario.nome = obj;
  },
  senhaUsuario(state, obj) {
    state.usuario.senha = obj;
  },
  usuarioLogado(state, obj) {
    state.usuarioLogado = obj;
  },
  titulos(state, obj) {
    state.titulos = obj;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
