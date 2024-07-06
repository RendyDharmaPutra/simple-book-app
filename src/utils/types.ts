interface tableBody {
    idBook: number,
    title: string,
    writer: string,
    publisher: string,
    year: number,
    category: string
}

interface book {
    idBook: number;
    title: string;
    writer: {
        name: string;
    };
    publisher: {
        name: string;
    };
    category: {
        nameCategory: string;
    };
    year: number;
}