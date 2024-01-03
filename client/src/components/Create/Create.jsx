import { useNavigate } from "react-router-dom";
import style from "./Create.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVideogame } from "../../redux/actions/createVideogame";

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    platforms: "",
    background_image: "",
    released: "",
    genresIds: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedFormData = {
      name: formData.name,
      description: formData.description,
      platforms: formData.platforms
        .split(",")
        .map((platform) => platform.trim()),
      background_image: formData.background_image,
      released: formData.released,
      rating: formData.rating,
      genresIds: formData.genresIds.split(",").map((id) => id.trim()),
    };

    dispatch(createVideogame(formattedFormData));
    console.log(formattedFormData);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.bar}>
          <h4>Create videogame</h4>
          <button onClick={() => navigate(`/home`)}>Home page</button>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            name="name"
            className={style.input}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            name="description"
            className={style.input}
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            name="platforms"
            className={style.input}
            placeholder="Platforms"
            onChange={handleChange}
          />
          <input
            name="background_image"
            className={style.input}
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            name="released"
            className={style.input}
            placeholder="Release Date"
            onChange={handleChange}
            type="date"
          />
          <input
            name="rating"
            className={style.input}
            placeholder="Rating"
            onChange={handleChange}
          />
          <input
            name="genresIds"
            className={style.input}
            placeholder="Genres"
            onChange={handleChange}
          />
          <button type="submit" className={style.input}>
            Create!
          </button>
        </form>
      </div>
    </>
  );
}
