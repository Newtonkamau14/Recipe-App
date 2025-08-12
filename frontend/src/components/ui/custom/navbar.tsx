import { logoutAction } from "@/data/actions/auth-action";
import { SidebarTrigger } from "../sidebar";
import { SubmitButton } from "./submit-button";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

export async function Navbar() {
  const user = await getUserMeLoader();

  return (
    <header className="sticky top-0 flex justify-between items-center bg-gray-50 w-full h-14 border-b">
      <SidebarTrigger className="cursor-pointer" />

      {user && (
        <div className="flex items-center gap-3 mr-3">
          <p className="font-semibold">{user.data.username}</p>
          <form action={logoutAction}>
            <SubmitButton
              className="w-fit"
              text="Logout"
              loadingText="Loading"
            />
          </form>
        </div>
      )}
    </header>
  );
}
