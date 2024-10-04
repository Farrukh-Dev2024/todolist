import React from 'react';

const SingleCard = (props) => {
    const { carddata, handleDeleteTodo, index, handleEditTodo } = props

    return (
        <div className='SingleCard'>
            <h4 className='CardsFont'>{carddata}</h4>
            <div className='CardControls'>
                <i className="fa-solid fa-pen" onClick={() => {handleEditTodo(index);}}></i>
                <i className="fa-solid fa-xmark" onClick={() => {handleDeleteTodo(index);}}></i>
            </div>
        </div>
    );
};

export default SingleCard;