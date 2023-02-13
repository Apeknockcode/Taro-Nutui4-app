<template>
    <view class="voucher">
        <view class="voucher-image cv">
            <view class="price">
                <view class="priceIcon">¥</view>
                15
            </view>
            <view class="condition">
                满50元可用
            </view>
        </view>
        <view class="voucher-info">
            <view class="name">下午茶优惠券</view>
            <view class="tips">仅限于买下午茶商品</view>
            <view class="useTime">
                <view class="time">2019.02.11~2020.02.11</view>
                <Ask :size="9" color='#999999' />
            </view>
            <view class="btnSite">
                <view class="btn"> 去使用</view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { Ask } from "@nutui/icons-vue-taro"
export default {
    components: { Ask },
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.voucher {
    width: 100%;
    display: flex;
    height: 200rpx;
    background: #fff;
    border-radius: 18rpx;
    overflow: hidden;


    .voucher-image {
        width: 200rpx;
        height: 200rpx;
        background: yellowgreen;
        background-size: 100% 100%;
        color: #fff;
        font-size: $font26;
        flex-shrink: 0;

        .price {
            display: flex;
            align-items: baseline;
            font-size: $font48;
            font-weight: bold;

            .priceIcon {
                color: #fff;
                font-size: $font22;
            }
        }

    }

    .voucher-info {
        width: calc(100vw - 200rpx);
        padding-left: 30rpx;
        position: relative;
        padding: 18rpx 20rpx;

        .name {
            font-size: $font28;
            font-weight: bold;
        }

        .tips {
            font-size: $font22;
            color: $themeTextColor-3;
        }

        .useTime {
            width: calc(100vw - 300rpx);
            position: absolute;
            bottom: 18px;
            font-size: 20rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $themeTextColor-3;
        }

        .btnSite {
            position: absolute;
            right: 20rpx;
            top: 50%;
            margin-top: -5%;

            .btn {
                width: 120rpx;
                height: 50rpx;
                background: $themesColorOwner;
                font-size: $font26;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20rpx;
            }

        }
    }
}
</style>