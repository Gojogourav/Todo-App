import {createSlice , nanoid} from '@reduxjs/toolkit'
const initialState = {
    
    todos:JSON.parse(localStorage.getItem("todos") || [])

    // todos:
    //     [
    //         {
    //             id:nanoid(),
    //             text:"msg",
    //             checked:false
    //         }

    //     ]
    
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{  
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                checked:false
            }
            state.todos.push(todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        updateTodo:(state,action)=>{
            const {id,text} = action.payload;
            state.todos = state.todos.map((prev)=>(prev.id === id ? {...prev,text:text}: prev ))
            localStorage.setItem('todos', JSON.stringify(state.todos)); 
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((prev)=>(prev.id!== action.payload ))
            localStorage.setItem('todos', JSON.stringify(state.todos)); 
        },
        checkTodo :(state,action)=>{
            const id = action.payload;
            state.todos = state.todos.map((prev)=>(prev.id===id? {...prev,checked:!prev.checked}: prev))
            localStorage.setItem('todos', JSON.stringify(state.todos)); // Update localStorage
        
        }


    }
})

export const {addTodo,updateTodo,deleteTodo,checkTodo} = todoSlice.actions;
export default todoSlice.reducer;