export let usuarioModel = {
    computed: {
        usuario: {
            get() {
                return this.$store.getters.usuario
            }, 
            set(value) {
                this.$store.commit('usuario', value)
            }
        },      
        nomeUsuario: {
            get() {
                return this.$store.getters.nomeUsuario
            }, 
            set(value) {
                this.$store.commit('nomeUsuario', value)
            }
        },      
        senhaUsuario: {
            get() {
                return this.$store.getters.senhaUsuario
            }, 
            set(value) {
                this.$store.commit('senhaUsuario', value)
            }
        },      
    }    
}