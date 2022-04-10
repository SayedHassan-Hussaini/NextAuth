import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      authorize: (credentials) => {
        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: 1,
            username: "Sayed Hassan Hussaini",
            email: "test@gmail.com",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
      }
      return Promise.resolve(token);
    },
    async session({ sesstion, token }) {
      if (token) {
        sesstion.id = token.id;
      }
      return Promise.resolve(sesstion);
    },
  },
});
