import React from 'react'
import styled from "styled-components";
import Header from '../components/home/Header';
import Navbar from '../components/home/Navbar';
import Sponsored from '../components/home/Sponsored';

export default function Home() {

    const Container = styled.div ``
  return (
    <Container>

        <Navbar/>
        <Header/>
        <Sponsored/>
    </Container>
  )
}
