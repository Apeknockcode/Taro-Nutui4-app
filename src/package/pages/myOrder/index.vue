<template>
  <view class="myOrder">
    <tabsComponents :listDate="tabsList">
      <template #list="{ tabItem, tabDate }">
        <nut-list :height="150"  :listData="count" @scroll-bottom="handleScroll">
          <template v-slot="{ item }">
            <view class="divider"></view>
            <orderItem :listItem="item" :tabItem="tabItem" :tabDate="tabDate"></orderItem>
          </template>
        </nut-list>
      </template>
    </tabsComponents>
  </view>
</template>

<script lang="ts">
import tabsComponents from "../../../components/tabs/tabCompoents.vue";
import orderItem from "./compoents/com-orderItem.vue";
import { reactive, toRefs } from "vue";

export default {
  components: {
    tabsComponents,
    orderItem,
  },
  setup() {
    const state = reactive({
      tabsList: [
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
      ],
      count: new Array(20).fill(0),
    });
    const handleScroll = () => {
      console.log();
    };
    return {
      ...toRefs(state),
      handleScroll,
    };
  },
};
</script>

<style lang="scss">
.myOrder {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .divider{
    width: 100vw;
    height:20rpx;
    background: #f9f7f7;
  }
}
</style>