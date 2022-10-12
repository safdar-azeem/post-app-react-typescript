export interface IPost {
	id?: string | number
	title: string
	description: string
	image: string | ArrayBuffer | null
	createdAt: Date
}
