import React from 'react'
import './Review.css'
import ReviewCard from './ReviewCard'
import reviewText, { reviews } from './reviewText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react/cjs/react.development';
import quotes from './img/image 84 (Traced).png'
import dmitri from './img/Avatars (3).png'
import anna from './img/Avatars (1).png'

export default function ReviewAll() {
  const prev = useRef(),
    next = useRef(),
    [name, setName] = useState(''),
    [description, setDescription] = useState(''),
    [sex, setSex] = useState(''),
    [data, setData] = useState(reviews);
  const date = new Date().toLocaleDateString();
  const [selectedOption, setSelectedOption] = useState('')
  function handleCahge(e) {
    setSelectedOption(e.target.value)

  }

  function prevSlide() {
    prev.current.classList.add('prev-slide')
  }
  function nextSlide() {
    if (prev.current.classList.contains('prev-slide')) {
      prev.current.classList.remove('prev-slide')
      prev.current.style.transition = "1s"

    }
  }
  function addReview(item) {
    const newReview = {
      id: 1,
      src: selectedOption == 'Ж' ? anna : dmitri,
      name,
      description,
      date,
    };
    setData([newReview, ...data])    
    setDescription('')
    setName('')
    setSex('')
    if (name === '' & description == '') {
      alert('С начало заполните поля')
      setData(data)
    }
  }

  return (
    <div>
      <div className='review-section'>
        <div className="text-review">
          <h1>Отзывы</h1>

          <div class="button-review">
            <button onClick={prevSlide} className="fa fa-arrow-left"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={nextSlide} className="fa fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>

        </div>
        <div className='review-add'>
          <div className='review-column'>
            <div>
              <input type="text" value={name} placeholder='Имя' onChange={(e) => setName(e.target.value)} />
              <select value={selectedOption} onChange={handleCahge}>
                <option disabled>Выберите пол</option>
                <option>M</option>
                <option>Ж</option>
              </select>

            </div>
            <textarea value={description} placeholder='Ваше отзыв' onChange={(e) => setDescription(e.target.value)}></textarea>

          </div>
          <button onClick={addReview}>Add review</button>

        </div>
        <div ref={prev} className='review-cards'>
          {
            data.map(el => (
              <div class="review-card">
                <div class="user">
                  <div className='review-img-row' >
                    <img src={el.src} alt="" />
                    <h4>{el.name}</h4>
                  </div>
                  <div class="d-flex align-self-start">
                    <img src={quotes} alt="" />
                  </div>
                </div>
                <div class="text-review">
                  <p >{el.description}</p>
                </div>
                <div>
                  <p className='date'>{el.date}</p>
                </div>

              </div>
            ))

          }
          {/* <ReviewCard
                src = {reviewText.petr}
                name = {reviewText.namePetr}
                text = {reviewText.reviewPetr}
                date = {reviewText.datePetr}
                />
                  <ReviewCard
                src = {reviewText.anna}
                name = {reviewText.NameAnna}
                text = {reviewText.reviewAnna}
                date = {reviewText.dateAnna}
                />
                  <ReviewCard
                src = {reviewText.victor}
                name = {reviewText.NameVictor}
                text = {reviewText.reviewVictor}
                date = {reviewText.dateVictor}
                />
                  <ReviewCard
                  
                src = {reviewText.dmitri}
                name = {reviewText.NameDmitri}
                text = {reviewText.reviewDmitri}
                date = {reviewText.dateDmitri}
                /> */}

        </div>

      </div>

    </div>

  )
}
