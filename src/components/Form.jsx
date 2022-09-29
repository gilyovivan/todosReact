import React from 'react';
import { useState } from 'react';
import { FormControl,  InputLabel, Input, Button, Grid } from '@mui/material'




function Form( {setTodos} ) {
    const[newTodo, setNewTodo] = useState("")

    const handlerAddToDo= () =>{
        if(newTodo.length){
        setTodos(prev => {
        const todoToAdd = {task: newTodo, isDone: false}
        const copyState = JSON.parse(JSON.stringify(prev))
        setNewTodo("")
        return [...copyState, todoToAdd]
        


       })
    }

    }
    return (
        <>
            <h1>This is TODO App</h1>
            <FormControl>
                <Grid container>
                    <Grid item>
                        <InputLabel htmlFor='my-todo'>Add a new Todo</InputLabel>
                        <Input id="my-todo" placeholder="add new todo" value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => handlerAddToDo()} variant="contained" color='primary'>Add Task</Button>
                    </Grid>
                    
                </Grid >
            </FormControl>
            
        </>
    );
}

export default Form;