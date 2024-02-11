import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { shortenUrl } from "../services/apiUrl";

export default function InputLink() {
  const { register, handleSubmit } = useForm();
  const { mutate, isLoading, error } = useMutation({
    mutationFn: shortenUrl,
  });

  const onSubmit = (formData) => {
    mutate(formData.url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute left-0 right-0 top-0 mx-6 -translate-y-1/2 space-y-4 rounded-md bg-darkViolet bg-[url('src/assets/images/bg-shorten-mobile.svg')] bg-cover bg-center px-6 py-7"
    >
      <input
        className="w-full rounded-md px-4 py-3"
        placeholder="Shorten a link here.."
        id="url"
        {...register("url")}
      />
      <Button className="w-full rounded-md" disabled={isLoading}>
        {isLoading ? "Shortening..." : "Shorten It!"}
      </Button>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </form>
  );
}
