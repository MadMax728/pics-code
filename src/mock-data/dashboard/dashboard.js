import * as images from "../../lib/constants/images";
import * as videos from "../../lib/constants/videos";

export const dashboardList = [
  {
    inquiryTag: "abcd",
    typeId: "0ca18024-235e-48a5-ac29-681ff84cd3dd",
    userType: "company",
    offers: "Seven",
    endDate: 1544380200,
    createdAt: 1542197653,
    createdBy: "8db96f31-6c47-485a-b239-587bc9bdfc06",
    procedure: "three",
    inquiry: "Ten",
    campaignName: "vishal10.63b3",
    category: "first",
    startDate: 1539109800,
    description: "this is vishal 1 campaign",
    id: "502e4528-997b-449e-81ce-839449cbc94d",
    typeContent: "Video",
    title: "vishal10",
    isOwner: true,
    mediaUrl:
      "https://picstagraph-dev.s3.amazonaws.com/profile/dce029d3ab0a58eeed7101bd2344b446.mp4",
    likeCount: 0,
    commentCount: 22,
    postType: "companyCampaign",
    profileImage:
      "https://picstagraph-dev.s3.us-east-2.amazonaws.com/1542870327787-IMG_0003.JPG",
    isSelfLike: false
  },
  {
    inquiryTag: "abcd",
    typeId: "0787be18-4a8f-4d1b-bb62-cb226c67f27e",
    userType: "company",
    offers: "Seven",
    endDate: 1544380200,
    createdAt: 1542197735,
    createdBy: "8db96f31-6c47-485a-b239-587bc9bdfc06",
    procedure: "three",
    inquiry: "Ten",
    campaignName: "vishal13.9987",
    category: "",
    startDate: 1539109800,
    description: "this is vishal 1 campaign",
    id: "411ccb7b-d39e-4ea3-a717-c75f89e5b2a0",
    typeContent: "Image",
    title: "vishal13",
    isOwner: true,
    mediaUrl:
      "https://picstagraph-dev.s3.amazonaws.com/profile/c201689001abc87c16ecbcc2fa42bb0a.jpeg",
    likeCount: 1,
    commentCount: 3,
    profileImage:
      "https://picstagraph-dev.s3.us-east-2.amazonaws.com/1542870327787-IMG_0003.JPG",
    isSelfLike: false,
    postType: "companyCampaign"
  },
  {
    user: {
      name: "Santosh Shinde",
      id: "3",
      image: `${images.campaign3}`,
      isOwner: false,
      isPrivate: false,
      // Creator for True and Company for False
      type: "company",
      isParticipant: false
    },
    title: "Title of Ads",
    location: "London",
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
    video: `${videos.demo}`,
    mediaType: "Video",
    type: "ad",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: false,
    applications: "2000/2000",
    isSaved: true,
    views: "100",
    clicks: "200",
    budget_spent_per: "80%",
    view_per: "55%",
    runtime_passed_per: "30%",
    total_budget_spent: "100 E",
    remaining_budget: "20 E",
    runtime: "01.01.2000 - 01.01.2000",
    id: 3
  },
  {
    user: {
      name: "Mahesh Gohil",
      id: "4",
      image: `${images.campaign4}`,
      isOwner: false,
      isPrivate: false,
      // Creator for True and Company for False
      type: "company",
      isParticipant: true
    },
    title: "Title of Ads",
    location: "London",
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
    mediaType: "Image",
    type: "ad",
    image: `${images.campaign4}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    isFavorite: false,
    applications: "2000/2000",
    isSaved: true,
    views: "100",
    clicks: "200",
    budget_spent_per: "80%",
    view_per: "55%",
    runtime_passed_per: "30%",
    total_budget_spent: "100 E",
    remaining_budget: "20 E",
    runtime: "01.01.2000 - 01.01.2000",
    id: 4
  },
  {
    category: [
      { categoryName: "Gaming", id: "c4f75d53-72ec-4833-8a81-0cb748fb3343" }
    ],
    commentCount: 0,
    coordinate: 50,
    createdAt: 1542891004333,
    description: "12t test image",
    fileName: "1542890997866-Screenshot_20181016-201430.png",
    id: "67812117-5e4e-4de2-b630-8e5eb76ee8a4",
    imageName: "1542890997866.screenshot.20181016.201430png.1d11",
    isSelfLike: false,
    likeCount: 0,
    mediaUrl:
      "https://picstagraph-dev.s3.amazonaws.com/1542890997866-Screenshot_20181016-201430.png",
    path:
      "https://picstagraph-dev.s3.amazonaws.com/1542890997866-Screenshot_20181016-201430.png",
    postType: "mediapost",
    profileImage:
      "https://picstagraph-dev.s3.us-east-2.amazonaws.com/1542870327787-IMG_0003.JPG",
    title: "12t image",
    typeContent: "image",
    typeImage: "original",
    userId: "8db96f31-6c47-485a-b239-587bc9bdfc06",
    userName: "vishal1"
  },
  {
    category: [
      { categoryName: "Gaming", id: "c4f75d53-72ec-4833-8a81-0cb748fb3343" }
    ],
    commentCount: 0,
    createdAt: 1542900218229,
    description: "my six",
    fileName: "1542900211896-SampleVideo_1280x720_1mb.mp4",
    id: "a41a59c5-9f75-4380-a49c-121a5bee5918",
    isSelfLike: false,
    likeCount: 0,
    mediaUrl:
      "https://picstagraph-dev.s3.amazonaws.com/1542900211896-SampleVideo_1280x720_1mb.mp4",
    path:
      "https://picstagraph-dev.s3.amazonaws.com/1542900211896-SampleVideo_1280x720_1mb.mp4",
    postType: "mediapost",
    profileImage:
      "https://picstagraph-dev.s3.us-east-2.amazonaws.com/1542870327787-IMG_0003.JPG",
    title: "my name is",
    typeContent: "video",
    userId: "8db96f31-6c47-485a-b239-587bc9bdfc06",
    userName: "vishal1",
    videoName: "1542900211896.samplevideo.1280x720.1mbmp4.9426"
  }
];
