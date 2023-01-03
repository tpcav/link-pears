const people = [
  {
    name: 'Brendan Lowry',
    email: 'leslie.alexander@example.com',
    role: 'Artist, Entreprenuer',
    link: 'https://www.instagram.com/brendanlowry/',
    linkName: 'Instagram',
    imageUrl:
      'https://media.licdn.com/dms/image/C4E03AQGst-KjYLfugw/profile-displayphoto-shrink_400_400/0/1550089061555?e=1678320000&v=beta&t=fL-qCpaIzvnTlhYkh_2MY5Afg9LHj4Qjw7KY98rggxU',
  },
  {
    name: 'Zach Gage',
    email: 'leslie.alexander@example.com',
    role: 'Conceptual Artist, Indie Game Developer',
    link: 'http://www.stfj.net/index2.php',
    linkName: 'Personal Website',
    imageUrl:
      'https://149362454.v2.pressablecdn.com/wp-content/uploads/2020/04/DaveM22_DaveM22-R1-E005-copy.jpg',
  },
  // More people...
]

export default function People() {
  return (
    <div className="pb-4">
      <h1 className="px-4">People</h1>

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