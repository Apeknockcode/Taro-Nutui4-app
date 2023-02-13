<template>
    <view class="shopCart">
        <view class="shopCart-header">编辑</view>
        <view class="shopCart-list">
            <nut-checkbox-group v-model="checkboxgroup">
                <nut-list :height="100" :listData="count" @scroll-bottom="handleScroll">
                    <template v-slot="{ item }">
                        <cart :date="item" />
                    </template>
                </nut-list>
            </nut-checkbox-group>

        </view>
        <view class="cartOptions">
            <view class="allCheck">
                <nut-checkbox v-model="allCheck" label="全选">全选</nut-checkbox>
            </view>
            <view class="totalOptions">
                <view class="total ch">
                    <view class="total-number ">
                        <view class="text">合计:</view>
                        <view class="price">
                            <view class="icon">¥</view>
                            269.0
                        </view>
                    </view>
                    <view class="tips-text">
                        (不含运费)
                    </view>
                </view>
                <view class="addCart ch">
                    去结算<view>(2)</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
import cart from "./components/shopCartGoods.vue"
export default {
    components: {
        cart
    },
    setup() {
        const state = reactive({
            allCheck: false,
            count: [
                {
                    id: 1,
                    name: "商品1商品1商品1商品1",
                    image: 'https://gd-hbimg.huaban.com/f63c87b8a62348554457ef393c50c7d0daaf9b9641394-sDxktK_fw658webp',
                    size: "1.2磅",
                    price: "268",
                    flavor: "百香果",
                    num: 1,
                },
                {
                    id: 2,
                    name: "商品1商品1商品1商品1",
                    image: 'https://gd-hbimg.huaban.com/f63c87b8a62348554457ef393c50c7d0daaf9b9641394-sDxktK_fw658webp',
                    size: "1.2磅",
                    price: "268",
                    flavor: "百香果",
                    num: 1,
                },
                {
                    id: 3,
                    name: "商品1商品1商品1商品1",
                    image: 'https://gd-hbimg.huaban.com/f63c87b8a62348554457ef393c50c7d0daaf9b9641394-sDxktK_fw658webp',
                    size: "1.2磅",
                    price: "268",
                    flavor: "百香果",
                    num: 1,
                },
                {
                    id: 4,
                    name: "商品1",
                    image: 'https://gd-hbimg.huaban.com/f63c87b8a62348554457ef393c50c7d0daaf9b9641394-sDxktK_fw658webp',
                    size: "1.2磅",
                    price: "268",
                    flavor: "百香果",
                    num: 1,
                }
            ],
            checkboxgroup: [],
        });

        const handleScroll = () => {
            // let arr = new Array(100).fill(0);
            // const len = state.count.length;
            // state.count = state.count.concat(arr.map((_item: number, index: number) => len + index + 1));
        }
        onMounted(() => {
            // state.count = state.count.map((_item: number, index: number) => index + 1);
        })

        return { ...toRefs(state), handleScroll };
    }
}
</script>

<style lang="scss">
.shopCart {
    width: 100vw;
    height: calc(100vh - 170rpx);
    overflow-y: hidden;
    margin-bottom: 180rpx;
    position: relative;

    .shopCart-header {
        width: 100vw;
        height: 50rpx;
        background: #fff;
        text-align: right;
        font-size: $font26;
        color: $themesColorOwner;
        line-height: 50rpx;
        padding: 0 30rpx;
        border-bottom: 1rpx solid #e7e6e6;
    }

    .cartOptions {
        width: 100vw;
        height: 100rpx;
        background: #fff;
        box-shadow: 0 1rpx 10rpx -2rpx rgba(209, 209, 209, 0.99) inset;
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 20rpx;

        .allCheck {
            .nut-checkbox__label {
                margin-left: 10rpx;
            }
        }

        .totalOptions {
            display: inline-flex;

            .total {
                width: max-content;
                padding-right: 20rpx;
                display: inherit;
                flex-direction: column;
                text-align: right;

                .total-number {
                    display: inherit;

                    .text {
                        font-weight: bold;
                        font-size: $font28;
                        margin-right: 10rpx;
                    }


                    .price {
                        display: inherit;
                        color: $themesColorOwner;
                        font-size: $fontP30;
                        align-items: flex-end;
                        font-weight: bold;

                        .icon {
                            font-size: $fontP20;
                            margin-bottom: 2rpx;
                        }
                    }
                }

                .tips-text {
                    color: $themeTextColor-3;
                    font-size: $font26;
                    width: 100%;
                }
            }

            .addCart {
                width: 200rpx;
                height: 100rpx;
                background: $themesColorOwner;
                color: #fff;
                font-size: $font34;

            }
        }

    }

    .shopCart-list {
        height: calc(100vh - 320rpx);
        overflow-y: auto;

    }

}
</style>