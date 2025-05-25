import { StoryForm } from "@features/auth/ui/StoryForm";
import "./index.css";

export const StoriesPage = () => {
    return (
        <div className="Stories_container">
            <h1>Stories</h1>
            <StoryForm />
        </div>
    );
};