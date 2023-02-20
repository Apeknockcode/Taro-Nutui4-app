<template>
    <view class="person">
        <view class="interface">
            <view class="personInfo">
                <nut-avatar size="large">
                    <img
                        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
                </nut-avatar>
                <view class="person-name">
                    派大星
                </view>
            </view>
            <view class="Sign" @click="handleRegister">
                <Date /> 签到有礼
            </view>
            <view class="member">
                会员信息
            </view>
        </view>
        <view class="order">
            <view class="order-header">
                <view class="title">我的订单</view>
                <view class="all-order" @click="handleOrderCenter">
                    全部订单
                    <RectRight size="12" />
                </view>
            </view>
            <view class="order-sort">
                <nut-row :gutter="20" class="orderList" type="flex" flex-wrap="wrap" justify="space-around">
                    <nut-col class="orderList-item" :span="6" v-for="item in orderList" :key="'order' + item.key">
                        <nut-badge :value="0">
                            <img class="image" :src="item.icon" alt="">
                        </nut-badge>

                        <view class="name"> {{ item.name }}</view>
                    </nut-col>
                </nut-row>
            </view>
        </view>
        <view class="order-line"></view>
        <view class="setting">
            <nut-cell-group>
                <nut-cell v-for="item in setList" :key="'set' + item.key" @click="handleGroup(item.key)">
                    <template v-slot:title>
                        <img class="setGroup" :src="item.icon" alt="">
                        <view class="name"> {{ item.name }} </view>
                    </template>
                    <template v-slot:link>
                        <RectRight size="14" />
                    </template>
                </nut-cell>
            </nut-cell-group>
        </view>

        <nut-toast :msg="page.state.msg" :duration='3000' v-model:visible="page.state.show" :type="page.state.type"
            @closed="page.methods.onClosed" :cover="page.state.cover" />
    </view>
</template>

<script lang="ts">
import { Date, RectRight } from "@nutui/icons-vue-taro"
import { reactive, toRefs } from "vue";
import Taro from '@tarojs/taro'
export default {
    components: { Date, RectRight },
    setup() {

        const state = reactive(
            {
                orderList: [
                    {
                        name: "待付款",
                        key: 0,
                        icon: require("../../static/images/image-14.png")
                    },
                    {
                        name: "待收货",
                        key: 1,
                        icon: require("../../static/images/image-16.png")
                    },
                    {
                        name: "待评价",
                        key: 2,
                        icon: require("../../static/images/image-17.png")
                    },
                    {
                        name: "退款/售后",
                        key: 3,
                        icon: require("../../static/images/image-18.png")
                    }
                ],
                setList: [
                    {
                        name: "收获地址",
                        key: 0,
                        icon: require("../../static/images/image-30.png")
                    },
                    {
                        name: "收藏夹",
                        key: 1,
                        icon: require("../../static/images/image-31.png")
                    },
                    {
                        name: "卡包",
                        key: 2,
                        icon: require("../../static/images/image-32.png")
                    },
                    {
                        name: "领券中心",
                        key: 3,
                        icon: require("../../static/images/image-33.png")
                    },
                    {
                        name: "签到有礼",
                        key: 4,
                        icon: require("../../static/images/image-34.png")
                    },
                    {
                        name: "客服中心",
                        key: 5,
                        icon: require("../../static/images/image-35.png")
                    },
                    {
                        name: "账号设置",
                        key: 6,
                        icon: require("../../static/images/image-36.png")
                    }
                ],

            }
        )

        const page = {
            state: reactive({
                msg: 'toast',
                type: 'text',
                show: false,
                cover: false,
                title: '',
                bottom: '',
                center: true,
            }),
            methods: {
                openToast: (type: string, msg: string, cover: boolean = false, title: string = '', bottom: string = '', center: boolean = true) => {
                    page.state.show = true;
                    page.state.msg = msg;
                    page.state.type = type;
                    page.state.cover = cover;
                    page.state.title = title;
                    page.state.bottom = bottom;
                    page.state.center = center
                },
                onClosed: () => console.log('closed')
            }
        }


        const handleOrderCenter = () => {
            Taro.navigateTo({
                url: '/package/pages/myOrder/index',
            })
        }
        const handleGroup = (index) => {
            console.log(index)
            if (index == 3) {
                Taro.navigateTo({
                    url: '/package/pages/cardVoucherCenter/index',
                })
            } else {
                console.log("23")
                page.methods.openToast('text', '待开发中~')
            }

        }
        const handleRegister = () => { 
            Taro.navigateTo({
                 url: '/package/pages/register/index'
            });
        }

        return {
            page,

            ...toRefs(state),
            handleOrderCenter,
            handleGroup,
            handleRegister
        }
    }
}
</script>

<style lang="scss">
.person {
    padding-bottom: 180rpx;

    .interface {
        width: 100vw;
        height: 320rpx;
        background: #FF964B;
        position: relative;
        padding-top: 60rpx;

        .personInfo {
            display: flex;
            align-items: center;
            width: 90vw;
            margin: 0 auto;

            .person-name {
                margin-left: 30rpx;
                font-size: $font34;
                color: #fff;
            }
        }

        .member {
            width: 90vw;
            height: 120rpx;
            background: #fff;
            border-radius: 12rpx;
            position: absolute;
            margin: 0 auto;
            bottom: -50rpx;
            left: 0rpx;
            right: 0rpx;
            -webkit-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);

        }

        .Sign {
            width: max-content;
            height: 50rpx;
            padding: 8rpx 10rpx 8rpx 20rpx;
            background: rgba($color: #ffff, $alpha: 0.5);
            font-size: $font28;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-top-left-radius: 50rpx;
            border-bottom-left-radius: 50rpx;
            position: absolute;
            right: 0px;

            top: 100rpx;
        }
    }

    .order {
        background: #fff;

        .order-header {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30rpx;
            padding-top: 100rpx;

            .title {
                font-size: $font34;
            }

            .all-order {
                display: flex;
                align-items: center;
                font-size: $font24;
                color: $themeTextColor-3;
            }
        }

        .order-sort {
            padding: 20rpx 0rpx;

            .orderList-item {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .image {
                    width: 80rpx;
                    height: 80rpx;
                }

                .name {
                    font-size: $font28;
                    color: $themeTextColor-1;
                }
            }

        }


    }

    .order-line {
        width: 100vw;
        height: 20rpx;
        background-image: linear-gradient(#fff, #faf8f8);
    }

    .setting {
        .setGroup {
            width: 50rpx;
            height: 50rpx;
        }

        .nut-cell__title {
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            align-items: center;
        }

    }
}
</style>