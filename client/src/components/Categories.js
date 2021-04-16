import React from "react";
import "../styles/Categories.css";
import SubmitPost from "./SubmitPost";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className='favourites'>
      <table id='favouritesList'>
        <thead>
          <tr className='even'>
            <th>
              <SubmitPost />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='odd'>
            <td>
              <Link to='/category/gaming' className='favAddress' value='gaming'>
                Gaming
              </Link>
            </td>
          </tr>
          <tr className='even'>
            <td>
              <Link to='/category/sports' className='favAddress' value='sports'>
                Sports
              </Link>
            </td>
          </tr>
          <tr className='odd'>
            <td>
              <Link to='/category/food' className='favAddress' value='food'>
                Food
              </Link>
            </td>
          </tr>
          <tr className='even'>
            <td>
              <Link to='/category/jokes' className='favAddress' value='jokes'>
                Jokes
              </Link>
            </td>
          </tr>
          <tr className='odd'>
            <td>
              <Link to='/category/music' className='favAddress' value='music'>
                Music
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
