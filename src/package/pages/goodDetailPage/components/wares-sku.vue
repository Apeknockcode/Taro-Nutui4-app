<template>

    <nut-sku v-model:visible="customBySlot" :sku="sku" :goods="goods" :btnOptions="['buy', 'cart']"
        @selectSku="selectSku" @clickBtnOperate="clickBtnOperate">
        <!-- 商品展示区，价格区域 -->
        <template #sku-header-price>
            <div>
                <nut-price :price="goods.price" :needSymbol="true" :thousands="false"> </nut-price>
                <span class="tag"></span>
            </div>
        </template>
        <!-- 商品展示区，编号区域 -->
        <template #sku-header-extra>
            <span class="nut-sku-header-right-extra">重量：0.1kg 编号：{{ skuId }} </span>
        </template>
        <!-- sku 展示区上方与商品信息展示区下方区域，无默认展示内容 -->
        <template #sku-select-top>
            <div class="address">
                <nut-cell style="box-shadow:none;padding:13px 0" title="送至" :desc="addressDesc"
                    @click="showAddressPopup = true"></nut-cell>
            </div>
        </template>
        <!-- 底部按钮操作区 -->
        <template #sku-operate>
            <div class="sku-operate-box">
                <nut-button class="sku-operate-item" shape="square" type="warning">加入购物车</nut-button>
                <nut-button class="sku-operate-item" shape="square" type="primary">立即购买</nut-button>
            </div>
        </template>
    </nut-sku>

    <nut-address v-model:visible="showAddressPopup" type="exist" :exist-address="existAddress"
        :is-show-custom-address="false" @selected="selectedAddress" exist-address-title="配送至"></nut-address>

</template>
<script lang="ts">
import { ref, reactive, onMounted, toRefs, computed } from 'vue';
import Taro from '@tarojs/taro'
interface goodsTypes {
    skuId: number,
    id: number;
    name: string;
    price: number | string;
    imagePath: string
}
interface skuTypes {
    id: number,
    name: string,
    list: [{
        name: string,
        id: number,
        active: boolean,
        disable: boolean
    },
    ]
}
interface dataTypes {
    sku: Array<skuTypes>;
    goods: goodsTypes
}
export default {
    props: {
        customState: {
            type: Boolean,
            default: false
        },
    },
    setup(props) {
        console.log("props", props)
        const customBySlot = computed(() => {
            console.log('computed')
            return props.customState
        });
        const showAddressPopup = ref(false);
        const data = reactive({
            sku: [],
            goods: {} as goodsTypes
        }) as dataTypes;

        const addressDesc = ref('(配送地会影响库存，请先确认)');
        const existAddress = ref([
            {
                id: 1,
                addressDetail: 'th ',
                cityName: '石景山区',
                countyName: '城区',
                provinceName: '北京',
                selectedAddress: true,
                townName: ''
            },
            {
                id: 2,
                addressDetail: '12 ',
                cityName: '电饭锅',
                countyName: '扶绥县',
                provinceName: '北京',
                selectedAddress: false,
                townName: ''
            },
            {
                id: 3,
                addressDetail: '发大水比 ',
                cityName: '放到',
                countyName: '广宁街道',
                provinceName: '钓鱼岛全区',
                selectedAddress: false,
                townName: ''
            },
            {
                id: 4,
                addressDetail: '还是想吧百度吧 ',
                cityName: '研发',
                countyName: '八里庄街道',
                provinceName: '北京',
                selectedAddress: false,
                townName: ''
            }
        ]);

        onMounted(() => {
            Taro.request({
                url: 'https://storage.360buyimg.com/nutui/3x/data.js', //仅为示例，并非真实的接口地址
                success: function (res) {
                    console.log("onMounted", res.data as any)
                    const { Sku, Goods } = res.data;  // imagePathMap
                    data.sku = Sku;
                    data.goods = Goods;
                }
            })
        });

        // 切换规格类目
        const selectSku = (ss: string) => {
            const { sku, skuIndex, parentSku, parentIndex } = ss as any
            if (sku.disable) return false;
            data.sku[parentIndex].list.forEach((s) => {
                s.active = s.id == sku.id;
            });
            data.goods = {
                skuId: sku.id,
                price: '6002.10',
                imagePath: '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
            };
        };
        const selectedAddress = (_prevExistAdd: any, nowExistAdd: any) => {
            const { provinceName, countyName, cityName } = nowExistAdd;
            addressDesc.value = `${provinceName}${countyName}${cityName}`;
        };
        // 底部操作按钮触发
        const clickBtnOperate = (op: string) => {
            console.log('点击了操作按钮', op)
        }
        return {
            showAddressPopup,
            customBySlot,
            selectSku,
            clickBtnOperate,
            existAddress,
            addressDesc,
            selectedAddress,
            ...toRefs(data)
        };
    }
}
</script>

<style>
.sku-operate-box {
    width: 100%;
    display: flex;
    padding: 8px 10px;
    box-sizing: border-box;
}

.sku-operate-item {
    flex: 1
}

.sku-operate-item:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.sku-operate-item:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>
