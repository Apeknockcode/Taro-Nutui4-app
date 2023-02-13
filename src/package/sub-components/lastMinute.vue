<template>
    <view class="lastMinute-good" v-for="item in list" :key="item.name">
        <view class="goods-Image">
            <image :src="item.image" class="image"> </image>
            <view class="time">
                <Follow class="icon" :size="10" />
                <nut-countdown :startTime="item.serverTime" :endTime="item.end"></nut-countdown>
            </view>

        </view>

        <view class="goods-Info">
            <view class="goods-name">{{ item.name }}</view>
            <view class="goods-des">{{ item.des }}</view>
            <view class="price-Btn">
                <view class="goods">
                    <view class="goods-price">
                        <view class="price">
                            <view class="priceIcon">¥</view>
                            {{ item.price }}
                        </view>
                        <view class="price oldPrice">
                            <view class="priceIcon">¥</view>
                            {{ item.oldPrice }}
                        </view>
                    </view>
                    <view class="progress">
                        <nut-progress :percentage="item.number" stroke-width="14" :stroke-color="!item.state?'rgb(243, 152, 98)':'#ccc' "
                            status="active" :text-inside="true">
                            <view class="proportion" :style="{color:!item.state?'#ff6711':'#999999'}">
                                已抢 100%
                            </view>
                        </nut-progress>
                    </view>
                </view>
                <view class="btn">
                    <nut-button class="btnStyle" :color="!item.state?'#ff6711':'#999999'" :disabled="item.state" type="info">
                        {{!item.state?"立即抢购":"已抢完"}}
                    </nut-button>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import { Follow } from "@nutui/icons-vue-taro"
export default {
    components: {
        Follow
    },
    setup() {
        const state = reactive({

            list: [
                {
                    id: 1,
                    image: "https://gd-hbimg.huaban.com/b8e1d86de589391d33b23f78107aafc6b50fd8ac374bf5-RorKCl_fw658webp",
                    name: '沃尔夫斯堡之春',
                    des: '化在嘴里,都是润滑清香',
                    oldPrice: '218',
                    price: '189',
                    state: false,
                    number: '80',
                    serverTime: Date.now() - 20 * 1000,
                    end: Date.now() + 60 * 1000,
                },
                {
                    id: 2,
                    image: "https://gd-hbimg.huaban.com/b8e1d86de589391d33b23f78107aafc6b50fd8ac374bf5-RorKCl_fw658webp",
                    name: '沃尔夫斯堡之春2',
                    des: '化在嘴里,都是润滑清香2',
                    oldPrice: '218',
                    price: '189',
                    state: true,
                    number: '80',
                    serverTime: Date.now() - 20 * 1000,
                    end: Date.now() + 60 * 1000,
                }
            ]
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss">
.lastMinute-good {
    padding: 16rpx 20rpx;
    display: flex;

    .goods-Image {
        width: 246rpx;
        height: 246rpx;
        position: relative;
        border-radius: 20rpx;
        overflow: hidden;
        margin-right: 10rpx;
        flex-shrink: 0;

        .image {
            width: 100%;
            height: 100%;
        }

        .time {
            position: absolute;
            bottom: 0px;
            left: 0px;

            color: #fff;
            background: $themesColorOwner;
            border-radius: 20rpx;
            padding: 0 20rpx;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
                margin-right: 10rpx;
                margin-bottom: 2rpx;
            }

            .nut-countdown__content {
                font-size: $font22;
            }
        }
    }

    .goods-Info {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .goods-name {
            font-size: $fontP30;
            font-weight: bold;
        }

        .goods-des {
            font-size: $font26;
            color: $themeTextColor-3;
            margin-bottom: 30rpx;
        }

        .price-Btn {
            display: flex;
            justify-content: space-between;

            .goods {
                display: flex;
                flex-direction: column;

                .goods-price {
                    display: flex;

                    .price {
                        display: flex;
                        align-items: flex-end;
                        color: $themesColorOwner;
                        font-size: $fontP30;
                        font-weight: bold;
                        margin-right: 20rpx;
                    }

                    .oldPrice {
                        color: $themeTextColor-3;
                        font-size: $fontP20;
                        text-decoration: line-through;
                    }
                }

                .progress {
                    margin-top: 10rpx;
                    .nut-progress-outer{
                        // border:1rpx solid $themesColorOwner;
                    }
                    .h5-div{
                        width: 100%;
                        text-align: center;
                    }
                    .proportion {
                        font-size: 20rpx;
                        color: $themesColorOwner;
                       
                    }
                }
            }

            .btn {
                
                .btnStyle {
                    width: 200rpx;
                    height: 70rpx;
                    background: $themesColorOwner;
                    border-radius: 10rpx;
                    font-size: $font28;
                }
            }
        }
    }
}
</style>