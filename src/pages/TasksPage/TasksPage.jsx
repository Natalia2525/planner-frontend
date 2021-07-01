import React from 'react';
import st from './TasksPage.module.css';
import tasks from '../../data/tasks.json';
import TasksList from '../../components/TasksList';
import SprintHeader from '../../components/SprintHeader';
import ChangeButton from '../../components/СhangeButton/ChangeButton';

import AddButton from '../../components/AddButton';

import Media from 'react-media';

export default function TasksPage() {
  return (
    <>
      <div className={st.date}>
        <span className={st.date_left}></span>
        <p className={st.date_sprint}>
          1/
          <span>10 </span>
          <span className={st.date_right}> </span>
          <span>08.08.2020</span>
        </p>
      </div>
      <div className={st.header}>
        <div className={st.title_wrapper}>
          <h1 className={st.title}>Sprint 1</h1>
          {/* <button className={st.button_edit}></button> */}
          <ChangeButton />
        </div>
        <div className={st.button_wrapper}>
          <AddButton className={st.button_add} />
          <Media queries={{ big: { minWidth: 1280 } }}>
            {matches =>
              matches.big ? (
                <p className={st.name_button}>Створити задачу</p>
              ) : (
                ' '
              )
            }
          </Media>
        </div>
      </div>
      <SprintHeader />
      <TasksList tasks={tasks} />
    </>
  );
}