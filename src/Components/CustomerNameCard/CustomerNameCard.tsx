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
			<div className={style.items}>
				<Subject />
			</div>
		</main>
	);
};

const Subject = () => {
	var items: { name: string; notes: string; changed: Date; file: string }[] =
		[
			{
				name: "her er navn",
				notes: "notater",
				changed: new Date(),
				file: "https://youtube.com",
			},
			{
				name: "her er navn",
				notes: "notater",
				changed: new Date(),
				file: "https://youtube.com",
			},
			{
				name: "her er navn",
				notes: "notater",
				changed: new Date(),
				file: "https://youtube.com",
			},
		];
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							<input
								type="checkbox"
								name="selectAll"
								id="selectAll"
							/>
						</th>
						<th>Fil navn</th>
						<th>Notater</th>
						<th>Sist endret</th>
					</tr>
				</thead>
				<tbody>
					{items &&
						items.map((item) => {
							return (
								<tr key={`${item.name}`}>
									<td>
										<input
											type="checkbox"
											name={`select${item.name}`}
										/>
									</td>
									<td>
										<a href={item.file}>{item.name}</a>
									</td>
									<td>{item.notes}</td>
									<td>
										{item.changed.getDate()}.
										{item.changed.getMonth()}-
										{item.changed.getUTCFullYear()}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default CustomerNameCard;
