import { paths } from "@/lib/api/v1";
import createFetchClient, { type Middleware } from "openapi-fetch";
import createClient from "openapi-react-query";
import { env } from "@/configs/env";

const myMiddleware: Middleware = {
  async onRequest({ request }) {
    // Ensure every request carries the current UI language
    try {
      const lang =
        typeof window !== "undefined"
          ? window.localStorage.getItem("app_language") || "fa"
          : "fa";
      request.headers.set("Accept-Language", lang);
    } catch {
      // no-op: default headers are fine
    }

    if (
      (request.method === "PUT" || request.method === "PATCH") &&
      request.headers.get("content-type")?.includes("multipart/form-data")
    ) {
      const formData = await request.formData();

      formData.append("_method", request.method);

      request.headers.delete("content-type");

      return new Request(request.url, {
        method: "POST",
        headers: request.headers,
        body: formData,
      });
    }

    return request;
  },
  async onResponse({ response }) {
    if (response.status === 401) {
      // do something
    }

    if (response.status === 403) {
      // do something
    }

    if (response.status === 404) {
      // do something
    }

    if (response.status === 500) {
      const serverResponse = await response.json();

      return new Response(JSON.stringify({ ...serverResponse, status: 500 }), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }

    return response;
  },
};

export const useFetch = () => {
  const fetchClient = createFetchClient<paths>({
    baseUrl: env.API_URL,
    headers: {
      Accept: "application/json",
    },
  });

  fetchClient.use(myMiddleware);

  return createClient(fetchClient);
};
