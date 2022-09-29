import React, {useState} from 'react';
import { Paper,   Grid, Button, Box, Input } from '@mui/material'


function Todo( {el, setTodos, index, todos} ) {
    const [isEditing, setEditing] = useState(false)
    const [newTodo, setNewTodo] = useState(el.task)

    const doneHandler = () => {
        setTodos(prev => {
            const copyTodos = JSON.parse(JSON.stringify(prev))
            copyTodos[index].isDone = !copyTodos[index].isDone
            return copyTodos
        })

      
        

    }

    const deleteTodo = () => {
        setTodos(prev => {
            const copyTodos = JSON.parse(JSON.stringify(prev))
            copyTodos.splice(index, 1)
            return copyTodos
        })
    }

    const saveTodo = () => {
        setTodos(prev => {
            const copyTodos = JSON.parse(JSON.stringify(prev))
            copyTodos[index].task = newTodo
            return copyTodos
        })
        setEditing(!isEditing)
        

    }

    return (
    <Box 
    sx={{
        
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        '& > :not(style)' : {
            m: 1,
            width: 500,
            height: 50,

        
        }
    }}>
        <Paper sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightgray",
              borderRadius: "10px",
        }}>
            <Grid container sx={{
                padding: "10px",
                paddingLeft: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px"
                
              
            }}>
              {isEditing ? (
                <>
                    <Grid item><Input placeholder='value' value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/></Grid>
                    <Grid item><Button variant="contained" color="primary" onClick={() => saveTodo()}>Save</Button></Grid>
                    <Grid item><Button variant="contained" color="error" onClick={()=>{
                    setNewTodo(el)
                    setEditing(!isEditing)}
                    } >Dont Save</Button></Grid>
                </>
              ) : (
                <>
                  <Grid item sx={5}>
                  <span className={el.isDone && 'isDone'}>{el.task}</span>
              </Grid>
              <Grid item sx={{justifyContent: "space-evenly"}}>
                  <Button sx={{margin: "5px"}} variant="contained" onClick={()=>doneHandler()}>DONE</Button>
                  <Button sx={{margin: "5px"}} variant="contained" color="error" onClick={()=> deleteTodo()}>Delete</Button>
                  <Button  sx={{margin: "5px"}} variant="contained" color="warning" onClick={()=> setEditing(!isEditing)}>Modify</Button>
                  
              </Grid>
              </>
              )}
            </Grid>
        </Paper>
    </Box>
    );
}

export default Todo;