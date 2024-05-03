import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const DELETE = async (req, context) => {
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

    if (!user)
      return NextResponse.json({
        code: 404,
        status: "failure",
        message: "لطفا وارد حساب کاربری خود شوید",
      });

    const profile = await Profile.findOne({ _id: context.params.profileId });

    if (!profile.userId.equals(user._id))
      return NextResponse.json({
        code: 403,
        status: "failure",
        message: "شما اجازه دسترسی به این آگهی را ندارید",
      });

    await Profile.findOneAndDelete({ _id: context.params.profileId });

    return NextResponse.json({
      code: 200,
      status: "success",
      message: "آگهی حذف شد",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      code: 500,
      status: "failure",
      message: "مشکلی در اتضال به سرور رخ داده است",
    });
  }
};

export { DELETE };
