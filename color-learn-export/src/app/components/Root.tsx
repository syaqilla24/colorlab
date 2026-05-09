import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="size-full bg-gray-50">
      <Outlet />
    </div>
  );
}
