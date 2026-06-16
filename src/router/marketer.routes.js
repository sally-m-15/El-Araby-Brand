
export const marketer = [
{
    path: '/marketer',
    component: () => import('@/layout/MarketerLayout.vue'),
    children: [
        {
            path: 'home',
            name: 'marketer-home',
            component: () => import('@/pages/marketer/shopping/HomeView.vue'),
        },
                {
            path: 'products',
            name: 'products',
            component: () => import('@/pages/marketer/shopping/ProductsView.vue'),
        },
    ]
}    
]