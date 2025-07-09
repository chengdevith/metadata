/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { getAuthToken } from "@/lib/auth";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { AlertTriangle, Loader2 } from "lucide-react";

type carDeleteType = {
    carId: string | null | any;
    make: string | null | any;
}

export default function DeleteFunction({ carId, make }: carDeleteType) {
    const [getMake, setMake] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Memoize the delete function to prevent recreation on every render
    const deleteCar = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!getMake.trim()) {
            toast.error("Please enter the car make to confirm deletion.");
            return;
        }

        // Verify the entered make matches the actual car make
        if (getMake.toLowerCase().trim() !== make.toLowerCase().trim()) {
            toast.error(`Make doesn't match. Please type exactly: ${make}`);
            return;
        }
        
        setIsLoading(true);
        
        try {
            const access_token = getAuthToken();
            console.log("The access_token", access_token ? "Found" : "Missing");
            
            if (!access_token) {
                throw new Error('No access token found. Please login or refresh your token.');
            }

            const response = await fetch(`https://car-nextjs-api.cheatdev.online/cars/${carId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                
                // If token expired, suggest refresh
                if (response.status === 401) {
                    throw new Error('Access token expired. Please refresh your token.');
                }
                
                throw new Error(errorData.message || 'Failed to delete car');
            }

            const data = await response.json();
            
            // Success feedback and navigation
            toast.success(`${make} car deleted successfully!`);
            
            // Use window.location for immediate navigation to avoid suspense issues
            window.location.href = '/dashboard';
            
            return data;

        } catch (error) {
            console.error("Delete error:", error);
            toast.error(error instanceof Error ? error.message : "Failed to delete car");
        } finally {
            setIsLoading(false);
        }
    }, [getMake, make, carId]); // Dependencies for useCallback

    const handleDeleteCar = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMake(e.target.value);
    }, []);

    const handleCancel = useCallback(() => {
        window.location.href = '/dashboard';
    }, []);

    const isValidMake = getMake.toLowerCase().trim() === make.toLowerCase().trim();
    
    return (
        <Dialog defaultOpen>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-5 w-5" />
                        Delete Car
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. Please type the car make exactly to confirm deletion.
                    </DialogDescription>
                </DialogHeader>

                {/* Warning Alert */}
                <Alert className="border-destructive/50 text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                        <strong>You are about to delete a {make} car.</strong>
                        <br />
                        Type <strong>{make}</strong> exactly to confirm.
                    </AlertDescription>
                </Alert>
                
                <form onSubmit={deleteCar}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="car-make">
                                Type <span className="font-semibold text-destructive">{make}</span> to confirm deletion:
                            </Label>
                            <Input 
                                id="car-make" 
                                name="make" 
                                placeholder={`Type "${make}" here...`}
                                value={getMake}
                                onChange={handleDeleteCar}
                                required
                                disabled={isLoading}
                                className={
                                    getMake && !isValidMake 
                                        ? "border-destructive focus:border-destructive" 
                                        : getMake && isValidMake 
                                        ? "border-green-500 focus:border-green-500"
                                        : ""
                                }
                            />
                            {getMake && !isValidMake && (
                                <p className="text-sm text-destructive">
                                    Make must match exactly: <strong>{make}</strong>
                                </p>
                            )}
                            {getMake && isValidMake && (
                                <p className="text-sm text-green-600">
                                    ✓ Make confirmed
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <DialogFooter className="mt-6">
                        <Button 
                            type="button"
                            variant="outline" 
                            disabled={isLoading}
                            onClick={handleCancel}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                "Cancel"
                            )}
                        </Button>
                        <Button 
                            type="submit" 
                            variant="destructive"
                            disabled={isLoading || !getMake.trim() || !isValidMake}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                "Delete Car"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}