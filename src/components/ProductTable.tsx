import React from 'react';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

export const ProductTable = () => {
	return (
		<>
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
					<ProductCategoryRow></ProductCategoryRow>
					<ProductRow></ProductRow>
					<ProductRow></ProductRow>
					<ProductRow></ProductRow>
					<ProductCategoryRow></ProductCategoryRow>
					<ProductRow></ProductRow>
					<ProductRow></ProductRow>
					<ProductRow></ProductRow>
				</tbody>
			</table>
		</>
	)
}
