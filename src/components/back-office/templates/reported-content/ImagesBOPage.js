import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReportedContent, getBackOfficeReportedStatistics, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { MediaCard } from "../../../misc";

import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class ImagesBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
    };
  }

  render() {
    let { imageList } = this.state;
    const { isLoading } = this.state;
    const { form } = this.state;
    const { reportedContentData, searchData } = this.props;
    imageList = search(imageList,"userName", form.search || searchData.searchKeyword);
    
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {imageList && this.renderImageList()}
          {!imageList && isLoading && <CampaignLoading />}
          {imageList && imageList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.images}`} 
            handleEvent={this.handleReported} 
            all={reportedContentData.ImageStatistics? reportedContentData.ImageStatistics.all : 0} 
            outstanding={reportedContentData.ImageStatistics? reportedContentData.ImageStatistics.outstanding : 0}
            processed={reportedContentData.ImageStatistics? reportedContentData.ImageStatistics.processed : 0} 
            notProcessed={reportedContentData.ImageStatistics? reportedContentData.ImageStatistics.notProcessed : 0}
          />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Image"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Image) {
        this.setState({
          imageList: this.props.reportedContentData.Image,
          isLoading: this.props.reportedContentData.isLoading
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.ImageStatistics) {
        // success
      }
    });
  }

  handleReported = (e) => {
    let data;
    if (e.target.id === "All")
    {
      data ={
        type: "get",
        reportContent: "Image"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "Image",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }

  handleRemove = (data) => {
    const { imageList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({imageList: imageList.filter(e => e.id !== data)});
    }
  }

  renderImageList = () => {
    let { imageList } = this.state;
    const { form } = this.state;
    const { searchData, handleModalInfoDetailsCallbackShow } = this.props;
    imageList = search(imageList,"userName", form.search || searchData.searchKeyword);
    return imageList.map(image => {
      return (
        <div key={image.id}>
          {image.postType === enumerations.contentTypes.mediaPost &&  
          image.typeContent &&
          image.typeContent.toLowerCase() === enumerations.mediaTypes.image &&
          (
            <MediaCard item={image} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow} handleRemove={this.handleRemove} />
          )}
        </div>
      );
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "Image"
      }
      this.setState({isLoading: true});
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  }
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics,
  getSearch
};

ImagesBOPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  getSearch: PropTypes.func.isRequired,
  searchData: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesBOPage);