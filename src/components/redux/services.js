const BASE_URL = "https://648e04be2de8d0ea11e87e41.mockapi.io";

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContacts = async (data) => {
  const responce = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });

  return await responce.json();
};

export const deleteContacts = async (id) => {
  const responce = await fetch(`${BASE_URL}/contacts/${id}`);
  return await responce.json();
};
