<script setup>
import $ from 'jquery';
</script>
<script>

export default {
    props: {
        text: String,
        name: String,
        type: String,
        id: String,
    },

    data() {
        {
            return {
                
            }
        }
    },

    mounted() {
        let error =  '#' + this.id + '-error-text';
        $(error).hide(); // hide error text by default
    }
}
</script>

<template>
    <div :id = "this.id" class = "my-4">
        <label class="block text-[#ffffff]" :for="text">{{ this.text }}</label>
        <input :type="type" :placeholder="text" :name = "text.toLowerCase()"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
        <span class="text-xs tracking-wide text-red-600" :id = "this.id + '-error-text'" >{{ this.text }} field is required </span>
    </div>
</template>