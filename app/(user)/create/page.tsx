"use client";
import convertToBase64 from "@/app/utils/convertToBase64";
import BackBtn from "@/mini-components/BackBtn";
import Input from "@/mini-components/Input";
import Tags from "@/mini-components/Tags";
import { useContextProvider } from "@/utils/context/authContext";
import { useIceCreamContext } from "@/utils/context/iceCreamContext";
import { iceCreamSchema } from "@/utils/functions/schema";
import { iceCreamInterface, UserInterface } from "@/utils/functions/types";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { InferType } from "yup";

export type IceCreamFormType = InferType<typeof iceCreamSchema>;

function CreateRecipesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesList, setImagesList] = useState([{ url: "" }]);
  const [files, setFiles] = useState<FileList | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<iceCreamInterface>();
  const { values, handleTags, setValues } = useIceCreamContext();
  const navigator = useRouter();
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagesList([]);
    const input = e.target;
    const files = input.files;
    if (files) {
      if (files.length > 4) {
        toast.error("Images should not be more than 5");
        return;
      }
      if (files.length < 2) {
        toast.error("Images should  be more than 1");
        return;
      }
      setFiles(files);

      for (let i = 0; i < files.length; i++) {
        convertToBase64(files[i])
          .then((result) => {
            setImagesList((old: any) => {
              return [...old, { url: result }];
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };
  const formSubmitHandler: SubmitHandler<iceCreamInterface> = async (data) => {
    setIsLoading(true);
    try {
      console.log("====================================");
      console.log(data, errors);
      console.log("====================================");
      const response = await axios.post(
        "/api/products/ice-cream/create",
        {
          name: data.name,
          desc: data.desc,
          images: imagesList,
          flavors: values.flavors,
          ingredients: values.ingredients,
          price: data.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
        navigator.refresh();
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      if (axios.isAxiosError(error)) {
        toast.warn(String(error));
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let user: string | UserInterface | null = window.localStorage.getItem(
      "SCOOPIES_CURRENT_USER"
    );
    user = user ? JSON.parse(user) : null;
    if ((user as UserInterface)?.role.toLowerCase().trim() !== "admin") {
      toast.warn("Unauthorized to access this route");
      navigator.push("/");
    }
  }, []);

  return (
    <section className='max-w-xl   mx-auto  py-8  l{ useState }g:px-0 md:w-4/5 sm:w-9/12'>
      <BackBtn />
      <h3 className='text-3xl font-semibold capitalize text-center my-4 text-zinc-800'>
        Create a New Recipe
      </h3>
      <div className='flex items-center gap-3 flex-wrap  justify-center my-10'>
        {imagesList.length >= 1 &&
          imagesList.map((image, index) => (
            <div
              key={index}
              className=' w-28  aspect-square  flex items-center justify-center rounded'
            >
              <img
                src={`${image.url}` || "/"}
                alt=''
                className='object-cover h-full w-full'
              />
            </div>
          ))}
      </div>
      <form
        onSubmit={handleSubmit(formSubmitHandler, (errors) => {
          console.log("====================================");
          console.log(errors);
          console.log("====================================");
        })}
      >
        <div className='block'>
          <label htmlFor='file' className='text-zinc-800 mr-5  '>
            Ice Cream Images:{" "}
          </label>

          <Input
            placeholder='Enter Ice cream images'
            multiple={true}
            accept='.jpeg,.jpg,.png'
            type='file'
            onChange={handleImageUpload}
          />
        </div>

        <div className='mt-7  relative'>
          <Input
            type='text'
            placeholder="Ice Cream's Name"
            required
            {...register("name")}
            label='Enter Ice Cream name'
            error={errors?.name?.message}
          />
          <Input
            type='text'
            required
            textarea={true}
            placeholder='Description'
            label='Enter a short description'
            error={errors?.desc?.message}
            {...register("desc")}
          />
          <Input
            type='number'
            required
            placeholder='Price'
            {...register("price")}
            label='Enter a price'
            error={errors?.price?.message}
          />
          <div>
            <Tags items={values.flavors} type='flavors' />

            <Input
              type='text'
              placeholder='Flavors'
              onChange={(e) => {
                handleTags({ type: "flavors", value: e.target.value });
                if (e.target.value.includes(",")) {
                  e.target.value = "";
                }
              }}
            />
            <h3 className='mt-2 text-xs opacity-90 text-zinc-800 '>
              Add a comma at the end of each item e.g meat,
            </h3>
          </div>
          <div>
            <Tags items={values.ingredients} type='ingredients' />
            <Input
              type='text'
              name='ingredients'
              placeholder='Ingredients*'
              onChange={(e) => {
                handleTags({ type: "ingredients", value: e.target.value });
                if (e.target.value.includes(",")) {
                  e.target.value = "";
                }
              }}
            />
            <h3 className='mt-2 text-xs opacity-90 text-zinc-800 '>
              Add a comma at the end of each item e.g meat,
            </h3>
          </div>
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className={
            " btn cursor-pointer capitalize border-2 py-2 px-14  rounded  mx-auto flex my-12 text-pink-900 border-pink-900"
          }
        >
          {isLoading ? "Creating..." : "Create"}
          {/* {recipeToEdit?.isEditing ? "Save Recipe" : "Create Recipe"} */}
        </button>
      </form>
    </section>
  );
}
export default CreateRecipesPage;
