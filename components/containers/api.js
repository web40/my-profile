const url = process.env.NEXT_PUBLIC_url;
const token = process.env.NEXT_PUBLIC_token;

const  api = {
   url : url,
   token: token,
   headers : {
      Authorization:`Bearer ${token}`
  }

}


export default api;