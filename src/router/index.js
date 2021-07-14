import { createRouter, createWebHistory } from 'vue-router'

const Recommendation = () => import ('@/views/recommendation/Recommendation.vue')
const MusicList = () => import ('../views/musiclist/MusicList.vue')
const LeaderBoard = () => import ('../views/leaderboard/LeaderBoard.vue')
const Singer = () => import ('../views/singer/Singer.vue')
const NewSongs = () => import ('../views/newsongs/NewSongs.vue')
const Playing = () => import ('../views/playing/Playing.vue')

const routes = [
  {
    path: '',
    redirect: '/recommendation'
  },
  {
    path: '/recommendation',
    component: Recommendation
  },
  {
    path: '/music-list',
    component: MusicList
  },
  {
    path: '/leader-board',
    component: LeaderBoard
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/new-songs',
    component: NewSongs
  },
  {
    path: '/playing',
    component: Playing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
