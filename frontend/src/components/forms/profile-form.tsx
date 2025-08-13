"use client";
import { useActionState } from "react";
import { updateProfileAction } from "@/data/actions/profile-actions";
import { cn } from "@/lib/utils";
import { SubmitButton } from "@/components/custom/submit-button";
import { Input } from "@/components/ui/input";
import { StrapiErrors } from "@/components/custom/strapi-errors";

interface ProfileFormProps {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

export function ProfileForm({
  data,
  className,
}: {
  readonly data: ProfileFormProps;
  readonly className?: string;
}) {
  const updateProfileWithId = updateProfileAction.bind(null, data.id);
  const [formState, formAction] = useActionState(
    updateProfileWithId,
    INITIAL_STATE
  );

  return (
    <form className={cn("space-y-4", className)} action={formAction}>
      <div className="space-y-4 grid ">
        <div className="grid grid-cols-3 gap-4">
          <Input
            id="username"
            name="username"
            placeholder="Username"
            defaultValue={data?.username || ""}
            disabled
          />
          <Input
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={data?.email || ""}
            disabled
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            defaultValue={data?.firstName || ""}
          />
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            defaultValue={data?.lastName || ""}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <SubmitButton text="Update Profile" loadingText="Saving Profile" />
      </div>
      <StrapiErrors error={formState?.strapiErrors} />
    </form>
  );
}
