import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { sendVerificationRequest } from "../../../../lib/uitls/sendVerificationRequest";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../lib/MongoDB/mongodb";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // verifyRequest: "/auth/verify-request",
  },
  adapter: MongoDBAdapter(clientPromise),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// database: process.env.DATABASE_URL,
// database: {
//   type: "mongodb",
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   url: process.env.DATABASE_URL,
// },
