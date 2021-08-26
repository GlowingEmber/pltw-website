import type { RequestHandler } from '@sveltejs/kit';
import type { QuestionPayload } from '../../schema/index';

export const get: RequestHandler = (request): { body: QuestionPayload } => {
	// return {
	// 	body:
	// }
};
