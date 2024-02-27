import Avatar from '@/components/avatar'
import Card from '@/components/card'
import Link from 'next/link'

export default async function Loading() {
  return (
    <main className="pb-12">
      <h1 className="font-bold text-4xl text-center mb-6 h-8"></h1>
      <Link href="/">back</Link>
      <section className="mt-5">
        <div className="bg-white p-4 rounded-lg shadow-md w-full h-[315px] animate-pulse">
          <h2 className="mb-8">
            <div className="flex gap-4">
              <Avatar className="text-2xl mr-3" name={''} />
              <span className="text-2xl font-bold self-center"></span>
            </div>
          </h2>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-bold text-2xl mb-6">Posts</h2>
        <ul className="flex flex-col gap-4">
          {Array.from({ length: 10 })?.map((_, i) => (
            <li key={i}>
              <Card className="h-[142px] lg:h-[92px] p-4">
                <></>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
