import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
const Form = ({setinputtext , todoes , settodoes , inputtext , setstatus , fliterhandler}) => {
    const inputchangehandler = (e) =>{
        setinputtext(e.target.value);
        
    }
    const submithandler = (e) =>{
        e.preventDefault();
        if(inputtext){
            settodoes([
                ...todoes,
                {text:inputtext , id:Date.now() , complated:false}
            ]);
            setinputtext("")
        }else{
            alert('please enter something...')
        }
    }

    const statushandler = (e) =>{
        setstatus(e.target.value);
    }
    return (
        <Formdiv>
            <form>
                <input value={inputtext} type="text" onChange={inputchangehandler}/>
                <button type="submit" onClick={submithandler}>
                    <i className="fas fa-plus-square i"></i>
                </button>
                <Select>
                    <select onChange={statushandler} name="todoes">
                        <option value="all">all</option>
                        <option value="complated">complated</option>
                        <option value="uncomplated">uncomplated</option>
                    </select>
                </Select>
            </form>
        </Formdiv>
    )
}

const Formdiv = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;
    form {
        display:flex;
        align-items:center;
        button{
            height: 36px;
            width: 36px;
            // &:hover{
            //     color:#fff;
            //     background-color:black;
            // }
            .i{
                color:orange;
                font-size:20px;
            }
        }
        input{
            height: 36px;
            width: 166px;
        }
    }
`

const Select = styled(motion.div)`
    margin:0.5rem;
    position:relative;
    over-flow:hidden;
    width:6rem;
    height: 36px;
    font-family:vazir;
    select{
        color:#ff6f47;
        font-family:vazir;
        cursor:pointer;
        
        font-weight:900;
        padding:0.3rem;
        
    }

`

export default Form;