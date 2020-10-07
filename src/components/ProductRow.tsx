import React from 'react';

interface Props {
	name: string;
	price: string;
	stocked: boolean;
}

export const ProductRow: React.FC<Props> = () => {
	return (
		<tr>
			<td>Football</td>
			<td>$49.99</td>
		</tr>
	)
}
