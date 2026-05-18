import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getAllDestinations = async () => {

    // access token from cookies using better-auths token generation method
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch("http://localhost:5000/destinations", {
        cache: "no-store",
        headers:
        {
            authorization: `Bearer ${token}`,   //sending token to server for authentication
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch destinations");
    }

    return res.json();
};


export const getSingleDestination = async (id) => {

    // access token from cookies using better-auths token generation method
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    // console.log("Token from client side:", token);

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: "no-store",
        headers:
        {
            authorization: `Bearer ${token}`,   //sending token to server for authentication
        },
    });

    return res.json();
};