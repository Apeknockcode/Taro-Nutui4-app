import {
  Tabs,
  TabPane,
  Sku,
  Animate,
  Progress,
  InputNumber,
  Checkbox,
  CheckboxGroup,
  List,
  Category,
  CategoryPane,
  Badge,
  Avatar,
  Button,
  Toast,
  Swiper,
  SwiperItem,
  Layout,
  Row,
  Col,
  Grid,
  GridItem,
  Searchbar,
  Sticky
} from '@nutui/nutui-taro'

import type {App} from 'vue'

export function setupComponents(app: App<Element>) {
  app
    .use(Toast)
    .use(Swiper)
    .use(SwiperItem)
    .use(Button)
    .use(Layout)
    .use(Row)
    .use(Col)
    .use(Grid)
    .use(GridItem)
    .use(Searchbar)
    .use(Avatar)
    .use(Badge)
    .use(Category)
    .use(CategoryPane)
    .use(List)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(InputNumber)
    .use(Progress)
    .use(Animate)
    .use(Sku)
    .use(Tabs)
    .use(TabPane)
    .use(Sticky)
}
