import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -t8yD2ynniC6l8FQBsb4wSl6bY8Cw73VNE7mqLJVk9ilgyQLoGhGTxkjEwvW0gT7fN1YBM35Ocpj4ZprgTO3-ZrQ64-D_qw1Q2oujFe7EOx3zrjIDJjLRDpCVJLTX3Yx",
  },
});
