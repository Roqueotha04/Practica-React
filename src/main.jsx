import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'

const root = createRoot(document.getElementById('root'))
//NO puedo poner varios elementos, debo renderizarlos juntos. Se pasa 1 parametro a la funcion. 1 elemento

const SpecialButton = ({text}) =>{
  return (
    <button>
      {text}
    </button>  )
}

root.render(
  <>
    <TwitterFollowCard username={"midudev"} name={"miguel angel"} isFollowing={false}/>
    <TwitterFollowCard username={"roqueOtha04"} name={"roqueotha"} isFollowing={true}/>
  </>
)
