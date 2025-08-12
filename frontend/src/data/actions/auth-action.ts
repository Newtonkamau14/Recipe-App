"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginUserService, signUpUserService } from "../services/auth-service";
import { revalidatePath } from "next/cache";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const signUpSchema = z.object({
  username: z
    .string()
    .min(3, {
      error: (iss) => {
        iss.minimum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Username must have ${iss.minimum} characters or more`;
      },
    })
    .max(20, {
      error: (iss) => {
        iss.maximum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Username cannot be more than ${iss.maximum} characters or more`;
      },
    }),
  email: z.email("Please enter a valid email address"),
  password: z
    .string("Password must be between 6 and 20 characters")
    .min(6, {
      error: (iss) => {
        iss.minimum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Password must have ${iss.minimum} characters or more`;
      },
    })
    .max(100, {
      error: (iss) => {
        iss.maximum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Password cannot be more than ${iss.maximum} characters or more`;
      },
    }),
});

const loginSchema = z.object({
  identifier: z.union([
    z.email("Please enter a valid email address"),

    z
      .string()
      .min(3, {
        error: (iss) => {
          iss.minimum; // the minimum value
          iss.inclusive; // whether the minimum is inclusive
          return `Username must have ${iss.minimum} characters or more`;
        },
      })
      .max(20, {
        error: (iss) => {
          iss.maximum; // the minimum value
          iss.inclusive; // whether the minimum is inclusive
          return `Username cannot be more than ${iss.maximum} characters or more`;
        },
      }),
  ]),
  password: z
    .string("Password must be between 6 and 20 characters")
    .min(6, {
      error: (iss) => {
        iss.minimum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Password must have ${iss.minimum} characters or more`;
      },
    })
    .max(100, {
      error: (iss) => {
        iss.maximum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Password cannot be more than ${iss.maximum} characters or more`;
      },
    }),
});

export async function signUpUserAction(prevState: any, formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: z.flattenError(validatedFields.error),
      message: "Missing fileds.Failed to sign up",
    };
  }

  const responseData = await signUpUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "Oops! Something went wrong.Please try again",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to sign up.",
    };
  }

  (await cookies()).set("recipe-app", responseData.jwt, config);

  redirect("/");
}

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: z.flattenError(validatedFields.error),
      message: "Missing fileds.Failed to login",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "Oops! Something went wrong.Please try again",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to login.",
    };
  }

  (await cookies()).set("recipe-app", responseData.jwt, config);

  redirect("/");
}


export async function logoutAction(){
  (await cookies()).set("recipe-app","",{...config,maxAge: 0})
  redirect("/login")
}
