export type Question = {
	firstName: string;
	lastName: string;
	allowPublic: boolean;
	allowPublicName: boolean;
	question: string;
	answer: string;
	date: string;
};

export type PostQuestionPayload = Partial<Question>;

export type QuestionPayload = Partial<PostQuestionPayload>;

export type PostBlogEntryPayload = {
	title: string;
	contents: string;
};
