import { connectMongoDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: { json: () => any }) => {
  try {
    const { firstname, surname, username, email, password, confirmPassword } =
      await req.json();

    const hashedPassword = await bcrypt.hash(password, 15);
    await connectMongoDB();
    await User.create({
      firstname,
      surname,
      username,
      email,
      hashedPassword,
    });

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
