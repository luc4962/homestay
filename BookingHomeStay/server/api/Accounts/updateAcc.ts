import AccountModel from "~/server/models/Account";
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event)
        var isAdminBool;
        if(body.type == "0")
        {
            isAdminBool = false;
        }
        else
        {
            isAdminBool = true;
        }
        await AccountModel.findOneAndUpdate(
            {
                username: body.username,
            },
            {
                $set:
                {
                    password: body.password,
                    isAdmin: isAdminBool,
                    mail: body.mail,
                    address: body.address,
                }
            }
        )
    }catch(err){
        console.log(err)
    }
})