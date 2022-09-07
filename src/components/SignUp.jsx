import { Modal, Form, Input, Button } from "antd"; 

export default function SignUp ({ setToken }) {
    const handleSignUp= ({email, password}) => { // ant design take values which is why we take into account the name of my email and password 
        // post request to api/users
        fetch(("http://localhost:4555/users"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => alert(err.message) )
        // setToken
    }
    return (
        <Modal title="Create Account" visible closeable={false} footer={null}>
            <Form onFinish={handleSignUp} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                
                <Form.Item label="Email" name="email"> 
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span:16 }}>
                    <Button  type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>

            </Form>
        </Modal>
    )
}
