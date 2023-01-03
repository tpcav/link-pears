const people = [
  {
    name: 'ABBATIA',
    email: 'leslie.alexander@example.com',
    role: 'Punk Rap Band',
    link: 'https://linktr.ee/ABBATIA',
    linkName: 'Linktree',
    imageUrl:
      'https://f4.bcbits.com/img/a1803117980_65',
  },
  {
    name: 'Faces',
    email: 'leslie.alexander@example.com',
    role: 'Album, Mac Miller',
    link: 'https://open.spotify.com/album/5SKnXCvB4fcGSZu32o3LRY',
    linkName: 'Spotify',
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273e4251cf5331ad74eaaeca36e',
  },
  // More people...
]

export default function Music() {
  return (
    <div className="pb-2">
      <h1 className="">Music</h1>

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