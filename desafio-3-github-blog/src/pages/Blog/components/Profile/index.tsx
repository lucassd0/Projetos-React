import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'

export function Profile() {
  const profile = useContextSelector(PostsContext, (context) => {
    return context.profile
  })

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="" />
      <aside>
        <header>
          <h1>{profile.name}</h1>
          <a href={profile.html_url}>
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{profile.bio}</p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {profile.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} seguidores
          </span>
        </footer>
      </aside>
    </ProfileContainer>
  )
}
