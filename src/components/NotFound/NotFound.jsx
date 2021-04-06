import React from 'react';
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound (){
    const { t } = useTranslation()
return(
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'80vh'}}>
    <div>
        <h1 className="gradient-text fw-bolder display-1 fw-bolder"><b>404</b></h1>
        </div>
        <h2 className="gradient-text py-1">{t('NotFoundPage.error404')}</h2>
        <Link to='/'>
        <Button className="btn px-4 my-4 border-0 gradient-background">{t('NotFoundPage.returnHome')}</Button>
        </Link>
    
    </div>
)
}


export default NotFound