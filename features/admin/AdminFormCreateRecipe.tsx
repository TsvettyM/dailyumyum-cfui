import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import CommonInput from "../common/components/CommonInput";
import CommonTextArea from "../common/components/CommonTextArea";

const AdminFormCreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    products: "",
    category: "",
    description: "",
  });
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newValidationErrors = {
      title: "",
      products: "",
      category: "",
      description: "",
    };

    if (title.length > 255) {
      newValidationErrors.title = "Title must be less than 255 characters!";
    }
    if (products.length > 255) {
      newValidationErrors.products =
        "Products must be less than 255 characters!";
    }
    if (description.length > 1024) {
      newValidationErrors.description =
        "Description must be less than 1024 characters!";
    }
    if (category === "") {
      newValidationErrors.category = "You must choose category first!";
    }

    setValidationErrors(newValidationErrors);

    if (
      newValidationErrors.title ||
      newValidationErrors.products ||
      newValidationErrors.category ||
      newValidationErrors.description
    ) {
      return;
    }

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
      <CommonInput
        label="Title:"
        type="text"
        styleMode="black"
        value={title}
        error={validationErrors.title}
        placeholder="Enter your title"
        onChange={(e) => setTitle(e.target.value)}
        className="mb-6"
      />
      <CommonInput
        label="Category:"
        type="text"
        styleMode="black"
        value={category}
        error={validationErrors.category}
        placeholder="Enter your category"
        onChange={(e) => setCategory(e.target.value)}
        className="mb-6"
      />
      <CommonInput
        label="Products:"
        type="text"
        styleMode="black"
        value={products}
        error={validationErrors.products}
        placeholder="Enter your products"
        onChange={(e) => setProducts(e.target.value)}
        className="mb-6"
      />

      <CommonTextArea
        styleMode="black"
        label="Description:"
        error={validationErrors.description}
        value={description}
        placeholder="Enter your description"
        onChange={(e) => setDescription(e.target.value)}
        className="mb-6"
      />

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
