import React,{useCallback, useEffect,useRef} from 'react';


const TopSection = (props) => {
    const { handleAddTodos, todoValue, setTodoValue ,toeditIndex } = props
    const inputRef = useRef(null);

    return (
        <div className='TopSection'>
            
            <h1 className='AppFont'>Todo List</h1><br></br>
            <input className='AppFont' type="text" name="txttodo" id="txttodo" placeholder='Enter some text here'
                value={todoValue} 
                onChange={(e)=>{
                    setTodoValue(e.target.value);
                }}
                onKeyUp={(e)=>{
                    if (e.key==='Enter'){
                        handleAddTodos(todoValue);
                        setTodoValue('');  
        
                    }
                }}
                ref={inputRef}
            
            />
            <button className='btnadd AppsFont'onClick={(e)=>{
                handleAddTodos(todoValue);
                setTodoValue('');  

            }} 
            >{toeditIndex===-1?"Add":"Edit"}</button>
        </div>
    );
};

export default React.memo(TopSection);