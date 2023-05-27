import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Post {
  number: number
  url: string
  title: string
  login: string
  created_at: string
  comments: number
  body: string
}

interface Profile {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  html_url: string
  followers: number
}

interface PostsContextType {
  posts: Post[]
  profile: Profile
  fetchPost: (query: string) => Promise<Post>
  fetchPosts: (query?: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const [profile, setProfile] = useState<Profile>({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    html_url: '',
    followers: 0,
  })

  const fetchProfile = useCallback(async () => {
    const response = await api.get('/users/lucassd0')
    const { avatar_url, name, bio, login, company, followers, html_url } =
      response.data
    setProfile({
      avatar_url,
      name,
      bio,
      login,
      company,
      html_url,
      followers,
    })
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: query
          ? query + 'repo:lucassd0/Projetos-React'
          : 'repo:lucassd0/Projetos-React',
      },
    })

    const { items } = response.data

    const posts = items.map((item: any) => {
      return {
        number: item.number,
        url: item.html_url,
        title: item.title,
        login: item.user.login,
        created_at: item.created_at,
        comments: item.comments,
        body: item.body,
      } as Post
    })

    setPosts(posts)
  }, [])

  const fetchPost = useCallback(async (query: string) => {
    const response = await api.get(
      'repos/lucassd0/Projetos-React/issues/' + query,
    )
    const { number, html_url, title, body, user, created_at, comments } =
      response.data

    return {
      number,
      url: html_url,
      title,
      login: user.login,
      created_at,
      comments,
      body,
    } as Post
  }, [])

  useEffect(() => {
    fetchProfile()
    fetchPosts()
  }, [fetchProfile, fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, profile, fetchPost, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
