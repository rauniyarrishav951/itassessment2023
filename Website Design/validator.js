function validate() {
            var name = document.forms["register"]["name"].value;
            var email = document.forms["register"]["email"].value;
            var subject = document.forms["register"]["subject"].value;
            var message = document.forms["register"]["message"].value;

            // Check if the name field is empty
            if (name == "") {
                alert("Please enter your name.");
                return false;
            }

            // Check if the email field is empty and a valid email format
            if (email == "") {
                alert("Please enter your email address.");
                return false;
            } else {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return false;
                }
            }

            // Check if the subject field is empty
            if (subject == "") {
                alert("Please enter the subject.");
                return false;
            }

            // Check if the message field is empty
            if (message == "") {
                alert("Please enter your message.");
                return false;
            }

            return true; // Allow form submission if all checks pass
        }
 