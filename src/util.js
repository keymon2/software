export function setToken(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  
export function getToken(){
    const tokenString = JSON.parse(sessionStorage.getItem('token'));
    if(tokenString)
    return tokenString
    else{
        return false;
    }
  }
  
export function removeToken(){
  sessionStorage.removeItem('token')
}