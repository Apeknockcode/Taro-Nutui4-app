<template>
  <view class="goods">
    <view class="goods-image">
      <image
        class="main-image"
        src="https://gd-hbimg.huaban.com/1f8dd4ce003cc413b8b2eb7ee12dff19b0428c6b5fcf9-vNaa2k_fw658webp"
      ></image>
    </view>
    <view class="info">
      <view class="name">商品商品商品商品商品</view>
      <view class="size">百香果(木糖醇),1.0磅</view>
      <view class="price-number">
        <view class="price">¥265</view>
        <view class="number">x1</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.goods {
  display: flex;
  padding: 20rpx 0px;
  .goods-image {
    .main-image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 20rpx;
      flex-shrink: 1;
      margin-right: 20rpx;
    }
  }
  .info {
    width: calc(100vw - 200rpx);
    line-height: 40rpx;
    .name {
      font-size: 20rpx;
      line-height: 30rpx;
      font-size: $font28;
    }
    .size {
      font-size: $font22;
      color: $themeTextColor-3;
    }
    .price-number {
      font-size: $font28;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>