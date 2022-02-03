<template>
    <router-link :to="{name:'Membre', params : {idMembre:membre.id}}" class="box">
        <p class="title is-4">{{membre.fullname}}</p>
        <p class="subtitle is-6">{{membre.email}}</p>
    </router-link>
</template>

<script>
export default {
    props: ["membre"],
}
</script>