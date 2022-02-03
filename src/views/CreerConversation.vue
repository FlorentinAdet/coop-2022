<template>
<div>
  <Navigation/>
  <section class="hero">
      <div class="hero-body">
          <div class="container">
              <div class="columns">
                  <div class="column">
                      <div class="box">
                          <form @submit.prevent="validation" class="box">
                              <div>
                                  Sujet
                                  <input v-model="conversation.topic" />
                              </div>
                              <div>
                                  Etiquettes
                                  <input v-model="conversation.label" />
                              </div>
                              <button>Créer une conversation </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
    components : {},
    data(){
        return{
            conversation:{
                topic: "",
                label: "",
            },
        };
    },
    methods:{
        validation(){
            this.$api
                .post("channels", this.conversation)
                .then((response) => {
                    this.$router.push({name:'Conversation',params:{idConversation:response.data.id}})
                })
                .catch((error)=> {
                    alert(error.responsedata.message);
                });
        },
    },
};
</script>

<style>

</style>