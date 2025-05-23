import { useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';
// import { Button } from '@shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@shared/ui/Button/Button';

interface SignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormValues) => {
    //Проверка на совпадение паролей
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || 'Registration failed');
        return;
      }

      const resData = await res.json();
      alert(resData.message);
      navigate('/');
    } catch (err) {
      console.error('Registration failed', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="regForm">
      <div>
        <Input
          {...register('username', { required: 'Username is required' })}
          placeholder="Username"
          className="regForm_input"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <Input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          className="regForm_input"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <Input
          type="password"
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Password must be at least 4 characters',
            }
          })}
          placeholder="Password"
          className="regForm_input"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <Input
          type="password"
          {...register('confirmPassword', { 
            required: 'Confirm Password is required',
            validate: (value) => 
              value === watch('password') || 'Passwords do not match',
          })}
          className="regForm_input"
          placeholder="Repeat your password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
};