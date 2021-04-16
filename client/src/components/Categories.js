import React from 'react';
import '../styles/Categories.css';
import SubmitPost from "./SubmitPost";
import {Link} from 'react-router-dom';

const Categories = () =>{

return(
<div className="favourites">
    <table id="favouritesList">
        <thead>
            <tr className="even">
                <th><SubmitPost /></th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd">
                <td><a className="favAddress" href="">Gaming</a></td>
            </tr>
            <tr className="even">
                <td><a className="favAddress" href="">Sports</a></td>
            </tr>
            <tr className="odd">
                <td><a className="favAddress" href="">Food</a></td>
            </tr>
            <tr className="even">
                <td><a className="favAddress" href="">Jokes</a></td>
            </tr>
            <tr className="odd">
                <td><a className="favAddress" href="">Music</a></td>
            </tr>
        </tbody>
    </table>
</div>
);
}

export default Categories;