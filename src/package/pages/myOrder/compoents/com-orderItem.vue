<template>
  <view class="orderItemList">
    <view class="orderItem-header">
      <view class="order-number">订单号:8912313123123123</view>
      <view class="order-status">待付款</view>
    </view>
    <comGoods />
    <comGoods />
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
import comGoods from "./com-goodInfo.vue";
export default {
  components: {
    comGoods,
  },
  setup() {
    return {};
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
  .order-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
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