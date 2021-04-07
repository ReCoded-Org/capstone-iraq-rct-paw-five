import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Slider({ pets }) {
  return (
    <div className="slide-container" dir="ltr">
      {pets ? (
        <Slide>
          { pets.map(pet => (
            <div key={pet.id} className="each-slide d-flex justify-content-center m-5">
              <img
                src={pet.file}
                className="img-fluid"
                alt=""
                style={{
                  borderRadius: '40px',
                  height: '22rem',
                }}
              />
            </div>
          ))}
        </Slide>
      ) : (
        ''
      )}
    </div>
  )
}


Slider.propTypes = {
  pets: null,
}

Slider.defaultProps = {
  pets: {},
}
