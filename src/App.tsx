import { FC } from "react";
import CustomerNameCard from "./Components/CustomerNameCard";
import { testCostomer } from "./test data/Customers.ts";

const App: FC = () => {
	return <div>
		<CustomerNameCard {...testCostomer}></CustomerNameCard>
	</div>;
};

export default App;
