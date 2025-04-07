import { useState } from 'react'; 
import { Modal, Button, Form } from 'react-bootstrap'; 
import { addNewExperience } from '../../api/axiosExperienceConfig';  

export default function NewExperienceModal({ onClose }) {
    const [ exp, setExp ] = useState(''); 
    const [ handleClose, setHandleClose ] = useState(false)
    
    const onAddNew = async (event) => {
        event.preventDefault() // May not need, depeneding on what I want to do w/ the modal 
        const updatedExp = {
            ...exp,
            image: exp.image ? exp.image : 'https://dummyimage.com/400x300/9c90e8/f7f7f7.png&text=No+Image+Available'
        };
        await addNewExperience(updatedExp)
        onClose() 
    }

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onAddNew}>
                    <Form.Group className="mb-3" controlId="formExpName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter name of experience"
                            value={exp.name}
                            onChange={(e) => setExp({ ...exp, name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formExpCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter experience category"
                            value={exp.category}
                            onChange={(e) => setExp({ ...exp, category: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formExpImg">
                        <Form.Label>Image (optional) </Form.Label>
                        <Form.Control 
                            type="file"
                            onChange={(e) => setExp({ ...exp, image: e.target.value })}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
} 