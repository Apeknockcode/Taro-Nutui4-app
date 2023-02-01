<template>
    <view class="lastMinute">
        <view class="last-title">
            <view class="title">限时抢购</view>
            <view class="more">
                查看更多
                <RectRight size="10" />
            </view>
        </view>
        <view class="goodsItem scroll">
            <goodsBox class="item" v-for="item in 10" :key="item + '1'" />
        </view>
    </view>
</template>

<script>
import goodsBox from "../../../components/goodsBox.vue"
import { RectRight } from "@nutui/icons-vue-taro";
export default {
    components: {
        goodsBox,
        RectRight
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.lastMinute {
    padding: 20px 10px 10px 10px;

    .last-title {
        font-size: $fontP20;
        color: $themeTextColor-2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        .title {
            font-size: $fontP30;
            color: $themeTextColor-1;
        }
    }

    .goodsItem {
        .item {
            margin-right: 10px;
        }

        .item:last-child {
            margin-right: 0px;
        }
    }


}
</style>