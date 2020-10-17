export default {
    path: '/film',
    component: () => import('@/views/Film/Film'),
    children :[
        {
            path:'nowplaying',
            component: () => import('@/views/Film/NowPlaying')
        },
        {
            path:'comingSoon',
            component: () => import('@/views/Film/ComingSoon')
        },
        {
            path:'/film',
            redirect: 'nowplaying'
        },
    ]
}       