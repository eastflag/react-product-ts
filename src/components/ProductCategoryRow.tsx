import React from 'react';

interface Props {
	category: string;
}

export const ProductCategoryRow: React.FC<Props> = (props) => {
	return (
		<tr>
			<th colSpan={2}>{props.category}</th>
		</tr>
	)
}
