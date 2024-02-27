import { User } from '@/types/user'

export default async function Post({ params }: { params: { postId: string } }) {
  const post: any = await fetchPost(params.postId)

  return (
    <main className="pb-12">
      <h1>
        <span className="font-bold">Title: </span>
        {post.title}
      </h1>
    </main>
  )
}

const fetchPost = async (id: string): Promise<User> => {
  const postResponse = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${id}`,
  )
  const post = await postResponse.json()

  return post
}
