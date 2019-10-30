import fetch from 'isomorphic-unfetch';
import qs from 'query-string';
import { filterObject } from './util';

// initial fetch
const nextFetch = Object.create(null);
// browser support methods
// ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PATCH', 'PUT']
const HTTP_METHOD = ['get', 'post', 'put', 'patch', 'delete'];
// can send data method
const CAN_SEND_METHOD = ['post', 'put', 'delete', 'patch'];

HTTP_METHOD.forEach(method => {
  // is can send data in opt.body
  const canSend = CAN_SEND_METHOD.includes(method);
  nextFetch[method] = (path: any, { data, query, timeout = 5000 }: any = {}) => {
    let url = path;
    const opts: any = {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Headers":"X-Requested-With",
        "Access-Control-Request-Method": "*",
        "Access-Control-Allow-Origin":"*",
        Accept: 'application/json'
      },
      credentials: 'include',
      timeout,
      cache: 'no-cache'
    };

    if (query) {
      url += `${url.includes('?') ? '&' : '?'}${qs.stringify(
        filterObject(query, Boolean),
      )}`;
    }

    if (canSend && data) {
      opts.body = qs.stringify(filterObject(data, Boolean));
    }

    console.info('Request Url:', url);

    return fetch(url, opts)
      .then(res => res.json())
      .then(({ errcode = 0, errmsg, data }) => {
        if (errcode !== 0) {
          const err: any = new Error(errmsg);
          err.message = errmsg;
          err.code = errcode;
          err.data = data;
          throw err;
        }
        return data;
      });
  };
});

export default nextFetch;
