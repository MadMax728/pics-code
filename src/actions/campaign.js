import * as types from "../lib/constants/actionTypes";
import * as campaignService from "../services/campaignService";
import { logger } from "../loggers";
import { Auth } from "../auth";
// remove when no need
import { campaigns_list } from "../mock-data";

const getCampaignsStarted = () => ({
  type: types.GET_CAMPAIGNS_STARTED
});

const getCampaignsSucceeded = data => ({
  type: types.GET_CAMPAIGNS_SUCCEEDED,
  payload: data
});

const getCampaignsFailed = error => ({
  type: types.GET_CAMPAIGNS_FAILED,
  payload: error,
  error: true
});

export const getCampaigns = prop => {
  return dispatch => {
    dispatch(getCampaignsStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return campaignService[prop](params).then(
      res => {
        dispatch(getCampaignsSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getCampaignsFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          prop === "getCampaigns"
            ? getCampaignsSucceeded(campaigns_list)
            : prop === "getCompanyCampaigns"
              ? getCampaignsSucceeded(
                  campaigns_list.filter(c => c.user.isCreator === false)
                )
              : prop === "getCreatorCampaigns"
                ? getCampaignsSucceeded(
                    campaigns_list.filter(c => c.user.isCreator === true)
                  )
                : prop === "getParticipantCampaigns"
                  ? getCampaignsSucceeded(
                      campaigns_list.filter(c => c.user.isParticipant === true)
                    )
                  : prop === "getExploreCampaigns"
                    ? getCampaignsSucceeded(
                        campaigns_list.filter(c => c.isExplore === true)
                      )
                    : prop === "getParticipantsCampaigns"
                      ? getCampaignsSucceeded(
                          campaigns_list.filter(
                            c => c.user.isParticipant === true
                          )
                        )
                      : prop === "getNewsFeedCampaigns"
                        ? getCampaignsSucceeded(campaigns_list)
                        : prop === "getUserProfileCampaigns"
                          ? getCampaignsSucceeded(
                              campaigns_list.filter(
                                c => c.user.isParticipant === true
                              )
                            )
                          : prop === "getSavedCampaigns" &&
                            getCampaignsSucceeded(
                              campaigns_list.filter(c => c.isSaved === true)
                            )
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
