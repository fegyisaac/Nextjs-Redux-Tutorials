import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: { json: () => any }) => {
  try {
    const { firstname, surname, username, email, password } =
      await req.json();

      const hashedPassword = await bcrypt.hash(password, 12)

    await connectMongoDB();

    console.log('============== route')
    await User.create({
      firstname,
      surname,
      username,
      email,
      password: hashedPassword,
    });
    
    console.log('==============+++++++ route')
    console.log([
      firstname,
      surname,
      username,
      email,
      password
    ]);

    return NextResponse.json({ message: "User Registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "an error occurred", error }, { status: 500 });

  }
};
