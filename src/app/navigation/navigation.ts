import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'pages',
        title: 'PAGINAS',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                url: '/pages/dashboard'
            },
            {
                id: 'product',
                title: 'Productos',
                type: 'item',
                icon: 'category',
                url: '/pages/product/list'
            }
        ]
    }
];
