import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("kelipatan 10!");
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
        <div className="font-bold text-lg">Ziyad</div>
        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Counter</h1>
          <p className="text-xl">{count}</p>
          <div className="flex justify-center gap-4 mt-3">
            <button onClick={() => setCount(count + 1)} className="bg-green-500 px-4 py-2 text-white rounded">+</button>
            <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-2 text-white rounded">-</button>
            <button onClick={() => setCount(0)} className="bg-gray-500 px-4 py-2 text-white rounded">reset</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.results.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} className="w-full h-40 object-cover rounded" />
              <h2 className="font-bold mt-3">{item.title}</h2>
              <p className="text-sm mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;