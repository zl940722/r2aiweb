const http = process.env.STRAPI_SERVICE || "http://192.168.0.105:1337";

console.log(process.env.STRAPI_SERVICE  , 'process.env.STRAPI_SERVICE ')
export default http;