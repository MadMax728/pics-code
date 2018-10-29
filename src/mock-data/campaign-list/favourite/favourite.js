import * as images from "../../../lib/constants/images";

export const favourite_campaigns_list = [
  {
    user: {
      id: "1",
      name: "Santosh Shinde",
      image: `${images.campaign2}`,
      isOwner: true
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign4}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: false,
    id: 1
  },
  {
    user: {
      id: "2",
      name: "Santosh Shinde",
      image: `${images.campaign3}`,
      isOwner: false
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign2}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: true,
    id: 2
  },
  {
    user: {
      id: "3",
      name: "Santosh Shinde",
      image: `${images.campaign1}`,
      isOwner: false
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign4}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: false,
    id: 3
  }
];
