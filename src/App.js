import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import SigninPage from "./pages/signin";
// import Navbar from "./components/Navbar";
import ImproveSkillsPage from "./pages/improve-skills-page";
import MoreAboutYorubaPage from "./pages/more-about-yoruba-page";
import ProverbsAndWisdom from "./pages/proverbs&wisdom-page";
import BasicPhrasesIPage from "./pages/Lessons/BasicPhrasesI/lesson-three-learn-basic-phrases-i-page";
import BasicPhrasesIIPage from "./pages/Lessons/BasicPhrasesII/basic-phrases-ii-page";
import BasicPhrasesIIIPage from "./pages/lesson-five-learn-basic-phrases-iii-page";
import AdvancedPhrasesIPage from "./pages/lesson-six-learn-advanced-phrases-i-page";
import AdvancedPhrasesIIPage from "./pages/lesson-seven-learn-advanced-phrases-ii-page";

import LearnTheYorubaAlphabetPage from "./pages/Lessons/YorubaAlphabet/learn-the-yoruba-alphabet-page";
import LearnTheYorubaAlphabetQuizPage from "./pages/Lessons/YorubaAlphabet/learn-the-yoruba-alphabet-quiz-page";
import LearningNumbersPage from "./pages/Lessons/Numbers/numbers-and-counting-page";
import BasicPhrasesIQuizPage from "./pages/Lessons/BasicPhrasesI/lesson-three-learn-basic-phrases-i-quiz-page";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      {/* <Sidebar></Sidebar> */}
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/improve-skills" element={<ImproveSkillsPage />} exact />
        <Route
          path="/more-about-yoruba-page"
          element={<MoreAboutYorubaPage />}
          exact
        />
        <Route path="/proverbs&wisdom" element={<ProverbsAndWisdom />} exact />
        <Route
          path="/improve-skills/learn-the-yoruba-alphabet"
          element={<LearnTheYorubaAlphabetPage />}
          exact
        />
        <Route
          path="/improve-skills/learn-the-yoruba-alphabet/quiz"
          element={<LearnTheYorubaAlphabetQuizPage />}
          exact
        />
        <Route
          path="/improve-skills/numbers-and-counting"
          element={<LearningNumbersPage />}
          exact
        />
        <Route
          path="/improve-skills/lesson-three-learn-basic-phrases-i"
          element={<BasicPhrasesIPage />}
          exact
        />
        <Route
          path="/improve-skills/lesson-three-learn-basic-phrases-ii"
          element={<BasicPhrasesIIPage />}
          exact
        />
        <Route
          path="/lesson-five-learn-basic-phrases-iii"
          element={<BasicPhrasesIIIPage />}
          exact
        />
        <Route
          path="/lesson-six-learn-advanced-phrases-i"
          element={<AdvancedPhrasesIPage />}
          exact
        />
        <Route
          path="/lesson-seven-learn-advanced-phrases-ii"
          element={<AdvancedPhrasesIIPage />}
          exact
        />
        <Route
          path="/improve-skills/lesson-three-learn-basic-phrases-i/quiz"
          element={<BasicPhrasesIQuizPage />}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;
