import { useState } from 'react'

export function TwitterFollowCard({userName, avatar, publicName, urlDestino}){
	//importamos useState para internamente cambiar el estado
	const [isFollowing, setIsFollowing] = useState(false)
	//Si nos estan siguiente mostrar siguiendo y si no simplemente seguir
	const text = isFollowing ? 'siguiendo' : 'seguir'
	//cambia el estilo del boton dependiendo de isFollowing
	const buttonClassName = isFollowing
	? 'tw-followCard-button is-following'
	: 'tw-followCard-button'
	//funcion que cambia el estado del boton
	const handleClick = () =>{
		setIsFollowing(!isFollowing)
		window.open(urlDestino, '_blank');
	}

	return(
		<article className='tw-followCard'>
		<header className='tw-followCard-header'>
			<img
			className='tw-followCard-avatar'
			alt="Avatar" 
				src={avatar} />
		<div className='tw-followCard-info'>
		<strong className=''>{publicName}</strong>
		<span className='tw-followCard-infoUserName'>@{userName}</span>
		</div>

		</header>
		<aside>
			<button className={buttonClassName} onClick={handleClick}>
				{text}
			</button>
		</aside>

		</article>

	)

}
