import {request} from '@/api/request';

export function musicReq() {
  request({
    url: 'search?keywords=海阔天空'
  }).then(res => {
    return res
  })
}
