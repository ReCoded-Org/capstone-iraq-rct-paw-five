import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Redirect } from 'react-router-dom'
import './MyPets.css'
import {
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Container,
} from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import DeleteModal from './DeleteModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchMyPets, UpdateMyPett } from '../../redux/actions/actions'

export default function FetchMyPets() {
  const { t } = useTranslation()

  const [pageNumber, setPageNumber] = useState(0)
  const userInfo = useSelector(state => state.user)

  const MyPets = useSelector(state => state.myPets)
  const currentUser = useSelector(state => state.user.isLoggedIn)

  const petPerPage = Math.ceil(MyPets.length / 3)
  const pagesVisited = pageNumber * petPerPage
  const pageCount = Math.ceil(MyPets.length / petPerPage)

  const [show, setShow] = useState(false)

  const [petId, setPetId] = useState('')
  const [petName, setPetName] = useState('')
  const [petImg, setPetImg] = useState('')

  const handleClose = () => setShow(false)

  const handleShow = (e, id, name, img) => {
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

  const [uid, setuid] = useState('')

  const checkUid = () => {
    if (currentUser) {
      setuid(userInfo.user.uid)
    }
  }

  useEffect(() => {
    checkUid()
  }, [currentUser])

  useEffect(() => {
    dispatch(fetchMyPets(name, sort, uid))
  }, [name, sort, uid])

  return !currentUser ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Container className=" slid p-5" fluid>
        <h2 className="text-center text-white p-3">
          {t('mypets.welcome')} {userInfo.user.name}
        </h2>
        <Row>
          <Col className="col-7 d-flex justify-content-center">
            <InputGroup className="w-75 text-center">
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder={`${t('mypets.petname')}`}
                className="text-danger text-size left-raduis"
                onChange={changeName}
                value={name}
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="right-raduis">
                  <FontAwesomeIcon icon={faSearch} className="text-size" />{' '}
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
          <Col className="col-5 ">
            <Form.Control
              as="select"
              className="mr-sm-2 text-size bg-select w-75"
              id="inlineFormCustomSelect"
              custom
              value={sort}
              onChange={selectedType}
            >
              <option value="petName">{t('mypets.name')}</option>
              <option value="age">{t('mypets.age')}</option>
              <option value="city">{t('mypets.city')}</option>
            </Form.Control>
          </Col>
        </Row>
      </Container>
      <Container className="img3  ">
        {MyPets
          ? MyPets.slice(pagesVisited, pagesVisited + petPerPage).map(pet => (
              <div
                className="card text-center m-lg-5 m-md-3 m-sm-2 m-2 shadow-lg  mypet rounded "
                key={pet.id}
              >
                <h5 className="p-3 text-center ">{pet.petName}</h5>
                <Row className="d-flex align-items-center">
                  <Col lg={3} md={6} className="d-flex justify-content-center">
                    {' '}
                    <img
                      className="card-img-top ml-md-4 mb-2 p-2 img-fluid"
                      style={{
                        height: 'auto',
                        minWidth: '200px',
                        borderRadius: '15px',
                      }}
                      src={pet.file}
                      alt=""
                    />
                  </Col>

                  <Col>
                    <div className="card-body justify-content-center">
                      <p className="card-text text-center">
                        {pet.story.substr(0, 150)}
                      </p>
                      <div className="d-flex align-items-center float-right">
                        <Form.Check
                          type="switch"
                          id={pet.id}
                          label={t('mypets.adopted')}
                          className="align-items-center"
                          onChange={e => adoptTogle(e, pet.id, !pet.adopted)}
                          checked={pet.adopted}
                        />
                        <button
                          onClick={e =>
                            handleShow(e, pet.id, pet.petName, pet.file)
                          }
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
      <Container align="left" className="d-flex justify-content-center mt-4">
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
