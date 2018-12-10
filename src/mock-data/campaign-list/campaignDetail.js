import * as images from "../../lib/constants/images";
import * as videos from "../../lib/constants/videos";

export const campaign_detail  = {
    user: {
      name: "Santosh Shinde",
      id: "1",
      image: `${images.campaign1}`,
      isOwner: true,
      isPrivate: false,
      // Creator for True and Company for False
      type: "company",
      isParticipant: false
    },
    title: "Title of campaigns",
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
    image: `${images.campaign2}`,
    video: `${videos.demo}`,
    mediaType: "video",
    type: "campaign",
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
    id: 1
  }