<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="#">Biblioteca</b-navbar-brand>

        <b-navbar-nav class="ml-auto" v-if="$store.getters.usuarioLogado">
            <b-nav-text>
                <b-row>
                    <b-col><span>Seja bem vindo, {{$store.getters.usuario.nome}}</span></b-col>
                </b-row>
                <b-row class="text-right">
                    <b-col>
                        <b-col><a @click="sair" href="#">Sair</a></b-col>
                    </b-col>
                </b-row>
            </b-nav-text>
        </b-navbar-nav>

    </b-navbar>
</template>

<script>
export default {
    methods: {
        sair() {
            this.$store.commit('usuarioLogado', false)
            this.$router.push('signin')
        }
    }
}
</script>

<style>

</style>