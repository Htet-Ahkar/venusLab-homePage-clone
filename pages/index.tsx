import type { NextPage } from "next";
import { useEffect, useState } from "react";

// Components
import { Hero, Sections, Services, Loading } from "../components";

// Constants
import { sectionsData } from "../constants/index";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <>
      <main
        className={`flex flex-col items-center justify-start min-h-screen relative
        ${!loading && "z-10"}
        `}
      >
        {/* Loading */}
        {loading && <Loading isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
        {/* Hero */}
        <Hero loading={loading} />
        {/* Sections */}
        {sectionsData.map((section, index) => (
          <Sections
            key={section.title}
            index={index + 1}
            sectionData={section}
          />
        ))}
        {/* Services */}
        <Services />
      </main>
    </>
  );
};

export default Home;
