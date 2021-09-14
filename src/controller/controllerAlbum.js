import {setToken, getToken} from '../util.js'







  export async function findAlbum(){
    const Token = getToken();
    if(Token == false) return false;
    return fetch('http://localhost:4502/api/Album/find',{
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            Authorization : "Bearer " + Token,
        },
      })
      .then(res => res.json())
  }

  export async function insertAlbum(credentials){
    const Token = getToken();
    if(Token == false) return false;
    return fetch('http://localhost:4502/api/Album/insert',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            Authorization : "Bearer " + Token,
        },
        body: JSON.stringify({image: credentials})
        
      })
      .then(res => res.json())
  }