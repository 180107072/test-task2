export const drowdown = {
  open: (height = 1000) => ({
    clipPath: `circle(${height / 5}px at 104px 0px)`,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
  closed: {
    clipPath: "circle(0px at 104px 0px)",
  },
};
