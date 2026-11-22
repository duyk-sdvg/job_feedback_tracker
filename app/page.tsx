import FilterMenu from "@/components/FilterMenu";
import Header from "@/components/Heading";
import JobGrid from "@/components/JobGrid";
import SearchFilter from "@/components/SearchFilter";

export default function Home() {
  return (
    <div className="">
      <Header />
      <FilterMenu />
      <SearchFilter />
      <JobGrid />
    </div>
  );
}
