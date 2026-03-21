import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Form, Input, message } from 'antd';

import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditStory() {
    const {id} = useParams()
    const [form] = Form.useForm()
    const queryClient = useQueryClient();
    const nav = useNavigate()
    const { data , isLoading } = useQuery({
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

    const {mutate , isPending} = useMutation({
        mutationFn: async(values : any) => {
            return axios.put(`http://localhost:3000/stories/1`, {...data,
                title: values.title,})
        },

        onSuccess: ()  => {
            queryClient.invalidateQueries({queryKey: ['stories']})
            message.success("Sua thanh cong")
            nav('/')    
        }
    })

    const onFinish = (values :any) => {
        mutate(values)
    }
  return (
    <div>
          <Form disabled={isLoading} form={form} onFinish={onFinish}>
            <Form.Item label="Ten truyen" name="title" rules={[{required: true , message: "Vui long nhap ten truyen"}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Tac gia" name="author" rules={[{required: true , message: "Vui long nhap tac gia"}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Mo ta" name="description">
                <Input/>
            </Form.Item>
            <Form.Item label="Hinh anh" name="image">
                <Input/>
            </Form.Item>
            <Form.Item label="Created At" name="createdAt">
                <Input/>
            </Form.Item>

            <Button htmlType='submit' loading={isPending} >Submit</Button>
        </Form>
    </div>
  )
}

export default EditStory