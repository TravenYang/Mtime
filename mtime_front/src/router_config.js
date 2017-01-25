/**
 * Created by Traven on 2017/1/16.
 */
import Home from './components/home/Home'
import Find from './components/find/Find'
import Login from './components/login/Login'
import Shop from './components/shop/Shop'
import Ticket from './components/ticket/Ticket'
import HomeMovie from './components/homeMovie/HomeMovie'
import NowMovie from './components/nowMovie/NowMovie'
import WillMovie from './components/willMovie/WillMovie'

export default{
  routes:[
    {path:'/home',component:Home},
    {path:'/ticket',component:Ticket},
    {path:'/shop',component:Shop},
    {path:'/find',component:Find},
    {path:'/login',component:Login},
    {path:'/home_movie',component:HomeMovie,
      children:[
        {path:'will_movie',component:WillMovie},
        {path:'now_movie',component:NowMovie}
      ]
    }
  ]
}
