<template>
  <view class="orderItemList">
    <view class="orderItem-header">
      <view class="order-number">订单号:8912313123123123</view>
      <view class="order-status">待付款</view>
    </view>
    <view class="good-list" :class="{ 'hidden': showMore }">
      <comGoods />
      <comGoods />
      <comGoods />
    </view>
    <view class="more-goods ch" v-show="showMore" @click="handleShoeMore">
      共计 3 件
      <RectDown size="9" />
    </view>
    <view class="order-options">
      <view class="order-number">
        共 3 件商品,合计:
        <view class="price">
          <view class="icon">¥</view>
          <view>265</view>
        </view>
      </view>
      <view class="order-btnGroup">
        <nut-button plain size="mini">取消订单</nut-button>
        <nut-button plain size="mini" type="info">去付款</nut-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { RectDown } from "@nutui/icons-vue-taro";
import comGoods from "./com-goodInfo.vue";
import { ref } from "vue";
export default {
  components: {
    comGoods,
    RectDown
  },
  setup() {
    const showMore = ref(true)
    const handleShoeMore = () => {
      console.log('showMore', showMore.value)
      showMore.value = false
    }
    return {
      showMore,
      handleShoeMore
    };
  },
};
</script>

<style lang="scss">
.orderItemList {
  margin-top: 20rpx;
  background: #fff;
  padding: 10rpx 20rpx;

  .orderItem-header {
    font-size: $font24;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .order-status {
      color: $themesColorOwner;
    }
  }

  .good-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .more-goods {
    width: 100%;
    // height:20rpx;
    border-radius: 4rpx;
    background: #eeeded;
    font-size: 18rpx;
  }

  .hidden {
    height: 300rpx;
    overflow-y: hidden;
  }

  .order-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:20rpx;

    .order-number {
      display: flex;
      font-size: $font28;

      .price {
        display: flex;
        align-items: baseline;
        font-size: $fontP30;
        color: $themesColorOwner;
        font-weight: bold;

        .icon {
          font-weight: normal;
          font-size: $font22;
        }
      }
    }

    .order-btnGroup {
      .nut-button:first-child {
        margin-right: 20rpx;
      }
    }
  }
}
</style>