import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//components
import OnBoardingScreen from "./components/onBoarding/onboarding";

export const route = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<OnBoardingScreen />} />)
);
