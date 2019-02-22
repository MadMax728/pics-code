import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";

const tabs = [
  {
    id: "1",
    index: 1,
    title: Translations.message_module.type.subscribed,
    icon: "",
    height: 21,
    width: 21,
    image: images.grey_person,
    value: Translations.message_module.type.subscribed
  },
  {
    id: "2",
    index: 2,
    title: Translations.message_module.type.unknown,
    icon: "",
    height: 21,
    width: 21,
    image: images.help,
    value: Translations.message_module.type.unknown
  },
  // {
  //     id: '3',
  //     index: 3,
  //     title: Translations.message_module.type.like_you,
  //     icon: '',
  //     height: 21,
  //     width: 21,
  //     image: images.white_heart_bordered,
  //     value: Translations.message_module.type.like_you,
  // },
  {
    id: "4",
    index: 4,
    title: Translations.message_module.type.companies,
    icon: "",
    height: 21,
    width: 21,
    image: images.comapny,
    value: Translations.message_module.type.companies
  }
];
const MLeftTabs = ({ handleTypeClick, activeIndex }) => {
  const mTabs = () => {
    return tabs.map(tab => (
      <div
        role="button"
        key={tab.id}
        tabIndex={tab.index}
        onKeyDown={handleTypeClick}
        className={classnames("menu-item", { active: activeIndex === tab.id })}
        onClick={handleTypeClick}
        data-id={tab.id}
        data-value={tab.value}
      >
        <img
          src={tab.image}
          alt={"user"}
          height={tab.height}
          width={tab.width}
        />
        <br />
        <div className="message_menu_title">{tab.title}</div>
      </div>
    ));
  };
  return <div className="messages-menu">{mTabs()}</div>;
};

MLeftTabs.propTypes = {
  activeIndex: PropTypes.string,
  handleTypeClick: PropTypes.func.isRequired
};

MLeftTabs.defaultProps = {
  activeIndex: 1
};

export default MLeftTabs;
