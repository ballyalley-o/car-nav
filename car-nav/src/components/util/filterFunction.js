export default function filterFunction(object, searchQuery) {
  object?.filter((car) =>
    car?.name.toLowerCase().includes(searchQuery?.toLowerCase())
  )
  return object
}
