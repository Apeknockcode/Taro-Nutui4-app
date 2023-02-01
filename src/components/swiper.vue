<template>
    <view class="headerSwiper">
        <nut-swiper :init-page="page" :pagination-visible="true" height="140" pagination-color="#426543"
            auto-play="3000">
            <nut-swiper-item class="swiper-image">
                <img style='width: 100%;height: inherit;background: #fff;'
                    src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' />
            </nut-swiper-item>
            <nut-swiper-item class="swiper-image">
                <img style='width: 100%;height: inherit;background: #fff;'
                    src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' />
            </nut-swiper-item>
            <nut-swiper-item class="swiper-image">
                <img style='width: 100%;height: inherit;background: #fff;'
                    src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' />
            </nut-swiper-item>
            <nut-swiper-item class="swiper-image">
                <img style='width: 100%;height: inherit;background: #fff;'
                    src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' />
            </nut-swiper-item>
        </nut-swiper>
    </view>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const state = reactive({
            page: 0,
        });
        return { ...toRefs(state) };
    }
};
</script>
<style lang="scss" scoped>
.headerSwiper {
    height: 140rpx;
}
</style>
