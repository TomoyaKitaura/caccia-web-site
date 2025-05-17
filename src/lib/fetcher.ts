/**
 * fetchラッパー
 * .clinerulesに従い、直接fetchを使用せずにこのラッパーを使用する
 */

type FetchOptions = RequestInit & {
  baseUrl?: string;
};

/**
 * HTTP GETリクエストを実行する
 * @param url - リクエスト先のURL
 * @param options - フェッチオプション
 * @returns レスポンスデータ
 */
export async function getAsync<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { baseUrl, ...fetchOptions } = options;
  const fullUrl = baseUrl ? `${baseUrl}${url}` : url;
  
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...fetchOptions,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * HTTP POSTリクエストを実行する
 * @param url - リクエスト先のURL
 * @param data - 送信するデータ
 * @param options - フェッチオプション
 * @returns レスポンスデータ
 */
export async function postAsync<T, U = unknown>(
  url: string,
  data: U,
  options: FetchOptions = {}
): Promise<T> {
  const { baseUrl, ...fetchOptions } = options;
  const fullUrl = baseUrl ? `${baseUrl}${url}` : url;
  
  const response = await fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(data),
    ...fetchOptions,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * HTTP PUTリクエストを実行する
 * @param url - リクエスト先のURL
 * @param data - 送信するデータ
 * @param options - フェッチオプション
 * @returns レスポンスデータ
 */
export async function putAsync<T, U = unknown>(
  url: string,
  data: U,
  options: FetchOptions = {}
): Promise<T> {
  const { baseUrl, ...fetchOptions } = options;
  const fullUrl = baseUrl ? `${baseUrl}${url}` : url;
  
  const response = await fetch(fullUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(data),
    ...fetchOptions,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * HTTP DELETEリクエストを実行する
 * @param url - リクエスト先のURL
 * @param options - フェッチオプション
 * @returns レスポンスデータ
 */
export async function deleteAsync<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { baseUrl, ...fetchOptions } = options;
  const fullUrl = baseUrl ? `${baseUrl}${url}` : url;
  
  const response = await fetch(fullUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...fetchOptions,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
