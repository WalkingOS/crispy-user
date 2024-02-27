import BusinessCard from '@/components/business-card'
import { User } from '@/types/user'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const PostList = dynamic(() => import('@/components/post-list'))

export default async function User({ params }: { params: { userId: string } }) {
  const user: User = await fetchData(params.userId)

  return (
    <main className="pb-12">
      <h1 className="font-bold text-4xl text-center mb-6 text-primary-100">
        {user.username}
      </h1>
      <Link className="text-lg hover:text-primary" href="/">
        &lt; back
      </Link>
      <section className="mt-5">
        <BusinessCard user={user} />
      </section>

      {user.posts && <PostList posts={user.posts} />}
    </main>
  )
}

const fetchData = async (id: string): Promise<User> => {
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )
  const postsResponse = await fetch(
    `http://jsonplaceholder.typicode.com/posts?userId=${id}`,
  )

  if (!userResponse.ok || !postsResponse.ok) {
    throw new Error('fetching data failed...')
  }

  const user = await userResponse.json()
  const posts = await postsResponse.json()

  return {
    ...user,
    posts,
  }
}
