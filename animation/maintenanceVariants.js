
export const vMaintenance = {
  offscreen: {
      opacity: 0,
      y: 200
  },
  onscreen: {
      opacity: 1,
      y: 0,
      transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
      }
  }
}