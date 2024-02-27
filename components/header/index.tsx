import Link from 'next/link'

const Header = async () => {
  return (
    <>
      <div className="container lg:mx-0 sticky lg:w-full lg:px-16 top-0 z-50 flex h-16 w-full justify-between bg-white">
        <Link
          href="/"
          className="font-bold text-xl flex flex-col justify-center"
        >
          <span className="text-primary font-bold">Crispy User</span>
        </Link>
      </div>
    </>
  )
}

export default Header
