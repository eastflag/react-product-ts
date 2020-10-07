import React from 'react';

interface Props {
	category: string;
}

export const ProductCategoryRow: React.FC<Props> = () => {
	return (
		<tr>
			<th colSpan={2}>Sporting Goods</th>
		</tr>
	)
}
