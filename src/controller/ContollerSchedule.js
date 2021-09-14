import {setToken, getToken} from '../util.js'

export async function findSchedule(){
    const Token = getToken();
    if(Token == false) return false;
    return fetch('http://localhost:4502/api/Schedule/find',{
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            Authorization : "Bearer " + Token,
        },
      })
      .then(res => res.json())
  }
  export async function insertSchedule(credentials){
    const Token = getToken();
    if(Token == false) return false;
    return fetch('http://localhost:4502/api/Schedule/todoUpdate',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            Authorization : "Bearer " + Token,
        },
        body: JSON.stringify({todo: credentials})
        
      })
      .then(res => res.json())
  }

  export async function deleteSchedule(credentials){
    const Token = getToken();
    if(Token == false) return false;
    return fetch('http://localhost:4502/api/Schedule/deleteTodoone',{
        method: 'PUT',
        headers : {
            'Content-Type': 'application/json',
            Authorization : "Bearer " + Token,
        },
        body: JSON.stringify({todo: credentials})
        
      })
      .then(res => res.json())
  }