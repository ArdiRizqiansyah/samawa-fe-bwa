import { TShow } from "./types";

async function getData(show: TShow) {
    try {
        let url = `${process.env.HOST_API}/api/wedding-packages`;

        if(show === "popular") {
            url = `${process.env.HOST_API}/api/wedding-package/popular`
        }

        const res = await fetch(url, {
            method : "GET",
            cache: "no-cache",
        });

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export { getData };