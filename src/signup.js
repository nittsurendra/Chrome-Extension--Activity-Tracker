const options = document.getElementById("submit");
options.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { email, password };

  try {
    chrome.storage.local.get("users", (data) => {
      if (chrome.runtime.lastError) {
        console.error(
          "Error getting data from storage:",
          chrome.runtime.lastError
        );
        console.log({ success: false, message: "Error accessing storage" });
        return;
      }

      let existingData = data.users || []; // Handle potential missing data

      existingData.push(user);

      chrome.storage.local.set({ users: existingData }, () => {
        if (chrome.runtime.lastError) {
          console.error("Error storing user data:", chrome.runtime.lastError);
          console.log({ success: false, message: "Error saving data" });
          return;
        }

        console.log("User data added successfully!");
        console.log({ success: true, message: "User data saved" });
        window.location.href = 'popup.html';
      });
    });
  } catch (error) {
    console.error("Error storing user data:", error);
    console.log({ success: false, message: "An unexpected error occurred" });
  }
});
