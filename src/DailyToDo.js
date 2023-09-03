import Accordion from 'react-bootstrap/Accordion';
import Tables from './Tables';

export function DailyToDo(){
    return(
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Monday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tuesday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Wednesday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Thursday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Fryday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Saturday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Sunday To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>        
        </div>
    )
}

