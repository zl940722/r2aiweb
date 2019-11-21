let http = process.env.STRAPI_URL || "http://localhost:1337";

console.log(process.env.STRAPI_URL, 'process.env.STRAPI_URL ');

if(typeof Window === 'function'){
  http='/strapi'
}


export default http;
