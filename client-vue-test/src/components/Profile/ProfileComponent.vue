<script setup>
import 'remixicon/fonts/remixicon.css';

import TokenService from "../../services/token.service";
</script>


<template>
    <div class="">
        PROFYAH
    </div>
</template>

<script>


export default {
    mounted: function () {
        this.$store.dispatch('user/getData').then(
                (response) => {
                    let ourUserData = {
                        'id': response[0].id,
                        'username': response[0].username,
                        'email': response[0].email,
                    }
                    
                    TokenService.setUser(ourUserData);
                },
                error => {
                    console.log('error');
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
    },
    methods: {

    },
}
</script>
<style scoped>

</style>
