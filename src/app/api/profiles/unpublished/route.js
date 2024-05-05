import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const GET = async (req) => {
  try {
    await connectDB();

    const session = await getServerSession(req);

    if (!session)
      return NextResponse.json({
        code: 401,
        status: "failure",
        message: " لطفا وارد حساب کاربری خود شوید",
      });

    const user = await User.findOne({ email: session.user.email });

    if (!user)
      return NextResponse.json({
        code: 404,
        status: "failure",
        message: " شما اجازه دسترسی به این صفحه را ندارید",
      });

    if (user.role !== "ADMIN")
      return NextResponse.json({
        code: 403,
        status: "failure",
        message: " شما اجازه دسترسی به این صفحه را ندارید",
      });

    const profiles = await Profile.find({ published: false });

    return NextResponse.json({
      code: 200,
      status: "failure",
      profiles,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      code: 500,
      status: "failure",
      message: "مشکلی در اتصال به سرور رخ داده است",
    });
  }
};

export { GET };
