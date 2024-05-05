import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const PATCH = async (req, context) => {
  try {
    await connectDB();

    const session = await getServerSession(req);

    if (!session)
      return NextResponse.json({
        code: 401,
        status: "failure",
        message: "لطفا وارد حساب کاربری خود شوید",
      });

    const user = await User.findOne({ email: session.user.email });

    if (!user || user.role !== "ADMIN")
      NextResponse.json({
        code: 404,
        status: "failure",
        message: "شما مجاز به دسترسی به این صفحه نیستید",
      });

    const profile = await Profile.findOne({ _id: context.params.profileId });

    profile.published = true;
    profile.save();

    return NextResponse.json({
      code: 200,
      status: "success",
      message: "آگهی منتشر شد",
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

export { PATCH };
