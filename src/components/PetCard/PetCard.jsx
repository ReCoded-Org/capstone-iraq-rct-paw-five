import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ContextData from '../../contextApi'

import './PetCard.css'

export default function PetCard() {
    const contextData = useContext(ContextData)

    const { t } = useTranslation()

    const [dirProperties, setDir] = useState({
        dir: 'ltr',
        detailsBtn: 'float-right',
        gender: 'float-left',
        location: ['10px', '220px'],
    })

    const handelDir = () => {
        if (contextData.lang === 'en' || contextData.lang == null) {
            const newdirProperties = { ...dirProperties }

            newdirProperties.dir = 'ltr'
            newdirProperties.detailsBtn = 'float-right'
            newdirProperties.gender = 'float-left'
            newdirProperties.location[0] = '10px'
            newdirProperties.location[1] = '220px'
            setDir(newdirProperties)
        } else {
            const newdirProperties = { ...dirProperties }
            newdirProperties.dir = 'rtl'
            newdirProperties.detailsBtn = 'float-left'
            newdirProperties.gender = 'float-right'
            newdirProperties.location[0] = '10px'
            newdirProperties.location[1] = '10px'
            setDir(newdirProperties)
        }
    }

    useEffect(() => {
        handelDir()
    }, [contextData.lang])

    return (
        <div dir={dirProperties.dir}>
            <Card
                style={{ maxWidth: '320px', maxHeight: '591px' }}
                className=" m-2 card"
            >
                <Card.Img
                    variant="top"
                    src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg"
                />
                <span
                    style={{
                        top: dirProperties.location[0],
                        left: dirProperties.location[1],
                    }}
                    className="petLocation"
                >
                    <FontAwesomeIcon
                        className="petLocationIcon"
                        icon={faMapMarkerAlt}
                    />{' '}
                    {t('petcard.location')}{' '}
                </span>
                <Card.Body>
                    <Card.Title className="petTitle" align="center">
                        {t('petcard.title')}
                    </Card.Title>
                    <Card.Text align="center">{t('petcard.story')}</Card.Text>
                    <span className={`${dirProperties.gender}`}>
                        <FontAwesomeIcon
                            className="petGenderIcon"
                            icon={faMars}
                        />{' '}
                        <span className="petGender">{t('petcard.gender')}</span>
                    </span>
                    <Button
                        className={`detailsBtn ${dirProperties.detailsBtn}`}
                        variant="primary"
                    >
                        {t('petcard.details')}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
