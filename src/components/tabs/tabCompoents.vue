<template>
    <nut-tabs v-model="tab1value" title-scroll title-gutter="10" name="tab4value">
        <nut-tab-pane v-for="item in list4" :title="'Tab ' + item">
            Tab {{ item }}
        </nut-tab-pane>
    </nut-tabs>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const state = reactive({
            tab1value: '0',
            list4: Array.from(new Array(10).keys()),
        });
        return { ...toRefs(state) };
    }
};
</script>
