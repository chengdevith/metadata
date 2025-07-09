"use client";

import {
  Dialog,
  DialogContent,

} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import UpdateFunction from "../manipulate/page";
import CreateFunction from "../../@create/manipulate/page";


const UpdateCarModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const carId = searchParams.get("carId");
  const action = searchParams.get("action");
  console.log("The id: ", carId)
   
    const renderContent = () => {
    switch (action) {
      case 'update':
        if (!carId) return null;
        return <UpdateFunction carId={carId} />;
      case 'create':
        return <CreateFunction />;
      default:
        return null;
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
         <DialogTitle></DialogTitle>
           {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCarModal;
