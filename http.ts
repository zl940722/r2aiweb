const http = process.env.STRAPI_URL || "http://localhost:1337";

console.log(process.env.STRAPI_URL  , 'process.env.STRAPI_URL ')
export default http;
