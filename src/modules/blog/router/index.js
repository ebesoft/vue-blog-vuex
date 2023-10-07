
export default {
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/modules/blog/layouts/BlogLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "blog-no-entry" */ '@/modules/blog/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "blog-entry" */ '@/modules/blog/views/EntryView.vue'),
        }
    ]
}
