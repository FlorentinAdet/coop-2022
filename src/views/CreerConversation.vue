<template>
<div>
  <Navigation/>
  <section class="hero">
      <div class="hero-body">
          <div class="container">
                  <div class="column">
                    <form @submit.prevent="validation" class="box">
                        <div class="field">
                            <label class="label">Sujet</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Sujet" v-model="conversation.topic">
                            </div>
                            </div>
                            <div class="field">
                                <label class="label">Etiquettes</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Etiquettes" v-model="conversation.label">
                            </div>
                        </div>
                        <div class="control">
                            <button class="button is-primary">Créer une conversation</button>
                        </div>
                    </form>
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