<template>
    <div>
        <h2>Créer un compte</h2>
        <form @submit.prevent="validation">
            <div>
                <input type="text" required v-model="fullname" />
            </div>
            <div>
                <input type="email" required v-model="email" /> 
            </div>
            <div>
                <input type="password" required v-model="password" />
            </div>
            <button> Valider </button>
            <p>Vous avez déjà un compte ? Connectez vous <router-link to='connexion'> ici </router-link> </p>
        </form>
    </div>
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