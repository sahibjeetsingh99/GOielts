import React, { useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk-rg';

const SpeakingSession = ({ route }) => {
  const { speakerNumber } = route.params;
  const agoraViewRef = useRef(null);
  const agoraClient = useRef(null);

  useEffect(() => {
    // Initialize the Agora client
    agoraClient.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

    // Generate a unique channel name for each speaker
    const channelName = `speaker_${speakerNumber}`;

    // Join the channel
    agoraClient.current.init('30bf4a59fa084bb19ffa78f11573e3ec', () => {
      agoraClient.current.join(null, channelName, null, (uid) => {
        // Create a local stream
        const localStream = AgoraRTC.createStream({
          video: true,
          audio: true,
        });

        // Initialize the local stream
        localStream.init(() => {
          // Publish the local stream
          agoraClient.current.publish(localStream);

          // Play the local stream in the AgoraView
          localStream.play(agoraViewRef.current.id);
        });
      });
    });

    return () => {
      // Leave the channel and clean up resources
      agoraClient.current.leave(() => {
        agoraClient.current.unpublish();
        agoraClient.current.localStream.close();
        agoraClient.current.client.close();
      });
    };
  }, [speakerNumber]);

  return (
    <div>
      <h1>Speaking Session with Native Speaker {speakerNumber}</h1>
      <div id="agoraView" ref={agoraViewRef} />
    </div>
  );
};

export default SpeakingSession;
