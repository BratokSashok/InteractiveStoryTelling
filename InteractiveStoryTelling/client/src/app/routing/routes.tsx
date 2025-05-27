import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { HomePage } from "@pages/HomePage/HomePage";
import { LoginPage } from "@pages/login/LoginPage";
// import { NotFoundPage } from "@pages/notFound/NotFoundPage"; //не правильный путь
// import { RegistrationForm } from "@features/auth/ui/registrationForm"; //не правильный путь
import { StoriesPage } from "@pages/StoriesPage/StoriesPage";
import { TagPage } from "@pages/TagsPage/TagPage/TagPage";
import { TagsCloudPage } from "@pages/TagsPage/TagsCloud";
import RegistrationPage from "@pages/registration/ui/Registration";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { StoryPage } from "@pages/StoriesPage/StoryPage/StoryPage";
 
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
        },{
          path: '/stories/:id',
          element: <StoryPage />,
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