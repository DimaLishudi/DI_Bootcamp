export const logger = (store) => (next) => (action) => {
  console.log("prev state:", store.getState());
  console.log("action:", action);
  console.log("before")
  const retAction = next();
  console.log("after state:", store.getState);
  console.log("retAction:", retAction);
}
