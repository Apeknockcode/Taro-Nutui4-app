<template>
    <view class="shopCart">
        <view class="shopCart-header">编辑</view>
        <view class="shopCart-list">
            <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
                <template v-slot="{ item }">
                    <div class="list-item">
                        {{ item }}
                    </div>
                </template>
            </nut-list>
        </view>
    </view>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
export default {

    setup() {
        const state = reactive({
            count: new Array(100).fill(0)
        });

        const handleScroll = () => {
            // let arr = new Array(100).fill(0);
            // const len = state.count.length;
            // state.count = state.count.concat(arr.map((_item: number, index: number) => len + index + 1));
        }
        onMounted(() => {
            state.count = state.count.map((_item: number, index: number) => index + 1);
        })

        return { ...toRefs(state), handleScroll };
    }
}
</script>

<style lang="scss">
.shopCart {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 180rpx;

    .shopCart-header {
        width: 100vw;
        height: 50rpx;
        background: #fff;
        text-align: right;
        font-size: $font26;
        color: $themesColorOwner;
        line-height: 50rpx;
        padding: 0 30rpx;
    }
}
</style>