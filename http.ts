const http = process.env.STRAPI_URL || "http://192.168.0.160:1337";

console.log(process.env.STRAPI_URL  , 'process.env.STRAPI_URL ')
export default http;