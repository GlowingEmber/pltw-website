import admin from 'firebase-admin';

export const app = admin.initializeApp({
	credential: admin.credential.cert({
		privateKey:
			'-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC0aNPizk2TQ6+z\nuO6BjWpBjQfCNSWMgS5KUOSEp6CxapzLR7zY5+7qg4wxj66rEvN9j+ozCG2PQG0D\nS/Ji+Lh511Ev6oRUAg0Me/3I+zX9vbi1AhdDbe+P8Q2aTWe3gBVMIXgoWNTKB14n\n/RcVuqJ88Mrm8Mj4j8W99fkjQb2Qy0REMy4Wp9JDugoiZfqRWFZid9VCkzKzRVBk\n46tKedRmLTj5Wtef5IrpK5qXmSJOJ6c+CfItIvijCL66bzdOOaJQB+L2HMnbTJG/\nolX+Daii8jAojJXCseyXLf9X/6sDqCLAA7/JZhu5ajwA75eoo2jYBZ68fer6t2y5\nsp5OEwedAgMBAAECggEAEx5p2AcfcvwRFnWCdyHGsTAyMoth0ZBOGMuWUBWYorym\n5acSVRVNPTaYKJduvgv52GRkQCjEPZJpCxilFQaBPE5MeQy8HdAC1IAeXsp6iAuv\nU6VnVDrGEMXNuHy8AVcWSrVgT7xMPqXFvWyloeSfvChjhFJfpfHMlatHzgv1PC8U\n3c24NeOJpPDpO6HgxSR2JcMg2avLVGmJtv2yu6/dtdq84MfnUMy1M3esV8Fq2HKt\nraYdWAKprLdoJq6p299dCUjlCFsG6En2xUAfXEIAnKsnyiGlxX3wFfnRxVI2h5jT\nP3i2Mv0WqYxbgO61+nBgf1uuhIQfXLXzBX+dW9HRUQKBgQDX+0Rfwgo/jEjtPJVr\nIpBLBPn1y44a+AD/HEkGhMCZUJ7OHJ0My7sih+oirPmDY6zwv/956uIqxqemzOyJ\nVg+uWuWgb61Lg7uDGNe/simAyBcx2uq7EGGwqmdzheBKQpxnDE1F7+MNx6XbRiJd\nToFBDgimK5CoAqP4z0571oAxMQKBgQDV1kJSBGGVKyR5oD9A7hPAt0ypOVkmuc57\nRAljvy+/cHkFYKbmG08yuV+gbY7fnnIxkGn0hH1lC6O//ITq0s682yQcDYPW8PHW\n5wqzU/DgiMSobY4Z3nRV1yksd/3u6R4hximelQspo7KN4/5klB59f2VaYnEHx0o1\nZOrFIagCLQKBgB3WisWn6v6IhPKxcfsRFVon39iDPKihJpIX+Ea8RFdp+eaDsXa5\nFqtYl5Iez4HFXXkNLWBMgN5j/3ldyjfW+eeeiya1Bv3tvxQHdJb5KB6whfPPSKp7\nQuPDRvOAxVG9Dhp2ap6E25tlv5YhhFHbrKOuKqe6UQvFAZ44FaGqKp+hAoGAHDoT\nORZg9zrhrrhrgRusOdU4ZmIulYETc4wQnT0ghWnIX+BZR6i1NKHpsJilsnkM4+QH\nSIKwtsTpka84sHKxXZaj1pwmGhpmIhMPg4qCEnGbXAxSJLILs0Uap0cTmxTkqFqr\nJcbQ2WdFa5t7+jTfLXvCmkLCXt98uT2gC/OcZOUCgYAQXpoN9EY0GkCAEBy+sdjJ\nLJRaJRgZiVqHINzs9yn/RuGIAQ9LCiL2qapGzLVKNBJ/MPY6Aqm6GpW2yGyjwRmw\nNDhNalt1nHyGtzKxVCtje2mBoMaFx/NhWEkD/rjg9751yi1/iKuJRd8ujzVWYVkB\nrH3kTfbLjKlH7Be1rq3brQ==\n-----END PRIVATE KEY-----\n',
		clientEmail: 'firebase-adminsdk-jva7d@smile-start-f94ab.iam.gserviceaccount.com',
		projectId: 'smile-start-f94ab'
	})
});
