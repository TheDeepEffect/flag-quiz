/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCountries
// ====================================================

export interface getCountries_Country_flag {
	__typename: "Flag";
	svgFile: string;
}

export interface getCountries_Country {
	__typename: "Country";
	name: string;
	flag: getCountries_Country_flag | null;
}

export interface getCountries {
	Country: (getCountries_Country | null)[] | null;
}
