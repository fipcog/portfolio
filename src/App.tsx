import React from "react";
import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from "./layout/main/Main";
import { Footer } from "./layout/footer/Footer";


function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer/>
        </>
    );
}

export default App;