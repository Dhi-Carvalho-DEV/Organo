import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'

function App() {
  const teams = [
    {
      nome: 'Progamação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const newContributorAdd = colaborador => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.nome)}
        text="Preencha os dados para criar o card do colaborador."
        registeredEmployee={colaborador => newContributorAdd(colaborador)}
      />
      {teams.map(team => (
        <Team
          key={team.nome}
          teamName={team.nome}
          primaryColor={team.corPrimaria}
          secondaryColor={team.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
        />
      ))}
    </div>
  )
}

export default App
