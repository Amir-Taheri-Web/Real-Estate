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
        message: "لطفا وارد حساب کاربری خود شوید",
      });

    const [user] = await User.aggregate([
      { $match: { email: session.user.email } },
      {
        $lookup: {
          from: "profiles",
          foreignField: "userId",
          localField: "_id",
          as: "profiles",
        },
      },
    ]);

    if (!user)
      return NextResponse.json({
        code: 404,
        status: "failure",
        message: "شما مجاز به دسترسی به این بخش نیستید",
      });

    return NextResponse.json({ code: 200, status: "success", user });
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
