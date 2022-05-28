import type { RequestHandler } from '@sveltejs/kit';
import type { PostQuestionPayload, QuestionPayload, Question } from '../../schema/index';
import { app } from '../../main';

export const post: RequestHandler = (request) => {
	const body = JSON.parse(request.body.toString()) as PostQuestionPayload;

	app
		.firestore()
		.collection('questions')
		.add({
			allowPublic: body.allowPublic ?? false,
			allowPublicName: body.allowPublicName,
			firstName: body.firstName,
			lastName: body.lastName,
			question: body.question
		} as Question)
		.catch((err) => console.log(err));

	return {
		status: 501
	};
};

export const get: RequestHandler<Record<string, any>, QuestionPayload[]> = async (request) => {
	const questions = await app
		.firestore()
		.collection('wips')
		.get()
		.then((res) => res.docs.map((doc) => doc.data()));

	// console.log(questions);
	return {
		body: questions
	};
};
