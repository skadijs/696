export default[
    {
        path:"/",
        name:"home",
        component:() => import("../../views/home.vue"),
        children:[
            {
                path:'',
                name:'button',
                component:() => import("../../../packages/button/App.vue")
            },
            {
                path:'',
                name:'select',
                component:() => import("../../../packages/select/doc/doc.md")
            }
        ]

    }
]