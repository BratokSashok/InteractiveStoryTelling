import { StoryForm } from "@features/auth/ui/StoryForm";
import { StoriesListPage } from "./StorieListPage/StoriesListPage";
import "./index.css";
import "../pages.css";

export const StoriesPage = () => {
    return (
        <div className="container">
            <div className="another_container">
                <h1>Stories</h1>
                <StoryForm />
                <hr />
                <StoriesListPage />
            </div>
        </div>
    );
};