import { ref } from 'vue';
import axios from 'axios';


export default function registration() {
     
    const exchange = () => {
        axios.get('http://localhost:4000/rate').then((response) => {
            console.log(response);
        })
    }
}