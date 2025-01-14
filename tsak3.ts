const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  id: number;
  email: string;
}

const getData = async (url: string): Promise<Comment[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Не удалось получить данные:", error);
    return [];
  }
};

getData(COMMENTS_URL)
  .then((data) => {
    data.forEach(({ id, email }) => {
      console.log(`ID: ${id}, Email: ${email}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка обработки данных:", error);
  });
