export default function Dashboard() {
  return (
    <div className="m-auto text-white">
      <p>
        User Info: <span className="font-bold">John </span>
      </p>
      <p>
        Email: <span className="font-bold">john@gmail.com </span>
      </p>
      <button className="cursor-pointer bg-red-500 px-2 py-1 text-white w-full mt-2">
        Log out
      </button>
    </div>
  );
}
