import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { MediaCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../.../../../../../lib/utils/helpers";

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

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Image"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
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
    let { imageList, form } = this.state;
    imageList = search(imageList,"userName", form.search);
    return imageList.map(image => {
      return (
        <div key={image.id}>
          {image.postType === enumerations.contentTypes.mediaPost &&  
          image.typeContent &&
          image.typeContent.toLowerCase() === enumerations.mediaTypes.image &&
          (
            <MediaCard item={image} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} handleRemove={this.handleRemove} />
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

  render() {
    let { imageList } = this.state;
    const { isLoading, form } = this.state;
    const { reportedContentData } = this.props;
    imageList = search(imageList,"userName", form.search);
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {imageList && this.renderImageList()}
          {!imageList && isLoading && <CampaignLoading />}
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
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics
};

ImagesBOPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesBOPage);