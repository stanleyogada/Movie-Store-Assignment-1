import { CTAction, Footer, Header, ItemsCard } from "../components";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import movies from "../services/core/movies";
import useFetchData from "../hooks/useFetchData";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

const useSearch = () => {
  const {
    register,
    getValues,
    handleSubmit: _handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data: results, handleFetchData: handleSearch } = useFetchData(() =>
    movies.searchMoviesByTitle(getValues("query"))
  );

  useEffect(() => {
    if (errors.query) {
      toast.error(errors.query.message);
    }
  }, [Object.keys(errors).length]);

  useEffect(() => {
    if (results.error) {
      toast.error(results.error);
    }
  }, [results.error]);

  const handleSubmit = () =>
    _handleSubmit(() => {
      handleSearch();
    });

  return {
    isSubmitting,
    register,
    handleSubmit,
    query: getValues("query"),
    results,
  };
};

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
