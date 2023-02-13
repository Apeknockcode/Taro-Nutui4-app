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
        <view class="goods-introduce"></view>
    </view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
export default {
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
.goodsDetails{
    .goods-mainImage{
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
    .goods-price{
        width: 100vw;
        height:400rpx;
        padding: 20rpx;
        .price{
            font-size: $fontP36;
            color:$themesColorOwner;
            font-weight: bold;
            display: flex;
            align-items: baseline;
            .icon{
                font-size: $font22;
            }
        }
        .oldPrice{
            font-size: $font22;
            text-decoration: line-through;
            color: $themeTextColor-3;
        }
    }
}

</style>