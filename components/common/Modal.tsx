import { useEffect,useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


import CloseButtonSvg from '../../public/icons/close.svg';
import SendButtonSvg from '../../public/icons/send.svg';
import SpinnerSvg from '../../public/icons/spinner.svg';


const Container  = styled.div`
background-color:rgba(255,255,255,1);
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:99;
overflow:auto;
padding-bottom:80px;
`
const CloseButtonContainer = styled.div`
  margin-top:20px;
  margin-left:15px;
  margin-right:15px;

  @media(min-width:500px){
    display:flex;
    justify-content:flex-end;    
  }
`
const CloseButton = styled.div`
 background-color:grey;
 width:40px;
 height:40px;
 display:flex;
 justify-content:center;
 align-items:center;
 cursor:pointer;
 border-radius:6px;
  svg{
    width:20px;
    fill:#fff;
    stroke:#fff;
    path{
        stroke-width:15;
    }
  }
`

const ModalContent = styled.div`
padding:20px 15px;

.form-group{
    display:flex;
    flex-direction:column;
}

input,textarea{
    border:1px solid #c9c9c9;
    padding:5px 15px;
    border-radius:6px;
    &:focus{
        outline:0;
    }
}

@media(min-width:500px){
    width:480px;
    position:absolute;
    left:calc(50% - 240px)
}
`

const SendButton =  styled.button`
 display:flex;
 justify-content:center;
 align-items:center;
svg{
    width:17px;
    fill:#fff;
    stroke:#fff;

    path{
        stroke-width:15;
    }
}

`

const LoaderContainer = styled.div`
margin-left:4px;
svg{
    width:25px;
    
}

`
export const Modal = ({shouldShow,onRequestClose})=>{
    const[isSubmit,setIsSubmit] = useState(false)
    const[fromName,setFromName] = useState('');
    const[fromEmail,setFromEmail] = useState('');
    const[fromMessage,setFromMessage] = useState('');
    


    /********SendMessage*****/
    const sendMessage = async(e)=>{
        e.preventDefault();

        if(!fromName || !fromEmail || !fromMessage || !isEmail(fromEmail)){
            return;
        }
        

        setIsSubmit(true)
        const data = {
            from_name:fromName,
            from_email:fromEmail,
            from_message:fromMessage
        }
        const response = await axios({
            url:"/api/v1/send-message",
            method:'post',
            data:data
        })
        
       
      /*************if success or fail***********/
      if(response.data.success){
        resetForm();
      }

      if(response.data.error){
        resetForm();
      }
    }
    
    /*****resetFrom*****/
    const resetForm = ()=>{
        setFromName('');
        setFromEmail('');
        setFromMessage('');
        setIsSubmit(false);
        onRequestClose();
        document.querySelector('#send-email-btn').disabled = false;
    }

    const isEmail=(mail)=>
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(mail);
    }


    useEffect(()=>{
        const submitBtn = document.querySelector('#send-email-btn');
        if(isSubmit){
            submitBtn.style.backgroundColor = '#bdb4a2';
            submitBtn.disabled = true;
        }
    },[isSubmit])
    useEffect(()=>{
      if(shouldShow){document.body.style.overflow = 'hidden'}
      else{document.body.style.overflow = 'unset'}
    },[shouldShow])
    return(
       <>
       {shouldShow &&
        <Container>
            
            <CloseButtonContainer>
                <CloseButton onClick={onRequestClose}>
                <CloseButtonSvg/>
                </CloseButton>
            </CloseButtonContainer>
  

            <ModalContent >
                <div>
                    <h3 className='text-2xl mb-3'>I'm open for opportunities</h3>
                    <p className='mb-8'>Please take a second to message me. I will get back as soon as possible</p>

                    <div>
                        <form action="">

                            <div className="form-group mb-5">
                                <label htmlFor="">Name</label>
                                <input type="text" required value={fromName} 
                                onChange={(e)=>setFromName(e.target.value)}/>
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="">Email</label>
                                <input type="email"  required value={fromEmail} onChange={(e)=>setFromEmail(e.target.value)}/>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" cols="30" rows="5" required
                                value={fromMessage} 
                                onChange={(e)=>setFromMessage(e.target.value)}
                                />
                            </div>

                            <div className='flex items-center'>
                                <SendButton id="send-email-btn" className='btn btn__primary' onClick={sendMessage} type="submit">
                                <span className='mr-1'>Send</span>
                                <span ><SendButtonSvg/></span>
                                </SendButton>
                                
                                {isSubmit &&
                               
                                    <LoaderContainer>
                                        <SpinnerSvg/>
                                    </LoaderContainer>
                                
                                }
                                
                            </div>
                        
                        
                        </form>

                    </div>
                </div>

            </ModalContent>
        </Container>}
        </>
    )
}