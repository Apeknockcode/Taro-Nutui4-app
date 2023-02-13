<template>
    <view class="shopCartGoods">

        <nut-checkbox :label="prop.date.id"></nut-checkbox>
        <view class="goods-image ch">
            <image class="image" :src="prop.date.image" />
        </view>
        <view class="ca goods">
            <view class="goods-info">
                <view class="name ellipsis-line ">
                    {{ prop.date.name }}
                </view>
                <view class="size">
                    {{ prop.date.flavor }} {{ prop.date.size }}
                </view>
                <view class="priceNumber">
                    <view class="price"> <span class="icon">¥</span> {{ prop.date.price }}</view>
                    <view class="number">
                        <nut-input-number v-model="prop.date.num"  @change="onChange"  />
                    </view>
                </view>
            </view>
        </view>


        <view class="goodsLine"></view>
    </view>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue'


export default {
    props: {
        date: {
            type: Object,
            default: () => { }
        }
    },
    setup(props) {
        const prop = computed(() => {
            return props
        })
        const state = reactive(
            {
                checkArray: ''
            }
        )
        const onChange = (value: number)=>{
            console.log(value)
        }

        return {
            ...toRefs(state),
            prop,
            onChange
        }
    }
}
</script> 

<style lang="scss">
.shopCartGoods {
    width: 100vw;
    height: inherit;
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0 20rpx;

    .goods-image {
        height: inherit;

        .image {
            width: 200rpx;
            height: 200rpx;
        }
    }

    .goods {
        width: calc(100vw - 200rpx - 40rpx);
    }

    .goods-info {
        width: 100%;
        margin-bottom: 10rpx;

        .name {
            font-size: $font28;
            color: $themeTextColor-1;
            font-weight: bold;
        }

        .size {
            font-size: $font24;
           
            color: $themeTextColor-3;
            margin-bottom: 50rpx;
        }

        .priceNumber {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            .price {
                display: flex;
                color: $themesColorOwner;
                font-size: $fontP30;
                align-items: flex-end;
                font-weight:bold;

                .icon {
                    font-size: $fontP20;
                    margin-bottom: 2rpx;
                }
            }
        }
    }

    .goodsLine {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 94vw;
        height: 0.5rpx;
        background: #e7e6e6;

    }
}
</style>