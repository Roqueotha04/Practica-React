import './App.css'
export function TwitterFollowCard({username, name, isFollowing}){
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
                <button className='tw-button'>
                    Seguir
                </button>
            </aside>
        </article>

    )
}