import AccountModel from "~/server/models/Account";

export default defineEventHandler(async(event)=>{
    try
    {
        const body = await readBody(event);
        const result = await AccountModel.findOne({
            username: body.username
        });
        if(!result) return false;
        if(result.password != body.password) return false;
        
        await setCookie(event, 'token', JSON.stringify({
            username: body.username
        }), {
        })
        return true;
    }
    catch(err)
    {
        console.log(err);
    }
})