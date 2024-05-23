import {rateLimit} from "express-rate-limit";

const limiter=rateLimit({
    windowMs:1440*60*1000, //15 min
    limit:2,
    message:{"message":"Limit Reached"},
    
});

export default limiter;