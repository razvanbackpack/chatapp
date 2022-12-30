<script setup>
import $ from 'jquery';
import 'remixicon/fonts/remixicon.css';

import UIForm from '../UI/UIFormComponent.vue';
import UIInput from '../UI/UIInputComponent.vue';
import UIButton from '../UI/UIButtonComponent.vue';
</script>

<template>
    <UIForm :text="formName" :id="formId" @submit="onSubmit">
        <li v-for="field in formFields" :key="field.id" class="inline">
            <UIInput :text="field.text" :type="field.type" :id="((field.id) + '-' + formId)" />
        </li>
        <UIButton text="Register" type="normal" submit />
    </UIForm>
</template>

<script>
const formFields = [    
    {
        'text': 'Username',
        'name': 'Username',
        'type': 'text',
        'id': 'username',
    },
    {
        'text': 'Email',
        'name': 'email',
        'type': 'text',
        'id': 'email',
    },
    {
        'text': 'Password',
        'name': 'password',
        'type': 'password',
        'id': 'password',
    },
    {
        'text': 'Password repeat',
        'name': 'password-repeat',
        'type': 'password',
        'id': 'password-repeat',
    },
];


export default {
    data() {
        {
            return {
                formName: '',
                formId: 'register',
                fields: {},
            }
        }
    },

    created() {
        this.formName = 'Create an account';
        this.formElement = $('#' + this.formId);
    },

    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.getElements();
            this.$emit('register', this.fields);
        },
        getElements() {
            formFields.forEach((field) => {
                this.fields[field.id] = 
                {
                    input:$('#' + field.id + '-' + this.formId + ' > input'), // this.fields['email'].input.val()
                    error:$('#' + field.id + '-' + this.formId + ' > span') // this.fields['email'].error.show()
                }
            })

        },
    }
}
</script>
<style scoped>

</style>
