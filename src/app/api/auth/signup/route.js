import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { e2p } from "@/utils/convert";
import { validateEmail, validatePassword } from "@/utils/validate";
import { NextResponse } from "next/server";

const POST = async (req) => {
  try {
    await connectDB();

    const { firstName, lastName, email, password } = await req.json();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    )
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "لطفا تمام فیلدها را پر کنید",
      });

    if (!validateEmail(email))
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "ایمیل معتبر نیست",
      });

    if (!validatePassword(password))
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: e2p(
          "رمز عبور باید لاتین، حداقل 8 کاراکتر با حروف کوچک و بزرگ، عدد و یک حرف خاص باشد"
        ),
      });

    const user = await User.findOne({ email });

    if (user)
      return NextResponse.json({
        code: 422,
        status: "failure",
        message: "کاربری با این ایمیل ثبت شده است",
      });

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      role: "USER",
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json({
      code: 201,
      status: "success",
      message: "ثبت نام انجام شد",
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

export { POST };
