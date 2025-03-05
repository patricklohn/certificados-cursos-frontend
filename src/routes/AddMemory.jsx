import {useState,useEffect} from 'react'
import './AddMemory.css'
import axios from '../axios-config'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const addMemory = () => {
  const {id} = useParams();

  const [certificado, setCertificado] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const getCertificado = async () =>{
    try {
      const res = await axios.get(`/api/Memory/${id}`);

      if(!res){
        toast.error(message.data.msg)
      }

      setCertificado(res.data);
      setComments(res.data.comments);
    } catch (error) {
      console.log(error)
      toast.error(error.message.data.msg)
    } 
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {

    const comment = {name, text};

    const res = await axios.patch(`/api/Memory/${id}/comment/`, comment)

    const lastComment = res.data.memorie.comments.pop();

    setComments((comments) => [...comments, lastComment]);
    setName("")
    setText("")

    toast.success(res.data.msg)
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }

  }
  useEffect(()=>{
    getCertificado();
  },[])

  if(!certificado){
    return <p>Carregando...</p>
  }

  return (
    <div className='memory-page'>
      <iframe  src={`${axios.defaults.baseURL}uploadsArquivos/${certificado.src}#zoom=67`} alt={`${certificado.title}`}/>
      <h2>{certificado.title}</h2>
      {certificado.description !== 'undefined' && (
        <p>{certificado.description}</p>
      )}
      <div className="comment-form">
        <h3>Envie o seu comentário:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder='Seu nome...' onChange={(e) => setName(e.target.value)} value={name}/>
          </label>
          <label>
            <textarea placeholder='Sua anotação sobre o curso...' onChange={(e) => setText(e.target.value)} value={text}/>
          </label>
          <input type="submit" className='btn' value='Enviar'/>
        </form>
      </div>
      <div className='comments-container'>
        <h3>Comentários ({comments.length})</h3>
        {comments.length === 0 && <p>Não há comentários...</p>}
        {comments.length > 0 && (comments.map((comment) => (
          <div className='comment' key={comment._id}>
            <p className='comment-name'>{comment.name}</p>
            <p className='comment-text'>{comment.text}</p>
          </div>
        )))}
      </div>
    </div>
  )
}

export default addMemory
