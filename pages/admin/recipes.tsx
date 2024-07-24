import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IRecipe {
  id: number;
  title: string;
  category: string;
  products: string;
  description: string;
}

const AdminRecipesPage = () => {
  const [data, setData] = useState<IRecipe[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="admin__page flex h-full">
      <nav className="bg-gray h-full w-[250px]">Test</nav>
      <div className="mx-20 w-full">
        <div className="grid grid-cols-6">
          <p>Id</p>
          <p>Title</p>
          <p>Category</p>
          <p>Products</p>
          <p>Description</p>
          <p>Action</p>
        </div>
        <ul>
          {data.map((item) => (
            <div key={item.id} className="grid grid-cols-6">
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.category}</p>
              <p>{item.products}</p>
              <p>{item.description}</p>
              <div>
                <Link href="/">Edit</Link>
                <button>x</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminRecipesPage;
