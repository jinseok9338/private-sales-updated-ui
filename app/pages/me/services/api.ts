import API from "~/api/ky";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const logoutMe = async () => {
  await API.post("api/auth/logout", {}).json();
};

const getMe = async () => {
  await delay(200);
  return {
    success: true,
    data: {
      email: "gildong@anchors-biz.com",
      name: "서진석",
      profileImage: "https://picsum.photos/200/300",
      address: "서울특별시 강남구 테헤란로 14길 6 남도빌딩 2층",
      phoneNumber: "01012345678",
      zoneCode: "12345",
    },
  };
};

export { logoutMe, getMe };
