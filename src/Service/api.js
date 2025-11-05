import axios from "axios";

const BASE_URL = "https://www.aplglobalschool.com/api";

/**
 * POST enquiry form data to send-enquiry.php
 * @param {object} formData - The enquiry form data
 * @returns {Promise<object>} - Response from the API
 */
export const postEnquiry = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-enquiry.php`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Optionally handle and format the error
    throw error.response?.data || error;
  }
};

// export const contactEnquiry = async (formData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/contact-enquiry.php`, formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.data.success) {
//       return response.data;
//     } else {
//       throw new Error(response.data.error || "Unknown error");
//     }
//   } catch (error) {
//     throw {
//       error: error?.response?.data?.error || "Something went wrong. Please try again later.",
//     };
//   }
// };

export const contactEnquiry = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/contact-enquiry.php`,
      payload, // sending JSON body
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
        validateStatus: (s) => s >= 200 && s < 500, // let 4xx flow into data handling
      }
    );

    // Accept either shape: { status: "success", message } OR { success: true, message }
    const isOk =
      (typeof data?.status === "string" &&
        data.status.toLowerCase() === "success") ||
      data?.success === true;

    if (!isOk) {
      const msg = data?.message || data?.error || "Unknown error";
      throw new Error(msg);
    }

    // Success: return entire data so caller can read data.message
    return data;
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Something went wrong. Please try again later.";
    throw new Error(msg);
  }
};

export const careersData = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/careers.php`,
      payload, // sending JSON body
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
        validateStatus: (s) => s >= 200 && s < 500, // let 4xx flow into data handling
      }
    );

    // Accept either shape: { status: "success", message } OR { success: true, message }
    const isOk =
      (typeof data?.status === "string" &&
        data.status.toLowerCase() === "success") ||
      data?.success === true;

    if (!isOk) {
      const msg = data?.message || data?.error || "Unknown error";
      throw new Error(msg);
    }

    // Success: return entire data so caller can read data.message
    return data;
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Something went wrong. Please try again later.";
    throw new Error(msg);
  }
};



export const individualData = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/individual.php`,
      payload, // sending JSON body
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
        validateStatus: (s) => s >= 200 && s < 500, // let 4xx flow into data handling
      }
    );

    // Accept either shape: { status: "success", message } OR { success: true, message }
    const isOk =
      (typeof data?.status === "string" &&
        data.status.toLowerCase() === "success") ||
      data?.success === true;

    if (!isOk) {
      const msg = data?.message || data?.error || "Unknown error";
      throw new Error(msg);
    }

    // Success: return entire data so caller can read data.message
    return data;
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Something went wrong. Please try again later.";
    throw new Error(msg);
  }
};

export const InstitutionData = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/institution.php`,
      payload, // sending JSON body
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
        validateStatus: (s) => s >= 200 && s < 500, // let 4xx flow into data handling
      }
    );

    // Accept either shape: { status: "success", message } OR { success: true, message }
    const isOk =
      (typeof data?.status === "string" &&
        data.status.toLowerCase() === "success") ||
      data?.success === true;

    if (!isOk) {
      const msg = data?.message || data?.error || "Unknown error";
      throw new Error(msg);
    }

    // Success: return entire data so caller can read data.message
    return data;
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Something went wrong. Please try again later.";
    throw new Error(msg);
  }
};


