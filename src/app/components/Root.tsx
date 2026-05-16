import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="size-full bg-[#FFF8F0]">
      <Outlet />
    </div>
  );
}
