<template>
    <div>
       <Navigation />
       <section class="section">
           <template v-for="member in $store.state.members" >
                <div class="card-content" :key="member.id">
                    <div class="box card">
                        <div class="media">
                        <router-link :to="{name:'Membre',params:{idMembre:member.id}}" >
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="avatar(member)" />
                                </figure>
                            </div>
                        </router-link>
                            <div class="media-content">
                                <div class="columns">
                                    <div class="column is-11">
                                        
                                    <router-link :to="{name:'Membre',params:{idMembre:member.id}}" >
                                        <p class="title is-4">{{member.fullname}}</p>
                                        <p class="subtitle is-6">{{member.email}}</p>
                                    </router-link>
                                    </div>
                                    <div class="column is-3">
                                        <button class="delete is-large" @click.prevent="supprimerUser(member.id)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
           </template>
       </section>
    </div>
</template>

<script>
export default {
    components : {

    },
    methods:{
        supprimerUser(id){
            if(confirm("Supprimer cet utilisateur ?")){
                this.$api.delete(`members/${id}`,{
                }).then(response => {
                    console.log("delete");
                })
            }                
        },
    },
};
</script>
<style>
</style>