const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button
        type="button"
        onClick={() => {
          alert(`${title} is a great book for Halloween!!!`)
        }}
      >
        Click Me
      </button>
    </article>
  )
}

export default Book
