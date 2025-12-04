// src/settings.js
export const Settings = {
  config: {
    // ★ あなたの Camera Kit API トークン
    // Snap Camera Kit の管理画面から取得してください
    // https://camera-kit.snapchat.com/
    apiToken: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQ1ODEyODU1LCJzdWIiOiIzNzdjNGRjNi02YmZhLTRhYzktYWM5Ni00Yzg0ODkyMTE0ZTN-UFJPRFVDVElPTn4yYWY5ODI5My01OWQwLTQ0MmYtYjg4Mi01YzY2Y2Q1MzlmMjQifQ.dKxE4zpYbM9ih5-7ZNJ6-QG7gBNI4MnrnCCFBpy8lhY",

    // ★ レンズ指定（固定）
    // 使用したいLensのIDとGroup IDを指定してください
    // Lens Studioで公開したLensのIDを取得して設定します
    lensID:  "205d7d5c-e0ba-4a3a-b39e-727bed44880d",
    groupID: "45db19dd-94a5-4a72-86f0-03bb6ed5ef9f",

    // ★ Remote API の Spec（Snapの管理画面のID）
    // Remote APIを使用する場合のみ設定してください
    // 使用しない場合は useRemoteAPI: false に設定
    remoteAPISpecId: "YOUR_REMOTE_API_SPEC_ID_HERE",

    // 既定のリダイレクト先（URLパラメータ ?redirect= で上書き可）
    // Remote APIでマーカー検出時にリダイレクトするURL
    redirectUrl: "https://example.com/",

    // Remote API を有効化
    // true: Remote APIを使用（remoteAPI.jsが必要）
    // false: Remote APIを使用しない（通常のLensのみ）
    useRemoteAPI: false,
  },
  camera: {
    fps: 30,
  },
  recording: {
    recordCaptureRenderTarget: false,
    recordMicAudio: false,
    recordLensAudio: true,  // MP4音声を有効化
  },
};
