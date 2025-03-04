import {useState, useEffect} from 'react'
import axios from '../axios-config'
import {Link} from 'react-router-dom'
import "./Home.css"

const Home = () => {

  const [certificados, setCertificados] = useState([]);

  const getCertificados = async () =>{
    const res = await axios.get("/api/Memory");

    setCertificados(res.data);
  }

  useEffect(()=>{
    getCertificados()
  },[])

  return (
    <div className='home'>
      <h2>Confira os seus certificados</h2>
      <div className='certificados-container'>
        {certificados.length > 0 && certificados.map((memory) =>(
          <h1>{memory.title}</h1>
        ))}
      </div>
    </div>
  )
}

export default Home
