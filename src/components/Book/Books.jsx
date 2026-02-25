export default function Books({books}) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.data["Title"]}</h3>
          <p>{book.data["Author(s)"]}</p>
          <img src={book.data.coverImage} alt={book.data["Title"]} />
        </div>
      ))}
    </div>
  )
}