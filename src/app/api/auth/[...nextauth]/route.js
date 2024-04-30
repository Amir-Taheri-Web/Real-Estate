import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { e2p } from "@/utils/convert";
import { validateEmail, validatePassword } from "@/utils/validate";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در اتصال به دیتابیس پیش آمده");
        }

        const { email, password } = credentials;

        if (!email.trim() || !password.trim())
          throw new Error("لطفا تمام فیلدها را پر کنید");

        if (!validateEmail(email)) throw new Error("ایمیل معتبر نیست");

        if (!validatePassword(password))
          throw new Error(
            e2p(
              "رمز عبور باید لاتین، حداقل 8 کاراکتر با حروف کوچک و بزرگ، عدد و یک حرف خاص باشد"
            )
          );

        const user = await User.findOne({ email });

        if (!user) throw new Error("کاربری با این مشخصات وجود ندارد");

        const isPasswordValid = await verifyPassword(password, user.password);

        if (!isPasswordValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
