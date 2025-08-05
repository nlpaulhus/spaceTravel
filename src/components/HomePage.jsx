import { PageFunction } from "./PageFunction";

const HomePage = () => {
  const pageFunctions = [
    { title: "Journey into the Future", description: "blah blah" },
    { title: "From Neglect to Innovation", description: "blah blah" },
    {
      title: "Enter Space Travel: Where Dreams Take Flight",
      description: "blah blah",
    },
    { title: "Engineer, Explorer, Leader", description: "blah blah" },
    { title: "A Universe of Possibilities Awaits", description: "blah blah" },
  ];
  return (
    <>
      <h1>Space Travel: Expanding Horizons Beyond Earth</h1>
      {pageFunctions.map((pageFunction) => (
        <PageFunction
          title={pageFunction.title}
          description={pageFunction.description}
        />
      ))}
    </>
  );
};

export default HomePage;
