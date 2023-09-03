import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';


import './View.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DailyToDo } from './DailyToDo';
import { ConstantToDo } from './ConstantToDo';
import { MonthlyToDo } from './MonthlyToDo';



export function View() {
    const [selectedList, setSelectedList] = useState('')
    function handleNavItemClick(listType) {
        setSelectedList(listType);
}

    return (
        <div style={{ backgroundColor: "#202020", minHeight: "100vh" }}>
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home" onClick={() => handleNavItemClick('monthly')}>To Do List</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => handleNavItemClick('monthly')}>Monthly To Do List</Nav.Link>
                            <Nav.Link href="#features" onClick={() => handleNavItemClick('daily')}>Daily To Do List</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => handleNavItemClick('constant')}>Constant To Do List</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {selectedList === 'monthly' && <MonthlyToDo />}
                {selectedList === 'daily' && <DailyToDo />}
                {selectedList === 'constant' && <ConstantToDo />}
            </div>
        </div>
    )
}