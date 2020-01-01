import Home from '../component/Home'
import Login from '../component/Login'
import Pj from '../component/Pj'
import Shopp from '../component/Shoop'
import Sj from '../component/Sj'
export default [
    {
        path:'/home',
        com:Home,
        children:[
           {
               path:'/home/shoop',
               title:'点菜',
               com: Shopp
           },{
            path:'/home/pj',
            title:'评价',
            com:Pj
           },{
            path:'/home/sj',
            title:'商家',
            com:Sj 
           }
        ]

    },{
        path:'/login',
        com:Login,
        // children:[
        //     {
        //         path:'/home/shoop',
        //         title:'点菜1',
        //         com: Shopp
        //     },{
        //      path:'/home/pj',
        //      title:'评价1',
        //      com:Pj
        //     },{
        //      path:'/home/sj',
        //      title:'商家1',
        //      com:Sj 
        //     }
        //  ]
    }
]