import { FC } from "react";
import { CustomerType } from "../Types/CustomerType";

const CustomerNameCard:FC<CustomerType> = (customer) => {
    return(
        <div>
            <p>Navn: {customer.navn}</p>
            <p>E-post: {customer.epost}</p>
            <p>tlf: {customer.telefonnummer}</p>
        </div>
    )
}

export default CustomerNameCard