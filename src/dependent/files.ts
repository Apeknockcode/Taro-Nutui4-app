
import { Button, Toast,Swiper,SwiperItem ,Layout,Row,Col,Grid, GridItem,Searchbar } from '@nutui/nutui-taro';

import type { App } from 'vue';

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
    
 

}