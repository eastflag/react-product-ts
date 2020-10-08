import React from 'react';

interface Props {
	keyword: string;
	setKeyword: any;
}

export const SearchBar: React.FC<Props> = (props) => {
	return (
		<div>
			<input placeholder="Search..." value={props.keyword}
						 onChange={(e) => props.setKeyword(e.target.value)}></input><br />
			<input type="checkbox" ></input>Only show products in stock
		</div>
	)
}
