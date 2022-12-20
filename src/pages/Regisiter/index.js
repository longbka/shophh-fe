import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import axios from "~/setup/instance";
export default function Registration() {
  const alert = useAlert();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const data = await axios({
        method: "post",
        url: "/api/auth/local/register",
        data: {
          fullName,
          username,
          email,
          password,
          phoneNumber,
          address,
        },
      });
      if (data) {
        alert.show("Đăng ký thành công");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response.data.error.message);
    }
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center ">
                    Đăng ký tài khoản mới
                  </h2>
                  <div className="mb-3">
                    <Form className="w-100">
                      <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label className="text-center">
                          Họ và tên
                        </Form.Label>
                        <Form.Control
                          {...register("fullName", { required: true })}
                          name="fullName"
                          type="text"
                          placeholder="Nguyễn Văn A"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                        {errors.fullName?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập họ tên đầy đủ
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="userName">
                        <Form.Label className="text-center">
                          Tên đăng nhập
                        </Form.Label>
                        <Form.Control
                          {...register("username", { required: true })}
                          name="username"
                          type="text"
                          placeholder="Enter Name"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào trường này
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào Email
                          </p>
                        )}
                        {errors.email?.type === "pattern" && (
                          <p className="text-danger">
                            *Vui lòng nhập đúng định dạng
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Điện thoại</Form.Label>
                        <Form.Control
                          {...register("phoneNumber", { required: true })}
                          name="phoneNumber"
                          type="phoneNumber"
                          placeholder="0912...."
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {errors.phoneNumber?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào số điện thoại
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                          {...register("address", { required: true })}
                          name="address"
                          type="address"
                          placeholder="Hà Nội"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào địa chỉ
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                          name="password"
                          type="password"
                          placeholder="Mật khẩu phải lớn hơn 6 ký tự"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào mật khẩu
                          </p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p className="text-danger">
                            *Vui lòng nhập mật khẩu lớn hơn 6 ký tự
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Xác nhận lại mật khẩu</Form.Label>
                        <Form.Control
                          {...register("confirmPassword", {
                            required: true,
                            validate: (val) => {
                              if (watch("password") !== val) {
                                return false;
                              }
                            },
                          })}
                          type="password"
                          placeholder="Nhập lại mật khẩu"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword?.type === "required" && (
                          <p className="text-danger">
                            *Vui lòng nhập vào trường này
                          </p>
                        )}
                        {errors.confirmPassword?.type === "validate" && (
                          <p className="text-danger">*Không trùng mật khẩu</p>
                        )}
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleSubmit(onSubmit)}
                        >
                          Đăng ký
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Đã có tài khoản?
                        <Link to="/login" className="text-primary fw-bold">
                          Đăng nhập tại đây
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
