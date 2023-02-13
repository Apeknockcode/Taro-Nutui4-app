<template>
    <view class="goodsDetails">
        <view class="goods-mainImage">
            <nut-swiper :init-page="page" height="400" :loop="true" @change="changeSwiper">
                <nut-swiper-item>
                    <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
                </nut-swiper-item>
                <nut-swiper-item>
                    <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
                </nut-swiper-item>
                <nut-swiper-item>
                    <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
                </nut-swiper-item>
                <nut-swiper-item>
                    <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
                </nut-swiper-item>
                <template v-slot:page>
                    <div class="page"> {{ current }}/4 </div>
                </template>
            </nut-swiper>
        </view>
        <view class="goods-price">
            <view class="price">
                <view class="icon">¥</view>165 - <view class="icon">¥</view>265
            </view>
            <view class="oldPrice">
                ¥265 - ¥365
            </view>
        </view>
        <view class="goods-introduce">
            <view class="name">百香果酸乳酪慕斯（木糖醇）</view>
            <view class="introduce">
                除了酸味，百香果是世界上已知，充满芳香的水果之一。
                冰淇淋口感，不同层次的酸与冰凉
            </view>
            <view class="support">
                <view class="support-item">
                    <Shop3 :size="12" /> 门店自提
                </view>
                <view class="support-item">
                    <Jdl :size="12" /> 商家配送
                </view>
                <view class="support-item">
                    <Clock :size="12" /> 快递
                </view>
            </view>

        </view>
    </view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
import { Shop3, Clock, Jdl } from '@nutui/icons-vue-taro';
export default {
    components: {
        Shop3,
        Clock,
        Jdl
    },
    setup() {
        const state = reactive({
            page: 0,
            current: 1
        });
        const changeSwiper = (index: number) => {
            state.current = index + 1;
        };
        return { ...toRefs(state), changeSwiper };
    }
}
</script>

<style lang="scss">
.goodsDetails {
    width:100vw;

    .goods-mainImage {
        .nut-swiper-item {
            line-height: 150px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .page {
            position: absolute;
            bottom: 10rpx;
            right: 10rpx;
            min-width: 46px;
            padding: 2rpx 20rpx;
            background: rgba(0, 0, 0, 0.33);
            border-radius: 22px;
            text-align: center;
            color: #fff;
            font-size: $font26;
        }
    }

    .goods-price {
        width: 100vw;
        padding: 20rpx;

        .price {
            font-size: $fontP36;
            color: $themesColorOwner;
            font-weight: bold;
            display: flex;
            align-items: baseline;

            .icon {
                font-size: $font22;
            }
        }

        .oldPrice {
            font-size: $font22;
            text-decoration: line-through;
            color: $themeTextColor-3;
        }
    }

    .goods-introduce {
        padding: 0 20rpx 20rpx 20rpx;

        .name {
            font-size: $font34;
            font-weight: bold;

        }

        .introduce {
            font-size: $font28;
            color: $themeTextColor-3;
            margin-bottom: 30rpx;
        }
    }
    .support{
        color: $themesColorOwner;
        font-size: $font24;
        display: flex;
        font-weight: normal;
        .support-item{
            margin-bottom: 10rpx;
            display: flex;
            align-items: center;
            margin-right: 20rpx;
            .nut-icon{
                margin-right: 4rpx;
            }
        }
    }
}
</style>