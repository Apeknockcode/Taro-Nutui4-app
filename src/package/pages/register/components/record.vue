<template>
    <view class="record">
        <view class="record-item" v-for="item in 7" :key="'item-' + item">
            <view class="record-number ch">+2</view>
            <view class="record-image ch">
                <Star size="24" />
            </view>
            <view class="record-point ch"></view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { Star } from '@nutui/icons-vue-taro';

</script>

<style lang="scss">
.record {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    color: $themesColorOwner;

    .record-item {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 50rpx;

        .record-number {
            font-size: 24rpx;
            font-weight: 500;
        }

        .record-image {
            margin-top: 10rpx;
        }

        .record-point {
            margin-top: 20rpx;
            width: 24rpx;
            height: 24rpx;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1rpx 1rpx 1rpx rgb(255, 103, 17, 0.95) inset;
        }

        .record-point:before {
            content: '';
            width: 10rpx;
            height: 10rpx;
            border-radius: 100%;
            background: red;
        }
    }

    .record-item:last-child {
        margin-right: 0;
    }

}
</style>