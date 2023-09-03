import Accordion from 'react-bootstrap/Accordion';
import Tables from './Tables';

export function MonthlyToDo(){
    return(
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>September To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>October To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>November To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>December To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>January To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>February To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>March To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>April To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>May To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>June To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>July To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>August To Do List</Accordion.Header>
                        <Accordion.Body>
                            <Tables />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </div>
    )
}