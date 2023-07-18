import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      }
    };
  }
  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  useEffect(() => {
    // Optional: You can add additional logic here when the component mounts.
    // For example, you can fetch additional data or perform other operations.
  }, []);

  return (
    <>
     <Navbar />
     <Billboard />
    </>
  );
}
