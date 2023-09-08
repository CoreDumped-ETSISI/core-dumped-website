import { e as error } from "../../../../chunks/index.js";
const load = async ({ fetch, params }) => {
  if (params.id.length != 24) {
    throw error(404, {
      message: "Not found"
    });
  }
  const response = await fetch("http://localhost:3000/cartas/" + params.id);
  if (response.ok) {
    let data = await response.json();
    return { data };
  } else {
    throw error(response.status, {
      message: response.statusText
    });
  }
};
export {
  load
};
