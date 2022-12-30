<script>

export default {
    props: {
        text: String,
        type: String,
        submit: Boolean,
        nogame: Boolean,
    },

    data() {
        {
            return {
                typeColor: 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800',
            }
        }
    },

    created() {
        if(this.submit || this.nogame) this.normalButton();
        else this.gameButton();
    },

    methods: {
        gameButton()
        {
            switch (this.type) {
                case "lightning":
                    this.typeColor = "bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800";
                    break;
                case "earth":
                    this.typeColor = "bg-green-600 hover:bg-green-700 active:bg-green-800";
                    break;
                case "ice":
                    this.typeColor = "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800";
                    break;
                case "fire":
                    this.typeColor = "bg-red-600 hover:bg-red-700 active:bg-red-800";
                    break;
                case "normal":
                default:
                    this.typeColor = "bg-gray-600 hover:bg-gray-700 active:bg-gray-800";
                    break;
            }
        },
        normalButton()
        {
            switch (this.type) {
                case "normal":
                    this.typeColor = "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
                    break;
                case "danger":
                    this.typeColor = "bg-orange-600 hover:bg-orange-700 active:bg-orange-800";
                    break;
                case "warning":
                    this.typeColor = "bg-red-600 hover:bg-red-700 active:bg-red-800";
                    break;
                case "nobg":
                default:
                    this.typeColor = "bg-0 border-0 shadow margin-0";
                    break;
            }
        }
    }
}
</script>

<template>
    <button :type="this.submit ? 'submit' : 'button'"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium outline-3 rounded-lg border leading-tight uppercase shadow-md
        text-white hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out" 
        :class="this.typeColor" v-html="text">

    </button>
</template>