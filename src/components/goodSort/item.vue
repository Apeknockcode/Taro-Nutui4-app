<template>
    <view class="sort-item">
        <view class="item-icon cv">
            <image class="image" :src="sort.icon"></image>
        </view>
        <view class="item-name">{{ sort.iconName }}</view>
    </view>
</template>

<script>
export default {
    props: {
        sort: {
            type: Object,
            default: () => { { icon: ''; iconName: '' } }
        }
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
.sort-item {
    width: inherit;
    height: inherit;
    .item-icon{
        .image{
            width: 100rpx;
            height: 100rpx;
        }
        
    }
    .item-name{
        text-align: center;
        font-size: $font24;
    }
   
}
</style>