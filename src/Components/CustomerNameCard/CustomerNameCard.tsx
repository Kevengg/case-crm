import { FC } from "react";
import style from "./CustomerNameCard.module.css"
import { CustomerType } from "../../Types/CustomerType.ts";

const CustomerNameCard:FC<CustomerType> = (customer) => {
    return(
        <div className={style.card}>
            <p>Navn: {customer.navn}</p>
            <p>E-post: <a href={`mailto:${customer.epost}`} target="_blank" rel="noopener noreferrer">{customer.epost}</a></p>
            <p>tlf: {customer.telefonnummer}</p>
        </div>
    )
}

export default CustomerNameCard