import React from "react";
import {signOut ,getSession,useSession} from "next-auth/react";

const Dashboard = () => {
  const {data:session}=useSession()
  return (
    <>
     <button onClick={()=>{signOut()}} name="log" id="log-out"> Log out </button>
    <h1 className="wellcome">
    well come
      <div>{session?.user?.email}</div>
    </h1>
    </>
  );
};
 export async function getServerSideProps(context){
   const session =await getSession(context)
   if(session){
     return {
       props:{}
     }
   }else{
     return{
      redirect:{
        destination: "/",
      }
     }
   }
 }
export default Dashboard;

