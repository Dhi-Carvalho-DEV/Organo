import Collaborator from '../Collaborator'
import './Team.css'

const Team = props => {
  return props.colaboradores.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
      <div className="collaborators">
        {props.colaboradores.map(colaborador => (
          <Collaborator
            key={colaborador.nome}
            corDeFundo={props.primaryColor}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}

export default Team
