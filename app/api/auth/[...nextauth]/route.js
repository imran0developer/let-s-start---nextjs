import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'


const handler= NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    secret:process.env.NEXTAUTH_SECRET,

    callbacks:{
        async session({session}){  
            return session;
        },
        async signIn({profile, provider}){
            console.log("profile: ",profile);

            // Add user to db
            const response = fetch(`${process.env.BASE_URL}/api/users`,{
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: profile.name, email: profile.email, image: profile.image || profile.picture})
              });

            return true;
        },
    }
})

export {handler as GET, handler as POST}
