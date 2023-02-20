<template>
    <nut-tabs class="nutTabStyle" v-model="tabValue" title-scroll title-gutter="10" name="tabValue" background="#fff">
        <template v-slot:titles>
            <!-- <nut-sticky class="stick" top="10">
                                                                                   
                                                                                </nut-sticky> -->
            <view class="nut-tabs__titles-item" ref="nut-tabs__titles-item" v-for="item in list as Array<lisTypes>"
                :key="'tabs__titles' + item.key" @click="tabValue = item.key" :class="{ active: tabValue == item.key }">
                <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
                <span class="nut-tabs__titles-item__line"></span>
            </view>
        </template>
        <nut-tab-pane v-for="item in list as Array<lisTypes>" :pane-key="item.key">
            <slot name="list" :tabItem="item" :tabDate="date"></slot>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref } from "vue";
import Taro, { usePageScroll } from "@tarojs/taro";
import { $ } from '@tarojs/extend'
interface lisTypes {
    title: string;
    key: number;
}



export default {
    props: {
        listDate: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    setup(props) {
        const implementStatue = ref(true);
        const addHeight = ref('')
        const state = reactive({
            date: [],
            tabValue: 0,
        });
        const list = computed(() => {
            return props?.listDate;
        });
        usePageScroll((res) => {
            if (!implementStatue.value) {
                return
            }
            implementStatue.value = false
            setTimeout(() => {
                const query = Taro.createSelectorQuery()
                query.select('.nut-tabs__titles').boundingClientRect()
                query.selectViewport().scrollOffset()
                query.exec(function (res) {
                    // console.log('nut-tabs__titles节点的上边界坐标', res[0].top)    // #nut-tabs__titles节点的上边界坐标
                    // console.log("显示区域的竖直滚动位置", res[1].scrollTop) // 显示区域的竖直滚动位置
                    if (res[0].top < -40) {
                        // console.log("增加 nutSticky", res[1].scrollTop)
                        // 增加 nutSticky、
                        addHeight.value = res[1].scrollTop
                        $('.nut-tabs__titles').addClass("nutSticky")
                    } else if (res[1].scrollTop < addHeight.value) {
                        // 清除 nutSticky
                        // console.log("清除 nutSticky")

                        $('.nut-tabs__titles').removeClass("nutSticky")
                    }
                })
                implementStatue.value = true
            }, 10)



            // console.log("滚动的距离", scrollTop)
        })

        return {
            ...toRefs(state),
            list,
        };
    },
};
</script>
<style lang="scss">
.nutTabStyle {
    .line {
        border: none;
    }

    .stick {

        width: 100%;

    }

    .nut-tabs__titles {
        // line-height: 85rpx;
    }

    .nut-tabs__titles-item__text {
        height: 75rpx
    }

    .nut-tabs__titles-item__line {
        background: $themesColorOwner !important;

    }

    .active {
        font-size: $font34 !important;
    }
}
</style>
