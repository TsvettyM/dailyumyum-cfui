import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import CommonInput from "../common/components/CommonInput";
import CommonTextArea from "../common/components/CommonTextArea";

const AdminFormCreateCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/category/${id}`).then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      });
    }
  }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newValidationErrors = {
      title: "",
      description: "",
    };

    if (title.length > 255) {
      newValidationErrors.title = "Title must be less than 255 characters!";
    }

    if (description.length > 1024) {
      newValidationErrors.description =
        "Description must be less than 1024 characters!";
    }
    console.log(title);

    if (title === "") {
      newValidationErrors.title = "You must create category first!";
    }
    setValidationErrors(newValidationErrors);

    if (newValidationErrors.title || newValidationErrors.description) {
      return;
    }

    if (router.query.id) {
      axios
        .put(`http://localhost:3001/category/${router.query.id}`, {
          title,
          description,
        })
        .then(() => {
          router.push("/admin/category");
        })
        .catch((err) => {
          setError("There was an error updating the category.");
        });
    } else {
      const id = "id" + Math.random().toString(36).substring(2, 9);

      axios
        .post(`http://localhost:3001/category`, {
          id: id,
          title,
          description,
        })
        .then(() => {
          router.push("/admin/category");
        })
        .catch((err) => {
          setError("There was an error updating the category.");
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin__form-create--category flex flex-col relative w-full bg-[#DCECEA] rounded-8 p-5 shadow-[#748D93] shadow-bottom-right"
    >
      <h1 className="font-semibold text-black text-32 text-center mt-2 mb-6">
        {router.query.id ? "Edit your category" : "Let's create your category"}
      </h1>

      <CommonInput
        label="Name:"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        styleMode="black"
        error={validationErrors.title}
        placeholder="Create a category"
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
        {router.query.id ? "Update" : "Create"}
      </button>

      {error && <p className="text-red">{error}</p>}
    </form>
  );
};

export default AdminFormCreateCategory;
