<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-boyd">
            <div class="container">
                <div class="column is-2 is-offset-5">
                    <h1 class="title">Coop</h1>
                    <h1 class="subtitle">Créer un compte</h1>
                </div>
                <div class="column is-6 is-offset-3">
                    <form @submit.prevent="validation">
                        <div class="field">
                            <label class="label">Pseudo : </label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="pseudo" required  v-model="fullname">
                                 <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
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
                        <button> Valider </button>
                        <p>Vous avez déjà un compte ? Connectez vous <router-link to='connexion'> ici </router-link> </p>
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
            fullname : "Florentin Adet",
            email : 'florentin.adet@gmail.com',
            password : 'test'
        };
    },
    methods: {
        validation() {
            let donnees = {
                fullname: this.fullname,
                email: this.email,
                password : this.password
            };
            this.$api.post('members',donnees)
            .then(response => {
                alert('Votre compte a été créé. Vous pouvez vous connecter.');
                this.$router.push('/Connexion');
            }).catch(error =>{
                alert(error.response.data.message);
            })
        }
    },  
}
</script>

<style>

</style>