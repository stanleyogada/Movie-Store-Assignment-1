import { CTAction, Footer, Header, ItemsCard } from "../components";
import FormInput from "../components/FormInput";
import { BsSearch } from "react-icons/bs";
import useSearch from "../hooks/useSearch";

function Search() {
  const { register, handleSubmit, isSubmitting, query, results } = useSearch();

  return (
    <div className=" ">
      <Header />

      <main
        className={`container mx-auto px-4 pb-10 md:pb-20 md:px-8 lg:px-20 min-h-[50vh]`}
      >
        <form
          className="my-10 md:my-0 p-3 flex flex-col gap-y-4 w-[95vw] mx-auto md:w-9/12 "
          onSubmit={handleSubmit()}
        >
          <FormInput
            placeholder="Search for movies"
            {...register("query", { required: "Search query is required" })}
          />

          <button
            type="submit"
            className="bg-[#BE123C] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <BsSearch size={20} />
            &nbsp; Search
          </button>
        </form>

        {isSubmitting && (
          <div className="mt-5 md:mt-8 p-2 px-6 md:px-12">
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#BE123C]"></div>
            </div>
          </div>
        )}

        {results.data && (
          <>
            <h2 className="text-2xl text-center my-5 text-white">
              Search results for &quot;{query}&quot;
            </h2>

            <p className="text-xl text-center mb-5 text-white">
              Found <b>{results.data.length}</b> results
            </p>
          </>
        )}
        <ItemsCard listing={results} />
      </main>

      <CTAction />
      <Footer />
      <br />
    </div>
  );
}

export default Search;
