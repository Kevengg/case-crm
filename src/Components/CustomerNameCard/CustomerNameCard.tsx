import { FC } from "react";
import style from "./CustomerNameCard.module.css";
import { CustomerType, findPrimaryContact } from "../../Types/CustomerType.ts";

const CustomerNameCard: FC<CustomerType> = (customer) => {
	var primaryContact = findPrimaryContact(customer);
	return (
		<main className={style.card}>
			{/* sets page title */}
			<title>{customer.navn}</title>
			<div>
				<h1>{customer.navn}</h1>

				<ul className={style.contact}>
					<li>
						<div>
							{primaryContact.primary
								? "Hoved kontakt:"
								: "Kontakt persjon:"}
						</div>
						<div>{primaryContact.navn}</div>
					</li>
					<li>
						<div>E-post:</div>
						<div>
							<a
								target={"_blank"}
								href={`mailto:${primaryContact.epost}`}
								rel="noreferrer nofollow">
								{primaryContact.epost}
							</a>
						</div>
					</li>
					<li>
						<div>Tlf.:</div>
						<div>{primaryContact.tlf}</div>
					</li>
				</ul>
			</div>
			<div className={style.items}></div>
		</main>
	);
};

export default CustomerNameCard;
