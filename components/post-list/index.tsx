import { Post } from '@/types/user'
import Link from 'next/link'
import Card from '../card'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="mt-12">
      <h2 className="font-bold text-2xl mb-6 text-primary-100">Posts</h2>
      <ul className="flex flex-col gap-4">
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <Card className="p-4 group hover:bg-primary-50 ">
                <>
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-white">
                    {title}
                  </h3>
                  <p className="group-hover:text-white">{body}</p>
                </>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default PostList
