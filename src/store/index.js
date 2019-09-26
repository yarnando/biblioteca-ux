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
  titulos: [
      { nomeDoLivro: 'livro0', reservado: false, dataDevolucao: '', reservadoPorMim: false },
      { nomeDoLivro: 'livro1', reservado: true, dataDevolucao: '12/10/2019', reservadoPorMim: true },
      { nomeDoLivro: 'livro2', reservado: false, dataDevolucao: '', reservadoPorMim: false },
      { nomeDoLivro: 'livro3', reservado: false, dataDevolucao: '', reservadoPorMim: false },
      { nomeDoLivro: 'livro4', reservado: true, dataDevolucao: '26/10/2019', reservadoPorMim: true },
      { nomeDoLivro: 'livro4', reservado: true, dataDevolucao: '15/10/2019', reservadoPorMim: true },
      { nomeDoLivro: 'livro5', reservado: true, dataDevolucao: '12/10/2019', reservadoPorMim: false },
      { nomeDoLivro: 'livro6', reservado: true, dataDevolucao: '17/10/2019', reservadoPorMim: false },
      { nomeDoLivro: 'livro7', reservado: false, dataDevolucao: '', reservadoPorMim: false },
      { nomeDoLivro: 'livro8', reservado: false, dataDevolucao: '', reservadoPorMim: false },
  ],
  tituloSelecionado: null
};

const getters = {
  carregando: store => store.carregando,
  mensagem: store => store.mensagem,
  tipoMsg: store => store.tipoMsg,
  usuario: store => store.usuario,
  nomeUsuario: store => store.usuario.nome,
  senhaUsuario: store => store.usuario.senha,
  usuarioLogado: store => store.usuarioLogado,
  titulos: state => state.titulos,
  tituloSelecionado: state => state.tituloSelecionado
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
  },
  tituloSelecionado(state, obj) {
    state.tituloSelecionado = obj;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
