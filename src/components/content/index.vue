
<template>
    <nut-row :gutter="20" class="contentGoods" type="flex" flex-wrap="wrap" justify="space-around" >
        <nut-col :span="12" v-for="item in 10">
            <goodsBox />
        </nut-col>
    </nut-row>
</template>
<script>
import { computed } from "vue";
import goodsBox from "../goodsBox.vue"
export default {
    props: {
        key: {
            type: Number,
            default: 0
        },
        date: {
            type: Array,
            default: () => []
        }
    },
    components: {
        goodsBox
    },

    setup(props, ctx) {
        console.log("props", props)
        const prop = computed(() => {
            return props
        })
        return {
            prop
        }
    }
}
</script>
<style lang="scss">

.nut-tab-pane{
    padding: 10rpx 10rpx !important;
}
.contentGoods{
    .nut-col-gutter:first-child{
        padding-left: 20rpx !important;
    }
    .nut-col-gutter:last-child{
        padding-right: 20rpx !important;
    }
    .goodsBox {
    width: 100%;
    height: auto;
    min-height: 440rpx;
    border-radius: 12rpx;

    .goods-images {
        width: 100%;
        height: auto;
        min-height: calc(400rpx - 60rpx);
        background: #c3c0c0;
        border-radius: 12rpx 12rpx 0 0;
        margin-bottom: 10rpx;
    }
}
}


</style>
