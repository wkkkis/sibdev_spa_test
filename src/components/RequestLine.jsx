import React from 'react';
import EditFavoriteModal from "./EditFavoriteModal";
import { Button} from 'antd';

const RequestLine = ({
    item, editRequest,
    request_required, title_required,
    removeRequest, doRequest
}) => {

    const [modal, setmodal] = React.useState(false)

    const modalPopup = () => {
        setmodal(!modal)
    }

    let habdleSubmit = (slider, value) => {
        editRequest(slider, value, item.id)
        setmodal(false)
    }

    const handleSearch = () => {
        doRequest(item)
    }

    return (
        <div className="request bold">
            <span>{item.title}</span>
            <div className="request__button">
                <Button onClick={handleSearch}>Выполнить</Button>  
                <Button type="primary" onClick={modalPopup}>Редактрировать</Button>
                <Button type="danger" onClick={() => removeRequest(item.id)}>Удалить</Button>
            </div>
            <EditFavoriteModal 
                state={modal} 
                title_value={item.title} 
                request_value={item.request} 
                sort_variant={item.sort_variant}
                videos_number={item.video_number}
                handleSubmit={habdleSubmit} 
                modalPopup={modalPopup} 
                request_required={request_required} 
                title_required={title_required}
            />
        </div>
    )
}

export default RequestLine;