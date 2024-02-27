const Avatar = ({
  name,
  className = '',
}: {
  name: string
  className?: string
}) => {
  return (
    <span
      className={`${className} self-center p-2 text-white text-center min-w-10 rounded-full bg-primary`}
    >
      {!!name ? (
        extractCapitals(name).slice(0, 2)
      ) : (
        <span className="opacity-0">FO</span>
      )}
    </span>
  )
}

export default Avatar

function extractCapitals(name: string): string {
  const capitals = name.match(/[A-Z]/g) || []
  return capitals.join('')
}
