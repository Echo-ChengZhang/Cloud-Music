import { createRouter, createWebHistory } from 'vue-router'

const Recommendation = () => import ('@/views/recommendation/Recommendation.vue')
const MusicList = () => import ('@/views/musiclist/MusicList.vue')
const LeaderBoard = () => import ('@/views/leaderboard/LeaderBoard.vue')
const Singers = () => import ('@/views/singers/Singers.vue')
const NewSongs = () => import ('@/views/newsongs/NewSongs.vue')
const Playing = () => import ('@/views/playing/Playing.vue')
const MusicListDetails = () => import ('@/views/musiclistDetails/MusicListDetails.vue')
const Artist = () => import ('@/views/artist/Artist.vue')
const Search = () => import ('@/views/searchpage/SearchPage.vue');
const Album = () => import ('@/views/album/Album.vue')

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
    path: '/singers',
    component: Singers
  },
  {
    path: '/new-songs',
    component: NewSongs
  },
  {
    path: '/playing',
    component: Playing
  },
  {
    path: '/music-list-details',
    component: MusicListDetails
  },
  {
    path: '/artist',
    component: Artist
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/album',
    component: Album
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
