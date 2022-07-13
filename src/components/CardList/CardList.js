import { useState, useEffect } from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardList = ({title, products}) => {
    
    return(
      <>
      <h2>{title}</h2>
      <Grid container spacing={2}>
      <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination, Navigation]}
          navigation={true}            
      >
          {
              products.map( ({title, price, image, id, stock}) => {
                  return(
                      <SwiperSlide key={id}>
                          <CardItem 
                              title={title} 
                              price={price} 
                              image={image} 
                              stock={stock} 
                              id={id}
                          />
                      </SwiperSlide>
                  )
              })
          }
      </Swiper>

      ) : <div className='list-result-prods'>{products.map( ({title, price, image, id, stock}) => <CardItem title={title} price={price} image={image} stock={stock} id={id} />)}</div>}
      </Grid>
      </>
  )
    
}

export default CardList