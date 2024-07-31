import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import CommonInput from "../common/components/CommonInput";
import CommonTextArea from "../common/components/CommonTextArea";
import CommonInputSelect from "../common/components/CommonInputSelect";
import { ICategoryListItem } from "../common/components/CommonHeader";

const AdminFormCreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    products: "",
    category: "",
    description: "",
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios.get(`http://localhost:3001/category`).then((res) => {
      const list = (res.data as ICategoryListItem[]).map((item) => item.title);
      setCategoryList(list);
    });
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
        setTitle(res.data.title);
        setCategory(res.data.category);
        setProducts(res.data.products);
        setDescription(res.data.description);
      });
    }
  }, [id]);

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

    console.log(category);

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

    if (router.query.id) {
      axios
        .put(`http://localhost:3001/recipes/${router.query.id}`, {
          title,
          category,
          products,
          description,
        })
        .then(() => {
          router.push("/admin/recipes");
        })
        .catch((err) => {
          setError("There was an error updating the recipe.");
        });
    } else {
      const id = "id" + Math.random().toString(36).substring(2, 9);

      axios
        .post(`http://localhost:3001/recipes/`, {
          id: id,
          title,
          category,
          products,
          description,
        })
        .then(() => {
          router.push("/admin/recipes");
        })
        .catch((err) => {
          setError("There was an error updating the recipe.");
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin__form-create--recipe flex flex-col relative w-[500px] bg-[#DCECEA] rounded-8 p-5 shadow-[#748D93] shadow-bottom-right"
    >
      <h1 className="font-semibold text-black text-32 text-center mt-2 mb-6">
        {router.query.id ? "Edit your recipe" : "Let's create your recipe"}
      </h1>

      <CommonInput
        label="Name:"
        type="text"
        styleMode="black"
        value={title}
        error={validationErrors.title}
        placeholder="Enter your name"
        onChange={(e) => setTitle(e.target.value)}
        className="mb-6"
        required
      />

      <CommonInputSelect
        data={categoryList}
        setItem={setCategory}
        item={category}
        error={validationErrors.category}
        label="Category:"
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
        required
      />

      <CommonTextArea
        styleMode="black"
        label="Description:"
        error={validationErrors.description}
        value={description}
        placeholder="Enter your description"
        onChange={(e) => setDescription(e.target.value)}
        className="mb-6"
        required
      />

      <button
        type="submit"
        className="ml-auto mt-10 px-4 py-2 bg-[#748D93] w-[200px] text-white rounded-8"
      >
        {router.query.id ? "Update" : "Create"}
      </button>

      {error && <p className="text-red">{error}</p>}
    </form>
  );
};

export default AdminFormCreateRecipe;
