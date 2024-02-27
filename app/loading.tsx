import Avatar from '@/components/avatar'
import Card from '@/components/card'

export default function Loading() {
  return (
    <>
      <h1 className="font-bold text-4xl text-center mb-10">All Users</h1>

      <section className="-mx-4">
        <ul className="flex flex-col md:flex-row flex-wrap">
          {Array.from({ length: 10 })?.map((_, i) => (
            <li key={i} className="mb-3 w-full md:w-1/2 lg:w-1/3 px-4">
              <>
                <Card className="min-h-[47px] animate-pulse flex gap-4">
                  <>
                    <Avatar name="" />
                    <div className="self-center">
                      <h2 className="font-bold"></h2>
                      <span></span>
                    </div>
                  </>
                </Card>
              </>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
