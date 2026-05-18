"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteBooking({ booking }) {
    const { _id, destinationName } = booking;

    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`http://localhost:5000/bookings/${_id}`, {      //REST API= Representational State Transfer API
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,
            },
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success(destinationName + " Trip Cancelled successfully!");
            redirect('/bookings')
        } else {
            toast.error("Failed to cancel booking.");
        }
    };


    return (
        <AlertDialog>
            <Button variant='outline' size="lg" className="border border-red-300 text-red-500 px-6 py-2 flex items-center gap-2 hover:bg-red-500 hover:text-white transition rounded-full">
                <TrashBin className="text-sm" />
                Cancel Trip
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete booking permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong>{" "} Booking
                                and all of its data. Are you sure you want to proceed?
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}