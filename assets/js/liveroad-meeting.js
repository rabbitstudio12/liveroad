var script = document.createElement("script");
  script.type = "text/javascript";
  script.addEventListener("load", function (event) {

    const url = new URLSearchParams(window.location.search);

    const meeting = new VideoSDKMeeting();
    
    const config = {
      name: "Happy Client",
      apiKey: "3846ebf9-adad-4605-94e1-baca77eb9f70", 
      meetingId: url.get("meetingId"), // Get meeting id from params.
      redirectOnLeave: "https://liveroad.jimudevproland.repl.co/",
      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      chatEnabled: true,
      raiseHandEnabled: true,
      screenShareEnabled: true,
      whiteboardEnabled: true,
      recording: {
        enabled: true,
        webhookUrl: "https://www.videosdk.live/callback",
        // awsDirPath: `/meeting-recordings/${meetingId}/`, // Pass it only after configuring your S3 Bucket credentials on Video SDK dashboard
        autoStart: false,
        theme: "LIGHT", // DARK || LIGHT || DEFAULT

        layout: {
          type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
          priority: "PIN", // "SPEAKER" | "PIN",
          gridSize: 3,
        },
      },
      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Starting LIVEROAD...", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },
      branding: {
        enabled: true,
        // This is your logo URL! Simply insert your logo link here!
        logoURL: "https://liveroad.devprolandteam.repl.co/img/logo.png",
        name: "L I V E R O A D",
        poweredBy: false,
      },
      theme: "LIGHT", // DARK || LIGHT || DEFAULT
      waitingScreen: {
        imageUrl: "https://liveroad.devprolandteam.repl.co/img/logo.png",
        text: "Connecting to the meeting...",
      },
      leftScreen: {
        actionButton: {
          label: "LIVEROAD",
          href: "https://liveroad.devprolandteam.repl.co/",
        },
        rejoinButtonEnabled: true,
      },
      hls: {
        enabled: true,
        autoStart: false,
        theme: "DARK", // DARK || LIGHT || DEFAULT
      },
      permissions: {
        askToJoin: false,
        toggleParticipantWebcam: false,
        toggleParticipantMic: false,
        toggleParticipantScreenshare: false,
        pin: true,
        removeParticipant: true,
        endMeeting: true,
        toggleRecording: true,
        toggleLivestream: true,
        toggleParticipantMode: true,
        toggleHls: true,
        canCreatePoll: true,
        changeLayout: true,
        drawOnWhiteboard: true,
        toggleWhiteboard: true,
      },
      debug: true, // false
      mode: "CONFERENCE", // VIEWER || CONFERENCE
      layout: {
        type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
        priority: "PIN", // "SPEAKER" | "PIN",
        gridSize: 3,
      },
      livestream: {
        autoStart: true,
        enabled: true,
        theme: "LIGHT", // DARK || LIGHT || DEFAULT
      },
      
    };
    
    meeting.init(config);
  });

  script.src = "https://sdk.videosdk.live/rtc-js-prebuilt/0.3.23/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
