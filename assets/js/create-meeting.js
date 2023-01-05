// Function to create meeting ID
    function createMeeting() {
          let meetingId =  'xxxxyxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
          });
          console.log("http://"+ window.location.host + "?meetingId="+ meetingId)
          document.getElementById("copyInput").value = "https://"+ window.location.host + "/meeting.html?meetingId="+ meetingId;
    }

    // Function to copy the link
    function copyFunction() {
      /* Get the text field */
      var copyText = document.getElementById("copyInput");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    }
