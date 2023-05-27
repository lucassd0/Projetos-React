import { useParams } from 'react-router-dom'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'
import { useContextSelector } from 'use-context-selector'
import { Post, PostsContext } from '../../contexts/PostsContext'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function SinglePost() {
  const [post, setPost] = useState<Post>({
    number: 0,
    url: '',
    title: '',
    login: '',
    created_at: '',
    comments: 0,
    body: '',
  })

  const fetchPost = useContextSelector(PostsContext, (context) => {
    return context.fetchPost
  })

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchPost(id).then((result) => {
        setPost(result)
      })
    }
  }, [fetchPost, id])

  return (
    <PostContainer>
      <PostInfo
        url={post.url}
        title={post.title}
        login={post.login}
        createdAt={post.created_at}
        comments={post.comments}
      />

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
