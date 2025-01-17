import s from './ProjectsList.module.css';

import ProjectsListItem from '../ProjectsListItem';

export default function ProjectsList({ projects }) {
  const cropDescription = description => {
    if (description.length > 42) {
      const croppedDescription = `${description.substr(0, 38)}...`;
      return croppedDescription;
    }
    return description;
  };

  return (
    <ul className={s.list}>
      {projects.map(({ id, title, description }) => (
        <ProjectsListItem
          key={id}
          title={title}
          description={cropDescription(description)}
        />
      ))}
    </ul>
  );
}
