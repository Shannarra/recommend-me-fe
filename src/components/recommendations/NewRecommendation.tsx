import {Alert, Button, Form} from "react-bootstrap";
import { useState} from "react";
import {LOCAL_STORAGE, USER_LS_NAME} from "../../constants";
import {create_new_recommendation} from "../../reducers/requests/recommendationRequests";
import {ICreateRecommendationProps} from "../../types/recommendationProps";

export const NewRecommendation = () => {

    const [file, setFile] = useState<any>();
    const [isWrongType, setIsWrongType] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isSet, setIsSet] = useState(false);
    const currentUser = LOCAL_STORAGE.tryParseRead(USER_LS_NAME);

    const formSubmitted = () => {
        if (!file) {
            setIsWrongType(true);
            return;
        }
        const data: ICreateRecommendationProps = {
            cv: file,
            by: currentUser.email,
            user_id: currentUser.id,
            send_now: checked
        };

        create_new_recommendation(data)
    }

    const handleFileChange = (e: any) => {
        if (e.target.files[0]?.type === 'application/pdf') {
            setIsWrongType(false)
            setFile(e.target.files[0])
            setIsSet(true);
        } else {
            setIsWrongType(true)
        }
    }

    const handleCheckChange = (e: any) => {
        setChecked(e.target.checked);
        console.log(!checked);
    }

    return (
        <div className="row" style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div>
                {isWrongType && <Alert variant='danger'>Wrong file type provided. Please provide only .PDF files.</Alert>}
                {isSet ? (
                    <div>
                        <p>Filename: {file?.name}</p>
                        <p>Filetype: {file?.type}</p>
                        <p>Size in bytes: {file?.size}</p>
                    </div>
                ) : <p>Select a file to show information about it</p>}
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Please upload only .PDF files, any other will be ignored.</Form.Label>
                    <Form.Control  style={{margin: '15px 0'}} type="file" onChange={handleFileChange} />
                    <Form.Group className="text-lg-start" style={{padding: '15px 0'}}>
                        <Form.Check type="checkbox" onChange={handleCheckChange} label="Send now?"/>
                    </Form.Group>
                    <Button onClick={formSubmitted} className="form-control btn btn-success">Recommend!</Button>
                </Form.Group>
            </div>
        </div>
    )
}
