import Accordion from 'react-bootstrap/Accordion';
import Tables from './Tables';

export function ConstantToDo() {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Constant To Do List</Accordion.Header>
                    <Accordion.Body>
                        <Tables />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}