

"use client";

import { useSearchParams } from "next/navigation";

import React from "react";

import CreateFunction from "../../@create/manipulate/page";
import UpdateFunction from "../../@update/manipulate/page";
import DeleteFunction from "../manipulate/page";

const DeleteCarModal = () => {
 
  const searchParam = useSearchParams();

  const carId = searchParam.get("carId");
  const action = searchParam.get("action");
  const make = searchParam.get("make");

  const handleDeleteAction = async ()=>{
    switch (action) {
         case 'update':
           if (!carId) return null;
           return <UpdateFunction carId={carId} />;
         case 'create':
           return <CreateFunction />;
         case 'delete':
            return <DeleteFunction carId={carId} make={make}/>
         default:
             return null;
             
       }
  }
  
  return (
    // <Dialog defaultOpen onOpenChange={() => router.back()}>
    //   <DialogContent className="sm:max-w-[425px]">
    //      <DialogTitle></DialogTitle>
    //         {handleDeleteAction()}
    //   </DialogContent>
    // </Dialog>
    <div>
    {handleDeleteAction()}
    </div>
  );
};

export default DeleteCarModal;