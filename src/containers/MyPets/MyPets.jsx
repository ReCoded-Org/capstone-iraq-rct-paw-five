import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './MyPets.css'
import {
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Container,
} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import DeleteModal from './DeleteModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchMyPets, UpdateMyPett } from '../../redux/actions/actions'

export default function FetchMyPets() {
  const [pageNumber, setPageNumber] = useState(0)

  const MyPets = useSelector(state => state.myPets)
  const usersPerPage = Math.ceil(MyPets.length / 3)
  const pagesVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(MyPets.length / usersPerPage)

  const [show, setShow] = useState(false)

  const [petId, setPetId] = useState('')
  const [petName, setPetName] = useState('')
  const [petImg, setPetImg] = useState('')

  const handleClose = () => setShow(false)

  const handleShow = (e, id, name,img) => {
    setPetId(id)
    setPetName(name)
    setPetImg(img)
    setShow(true)
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const dispatch = useDispatch()
  const [name, setname] = useState('')
  const [sort, setsort] = useState('petName')

  const selectedType = e => {
    setname('')
    setsort(e.target.value)
  }

  const adoptTogle = (e, id, adopted) => {
    dispatch(UpdateMyPett(id, adopted))
  }

  const changeName = e => {
    setsort('petName')
    setname(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchMyPets(name, sort))
  }, [name, sort])

  return (
    <div>
      <Container className=" slid p-5" fluid>
        <h2 className="text-center text-white p-3">Welcome Paw-five</h2>
        <Row>
          <Col className="col-7 d-flex justify-content-center">
            <InputGroup className="w-75 text-center">
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder="Pet Name"
                className="text-danger text-size"
                onChange={changeName}
                value={name}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} className="text-size" />{' '}
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
          <Col className="col-5">
            <Form.Control
              as="select"
              className="mr-sm-2 text-size bg-white w-75"
              id="inlineFormCustomSelect"
              custom
              value={sort}
              onChange={selectedType}
            >
              <option value="petName">Name</option>
              <option value="age">Age</option>
            </Form.Control>
          </Col>
        </Row>
      </Container>
      <Container className="img3  ">
        {MyPets
          ? MyPets.slice(pagesVisited, pagesVisited + usersPerPage).map(pet => (
              <div
                className="card text-center m-lg-5 m-md-3 m-sm-2 m-2   "
                key={pet.id}
              >
                <h5 className="card-header text-left">{pet.petName}</h5>
                <Row className="d-flex align-items-center">
                  <Col lg={3} md={6} className="d-flex justify-content-center">
                    {' '}
                    <img
                      className="card-img-top p-2 img-fluid"
                      style={{
                        height: 'auto',
                        minWidth: '200px',
                      }}
                      src={pet.file}
                      alt=""
                    />
                  </Col>

                  <Col>
                    <div className="card-body justify-content-center">
                      <h5 className="card-title text-center">
                        Special title treatment
                      </h5>
                      <p className="card-text text-center">
                        {pet.story.substr(0, 100)}
                      </p>
                      <div className="d-flex align-items-center float-right">
                        <Form.Check
                          type="switch"
                          id={pet.id}
                          label="Adopted"
                          className="align-items-center"
                          onChange={e => adoptTogle(e, pet.id, !pet.adopted)}
                          checked={pet.adopted}
                        />
                        <button
                          onClick={e => handleShow(e, pet.id, pet.petName, pet.file)}
                          key={pet.id}
                          className="btn btn-danger  m-2 text-danger bg-transparent border-0 p-3"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          : ''}
        <DeleteModal
          show={show}
          petId={petId}
          handleClose={handleClose}
          petName={petName}
          petImge={petImg}
        />
      </Container>
      <Container align="left" className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </Container>
    </div>
  )
}
