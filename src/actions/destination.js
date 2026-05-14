export const getAllDestinations = async () => {
    const res = await fetch("http://localhost:5000/destinations", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch destinations");
    }

    return res.json();
};


export const getSingleDestination = async (id) => {
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch destination");
    }

    return res.json();
};