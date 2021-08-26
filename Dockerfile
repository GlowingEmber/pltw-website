FROM node:14

COPY . .

ENV PORT=3000

EXPOSE 3000 3000

RUN npm i pnpm -g

RUN pnpm install

RUN pnpm run build

CMD ["node", "./build/index.js"]