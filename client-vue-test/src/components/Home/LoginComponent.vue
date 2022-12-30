<script setup>
import $ from 'jquery';
import 'remixicon/fonts/remixicon.css';

import UIForm from '../UI/UIFormComponent.vue';
import UIInput from '../UI/UIInputComponent.vue';
import UIButton from '../UI/UIButtonComponent.vue';

import Language from "../../config/language";
import Notification from '../../models/Notification';
</script>

<template>
    <UIForm :text="formName" :id="formId + '-form'" @submit="onSubmit">
        <li v-for="field in formFields" :key="field.id" class="inline">
            <UIInput :text="field.text" :type="field.type" :id="((field.id) + '-' + formId)" />
        </li>
        <UIButton :text="Language.get('Login')" type="normal" submit />
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
        'text': 'Password',
        'name': 'password',
        'type': 'password',
        'id': 'password',
    },
];

// 
/**
 * ? when submitting, getElements() will turn the fields into an accessible array, as such
 * this.fields['fieldId'] = {
 *  input: input field id
 *  error: error span id
 * }
 * 
 * to easily access with this.fields.email.input.val() // for example
 */
import NewAccount from '../../models/NewAccount';

export default {
    data() {
        {
            return {
                formName: '',
                formId: 'login',
                fields: {},
            }
        }
    },

    created() {
        this.formName = Language.get('LoginFormText');
        this.formElement = $('#' + this.formId);
    },

    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            
        }
    },
    
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.getElements();
            this.loading = true;

            const account = new NewAccount(this.fields['username'].input.val(), '', this.fields['password'].input.val());

            if (!account.validate()) {
                return;
            } 


            this.$store.dispatch('auth/login', account).then(
                () => { // response not used
                    new Notification(Language.get('LoginSuccess'), Notification.Types.Success);
                    this.$router.push('/profile');
                },
                error => {                    
					new Notification(JSON.parse(error.request.response)['message'], Notification.Types.Error);
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );

        },
        getElements() {
            formFields.forEach((field) => {
                this.fields[field.id] =
                {
                    input: $('#' + field.id + '-' + this.formId + ' > input'), // this.fields['email'].input.val()
                    error: $('#' + field.id + '-' + this.formId + ' > span') // this.fields['email'].error.show()
                }
            })
        },
    }
}
</script>
<style scoped>

</style>
