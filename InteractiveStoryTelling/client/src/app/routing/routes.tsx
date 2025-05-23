import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { HomePage } from "@pages/HomePage/HomePage";
import { LoginPage } from "@pages/login/LoginPage";
// import { NotFoundPage } from "@pages/notFound/NotFoundPage";
// import { RegistrationForm } from "@features/auth/ui/registrationForm";
import { StoriesPage } from "@pages/StoriesPage/StoriesPage";
import { TagPage } from "@pages/TagsPage/TagPage/TagPage";
import { TagsCloudPage } from "@pages/TagsPage/TagsCloud";
import RegistrationPage from "@pages/registration/ui/Registration";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'registration',
          element: <RegistrationPage />,
        },
        {
          path: 'stories',
          element: <StoriesPage />,
        },
        {
          path: 'tag/:id',
          element: <TagPage />
        },
        {
          path: 'tagscloud',
          element: <TagsCloudPage />
        },
        {
            path: '*',
            element: <NotFoundPage />, //страница 404 
        }
      ],
    },
  ]);