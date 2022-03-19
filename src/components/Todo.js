import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Todo = ({ todoes , text , todo ,settodoes}) => {
    const delethandler = ()=>{
        settodoes(todoes.filter((el) => el.id !== todo.id))
    }
    const completedhandler = () =>{
        settodoes(todoes.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item , complated:!item.complated
                }
            }
            return item;
        }))
    }
    return (
        <Todu>
            <li className={`li ${todo.complated ? "complated" : ""}`}>{text}</li>
            <div className="element">
                <button className="check" onClick={completedhandler}><i className="fas fa-check"></i></button>
                <button className="trash" onClick={delethandler}><i className="fas fa-trash"></i></button>
            </div>
        </Todu>
    )
}

const Todu = styled(motion.div)`
    width:15rem;
    height:2.5rem;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:auto;
    text-align:center;
    margin-top:0.5rem;
    
    .complated{
        text-decoration:line-through;
        opacity:0.5;
    }
    li{
        font-size:1.5rem;
    }

    .element{
        width:8rem;
        height:100%;
        display:flex;
        align-items:center;
        flex-direction: row-reverse;

        .trash{
            width:3rem;
            height:100%;
            background-color:#c00;
            border:none;
            outline:0;
            cursor:pointer;
            .fa-trash{
                color:#fff;
                font-size:1rem;
            }
        }
        .check{
            width:3rem;
            height:100%;
            background-color:green;
            border:none;
            outline:0;
            cursor:pointer;
            .fa-check{
                color:#fff;
                font-size:1rem;
            }
        }
    }
`
export default Todo;