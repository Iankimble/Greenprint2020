// retrieve JSON blog data from Strapi server

export const getBlogContent = () => {
  return fetch(`${process.env.REACT_APP_BUDGET_APP_BLOG}/finance-blogs`).then(
    (res) => {
      if (res.status >= 400) {
        throw new Error("could not return data");
      }
      return res.json();
    }
  );
};

export const getSinglePost = (postId) => {
  return fetch(
    `${process.env.REACT_APP_BUDGET_APP_BLOG}/finance-blogs/${postId}`
  ).then((res) => {
    if (res.status >= 400) {
      throw new Error("could not return data");
    }
    return res.json();
  });
};

export const contactUs = (msg) => {
  console.log(msg);
  return fetch(`${process.env.REACT_APP_BUDGET_APP_SERVER}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msg),
  });
};

// Sends user budget report to users email
export const sendReportToUser = (data) => {
  fetch(`${process.env.REACT_APP_BUDGET_APP_SERVER}/sendtouser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(data);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Send user report and user data to DB
export const sendReportToDB = (data) => {
  fetch(`${process.env.REACT_APP_BUDGET_APP_SERVER}/sendtodb`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
