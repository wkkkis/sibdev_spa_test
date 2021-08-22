import React from 'react';
import { Modal, Form, Input, Select, Button, Slider, InputNumber } from 'antd';

const AddFavoriteModal = ({
    state, modalPopup, handleSubmit,
    request_value
}) => {

    const [slider, setSlider] = React.useState(null);
    let onChange = value => {
        setSlider(value)
    };

    let onFinish = value => {
        handleSubmit(request_value, slider, value)
        modalPopup()
    }

    return (
        <div>
            <Modal
                title="Сохранить запрос"
                centered
                visible={state}
            >
                <Form
                    name="basic"
                    className="login_form"
                    labelCol={{
                        span: 100,
                    }}
                    wrapperCol={{
                        span: 100,
                    }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        label="Запрос"
                        name="request"
                    >
                        <Input disabled value={request_value} />
                        <span style={{display:"none"}}>{request_value}</span>
                    </Form.Item>

                    <Form.Item
                        label="Название"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите название',
                            },
                            ]}
                    >
                        <Input placeholder="Укажите название" />
                    </Form.Item>

                    <Form.Item
                        label="Сортировать по"
                        name="sort"
                    >
                        <Select placeholder="Без сортировки" style={{ width: "100%" }}>
                            <Select.Option value="date">Дате</Select.Option>
                            <Select.Option value="rating">Популярности</Select.Option>
                            <Select.Option value="title">Алфовиту</Select.Option>
                            <Select.Option value="videoCount">Колличеству видео на канале</Select.Option>
                            <Select.Option value="viewCount">Просмотрам</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Максимальное колличество"
                    >
                        <Slider
                            min={0}
                            max={50}
                            onChange={onChange}
                            value={slider}
                        />
                        <InputNumber
                                min={0}
                                max={50}
                                value={slider}
                                onChange={onChange}
                            />
                    </Form.Item>

                    <div className="form-footer">
                        <Form.Item
                            wrapperCol={{
                            offset: 100,
                            span: 100,
                            }}
                        >
                            <Button onClick={modalPopup}>
                                Не сохранять
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default AddFavoriteModal;
