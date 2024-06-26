import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { e2p } from "@/utils/convert";
import { validateNumber } from "@/utils/validate";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const POST = async (req) => {
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

    const {
      title,
      description,
      location,
      realEstate,
      phone,
      price,
      category,
      constructionDate,
      amenities,
      rules,
    } = await req.json();

    if (
      !title.trim() ||
      !description.trim() ||
      !location.trim() ||
      !realEstate.trim() ||
      !phone.trim() ||
      !price.trim() ||
      !category.trim() ||
      !constructionDate
    )
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "لطفا تمام فیلدهای اجباری را پر کنید",
      });

    if (
      !validateNumber(phone) ||
      phone.length < 11 ||
      phone.length > 11 ||
      phone[0] != "0"
    )
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: e2p("شماره تماس باید عدد 11 رقمی باشد و با 0 شروع شود"),
      });

    if (!validateNumber(price))
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "قیمت باید عدد باشد",
      });

    const newProfile = await Profile.create({
      title,
      description,
      location,
      realEstate,
      phone,
      price,
      category,
      constructionDate,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
    });

    console.log(newProfile);

    return NextResponse.json({
      code: 201,
      status: "success",
      message: "آگهی ایجاد شد",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      code: 500,
      status: "failure",
      message: "مشکلی در اتصال به دیتابیس به وجود آمده",
    });
  }
};

const PATCH = async (req) => {
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

    const {
      title,
      description,
      location,
      realEstate,
      phone,
      price,
      category,
      constructionDate,
      amenities,
      rules,
      id,
    } = await req.json();

    if (
      !title.trim() ||
      !description.trim() ||
      !location.trim() ||
      !realEstate.trim() ||
      !phone.trim() ||
      !price.trim() ||
      !category.trim() ||
      !constructionDate
    )
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "لطفا تمام فیلدهای اجباری را پر کنید",
      });

    if (
      !validateNumber(phone) ||
      phone.length < 11 ||
      phone.length > 11 ||
      phone[0] != "0"
    )
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: e2p("شماره تماس باید عدد 11 رقمی باشد و با 0 شروع شود"),
      });

    if (!validateNumber(price))
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "قیمت باید عدد باشد",
      });

    const profile = await Profile.findOne({ _id: id });

    if (!profile.userId.equals(user._id))
      return NextResponse.json({
        code: 403,
        status: "failure",
        message: "شما اجازه دسترسی به این آگهی را ندارید",
      });

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.realEstate = realEstate;
    profile.phone = phone;
    profile.price = price;
    profile.category = category;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.published = false;
    profile.save();

    return NextResponse.json({
      code: 200,
      status: "success",
      message: "آگهی ویرایش شد",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      code: 500,
      status: "failure",
      message: "مشکلی در اتصال به دیتابیس به وجود آمده",
    });
  }
};

export { POST, PATCH };
