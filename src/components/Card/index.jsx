import DeleteButton from "../DeleteButton";

export default function Card({
  data,
  id,
  title,
  date,
  author,
  importance,
  status,
  desc,
  handleDelete,
  handleEditStatus,
  handleEditImportance,
}) {
  const priorityList = {
    LOW: {
      name: "Baja",
      color: "bg-green-500",
    },
    MEDIUM: {
      name: "Media",
      color: "bg-orange-500",
    },
    HIGH: {
      name: "Alta",
      color: "bg-red-500",
    },
  };

  const statusList = {
    NEW: {
      name: "Nueva",
      color: "bg-blue-500",
    },
    "IN PROGRESS": {
      name: "En proceso",
      color: "bg-orange-500",
    },
    FINISHED: {
      name: "Finalizada",
      color: "bg-green-500",
    },
  };

  const datetime = new Date(date).toLocaleString();

  const limitDescription = (description) => {
    if (description.length >= 200) {
      const newDescription = description.slice(0, 197).concat("...");
      return newDescription;
    }
    return description;
  };

  return (
    <div className=" max-w-md w-11/12 min-w-[240px] border rounded-lg p-4 shadow-md mb-4 mx-auto">
      <div className=" flex justify-between items-center">
        <h3 className="font-semibold text-base mb-2">{title}</h3>
        <DeleteButton handleClick={() => handleDelete(id)} />
      </div>
      <span className="text-xs text-gray-600 block ">{datetime}</span>
      <div className="text-sm font-semibold mb-1">{author}</div>
      <button
        type="button"
        className={`text-sm py-1 px-2 ${priorityList[importance].color} rounded-md mr-2 text-white`}
        onClick={() => handleEditImportance(data)}
      >
        {priorityList[importance].name}
      </button>
      <button
        type="button"
        className={`text-sm py-1 px-2 ${statusList[status].color} rounded-md mr-2 text-white`}
        onClick={() => handleEditStatus(data)}
      >
        {statusList[status].name}
      </button>
      <p className="mt-2 text-sm break-words">{limitDescription(desc)}</p>
    </div>
  );
}
