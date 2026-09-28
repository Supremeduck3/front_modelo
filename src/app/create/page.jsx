'use client';

import FormModal from "@/components/FormModal";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreatePage(){
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit= async (values) => {
        setLoading(true);

        try {
            axios.post('/api/series', values);
            setOpenModal(true);
            toast.success('Série criada!', {id:'create'});
        }catch ( error){
            toast.error('Erro ao criar a série', {id:'create'});
        }finally{
            setLoading(false)
        };

        
    }
    return(
            <main>
                <h2>Post - create</h2>
                <p>Cria uma nova serie</p>
                <Button type='primary' onClick={()=> setOpenModal(true)}> nova serie</Button>
                <FormModal openModal={openModal} confirmLoading={loading} onsubmit={handleSubmit} onCancel={()=> setOpenModal(false)}></FormModal>
            </main>
        )
}