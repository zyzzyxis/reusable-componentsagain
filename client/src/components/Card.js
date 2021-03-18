import {useState} from 'react'
import {MEDIUM_SPACING} from '../styles'
import CardContainer from './CardContainer'
import Fade from './Fade'


const Card = (props) => {
  const {header, children} = props
  const [hideBody, setHideBody] = useState(false)

  return(
    <CardContainer>
      <header style={{marginBottom: MEDIUM_SPACING, display:'flex', justifyContent: 'space-between'}}>
        <h3>{header}</h3>
        <p onClick={()=> {setHideBody(!hideBody)}}>{hideBody ? 'show ICON' : 'hide ICON'}</p>
      </header>
      <Fade hide={hideBody}>
        {children}
      </Fade>
    </CardContainer>
  )
}

export default Card