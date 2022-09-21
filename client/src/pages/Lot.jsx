import React from 'react';
import styled from "styled-components";
import LotCreation from '../components/Userhomepage/LotCreation';
import Navbar from '../components/Userhomepage/Navbar';
import Sidebar from '../components/Userhomepage/Sidebar';

const Lot = () => {
    const Container = styled.div`
    display: flex;
    `
   

    return (
        <Container>
        <Sidebar/>
            <LotCreation/>
        </Container>
    );
}

export default Lot;
