import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const server = serve({ port:3000})


for await (const req of server){
    console.log("incomig requesr");
    req.respond({
        body : 'message form Deno !'
    })
    
}