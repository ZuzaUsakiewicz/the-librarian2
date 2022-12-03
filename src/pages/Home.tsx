import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import SingleBook from "../components/SingleBook";

interface Book {
  id: string;
  title: string;
  author: string;
  read: boolean;
  genre: string;
}

function Home() {
  const [books, setBooks] = useState<Array<Book> | null>(null);

  useEffect(() => {
    const ref = collection(db, "books");
    getDocs(ref).then((snapshot) => {
      let results: any[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setBooks(results);
    });
  }, []);

  return (
    <div>
      <button className="bg-sky-600 text-gray-100 px-4 py-2 rounded">
        add book
      </button>
      {books ? (
        books.map((book, index) => <SingleBook book={book} key={index} />)
      ) : (
        <div>
          <h2>loading...</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
