import React from 'react';
import SingleCard from './SingleCard';

const CardsSection = (props) => {
    const {handleEditTodo,handleDeleteTodo}=props;
    return (
        <div className='CardsSection'>
            
            
            {props.todos.map((item,index)=>{
                return (<SingleCard carddata={item} index={index} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />);
            })}

        </div>
    );
};

export default CardsSection;