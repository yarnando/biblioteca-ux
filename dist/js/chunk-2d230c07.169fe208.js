(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230c07"],{ee2c:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",{staticClass:"mt-3 mb-2"},[s("b-col",{staticClass:"text-center text-md-left my-1 my-md-0",attrs:{lg:"4"}},[s("h4",[s("i",{staticClass:"fa fa-arrow-right"}),t._v("Consultar Títulos")])]),s("b-col",{staticClass:"text-center my-1 my-md-0",attrs:{lg:"4"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Procurar um título"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Limpar")])],1)],1)],1),s("b-col",{staticClass:"text-center text-md-right my-1 my-md-0",attrs:{lg:"4"}},[s("b-button",{attrs:{size:"sm"},on:{click:function(e){return t.$router.push("loan")}}},[t._v("Minhas Reservas")])],1)],1),s("b-row",{staticClass:"mt-2"},[s("b-col",[s("b-table",{attrs:{items:t.titulos,fields:t.campos,filter:t.filter,responsive:"",stacked:"md","show-empty":"","empty-filtered-text":"Não há registros para exibir com as configurações selecionadas",small:"",bordered:"","table-class":"text-center"},scopedSlots:t._u([{key:"cell(reservado)",fn:function(e){return[e.item.reservado?s("span",{staticClass:"text-danger"},[t._v("Já reservado")]):s("span",{staticClass:"text-success"},[t._v("Disponível")])]}},{key:"cell(dataDevolucao)",fn:function(e){return[s("span",[t._v(t._s(e.item.dataDevolucao||"---"))])]}},{key:"cell(acao)",fn:function(e){return[e.item.reservado?s("span",[t._v("\n                              ---\n                          ")]):s("b-button",{style:{"min-width":"90px"},attrs:{variant:"primary",size:"sm",disabled:t.carregando&&e.index!=t.indexTituloReservado},on:{click:function(s){return t.reservaTitulo(e.item)}}},[t.carregando&&e.index==t.indexTituloReservado?s("b-spinner",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{label:"Spinning"}}):s("span",[t._v("Reservar")])],1)]}}])})],1)],1)],1)},o=[],a={created(){this.$store.commit("tituloSelecionado",null)},data(){return{filter:null,campos:[{key:"nomeDoLivro",label:"Nome do livro"},{key:"reservado",label:"Disponibilidade"},{key:"dataDevolucao",label:"Data de Devolução"},{key:"acao",label:"Ação"}],indexTituloReservado:null}},computed:{titulos:{get(){return this.$store.getters.titulos},set(t){this.$store.commit("titulos",t)}},carregando:{get(){return this.$store.getters.carregando},set(t){this.$store.commit("carregando",t)}}},methods:{reservaTitulo(t){this.carregando=!0;let e=[...this.titulos];this.indexTituloReservado=e.indexOf(t),setTimeout(()=>{let s=t={...t,dataDevolucao:"12/12/2019",reservado:!0,reservadoPorMim:!0};e[this.indexTituloReservado]=s,this.titulos=e,this.$store.commit("tituloSelecionado",s),this.$store.commit("tipoMsg","success"),this.$store.commit("mensagem","Livro reservado com sucesso!")},1500),setTimeout(()=>{this.$store.commit("tipoMsg",""),this.$store.commit("mensagem",""),this.$router.push("loan"),this.carregando=!1},3e3)}}},i=a,l=s("2877"),n=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d230c07.169fe208.js.map