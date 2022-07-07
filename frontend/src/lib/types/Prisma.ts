/**
 * Model Source
 *
 */
export type Source = {
	id: number;
	thumbnail: string;
	title: string;
	description: string;
	path: string;
	seasonId: number;
};

/**
 * Model Season
 *
 */
export type Season = {
	id: number;
	title: string;
	mediaId: number;
};

/**
 * Model Media
 *
 */
export type Media = {
	id: number;
	type: MediaType;
	title: string;
	description: string;
	genre: string;
	ageRestricted: number;
	releasedAt: Date;
	logo: string | null;
	preview: string;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const MediaType = {
	MOVIE: 'MOVIE',
	SERIES: 'SERIES'
};

export type MediaType = typeof MediaType[keyof typeof MediaType];
