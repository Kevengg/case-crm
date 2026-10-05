const capitalize = (str: string): string => {
	var a = str.slice(0, 1);
	var b = str.slice(1);
	return a.toLocaleUpperCase() + b;
};
export { capitalize };
