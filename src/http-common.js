import axios from "axios";
import { Header } from "tar";

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    header: {'Content-Type': 'application/json'}
});