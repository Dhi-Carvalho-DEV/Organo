import { useState } from 'react'

import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = props => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const whenSaving = event => {
    event.preventDefault()
    props.registeredEmployee({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>{props.text}</h2>
        <TextField
          label="Nome"
          placeholder="Digite o seu nome"
          required={true}
          value={nome}
          whenChanging={value => setNome(value)}
        />
        <TextField
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          value={cargo}
          whenChanging={value => setCargo(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          required={true}
          value={imagem}
          whenChanging={value => setImagem(value)}
        />
        <DropdownList
          label="Time"
          itens={props.teams}
          required={true}
          value={time}
          whenChanging={value => setTime(value)}
        />
        <Button text="Criar card" />
      </form>
    </section>
  )
}

export default Form
