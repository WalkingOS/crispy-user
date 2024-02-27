import PostList from '@/components/post-list'
import { Post } from '@/types/user'

export default async function Posts() {
  const posts: Post[] = await fetchPosts()

  return (
    <main className="pb-12">
      <PostList posts={posts} />
    </main>
  )
}

const fetchPosts = async (): Promise<Post[]> => {
  const postResponse = await fetch(`http://jsonplaceholder.typicode.com/posts`)
  const post = await postResponse.json()

  return post
}
