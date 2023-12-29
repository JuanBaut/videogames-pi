/* eslint-disable react/prop-types */
import style from './ActivityGrid.module.css';
import Activity from '../Activity/Activity';

function ActivityGrid({ activities }) {
  const activityList = activities;

  return (
    <div className={style.container}>
      {activityList.map((activity) => (
        <Activity
          activity={activity}
          key={activity.id}
        />
      ))}
    </div>
  );
}

export default ActivityGrid;
