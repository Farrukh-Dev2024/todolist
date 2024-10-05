import React, { memo, useMemo } from 'react';
import SingleCard from './SingleCard';


// const CardsSection = (props) => React.memo(({props})=>{
//     //const CardsSection = (props) => {
//         const {handleEditTodo,handleDeleteTodo}=props;
//         return (
//             <div className='CardsSection'>
//                 {props.todos.map((item,index)=>{
//                     return (<SingleCard key={index} carddata={item} index={index} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />);
//                 })}
    
//             </div>
//         );
//     //};

// const CardsSection = (props) => {
//     const {todos,handleEditTodo,handleDeleteTodo}=props;

//     const retval =useEffect(()=>{
//         return () =>{
//             <div className='CardsSection'>
//                 {props.todos.map((item,index)=>{
//                     return (<SingleCard key={index} carddata={item} index={index} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />);
//                 })}
    
//             </div>
            
//         }
//     },[todos]);

//     return retval;
// };


const CardsSection = (props) => {
    const {handleEditTodo,handleDeleteTodo,todos}=props;
    
    return (
        <div className='CardsSection'>
            {todos.map((item,index)=>{
                return (<SingleCard key={index} carddata={item} index={index} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />);
            })}

        </div>
    );
};

export default memo(CardsSection);