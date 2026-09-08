import { CustomerType } from "../Types/CustomerType.ts";
import { Institusjonell_sektorkode } from "../Types/Institusjonell_sektorkode.ts";

export const testCostomer: CustomerType = {
	navn: "undefined",
	organisasjonsform: "",
	beskrivelse: "",
	ansatte: 0,
	ansatte_registrert: false,
	hjemmeside: "https://str.str",
	epost: "str@str.str",
	telefonnummer: 0,
	mobil: 0,
	institusjonell_sektorkode:
		Institusjonell_sektorkode["Private aksjeselskaper mv."],
	årsregnskap: 0,
	årsregnskap_dato: new Date(),
	stiftelsesdato: new Date(),
	mva_reg: false,
	frivllig_reg: false,
	foretak_reg: false,
	stiftelse_reg: false,
	parti_reg: false,
	konkurs: false,
	avvikkling: false,
	avvikkling_tvang: false,
	målform: "bokmål",
	vedtekt_formål: "",
	aktivitet: "",
	register_hjemland: 0,
	påtegninger: false,
	insolvens_utland: false,
	konsern: false,
	aksjer: 0n,
};

const Customers: CustomerType[] = [
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
	{ ...testCostomer },
];

export default Customers;
