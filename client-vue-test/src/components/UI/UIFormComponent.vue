<script>

export default {
    props: {
        action: String,
        text: String,
        id: String,
    },

    data() {
        {
            return {

            }
        }
    },

    created() {

    },

    methods: {

    }
}
</script>

<template>
    <!-- TODO: do something about px-0 py-0 -->
    <div class="px-0 py-0">
        <div class="flex justify-center">
        </div>
        <h3 class="text-2xl font-bold text-center"> {{ this.text }} </h3>
        <form :action="this.action" class="text-black" :id = "this.id">
            <div class="mt-4">
                <slot></slot>
            </div>
        </form>
    </div>
</template>