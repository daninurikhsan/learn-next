import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?:string }>
}) {
  
  const query = (await searchParams).query
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dani" },
      _id: 1,
      description: "This is a description",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s",
      category: "Robots",
      title: "We Robots"
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dani" },
      _id: 2,
      description: "This is a description",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s",
      category: "Robots",
      title: "We Robots"
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dani" },
      _id: 3,
      description: "This is a description",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s",
      category: "Robots",
      title: "We Robots"
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dani" },
      _id: 4,
      description: "This is a description",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s",
      category: "Robots",
      title: "We Robots"
    },
  ]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br/> Connect with Entrepreneurs </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupCardType, index: number) => (
                <StartupCard key={post?._id} post={post}/>
              ))
            ):(
              <p className="no-results">No startups found</p>
            )}
        </ul>
      </section>

    </>
  );
}
