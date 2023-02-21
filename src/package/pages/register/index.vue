<template>
    <view class="register">
        <view class="register-header">
            <view class="integral">
                5400
            </view>
            <view class="integral-tips">我的积分</view>

            <view class="registerBox">
                <view class="registertatol">
                    <view class="day">
                        <view class="dayTitle">已连续签到</view>
                        <view class="dayGrounp ch">
                            <view class="days">3</view>天
                        </view>
                    </view>
                    <view class="registerBtn ch">
                        立即签到 +10
                    </view>
                </view>
                <view></view>
            </view>
        </view>
        <view class="recommend-list">
            <view class="recommend-header">
                <view class="header-left">
                    人气推荐
                </view>
                <view class="header-right">
                    查看全部
                    <RectRight size="12" />
                </view>
            </view>

            <view class="list-content">
                <listComponent />
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { RectRight } from '@nutui/icons-vue-taro';
import listComponent from "./components/listComponent.vue"
</script>

<style lang="scss">
.register {
    .register-header {

        width: 100vw;
        height: 380rpx;
        background: linear-gradient(to right, $viceThemesColor, $themesColorOwner);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20rpx;
        color: #fff;
        position: relative;
        margin-bottom: 350rpx;

        .integral {
            font-size: 60rpx
        }

        .integral-tips {
            font-size: 30rpx;
            margin-bottom: 30rpx;

        }

        .registerBox {
            position: absolute;
            width: 95%;
            height: 400rpx;
            background: #fff;
            border-radius: 10rpx;
            top: 300px;
            left: 0px;
            right: 0px;
            margin: 0 auto;
            box-shadow: 0px 4px 14px -1px rgba(0, 0, 0, 0.56);
            padding: 40rpx 30rpx;

            .registertatol {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }


            .day {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #A2A2A2;
                font-size: 24rpx;

                .dayTitle {}

                .dayGrounp {
                    .days {
                        color: $themesColorOwner;
                    }

                }

            }

            .registerBtn {
                width: 250rpx;
                height: 80rpx;
                background: linear-gradient(to right, $viceThemesColor, $themesColorOwner);
                border-radius: 80rpx;
                color: #fff;
                font-size: 30rpx;
            }

        }
    }

    .recommend-list {
        width: 100vw;
        padding: 0 20rpx;

        .recommend-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20rpx;

            .header-left {
                border-left: 10rpx solid $themesColorOwner;
                font-size: $font34;
                padding-left: 20rpx;
                font-weight: bold;
            }

            .header-right {
                display: flex;
                align-items: center;
                font-size: $font24;
                color: $themeTextColor-3;
            }

        }
    }
}
</style>