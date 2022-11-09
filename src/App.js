import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./layouts/ProtectedLayout/ProtectedLayout";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import {
  MovieDetailPage,
  MoviesPage,
  MovieTrailerPage,
  NotFoundPage,
  ProfilePage,
  SearchMoviesPage,
  SignInPage,
  SignUpPage,
} from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/auth" element={<PublicLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path="search" element={<SearchMoviesPage />} />
          <Route path=":type/:id" element={<MovieDetailPage />}>
            <Route path="video" element={<MovieTrailerPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
