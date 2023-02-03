
<template>
    <nut-searchbar v-model="searchObj.searchValue" :shape="searchObj.shape">
        <template v-slot:leftin>

            <Search2 size="14" />
        </template>
    </nut-searchbar>
</template>

<script>
import { toRefs, reactive, computed } from 'vue';
import { Search2 } from '@nutui/icons-vue-taro';
export default {
    props: {
        searchValue: {
            type: String,
            default: '',
        },
        iconObj: {
            type: Object,
            default: {
                state: false,
                size: "leftin"
            }
        },
        shape: {
            type: String,
            default: 'shape'
        }
    },
    components: { Search2 },
    setup(props, ctx) {

        const searchObj = computed(() => {
            return props
        })
        console.log(searchObj)

        return { searchObj }
    }
}
</script>

<style lang="scss">

</style>