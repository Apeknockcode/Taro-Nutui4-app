<template>
  <view class="myOrder">
    <tabsComponents :listDate="tabsList">
      <template #list="{ tabItem, tabDate }">
        <!-- <nut-list :height="150"  :listData="count" @scroll-bottom="handleScroll">
            <template v-slot="{ item }">
            </template>
          </nut-list> -->
        <view class="boxContent">
          <view class="box" v-for="item in 20" :key="'box' + item">
            <view class="divider"></view>
            <orderItem :listItem="item" :tabItem="tabItem" :tabDate="tabDate"></orderItem>
          </view>
        </view>
      </template>
    </tabsComponents>
  </view>
</template>

<script setup lang="ts">
import tabsComponents from "../../../components/tabs/tabCompoents.vue";
import orderItem from "./compoents/com-orderItem.vue";
import { useReachBottom } from "@tarojs/taro";

const tabsList = [
  {
    title: "全部",
    key: 0,
  },
  {
    title: "待付款",
    key: 1,
  },
  {
    title: "待收货",
    key: 2,
  },
  {
    title: "已完成",
    key: 3,
  },
  {
    title: "已取消",
    key: 4,
  },
  {
    title: "待评价",
    key: 5,
  },
];

useReachBottom(() => {
  console.log("order - useReachBottom");
});
</script>

<style lang="scss">
.myOrder {
  width: 100vw;
  height: 100vh;

  .divider {
    width: 100vw;
    height: 20rpx;
    background: #f9f7f7;
  }

  .boxContent {
    width: 100%;
    //  height: calc(100vh - 150rpx);
    // overflow-x: hidden;
    // overflow-y: auto;
  }
}
</style>


