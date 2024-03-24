import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const AddProductIcon = () => (
	<Svg width={32} height={32} fill="none">
		<Rect width={32} height={32} fill="#C67C4E" rx={10} />
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12 16h8M16 20v-8"
		/>
	</Svg>
);
export default AddProductIcon;
