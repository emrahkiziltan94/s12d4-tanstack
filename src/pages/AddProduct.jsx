import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const defaultValues = {
    id: 0,
    name: '',
}
export default function AddProduct() {

    const queryClient = useQueryClient()



    const { register, handleSubmit } = useForm({ defaultValues, mode: 'onBlur' });
    const mutation = useMutation({
        mutationFn: (data) => {
            return axios.post('http://localhost:8080/products', data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            history.push("/products");
        },
        onError: (error) => {
            console.log(error);
        }
    });
    const history = useHistory();
    const onSubmit = (data) => {
        mutation.mutate(data);


    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Id:</label>
            <input type="number" {...register('id')} />
            <label>Name:</label>
            <input type="text" {...register('name')} />
            <button type="submit">Save</button>
        </form>
    );

}