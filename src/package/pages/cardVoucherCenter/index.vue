<template>
    <view class="voucherCenter">
        <!-- 领券中心 -->
        <view class="center" :class="{ 'enter': tabIndex == 0, 'leave': tabIndex == 1 }" v-show="tabIndex == 0">
            <view class="voucher-header">
                <nut-row :gutter="10">
                    <nut-col :span="8" v-for="item in sortList" :key="item.name" @click="handleChange(item.key)">
                        <view class="flex-content">
                            {{ item.name }}({{ item.number }})
                            <view class="line-bottom" v-show="index == item.key"></view>
                        </view>
                    </nut-col>

                </nut-row>
            </view>
            <view class="voucherList">
                <voucher />
            </view>
        </view>

        <!-- 我的卡券 -->
        <view class="my" :class="{ 'leave': tabIndex == 0, 'enter': tabIndex == 1 }" v-show="tabIndex == 1">
            <voucher />
        </view>

        <!-- 底部 tabber -->
        <view class="voucher-footer">
            <view class="box voucher-center" :class="{ 'active': tabIndex == 0 }" @click="handeTabbar(0)">
                我的卡券
            </view>
            <view class="box my-voucher" :class="{ 'active': tabIndex == 1 }" @click="handeTabbar(1)">
                领券中心
            </view>
        </view>

    </view>
</template>

<script lang="ts">
import voucher from "../../sub-components/voucher.vue"
import { reactive, toRefs } from 'vue';
export default {
    components: {
        voucher
    },
    setup() {
        const state = reactive({
            index: 0,
            tabIndex: 0,
            sortList: [
                {
                    key: 0,
                    name: '未使用',
                    number: 10
                },
                {
                    key: 1,
                    name: '使用记录',
                    number: 10
                },
                {
                    key: 2,
                    name: '已过期',
                    number: 10
                }
            ]
        })

        const handleChange = (value: number) => {
            console.log('value', value)
            state.index = value
        }
        const handeTabbar = (value: number) => {
            state.tabIndex = value
        }

        return {
            ...toRefs(state),
            handleChange,
            handeTabbar
        }
    }
}
</script>

<style lang="scss">
.voucherCenter {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background: #ccc;
    position: relative;

    .my {
        padding: 20rpx;
    }

    .enter {
        animation: enter 0.5s forwards;
    }

    .leave {
        animation: leave 0.5s forwards;
    }

    @keyframes enter {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes leave {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }


    .voucher-header {
        background: #fff;
        height: 80rpx;
        margin-bottom: 20rpx;

        .nut-row,
        .nut-col {
            height: inherit;
        }

        .flex-content {
            height: inherit;
            text-align: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .line-bottom {

            height: 8rpx;
            border-radius: 10rpx;
            background: $themesColorOwner;
            position: absolute;
            bottom: 0px;
            margin: 0 auto;
            animation: active .3s forwards;
        }

        @keyframes active {
            0% {
                width: 4rpx;
                transform: scaleX(0);
                opacity: 0;
            }

            100% {
                width: 50%;
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    .voucherList {
        padding: 0 20rpx;
    }

    .voucher-footer {
        position: absolute;
        height: 170rpx;
        bottom: 0rpx;
        left: 0px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding-top: 20rpx;

        .box {
            width: 50%;
            height: 50rpx;
            text-align: center;
            font-size: $font28;
        }

        .voucher-center {
            border-right: 1rpx solid #ccc;
        }

        .active {
            color: $themesColorOwner;
        }
    }
}
</style>