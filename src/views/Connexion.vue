<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-boyd">
            <div class="container">
                <div class="column is-2 is-offset-5">
                    <h1 class="title">Coop</h1>
                    <h1 class="subtitle">Se connecter</h1>
                </div>
                <div class="column is-6 is-offset-3">
                    <form @submit.prevent="validation">
                        <div class="field">
                            <label class="label">Email : </label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" required v-model="email">
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <label class="label">Mot de passe : </label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password"  required v-model="password" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        
                        <p>Vous n'avez pas de compte ? Créez en un <router-link to='creation-compte'> ici </router-link> </p>
                        <div class="column is-offset-5">
                            <button class="button is-link is-light" > Valider </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            email : 'florentin.adet@gmail.com',
            password : 'test'
        };
    },
    methods: {
        validation() {
            let donnees = {
                email: this.email,
                password : this.password
            };
            this.$api.post('members/signin',donnees)
            .then(response => {
                this.$store.commit('setToken',response.data.token);
                this.$store.commit('setMember', response.data.member);
                this.$router.push("/")
            }).catch(error => {
                console.log(error);
                alert(error.response.data.message);
            });
        }
    },
}
</script>
<style lang="scss">
input{
    width : 60%;
}
h1{
    text-align :center;
}
</style>