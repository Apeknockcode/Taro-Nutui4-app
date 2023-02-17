<template>
    <nut-tabs v-model="tabValue" title-scroll title-gutter="10" name="tabValue" background="#fff">
        <template v-slot:titles>
            <div class="nut-tabs__titles-item" v-for="item in list as Array<lisTypes>" :key="'tabs__titles' + item.key"
                @click="tabValue = item.key" :class="{ active: tabValue == item.key }">
                <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
                <span class="nut-tabs__titles-item__line"></span>
            </div>
        </template>
        <nut-tab-pane v-for="item in list as Array<lisTypes>" :pane-key="item.key">
            <slot name="list" :tabItem="item" :tabDate="date"></slot>
        </nut-tab-pane>
</nut-tabs>
</template>
<script lang="ts">

import { reactive, toRefs, computed } from 'vue';
interface lisTypes {
    title: string,
    key: number,
}
export default {
    props: {
        listDate: {
            type: Array,
            default: () => [],
        }
    },
    components: {

    },
    setup(props) {
        const state = reactive({
            date: [],
            tabValue: 0,
        });
        const list = computed(() => {
            return props?.listDate
        })


        return {
            ...toRefs(state),
            list
        };
    }
};
</script>
<style lang="scss">
.line {
    border: none;
}

.nut-tabs__titles-item__line {
    background: $themesColorOwner !important;
}

.active {
    font-size: $font34 !important;
}
</style>
