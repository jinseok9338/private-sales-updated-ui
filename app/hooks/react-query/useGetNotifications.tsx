import { useQuery } from "@tanstack/react-query";

export const getNotificationkey = "getNotifications";
const useGetNotifications = () => {
  return useQuery({
    queryKey: [getNotificationkey],
    queryFn: async () => {
      const res = await fetch(`app/mocks/notification.json`);
      const notification = await res.json();
      return notification as {
        title: string;
        startDate: string;
        endDate: string;
        available: boolean;
      };
    },
  });
};

export default useGetNotifications;
