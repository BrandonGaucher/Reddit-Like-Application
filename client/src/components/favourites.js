import React from 'react';
import '../styles/Favourites.css';

import {Link} from 'react-router-dom';

const Favourites = () =>{


return(
<div className="favourites">
    
    <table id="favouritesList">
        <thead>
            <tr className="even">
                <th>Favourites Icon</th>
                <th>Favourites</th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd">
                <td>
                    <p>icon 1</p>
                </td>
                <td>
                    <a className="favAddress" href="">Top Forum</a>
                </td>
            </tr>
            <tr className="even">
                <td>
                    <p>icon 2</p>
                </td>
                <td>
                    <a className="favAddress" href="">Second Top Forum</a>
                </td>
            </tr>
            <tr className="odd">
                <td>
                    <p>icon 3</p>
                </td>
                <td>
                    <a className="favAddress" href="">Third Top Forum</a>
                </td>
            </tr>
            <tr className="even">
                <td>
                    <p>icon 4</p>
                </td>
                <td>
                    <a className="favAddress" href="">Fourth Top Forum</a>
                </td>
            </tr>
            <tr className="odd">
                <td>
                    <p>icon 5</p>
                </td>
                <td>
                    <a className="favAddress" href="">Fifth Top Forum</a>
                </td>
            </tr>
        </tbody>

            
        
    </table>


</div>
);
}

export default Favourites;