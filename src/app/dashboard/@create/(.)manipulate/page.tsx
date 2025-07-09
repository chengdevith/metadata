"use client";

import {
  Dialog,
  DialogContent,

} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import CreateFunction from "../manipulate/page";
import UpdateFunction from "../../@update/manipulate/page";
import DeleteFunction from "../../@delete_car/manipulate/page";

const CreateCarModal = () => {
  const router = useRouter();
   
    const searchParam = useSearchParams();
  
    const carId = searchParam.get("carId");
    const action = searchParam.get("action");
    const make = searchParam.get("make");
    
  
    const handleCreateAction = async ()=>{
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
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
         <DialogTitle></DialogTitle>
           {handleCreateAction()}
      </DialogContent>
    </Dialog>
  );
};

export default CreateCarModal;
