import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({username, name, isFollowing}){
    const [following, setIsFollowing] = useState(isFollowing)
    const text = following ? 'Siguiendo' : 'Seguir'
    const buttonClassName = following ? 'tw-button is-following' : 'tw-button'

    const handleClick = () =>{
        setIsFollowing(!following)
    }
    
    const imageSrc = `https://unavatar.io/github/${username}`
    return(
        <article className='tw-article'>
            <header className='tw-header'>
                <img className='tw-img' 
                src={imageSrc} 
                alt="Imagen random" />
                <div className='tw-div'>
                    <strong>{name}</strong>
                    <span className='tw-span'>@{username}</span>
                </div>
            </header>
            <aside >
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>

    )
}