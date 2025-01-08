import axios  from "axios";

const inetence = axios.create({
    baseURL: "https://back-commerce-production.up.railway.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer, ${localStorage.getItem("token")}`
    },
    timeout: 10000,
})

export default inetence