import axios from 'axios';

export function getGames() {
  return axios.get('http://127.0.0.1:8000/games/')
    .then(response => response.data)
}

export function deleteGame(gameId) {
  return axios.delete('http://127.0.0.1:8000/games/' + gameId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addGame(game){
  return axios.post('http://127.0.0.1:8000/games/', {
    gameId:null,
    GameName:game.GameName.value,
    Description:game.Description.value,
    ReleaseDate:game.ReleaseDate.value,
    Genre:game.Genre.value,
    RentPrice:game.RentPrice.value,
    IsFree:game.IsFree.value
  })
    .then(response=>response.data)
}

export function updateGame(stuid, game) {
  return axios.put('http://127.0.0.1:8000/games/' + stuid + '/', {
    GameName:game.GameName.value,
    Description:game.Description.value,
    ReleaseDate:game.ReleaseDate.value,
    Genre:game.Genre.value,
    RentPrice:game.RentPrice.value,
    IsFree:game.IsFree.value
  })
   .then(response => response.data)
}