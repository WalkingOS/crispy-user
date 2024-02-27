const Card = ({
  children,
  className = '',
}: {
  children: JSX.Element

  className?: string
}) => (
  <div className={`${className} p-3 bg-white rounded-lg shadow-md`}>
    {children}
  </div>
)

export default Card
