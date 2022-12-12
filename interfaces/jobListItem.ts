export interface JobListItem {
	id: string | number,
	name: string,
	email: string,
	phone: string | number,
	title: string,
	salary: string,
	address: string,
	benefits: string[],
	location: {
		lat: number,
		lan: number,
	},
	pictures: string[],
	createdAt: string | Date,
	updatedAt: string | Date,
	description: string,
	employment_type: string[],
}