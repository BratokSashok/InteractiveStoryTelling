import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './StoryPage.css';

export interface Story {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  category?: string;
  tags?: string;
}

export const StoryPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState<Story | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/stories/${id}`)
      .then(res => res.json())
      .then(data => setStory(data))
      .catch(err => console.error('Error loading story:', err));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <div className="story-page">
      <h1>{story.name}</h1>
      {story.imageUrl && <img src={story.imageUrl} alt={story.name} style={{ maxWidth: '100%' }} />}
      <p><strong>Category:</strong> {story.category || '—'}</p>
      <p><strong>Tags:</strong> {story.tags || '—'}</p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{story.description}</p>
      <button onClick={() => navigate('/stories')} className="back-button">
        ← To stories list
      </button>
    </div>
  );
};
