import React from 'react';
import styles from './ProductRow.module.scss';
import classNames from 'classnames'

interface Props {
	name: string;
	price: string;
	stocked: boolean;
}

export const ProductRow: React.FC<Props> = (props) => {
	return (
		<tr className={classNames({[styles.stock]: !props.stocked})}>
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	)
}
