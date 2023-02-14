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
        <view class="goods-info">

            <nut-cell class="info-item ch">
                <template v-slot:title>
                    <view class="title">
                        <view class="des ch">领券</view>
                        <view class="use">
                            <view class="Voucher">满150减20</view>
                        </view>
                    </view>
                </template>
                <template v-slot:link>
                    <Right />
                </template>
            </nut-cell>
            <nut-cell class="info-item ch">
                <template v-slot:title>
                    <view class="title">
                        <view class="des ch">已选</view>
                        <view class="use-size ">
                            <view class="size ch">百香果</view>,
                            <view class="size-weight ch">1.0磅(适合3~4人分享)</view>
                        </view>
                    </view>
                </template>
                <template v-slot:link>
                    <Right />
                </template>
            </nut-cell>
            <nut-cell class="info-item ch">
                <template v-slot:title>
                    <view class="title">
                        <view class="des ch">配送</view>
                        <view class="use-size ">
                            <view class="size ch">到店自提</view>
                        </view>
                    </view>
                </template>
                <template v-slot:link>
                    <Right />
                </template>
            </nut-cell>
        </view>
        <view class="split-line"></view>
        <!-- 商品评价 -->
        <view class="comments">
            <view class="comment-header">
                <view class="comment-name">商品评价</view>
                <view class="comment-more ca">查看更多
                    <Right :size="10" />
                </view>
            </view>
            <view class="comment-list">
                <comment />
            </view>
        </view>
        <!-- 商品评价 -->
        <view class="comments">
            <view class="comment-header">
                <view class="comment-name">商品详情</view>
                <view class="comment-more ca">查看更多
                    <Right :size="10" />
                </view>
            </view>
            <view class="details-list">
                <image class="waresImage" mode="scaleToFill" :src="details"></image>

            </view>
        </view>
        <waresSku />
        <waresTabbar />
    </view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
import { Shop3, Clock, Jdl, Right } from '@nutui/icons-vue-taro';
import waresTabbar from "./components/wares-tabbar.vue"
import comment from "./components/comment.vue";
import details from "@/static/images/goods.png"
import waresSku from "./components/wares-sku.vue"
export default {
    components: {
        waresTabbar,
        Shop3,
        Clock,
        Jdl,
        Right,
        comment,
        waresSku
    },
    setup() {
        const state = reactive({
            page: 0,
            current: 1,
            details: details
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
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 180rpx;

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

    .support {
        color: $themesColorOwner;
        font-size: $font24;
        display: flex;
        font-weight: normal;

        .support-item {
            margin-bottom: 10rpx;
            display: flex;
            align-items: center;
            margin-right: 20rpx;

            .nut-icon {
                margin-right: 4rpx;
            }
        }
    }

    .info-item {
        margin: 0rpx;
        box-shadow: none;

        .title {
            display: flex;

            .des {
                margin-right: 20rpx;
                font-size: $font24;
            }

            .use {
                font-size: $fontP20;

                .Voucher {
                    background: url("https://gd-hbimg.huaban.com/2dc229e5c1401f3ecd7fda44727dd58eea00dcd7131b5-fv7hnO_fw658webp") no-repeat;
                    background-size: 100% 100%;
                    padding: 8rpx 16rpx;
                    color: #fff;
                }
            }

            .use-size {
                font-size: $font28;
                color: #000;
                display: flex
            }
        }
    }

    .split-line {
        width: 100vw;
        height: 20rpx;
        background: #FBFBFB;
    }

    .comments {
        .comment-header {
            padding: 20rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .comment-name {
                font-size: $font28;
                font-weight: bold;
                border-left: 8rpx solid $themesColorOwner;
                padding-left: 20rpx;
            }

            .comment-more {
                font-size: $fontP20;
                color: $themeTextColor-3;
            }
        }

        .comment-list {
            padding: 20rpx;


        }

        .details-list {
            width: 100vw;
            height: max-content;
            padding: 0 20rpx;

            .waresImage {
                width: 100%;
                height: 10000rpx;
                object-fit: fill;
                display: block;
            }
        }
    }
}
</style>