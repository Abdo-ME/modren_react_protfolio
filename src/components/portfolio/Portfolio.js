import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/form-validation.png'
import IMG2 from '../../assets/magazee.png'
import IMG3 from '../../assets/furniture-project.png'
import IMG4 from '../../assets/modern_restaurant.png'
import IMG5 from '../../assets/modren-house.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG1} alt="form Validation" />
          </div>
          <h3>Form Validition</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME" className='btn' target='_blank' >Github</a>
          <a href="https://form-validation2021.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG2} alt="Magazeen" />
          </div>
          <h3>Magazeen Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME/magazee_Templare" className='btn' target='_blank' >Github</a>
          <a href="https://abdo-me.github.io/magazee_Templare/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG3} alt="furniture project" />
          </div>
          <h3>Furniture Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME/Furniture-Project" className='btn' target='_blank' >Github</a>
          <a href="https://abdo-me.github.io/Furniture-Project/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG4} alt="modern restaurant" />
          </div>
          <h3>Modern Restaurant</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME/modern_restaurant" className='btn' target='_blank' >Github</a>
          <a href="https://abdo-me.github.io/modern_restaurant/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG5} alt="modren house" />
          </div>
          <h3>Modren House Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME/modren-house" className='btn' target='_blank' >Github</a>
          <a href="https://abdo-me.github.io/modren-house/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
        <aritcle className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG6} alt="form Validation" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Abdo-ME" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Abdo-ME" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </aritcle>
      </div>
    </section>
  )
}

export default Portfolio