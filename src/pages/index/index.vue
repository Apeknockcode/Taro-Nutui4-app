<template>
  <view class="index">
    <view class="header-address">
      <userAddress />
      <userSearch :searchValue="searchValue" />
    </view>
    <headerSwiper />
    <goodSort />
    <discountZone class="zone" />
    <lastMinute />
    <advertImage :advImage="advImage" />
    <view class="goodsTabs">
      <tabsComponents :listDate="listDate">
        <template #list="{ tabItem, tabDate }">
          <content :tabItem="tabItem.key" :tabDate="tabDate"></content>
        </template>
      </tabsComponents>
    </view>
  </view>
</template>

<script>
import content from "../../components/content/index.vue";
import userSearch from "../../components/search/search.vue";
import userAddress from "../../components/com-address/com-address.vue";
import headerSwiper from "../../components/swiper";
import goodSort from "../../components/goodSort/goodSort.vue";
import discountZone from "./components/discountZone.vue";
import lastMinute from "./components/lastMinute.vue";
import advertImage from "./components/advertisement.vue";
import tabsComponents from "../../components/tabs/tabCompoents.vue";
import { reactive, toRefs, ref } from "vue";
export default {
  name: "Index",
  components: {
    headerSwiper,
    goodSort,
    userAddress,
    userSearch,
    discountZone,
    lastMinute,
    advertImage,
    tabsComponents,
    content,
  },
  setup() {
    const state = reactive({
      searchValue: "",
      listDate: [
        {
          title: "新品尝鲜",
          key: 0,
        },
        {
          title: "送亲子",
          key: 1,
        },
        {
          title: "送长辈",
          key: 2,
        },
        {
          title: "生日",
          key: 3,
        },
        {
          title: "聚会",
          key: 4,
        },
        {
          title: "下午茶",
          key: 5,
        },
      ],
    });
    const advImage = ref(
      "https://gd-hbimg.huaban.com/8b78b8e8ef1369805af34e4e811a346867588c4410a857-plplFn_fw658"
    );
    return {
      ...toRefs(state),
      advImage,
    };
  },
};
</script>

<style lang="scss">
.header-address {
  display: flex;
  padding: 0 10rpx 8rpx 10rpx;
}

.zone {
  padding: 0 20rpx;
}

.goodsTabs {
  border-radius: 10rpx 10rpx 0 0;
  width: 100vw;
  height: auto;
  min-height: 550rpx;
  background: #fff;
  margin-top: -20rpx;
  z-index: 2;
  position: absolute;
  overflow: hidden;
  padding-bottom: 180rpx;
}
</style>
