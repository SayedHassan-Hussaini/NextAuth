import React, {useEffect } from "react";
import { getSession} from "next-auth/react";

const Dashboard = () => {
  return <div>dasbord</div>;
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

