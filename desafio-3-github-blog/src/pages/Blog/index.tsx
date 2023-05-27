import { useContextSelector } from 'use-context-selector'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostsContainer, PostsList } from './styles'
import { PostsContext } from '../../contexts/PostsContext'

export function Blog() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <BlogContainer>
      <Profile />

      <PostsContainer>
        <header>
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </header>

        <SearchForm />

        <PostsList>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.number}
                id={post.number}
                title={post.title}
                createdAt={post.created_at}
                body={post.body}
              />
            )
          })}
        </PostsList>
      </PostsContainer>
    </BlogContainer>
  )
}
