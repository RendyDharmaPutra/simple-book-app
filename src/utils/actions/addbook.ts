'use server'

export default async function addBook(formData: FormData) {
    const book = {
        title: formData.get('title'),
        year: formData.get('year'),
        writer: formData.get('writer'),
        publisher: formData.get('publisher'),
        category: formData.get('category'),
    }

    console.log(book);
}