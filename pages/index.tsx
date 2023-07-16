import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  useEffect(() => {
    // Optional: You can add additional logic here when the component mounts.
    // For example, you can fetch additional data or perform other operations.
  }, []);

  return (
    <>
      <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as: {user?.email}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
}
