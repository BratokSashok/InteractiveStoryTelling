import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Story } from '../StoryPage/StoryPage';
import './StoriesListPage.css';

export const StoriesListPage = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch('/api/stories')
    .then(async (res) => {
        const text = await res.text();
        try {
        return JSON.parse(text); 
        } catch {
        console.error('Ответ не JSON:', text);
        throw new Error('Invalid JSON');
        }
    })
    .then(data => setStories(data))
    .catch(err => console.error('Failed to load stories:', err));
  }, []);

  return (
    <div className="another_container all-stories">
      <h1>All Stories</h1>
      <div className="stories-list">
        {stories.map(story => (
          <Link key={story.id} to={`/stories/${story.id}`} className="story-card">
            {story.imageUrl && <img src={story.imageUrl} alt={story.name} />}
            <div className="story-info">
              <h2>{story.name}</h2>
              <p>{story.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
