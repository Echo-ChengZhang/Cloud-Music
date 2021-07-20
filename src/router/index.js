import {
  createRouter,
  createWebHistory
} from 'vue-router'

const Recommendation = () => import('@/views/recommendation/Recommendation.vue')
const MusicList = () => import('@/views/musiclist/MusicList.vue')
const LeaderBoard = () => import('@/views/leaderboard/LeaderBoard.vue')
const Singers = () => import('@/views/singers/Singers.vue')
const Playing = () => import('@/views/playing/Playing.vue')
const MusicListDetails = () => import('@/views/musiclistDetails/MusicListDetails.vue')
const Artist = () => import('@/views/artist/Artist.vue')
const Search = () => import('@/views/searchpage/SearchPage.vue');
const SingerInfo = () => import('@/views/singerinfo/SingerInfo.vue')
const Album = () => import('@/views/singerinfo/album/Album.vue')
const Desc = () => import('@/views/singerinfo/desc/Desc.vue')
const SimiArtist = () => import('@/views/singerinfo/simiartist/SimiArtist.vue')
const TopArtists = () => import('@/views/leaderboard/topartists/TopArtists.vue')
const AlbumDetails = () => import('@/views/albumdetails/AlbumDetails.vue')

const routes = [{
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
    path: '/singer-info',
    component: SingerInfo,
    children: [{
        path: '',
        redirect: '/singer-info/album'
      },
      {
        path: 'album',
        component: Album
      },
      {
        path: 'desc',
        component: Desc
      },
      {
        path: 'simi-artist',
        component: SimiArtist
      }
    ]
  },
  {
    path: '/top-artists',
    component: TopArtists
  },
  {
    path: '/album-details',
    component: AlbumDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router