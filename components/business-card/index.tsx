import { User } from '@/types/user'
import Avatar from '../avatar'
import Card from '../card'

const BusinessCard = ({ user }: { user: User }) => {
  const { name, company, address, email, website, phone } = user
  return (
    <Card className="p-8">
      <>
        <h2 className="mb-8">
          <div className="flex gap-4">
            <Avatar className="text-2xl mr-3" name={name} />
            <span className="text-2xl font-bold self-center">{name}</span>
          </div>
        </h2>

        <div className="mb-3">
          <h3 className="text-xl block font-bold">{company.name}</h3>
          <p>{company.catchPhrase}</p>
        </div>

        <div>
          <p>{address.street}</p>
          <p>
            {address.city} - {address.zipcode}
          </p>
        </div>

        <hr className="my-4"></hr>

        <div className="flex gap-4 justify-center">
          <a
            className="hover:text-primary"
            href={`mailto:${email}`}
            type="email"
          >
            Email us
          </a>
          <a
            className="hover:text-primary"
            href={`//${website}`}
            target="_blank"
          >
            Our Website
          </a>
          <a className="hover:text-primary" href={`tel:${phone}`}>
            Phone us
          </a>
        </div>
        <hr className="my-4"></hr>
      </>
    </Card>
  )
}

export default BusinessCard
