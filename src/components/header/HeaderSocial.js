import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'
const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/abdelhak-mehda"><BsLinkedin/></a>
            <a href="https://github.com/Abdo-ME"><BsGithub/></a>
            <a href="https://dribbble.com/"><BsDribbble/></a>
        </div>
    )
}

export default HeaderSocial