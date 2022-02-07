export default function getFilterProducts(data, param = {}, desiredObj) {
	if (Object.values(param).some((i) => i)) {
		return data.filter((item) => {
			return Object.values(param).includes(item[desiredObj]);
		});
	} else {
		console.log("hi");
		return data;
	}
}
