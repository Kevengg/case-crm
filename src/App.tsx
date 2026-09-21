import { FC } from "react";
import CustomerNameCard from "./Components/CustomerNameCard/CustomerNameCard.tsx";
import { testCostomer } from "./test data/Customers.ts";

const App: FC = () => {
	return (
		<>
			<CustomerNameCard {...testCostomer}></CustomerNameCard>
		</>
	);
};

export default App;
