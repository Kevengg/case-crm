import { FC } from "react";
//@ts-ignore
import style from "./CustomerNameCard.module.css";
import { CustomerType, findPrimaryContact } from "../../Types/CustomerType.ts";
import { capitalize } from "../../Types/StringHelpers.ts";

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
				{[Object.keys(customer.sider)[0]].map((name) => (
					<Subject
						key={name}
						name={name}
						values={customer.sider[name]}
					/>
				))}
			</div>
		</main>
	);
};

const Subject: FC<{ name: string; values: {}[] }> = ({ name, values }) => {
	// TODO: Needs documentation badly
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
						{values &&
							Object.keys(values[0]).map((value) => {
								return <th key={value}>{capitalize(value)}</th>;
							})}
					</tr>
				</thead>
				<tbody>
					{values &&
						values.map((item, idx) => {
							const keys = Object.keys(item);
							return (
								<tr key={idx}>
									<td>
										<input
											type="checkbox"
											name={`select${idx}`}
										/>
									</td>
									{keys.map((key) => {
										//@ts-ignore
										var val = item[key];
										if (typeof val == "object") {
											// check if date (assumes object is date)
											return (
												<td>
													{(
														val as Date
													).toDateString()}
												</td>
											);
										} else if (
											// check url
											// Source - https://stackoverflow.com/a/3809435
											RegExp(
												/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
											).test(val as string)
										) {
											return (
												<td key={key}>
													<a
														href={val}
														target="_blank"
														rel="noopener noreferrer">
														{val}
													</a>
												</td>
											);
										} else {
											// default text
											return <td key={key}>{val}</td>;
										}
									})}
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default CustomerNameCard;
