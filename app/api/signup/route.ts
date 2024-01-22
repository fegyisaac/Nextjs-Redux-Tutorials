import { NextResponse } from "next/server";

export const POST = async (req: { json: () => any }) => {
  try {
    const { firstname, surname, username, email, password, confirmPassword } =
      await req.json();

    console.log([
      firstname,
      surname,
      username,
      email,
      password,
      confirmPassword,
    ]);
    return NextResponse.json({ message: "User Registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "an error occured" }, { status: 500 });
  }
};
