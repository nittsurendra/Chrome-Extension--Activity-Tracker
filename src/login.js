
    const submitButton = document.getElementById("submit"); 
  
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value; 
      const password = document.getElementById('password').value;
  
      chrome.storage.local.get('users', (data) => {
      if (chrome.runtime.lastError) {
        console.error('Error getting data from storage:', chrome.runtime.lastError);
        alert({ success: false, message: 'Error accessing storage' });
        return;
      }

      const existingData = data.users || []; // Handle potential missing data

      if (!existingData.length) {
        alert({ success: false, message: 'No users found in storage' });
        return;
      }

      const matchingUser = existingData.find(user => user.email === email);

      if (matchingUser) {
        alert('User found with email:', email);
        // Implement secure password verification (NOT storing passwords in plain text)
        console.warn('Plaintext password storage is insecure. Implement secure hashing!');
        if (password === matchingUser.password) { // Placeholder comparison (insecure)
          alert('Login successful!');
          alert({ success: true, message: 'Login successful' });
          window.location.href = 'popup.html';
          // Consider setting a flag for successful login or redirecting to a different page
        } else {
          alert('Invalid password.');
          alert({ success: false, message: 'Invalid password' });
          
        }
      } else {
        alert('No user found with email:', email);
        alert({ success: false, message: 'Email not found' });
      }
    });
    });