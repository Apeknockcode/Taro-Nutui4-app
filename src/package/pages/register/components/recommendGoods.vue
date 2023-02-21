<template>
    <view class="goodsBox" @click="handleWaresPage">

        <!-- <view class="leftIcon">限时特价</view> -->
        <view class="goods-images">
            <!--商品主图位子 -->
        </view>
        <view class="goodsNamePrice">
            <view class="name">情定爱琴海</view>
            <view class="btnGroup">
                <view class="price">
                    <view class="newPrice">¥188</view>
                </view>
                <view class="shopbtn">
                    立即兑换
                </view>
            </view>
        </view>

    </view>
</template>

<script>
import { Cart } from "@nutui/icons-vue-taro"
import Taro from '@tarojs/taro'
export default {
    components: { Cart },
    setup() {

        const handleWaresPage = () => {
            Taro.navigateTo({
                url: '/package/pages/goodDetailPage/index',
            })
        }
        return {
            handleWaresPage
        }
    }
}
</script>

<style lang="scss">
.goodsBox {
    flex-basis: 240rpx;

    width: 240rpx;
    min-width: 240rpx;
    height: auto;
    min-height: 300rpx;
    // background: red;
    border-radius: 12rpx;
    position: relative;
    border: 1rpx solid #f4efef;
    flex-shrink: 0;
    white-space: nowrap;
    margin-bottom: 20rpx;

    .goods-images {
        width: 100%;
        height: auto;
        min-height: calc(300rpx - 40rpx);
        background: #c3c0c0;
        border-radius: 12rpx 12rpx 0 0;
        margin-bottom: 10rpx;
    }

    .leftIcon {
        position: absolute;
        top: 0rpx;
        border-radius: 12rpx 0 12rpx 0rpx;
        left: 0rpx;
        font-size: $font22;
        color: #fff;
        padding: 4rpx 8rpx;
        background: linear-gradient(to top left, $themesColorOwner, $viceThemesColor);
    }

    .goodsNamePrice {
        padding: 4rpx 8rpx;

        .name {
            font-size: $font26;
            color: themeTextColor-1;
            margin-bottom: 4rrpx;
        }

        .btnGroup {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .price {
            font-size: $fontP20;
            color: $themeTextColor-2;
            display: flex;
            align-items: flex-end;

            .newPrice {
                color: $themesColorOwner;
                font-size: $fontP30;
                margin-right: 4rpx;
            }

            .oldPrice {
                margin-bottom: 4rpx;
                text-decoration: line-through;
            }

        }

        .shopbtn {
            //  position: absolute;
            // bottom: 20rpx;
            // right: 16rpx;
            width: max-content;
            padding: 4rpx 10rpx;
            background: #FEE5D3;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $themesColorOwner;
            border-radius: 40rpx;
            font-size: 20rpx;
        }

    }
}
</style>