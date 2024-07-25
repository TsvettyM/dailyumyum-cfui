import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const AdminFormCreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = "id" + Math.random().toString(36).substring(2, 9);

    axios
      .post("http://localhost:3001/recipes", {
        id: id,
        title,
        category,
        products,
        description,
      })
      .then(() => {
        router.push({ pathname: "/admin/recipes", query: { success: "true" } });
      })
      .catch((err) => {
        setError("Your recipe is not uploaded");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin__form-create--recipe flex flex-col relative w-[500px] bg-[#DCECEA] rounded-8 p-5 shadow-[#748D93] shadow-bottom-right"
    >
      <h1 className="font-semibold text-black text-32 text-center mt-2 mb-6">
        Let's create your recipe
      </h1>

      <label className="mb-8 h-11">
        Title:
        <input
          type="text"
          value={title}
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full resize-none text-14 rounded-8 border border-black bg-transparent p-2 font-medium outline-none mb-4"
        />
      </label>

      <label className="mb-8 h-11">
        Category:
        <input
          type="text"
          value={category}
          placeholder="Enter your category"
          onChange={(e) => setCategory(e.target.value)}
          className="w-full resize-none text-14 rounded-8 border border-black bg-transparent p-2 font-medium outline-none mb-4"
        />
      </label>

      <label className="mb-8 h-11">
        Products:
        <input
          type="text"
          value={products}
          placeholder="Enter your products"
          onChange={(e) => setProducts(e.target.value)}
          className="w-full resize-none text-14 rounded-8 border border-black bg-transparent p-2 font-medium outline-none mb-4"
        />
      </label>

      <label className="mb-8 h-11">
        Description:
        <textarea
          value={description}
          placeholder="Enter your description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full resize-none text-14 rounded-8 border border-black bg-transparent p-2 font-medium outline-none mb-4"
        />
      </label>

      <button
        type="submit"
        className="ml-auto mt-10 px-4 py-2 bg-[#748D93] w-[200px] text-white rounded-8"
      >
        Create
      </button>
    </form>
  );
};

export default AdminFormCreateRecipe;
