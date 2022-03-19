import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Form from './components/Form';
import Todolist from './components/Todolist'
function App() {
    const[inputtext , setinputtext] = useState("");
    const[todoes , settodoes] = useState([]); 
    const [status , setstatus] = useState("all");
    const [filtertodoes , setfiltertodoes] = useState([]);
    
    useEffect(()=>{
        getlocalstorage();
    },[])

    useEffect(()=>{
        fliterhandler();
        savelocalhandler();
    },[status,todoes]);

    const fliterhandler = () =>{
        switch(status){
            case "complated":
                setfiltertodoes(todoes.filter((todo) => todo.complated === true ));
                break;
            case "uncomplated":
                setfiltertodoes(todoes.filter((todo) => todo.complated === false));
                break;
            default:
                setfiltertodoes(todoes);
                break;         
        }
    }

    const savelocalhandler =()=>{
            localStorage.setItem("todoes" , JSON.stringify(todoes))
    }

    const getlocalstorage =()=>{
        if(localStorage.getItem("todoes") === null){
            localStorage.setItem("todoes" , JSON.stringify([]))
        }else{
            let local = JSON.parse(localStorage.getItem("todoes"));
            settodoes(local)
        }
    }
    return (
        <Appdiv>
            <Header>
                <h2>this is todolist</h2>
            </Header>
            <Form fliterhandler={fliterhandler} setstatus={setstatus} todoes={todoes} settodoes={settodoes} inputtext={inputtext} setinputtext={setinputtext}/>
            <Todolist filtertodoes={filtertodoes} fliterhandler={fliterhandler} inputtext={inputtext} todoes={todoes} settodoes={settodoes}/>
        </Appdiv>
    );
}

const Appdiv = styled(motion.div)`
    margin:auto;
    text-align:center;

`

const Header = styled(motion.div)`
    margin-top:20px;
`

export default App;