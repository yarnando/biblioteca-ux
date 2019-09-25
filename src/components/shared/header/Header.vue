<template>
    <b-navbar type="dark" variant="dark" class="mb-4">
        <b-navbar-brand href="#">Biblioteca</b-navbar-brand>

        <b-navbar-nav class="ml-auto" v-if="$store.getters.usuarioLogado">
            <b-nav-text>
                <a @click="sair" href="#">Sair</a>
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