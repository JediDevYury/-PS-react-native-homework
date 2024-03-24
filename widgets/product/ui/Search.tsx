import { SearchInput } from "@/shared/components/SearchInput";
import { useSetAtom } from "jotai/index";
import { filterByText } from "@/entities/product/modal/product.filter";

const Search = () => {
	const setText = useSetAtom(filterByText);
	const handleSearch = (text: string) => {
		setText(text.trim().toLowerCase());
	};

	return <SearchInput placeholder="Search coffee" onChangeText={handleSearch} />;
};

export default Search;
