import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getGames, deleteGame } from '../services/GameService';
import AddGameModal from "./AddGameModal";
import UpdateGameModal from "./UpdateGameModal";

const Manage = () => {
    const [games, setGames] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editGame, setEditGame] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if(games.length && !isUpdated) {
         return;
         }
        getGames()
          .then(data => {
            if(mounted) {
                setGames(data);
            }
          })
        return () => {
           mounted = false;
           setIsUpdated(false);
        }
      }, [isUpdated, games])

      const handleUpdate = (e, game) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditGame(game);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    
    const handleDelete = (e, gameId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteGame(gameId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Gane");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
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
                  <td>
    
                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,game.gameId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,game)}>
                        <FaEdit />
                  </Button>
                  <UpdateGameModal show={editModalShow} game={editGame} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateGameModal>
                </td>
                </tr>)}
              </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add Game
                </Button>
                <AddGameModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddGameModal>
            </ButtonToolbar>
        </div>
        </div>
    );

};


export default Manage;

