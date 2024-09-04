import React from 'react';

const FeaturesCard = (props) => {
  return (
    <div className='featurecard'>
  <img className='image' src={props.img} alt="" />
  <div className='featurecontent'>
    <h2 className='title'>{props.title}</h2>
    <h5 className='description'>{props.desc}</h5>
    <button className='learn-more'>
      Learn more <i className='fa fa-arrow-right'></i>
    </button>
  </div>
  <style>
    {`
    .featurecard {
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  border-width: 2px;
  border-radius: 20px;
  padding: 1rem 1rem; /* py-6 px-4 */
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.featurecard:hover {
  background-color: #c3e11d;
}

.featurecard img {
  object-fit: contain;
}

.featurecard .featurecontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featurecard h2 {
  color: #00316e;
  font-weight: 600;
  font-size: 1.125rem; /* text-lg, lg:text-xl */
}

.featurecard h5 {
  font-size: 0.875rem; /* text-sm */
  margin-top: 0.5rem; /* mt-2 */
}

.featurecard button {
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1*/
  font-weight: 600;
  font-size: 0.875rem; /* text-sm */
  color: #00316e;
  margin-top: 0.75rem; /* mt-3 */
  background: none;
  border: none;
  cursor: pointer;
}

.featurecard button i {
  color: #00316f;
  font-size: 0.75rem; /* text-xs */
}

    `}
  </style>
</div>
  );
};

export default FeaturesCard;
