<template>
    <view class="orderDetails">
        <view class="details-header">
            <view class="wares-status">
                订单已完成
            </view>
            <view class="wares-tips">
                感谢你的购买,欢迎下次光临.
            </view>
        </view>
        <view class="wares-list">
            <comGoods />
            <comGoods />
            <comGoods />
        </view>
        <view class="orderInfoContent">
            <view class="order-info">
                <view class="item">
                    订单号: <view>123123123123123</view>
                </view>
                <view class="item">
                    下单时间: <view>2019-03-31 13:00</view>
                </view>
            </view>
            <view class="order-info">
                <view class="item">
                    支付方式: <view>卡包支付</view>
                </view>
                <view class="item">
                    支付时间: <view>2019-03-31 13:00</view>
                </view>
            </view>
            <view class="order-info">
                <view class="item">
                    配送方式: <view>商家配送</view>
                </view>
                <view class="item">
                    送达时间: <view>2019-03-31 13:00</view>
                </view>
            </view>
        </view>

        <view class="order-info-price">
            <view class="item">
                商品金额: <view>¥499.0</view>
            </view>
            <view class="item">
                运费: <view>+ ¥0.0</view>
            </view>
            <view class="item">
                优惠金额: <view>- ¥20.0</view>
            </view>
        </view>
        <view class="pay-price">
            实付金额:
            <view class="price">
                <view class="price-icon">¥</view>499.0
            </view>
        </view>
        <view class="order-footer">
            <nut-button plain size="mini">申请售后</nut-button>
            <nut-button plain size="mini" type="info">去评价</nut-button>
        </view>
    </view>
</template>

<script setup lang="ts">
import comGoods from "../myOrder/compoents/com-goodInfo.vue";
</script>

<style lang="scss">
.orderDetails {
    background: #f0eeee;
    color: $themeTextColor-1;
    padding-bottom: 180rpx;

    .details-header {
        width: 100%;
        height: 200rpx;
        background: linear-gradient(to right, #ffbf25, #ff6711);
        padding: 0 20rpx;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .wares-status {
            font-size: 40rpx;
            color: #fff;
            margin-bottom: 10rpx;
        }

        .wares-tips {
            font-size: 30rpx;
            color: #fff;

        }
    }

    .wares-list {
        padding: 10rpx 20rpx;
        margin-bottom: 25rpx;
        background: #fff;

        .goods {
            border-bottom: 1rpx solid #f3f2f2;
        }

        .goods:last-child {
            border-bottom: none;
        }
    }

    .orderInfoContent {
        margin-bottom: 25rpx;
        background: #fff;
        padding: 10rpx 20rpx;

        .order-info {
            .item {
                font-size: 30rpx;
                height: 80rpx;
                display: flex;
                align-items: center;
                color: #464646;

                view {
                    display: flex;
                    align-items: center;
                    color: #bdbcbc;
                    margin-left: 20rpx;
                }
            }
        }
    }

    .order-info-price {
        padding: 10rpx 20rpx;
        background: #fff;

        .item {
            font-size: 30rpx;
            height: 80rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;

            view {
                font-weight: bold;
            }
        }
    }

    .pay-price {
        margin-bottom: 25rpx;
        display: flex;
        padding: 10rpx 20rpx;
        justify-content: flex-end;
        font-weight: bold;
        background: #fff;
        align-items: center;

        .price {
            color: $themesColorOwner;
            display: flex;
            align-items: baseline;
            font-size: 48rpx;
            margin-left: 20rpx;

            .price-icon {
                font-size: 30rpx;
            }
        }
    }

    .order-footer {
        width: 100%;
        height: 180rpx;
        background: #fff;
        position: fixed;
        bottom: 0rpx;
        left: 0rpx;
        padding: 20rpx 20rpx;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid #f0eeee;

        .nut-button:first-child {
            margin-right: 20rpx;
        }
    }
}
</style>