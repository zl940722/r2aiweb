let http = process.env.STRAPI_URL || "http://localhost:1338";

console.log(process.env.STRAPI_URL, 'process.env.STRAPI_URL ');

if(typeof window === 'object'){
  http='/strapi'
}


export default http;