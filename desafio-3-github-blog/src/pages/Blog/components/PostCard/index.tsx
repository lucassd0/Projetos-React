import { PostCardContainer } from './styles'
import 'moment/dist/locale/pt-br'
import moment from 'moment'

interface PostCardProps {
  id: number
  title: string
  createdAt: string
  body: string
}

export function PostCard({ id, title, createdAt, body }: PostCardProps) {
  const postUrl = '/post/' + id
  const localTime = moment.utc(createdAt).toDate()

  return (
    <PostCardContainer to={postUrl} title="Post">
      <header>
        <h2>{title}</h2>
        <span>{moment(localTime).fromNow()}</span>
      </header>
      <div>{body}</div>
    </PostCardContainer>
  )
}
