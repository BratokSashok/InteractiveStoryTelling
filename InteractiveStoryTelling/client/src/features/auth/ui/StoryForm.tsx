import { useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button/Button';
import { Textarea } from '@shared/ui/Textarea'; // Assuming you have a Textarea component
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface StoryFormValues {
  title: string;
  content: string;
  category?: string;
  tags?: string;
  imageUrl?: string;
}

export const StoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoryFormValues>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: StoryFormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || 'Failed to create story');
        return;
      }

      const resData = await res.json();
      alert('Story created successfully!');
      navigate(`/stories/${resData.id}`); // Redirect to the story page
    } catch (err) {
      console.error('Story creation failed', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl mx-auto">
      <div>
        <label>Title*</label>
        <Input
          {...register('title', { required: 'Title is required' })}
          placeholder="Enter story title"
          className="w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label>Content*</label>
        <Textarea
          {...register('content', { 
            required: 'Content is required',
            minLength: {
              value: 100,
              message: 'Content should be at least 100 characters'
            }
          })}
          placeholder="Tell your story..."
          rows={10}
          className="w-full"
        />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      </div>

      <div>
        <label>Category</label>
        <Input
          {...register('category')}
          placeholder="e.g. Fantasy, Adventure"
          className="w-full"
        />
      </div>

      <div>
        <label>Tags (comma separated)</label>
        <Input
          {...register('tags')}
          placeholder="e.g. magic, dragons, quest"
          className="w-full"
        />
      </div>

      <div>
        <label>Image URL</label>
        <Input
          {...register('imageUrl')}
          placeholder="https://example.com/image.jpg"
          className="w-full"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={loading}
      >
        {loading ? 'Publishing...' : 'Publish Story'}
      </Button>
    </form>
  );
};