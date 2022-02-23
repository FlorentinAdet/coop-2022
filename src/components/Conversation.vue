<template>
    <router-link :to="{name:'Conversation', params : {idConversation:conversation.id}}" class="box">
        <div class="columns">
            <div class="column is-11">
                <p class="title is-4">{{conversation.topic}}</p>
                <p class="subtitle is-6">{{conversation.label}} / Date de publication : {{created_at()}}</p>
            </div>
            <div class="column is-3">
                <button class="delete is-large" @click.prevent="supprimerConv()"></button>  
            </div>
        </div>
    </router-link>
             
</template>

<script>
export default {
    props: ["conversation"],
     methods:{
        supprimerConv(){
            if(confirm("Supprimer cette conversation ?")){
                this.$api.delete(`channels/${this.conversation.id}`,{
                }).then(response => {
                    console.log("delete");
                })
            }                
        },
         created_at(){
            if(this.conversation) {
                let d = new Date(this.conversation.created_at);
                return (
                    d.toLocaleDateString("fr-FR") + ' à '+ d.toLocaleTimeString("fr-FR")
                );
            }
        },
    },
}

</script>