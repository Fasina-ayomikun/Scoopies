import CartFilled from "@/components/CartFilled";
import Navbar from "@/components/Navbar";
import SingleRecipeDetails from "@/components/SingleRecipeDetails";
import BackBtn from "@/mini-components/BackBtn";
import CartItem from "@/mini-components/CartItem";
import Subheader from "@/mini-components/Subheader";

const SingleRecipe = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <section>
      <Navbar />
      <BackBtn />
      <SingleRecipeDetails id={id} />
    </section>
  );
};

export default SingleRecipe;
