import Image from "next/image";
import { SelectForm } from "@/app/components/ui/Select";
// import { ToastWithTitle } from "@/app/components/ui/Form";
// import { ProfileForm } from "@/app/components/ui/Form";
import { ExpenseForm } from "@/app/components/ui/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>900 DOLLARYDOOS?</h1>
        {/* <ProfileForm /> */}
        {/* <SelectForm /> */}
        {/* <ToastWithTitle /> */}
        <ExpenseForm />
      </div>
    </main>
  );
}
