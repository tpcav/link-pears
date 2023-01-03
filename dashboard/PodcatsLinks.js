const people = [
  {
    name: 'My First Million',
    email: 'leslie.alexander@example.com',
    role: 'Sam Parr & Shaan Puri',
    type: 'Business, Startups, Tech',
    link: 'https://open.spotify.com/show/3mliji9352UAk3XnWElnDV',
    linkName: 'Spotify',
    imageUrl:
      'https://s3.us-west-1.amazonaws.com/redwood-labs/showpage/uploads/images/77a8c506e195400bb335a17755c9c218.jpeg',
  },
  {
    name: 'Waveform',
    email: 'leslie.alexander@example.com',
    role: 'Marques Brownlee & Andrew Manganelli',
    type: 'Tech, YouTube, Internet',
    link: 'https://www.youtube.com/c/Waveform',
    linkName: 'YouTube',
    imageUrl:
      'https://yt3.googleusercontent.com/7WTMzbQbGnHcH0Zf__O0tpko5ZRei2fnUlkR3HZery9CXVIqB5iIdDXX4fVjGwkpPK7MPGUhGQ=s900-c-k-c0x00ffffff-no-rj',
  },
  // More people...
]

export default function Podcast() {
  return (
    <div className="pb-4">
      <h1 className="">Podcasts</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-96 sm:w-96 md:w-full lg:w-full p-4">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
            </div>
            <div className="min-w-0 flex-1">
              <a href={person.link} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="truncate text-sm text-gray-500">{person.role}</p>
                <p className="truncate text-sm text-gray-800">Link:&nbsp;
                  <span className="text-blue-600">{person.linkName}</span>
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}