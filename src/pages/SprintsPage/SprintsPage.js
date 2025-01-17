import SprintList from '../../components/SprintsList';
import AddIconButton from '../../components/AddIconButton';
import СhangeButton from '../../components/СhangeButton';
import { ReactComponent as AddIcon } from '../../images/add.svg';
import '../../styles/base.css';
import styles from './Sprints.module.css';
const projects = [
  {
    id: '1asdfg',
    title: 'string1',
    startDate: '24 June',
    duration: 33,
  },
  {
    id: '1sdfghj',
    title: 'string2',
    startDate: '24 June',
    duration: 4,
  },
  {
    id: '1dfghvbm',
    title: 'string3',
    startDate: '24 June',
    duration: 5,
  },
  {
    id: 'fgfgggzs',
    title: 'string4',
    startDate: '24 June',
    duration: 5,
  },
];
const SprintsPage = () => {
  return (
    <div className={styles.sprints}>
      {/*<Sidebars></Sidebars>*/}
      <div className={styles.title}>
        <h1 className={styles.project_title}> Project1</h1>
        <СhangeButton
          type="button"
          // onClick={}
          aria-label="Сhange"
        />
      </div>
      <p className={styles.project_desc}>
        Short description of the project, if it exist, it is posted here. The
        width of the text block
      </p>
      <h3
        className={styles.subject}
        //onClick={}
      >
        Add people
      </h3>

      <AddIconButton
        type="button"
        // onClick={}
        aria-label="add-sprint"
      >
        <AddIcon width="44" height="44" fill="#fff" />
      </AddIconButton>

      {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}

      <SprintList sprints={projects} />
    </div>
  );
};
export default SprintsPage;
