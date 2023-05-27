import { useContextSelector } from 'use-context-selector'
import { SearchFormContainer } from './styles'
import { PostsContext } from '../../../../contexts/PostsContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <input type="submit" hidden />
    </SearchFormContainer>
  )
}
