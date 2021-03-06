
import prod from "./prod.js"
import dev from "./dev.js"
let URI
if(process.env.NODE_ENV === "production")
    URI= prod
else URI= dev
export {URI}