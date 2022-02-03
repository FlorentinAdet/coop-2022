<template>
  <router-view/>
</template>

<script>
export default {
  name :'App',
  mounted(){
    this.$store.commit("setReady", false);
    
    if(!this.$store.state.token){
      this.seConnecter();
    }else{
      this.$api
        .get(`members/${this.$store.state.member.id}/signedin`)
        .then(this.demarrer)
        .catch(this.seConnecter);
    }
    this.$api.get('ping').then()
      if(!this.$store.state.token){
        this.$router.push('connexion');
      }
  },
  methods:{
    ready(){
      this.$store.commit("setReady", true);
    },
    demarrer(){
      this.$api.get("members").then((response) => {
        this.$store.commit("setMembers", response.data);
        this.ready();
      });
    },
    seConnecter(){
      this.$store.commit("setToken",false);
      this.$router.push("/connexion");
      this.ready();
    },
  },
}
</script>
<style lang="scss">
#app{
  text-align: center 
}
</style>
