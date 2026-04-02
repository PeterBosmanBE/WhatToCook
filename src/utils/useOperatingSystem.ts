const userAgent = navigator.userAgent;

export function useOperatingSystem(): string {
  if (userAgent.indexOf("Win") !== -1) {
    console.log("Windows")
    console.log(userAgent)
    return "Win";
  } else if (userAgent.indexOf("Linux") !== -1) {
    console.log("Linux")
    return "Linux";
  } else if (userAgent.indexOf("Mac") !== -1) {
    console.log("Mac")
    return "Mac";
  }
  console.log("Unknown")
  return "Unknown";
}