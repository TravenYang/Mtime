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
import ChooseMovie from './components/chooseMovie/ChooseMovie'
import ChooseSeat from './components/chooseSeat/ChooseSeat'
import MovieDetail from './components/movieDetail/MovieDetail'

export default{
  routes:[
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/ticket/choose_movie',component:ChooseMovie},
    {path:'/ticket/choose_movie/choose_seat',component:ChooseSeat},
    {path:'/ticket',component:Ticket},
    {path:'/shop',component:Shop},
    {path:'/find',component:Find},
    {path:'/login',component:Login},
    {path:'/home_movie',component:HomeMovie,
      children:[
        {path:'will_movie',component:WillMovie},
        {path:'now_movie',component:NowMovie}
      ]
    },
    {path:'/home_movie/movie_detail',component:MovieDetail}
  ]
}
