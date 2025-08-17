export const subscribeTo = async (payload: {email: string}): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { payload },
        message: 'Subscription successful',
        status: 200
      });
    }, 1000);
  });

};
