<template>
    <view class="payPage">
        <view class="payResult">
            <image class="state-image"
                src="https://gd-hbimg.huaban.com/52c4cee6bd76c56c15fa05cdefdd65004d24ca4dc389-HAB3mR_fw658webp"></image>
            <view class="pay-info">
                <view class="state-text">支付成功</view>
                <view class="pay-price">
                    实付:<view class="price">¥44.0</view>
                </view>
            </view>
        </view>
        <view class="payButton">
            <view class="pay-button-text ch">查看订单</view>
            <view class="pay-button-text ch">取货码</view>
        </view>
        <view class="goodsRecommend">
            <content />
        </view>
    </view>
</template>

<script lang="ts">
import content from "../../../components/content/index.vue"
export default {
    components: { content },
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.payPage {
    .payResult {
        display: flex;
        justify-content: center;
        align-items: center;

        .state-image {
            width: 300rpx;
            height: 300rpx;
        }

        .pay-info {
            display: flex;
            flex-direction: column;

            .state-text {
                font-size: $font48;
                font-weight: bold;
            }

            .pay-price {
                font-size: $font26;
                font-weight: bold;
                display: flex;
                align-items: center;

                .price {
                    font-size: $fontP30;
                    color: $themesColorOwner;
                }
            }
        }
    }

    .payButton {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100rpx;

        .pay-button-text:first-child {
            margin-right: 30rpx;
        }

        .pay-button-text:last-child {
            color: $themesColorOwner;
            border-color: $themesColorOwner;
        }

        .pay-button-text {
            width: 200rpx;
            height: 70rpx;
            border-radius: 40rpx;
            border: 1rpx solid $themeTextColor-3;
            color: $themeTextColor-3
        }
    }
}
</style>