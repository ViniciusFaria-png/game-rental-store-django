import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getGames } from '../services/GameService';
import "../App.css";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
   let mounted = true;
   getGames()
     .then(data => {
       if(mounted) {
        setGames(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Rent Price</th>
            <th>Is Free</th>
            </tr>
        </thead>
        <tbody>
            {games.map((game) =>
            <tr key={game.id}>
                <td>{game.gameId}</td>
                <td>{game.GameName}</td>
                <td>{game.Description}</td>
                <td>{game.ReleaseDate}</td>
                <td>{game.Genre}</td>
                <td>{game.RentPrice}</td>
                <td>{game.IsFree}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Games;