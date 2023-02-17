<template>
    <view class="com-address">
        <Location2 size="14" />
        <span class="userAddress">浙江 杭州</span>
    </view>
</template>

<script>
import { Location2 } from '@nutui/icons-vue-taro';
export default {

    components: { Location2 },
    setup() {

        return {}
    }
}
</script>

<style lang="scss">
.com-address {
    display: flex;
    align-items: center;
    min-width: max-content;

    .icon-address {
        font-size: $font28;
        margin-right: 4rpx;
    }

    .userAddress {
        font-size: $font28;
    }
}
</style>