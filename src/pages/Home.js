import CardList from "../components/CardList/CardList"

const Home = () => {

    

  
    

    return(
        <div className='general-container'>
            <CardList className='gcIlTitle' title={'Oferta del mes'}/>
            <CardList className='gcIlTitle' title={'Productos Recomendados'}/>
            <CardList className='gcIlTitle' title={'Descuentos especiales'}/>
        </div>
    )
}

export default Home