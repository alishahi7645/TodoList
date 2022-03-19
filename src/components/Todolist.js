import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';
import Todo from "./Todo";

const Todolist = ({inputtext,todoes ,settodoes , filtertodoes}) =>{
    return(
        <Todocontainer>
            <ul className="todo-list">
                {
                    filtertodoes.map((todo) => (
                        <Todo text={todo.text} key={todo.id} todo={todo} todoes={todoes} settodoes={settodoes}/>
                    ))
                }
            </ul>
        </Todocontainer>
    )
}

const Todocontainer = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;

    ul{
        min-width:30%;
        list-style:none;
    }
`
const Todoo = styled(motion.div)`
    margin:0.5rem;
    color:black;
    background-color:black;
    font-size:1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:all 1s ease;
`

export default Todolist;