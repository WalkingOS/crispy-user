import Avatar from '@/components/avatar'
import Card from '@/components/card'
import { User } from '@/types/user'
import Link from 'next/link'

export default async function Home() {
  const users: User[] = await fetchUsers()

  return (
    <main className=" h-svh">
      <h1 className="font-bold text-4xl text-center mb-10 text-primary-100">
        All Users
      </h1>

      <section className="-mx-4">
        <ul className="flex flex-col md:flex-row flex-wrap">
          {users.map(({ id, username, company, name }) => (
            <li key={id} className="mb-3 w-full md:w-1/2 lg:w-1/3 px-4">
              <Link href={`/${id}`}>
                <Card className="group hover:bg-primary-50 p-3 flex gap-4">
                  <>
                    <Avatar name={name} />
                    <div className="self-center group-hover:text-white">
                      <h2 className="font-bold">{username}</h2>
                      <span>{company.name}</span>
                    </div>
                  </>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) {
    throw new Error('fetching users data failed...')
  }

  return res.json()
}
