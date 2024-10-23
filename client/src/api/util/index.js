import axios from "axios";

export const uploadImage =async form =>{

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        form
      );

      return data.data.display_url
}