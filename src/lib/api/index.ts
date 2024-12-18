export const clientFetch = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  console.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`Error fetching ${url}`);
  }

  const json = await response.json();
  return json as T;
};
