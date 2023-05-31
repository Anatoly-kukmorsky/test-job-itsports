interface ResData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts';
    static #ID = 15;

    static #get(): Promise<ResData[]> {
        return fetch(this.#URL)
        .then(response => response.json());
    }

    static #getTitleFromJson(data: ResData[]): string | undefined {
        console.log(data)
        const post = data.find(post => post.id === this.#ID);
        const title = post?.title;
        return title;
    }

    async run(): Promise<void> {
        const jsonData = await FifteenthTitle.#get();
        const title = FifteenthTitle.#getTitleFromJson(jsonData);
        title
            ? console.log(title)
            : console.log(`Post with id ${FifteenthTitle.#ID} not found.`)
    }
}

export const titleOfTheFifteenthPost = new FifteenthTitle();
titleOfTheFifteenthPost.run();