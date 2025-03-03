import axios from "../axios-config.js"
import {useState, useEffect} from 'react'
import "./AddCertificado.css"

const AddCertificado = () => {

  const [inputs, setInputs] = useState({})
  const [image,setImage] = useState(null)

  const handleSubmit = async (event) =>{
    event.preventDefault()
    
    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", inputs.title)
    formData.append("description", inputs.description)

    try {
      const response = await axios.post("/api/Memory", formData, {
        headers:{
          "Content-Type":"multipart/form-data" ,
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    if(event.target.name === "image"){
      setImage(event.target.files[0])
    }else{
      setInputs({...inputs, [event.target.name]: event.target.name})
    }
  }


  return (
    <div className="add-certificado">
      <h2>Registre um novo certificado:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Título:</p>
          <input type="text" placeholder="Coloque o nome do Curso." name="title" onChange={handleChange} />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea type="text" placeholder="Explique sobre o curso." name="description" onChange={handleChange} />
        </label>
        <label>
          <p>Arquivo:</p>
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <input type="submit" className="btn" value="Enviar"/>
      </form>
    </div>
  )
}

export default AddCertificado
