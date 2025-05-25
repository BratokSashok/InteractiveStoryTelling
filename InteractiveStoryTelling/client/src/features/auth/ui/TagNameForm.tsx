import { useForm } from "react-hook-form";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/Button/Button";
import { useState } from "react";
import './index.css';

interface TagsFormValues {
    name: string;
  }
  

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TagsFormValues>();
  const [loading, setLoading] = useState(false);


  const onSubmit = async () => {
    try {
    //   await tags(data); //добавить
   
    } catch (err) {
      console.error("error:", err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tag-form">
      <div className='input-wrapper'>
        <Input
          placeholder="name"
          className="CLASS_NAME"
          {...register("name", { required: "Name is required" })}
        />
      {errors.name && <p>{errors.name.message}</p>}
      </div>
      
     
      <Button 
        type="submit" 
        disabled={loading}
        className="button"
      >
        {loading ? "Loading..." : "Create"}
      </Button>
    </form>
  );
};