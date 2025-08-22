import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ isLogin, setIsLogin }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Xử lý login ở đây
        try {
            const res = await axios.get(`http://localhost:8888/users`);
            let users = res.data;
            console.log(users);

            const user = users.find(
                (user) => user.email === email && user.password === password
            );
            console.log(user);

            if (user) {
                //Lưu vo Storage
                localStorage.setItem("users", JSON.stringify(user));
                setIsLogin(true);
                navigate("/home");
            } else {
                setMessage("Email or password is incorrect");
                setIsLogin(false);
            }
        } catch (error) {
            console.error(">>>Error fetching user data: ", error);
        }

    };

    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }}>
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Card className="shadow-lg p-4 rounded-4">
                            <Card.Body>
                                <h3 className="text-center mb-4">Login</h3>
                                <Form onSubmit={handleSubmit}>
                                    {/* Email */}
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}   // <- gắn state
                                            onChange={(e) => setEmail(e.target.value)} // <- cập nhật state
                                            required
                                        />
                                    </Form.Group>

                                    {/* Password */}
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            value={password} // <- gắn state
                                            onChange={(e) => setPassword(e.target.value)} // <- cập nhật state
                                            required
                                        />
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <Button variant="success" type="submit" size="lg">
                                            Login
                                        </Button>
                                    </div>

                                    {/* Register Link */}
                                    <p className="text-center mt-3">
                                        Don't have an account? <Link to="/register">Register here</Link>
                                    </p>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;