
<template>
  <nut-tabbar @tab-switch="tabSwitch" v-model="active" safe-area-inset-bottom>
    <nut-tabbar-item tab-title="首页">
      <template #icon="props">
        <img v-if="props.active" :src="icon.active" />
        <img v-else :src="icon.unactive" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="分类">
      <template #icon="props">
        <img v-if="props.active" :src="icon.active" />
        <img v-else :src="icon.unactive" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车">
      <template #icon="props">
        <img v-if="props.active" :src="icon.active" />
        <img v-else :src="icon.unactive" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的">
      <template #icon="props">
        <img v-if="props.active" :src="icon.active" />
        <img v-else :src="icon.unactive" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
import Taro from '@tarojs/taro'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {

  setup() {
   
    const store = useStore()
    const active = computed(() => store.getters.getSelected)
    function tabSwitch(item, index) {
      console.log(item, index);
      setSelected(index)
      if (index == 0) {
        Taro.switchTab({
          url: '/pages/index/index',
        })
      }
      if (index == 1) {
        Taro.switchTab({
          url: '/pages/classification/classification',
        })
      }
      if (index == 2) {
        Taro.switchTab({
          url: '/pages/shopcart/shopcart',
        })
      }
      if (index == 3) {
        Taro.switchTab({
         
          url: '/pages/personalcenter/personalcenter',
        })
      }
    }
    function setSelected(index) {
      store.dispatch('setSelected', index)
    }
    const icon = {
      active: 'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
      unactive: 'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png',
    };
    return {
      icon,
      tabSwitch,
      active,
    };
  },
}
</script>
