const nodemailer = require('nodemailer');


const {email_user,email_pass,email_host,email_to} = process.env ;

export default function emailSendApi(req,res){
    const {from_name,from_email,from_message} = req.body;
    


    /********allow only post requests */
    if(req.method !== 'POST'){
        res.status(404);
        res.json({message:"Resource Not found"})
    }

 
    /******check if email env vars are defined */
    if(!email_user || !email_pass || !email_host||!email_to){
        res.status(500);
        res.json({  
          error:true,
          error_name:"user|pass|host not defined",
          error_message:"email settings not defined"
        })
    }
   

    /***********send mail function************/
    const sendEmail =async()=>{
    
        const transporter = nodemailer.createTransport({
            host:email_host,
            port:465,
            secure:true,
            auth:{
                user:email_user,
                pass:email_pass
            }
        })

        
            const info = await transporter.sendMail({
                from:`"Message from Profile"<${email_user}>`,
                to:`${email_to}`,
                subject:"New Message Profile",
                text:``,
                html:`
                  
                   <p><b>Name:</b></p>
                   <p>${from_name}</p>
                   <p><b>Email:</b></p>
                   <p>${from_email})</p>
                   <p><b>Message:</b></p>
                   <p>${from_message}</p>
                `
            })

            //email success return
            if(info.messageId){ 
               res.status(200)
               res.json({
                success:true
               })
            }else{
               res.status(500)
               res.json({
                error:true
               })
            }
     
    }//sendEmail

    sendEmail().catch((e)=>{
        res.status(500)
        res.json({
            error:true
        })
    })
}