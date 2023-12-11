import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/Home/Home';
import AboutPermanent from './pages/Permanent/Permanent';
import Trainings from './pages/TrainingsPage/Trainings';
import StorePage from './pages/Shop/Shop';
import HalfPage from './pages/HalfPage/HalfPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route
          path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/permanent" element={<AboutPermanent />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/store' element={<StorePage/> } />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;


// "dependencies": {
//     "@emotion/react": "^11.11.1",
//     "@emotion/styled": "^11.11.0",
//     "@vitejs/plugin-react-swc": "^3.3.2",
//     "body-scroll-lock": "^4.0.0-beta.0",
//     "formik": "^2.4.5",
//     "nanoid": "^5.0.2",
//     "react": "^18.2.0",
//     "react-alice-carousel": "^2.8.0",
//     "react-dom": "^18.2.0",
//     "react-image-gallery": "^1.3.0",
//     "react-router-dom": "^6.15.0",
//     "react-select": "^5.8.0",
//     "simplelightbox": "^2.14.2",
//     "styled-components": "^6.0.7",
//     "vite-plugin-svgr": "^3.2.0",
//     "yup": "^1.3.2"
//   },