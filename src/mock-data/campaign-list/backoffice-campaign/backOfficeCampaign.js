import * as images from "../../../lib/constants/images";

export const backoffice_campaign_list = [
  {
    user: {
      name: "Santosh Shinde",
      id: "1",
      image: `${images.campaign2}`,
      isOwner: false,
      // Creator for True and Company for False
      isCreator: true
    },
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
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign2}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    inquiry: "Custome Work",
    inquiry_tag: "example",
    offer: "Custome Work",
    offer_tag: "example",
    applications: "2000/2000",
    type: "Image",
    start: "01.01.2000",
    end: "10.10.2000",
    target_group: "Male",
    procedure: "Public",
    views: "100",
    clicks: "200",
    isFavorite: false,
    id: 2
  },
  {
    user: {
      name: "Santosh Shinde",
      id: "2",
      image: `${images.campaign3}`,
      isOwner: false,
      // Creator for True and Company for False
      isCreator: false
    },
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
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign3}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    inquiry: "Custome Work",
    inquiry_tag: "example",
    offer: "Custome Work",
    offer_tag: "example",
    applications: "2000/2000",
    type: "Video",
    start: "01.01.2000",
    end: "10.10.2000",
    target_group: "Female",
    procedure: "Public",
    views: "100",
    clicks: "200",
    isFavorite: true,
    id: 3
  },
  {
    user: {
      name: "Santosh Shinde",
      id: "3",
      image: `${images.campaign1}`,
      isOwner: true,
      // Creator for True and Company for False
      isCreator: false
    },
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
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign1}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    inquiry: "Custome Work",
    inquiry_tag: "example",
    offer: "Custome Work",
    offer_tag: "example",
    applications: "2000/2000",
    type: "Video",
    start: "01.01.2000",
    end: "10.10.2000",
    target_group: "Female",
    procedure: "Public",
    views: "100",
    clicks: "200",
    isFavorite: false,
    id: 1
  }
];
