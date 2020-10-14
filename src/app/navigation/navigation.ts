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
                url: '/pages/dashboard',
                role: 'admin'
            },
            {
                id: 'administrator_products',
                title: 'Administrador de productos',
                type: 'item',
                icon: 'view_list',
                url: '/pages/product/list',
                role: 'admin'
            },
            {
                id: 'sales',
                title: 'Comprar',
                type: 'item',
                icon: 'category',
                url: '/pages/sales',
                role: 'client'
            }
        ]
    }
];
