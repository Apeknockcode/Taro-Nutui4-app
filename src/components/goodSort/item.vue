<template>
    <view class="sort-item">
        <view class="item-icon cv">
            <i :class="sort.icon"></i>
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
        .icon{
            font-size: $font48;
        }
        
    }
    .item-name{
        font-size: $font24;
    }
   
}
</style>