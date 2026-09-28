'use-client'

import { Form, Input, InputNumber, Modal } from "antd";

export default function FormModal({ openModal, serie, confirmLoading, onsubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
            title={serie ? 'Editar série' : 'Cria nova série'}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden>
            <Form form={form} layout='vertical' initialValues={serie} on onFinish={onsubmit}>
                <Form.Item
                    name='title'
                    label='Título'
                    rules={[{
                        require: true,
                        min: 3,
                        max: 120,
                        message: 'Título obrigatorio deve ter entre 3 e 120 caracteres.',

                    },
                    ]}
                >
                    <Input placeholder=" ex: Breaking Bad"></Input>
                </Form.Item>
                <Form.Item
                    name='genero'
                    label='Gênero'
                    rules={[{
                        require: true,
                        message: 'Gênero obrigatorio.',

                    },
                    ]}
                >
                    <Input placeholder=" ex: Drama"></Input>
                </Form.Item>
                <Form.Item
                    name='plataforma'
                    label='Plataforma'
                    rules={[{
                        require: true,
                        message: 'Plataforma é obrigatoria.',

                    },
                    ]}
                >
                    <Input placeholder=" ex: Netflix"></Input>
                </Form.Item>
                <Form.Item
                    name='numero_temporadas'
                    label='Temporadas'
                    rules={[{
                        require: true,
                        type: 'number',
                        message: 'Número de temporadas é obrigatorio.',

                    },
                    ]}
                >
                    <InputNumber placeholder=" ex: 5" min={1} style={{width: '100%'}}></InputNumber>
                </Form.Item>
                <Form.Item
                    name='ano_lancamento'
                    label='Ano de Lançamento'
                    rules={[{
                        require: true,
                        type: 'number',
                        message: 'Ano de lançamento é obrigatorio.',

                    },
                    ]}
                >
                    <InputNumber placeholder=" ex: 2008" min={1900} max={2100} style={{width: '100%'}}></InputNumber>
                </Form.Item>
                <Form.Item
                    name='imageUrl'
                    label='Url da imagem'
                    rules={[{
                        type:'url',
                        message: 'Deve ser uma url válida.',

                    },
                    ]}
                >
                    <Input placeholder="ex: https://codeverse.dev.br/breaking-bad.png"></Input>
                </Form.Item>
            </Form>
        </Modal >
    )
}