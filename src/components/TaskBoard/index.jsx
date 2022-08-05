/* eslint-disable react/no-array-index-key */
import CardList from "../CardList";
import LoaderTaskBoard from "../LoaderTaskBoard";

export default function TaskBoard({ renderTasks }) {
  const loading = true;
  const error = false;

  if (loading) return LoaderTaskBoard();
  if (error) return <div>No se pudieron recuperar la notas</div>;
  return (
    <div className="w-full gap-2 justify-between xl:flex overflow-y-auto">
      <CardList
        title="Nuevas"
        tasksList={renderTasks[0]}
        classList="flex-1 mb-2"
      />
      <CardList
        title="En proceso"
        tasksList={renderTasks[1]}
        classList="flex-1 mb-2"
      />
      <CardList
        title="Finalizadas"
        tasksList={renderTasks[2]}
        classList="flex-1 mb-2"
      />
    </div>
  );
}
