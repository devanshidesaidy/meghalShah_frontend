import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.digitalyagnesh.com/api",
  // baseURL: "http://localhost:5000/api",
});

export const addContactData = async (formData) => {
  try {
    const { data } = await api.post("/msContact", formData);
    return data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

// React Query hook to use in the form
export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addContactData,
    onSuccess: () => {
      queryClient.invalidateQueries(["contactData"]); // Refresh contact list
    },
  });
};