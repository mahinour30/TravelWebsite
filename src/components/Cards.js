import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

const Cards=()=>{
    return(
        <div className='cards'>
            <h1>Check Out These EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        SRC='images/3.jpg'
                        text = 'whatever'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        SRC='images/4.jpg'
                        text = 'whatever'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        SRC='images/3.jpg'
                        text = 'whatever'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        SRC='images/4.jpg'
                        text = 'whatever'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        SRC='images/6.jpg'
                        text = 'whatever'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
