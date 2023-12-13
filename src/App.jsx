import { Routes, Route } from "react-router";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Footer from "./pages/footer/Footer";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date("12-01-2022");
      const currentYear = new Date().getFullYear();
      const startYear = startDate.getFullYear();
      const years = currentYear - startYear;
      setYearsOfExperience(years);
    };

    calculateExperience();

    const intervalId = setInterval(
      calculateExperience,
      365.25 * 24 * 60 * 60 * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header width={width} />
      <Routes>
        <Route
          path="/"
          element={<Home yearsOfExperience={yearsOfExperience} />}
        />
      </Routes>
      <Footer width={width} />
    </>
  );
};

export default App;
