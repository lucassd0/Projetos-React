import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLinkContainer, PostInfoContainer } from './styles'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import 'moment/dist/locale/pt-br'
import moment from 'moment'

interface PostInfoProps {
  url: string
  title: string
  login: string
  createdAt: string
  comments: number
}

export function PostInfo({
  url,
  title,
  login,
  createdAt,
  comments,
}: PostInfoProps) {
  const localTime = moment.utc(createdAt).toDate()

  return (
    <PostInfoContainer>
      <nav>
        <NavLinkContainer to="/" title="Blog">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLinkContainer>
        <a href={url}>
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1>{title}</h1>
      <footer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {moment(localTime).fromNow()}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </span>
      </footer>
    </PostInfoContainer>
  )
}
