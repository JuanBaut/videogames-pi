import style from "./Detail.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/getDetail";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <button onClick={() => navigate(`/home`)} className={style.button}>
        Go back
      </button>
      <div className={style.container}>
        <img
          src={detail.background_image}
          alt="videogame.png"
          className={style.image}
        />
        <div>
          <h3>{detail.name}</h3>
          <h5>ID {detail.id}</h5>
          <h5>Rating {detail.rating}</h5>
          <h5>Release Date {detail.released}</h5>
          <h6>{detail.description_raw}</h6>
        </div>
      </div>
    </div>
  );
}
