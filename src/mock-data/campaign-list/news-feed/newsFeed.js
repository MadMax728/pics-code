import * as images from "../../../lib/constants/images";

export const news_feed_campaigns_list = [
  {
    user: {
      id: "1",
      name: "Santosh Shinde",
      image: `${images.campaign1}`,
      isOwner: true,
      // Creator for True and Company for False
      isCreator: true
    },
    title: "Title of campaigns",
    comments: [
      {
        comment_id: 1,
        comment: "This text is an example1",
        user: {
          name: "Sagar",
          id: 1,
          image: `${images.campaign1}`
        },
        date: "01.01.2000"
      },
      {
        comment_id: 2,
        comment: "This text is an example2",
        user: {
          name: "Vaghela",
          id: 2,
          image: `${images.campaign2}`
        },
        date: "02.02.2000"
      },
      {
        comment_id: 3,
        comment: "This text is an example3",
        user: {
          name: "Sagar",
          id: 3,
          image: `${images.campaign3}`
        },
        date: "03.03.2000"
      }
    ],
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
      image: `${images.campaign1}`,
      isOwner: false,
      // Creator for True and Company for False
      isCreator: false
    },
    title: "Title of campaigns",
    comments: [
      {
        comment_id: 1,
        comment: "This text is an example1",
        user: {
          name: "Sagar",
          id: 1,
          image: `${images.campaign1}`
        },
        date: "01.01.2000"
      },
      {
        comment_id: 2,
        comment: "This text is an example2",
        user: {
          name: "Vaghela",
          id: 2,
          image: `${images.campaign2}`
        },
        date: "02.02.2000"
      },
      {
        comment_id: 3,
        comment: "This text is an example3",
        user: {
          name: "Sagar",
          id: 3,
          image: `${images.campaign3}`
        },
        date: "03.03.2000"
      }
    ],
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
      isOwner: false,
      // Creator for True and Company for False
      isCreator: false
    },
    title: "Title of campaigns",
    comments: [
      {
        comment_id: 1,
        comment: "This text is an example1",
        user: {
          name: "Sagar",
          id: 1,
          image: `${images.campaign1}`
        },
        date: "01.01.2000"
      },
      {
        comment_id: 2,
        comment: "This text is an example2",
        user: {
          name: "Vaghela",
          id: 2,
          image: `${images.campaign2}`
        },
        date: "02.02.2000"
      },
      {
        comment_id: 3,
        comment: "This text is an example3",
        user: {
          name: "Sagar",
          id: 3,
          image: `${images.campaign3}`
        },
        date: "03.03.2000"
      }
    ],
    category: "01.01.2000 in Category",
    image: `${images.campaign3}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: false,
    id: 3
  }
];
