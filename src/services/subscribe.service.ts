type SubscribeResponse = {
  data: { payload: { email: string } };
  message: string;
  status: number;
};

export const subscribeTo = async (
  payload: { email: string }
): Promise<SubscribeResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { payload },
        message: "Subscription successful",
        status: 200,
      });
    }, 1000);
  });
};
