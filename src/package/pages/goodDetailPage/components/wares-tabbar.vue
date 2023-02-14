<template>
    <view class="wares">
        <view class="options">
            <view class="service ch">
                <Service :size="20" />
            </view>
            <view class="shopCart ch">
                <nut-badge :value="8">
                    <Cart2 :size="20" />
                </nut-badge>
            </view>
        </view>
        <view class="btn-options">
            <view class="btn-shopCart ch">加入购物车</view>
            <view class="btn-buy ch">立即购买</view>
        </view>
    </view>
</template>

<script lang="ts">
import { Service, Cart2 } from '@nutui/icons-vue-taro';

export default ({
    components: {
        Service,
        Cart2
    },
    setup() {


        return {}
    }
})
</script>

<style lang="scss">
.wares {
    width: 100vw;
    height: 100rpx;
    background: #fff;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    padding-bottom: 80rpx;

    .options {
        width: 30vw;
        display: flex;
        height: 100rpx;
        background: #fff;
        .service {
            width: 15vw;
            font-size: $font28;
        }

        .shopCart {
            width: 15vw;
            font-size: $font28;
        }
    }

    .btn-options {
        width: 70vw;
        height: 100rpx;
        display: flex;
        color: #fff;
        background: #fff;
        font-size: $font28;

        .btn-shopCart {
            width: 35vw;
            height: 100rpx;
            background: $viceThemesColor;

        }

        .btn-buy {
            width: 35vw;
            height: 100rpx;
            background: $themesColorOwner;
        }
    }
}
</style>