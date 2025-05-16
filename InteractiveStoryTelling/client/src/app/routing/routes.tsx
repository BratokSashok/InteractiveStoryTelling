import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
// import { HomePage } from "@pages/home/HomePage";
import { HomePage } from "@pages/HomePage/HomePage";
import { LoginPage } from "@pages/login/ui/LoginPage";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import { RegistrationForm } from "@features/auth/ui/registrationForm";
import { StoriesPage } from "@pages/StoriesPage/StoriesPage";

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
          element: <RegistrationForm />,
        },
        {
          path: 'stories',
          element: <StoriesPage />,
        },
        {
            path: '*',
            element: <NotFoundPage />, //страница 404 
        }
      ],
    },
  ]);