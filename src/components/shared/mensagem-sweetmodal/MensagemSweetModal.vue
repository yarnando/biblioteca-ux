<template>

    <sweet-modal 
        ref="mensagem" 
        overlay-theme="dark"
        :icon="tipo"
        blocking 
        v-on:close="onClose"
        :hide-close-button="esconderFecharMsg">
        <p class="mensagem">{{mensagem}}</p>
        <div class="sweet-buttons" v-if="msg_btn_confirma">
            <button type="button" @click="$emit('aoConfirmar')" class="btn btn-danger" >{{msg_btn_confirma}}</button>    
            <button type="button" @click="$refs.mensagem.close()" class="btn btn-secondary" >{{msg_btn_cancela}}</button>          
        </div>
    </sweet-modal>    

</template>

<script>

import { SweetModal } from 'sweet-modal-vue'

export default {
    
    components: {SweetModal},

    props: { //SUGESTÃO: colocar essa prop no vueX
        display: {
            required: true,
            type: Boolean
        },
        tipo: String,
        mensagem: {
            required: true,
            type: String
        },
        esconderFecharMsg: Boolean,
        onClose: Function,
        msg_btn_confirma: String,
        msg_btn_cancela: String,
    },

    watch: {
        display() {
            if(this.display){
                this.$refs.mensagem.open();
                
            } else {
                this.$refs.mensagem.close();
            }               
        }        
    },

    mounted() {

        if(this.display){
            this.$refs.mensagem.open();
        } else {
            this.$refs.mensagem.close();
        } 
      
    },

}

</script>

<style scoped>

.sweet-buttons {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0%;
    border-top: 1px solid #cccccc4d;
    margin-top: 50px;
}
.mensagem {
    margin-bottom: 4rem;    
}
.sweet-button, .sweet-button > a {
    color: #fff;
}
.sweet-button {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: default;
    display: inline-block;
    text-decoration: none;
    outline: 0;
    text-align: center;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    background: #1E88E5;
        background-color: rgb(30, 136, 229);
    border: 1px solid #1468b1;
        border-top-color: rgb(20, 104, 177);
        border-right-color: rgb(20, 104, 177);
        border-bottom-color: rgb(20, 104, 177);
        border-left-color: rgb(20, 104, 177);
    border-radius: 2px;
    transition: all 0.2s;
    cursor: pointer;

}


</style>

