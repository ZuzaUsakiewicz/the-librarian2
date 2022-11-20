import BooksList from "../components/BooksList";

function Home() {
  return (
    <div>
      <button className="bg-sky-600 text-gray-100 px-4 py-2 rounded">
        add book
      </button>
      <BooksList />
    </div>
  );
}

export default Home;
