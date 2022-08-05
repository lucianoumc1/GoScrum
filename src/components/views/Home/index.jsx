import NewTask from "../../NewTask";
import MyTasks from "../../MyTasks";

export default function Home() {
  return (
    <main className="h-screen pt-20 flex items-start bg-white p-2 ">
      <NewTask className="hidden md:block" />
      <MyTasks />
    </main>
  );
}
