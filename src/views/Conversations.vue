<template>
    <div>
       <Navigation />
       <template v-for="conversation in conversations">  
           <conversation :key="conversation.id" :conversation="conversation" />             
       </template>
    </div>
</template>

<script>
import Conversation from "../components/Conversation.vue";
export default {
    components: {
        Conversation,
    },
    data(){
        return{
            conversations: [],
        };
    },
    mounted(){
        this.$api.get("channels").then((response) =>{
            this.conversations = response.data;
        })
    }
    
};
</script>
<style>
</style>