import React from "react";
import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from "./layout/main/Main";


function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}

export default App;