let http = process.env.STRAPI_SERVICE || "http://localhost:1338";

if(typeof window === 'object'){
  http='/strapi'
}


export default http;