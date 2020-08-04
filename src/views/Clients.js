import React, { useState, useEffect, useCallback} from "react";
import { useHistory } from 'react-router-dom'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components

import Header from "components/Headers/Header.js";

import api from '../services/api';

function Clients(){

  const history = useHistory();

  const [clients, setClients] = useState([
    { 
      id: 1,
      name: 'zé delivery',
      plan: 'Básico',
      paymentStatus: 'ok',
      active: true
    },
    { 
      id:2,
      name: 'Ifood',
      plan: 'Avançado',
      paymentStatus: 'inadimplente',
      active: false
    }
  ]);

  useEffect(() => {
    async function loadingClients(){
      const response = await api.get('/clients');

      setClients(response.data);
    }

    loadingClients();
  },[])

  const handleProfile = useCallback(() => {
    history.push('/admin/client-profile')
  },[history])

  const handleNewClient = useCallback(() => {
    history.push('/admin/client-register')
  },[history])

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0 d-flex align-items-center justify-content-between" >
                <h3 className="mb-0">Clientes</h3>
                <Button color='primary' onClick={handleNewClient}>Cadastrar</Button>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Empresa</th>
                    <th scope="col">Plano</th>
                    <th scope="col">Pagamento</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">Users</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  
                    {clients.map(client => (
                      <tr key={client.id}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/bootstrap.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {client.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{client.plan}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className={client.paymentStatus === 'ok' ? "bg-success" : "bg-warning"} />
                          {client.paymentStatus}
                        </Badge>
                      </td>

                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className={client.active ? "bg-success" : "bg-warning"} />
                          {client.active ? "Ativo": 'Inativo'}
                        </Badge>
                      </td>
  
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              onClick={handleProfile}
                            >
                              Ver perfil
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
  
                    ))}

                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>

      </Container>
    </>
  );
}


export default Clients;
