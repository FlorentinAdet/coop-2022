<template>
   <transition name="fade">
    <article class="media box" v-if="member && afficher">
        <figure class="media-left">
            <p class="image is-64x64">
                <img :src="avatar(member)" />
            </p>
        </figure>
        <div class="media-content"> 
            <div class="content">
                <p>
                    <router-link
                    :to="{name:'Membre',params:{idMembre:member.id}}">
                    <strong>{{member.fullname}}</strong>
                    </router-link> /
                    <small>{{member.email}}</small> /
                    <small>{{dateMessage}}</small>
                    <br />
                    <span v-html="message.message"></span>
                </p>
            </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    </div>
                    <div class="level-right">
                        <a @click="supprimer" class="level-item"
                            v-if="message.member_id == $store.state.member.id">
                            <span class="icon is-small">
                                <i class="fas fa-trash icon is-small"></i>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
   </transition>
</template>

<script>
export default {
    props: ["message","conversationid"],
    data(){
        return{
            afficher: true,
        }
    },
    methods:{
        supprimer(){
            if(confirm("Supprimer ce message ?")){
                this.$api.delete(`channels/${this.message.channel_id}/posts/${this.message.id}`,{
                }).then(response => {
                    console.log(response);
                    this.afficher = false;
                })
            }
        },
        modifier(){
            
        }
    },
    computed: {
        dateMessage(){
            let d = new Date(this.message.created_at);
            return( 
                d.toLocaleDateString("fr-FR") + " à " + d.toLocaleDateString('fr-FR')
            );
        },
        member(){
            return this.$store.getters.getMembre(this.message.member_id);
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-acitve{
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>