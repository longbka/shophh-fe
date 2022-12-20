import { Nav, Navbar, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import iconImages from '~/assets/iconImages';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import PopoverStickOnHover from '~/utils/PopoverStickOnHover';
const cx = classNames.bind(styles);
function Header() {
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
  const expand = 'lg';
  const handleLogOut = () => {
    Cookies.remove('jwt');
    Cookies.remove('user');
    window.location.reload();
  };
  useEffect(() => {
  }, []);
  return (
    <>
      <Navbar sticky="top" key={expand} expand={expand} bg="primary" variant="dark" className={cx('navbar')}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Danh sách</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/about">
                  Giới thiệu
                </Nav.Link>
                <Nav.Link as={Link} to="/discount">
                  Khuyến mãi
                </Nav.Link>
                <Nav.Link as={Link} to="/news">
                  Tin tức
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Liên hệ
                </Nav.Link>
                <NavDropdown title="Danh mục sản phẩm" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  <NavDropdown.Item as={Link} to="/action3"></NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/action5">
                    <img
                      className={cx('icon-category')}
                      width="25"
                      height="25"
                      alt="cate_icon"
                      loading="lazy"
                      src={iconImages.crabIcon}
                    />
                    Cua - Ghẹ
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {(user && (
                  <PopoverStickOnHover
                    component={
                      <ListGroup>
                        <ListGroup.Item action className="border-0">
                          Tài khoản của tôi
                        </ListGroup.Item>
                        <ListGroup.Item action className="border-0">
                          Đơn mua
                        </ListGroup.Item>
                        <ListGroup.Item action className="border-0" onClick={handleLogOut}>
                          Đăng xuất
                        </ListGroup.Item>
                      </ListGroup>
                    }
                    placement="bottom"
                    onMouseEnter={() => {}}
                    delay={200}
                  >
                    <Nav.Link as={Link} to="/about" style={{ float: 'right' }}>
                      {user.fullName||user.username}
                    </Nav.Link>
                  </PopoverStickOnHover>
                )) || (
                  <>
                    <Nav.Link as={Link} to="/login" style={{ float: 'right' }}>
                      Đăng nhập
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register" style={{ float: 'right' }}>
                      Đăng ký
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
