//import Header from './Header';
// import Button from './Button';
import '../css/Allgames.css';
// import React, { Component } from 'react';
import ApiAllgames from './Apiallgames';
// import Card from './Card';
import Select from './Selectmenu';
import Select1 from './Selectmenu1';
import Select2 from './Selectmenu2';

const Allgames = () => {
   return (
      <div className="detailsgame">
         <div className="detailimg">
            <img src="../img/allgames.png" alt="" />
         </div>
         <h1 className="allgamestitel">all games</h1>
         <div>
            <div>
               <Select /> <Select1 />
               <Select2 />
            </div>
            <ApiAllgames />
         </div>
         <ApiAllgames />
      </div>
   );
};

export default Allgames;
