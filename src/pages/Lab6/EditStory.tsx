import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Form, Input } from 'antd';

import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditStory() {
    const {id} = useParams()
    const [form] = Form.useForm()
    const queryClient = useQueryClient();
    const nav = useNavigate()
    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/1`);
            return res.data;
        },
    });

    useEffect(() => {
        if(data) {
            form.setFieldsValue(data);
        }

    }, [data])

    const {mutate} = useMutation({
        mutationFn: async(values : any) => {
            return axios.put(`http://localhost:3000/stories/1`, values)
        },

        onSuccess: ()  => {
            queryClient.invalidateQueries({queryKey: ['stories']})
            toast("Sua thanh cong")
            nav('/')    
        }
    })

    const onFinish = (values :any) => {
        mutate(values)
    }
  return (
    <div>
        <Form form={form} onFinish={onFinish}>
            <Form.Item label="Ten truyen" name="title">
                <Input/>
            </Form.Item>

            <Button htmlType='submit'>Submit</Button>
        </Form>
    </div>
  )
}

export default EditStory