interface BookProps {
  book: {
    id: string;
    title: string;
    author: string;
    read: boolean;
    genre: string;
  };
}

function SingleBook({ book }: BookProps) {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}

export default SingleBook;
