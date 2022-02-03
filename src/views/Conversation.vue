<template>
    <div>
       <Navigation />
       <section class="section">
            <div class="box" v-if="conversation">
                <p class="title">Sujet : {{conversation.topic}} <span class="tag">{{messages.length}} message(s)</span></p>
                <p class="subtitle">{{conversation.label}}</p>
            </div>
            
            <poster-message :conversation='conversation'/>
            <template v-for="message in messages">  
                <message :message="message" :key="message.id" />             
            </template>
       </section>
    </div>
</template>

<script>
import PosterMessage from '../components/PosterMessage.vue';
import Message from '../components/Message.vue';
export default {
    components: {
        PosterMessage,
        Message,
    },
    data(){
        return{
            conversation: false,
            messages: [],
        };
    },
    mounted() {
        this.chargerConversation();
        this.$bus.$on('charger-conversation', this.chargerConversation)
        this.$bus.$on('charger-messages', this.chargerMessages)
    },
    methods: {
        chargerConversation(){
            let id = this.$route.params.idConversation;
            this.$api.get(`channels/${id}`).then((response) => {
                this.conversation = response.data;
                this.chargerMessages();
            });
        },
        chargerMessages(){
            this.$api.get(`channels/${this.conversation.id}/posts`).then(response => {
                this.messages = response.data;
            });
        },
    },
};
</script>
<style>
</style>