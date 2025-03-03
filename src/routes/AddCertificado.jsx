import axios from "../axios-config.js"
import {useState, useEffect} from 'react'

const AddCertificado = () => {
  return (
    <div className="add-certificado">
      <h2>Registre um novo certificado:</h2>
      <form action="">
        <label>
          <p>Título:</p>
          <input type="text" placeholder="Coloque o nome do Curso." name="title" />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea type="text" placeholder="Explique sobre o curso." name="description" />
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" />
        </label>
        <input type="submit" className="btn" value="Enviar"/>
      </form>
    </div>
  )
}

export default AddCertificado
