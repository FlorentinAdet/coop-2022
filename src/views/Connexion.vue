<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-boyd">
            <div class="container">
                <div class="column is-centered">
                    <div class="column is-5-tablet is-4-dekstop is-3-widescreen">
                        <div class="box">
                            <h1 class="title">Coop</h1>
                            <h1 class="subtitle">Se connecter</h1>
                        </div>
                        <form @submit.prevent="validation">
                                <div class="field">
                                    <label class="label">Email : </label>
                                    <div class="control">
                                        <input type="email" class="input" required v-model="email" /> 
                                    </div>
                                </div>
                            <div>
                                <input type="password" required v-model="password" />
                            </div>
                            <button> Valider </button>
                            <p>Vous n'avez pas de compte ? Créez en un <router-link to='CreationCompte'> ici </router-link> </p>
                        </form>

                    </div>
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
</style>