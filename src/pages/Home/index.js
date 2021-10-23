import { useState } from 'react';

import { Btn, Container,Main } from './styled'


const Home = () => {

    const [city, setCity] = useState('')

    const [weatherForcast,setWeatherForcast] =useState(null)

    const searcForcastWeather = () => {
        
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=b60f38e95f5b496f97c163757212210&q=${city}&lang=pt`
            ).then((response) => {
                if (response.status===200){
                    return response.json()
                }
                if (response.starus !==200){
                    alert('Erro! Local não encontrado')
                }
            }).then ((data)=>{
                setWeatherForcast(data)
            })
            setCity('')
    }
    

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <Main>
            
            <Container>
                <h1>Verifique agora a previsão do tempo na sua cidade !</h1>
                <p>Digite a sua cidade no campo abaixo e em seguida clique em pesquisar </p>
                <input value={city} onChange={handleCityChange} />
                <Btn onClick={searcForcastWeather }  >Pesquisar </Btn>

                {
                    weatherForcast ? (
                        <div>
                            <div>
                                <img src={weatherForcast.current.condition.icon} alt="Tempo"/>
                            </div>
                            <div>
                                <h3>Hoje o dia está : {weatherForcast.current.condition.text} 
                                na cidade de  {weatherForcast.location.name} - {weatherForcast.location.region}</h3>
                            </div>
                            <div>
                               <h3> Temp :{weatherForcast.current.temp_c}°C</h3>
                            </div>
                        </div>

                    ) : null
                }
            </Container>
        </Main>
    )
}

export default Home;