import { computed } from 'vue';
<template>
   <img class="addImage" :src='addImage' />
</template>

<script>
import { computed } from "vue"
export default {
    props: {
        advImage: {
            type: String,
            default: '',
        }
    },

    setup(props, ctx) {
        console.log("props",props.advImage)
        const addImage = computed(() => {
            return props.advImage
        })

        return {
            addImage
        }
    }
}
</script>

<style lang="scss">
.addImage{
    width: 100vw;
    height: 240px;
    z-index: 1;
}

</style> 