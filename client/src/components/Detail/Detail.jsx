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
        <div>
          <h3>{detail.name}</h3>
          <h5>
            ID {detail.id} - Rating {detail.rating} - Release Date{" "}
            {detail.released}
          </h5>
          <img
            src={detail.background_image}
            alt="videogame.png"
            className={style.image}
          />
        </div>
      </div>

      <p className={style.description}>{detail.description_raw}</p>
    </div>
  );
}
