<template>
    <view class="discountZone">
        <view class="zone-header">优惠专区</view>
        <view class="zone-content">
            <view class=" box zone-left mr10">

            </view>
            <view class="zone-right">
                <view class="box mb10 right-top">

                </view>
                <view class="box right-bottom">

                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.discountZone {
    width: 100%;

    .zone-header {
        color: $themeTextColor-1;
        font-size: $fontP30;
        margin-bottom: 10px;
    }

    .zone-content {
        display: flex;

        .zone-left {
            width: 50%;
            height: 380px;
            background: #cfcfcf;

        }

        .zone-right {
            width: 100%;

            .right-top {
                width: 100%;
                height: 185px;
                background: #cfcfcf;
            }

            .right-bottom {
                width: 100%;
                height: 185px;
                background: #cfcfcf;
            }
        }

        .box {
            border-radius: 10px;
        }


    }

}
</style>