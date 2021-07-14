import axios from 'axios';

axios({
  url: 'http://localhost:3000/song/url?id=33894312'
}).then(res => {
  console.log(res);
})