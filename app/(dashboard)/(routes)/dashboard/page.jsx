import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>This is dashboard (protected) </p>
      <UserButton afterSignOutUrl="/dashvboard" />
    </div>
  );
}
